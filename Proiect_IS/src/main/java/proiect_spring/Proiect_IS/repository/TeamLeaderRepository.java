package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import proiect_spring.Proiect_IS.model.TeamLeader;

public interface TeamLeaderRepository extends JpaRepository<TeamLeader, Integer> {
    // Alte metode specifice pentru interacțiunea cu baza de date
}
