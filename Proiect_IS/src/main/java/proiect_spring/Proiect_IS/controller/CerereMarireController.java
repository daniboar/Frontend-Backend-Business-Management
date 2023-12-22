package proiect_spring.Proiect_IS.controller;// În CerereMarireController.java

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.CerereMarire;
import proiect_spring.Proiect_IS.service.CerereMarireService;

import java.util.List;

@RestController
@RequestMapping("/cereri-marire")
public class CerereMarireController {

    @Autowired
    private CerereMarireService cerereMarireService;

    @GetMapping
    @Operation(summary = "Endpoint ce imi returneaza toate cererile de marire")
    public List<CerereMarire> getAllCereriMarire() {
        return cerereMarireService.getAllCereriMarire();
    }

    @GetMapping("/{cerereId}")
    @Operation(summary = "Endpoint ce imi returneaza o cerere de marire")
    public CerereMarire getCerereMarireById(@PathVariable int cerereId) {
        return cerereMarireService.getCerereMarireById(cerereId);
    }

    @PostMapping("/{angajatId}")
    @Operation(summary = "Endpoint ce imi adauga o cerere de marire pentru un angajat")
    public void adaugaCerereMarire(@PathVariable int angajatId) {
        cerereMarireService.adaugaCerereMarire(angajatId);
    }

    @DeleteMapping("/{cerereId}")
    @Operation(summary = "Endpoint ce imi sterge o cerere de marire")
    public void stergeCerereMarire(@PathVariable int cerereId) {
        cerereMarireService.stergeCerereMarire(cerereId);
    }

}
