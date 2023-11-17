package com.rent.controllers;

import com.rent.dtos.ReservationDto;
import com.rent.entities.ReservationEntity;
import com.rent.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/insert")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createReservation (@RequestBody ReservationEntity reservation) {
        reservationService.insertReservation(reservation);
    }

    @DeleteMapping
    public void removeReservation (@RequestParam("id") Integer id) {
        reservationService.removeReservation(id);
    }
}
