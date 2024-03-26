package com.hughes.TourManagement.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hughes.TourManagement.model.Tour;
import com.hughes.TourManagement.service.TourService;

@RestController
@RequestMapping("/api/pin")	
public class TourController {
	
	@Autowired
	private TourService tservice;
	
	@PostMapping("/create")
	public String create(@RequestBody Tour tour) {
		tservice.saveTour(tour);
		return "Tour Added Successfully!";
	}
	
	@GetMapping("/displayAll")
	public List<Tour> displayAll(){
		return tservice.findAll();
	}
	
	@GetMapping("/display/{id}")
	public Optional<Tour> display(@PathVariable int id){
		return tservice.display(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id ) {
		tservice.deleteById(id);
	}
	
	@PutMapping("/edit/{id}")
	public String update(@RequestBody Tour tour,@PathVariable int id) {
		tservice.update(tour,id);
		return "updated successfully!";
	}
	
	
}
