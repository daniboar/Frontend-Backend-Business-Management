package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.repository.AngajatRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AngajatService {
    private final AngajatRepository angajatRepository;

    @Autowired
    public AngajatService(AngajatRepository angajatRepository) {
        this.angajatRepository = angajatRepository;
    }

    public List<Angajat> getAllAngajati() {
        return angajatRepository.findAll();
    }

    public Optional<Angajat> getAngajatById(int id) {
        return angajatRepository.findById(id);
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
        Optional<Angajat> angajat = getAngajatById(angajatId);

        if (angajat != null) {
            return angajat.get().getProiectAsignat();
        }

        return null;
    }

    public List<Angajat> getAngajatiByEchipaId(int echipaId) {
        return angajatRepository.findByEchipa_Id(echipaId);
    }
}