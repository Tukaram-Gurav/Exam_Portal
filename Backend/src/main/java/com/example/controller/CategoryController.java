package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Quize.Category;
import com.example.servise.impl.CategoryServiceImpl;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController 
{	
	@Autowired
	private CategoryServiceImpl categoryServiceImpl;
	@PostMapping("/")
	public ResponseEntity<?> addCategory(@RequestBody Category Category)
	{
		Category Category2 = this.categoryServiceImpl.addCategory(Category);
		return ResponseEntity.ok(Category2);
	}
	
	@GetMapping("/{cid}")
	public Category getCategory(@PathVariable("cid")Long cid)
	{
		return this.categoryServiceImpl.getCategory(cid);
	}
	@GetMapping("/")
	public ResponseEntity<?> getCategories()
	{
		return ResponseEntity.ok(this.categoryServiceImpl.getCategories());
	}
	
	@PutMapping("/")
	public Category updateCategory(@RequestBody Category Category)
	{
		return this.categoryServiceImpl.updateCategory(Category);
	}
	
	@DeleteMapping("/{cid}")
	public void deleteCategory(@PathVariable("cid")Long cid)
	{
		this.categoryServiceImpl.deleteById(cid);
	}
	
}
