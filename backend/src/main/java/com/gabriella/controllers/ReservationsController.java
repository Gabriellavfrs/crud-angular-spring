package com.gabriella.controllers;

import com.gabriella.dtos.ReservationDto;
import com.gabriella.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")

public class ReservationsController {

    @Autowired
    ReservationService reservationService;
    @GetMapping
    public List<ReservationDto> allReservations() {
        return reservationService.findAllReservations();
    }
}
