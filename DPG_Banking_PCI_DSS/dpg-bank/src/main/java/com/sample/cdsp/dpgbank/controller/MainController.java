package com.sample.cdsp.dpgbank.controller;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.cdsp.dpgbank.model.Account;
import com.sample.cdsp.dpgbank.model.User;
import com.sample.cdsp.dpgbank.repository.AccountRepository;
import com.sample.cdsp.dpgbank.service.AccountService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class MainController {
    @Autowired
    AccountRepository accountRepo;

	@Autowired
	AccountService accountService;

    @PostMapping("/login")
    public ResponseEntity<String> authenticate(@RequestBody User user) {
		List<Account> accounts = accountService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
		// Authenticate your user here
		String basicAuthString = "";
		if (accounts.size() > 0) {
				basicAuthString = user.getUsername() + ":" + user.getPassword();
		} else {
			return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
		}
        String authHeader = Base64.getEncoder().encodeToString(basicAuthString.getBytes());
        return new ResponseEntity<>(authHeader, HttpStatus.OK);
    }

    @GetMapping("/accounts")
	public ResponseEntity<List<Account>> getAllAccounts(@RequestHeader(HttpHeaders.AUTHORIZATION) String header) {
		try {
			String usernameFromHeader = "";
			if (header != null && header.toLowerCase().startsWith("basic")) {
				String base64Credentials = header.substring("Basic".length()).trim();
				byte[] b64Decoded = Base64.getDecoder().decode(base64Credentials);
				String credentials = new String(b64Decoded, StandardCharsets.UTF_8);
				// credentials = username:password
				final String[] values = credentials.split(":", 2);
				usernameFromHeader = values[0];
				System.out.println(usernameFromHeader);
			}

			List<Account> accounts = new ArrayList<Account>();
			if (usernameFromHeader.equals("admin")) {
				accountRepo.findAll().forEach(accounts::add);	
			} else {
				accountService.findByUsername(usernameFromHeader).forEach(accounts::add);
			}

			if (accounts.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(accounts, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    @PostMapping("/register")
	public ResponseEntity<Account> createAccount(@RequestBody Account account) {
		try {
			Account _account = accountRepo.save(account);
			return new ResponseEntity<>(_account, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
