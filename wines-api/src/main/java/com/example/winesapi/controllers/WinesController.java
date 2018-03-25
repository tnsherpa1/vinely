package com.example.winesapi.controllers;

import com.example.winesapi.beans.Wine;
import com.example.winesapi.respositories.WineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;


@RestController
public class WinesController {
    @Autowired
    private WineRepository wineRepository;

    @GetMapping("/wines")
    public Iterable<Wine> findAllWines() {
        return wineRepository.findAll();
    }

    @PostMapping("/wines")
    public Wine createNewWine(@RequestBody Wine newWine) {
        return wineRepository.save(newWine);
    }

    @PutMapping("/wines/{wineId}")
    public Wine updateWineById(@PathVariable Long wineId, @RequestBody Wine wineRequest) {
        Wine wineFromDb = wineRepository.findOne(wineId);
        wineFromDb.setTitle(wineRequest.getTitle());
        wineFromDb.setRegion(wineRequest.getRegion());
        wineFromDb.setKind(wineRequest.getKind());
        wineFromDb.setPrice(wineRequest.getPrice());
        wineFromDb.setQty(wineRequest.getQty());
        wineFromDb.setDescription(wineFromDb.getDescription());
        return wineRepository.save(wineFromDb);
    }
}
