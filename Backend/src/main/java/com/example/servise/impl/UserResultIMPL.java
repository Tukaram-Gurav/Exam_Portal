package com.example.servise.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Quize.UserResult;
import com.example.repo.UserResultRepo;
import com.example.servise.UserResultService;
@Service
public class UserResultIMPL implements UserResultService 
{	@Autowired
   private UserResultRepo userResultRepo;
	@Override
	public UserResult saveUserResult(UserResult UserResult) {
		
		return this.userResultRepo.save(UserResult);
	}

	@Override
	public Set<UserResult> getUserResult() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(this.userResultRepo.findAll());
	}

	@Override
	public Set<UserResult> getResultByUser(String user) {
		// TODO Auto-generated method stub
		return   new LinkedHashSet<>( this.userResultRepo.findByUser(user));
	}

	@Override
	public Set<UserResult> getResultByQuiz(String quiz) {
		// TODO Auto-generated method stub
		return   new LinkedHashSet<>( this.userResultRepo.findByQuiz(quiz));
	}
	

}
