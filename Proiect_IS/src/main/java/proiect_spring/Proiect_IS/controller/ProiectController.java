package proiect_spring.Proiect_IS.controller;

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
    public List<Proiect> getAllProjects() {
        return proiectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Proiect getProjectById(@PathVariable int id) {
        return proiectService.getProjectById(id);
    }

    @GetMapping("/echipa/{echipaId}")
    public List<Proiect> getProjectsByEchipaId(@PathVariable int echipaId) {
        return proiectService.getProjectsByEchipaId(echipaId);
    }

    @PostMapping
    public Proiect saveProject(@RequestBody Proiect proiect) {
        return proiectService.saveProject(proiect);
    }

    @PutMapping("/{id}/procentaj/{procentaj}") //verificare metoda de actualizare procentaj dat de mine
    public Proiect updateProcentaj(@PathVariable int id, @PathVariable int procentaj) {
        return proiectService.updateProcentaj(id, procentaj);
    }

    @PutMapping("/{id}/actualizeaza_procentaj") //actualizeaza procentajul proiectului in functie de procentajele angajatilor
    public Proiect actualizeazaProcentajProiect(@PathVariable int id) {
        return proiectService.actualizeazaProcentajProiect(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable int id) {
        proiectService.deleteProject(id);
    }
}