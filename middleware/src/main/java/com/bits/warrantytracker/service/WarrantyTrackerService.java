package com.bits.warrantytracker.service;
import com.bits.warrantytracker.model.WarrantyTracker;

import java.util.List;

public interface WarrantyTrackerService {
    public  WarrantyTracker saveWarranty(WarrantyTracker anentry);
    public List<WarrantyTracker> getAllProducts();

}
