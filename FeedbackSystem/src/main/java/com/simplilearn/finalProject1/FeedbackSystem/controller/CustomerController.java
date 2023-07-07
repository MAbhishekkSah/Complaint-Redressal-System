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
import com.simplilearn.finalProject1.FeedbackSystem.entity.Customer;
import com.simplilearn.finalProject1.FeedbackSystem.service.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	@Autowired
	private CustomerService service;
	
	@GetMapping("/getAll")
	public List<Customer> listOfCustomers()
	{
		return service.getAllCustomers();
	}
	
	@GetMapping("getById/{id}")
	public ResponseEntity<Object> customerById(@PathVariable int id)
	{
		if(service.searchCustomerById(id)!=null)
		{
			return new ResponseEntity<Object>(service.searchCustomerById(id),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Manager Found with this Id! ",HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/addCustomer")
	public ResponseEntity<Object> addCustomer(@RequestBody Customer cust)
	{
		return new ResponseEntity<Object>(service.saveCustomer(cust),HttpStatus.OK);
	}
	
	@PutMapping("/update/{empId}")
	public ResponseEntity<Object> updatedetails(@PathVariable int empId,@RequestBody Customer cust)
	{
		if(service.searchCustomerById(empId)!=null)
		{
			return new ResponseEntity<Object>(service.updateCustomerDetails(empId, cust),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Customer to update!",HttpStatus.NOT_FOUND);
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable int id)
	{
		System.out.print("Deleted!"+id);
		if(service.searchCustomerById(id)!=null)
		{
			System.out.print("Deleted!"+id);
			boolean isDeleted = service.deleteCustomerById(id);
			return new ResponseEntity<String>("Deleted Successfully!",HttpStatus.OK);
		}
		return new ResponseEntity<String>("No Item to delete!",HttpStatus.NOT_FOUND);
	}
}
