package com.simplilearn.finalProject1.FeedbackSystem.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EngineerAndComplaintsJoin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eng_complaint_Id;
	private int enggId;
	private int complaintId;
	@CreationTimestamp
	private Date date;
	public int getEng_complaint_Id() {
		return eng_complaint_Id;
	}
	public void setEng_complaint_Id(int eng_complaint_Id) {
		this.eng_complaint_Id = eng_complaint_Id;
	}
	public int getEnggId() {
		return enggId;
	}
	public void setEnggId(int enggId) {
		this.enggId = enggId;
	}
	public int getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public EngineerAndComplaintsJoin(int eng_complaint_Id, int enggId, int complaintId, Date date) {
		super();
		this.eng_complaint_Id = eng_complaint_Id;
		this.enggId = enggId;
		this.complaintId = complaintId;
		this.date = date;
	}
	public EngineerAndComplaintsJoin() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "EngineerAndComplaintsJoin [eng_complaint_Id=" + eng_complaint_Id + ", enggId=" + enggId
				+ ", complaintId=" + complaintId + "]";
	}
	
	
}
