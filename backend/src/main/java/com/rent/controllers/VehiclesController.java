package com.rent.controllers;


import com.rent.dtos.VehicleDto;
import com.rent.entities.VehiclesEntity;
import com.rent.services.VehiclesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehiclesController {
    @Autowired
    VehiclesService vehiclesService;

    @GetMapping()
    public List<VehicleDto> searchVehicles (
            @RequestParam(value = "b", required = false) String beginning,
            @RequestParam(value = "e", required = false) String end
    ) {
        if(beginning != null && end != null) {
            return vehiclesService.findAvailableVehicles(beginning, end);
        }
        return vehiclesService.findAllVehicles();
    }

    @PostMapping("/insert")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createVehicle (@RequestBody VehiclesEntity vehicle) {
        vehiclesService.insertVehicle(vehicle);
    }

    @DeleteMapping
    public void removeVehicle (@RequestParam("id") Integer id) {
        vehiclesService.removeVehicle(id);
    }
}
