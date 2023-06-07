package com.example.servise.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Quize.Category;
import com.example.entity.Quize.Quize;
import com.example.repo.QuizRepo;
import com.example.servise.QuizService;
@Service
public class QuizServiceImpl implements QuizService
{	@Autowired
	private QuizRepo quizRepo;

	@Override
	public Quize addQuize(Quize Quize) {
		// TODO Auto-generated method stub
		return this.quizRepo.save(Quize);
	}

	@Override
	public Quize updateQuize(Quize Quize) {
		// TODO Auto-generated method stub
		return this.quizRepo.save(Quize);
	}

	@Override
	public Set<Quize> getQuizes() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.quizRepo.findAll());
	}

	@Override
	public Quize getQuize(Long id) {
		// TODO Auto-generated method stub
		return this.quizRepo.findById(id).get();
	}

	@Override
	public void deleteById(Long cid) {
		// TODO Auto-generated method stub
		
		this.quizRepo.deleteById(cid);
	}

	@Override
	public List<Quize> getQuzesOfCayegory(Category category) {
		
		
		
		return this.quizRepo.findBycategory(category);
	}

	@Override
	public List<Quize> getActiveQuizes() {
		// TODO Auto-generated method stub
		return this.quizRepo.findByActive(true);
	}

	@Override
	public List<Quize> getActiveQuizesOfCategory(Category category) {
		// TODO Auto-generated method stub
		return this.quizRepo.findByCategoryAndActive(category, true);
	}

	

}
