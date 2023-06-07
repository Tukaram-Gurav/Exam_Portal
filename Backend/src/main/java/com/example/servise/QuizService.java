package com.example.servise;

import java.util.List;
import java.util.Set;

import com.example.entity.Quize.Category;
import com.example.entity.Quize.Quize;

public interface QuizService 
{
   public Quize addQuize(Quize Quize);
	
	public Quize updateQuize(Quize Quize);
	
	public Set<Quize> getQuizes();
	
	public Quize getQuize(Long id);
	
	public void deleteById(Long cid);
	
	public List<Quize> getQuzesOfCayegory(Category category);
	
	public List<Quize> getActiveQuizes();
	
	public List<Quize> getActiveQuizesOfCategory(Category category);

}
