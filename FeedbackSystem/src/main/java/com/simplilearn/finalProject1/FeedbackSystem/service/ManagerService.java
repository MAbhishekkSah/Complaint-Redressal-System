package com.simplilearn.finalProject1.FeedbackSystem.service;

import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.finalProject1.FeedbackSystem.entity.Complaints;
import com.simplilearn.finalProject1.FeedbackSystem.entity.Manager;
import com.simplilearn.finalProject1.FeedbackSystem.repository.ComplaintsRepo;
import com.simplilearn.finalProject1.FeedbackSystem.repository.ManagerRepo;

@Service
public class ManagerService {

	@Autowired
	private ManagerRepo repo;
	@Autowired
	private ComplaintsRepo cRepo;
	
	public List<Manager> getAllManagers()
	{
		return repo.findAll();
	}
	public Manager saveManager(Manager m)
	{
		return repo.save(m);
	}
	public Manager searchManagerById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			return repo.findById(id).get();
		}
		return null;
	}
	public Manager updateManagerDetails(int id, Manager m)
	{
		if(repo.findById(id).isPresent())
		{
			Manager manager = repo.findById(id).get();
			manager.setPassword(m.getPassword());
			manager.setPinCodesList(m.getPinCodesList());
			manager.setUserName(m.getUserName());
			manager.setEdit(m.isEdit());
			return repo.save(manager);
		}
		return null;
	}
	public boolean deleteManagerById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	public List<Complaints> getListOfComplaints(int id)
	{
		if(repo.findById(id).isPresent())
		{
			List<Complaints> retList = new ArrayList<Complaints>();
			Manager manager = repo.findById(id).get();
			List<Complaints> complaintsList = cRepo.findAll();
			for(int i = 0; i<complaintsList.size(); i++)
			{
				if(manager.getPinCodesList().contains(complaintsList.get(i).getPinCode()))
				{
					retList.add(complaintsList.get(i));
				}
			}
			return retList;
		}
		return null;
	}
}
