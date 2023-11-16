package com.gabriella.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
public class VehicleDto {
    private String id;
    private String vehicleBrand;
    private String vehicleModel;
    private String color;
    private String year;

    private String licensePlate;

    public void setId(String id) {
        this.id = id;
    }

    public void setVehicleBrand(String vehicleBrand) {
        this.vehicleBrand = vehicleBrand;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }
}
