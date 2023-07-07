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
import com.simplilearn.finalProject1.FeedbackSystem.entity.Manager;
import com.simplilearn.finalProject1.FeedbackSystem.service.ManagerService;

@RestController
@RequestMapping("/manager")
@CrossOrigin(origins = "http://localhost:4200")
public class ManagerController {

	@Autowired
	private ManagerService service;
	
	@GetMapping("/getAll")
	public List<Manager> listOfManagers()
	{
		return service.getAllManagers();
	}
	
	@GetMapping("getManagerById/{id}")
	public ResponseEntity<Object> managerById(@PathVariable int id)
	{
		if(service.searchManagerById(id)!=null)
		{
			return new ResponseEntity<Object>(service.searchManagerById(id),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Manager Found with this Id! ",HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/addManager")
	public ResponseEntity<Object> addAManager(@RequestBody Manager m)
	{
		return new ResponseEntity<Object>(service.saveManager(m),HttpStatus.OK);
	}
	
	@PutMapping("/update/{empId}")
	public ResponseEntity<Object> updatedetails(@PathVariable int empId,@RequestBody Manager m)
	{
		if(service.searchManagerById(empId)!=null)
		{
			return new ResponseEntity<Object>(service.updateManagerDetails(empId, m),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Manager to update!",HttpStatus.NOT_FOUND);
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteManager(@PathVariable int id)
	{
		if(service.searchManagerById(id)!=null)
		{
			boolean isdeleted = service.deleteManagerById(id);
			return new ResponseEntity<String>("Deleted Successfully!",HttpStatus.OK);
		}
		return new ResponseEntity<String>("No Item to delete!",HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("getComplaints/{id}")
	public List<Complaints> getAllComplaints(@PathVariable int id)
	{
		if(service.searchManagerById(id)!=null)
		{
			return service.getListOfComplaints(id);
		}
		return null;
	}
}
