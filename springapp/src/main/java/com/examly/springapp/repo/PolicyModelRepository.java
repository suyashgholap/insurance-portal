package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.PolicyModel;

@Repository
public interface PolicyModelRepository extends JpaRepository<PolicyModel, Long> {
    // Add any additional repository methods if needed
}