package com.example.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;
import com.example.entity.Quize.*;
import com.example.servise.impl.QuestionServiceImpl;
import com.example.servise.impl.QuizServiceImpl;
import java.util.List;
import java.util.Map;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import com.example.servise.impl.UserResultIMPL;
@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	@Autowired
	private QuestionServiceImpl questionServiceImpl;
	@Autowired
	private QuizServiceImpl QuizServiceImpl;
	@Autowired
	private UserResultIMPL UserResultIMPL;
	
	@PostMapping("/")
	public ResponseEntity<?> addQuestion(@RequestBody Question Question) {
		Question Question2 = this.questionServiceImpl.addQuestion(Question);
		return ResponseEntity.ok(Question2);
	}

	@GetMapping("/{qid}")
	public Question getQuestion(@PathVariable("qid") Long qid) {
		return this.questionServiceImpl.getQuestion(qid);
	}

	@GetMapping("/")
	public ResponseEntity<?> getQuestions() {
		return ResponseEntity.ok(this.questionServiceImpl.getQuestions());
	}

	@PutMapping("/")
	public ResponseEntity<Question> updateQuestion(@RequestBody Question Question) {
		return ResponseEntity.ok(this.questionServiceImpl.updateQuestion(Question));
	}

	@GetMapping("/quiz/{qid}")
	public ResponseEntity<?> getQuestionsofQuiz(@PathVariable("qid") Long qid) {
//		Quize quiz=new Quize();
//		quiz.setQid(qid);
//		Set<Question> questionByQuiz = this.questionServiceImpl.getQuestionByQuiz(quiz);
//		return ResponseEntity.ok(questionByQuiz);

		Quize quize = this.QuizServiceImpl.getQuize(qid);
		Set<Question> question = quize.getQuestion();
		List<Question> list = new ArrayList(question);
		if (list.size() > Integer.parseInt(quize.getNoOfQuestions())) {
			list = list.subList(0, Integer.parseInt(quize.getNoOfQuestions() + 1));
			
			
		}
		
		list.forEach((q) -> 
		{
			q.setAnswer("");
		});
		
		Collections.shuffle(list);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/quiz/all/{qid}")
	public ResponseEntity<?> getQuestionsofQuizAdmin(@PathVariable("qid") Long qid) {
		Quize quiz=new Quize();
		quiz.setQid(qid);
		Set<Question> questionByQuiz = this.questionServiceImpl.getQuestionByQuiz(quiz);
		return ResponseEntity.ok(questionByQuiz);

	}
	
	@DeleteMapping("/{qid}")
	public void deleteQuestion(@PathVariable("qid") Long qid) {
		this.questionServiceImpl.deleteQuestion(qid);
	}
	
	@PostMapping("/eval-quiz")
	public ResponseEntity<?> evalveQuize(@RequestBody List<Question> questions,Principal p)
	{
		 int correctAnswers=0;
		  double markGot=0;
		  int Attempted=0;
		System.out.println(questions);
		for(Question q:questions)
		{
			Question question = this.questionServiceImpl.get(q.getQueid());
			
						
			
			if(question.getAnswer().equals(q.getGivenAnswer()))
			{
				correctAnswers++;
				
//				double singleMarks=Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size();
				double singleMarks=Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/Double.parseDouble(questions.get(0).getQuiz().getNoOfQuestions());
				markGot +=singleMarks;
			}
			
			
			if(q.getGivenAnswer()!=null)
			{
				Attempted++;
			}
			
			
		}
		UserResult userresult=new UserResult();
		userresult.setQuiz(questions.get(0).getQuiz().getTitle());
		userresult.setQuizdesc(questions.get(0).getQuiz().getDescription());
		userresult.setMarks((markGot));
		userresult.setUser(p.getName());
		userresult.setTotalMarks(questions.get(0).getQuiz().getMaxMarks());
		userresult.setAttempted(Attempted);
		userresult.setCorrectanswers(correctAnswers);
		
		LocalTime time = LocalTime.now();
		LocalDate date = LocalDate.now();
		userresult.setTime(time.toString());
		userresult.setDate(date.toString());
		
		this.UserResultIMPL.saveUserResult(userresult);
		Map<Object,Object> map=Map.of("correctAnswers",correctAnswers,"markGot",markGot,"Attempted",Attempted);
		return ResponseEntity.ok(map);
		
	}

}
