package com.sample.cdsp.dpgbank.service;

import java.util.List;
import com.sample.cdsp.dpgbank.model.Account;


public interface AccountService {
    List<Account> findByUsername(String username);
    List<Account> findByUsernameAndPassword(String username, String password);
}
