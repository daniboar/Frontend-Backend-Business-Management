package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.service.ProiectService;

import java.util.List;

@RestController
@RequestMapping(path = "/proiecte")

public class ProiectController {
    @Autowired
    private ProiectService proiectService;

    @Autowired
    public ProiectController(ProiectService proiectService) {
        this.proiectService = proiectService;
    }

    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor proiectelor.")
    public List<Proiect> getAllProjects() {
        return proiectService.getAllProjects();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unui proiect.")
    public Proiect getProjectById(@PathVariable int id) {
        return proiectService.getProjectById(id);
    }

    @GetMapping("/echipa/{echipaId}")
    @Operation(summary = "Endpoint pentru a vedea datele proiectului care apartine unei echipe.")
    public List<Proiect> getProjectsByEchipaId(@PathVariable int echipaId) {
        return proiectService.getProjectsByEchipaId(echipaId);
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga un nou proiect.")
    public Proiect saveProject(@RequestBody Proiect proiect) {
        return proiectService.saveProject(proiect);
    }

    @PutMapping("/procentaj/{id}/{procentaj}") //verificare metoda de actualizare procentaj dat de mine
    @Operation(summary = "Endpoint pentru a actualiza procentul unui proiect.")
    public Proiect updateProcentaj(@PathVariable int id, @PathVariable int procentaj) {
        return proiectService.updateProcentaj(id, procentaj);
    }

    @PutMapping("/actualizeaza_procentaj/{id}") //actualizeaza procentajul proiectului in functie de procentajele angajatilor
    @Operation(summary = "Endpoint pentru a actualiza procentajul unui proiect in functie de procentajele angajatilor asignati la acel proiect.")
    public Proiect actualizeazaProcentajProiect(@PathVariable int id) {
        return proiectService.actualizeazaProcentajProiect(id);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge un proiect.")
    public void deleteProject(@PathVariable int id) {
        proiectService.deleteProject(id);
    }
}