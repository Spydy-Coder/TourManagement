package com.hughes.TourManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.hughes.TourManagement.model.Tour;
import com.hughes.TourManagement.model.User;
import com.hughes.TourManagement.repository.TourRepository;
import com.hughes.TourManagement.repository.UserRepository;

@Service
public class TourService {
	
	@Value("${jwt.expiration}")
	private int jwtExpirationMs;
	
	@Value("${jwt.secret}")
	private String jwtSecret;

	@Autowired
	private TourRepository repo;
	
	@Autowired
	private UserRepository user_repo;
	private Security sec=new Security();

	public void saveTour(Tour t, String token) {
		int id=Integer.parseInt(sec.fetchUser(token, jwtSecret));
//		System.out.println("ID "+id);
		Optional<User> data = user_repo.findById(id);
		if(data.isPresent()) {
		repo.save(t);
		}
		else {
			System.out.println("Not Saved!!!!");
			return;
		}
	}
	
	public List<Tour> findAll(String token) {
		int id=Integer.parseInt(sec.fetchUser(token, jwtSecret));
//		System.out.println("ID "+id);
		Optional<User> data = user_repo.findById(id);
		if(data.isPresent()) {
		return repo.findAll();
		}
		else return null;
	}
	
	public Optional<Tour> display(int id, String token) {
		int ID=Integer.parseInt(sec.fetchUser(token, jwtSecret));
//		System.out.println("ID "+id);
		Optional<User> data = user_repo.findById(ID);
		if(data.isPresent()) {
		return repo.findById(id);
		}
		else return null;
	}
	
	public void deleteById(int id, String token) {
		int ID=Integer.parseInt(sec.fetchUser(token, jwtSecret));
//		System.out.println("ID "+id);
		Optional<User> data = user_repo.findById(ID);
		if(data.isPresent()) {
		repo.deleteById(id);
		}
		else {
			System.out.println("Not deleted!!!");
			return;
		}
	}

	public void update(Tour tour, int id, String token) {
		int ID=Integer.parseInt(sec.fetchUser(token, jwtSecret));
//		System.out.println("ID "+id);
		Optional<User> data = user_repo.findById(ID);
		if(data.isPresent()) {
		Tour previousTour = repo.findById(id).orElse(null);
		previousTour.setDescription(tour.getDescription());
		previousTour.setDays(tour.getDays());
		previousTour.setName(tour.getName());
		previousTour.setPrice(tour.getPrice());
		repo.save(previousTour);
		}
		else {
			System.out.println("Error Updating!!!");
			return;
		}
	}

}
