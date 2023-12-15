package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.CerereProiect;
import proiect_spring.Proiect_IS.repository.CerereProiectRepository;

import java.util.List;

@Service
public class CerereProiectService {
    private final CerereProiectRepository cerereProiectRepository;

    @Autowired
    public CerereProiectService(CerereProiectRepository cerereProiectRepository) {
        this.cerereProiectRepository = cerereProiectRepository;
    }

    public List<CerereProiect> getAllCereriProiect() {
        return cerereProiectRepository.findAll();
    }

    public CerereProiect getCerereProiectById(int id) {
        return cerereProiectRepository.findById(id).orElse(null);
    }

    public List<CerereProiect> getCereriProiectByAprobata(boolean aprobata) {
        return cerereProiectRepository.findByAprobata(aprobata);
    }

    public CerereProiect saveCerereProiect(CerereProiect cerereProiect) {
        return cerereProiectRepository.save(cerereProiect);
    }

    public void deleteCerereProiect(int id) {
        cerereProiectRepository.deleteById(id);
    }

    public CerereProiect updateAprobata(int id, boolean aprobata) {
        CerereProiect existingCerere = cerereProiectRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Cererea nu a fost găsită!"));

        existingCerere.setAprobata(aprobata);
        return cerereProiectRepository.save(existingCerere);
    }
}
