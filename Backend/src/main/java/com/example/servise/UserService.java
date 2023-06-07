package com.example.servise;

import java.util.Set;

import com.example.entity.UserInfo;
import com.example.entity.UserRole;

public interface UserService {


//	creating user
	public UserInfo creteUser(UserInfo user, Set<UserRole> userRole) throws Exception;
	
//	get user by username
	public UserInfo getUser(String username);

	public String deleteById(Long id);
}
