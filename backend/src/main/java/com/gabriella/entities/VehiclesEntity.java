package com.gabriella.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Entity(name = "vehicles")
public class VehiclesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "vehicle_brand")
    private String vehicleBrand;

    @Column(name = "vehicle_model")
    private String vehicleModel;

    @Column
    private String color;

    @Column
    private Integer year;

    @Column(name = "license_plate")
    private String licensePlate;

    public Integer getId() {
        return this.id;
    }

    public String getVehicleBrand() {
        return this.vehicleBrand;
    }

    public String getVehicleModel() {
        return this.vehicleModel;
    }

    public String getColor() {
        return this.color;
    }

    public Integer getYear() {
        return this.year;
    }

    public String getLicensePlate() {
        return this.licensePlate;
    }
}
