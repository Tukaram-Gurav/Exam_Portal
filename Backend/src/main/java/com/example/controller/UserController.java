package com.example.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Role;
import com.example.entity.UserInfo;
import com.example.entity.UserRole;
import com.example.servise.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	// for creating user
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/")
	public UserInfo createUser(@RequestBody UserInfo userInfo) throws Exception {
		
		
		userInfo.setProfile("default.jpg");
		userInfo.setPassword(this.bCryptPasswordEncoder.encode(userInfo.getPassword()));
		
		Set<UserRole> roles = new HashSet<>();
		Role role = new Role();
		role.setRolId(12L);
		role.setRoleName("NORMAL");
		
		
		UserRole userRole = new UserRole();
		userRole.setUserInfo(userInfo);
		userRole.setRole(role);
		 
		roles.add(userRole);
		
		
		
		return this.userService.creteUser(userInfo,roles );
		
	}
	
	@GetMapping("/{username}")
	public UserInfo getUser(@PathVariable("username") String username) {
		
		return this.userService.getUser(username);
		
	}
	
	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable("id") Long id) {
		
		return userService.deleteById(id);
	}

}
