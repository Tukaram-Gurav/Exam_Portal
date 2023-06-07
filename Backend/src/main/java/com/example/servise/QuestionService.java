package com.example.servise;

import java.util.Set;

import com.example.entity.Quize.*;

public interface QuestionService
{
    public Question addQuestion(Question Question);
	
	public Question updateQuestion(Question Question);
	
	public Set<Question> getQuestions();
	
	public Question getQuestion(Long id);
	
	public Set<Question> getQuestionByQuiz(Quize Quize);
	
	public void deleteQuestion(Long qid);
	
	public Question get(Long qid);

}
