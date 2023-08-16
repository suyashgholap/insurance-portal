package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findByEmail(String email);
    UserModel findByEmailAndUserRole(String email, String userRole);
}