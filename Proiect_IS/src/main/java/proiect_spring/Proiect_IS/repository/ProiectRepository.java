package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proiect_spring.Proiect_IS.model.Proiect;

@Repository
public interface ProiectRepository extends JpaRepository<Proiect, Integer> {

}
