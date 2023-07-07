package com.simplilearn.finalProject1.FeedbackSystem.service;

import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.finalProject1.FeedbackSystem.entity.Complaints;
import com.simplilearn.finalProject1.FeedbackSystem.entity.EngineerAndComplaintsJoin;
import com.simplilearn.finalProject1.FeedbackSystem.repository.EngineerAndComplaintsJoinRepo;

@Service
public class EngineerAndComplaintsJoinService {

	@Autowired
	private EngineerAndComplaintsJoinRepo repo;
	@Autowired
	private ComplaintService cService;
	
	public EngineerAndComplaintsJoin addEnggComplaint(EngineerAndComplaintsJoin e)
	{
		return repo.save(e);
	}
	public List<Complaints> getAllComplaintsByEnggId(int id)
	{
		List<EngineerAndComplaintsJoin> ecList = repo.findAll();
		List<Complaints> resultList = new ArrayList<Complaints>();
		for(int i = 0; i<ecList.size(); i++)
		{
			if(ecList.get(i).getEnggId() == id)
			{
				resultList.add(cService.searchComplaintsById(ecList.get(i).getComplaintId()));
			}
		}
		return resultList;
	}
}
