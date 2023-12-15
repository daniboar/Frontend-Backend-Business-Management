package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proiect_spring.Proiect_IS.model.Client;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
