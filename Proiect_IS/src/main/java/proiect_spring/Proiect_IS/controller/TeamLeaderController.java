package proiect_spring.Proiect_IS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.model.TeamLeader;
import proiect_spring.Proiect_IS.service.TeamLeaderService;

import java.util.List;

@RestController
@RequestMapping("/team-leaders")
public class TeamLeaderController {

    @Autowired
    private TeamLeaderService teamLeaderService;

    @GetMapping
    public List<TeamLeader> getAllTeamLeaders() {
        return teamLeaderService.getAllTeamLeaders();
    }

    @GetMapping("/{id}")
    public TeamLeader getTeamLeaderById(@PathVariable int id) {
        return teamLeaderService.getTeamLeaderById(id);
    }

    @GetMapping("/{teamLeaderId}/echipa")
    public List<Angajat> getEchipa(@PathVariable int teamLeaderId) {
        return teamLeaderService.getEchipa(teamLeaderId);
    }

    @GetMapping("/{teamLeaderId}/proiect")
    public Proiect getProiect(@PathVariable int teamLeaderId) {
        return teamLeaderService.getProiect(teamLeaderId);
    }

    @PostMapping
    public TeamLeader saveTeamLeader(@RequestBody TeamLeader teamLeader) {
        return teamLeaderService.saveTeamLeader(teamLeader);
    }

    @PostMapping("/{teamLeaderId}/echipa/{angajatId}")
    public void adaugaAngajatEchipa(@PathVariable int teamLeaderId, @PathVariable int angajatId) {
        teamLeaderService.adaugaAngajatEchipa(teamLeaderId, angajatId);
    }

    @PostMapping("/{teamLeaderId}/asignare-echipa/{echipaId}")
    public void asignareEchipa(@PathVariable int teamLeaderId, @PathVariable int echipaId) {
        teamLeaderService.asignareEchipa(teamLeaderId, echipaId);

    }

    @PostMapping("/{teamLeaderId}/actualizeaza-procentaj")
    public void actualizeazaProcentajTeamLeader(@PathVariable int teamLeaderId) {
        teamLeaderService.actualizeazaProcentajTeamLeader(teamLeaderId);
    }

    @PutMapping("/{teamLeaderId}/proiect/{proiectId}/procentaj/{procentaj}")
    public void actualizeazaProcentajProiect(
            @PathVariable int teamLeaderId,
            @PathVariable int proiectId,
            @PathVariable int procentaj
    ) {
        teamLeaderService.actualizeazaProcentajProiect(teamLeaderId, proiectId, procentaj);
    }

    @DeleteMapping("/{id}")
    public void deleteTeamLeader(@PathVariable int id) {
        teamLeaderService.deleteTeamLeader(id);
    }


    @DeleteMapping("/{teamLeaderId}/echipa/{angajatId}")
    public void stergeAngajatEchipa(@PathVariable int teamLeaderId, @PathVariable int angajatId) {
        teamLeaderService.stergeAngajatEchipa(teamLeaderId, angajatId);
    }



}
