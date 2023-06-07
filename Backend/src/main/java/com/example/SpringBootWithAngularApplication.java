package com.example;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.entity.Role;
import com.example.entity.UserInfo;
import com.example.entity.UserRole;
import com.example.servise.UserService;

@SpringBootApplication
public class SpringBootWithAngularApplication implements CommandLineRunner{

	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public static void main(String[] args){
		SpringApplication.run(SpringBootWithAngularApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		System.out.println("LETS GO..........");
//		
//		UserInfo userInfo = new UserInfo();
//		userInfo.setFirstName("Tukaram");
//		userInfo.setLastName("Gurav");
//		userInfo.setUsername("Tuka9665");
//		userInfo.setPassword(this.bCryptPasswordEncoder.encode("tuka123"));      
//		userInfo.setEmail("Tuka9665@gmail.com");
//		 
//		
//		Role role = new Role();
//		
//		role.setRolId(11L);
//		role.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet =new HashSet<>();
//		
//		UserRole userRole = new UserRole();
//		userRole.setRole(role);
//		userRole.setUserInfo(userInfo);
//		
//		 
//		userRoleSet.add(userRole);
//		
//		UserInfo info = this.userService.creteUser(userInfo, userRoleSet);
//		System.out.println(info.getUsername());
//		
//		
		
	}

}
