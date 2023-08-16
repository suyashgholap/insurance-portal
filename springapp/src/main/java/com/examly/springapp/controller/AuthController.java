package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UnauthorizedException;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repo.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/signup")// Set the HTTP response status to 201 Created
    public UserModel userSignup(@RequestBody UserModel data) {
        // Set the user role as "user"
        data.setUserRole("user");
        return userRepository.save(data);
    }

    @PostMapping("/admin/signup")
    public UserModel adminSignup(@RequestBody UserModel data) {
        data.setUserRole("admin"); // Set the user role as "admin"
        return userRepository.save(data);
    }

    @PostMapping("/signin")
    public UserModel signin(@RequestBody LoginModel data) {
        String email = data.getEmail();
        String password = data.getPassword();

        UserModel user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        } else {
            throw new UnauthorizedException("Invalid email or password");
        }
    }
}