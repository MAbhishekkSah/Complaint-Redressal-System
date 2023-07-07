package com.simplilearn.finalProject1.FeedbackSystem.service;

import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.finalProject1.FeedbackSystem.entity.Engineer;
import com.simplilearn.finalProject1.FeedbackSystem.repository.EngineerRepo;

@Service
public class EngineerService {

	@Autowired
	private EngineerRepo repo;
	
	public List<Engineer> getAllEngineers()
	{
		return repo.findAll();
	}
	public List<Engineer> searchByPinCode(String pinCode)
	{
		List<Engineer> enggList = this.getAllEngineers();
		List<Engineer> result = new ArrayList<Engineer>();
		for(Engineer engg : enggList)
		{
			if(engg.getPincode().equals(pinCode))
			{
				result.add(engg);
			}
		}
		return result;
	}
	
	public Engineer addEngineer(Engineer e)
	{
		return repo.save(e);
	}
	
	public Engineer searchById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			return repo.findById(id).get();
		}
		return null;
	}
	
	public Engineer updateEnggById(int id, Engineer e)
	{
		if(repo.findById(id).isPresent())
		{
			Engineer engg = repo.findById(id).get();
			engg.setPassword(e.getPassword());
			engg.setPincode(e.getPincode());
			engg.setUserName(e.getUserName());
			engg.setEdit(e.isEdit());
			return repo.save(engg);
		}
		return null;
	}
	public boolean deleteEngineerById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	
}
