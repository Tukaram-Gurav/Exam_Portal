package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Quize.Category;

public interface CategoryRepo extends JpaRepository<Category, Long>
{

}
