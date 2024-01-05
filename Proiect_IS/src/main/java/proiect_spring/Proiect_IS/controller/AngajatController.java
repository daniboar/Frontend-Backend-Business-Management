package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.service.AngajatService;

import java.util.List;

@RestController
@RequestMapping("/angajati")
public class AngajatController {
    @Autowired
    private AngajatService angajatService;

    @Autowired
    public AngajatController(AngajatService angajatService) {
        this.angajatService = angajatService;
    }

    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor angajatilor.")
    public List<Angajat> getAllAngajati() {
        return angajatService.getAllAngajati();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unui angajat.")
    public Angajat getAngajatById(@PathVariable int id) {
        return angajatService.getAngajatById(id);
    }

    @GetMapping("/echipa/{echipaId}")
    @Operation(summary = "Endpoint pentru a vedea toti angajatii dintr-o echipa.")
    public List<Angajat> getAngajatiByEchipaId(@PathVariable int echipaId) {
        return angajatService.getAngajatiByEchipaId(echipaId);
    }

    @PutMapping("/procentaj/{id}/{procentaj}") //metoda care imi actualizeaza procentajul unui angajt la un proiect
    @Operation(summary = "Endpoint pentru a actualiza procentul proiectului unui angajat.")
    public Angajat updateProcentaj(@PathVariable int id, @PathVariable int procentaj) {
        return angajatService.updateProcentaj(id, procentaj);
    }

    @GetMapping("/proiect/{angajatId}")
    @Operation(summary = "Endpoint pentru a vedea datele proiectului unui angajat.")
    public Proiect getProiectAngajat(@PathVariable int angajatId) {
        Proiect proiect = angajatService.getProiectAngajat(angajatId);

        if (proiect != null) {
            return proiect;
        } else {
            return null;
        }
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga un nou angajat.")
    public Angajat saveAngajat(@RequestBody Angajat angajat) {
        return angajatService.saveAngajat(angajat);
    }

    @PostMapping("/adauga-cerere-marire/{angajatId}")
    @Operation(summary = "Endpoint care adauga o cerere de marire pentru un angajat.")
    public void adaugaCerereMarire(@PathVariable int angajatId) {
        angajatService.adaugaCerereMarire(angajatId);
    }

    @PostMapping("/login")
    @Operation(summary = "Endpoint pentru login Angajat")
    public Boolean login(@RequestParam String email, @RequestParam String password) {
        return angajatService.login(email, password);

    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge un angajat.")
    public void deleteAngajat(@PathVariable int id) {
        angajatService.deleteAngajat(id);
    }


}