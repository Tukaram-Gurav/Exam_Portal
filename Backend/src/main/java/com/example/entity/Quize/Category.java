package com.example.entity.Quize;

import java.util.LinkedHashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class Category 
{		
	@Id
	@GeneratedValue
	private Long cid;
	private String title;
	private String description;
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Quize>quizes=new LinkedHashSet<>();
	
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category(String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}
	public Long getCid() {
		return cid;
	}
	public void setCid(Long cid) {
		this.cid = cid;
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
	public Set<Quize> getQuizes() {
		return quizes;
	}
	public void setQuizes(Set<Quize> quizes) {
		this.quizes = quizes;
	}
	

	
}
