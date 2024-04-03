package com.hughes.TourManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hughes.TourManagement.model.Tour;
import com.hughes.TourManagement.repository.TourRepository;

@Service
public class TourService {

	@Autowired
	private TourRepository repo;

	public void saveTour(Tour t) {
		try {
			repo.save(t);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public List<Tour> findAll() {
		return repo.findAll();
	}
	
	public Optional<Tour> display(int id) {
		return repo.findById(id);
	}
	
	public void deleteById(int id) {
		repo.deleteById(id);
	}

	public void update(Tour tour, int id) {
		Tour previousTour = repo.findById(id).orElse(null);
		previousTour.setDescription(tour.getDescription());
		previousTour.setDays(tour.getDays());
		previousTour.setName(tour.getName());
		previousTour.setPrice(tour.getPrice());
		repo.save(previousTour);
	}

}
