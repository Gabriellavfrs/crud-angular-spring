package com.rent.repositories;

import com.rent.entities.VehiclesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiclesRepository extends JpaRepository<VehiclesEntity, Integer> {
}
