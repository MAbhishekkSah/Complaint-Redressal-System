package com.simplilearn.finalProject1.FeedbackSystem.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Engineer {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int emp_id;
	private String userName;
	private String password;
	private String pincode;
	private boolean isEdit;
	public int getEmp_id() {
		return emp_id;
	}
	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public boolean isEdit() {
		return isEdit;
	}
	public void setEdit(boolean isEdit) {
		this.isEdit = isEdit;
	}
	public Engineer(int emp_id, String userName, String password, String pincode, boolean isEdit) {
		super();
		this.emp_id = emp_id;
		this.userName = userName;
		this.password = password;
		this.pincode = pincode;
		this.isEdit = isEdit;
	}
	public Engineer() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Engineer [emp_id=" + emp_id + ", userName=" + userName + ", password=" + password + ", pincode="
				+ pincode + "]";
	}
	
	
}
