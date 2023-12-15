package proiect_spring.Proiect_IS.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@JsonIgnoreProperties({"proiectAsignat"})
public class Angajat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String nume;

    @Column
    private String prenume;

    @Column
    private String email;

    @Column
    private String parola;

    @ManyToOne
    @JoinColumn(name = "proiect_asignat_id")
    private Proiect proiectAsignat;

    @Column
    private int salariu;

    @Column
    private int procentajProiect;

    @Column
    private int echipaId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProiectId() {
        return proiectAsignat != null ? proiectAsignat.getId() : 0;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getParola() {
        return parola;
    }

    public void setParola(String parola) {
        this.parola = parola;
    }

    public Proiect getProiectAsignat() {
        return proiectAsignat;
    }

    public void setProiectAsignat(Proiect proiectAsignat) {
        this.proiectAsignat = proiectAsignat;
    }

    public int getSalariu() {
        return salariu;
    }

    public void setSalariu(int salariu) {
        this.salariu = salariu;
    }

    public int getProcentajProiect() {
        return procentajProiect;
    }

    public void setProcentajProiect(int procentajProiect) {
        this.procentajProiect = procentajProiect;
    }

    public int getEchipaId() {
        return echipaId;
    }

    public void setEchipaId(int echipaId) {
        this.echipaId = echipaId;
    }
}
