package com.example.servise;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.UserInfo;
import com.example.entity.UserRole;
import com.example.repo.RoleRepo;
import com.example.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	@Autowired
	private RoleRepo roleRepo;
	
	@Override
	public UserInfo creteUser(UserInfo user, Set<UserRole> userRoles) throws Exception{

		 UserInfo local=this.userRepo.findByUsername(user.getUsername());
		 if (local!=null)
		 {
			 System.out.println("user is Already there !!");
			 throw new Exception("User Already Present");
			 
		 }else
		 {
			 for(UserRole ur:userRoles )
			 {
				 roleRepo.save(ur.getRole());
			 }
			 user.getUserRole().addAll(userRoles);
			 local=this.userRepo.save(user);
			 
		 }
		
		return local;
	}
// 	getting user by username
	@Override
	public UserInfo getUser(String username) {

		
		return this.userRepo.findByUsername(username);
	}
	@Override
	public String deleteById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
