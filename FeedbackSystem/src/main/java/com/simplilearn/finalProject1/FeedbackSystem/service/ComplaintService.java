package com.simplilearn.finalProject1.FeedbackSystem.service;

import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.finalProject1.FeedbackSystem.entity.Complaints;
import com.simplilearn.finalProject1.FeedbackSystem.repository.ComplaintsRepo;

@Service
public class ComplaintService {

	@Autowired
	private ComplaintsRepo repo;
	
	public List<Complaints> getAllComplaints()
	{
		return repo.findAll();
	}
	public Complaints saveComplaints(Complaints c)
	{
		return repo.save(c);
	}
	public List<Complaints> searchByUserId(int userId)
	{
		List<Complaints> complaintList = repo.findAll();
		List<Complaints> retList = new ArrayList<Complaints>();
		for(Complaints complaint:complaintList)
		{
			if(complaint.getUser_id() == userId)
			{
				retList.add(complaint);
			}
		}
		if(retList.size()!=0)
		{
			return retList;
		}
		return null;
	}
	public Complaints searchComplaintsById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			return repo.findById(id).get();
		}
		return null;
	}
	public Complaints updateComplaintsDetails(int id, Complaints c)
	{
		if(repo.findById(id).isPresent())
		{
			Complaints complain = repo.findById(id).get();
			complain.setUser_id(c.getUser_id());
			complain.setDate(c.getDate());
			complain.setCategory(c.getCategory());
			complain.setDescription(c.getDescription());
			complain.setPinCode(c.getPinCode());
			complain.setStatus(c.getStatus());
			return repo.save(complain);
		}
		return null;
	}
	public boolean deleteComplaintsById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			repo.deleteById(id);
			return true;
		}
		return false;
	}
}
