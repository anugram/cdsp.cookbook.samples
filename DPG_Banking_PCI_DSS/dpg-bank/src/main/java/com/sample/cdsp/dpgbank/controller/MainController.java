package com.sample.cdsp.dpgbank.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.cdsp.dpgbank.model.Account;
import com.sample.cdsp.dpgbank.repository.AccountRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class MainController {
    @Autowired
    AccountRepository accountRepo;

    @GetMapping("/accounts")
	public ResponseEntity<List<Account>> getAllAccounts() {
		try {
			List<Account> accounts = new ArrayList<Account>();

			accountRepo.findAll().forEach(accounts::add);

			if (accounts.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(accounts, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    @PostMapping("/accounts")
	public ResponseEntity<Account> createAccount(@RequestBody Account account) {
		try {
			Account _account = accountRepo.save(account);
			return new ResponseEntity<>(_account, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
