package com.example.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Role {

	@Id
	private Long rolId;
	private String roleName;
	
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "role")
	private Set<UserRole> userRole = new HashSet<>();
	
	
	
	
	public Set<UserRole> getUserRole() {
		return userRole;
	}
	public void setUserRole(Set<UserRole> userRole) {
		this.userRole = userRole;
	}
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getRolId() {
		return rolId;
	}
	public void setRolId(Long rolId) {
		this.rolId = rolId;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public Role(Long rolId, String roleName) {
		super();
		this.rolId = rolId;
		this.roleName = roleName;
	}
	
	
}
