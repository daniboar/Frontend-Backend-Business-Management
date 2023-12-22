package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.CerereMarire;
import proiect_spring.Proiect_IS.repository.AngajatRepository;
import proiect_spring.Proiect_IS.repository.CerereMarireRepository;

import java.util.List;

@Service
public class CerereMarireService {

    @Autowired
    private CerereMarireRepository cerereMarireRepository;

    @Autowired
    private AngajatRepository angajatRepository;

    public List<CerereMarire> getAllCereriMarire() {
        return cerereMarireRepository.findAll();
    }

    public CerereMarire getCerereMarireById(int cerereId) {
        return cerereMarireRepository.findById(cerereId).orElse(null);
    }

    public CerereMarire getCereriMarireByAngajatId(int angajatId) {
        return cerereMarireRepository.findByAngajatId(angajatId);
    }

    public void adaugaCerereMarire(int angajatId) {
        Angajat angajat = angajatRepository.findById(angajatId).orElse(null);
        if (angajat != null) {
            CerereMarire cerereMarire = new CerereMarire();
            cerereMarire.setAngajatId(angajatId);
            cerereMarireRepository.save(cerereMarire);
        } else {
            // Poți arunca o excepție sau trata altfel situația în care angajatul nu există
            throw new IllegalStateException("Angajatul cu ID-ul " + angajatId + " nu există.");
        }
    }

    public void stergeCerereMarire(int cerereId) {
        cerereMarireRepository.deleteById(cerereId);
    }
}
