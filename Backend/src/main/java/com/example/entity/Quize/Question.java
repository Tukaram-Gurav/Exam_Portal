package com.example.entity.Quize;
import jakarta.persistence.*;
@Entity
public class Question 
{
	@Id
	@GeneratedValue
	private Long queid;
	private String image;
	@Column(length = 5000)
	private String Content;
	@Transient
	private String givenAnswer;
	private String option1;
	private String option2;
	private String option3;
	private String option4;

	private String answer;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Quize quiz;


	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Long getQueid() {
		return queid;
	}


	public void setQueid(Long queid) {
		this.queid = queid;
	}

	public String getGivenAnswer() {
		return givenAnswer;
	}


	public void setGivenAnswer(String givenAnswer) {
		this.givenAnswer = givenAnswer;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getContent() {
		return Content;
	}


	public void setContent(String content) {
		Content = content;
	}


	public String getOption1() {
		return option1;
	}


	public void setOption1(String option1) {
		this.option1 = option1;
	}


	public String getOption2() {
		return option2;
	}


	public void setOption2(String option2) {
		this.option2 = option2;
	}


	public String getOption3() {
		return option3;
	}


	public void setOption3(String option3) {
		this.option3 = option3;
	}


	public String getOption4() {
		return option4;
	}


	public void setOption4(String option4) {
		this.option4 = option4;
	}

	
	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}


	public Quize getQuiz() {
		return quiz;
	}


	public void setQuiz(Quize quiz) {
		this.quiz = quiz;
	}
	

}
