package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proiect_spring.Proiect_IS.model.Proiect;

public interface ProiectRepository extends JpaRepository<Proiect, Integer> {
}
