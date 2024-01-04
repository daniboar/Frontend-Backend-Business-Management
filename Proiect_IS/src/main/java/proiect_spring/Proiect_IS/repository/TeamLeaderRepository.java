package proiect_spring.Proiect_IS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import proiect_spring.Proiect_IS.model.TeamLeader;

@Repository
public interface TeamLeaderRepository extends JpaRepository<TeamLeader, Integer> {
    TeamLeader findByEmailAndParola(String email, String password);
}
