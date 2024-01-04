package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proiect_spring.Proiect_IS.model.CEO;

@Repository
public interface CEORepository extends JpaRepository<CEO, Integer> {
    CEO findByEmailAndParola(String email, String password);
}
