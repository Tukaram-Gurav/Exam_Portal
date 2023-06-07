package com.example.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Quize.Question;
import com.example.entity.Quize.Quize;

public interface QuestionRepo extends JpaRepository<Question, Long> 
{

	Set<Question> findByQuiz(Quize quize);

	

}
