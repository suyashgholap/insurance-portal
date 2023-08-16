package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.PremiumScheduleModel;

@Repository
public interface PremiumScheduleRepository extends JpaRepository<PremiumScheduleModel, Integer> {
    // Add any additional repository methods if needed
}