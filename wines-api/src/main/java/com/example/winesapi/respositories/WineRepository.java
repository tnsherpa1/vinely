package com.example.winesapi.respositories;

import com.example.winesapi.beans.Wine;
import org.springframework.data.repository.CrudRepository;

public interface WineRepository extends CrudRepository<Wine, Long>{
}
