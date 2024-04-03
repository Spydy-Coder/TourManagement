package com.hughes.TourManagement.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.hughes.TourManagement.model.User;
import com.hughes.TourManagement.repository.UserRepository;

@Service
public class UserService {
	
	@Value("${jwt.expiration}")
	private int jwtExpirationMs;
	
	@Value("${jwt.secret}")
	private String jwtSecret;
	
	@Autowired
	private UserRepository user_repo;
	
	private Security sec=new Security();
	
	public String login(User user){
		try
		{
//			System.out.println(user_repo.findByEmail(user.getEmail()).toString());
			if (user_repo.findByEmail(user.getEmail()) == null) {
				user_repo.save(user);
				String token = sec.generateJwtToken(user_repo.findByEmail(user.getEmail()).getId(), jwtExpirationMs, jwtSecret);
				return token;
			} else {
				User data = user_repo.findByEmail(user.getEmail());
				String token = sec.generateJwtToken(data.getId(), jwtExpirationMs, jwtSecret);
				return token;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			return "Error Occured!!!";
		}
		
	}
	
	public User getUser(String token) {
		int id=Integer.parseInt(sec.fetchUser(token, jwtSecret));
//		System.out.println("ID "+id);
		Optional<User> data = user_repo.findById(id);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}

}
