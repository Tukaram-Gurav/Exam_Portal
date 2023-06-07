package com.example.entity.Quize;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
@Entity
public class Quize 
{
	@Id
	@GeneratedValue
	private Long qid;
	private String title;
	private String description;
	private String maxMarks;
	private String noOfQuestions;
	private boolean active=false;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "quiz",cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Question>question=new HashSet<>();
	
	public Quize() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Quize(String title, String description, String maxMarks, String noOfQuestions, boolean active) {
		super();
		this.title = title;
		this.description = description;
		this.maxMarks = maxMarks;
		this.noOfQuestions = noOfQuestions;
		this.active = active;
	}
	public Long getQid() {
		return qid;
	}
	public void setQid(Long qid) {
		this.qid = qid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getMaxMarks() {
		return maxMarks;
	}
	public void setMaxMarks(String maxMarks) {
		this.maxMarks = maxMarks;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Set<Question> getQuestion() {
		return question;
	}
	public void setQuestion(Set<Question> question) {
		this.question = question;
	}
	

	public String getNoOfQuestions() {
		return noOfQuestions;
	}
	public void setNoOfQuestions(String noOfQuestions) {
		this.noOfQuestions = noOfQuestions;
	}

}
