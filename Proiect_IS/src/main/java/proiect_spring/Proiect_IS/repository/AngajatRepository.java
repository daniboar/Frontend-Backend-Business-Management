package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proiect_spring.Proiect_IS.model.Angajat;

@Repository
public interface AngajatRepository extends JpaRepository<Angajat, Integer> {

}
