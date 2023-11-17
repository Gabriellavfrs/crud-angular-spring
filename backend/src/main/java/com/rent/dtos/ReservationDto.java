package com.rent.dtos;

import lombok.Getter;

@Getter
public class ReservationDto {
    private String id;
    private String vehicleBrand;
    private String vehicleModel;
    private String beginning;
    private String end;

    public void setId(String id) {
        this.id = id;
    }

    public void setVehicleBrand(String vehicleBrand) {
        this.vehicleBrand = vehicleBrand;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public void setBeginning(String beginning) {
        this.beginning = beginning;
    }

    public void setEnd(String end) {
        this.end = end;
    }
}
