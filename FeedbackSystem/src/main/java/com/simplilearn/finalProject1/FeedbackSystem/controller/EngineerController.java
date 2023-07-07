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
import com.simplilearn.finalProject1.FeedbackSystem.entity.Engineer;
import com.simplilearn.finalProject1.FeedbackSystem.service.EngineerService;

@RestController
@RequestMapping("/engineer")
@CrossOrigin(origins = "http://localhost:4200")
public class EngineerController {

	@Autowired
	private EngineerService service;
	
	@GetMapping("/getAllEngineers")
	public List<Engineer> listOfEngineers()
	{
		return service.getAllEngineers();
	}
	
	@GetMapping("getEngineerById/{id}")
	public ResponseEntity<Object> engineerById(@PathVariable int id)
	{
		if(service.searchById(id)!=null)
		{
			return new ResponseEntity<Object>(service.searchById(id),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Engineer Found with this Id! ",HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/addEngineer")
	public ResponseEntity<Object> addAnEngineer(@RequestBody Engineer engg)
	{
		return new ResponseEntity<Object>(service.addEngineer(engg),HttpStatus.OK);
	}
	@GetMapping("/engineerByPin/{pincode}")
	public List<Engineer> engineerByPinCode(@PathVariable String pincode)
	{
		if(service.searchByPinCode(pincode)!=null)
		{
			return service.searchByPinCode(pincode);
		}
		return null;
	}
	
	@PutMapping("/update/{empId}")
	public ResponseEntity<Object> updatedetails(@PathVariable int empId,@RequestBody Engineer engg)
	{
		if(service.searchById(empId)!=null)
		{
			return new ResponseEntity<Object>(service.updateEnggById(empId, engg),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Engineer to update!",HttpStatus.NOT_FOUND);
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteEngg(@PathVariable int id)
	{
		if(service.searchById(id)!=null)
		{
			boolean isDeleted = service.deleteEngineerById(id);
			return new ResponseEntity<String>("Deleted Successfully!",HttpStatus.OK);
		}
		return new ResponseEntity<String>("No Item to delete!",HttpStatus.NOT_FOUND);
	}
	
}
