package proiect_spring.Proiect_IS.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proiect_spring.Proiect_IS.model.Angajat;

import java.util.List;
import java.util.Optional;

@Repository
public interface AngajatRepository extends JpaRepository<Angajat, Integer> {
    List<Angajat> findByEchipa_Id(int echipaId);
}
