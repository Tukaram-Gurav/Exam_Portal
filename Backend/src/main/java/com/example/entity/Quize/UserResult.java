package com.example.entity.Quize;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
@Entity
public class UserResult
{	
	@Id
	@GeneratedValue
	private Long userId;
	private String user;
	private Double marks;
	private String quiz;
	private String Quizdesc;
	private String Date;
	private String Time;
	private String TotalMarks;
	private int correctanswers;
	private int attempted;
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public Double getMarks() {
		return marks;
	}
	public void setMarks(Double marks) {
		this.marks = marks;
	}
	
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public String getTime() {
		return Time;
	}
	public void setTime(String time) {
		Time = time;
	}
	
	public UserResult() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getTotalMarks() {
		return TotalMarks;
	}
	public void setTotalMarks(String totalMarks) {
		TotalMarks = totalMarks;
	}
	public String getQuiz() {
		return quiz;
	}
	public void setQuiz(String quiz) {
		this.quiz = quiz;
	}
	public String getQuizdesc() {
		return Quizdesc;
	}
	public void setQuizdesc(String quizdesc) {
		Quizdesc = quizdesc;
	}
	public int getCorrectanswers() {
		return correctanswers;
	}
	public void setCorrectanswers(int correctanswers) {
		this.correctanswers = correctanswers;
	}
	public int getAttempted() {
		return attempted;
	}
	public void setAttempted(int attempted) {
		this.attempted = attempted;
	}
	
	

}
