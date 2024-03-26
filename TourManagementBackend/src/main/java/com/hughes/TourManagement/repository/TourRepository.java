package com.hughes.TourManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hughes.TourManagement.model.Tour;

@Repository
public interface TourRepository extends JpaRepository<Tour, Integer> {

}
