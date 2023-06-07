package com.example.servise;

import java.util.Set;

import com.example.entity.Quize.UserResult;

public interface UserResultService 
{
	public UserResult saveUserResult(UserResult UserResult);
	public Set<UserResult> getUserResult();
	public Set<UserResult> getResultByUser(String user);
	public Set<UserResult> getResultByQuiz(String quiz);
}
