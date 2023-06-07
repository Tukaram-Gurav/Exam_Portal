package com.example.controller;

import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.config.JwtUtil;
import com.example.entity.JwtRequest;
import com.example.entity.JwtResponce;
import com.example.entity.UserInfo;
import com.example.servise.UserDetailServiceImpl;

@RestController
@CrossOrigin("*")
public class AuthenticateController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailServiceImpl detailServiceImpl;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	//generate token
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		 
		try {
			authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());
			
			
		} catch (UsernameNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new Exception("User Not Found"); 
		}
		
		//authenticate
		
		UserDetails userDetails = this.detailServiceImpl.loadUserByUsername(jwtRequest.getUsername());
		String token = this.jwtUtil.generateToken(userDetails);
		
		return ResponseEntity.ok(new JwtResponce(token));
	}
	
	private void authenticate(String username,String password) throws Exception  {
		
		try {
			
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (DisabledException e) {

			throw new Exception("User Disable"+e.getMessage());
				
		}catch (BadCredentialsException e) {

			throw new Exception("Invalide credential"+e.getMessage());
		}
		
	}
	
	
	//Getting Current User
	
	@GetMapping("/current-user")
	public UserInfo getCurrentUser(Principal p)
	{
		return ((UserInfo) this.detailServiceImpl.loadUserByUsername(p.getName()));
	}
}
