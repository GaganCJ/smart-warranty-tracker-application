package com.bits.warrantytracker.controller;

import com.bits.warrantytracker.model.WarrantyTracker;
import com.bits.warrantytracker.service.WarrantyTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/warranty")
@CrossOrigin
public class WarrantyTrackerController {
    @Autowired
    private WarrantyTrackerService warrantyTrackerService;

    @PostMapping("/add")
    public String add(@RequestBody WarrantyTracker anEntity){
        warrantyTrackerService.saveWarranty(anEntity);
        return "new Product Added in your tracker";
    }
    @GetMapping("/getall")
    public List<WarrantyTracker> getallproducts(){
        return warrantyTrackerService.getAllProducts();

    }

}
