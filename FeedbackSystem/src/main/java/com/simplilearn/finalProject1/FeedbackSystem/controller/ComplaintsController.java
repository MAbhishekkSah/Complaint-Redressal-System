package com.simplilearn.finalProject1.FeedbackSystem.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.simplilearn.finalProject1.FeedbackSystem.entity.Complaints;
import com.simplilearn.finalProject1.FeedbackSystem.service.ComplaintService;

@RestController
@RequestMapping("/complaint")
@CrossOrigin(origins = "http://localhost:4200")
public class ComplaintsController {

	@Autowired
	private ComplaintService service;
	
	@GetMapping("/getAll")
	public List<Complaints> listOfComplaints()
	{
		return service.getAllComplaints();
	}
	
	@GetMapping("getById/{id}")
	public ResponseEntity<Object> complaintById(@PathVariable int id)
	{
		if(service.searchComplaintsById(id)!=null)
		{
			return new ResponseEntity<Object>(service.searchComplaintsById(id),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Complaint Found with this Id! ",HttpStatus.NOT_FOUND);
	}
	@GetMapping("/getByUserId/{user_id}")
	public List<Complaints> getByUserId(@PathVariable int user_id)
	{
		if(service.searchByUserId(user_id)!=null)
		{
			return service.searchByUserId(user_id);
		}
		return null;
	}
	@PostMapping("/addComplaint")
	public ResponseEntity<Object> addComplaints(@RequestBody Complaints complaint)
	{
		return new ResponseEntity<Object>(service.saveComplaints(complaint),HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Object> updatedetails(@PathVariable int id,@RequestBody Complaints complaint)
	{
		if(service.searchComplaintsById(id)!=null)
		{
			return new ResponseEntity<Object>(service.updateComplaintsDetails(id, complaint),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Complaints to update!",HttpStatus.NOT_FOUND);
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteComplaint(@PathVariable int id)
	{
		if(service.searchComplaintsById(id)!=null)
		{
			boolean isDeleted = service.deleteComplaintsById(id);
			return new ResponseEntity<String>("Deleted Successfully!",HttpStatus.OK);
		}
		return new ResponseEntity<String>("No Item to delete!",HttpStatus.NOT_FOUND);
	}
}
