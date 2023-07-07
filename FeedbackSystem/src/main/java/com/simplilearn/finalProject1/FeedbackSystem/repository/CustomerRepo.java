package com.simplilearn.finalProject1.FeedbackSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.simplilearn.finalProject1.FeedbackSystem.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer>{

}
