package com.simplilearn.finalProject1.FeedbackSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simplilearn.finalProject1.FeedbackSystem.entity.Complaints;

public interface ComplaintsRepo extends JpaRepository<Complaints, Integer>{

}
