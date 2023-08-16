package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.NotFoundException;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repo.UserRepository;

import java.util.List;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public UserModel addUser(@RequestBody UserModel data) {
        return userRepository.save(data);
    }

    @GetMapping("/{userId}")
    public UserModel getUser(@PathVariable Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User not found with ID: " + userId));
    }

    @PutMapping("/edit/{userId}")
    public UserModel editUser(@PathVariable Long userId, @RequestBody UserModel data) {
        UserModel user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User not found with ID: " + userId));

        user.setName(data.getName());
        user.setEmail(data.getEmail());
        user.setPassword(data.getPassword());
        user.setPhoneNumber(data.getPhoneNumber());
        user.setAddress(data.getAddress());
        user.setUserRole(data.getUserRole());

        return userRepository.save(user);
    }

    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        UserModel user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User not found with ID: " + userId));

        userRepository.delete(user);
    }

    @GetMapping("/all")
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }
}