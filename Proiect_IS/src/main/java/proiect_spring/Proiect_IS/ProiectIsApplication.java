package proiect_spring.Proiect_IS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
//import proiect_spring.Proiect_IS.controller.UserController;

@SpringBootApplication
@RestController
public class ProiectIsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProiectIsApplication.class, args);
	}

	@GetMapping
	public String text(){
		return "neata";
	}
}
