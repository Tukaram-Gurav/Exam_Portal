package com.example.entity;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority{
	
	private String authority; 
	

	public Authority(String authority) {
		super();
		this.authority = authority;
	}


	public Authority() {
		super();
		// TODO Auto-generated constructor stub
	}


	public void setAuthority(String authority) {
		this.authority = authority;
	}


	@Override
	public String getAuthority() {

		return this.authority;
	}
	

}
