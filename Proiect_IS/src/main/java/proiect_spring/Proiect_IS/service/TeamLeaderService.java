package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Echipa;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.model.TeamLeader;
import proiect_spring.Proiect_IS.repository.AngajatRepository;
import proiect_spring.Proiect_IS.repository.EchipaRepository;
import proiect_spring.Proiect_IS.repository.ProiectRepository;
import proiect_spring.Proiect_IS.repository.TeamLeaderRepository;

import java.util.List;

@Service
public class TeamLeaderService {
    @Autowired
    private TeamLeaderRepository teamLeaderRepository;

    @Autowired
    private EchipaRepository echipaRepository;

    @Autowired
    private AngajatRepository angajatRepository;

    @Autowired
    private ProiectRepository proiectRepository;

    @Autowired
    private EchipaService echipaService;

    @Autowired
    private ProiectService proiectService;


    public List<TeamLeader> getAllTeamLeaders() {
        return teamLeaderRepository.findAll();
    }

    public TeamLeader getTeamLeaderById(int id) {
        return teamLeaderRepository.findById(id).orElse(null);
    }

    public TeamLeader saveTeamLeader(TeamLeader teamLeader) {
        return teamLeaderRepository.save(teamLeader);
    }

    public void deleteTeamLeader(int id) {
        teamLeaderRepository.deleteById(id);
    }

    public List<Angajat> getEchipa(int teamLeaderId) {
        TeamLeader teamLeader = teamLeaderRepository.findById(teamLeaderId).orElse(null);
        return teamLeader != null ? teamLeader.getEchipa().getAngajati() : null;
    }

    public Proiect getProiect(int teamLeaderId) {
        TeamLeader teamLeader = getTeamLeaderById(teamLeaderId);
        return teamLeader.getProiectAsignat();
    }

    public void asignareEchipa(int teamLeaderId, int echipaId) {
        TeamLeader teamLeader = getTeamLeaderById(teamLeaderId);
        Echipa echipa =  echipaService.getEchipaById(echipaId);

        if (teamLeader != null && echipa != null) {
            teamLeader.setEchipa(echipa);
            teamLeader.setProiectAsignat(echipa.getProiect());  // actualizare proiect în TeamLeader
            teamLeaderRepository.save(teamLeader);
        }
    }

    public void adaugaAngajatEchipa(int teamLeaderId, int angajatId) {
        TeamLeader teamLeader = teamLeaderRepository.findById(teamLeaderId).orElse(null);
        Angajat angajat = angajatRepository.findById(angajatId).orElse(null);

        if (teamLeader != null && angajat != null) {
            Echipa echipa = teamLeader.getEchipa();
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

    public void stergeAngajatEchipa(int teamLeaderId, int angajatId) {
        TeamLeader teamLeader = teamLeaderRepository.findById(teamLeaderId).orElse(null);
        Angajat angajat = angajatRepository.findById(angajatId).orElse(null);

        if (teamLeader != null && angajat != null) {
            // Elimină angajatul din echipă
            Echipa echipa = teamLeader.getEchipa();
            List<Angajat> angajatiInEchipa = echipa.getAngajati();
            angajatiInEchipa.remove(angajat);
            echipa.setAngajati(angajatiInEchipa);
            echipaRepository.save(echipa);

            // Actualizează echipa la care este asignat angajatul
            angajat.setEchipa(null);
            angajatRepository.save(angajat);
        }
    }

    public void actualizeazaProcentajProiect(int teamLeaderId, int proiectId, int procentaj) {
        TeamLeader teamLeader = teamLeaderRepository.findById(teamLeaderId).orElse(null);
        Proiect proiect = proiectRepository.findById(proiectId).orElse(null);

        if (teamLeader != null && proiect != null) {
            // Actualizează procentajul proiectului în echipa condusă de TeamLeader
            proiect.setProcentaj(procentaj);
            proiectRepository.save(proiect);

            // Actualizează procentajul la care contribuie TeamLeader în proiect
            teamLeader.setProcentajProiect(procentaj);
            teamLeaderRepository.save(teamLeader);
        }
    }

    public void actualizeazaProcentajTeamLeader(int teamLeaderId) {
        TeamLeader teamLeader = getTeamLeaderById(teamLeaderId);

        if (teamLeader != null) {
            // Obține lista de angajați din echipa TeamLeader-ului
            List<Angajat> angajati = teamLeader.getEchipa().getAngajati();

            // Calculează suma procentajelor angajaților
            int sumaProcentaje = angajati.stream().mapToInt(Angajat::getProcentajProiect).sum();

            // Actualizează procentajul TeamLeader-ului și proiectului asociat
            teamLeader.setProcentajProiect(sumaProcentaje);
            teamLeaderRepository.save(teamLeader);
            Proiect proiectEchipa = teamLeader.getEchipa().getProiect();
            if(proiectEchipa != null)
                proiectService.updateProcentaj(teamLeader.getProiectId(), sumaProcentaje);
        }
    }
}
