package com.examly.springapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Policy;

@Repository
public interface PolicyDataRepository extends JpaRepository<Policy, String> {
    // Add any additional repository methods if needed
    List<Policy> findAll();
}
