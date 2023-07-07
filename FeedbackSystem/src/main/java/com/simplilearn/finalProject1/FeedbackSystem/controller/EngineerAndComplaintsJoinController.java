package com.simplilearn.finalProject1.FeedbackSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.finalProject1.FeedbackSystem.entity.Complaints;
import com.simplilearn.finalProject1.FeedbackSystem.entity.EngineerAndComplaintsJoin;
import com.simplilearn.finalProject1.FeedbackSystem.service.EngineerAndComplaintsJoinService;

@RestController
@RequestMapping("/enggAndComplaintsJoin")
@CrossOrigin(origins = "http://localhost:4200")
public class EngineerAndComplaintsJoinController {

	@Autowired
	private EngineerAndComplaintsJoinService service;
	
	@PostMapping("/addEnggAndComplaints")
	public ResponseEntity<Object> addEnggAndComplsint(@RequestBody EngineerAndComplaintsJoin ec)
	{
		return new ResponseEntity<Object>(service.addEnggComplaint(ec),HttpStatus.OK);
	}
	@GetMapping("/getComplaintsByEnggId/{id}")
	public List<Complaints> getComplaints(@PathVariable int id)
	{
		return service.getAllComplaintsByEnggId(id);
	}
	
}
