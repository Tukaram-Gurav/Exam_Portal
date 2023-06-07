package com.example.servise.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Quize.Category;
import com.example.repo.CategoryRepo;
import com.example.servise.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService
{	@Autowired
	private CategoryRepo catrepo;
	
	@Override
	public Category addCategory(Category Category) {
		// TODO Auto-generated method stub
		return this.catrepo.save(Category);
	}

	@Override
	public Category updateCategory(Category Category) {
		// TODO Auto-generated method stub
		return this.catrepo.save(Category);
	}

	@Override
	public Set<Category> getCategories() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(this.catrepo.findAll());
	}

	

	@Override
	public void deleteById(Long cid) {
		
		this.catrepo.deleteById(cid);
		// TODO Auto-generated method stub
		
	}

	@Override
	public Category getCategory(Long id) {
		// TODO Auto-generated method stub
		return  this.catrepo.findById(id).get();
	}
	

}
