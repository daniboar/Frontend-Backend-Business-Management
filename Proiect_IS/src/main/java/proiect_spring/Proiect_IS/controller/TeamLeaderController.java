package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @Operation(summary = "Endpoint pentru a vedea datele tuturor TeamLeaderilor")
    public List<TeamLeader> getAllTeamLeaders() {
        return teamLeaderService.getAllTeamLeaders();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unui Teamleader")
    public TeamLeader getTeamLeaderById(@PathVariable int id) {
        return teamLeaderService.getTeamLeaderById(id);
    }


    @GetMapping("/echipa/{teamLeaderId}")
    @Operation(summary = "Endpoint pentru a vedea echipa unui TeamLeader")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Succes - Răspuns OK"),
            @ApiResponse(responseCode = "404", description = "Not Found - Resursa nu a fost găsită"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error - Eroare internă de server")
    })
    public List<Angajat> getEchipa(@PathVariable int teamLeaderId) {
        return teamLeaderService.getEchipa(teamLeaderId);
    }

    @GetMapping("/proiect/{teamLeaderId}")
    @Operation(summary = "Endpoint pentru a vedea proiectul unui TeamLeader")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Succes - Răspuns OK"),
            @ApiResponse(responseCode = "404", description = "Not Found - Resursa nu a fost găsită"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error - Eroare internă de server")
    })
    public Proiect getProiect(@PathVariable int teamLeaderId) {
        return teamLeaderService.getProiect(teamLeaderId);
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga un nou TeamLeader.", description = "Acest endpoint trebuie sa primeasca toate datele necesare pentru a introduce un TeamLeader in tabela. ")
    public TeamLeader saveTeamLeader(@RequestBody TeamLeader teamLeader) {
        return teamLeaderService.saveTeamLeader(teamLeader);
    }

    @PostMapping("/echipa/{teamLeaderId}/{angajatId}")
    @Operation(summary = "Endpoint pentru ca un TeamLeader sa adauge un angajat in echipa.", description = "Acest endpoint primeste id-ul TeamLeaderului si al angajatului.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Succes - Răspuns OK"),
            @ApiResponse(responseCode = "404", description = "Not Found - Resursa nu a fost găsită"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error - Eroare internă de server")
    })
    public void adaugaAngajatEchipa(@PathVariable int teamLeaderId, @PathVariable int angajatId) {
        teamLeaderService.adaugaAngajatEchipa(teamLeaderId, angajatId);
    }

    @PostMapping("/asignare-echipa/{teamLeaderId}/{echipaId}")
    @Operation(summary = "Endpoint pentru a asigna un TeamLeader la o echipa.")
    public void asignareEchipa(@PathVariable int teamLeaderId, @PathVariable int echipaId) {
        teamLeaderService.asignareEchipa(teamLeaderId, echipaId);

    }

    @PostMapping("/actualizeaza-procentaj/{teamLeaderId}")
    @Operation(summary = "Endpoint pentru a actualiza automat procentajul proiectului la care lucreaza si TeamLeaderul.", description = "Liderul preia procentajele venite de la angajati, le face suma, iar aceasta suma va fi noul procent actualizat al proiectului echipei")
    public void actualizeazaProcentajTeamLeader(@PathVariable int teamLeaderId) {
        teamLeaderService.actualizeazaProcentajTeamLeader(teamLeaderId);
    }

    @PostMapping("/login")
    @Operation(summary = "Endpoint pentru login TeamLeader")
    public Boolean login(@RequestParam String email, @RequestParam String password) {
        return teamLeaderService.login(email, password);
    }

    @PutMapping("/proiect/procentaj/{teamLeaderId}/{proiectId}/{procentaj}")
    @Operation(summary = "Endpoint pentru a actualiza procentul TeamLeaderului.")
    public void actualizeazaProcentajProiect(
            @PathVariable int teamLeaderId,
            @PathVariable int proiectId,
            @PathVariable int procentaj
    ) {
        teamLeaderService.actualizeazaProcentajProiect(teamLeaderId, proiectId, procentaj);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge un TeamLeader din tabela.")
    public void deleteTeamLeader(@PathVariable int id) {
        teamLeaderService.deleteTeamLeader(id);
    }


    @DeleteMapping("/echipa/{teamLeaderId}/{angajatId}")
    @Operation(summary = "Endpoint pentru a sterge un angajat din echipa")
    public void stergeAngajatEchipa(@PathVariable int teamLeaderId, @PathVariable int angajatId) {
        teamLeaderService.stergeAngajatEchipa(teamLeaderId, angajatId);
    }
}
