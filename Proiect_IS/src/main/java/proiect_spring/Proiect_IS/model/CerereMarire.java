package proiect_spring.Proiect_IS.model;

import jakarta.persistence.*;

@Entity
public class CerereMarire {

    @Id
    private int id;

    @Column(name = "angajat_id")
    private int angajatId;

    @Column
    private boolean cerereAprobata;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAngajatId() {
        return angajatId;
    }

    public void setAngajatId(int angajatId) {
        this.angajatId = angajatId;
    }

    public boolean isCerereAprobata() {
        return cerereAprobata;
    }

    public void setCerereAprobata(boolean cerereAprobata) {
        this.cerereAprobata = cerereAprobata;
    }
}
