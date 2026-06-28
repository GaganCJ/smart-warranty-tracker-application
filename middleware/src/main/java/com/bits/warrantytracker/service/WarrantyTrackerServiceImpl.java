package com.bits.warrantytracker.service;

import com.bits.warrantytracker.repository.WarrantyTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import com.bits.warrantytracker.model.WarrantyTracker;
import com.bits.warrantytracker.service.WarrantyTrackerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarrantyTrackerServiceImpl  implements  WarrantyTrackerService {
    @Autowired
    private WarrantyTrackerRepository warrantyTrackerRepository;
    @Override
    public  WarrantyTracker saveWarranty(WarrantyTracker anentry){
        return warrantyTrackerRepository.save(anentry);
    }
    @Override
    public List<WarrantyTracker> getAllProducts(){
        return warrantyTrackerRepository.findAll();

    }
}
