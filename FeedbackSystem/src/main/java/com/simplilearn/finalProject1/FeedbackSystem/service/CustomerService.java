package com.simplilearn.finalProject1.FeedbackSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.finalProject1.FeedbackSystem.entity.Customer;
import com.simplilearn.finalProject1.FeedbackSystem.repository.CustomerRepo;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepo repo;
	
	public List<Customer> getAllCustomers()
	{
		return repo.findAll();
	}
	public Customer saveCustomer(Customer cust)
	{
		return repo.save(cust);
	}
	public Customer searchCustomerById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			return repo.findById(id).get();
		}
		return null;
	}
	public Customer updateCustomerDetails(int id, Customer cust)
	{
		if(repo.findById(id).isPresent())
		{
			Customer customer = repo.findById(id).get();
			customer.setPassword(cust.getPassword());
			customer.setContactNo(cust.getContactNo());
			customer.setUserName(cust.getUserName());
			return repo.save(customer);
		}
		return null;
	}
	public boolean deleteCustomerById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			repo.deleteById(id);
			return true;
		}
		return false;
	}
}
