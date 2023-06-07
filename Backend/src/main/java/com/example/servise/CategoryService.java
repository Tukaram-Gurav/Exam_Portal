package com.example.servise;

import java.util.Set;

import com.example.entity.Quize.Category;

public interface CategoryService 
{
	public Category addCategory(Category Category);
	
	public Category updateCategory(Category Category);
	
	public Set<Category> getCategories();
	
	public Category getCategory(Long id);
	
	public void deleteById(Long cid);
	
	

}
