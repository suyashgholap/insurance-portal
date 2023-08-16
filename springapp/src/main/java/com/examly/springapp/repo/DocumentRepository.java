package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.DocumentModel;

@Repository
public interface DocumentRepository extends JpaRepository<DocumentModel, Long> {
    // Add any additional repository methods if needed
}