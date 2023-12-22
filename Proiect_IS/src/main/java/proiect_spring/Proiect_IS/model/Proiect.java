package proiect_spring.Proiect_IS.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@JsonIgnoreProperties({"cereriProiect", "client", "angajati", "echipe"})
public class Proiect {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String numeProiect;

    @Column
    private int procentaj;

    @Column
    private String stareProiect;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @OneToMany(mappedBy = "proiectAsignat", cascade = CascadeType.ALL)
    private List<Angajat> angajati = new ArrayList<>();

    @OneToMany(mappedBy = "proiect")
    private List<CerereProiect> cereriProiect;

    @OneToMany(mappedBy = "proiect", cascade = CascadeType.ALL)
    private List<Echipa> echipe;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNumeProiect() {
        return numeProiect;
    }

    public void setNumeProiect(String numeProiect) {
        this.numeProiect = numeProiect;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public List<CerereProiect> getCereriProiect() {
        return cereriProiect;
    }

    public int getProcentaj() {
        return procentaj;
    }

    public void setProcentaj(int procentaj) {
        this.procentaj = procentaj;
    }

    public String getStareProiect() {
        return stareProiect;
    }

    public void setStareProiect(String stareProiect) {
        this.stareProiect = stareProiect;
    }

    public void setCereriProiect(List<CerereProiect> cereriProiect) {
        this.cereriProiect = cereriProiect;
    }

    public int getClientId() {
        return client != null ? client.getId() : 0;
    }

    public List<Angajat> getAngajati() {
        return angajati;
    }

    public void setAngajati(List<Angajat> angajati) {
        this.angajati = angajati;
    }

    public List<Echipa> getEchipe() {
        return echipe;
    }

    public void setEchipe(List<Echipa> echipe) {
        this.echipe = echipe;
    }
}