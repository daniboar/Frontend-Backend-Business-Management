package proiect_spring.Proiect_IS.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Echipa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "proiect_id")
    private Proiect proiect;

    @OneToMany(mappedBy = "echipa")
    private List<Angajat> angajati = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "team_leader_id")
    private TeamLeader teamLeader;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Proiect getProiect() {
        return proiect;
    }

    public void setProiect(Proiect proiect) {
        this.proiect = proiect;
    }

    public List<Angajat> getAngajati() {
        return angajati;
    }

    public void setAngajati(List<Angajat> angajati) {
        this.angajati = angajati;
    }

    public TeamLeader getTeamLeader() {
        return teamLeader;
    }

    public void setTeamLeader(TeamLeader teamLeader) {
        this.teamLeader = teamLeader;
    }
}
