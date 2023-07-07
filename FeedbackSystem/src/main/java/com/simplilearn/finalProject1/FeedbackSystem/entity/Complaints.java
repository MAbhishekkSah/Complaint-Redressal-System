package com.simplilearn.finalProject1.FeedbackSystem.entity;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Complaints {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int complaintId;
	private String category;
	private String description;
	private String status;
	private String pinCode;
	@CreationTimestamp
	private Date date;
	private int user_id;
	public int getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Complaints(int complaintId, String category, String description, String status, String pinCode, int user_id, Date date) {
		super();
		this.complaintId = complaintId;
		this.category = category;
		this.description = description;
		this.status = status;
		this.pinCode = pinCode;
		this.user_id = user_id;
		this.date = date;
	}
	public Complaints() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Complaints [complaintId=" + complaintId + ", category=" + category + ", description=" + description
				+ ", status=" + status + ", pinCode=" + pinCode + ", date=" + date + ", user_id=" + user_id + "]";
	}
	
	
}
