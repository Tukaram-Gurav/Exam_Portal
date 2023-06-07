package com.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Quize.*;

public interface QuizRepo extends JpaRepository<Quize, Long>
{
	public List<Quize> findBycategory(Category category);
	public List<Quize> findByActive(boolean active);
	public List<Quize> findByCategoryAndActive(Category category,boolean b);
}
