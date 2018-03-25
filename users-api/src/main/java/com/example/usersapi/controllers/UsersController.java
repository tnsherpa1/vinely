package com.example.usersapi.controllers;

import com.example.usersapi.beans.User;
import com.example.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsersController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @PutMapping("/users/{userId}")
    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {
        User userFromDb = userRepository.findOne(userId);
        userFromDb.setUserName(userRequest.getUserName());
        userFromDb.setFirstName(userRequest.getFirstName());
        userFromDb.setLastName(userRequest.getLastName());

        return userRepository.save(userFromDb);
    }

    @DeleteMapping("/users/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.delete(userId);
        return HttpStatus.OK;
    }
}
