package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.repository.ProiectRepository;

import java.util.List;

@Service
public class ProiectService {
    private final ProiectRepository proiectRepository;

    @Autowired
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
        return proiectRepository.save(existingProiect);
    }
}
