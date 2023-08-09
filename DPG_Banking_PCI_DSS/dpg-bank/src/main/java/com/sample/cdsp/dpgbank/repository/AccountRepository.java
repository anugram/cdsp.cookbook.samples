package com.sample.cdsp.dpgbank.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sample.cdsp.dpgbank.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
    List<Account> findByUsername(String username);

    List<Account> findByUsernameAndPassword(String username, String password);
}
