package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proiect_spring.Proiect_IS.model.Echipa;
import proiect_spring.Proiect_IS.model.Proiect;

@Repository
public interface EchipaRepository extends JpaRepository<Echipa, Integer> {
}
