package com.gabriella.controllers;


import com.gabriella.dtos.VehicleDto;
import com.gabriella.services.VehiclesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehiclesController {
    @Autowired
    VehiclesService vehiclesService;

    @GetMapping()
    public List<VehicleDto> searchVehicles (@RequestParam("b") String beginning, @RequestParam("e") String end) {
        if(beginning != null && end != null) {
            return vehiclesService.findAvailableVehicles(beginning, end);
        }
        return
    }
}
