package com.example.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.servise.UserDetailServiceImpl;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{

	@Autowired
	private UserDetailServiceImpl userDetailService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException
			 {
		
	final String requestTokenHeader  = request.getHeader("Authorization");
	System.out.println(requestTokenHeader);
	String username = null;
	String jwtToken = null;
	
	if(requestTokenHeader !=null && requestTokenHeader.startsWith("Bearer "))
	{
			jwtToken = requestTokenHeader.substring(7);
			username = this.jwtUtil.extractUsername(jwtToken);
		
	}else {
		System.out.println("Invalid token , not start with Bearer string");
	}
	//validate
	if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
		final UserDetails userDetails = this.userDetailService.loadUserByUsername(username);
		if(this.jwtUtil.validateToken(jwtToken, userDetails)) {
			//token is valid
			UsernamePasswordAuthenticationToken usernamePasswordAuthentication = new 
					UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
			
			usernamePasswordAuthentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
			
			SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthentication);
			
		}
	}else {
		System.out.println("Token is not valid");
	}
	
		filterChain.doFilter(request, response);  
	
	}
	

}
