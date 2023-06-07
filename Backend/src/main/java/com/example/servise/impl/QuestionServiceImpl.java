package com.example.servise.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Quize.Question;
import com.example.entity.Quize.Quize;
import com.example.repo.QuestionRepo;
import com.example.servise.QuestionService;
@Service
public class QuestionServiceImpl implements QuestionService
{	@Autowired
	private QuestionRepo questionRepo;

	@Override
	public Question addQuestion(Question Question) {
		// TODO Auto-generated method stub
		return this.questionRepo.save(Question);
	}

	@Override
	public Question updateQuestion(Question Question) {
		// TODO Auto-generated method stub
		return this.questionRepo.save(Question);
	}

	@Override
	public Set<Question> getQuestions() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.questionRepo.findAll());
	}

	@Override
	public Question getQuestion(Long id) {
		// TODO Auto-generated method stub
		return this.questionRepo.findById(id).get();
	}

	@Override
	public Set<Question> getQuestionByQuiz(Quize Quize) {
		// TODO Auto-generated method stub
		return this.questionRepo.findByQuiz(Quize);
	}
	@Override
	public void deleteQuestion(Long qid) {
		// TODO Auto-generated method stub
//		Question question=new Question();
//		question.setQueid(qid);
//		this.questionRepo.delete(question);
		this.questionRepo.deleteById(qid);
		
	}

	@Override
	public Question get(Long qid) {
		// TODO Auto-generated method stub
		return this.questionRepo.getOne(qid);
	}

	

}
