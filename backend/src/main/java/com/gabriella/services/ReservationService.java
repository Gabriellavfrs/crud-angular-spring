package com.gabriella.services;

import com.gabriella.dtos.ReservationDto;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {

    public List<ReservationDto> findAllReservations() {
        List<ReservationDto> reservationList = new ArrayList<>();

        String query = "SELECT * FROM vehicles_rent.reservations AS r INNER JOIN vehicles_rent.vehicles AS v ON r.vehicle_id = v.id;";

        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/vehicles_rent", "root", "12345678");
            Statement statement = con.createStatement();

            ResultSet result = statement.executeQuery(query);
            while (result.next()) {
                ReservationDto reservationDto = new ReservationDto();
                reservationDto.setId(result.getString("id"));
                reservationDto.setVehicleBrand(result.getString("vehicle_brand"));
                reservationDto.setVehicleModel(result.getString("vehicle_model"));
                reservationDto.setBeginning(result.getString("beginning"));
                reservationDto.setEnd(result.getString("end"));

                reservationList.add(reservationDto);
            }
            con.close();
        } catch (SQLException exception) {
            System.out.println("Erro ao conectar ao Banco de Dados");
        }
        return reservationList;
    }

}
