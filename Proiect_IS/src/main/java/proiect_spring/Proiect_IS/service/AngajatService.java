package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.CEO;
import proiect_spring.Proiect_IS.model.CerereMarire;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.repository.AngajatRepository;
import proiect_spring.Proiect_IS.repository.CerereMarireRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AngajatService {
    @Autowired
    private  AngajatRepository angajatRepository;

    @Autowired
    private CerereMarireRepository cerereMarireRepository;

    @Autowired
    public AngajatService(AngajatRepository angajatRepository) {
        this.angajatRepository = angajatRepository;
    }

    public List<Angajat> getAllAngajati() {
        return angajatRepository.findAll();
    }

    public Angajat getAngajatById(int id) {
        return angajatRepository.findById(id).orElse(null);
    }

    public Angajat saveAngajat(Angajat angajat) {
        return angajatRepository.save(angajat);
    }

    public void deleteAngajat(int id) {
        angajatRepository.deleteById(id);
    }

    public Angajat updateProcentaj(int angajatId, int procentaj) {
        Angajat existingAngajat = angajatRepository.findById(angajatId)
                .orElseThrow(() -> new IllegalArgumentException("Angajatul nu a fost găsit!"));

        existingAngajat.setProcentajProiect(procentaj);
        return angajatRepository.save(existingAngajat);
    }

    public Proiect getProiectAngajat(int angajatId) {
       Angajat angajat = getAngajatById(angajatId);

        if (angajat != null) {
            return angajat.getProiectAsignat();
        }

        return null;
    }

    public List<Angajat> getAngajatiByEchipaId(int echipaId) {
        return angajatRepository.findByEchipa_Id(echipaId);
    }

    public void adaugaCerereMarire(int angajatId) {
        Angajat angajat = angajatRepository.findById(angajatId).orElse(null);;

        if (angajat != null) {
            CerereMarire cerereMarire = new CerereMarire();
            cerereMarire.setAngajatId(angajat.getId());
            cerereMarire.setCerereAprobata(false); // Setează inițial cererea ca neaprobată
            cerereMarireRepository.save(cerereMarire);
        }
    }

    public boolean login(String email, String password) {
        Angajat angajat = angajatRepository.findByEmailAndParola(email, password);
        return angajat != null;
    }
}