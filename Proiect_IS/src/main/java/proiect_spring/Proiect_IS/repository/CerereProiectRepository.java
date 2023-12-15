package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proiect_spring.Proiect_IS.model.CerereProiect;

import java.util.List;

public interface CerereProiectRepository extends JpaRepository<CerereProiect, Integer> {
    List<CerereProiect> findByAprobata(boolean aprobata);
}
