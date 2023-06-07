package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.UserInfo;

public interface UserRepo extends JpaRepository<UserInfo, Long>{

	
	public UserInfo findByUsername(String username);
	
	
}
