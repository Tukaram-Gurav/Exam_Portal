package com.example.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Quize.UserResult;

public interface UserResultRepo extends JpaRepository<UserResult, Long>
{

	public Set<UserResult> findByUser(String user);
	public Set<UserResult> findByQuiz(String quiz);
}
