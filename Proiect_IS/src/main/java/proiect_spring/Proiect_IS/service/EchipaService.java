package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.*;
import proiect_spring.Proiect_IS.repository.*;

import java.util.List;

@Service
public class EchipaService {
    @Autowired
    private EchipaRepository echipaRepository;

    @Autowired
    private TeamLeaderRepository teamLeaderRepository;

    @Autowired
    private CerereProiectRepository cerereProiectRepository;

    @Autowired
    private ProiectRepository proiectRepository;

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
            angajat.setProiectAsignat(echipa.getProiect());
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
            angajat.setProiectAsignat(null);
            angajatRepository.save(angajat);
        }
    }

    public void adaugaTeamleader(int echipaId, int teamleaderId){
        Echipa echipa = echipaRepository.findById(echipaId).orElse(null);
        TeamLeader teamLeader = teamLeaderRepository.findById(teamleaderId).orElse(null);

        if (echipa != null && teamLeader != null) {
            echipa.setTeamLeader(teamLeader);
            echipaRepository.save(echipa);

            teamLeader.setEchipa(echipa);
            teamLeader.setProiectAsignat(echipa.getProiect());
            teamLeaderRepository.save(teamLeader);
        }
    }

    public void stergeTeamLEader(int echipaId){
        Echipa echipa = echipaRepository.findById(echipaId).orElse(null);

        if(echipa != null){
            TeamLeader teamLeader = echipa.getTeamLeader();

            if(teamLeader != null){
                echipa.setTeamLeader(null);
                echipaRepository.save(echipa);

                teamLeader.setEchipa(null);
                teamLeader.setProiectAsignat(null);
                teamLeaderRepository.save(teamLeader);
            }
        }
    }

    public void asignareProiectEchipa(int echipaId, int proiectId){
        Echipa echipa = echipaRepository.findById(echipaId).orElse(null);
        Proiect proiect = proiectRepository.findById(echipaId).orElse(null);
        if(echipa != null && proiect != null){
            //verific daca exista o cerere de proiect aprobata
            List<CerereProiect> cereriProiect = cerereProiectRepository.findAll();
            for(CerereProiect cerere: cereriProiect){
                if(cerere.getProiectId() == proiectId){
                    if(cerere.isAprobata()){
                        echipa.setProiect(proiect);
                        echipaRepository.save(echipa);
                        cerereProiectRepository.delete(cerere);
                        break;
                    }
                }
            }
        }
    }
}
