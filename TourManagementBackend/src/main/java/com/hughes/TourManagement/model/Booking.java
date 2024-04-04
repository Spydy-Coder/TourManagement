package com.hughes.TourManagement.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	@Column(name = "tourId")
	private int tourId;
	@Column(name = "NoOfPerson")
	private int NoOfPerson;
	@Column(name = "ClientName")
	private String ClientName;
	@Column(name = "ClientID")
	private int ClientID;
	@Column(name = "TotalPrice")
	private int TotalPrice;

	Booking() {

	}

	public int getId() {
		return id;
	}

	public int getClientID() {
		return ClientID;
	}

	public void setClientID(int clientID) {
		ClientID = clientID;
	}

	public int getTotalPrice() {
		return TotalPrice;
	}

	public void setTotalPrice(int totalPrice) {
		TotalPrice = totalPrice;
	}

	public Booking(int tourId, int noOfPerson, String clientName, int clientID, int totalPrice) {
		super();
		this.tourId = tourId;
		NoOfPerson = noOfPerson;
		ClientName = clientName;
		ClientID = clientID;
		TotalPrice = totalPrice;
	}

	@Override
	public String toString() {
		return "Booking [id=" + id + ", tourId=" + tourId + ", NoOfPerson=" + NoOfPerson + ", ClientName=" + ClientName
				+ ", ClientID=" + ClientID + ", TotalPrice=" + TotalPrice + "]";
	}

	public int getTourId() {
		return tourId;
	}

	public void setTourId(int tourId) {
		this.tourId = tourId;
	}

	public int getNoOfPerson() {
		return NoOfPerson;
	}

	public void setNoOfPerson(int noOfPerson) {
		NoOfPerson = noOfPerson;
	}

	public String getClientName() {
		return ClientName;
	}

	public void setClientName(String clientName) {
		ClientName = clientName;
	}
}
