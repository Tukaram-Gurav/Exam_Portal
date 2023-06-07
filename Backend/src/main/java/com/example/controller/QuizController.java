package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Quize.Category;
import com.example.entity.Quize.Quize;
import com.example.servise.impl.QuizServiceImpl;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController 
{	
	@Autowired
	private QuizServiceImpl quizServiceImpl;
	@PostMapping("/")
	public ResponseEntity<?> addQuiz(@RequestBody Quize Quiz)
	{
		Quize Quize = this.quizServiceImpl.addQuize(Quiz);
		return ResponseEntity.ok(Quize);
	}
	
	@GetMapping("/{qid}")
	public Quize getQuiz(@PathVariable("qid")Long qid)
	{
		return this.quizServiceImpl.getQuize(qid);
	}
	@GetMapping("/")
	public ResponseEntity<?> getQuizes()
	{
		return ResponseEntity.ok(this.quizServiceImpl.getQuizes());
	}
	@PutMapping("/")
	public Quize updateQuize(@RequestBody Quize Quize)
	{
		return this.quizServiceImpl.updateQuize(Quize);
	}
	
	@DeleteMapping("/{qid}")
	public void deleteQuiz(@PathVariable("qid")Long qid)
	{
		this.quizServiceImpl.deleteById(qid);
	}
	//get quizes of category
		@GetMapping("/category/{cid}")
		public List<Quize> getQuzesOfCayegory(@PathVariable("cid")long cid)
		{
			Category category=new Category();
			category.setCid(cid);
			return this.quizServiceImpl.getQuzesOfCayegory(category);
		}
		
		
		//get active quizes 
		@GetMapping("/active")
		public List<Quize> getActiveQuizes()
		{
			return this.quizServiceImpl.getActiveQuizes();
		}
		

		//get active quizes 
		@GetMapping("/category/active/{cid}")
		public List<Quize> getActiveQuizesOfCategory(@PathVariable("cid")Long cid)
		{
			Category category=new Category();
			category.setCid(cid);
			return this.quizServiceImpl.getActiveQuizesOfCategory(category);
		}
		
}
