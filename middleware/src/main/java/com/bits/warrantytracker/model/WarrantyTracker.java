package com.bits.warrantytracker.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class WarrantyTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String productPurchaseDate;
    private String warrantyPurchaseDate;
    private String warrantyExpiryDate;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String packagePhoto;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String labelPhoto;

    public WarrantyTracker() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProductPurchaseDate() {
        return productPurchaseDate;
    }

    public void setProductPurchaseDate(String productPurchaseDate) {
        this.productPurchaseDate = productPurchaseDate;
    }

    public String getWarrantyPurchaseDate() {
        return warrantyPurchaseDate;
    }

    public void setWarrantyPurchaseDate(String warrantyPurchaseDate) {
        this.warrantyPurchaseDate = warrantyPurchaseDate;
    }

    public String getWarrantyExpiryDate() {
        return warrantyExpiryDate;
    }

    public void setWarrantyExpiryDate(String warrantyExpiryDate) {
        this.warrantyExpiryDate = warrantyExpiryDate;
    }

    public String getPackagePhoto() {
        return packagePhoto;
    }

    public void setPackagePhoto(String packagePhoto) {
        this.packagePhoto = packagePhoto;
    }

    public String getLabelPhoto() {
        return labelPhoto;
    }

    public void setLabelPhoto(String labelPhoto) {
        this.labelPhoto = labelPhoto;
    }
}
