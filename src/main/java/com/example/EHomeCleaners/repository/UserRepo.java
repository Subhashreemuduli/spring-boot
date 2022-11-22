package com.example.EHomeCleaners.repository;

import com.example.EHomeCleaners.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository <User,Integer> {
    Optional<User> findByEmail(String email);
}
