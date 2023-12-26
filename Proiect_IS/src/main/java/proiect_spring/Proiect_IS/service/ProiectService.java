package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Echipa;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.repository.AngajatRepository;
import proiect_spring.Proiect_IS.repository.EchipaRepository;
import proiect_spring.Proiect_IS.repository.ProiectRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.List;

@Service
public class ProiectService {
    @Autowired
    private ProiectRepository proiectRepository;

    @Autowired
    private AngajatRepository angajatRepository;

    @Autowired
    private EchipaRepository echipaRepository;

    private static final Logger log = LoggerFactory.getLogger(ProiectService.class);

    public ProiectService(ProiectRepository proiectRepository) {
        this.proiectRepository = proiectRepository;
    }

    public List<Proiect> getAllProjects() {
        return proiectRepository.findAll();
    }

    public Proiect getProjectById(int id) {
        return proiectRepository.findById(id).orElse(null);
    }

    public Proiect saveProject(Proiect proiect) {
        return proiectRepository.save(proiect);
    }

    public void deleteProject(int id) {
        proiectRepository.deleteById(id);
    }

    public Proiect updateProcentaj(int id, int procentaj) {
        Proiect existingProiect = proiectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Proiectul nu a fost găsit!"));

        existingProiect.setProcentaj(procentaj);
        if(existingProiect.getProcentaj() >= 100){
            existingProiect.setStareProiect("finalizat");
        }else{
            existingProiect.setStareProiect("nefinalizat");
        }
        return proiectRepository.save(existingProiect);
    }

    public Proiect actualizeazaProcentajProiect(int idProiect) {
        Proiect proiect = proiectRepository.findById(idProiect).orElse(null);
        if (proiect != null) {
            int procentajTotal = proiect.getAngajati().stream()
                    .mapToInt(Angajat::getProcentajProiect)
                    .sum();
            proiect.setProcentaj(procentajTotal);

            // Salvează proiectul în repository-ul Proiect
            proiectRepository.save(proiect);
        }
        return proiect;
    }

    public List<Proiect> getProjectsByEchipaId(int echipaId){
        return proiectRepository.findByEchipe_Id(echipaId);
    }

}