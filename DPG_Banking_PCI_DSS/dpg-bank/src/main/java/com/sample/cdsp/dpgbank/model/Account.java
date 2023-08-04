package com.sample.cdsp.dpgbank.model;

import jakarta.persistence.*;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "contact_num")
	private String contactNumber;

	@Column(name = "dob")
	private String dateOfBirth;

	@Column(name = "ssn")
	private String ssn;    

    @Column(name = "card_number")
	private String cardNum;

	@Column(name = "card_expiry")
	private String cardExpiryDate;


	public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public String getCardNum() {
        return cardNum;
    }

    public void setCardNum(String cardNum) {
        this.cardNum = cardNum;
    }

    public String getCardExpiryDate() {
        return cardExpiryDate;
    }

    public void setCardExpiryDate(String cardExpiryDate) {
        this.cardExpiryDate = cardExpiryDate;
    }

    @Override
    public String toString() {
        return "Account [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", contactNumber="
                + contactNumber + ", dateOfBirth=" + dateOfBirth + ", ssn=" + ssn + ", cardNum=" + cardNum
                + ", cardExpiryDate=" + cardExpiryDate + "]";
    }

    public Account(long id, String firstName, String lastName, String contactNumber, String dateOfBirth, String ssn,
            String cardNum, String cardExpiryDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.dateOfBirth = dateOfBirth;
        this.ssn = ssn;
        this.cardNum = cardNum;
        this.cardExpiryDate = cardExpiryDate;
    }

    public Account() {
    }
}
