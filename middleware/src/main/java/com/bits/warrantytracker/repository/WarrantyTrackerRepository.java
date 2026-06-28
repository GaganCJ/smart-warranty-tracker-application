package com.bits.warrantytracker.repository;

import com.bits.warrantytracker.model.WarrantyTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarrantyTrackerRepository extends  JpaRepository<WarrantyTracker,Integer>{

}
