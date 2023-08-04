package com.sample.cdsp.dpgbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sample.cdsp.dpgbank.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
    
}
