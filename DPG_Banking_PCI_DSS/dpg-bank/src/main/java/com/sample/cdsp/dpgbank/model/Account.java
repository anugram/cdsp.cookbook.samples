package com.sample.cdsp.dpgbank.model;

import jakarta.persistence.*;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

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

	@Column(name = "cvv")
	private String cvv;

	@Column(name = "expiry_date")
	private String expiryDate;


	public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }    

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public Account(long id, String username, String password, String firstName, String lastName, String contactNumber,
            String dateOfBirth, String ssn, String cardNum, String cardExpiryDate, String cvv, String expiryDate) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNumber = contactNumber;
        this.dateOfBirth = dateOfBirth;
        this.ssn = ssn;
        this.cardNum = cardNum;
        this.cardExpiryDate = cardExpiryDate;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    @Override
    public String toString() {
        return "Account [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
                + ", lastName=" + lastName + ", contactNumber=" + contactNumber + ", dateOfBirth=" + dateOfBirth
                + ", ssn=" + ssn + ", cardNum=" + cardNum + ", cardExpiryDate=" + cardExpiryDate + ", cvv=" + cvv
                + ", expiryDate=" + expiryDate + "]";
    }

    public Account() {
    }
}
