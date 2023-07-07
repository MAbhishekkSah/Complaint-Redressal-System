package com.simplilearn.finalProject1.FeedbackSystem.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Manager {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int emp_Id;
	private String userName;
	private String password;
	private List<String> pinCodesList;
	private boolean isEdit;
	public int getEmp_Id() {
		return emp_Id;
	}
	public void setEmp_Id(int emp_Id) {
		this.emp_Id = emp_Id;
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
	public List<String> getPinCodesList() {
		return pinCodesList;
	}
	public void setPinCodesList(List<String> pinCodesList) {
		this.pinCodesList = pinCodesList;
	}
	public boolean isEdit() {
		return isEdit;
	}
	public void setEdit(boolean isEdit) {
		this.isEdit = isEdit;
	}
	public Manager(int emp_Id, String userName, String password, List<String> pinCodesList, boolean isEdit) {
		super();
		this.emp_Id = emp_Id;
		this.userName = userName;
		this.password = password;
		this.pinCodesList = pinCodesList;
		this.isEdit = isEdit;
	}
	@Override
	public String toString() {
		return "Manager [emp_Id=" + emp_Id + ", userName=" + userName + ", password=" + password + ", pinCodesList="
				+ pinCodesList + "]";
	}
	public Manager() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
			

}
