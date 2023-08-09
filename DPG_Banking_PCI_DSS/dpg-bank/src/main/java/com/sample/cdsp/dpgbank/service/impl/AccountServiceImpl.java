package com.sample.cdsp.dpgbank.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.cdsp.dpgbank.model.Account;
import com.sample.cdsp.dpgbank.repository.AccountRepository;
import com.sample.cdsp.dpgbank.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accRepo;

    @Override
    public List<Account> findByUsername(String username) {
        return accRepo.findByUsername(username);
    }

    @Override
    public List<Account> findByUsernameAndPassword(String username, String password) {
        return accRepo.findByUsernameAndPassword(username, password);
    }
    
}
