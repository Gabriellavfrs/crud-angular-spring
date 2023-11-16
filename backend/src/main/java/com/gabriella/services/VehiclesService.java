package com.gabriella.services;

import com.gabriella.dtos.VehicleDto;
import com.gabriella.entities.VehiclesEntity;
import com.gabriella.repositories.VehiclesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class VehiclesService {

    @Autowired
    private VehiclesRepository vehiclesRepository;

    public List<VehicleDto> findAllVehicles() {
        List<VehiclesEntity> vehicleEntityList = new ArrayList<>();
        vehicleEntityList = vehiclesRepository.findAll();

        List<VehicleDto> vehicleLDtoList = new ArrayList<>();
        for (VehiclesEntity vehicleEntity:vehicleEntityList) {
            VehicleDto vehicleDto = new VehicleDto();
            vehicleDto.setId(vehicleEntity.getId());
        }

    }
    public List<VehicleDto> findAvailableVehicles(String beginning, String end) {
        List<VehicleDto> vehicleList = new ArrayList<>();
        String query = "SELECT * FROM vehicles_rent.vehicles AS v WHERE v.id NOT IN(SELECT r.vehicle_id FROM vehicles_rent.reservations AS r WHERE ((r.beginning BETWEEN ? AND ?) OR (r.end BETWEEN ? AND ?)));";

        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/vehicles_rent", "root", "12345678");
            PreparedStatement statement = con.prepareStatement(query);

            statement.setString(1, beginning);
            statement.setString(2, end);
            statement.setString(3, beginning);
            statement.setString(4, end);

            ResultSet result = statement.executeQuery();

            while (result.next()) {
                VehicleDto vehicleDto = new VehicleDto();
                vehicleDto.setId(result.getString("id"));
                vehicleDto.setVehicleBrand(result.getString("vehicle_brand"));
                vehicleDto.setVehicleModel(result.getString("vehicle_model"));
                vehicleDto.setColor(result.getString("color"));
                vehicleDto.setYear(result.getString("year"));
                vehicleDto.setLicensePlate(result.getString("license_plate"));

                vehicleList.add(vehicleDto);
            }
            con.close();
        } catch (SQLException exception) {
            System.out.println("Erro ao conectar ao Banco de Dados");
        }

        return vehicleList;
    }

}
