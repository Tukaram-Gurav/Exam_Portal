package com.example.controller;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Quize.UserResult;
import com.example.servise.impl.UserResultIMPL;

@RestController
@CrossOrigin("*")
@RequestMapping("/result")
public class UserResultController 
{
	@Autowired
	private UserResultIMPL UserResultIMPL;
	@GetMapping("/")
	public Set<UserResult> getAllResults()
	{
		
		return this.UserResultIMPL.getUserResult();
		
	}
	
	@GetMapping("/{user}")
	public Set<UserResult> getResultByUser(@PathVariable("user")String user )
	{
		System.out.println("User Info"+user);
		return this.UserResultIMPL.getResultByUser(user.trim());
		
	}
	@GetMapping("/byquiz/{quiz}")
	public Set<UserResult> getResultByQuiz(@PathVariable("quiz")String quiz )
	{
		System.out.println("User Info"+quiz);
		return this.UserResultIMPL.getResultByQuiz(quiz.trim());
		
	}

}
