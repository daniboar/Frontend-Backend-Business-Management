package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proiect_spring.Proiect_IS.model.CerereMarire;
import proiect_spring.Proiect_IS.model.CerereProiect;

import java.util.List;

public interface CerereMarireRepository extends JpaRepository<CerereMarire, Integer> {
    CerereMarire findByAngajatId(int angajatId);
}
