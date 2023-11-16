package com.gabriella.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "vehicles")
public class VehiclesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String vehicle_brand;

    @Column
    private String vehicle_model;

    @Column
    private String color;

    @Column
    private Integer year;

    @Column
    private String license_plate;
}
