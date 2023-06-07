package com.example.servise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.example.entity.UserInfo;
import com.example.repo.UserRepo;

@Component
public class UserDetailServiceImpl implements UserDetailsService{

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		UserInfo user= this.userRepo.findByUsername(username);
		if(user == null) {
			System.out.println("user Not Found");
			throw new UsernameNotFoundException("No user Found !!");
		}
		
		return user;
	}

}
