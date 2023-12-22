package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.CEO;
import proiect_spring.Proiect_IS.model.Echipa;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.service.CEOService;

import java.util.List;

@RestController
@RequestMapping("/ceos")
public class CEOController {

    @Autowired
    private CEOService ceoService;

    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor directorilor generali.")
    public List<CEO> getAllCEOs() {
        return ceoService.getAllCEOs();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unui CEO")
    public CEO getCEOById(@PathVariable int id) {
        return ceoService.getCEOById(id);
    }

    @GetMapping("/echipe")
    @Operation(summary = "Endpoint pentru a vedea toate echipele")
    public List<Echipa> getEchipe() {
        return ceoService.getEchipe();
    }

    @GetMapping("/proiecte")
    @Operation(summary = "Endpoint pentru a vedea toate proiectele")
    public List<Proiect> getProiecte(){
        return ceoService.getProiecte();
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga un nou CEO.", description = "Acest endpoint trebuie sa primeasca toate datele necesare pentru a introduce un CEO in tabela. ")
    public CEO saveCEO(@RequestBody CEO ceo) {
        return ceoService.saveCEO(ceo);
    }



    @PostMapping("/schimba-salariu/angajat/{ceoId}/{angajatId}/{salariu_nou}")
    @Operation(summary = "Endpoint pentru a schimba salariul unui angajat.")
    public void schimbaSalariuAngajat(@PathVariable int ceoId, @PathVariable int angajatId, @PathVariable int salariu_nou) {
        ceoService.schimbaSalariuAngajat(ceoId, angajatId, salariu_nou);
    }

    @PostMapping("/schimba-salariu/teamleader/{ceoId}/{teamLeaderId}/{salariu_nou}")
    @Operation(summary = "Endpoint pentru a schimba salariul unui TeamLeader.")
    public void schimbaSalariuTeamLeader(@PathVariable int ceoId, @PathVariable int teamLeaderId, @PathVariable int salariu_nou) {
        ceoService.schimbaSalariuTeamLeader(ceoId, teamLeaderId, salariu_nou);
    }

    @PostMapping("/gestioneazaCerereMarire/{ceoID}/{angajatID}/{salariu}")
    @Operation(summary = "Endpoint care imi schimba salariu angajatului daca cererea sa este aprobata.")
    public void gestioneazaCerereMarire(@PathVariable int ceoID, @PathVariable int angajatID, @PathVariable int salariu) {
        ceoService.gestioneazaCerereMarire(ceoID, angajatID, salariu);
    }

    @PostMapping("/schimbaStareCerereMarire/{ceoID}/{angajatID}/{nouaStare}")
    @Operation(summary = "Endpoint care imi schimba starea cererii angajatului.")
    public void schimbaStareCerereMarire(@PathVariable int ceoID, @PathVariable int angajatID, @PathVariable boolean nouaStare) {
        ceoService.schimbaStareCerereMarireAngajat(ceoID, angajatID, nouaStare);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge un CEO din tabela.")
    public void deleteCEO(@PathVariable int id) {
        ceoService.deleteCEO(id);
    }
}
