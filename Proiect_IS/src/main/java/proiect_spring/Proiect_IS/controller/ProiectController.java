package proiect_spring.Proiect_IS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.service.ProiectService;

import java.util.List;

@RestController
@RequestMapping(path = "/proiecte")

public class ProiectController {
    private final ProiectService proiectService;

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

    @PostMapping
    public Proiect saveProject(@RequestBody Proiect proiect) {
        return proiectService.saveProject(proiect);
    }

    @PutMapping("/{id}/procentaj/{procentaj}")
    public Proiect updateProcentaj(@PathVariable int id, @PathVariable int procentaj) {
        return proiectService.updateProcentaj(id, procentaj);
    }
    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable int id) {
        proiectService.deleteProject(id);
    }
}
