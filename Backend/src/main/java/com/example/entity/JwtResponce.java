package com.example.entity;

public class JwtResponce {
	String token;

	public JwtResponce(String token) {
		super();
		this.token = token;
	}

	public JwtResponce() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	

}
