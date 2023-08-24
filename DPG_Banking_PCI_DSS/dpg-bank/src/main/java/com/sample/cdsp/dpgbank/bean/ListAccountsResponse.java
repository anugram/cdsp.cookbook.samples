package com.sample.cdsp.dpgbank.bean;
import java.util.List;
import com.sample.cdsp.dpgbank.model.Account;

public class ListAccountsResponse {
    private List<Account> accounts;

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }

    @Override
    public String toString() {
        return "ListAccountsResponse [accounts=" + accounts + "]";
    }

    public ListAccountsResponse(List<Account> accounts) {
        this.accounts = accounts;
    }

    public ListAccountsResponse() {
    }    
}
