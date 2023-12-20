package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Echipa;
import proiect_spring.Proiect_IS.repository.AngajatRepository;
import proiect_spring.Proiect_IS.repository.EchipaRepository;

import java.util.List;

@Service
public class EchipaService {
    @Autowired
    private EchipaRepository echipaRepository;

    @Autowired
    private AngajatRepository angajatRepository;
    public List<Echipa> getAllEchipe() {
        return echipaRepository.findAll();
    }

    public Echipa getEchipaById(int id) {
        return echipaRepository.findById(id).orElse(null);
    }

    public Echipa saveEchipa(Echipa echipa) {
        return echipaRepository.save(echipa);
    }

    public void deleteEchipa(int id) {
        echipaRepository.deleteById(id);
    }

    public void asignareAngajatEchipa(int echipaId, int angajatId) {
        Echipa echipa = echipaRepository.findById(echipaId).orElse(null);
        Angajat angajat = angajatRepository.findById(angajatId).orElse(null);

        if (echipa != null && angajat != null) {
            //actualizez proiectul la care este angajatul
            angajat.setProiectAsignat(echipa.getProiect());

            // Adaugă angajatul la echipa
            List<Angajat> angajatiInEchipa = echipa.getAngajati();
            angajatiInEchipa.add(angajat);
            echipa.setAngajati(angajatiInEchipa);
            echipaRepository.save(echipa);

            // Actualizează echipa la care este asignat angajatul
            angajat.setEchipa(echipa);
            angajatRepository.save(angajat);
        }
    }

    public void stergereAngajat(int echipaId, int angajatId) {
        Echipa echipa = echipaRepository.findById(echipaId).orElse(null);
        Angajat angajat = angajatRepository.findById(angajatId).orElse(null);

        if (echipa != null && angajat != null) {
            // Elimină angajatul din echipă
            List<Angajat> angajatiInEchipa = echipa.getAngajati();
            angajatiInEchipa.remove(angajat);
            echipa.setAngajati(angajatiInEchipa);
            echipaRepository.save(echipa);

            // Actualizează echipa la care este asignat angajatul
            angajat.setEchipa(null);
            angajatRepository.save(angajat);
        }
    }
}
