package proiect_spring.Proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@JsonIgnoreProperties({"proiect"})
public class CerereProiect {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private boolean aprobata;

    @ManyToOne
    @JoinColumn(name = "proiect_id")
    private Proiect proiect;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProiectId() {
        return proiect != null ? proiect.getId() : 0;
    }

    public boolean isAprobata() {
        return aprobata;
    }

    public void setAprobata(boolean aprobata) {
        this.aprobata = aprobata;
    }

    public void setProiect(Proiect proiect) {
        this.proiect = proiect;
    }
}
