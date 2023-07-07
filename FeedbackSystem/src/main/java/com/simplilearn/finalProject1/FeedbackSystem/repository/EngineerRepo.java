package com.simplilearn.finalProject1.FeedbackSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simplilearn.finalProject1.FeedbackSystem.entity.Engineer;

public interface EngineerRepo extends JpaRepository<Engineer, Integer> {

}
