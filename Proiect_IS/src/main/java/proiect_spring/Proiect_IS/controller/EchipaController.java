package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.Echipa;
import proiect_spring.Proiect_IS.service.EchipaService;

import java.util.List;

@RestController
@RequestMapping("/echipe")
public class EchipaController {
    private final EchipaService echipaService;

    @Autowired
    public EchipaController(EchipaService echipaService) {
        this.echipaService = echipaService;
    }
    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor echipelor.")
    public List<Echipa> getAllEchipe() {
        return echipaService.getAllEchipe();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unei echipe.")
    public Echipa getEchipaById(@PathVariable int id) {
        return echipaService.getEchipaById(id);
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga o noua echipa.")
    public Echipa saveEchipa(@RequestBody Echipa echipa) {
        return echipaService.saveEchipa(echipa);
    }

    @PostMapping("/asignare_angajat/{echipaId}/{angajatId}")
    @Operation(summary = "Endpoint pentru a adauga un angajat intr-o echipa.")
    public void asignareAngajatEchipa(@PathVariable int echipaId, @PathVariable int angajatId) {
        echipaService.asignareAngajatEchipa(echipaId, angajatId);
    }

    @PostMapping("/asignare_teamLeader/{echipaId}/{teamLeaderId}")
    @Operation(summary = "Endpoint pentru a adauga liderul echipei")
    public void asignareTeamLeader(@PathVariable int echipaId, @PathVariable int teamLeaderId){
        echipaService.adaugaTeamleader(echipaId, teamLeaderId);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge o echipa.")
    public void deleteEchipa(@PathVariable int id) {
        echipaService.deleteEchipa(id);
    }

    @DeleteMapping("/teamleaders/{echipaId}")
    @Operation(summary = "Endpoint care imi sterge liderul echipei")
    public void stergeTeamLeader(@PathVariable int echipaId){
        echipaService.stergeTeamLEader(echipaId);
    }

    @DeleteMapping("/angajati/{echipaId}/{angajatId}")
    @Operation(summary = "Endpoint pentru a sterge un angajat dintr-o echipa.")
    public void stergereAngajat(@PathVariable int echipaId, @PathVariable int angajatId) {
        echipaService.stergereAngajat(echipaId, angajatId);
    }
}
