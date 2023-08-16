package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.InsuranceApplication;

@Repository
public interface InsuranceApplicationRepository extends JpaRepository<InsuranceApplication, Long> {
    // Add any additional repository methods if needed
}