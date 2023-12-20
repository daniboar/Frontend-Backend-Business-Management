package proiect_spring.Proiect_IS.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Angajat> getAllAngajati() {
        return angajatService.getAllAngajati();
    }

    @GetMapping("/{id}")
    public Angajat getAngajatById(@PathVariable int id) {
        return angajatService.getAngajatById(id).orElse(null);
    }

    @GetMapping("/echipa/{echipaId}")
    public List<Angajat> getAngajatiByEchipaId(@PathVariable int echipaId) {
        return angajatService.getAngajatiByEchipaId(echipaId);
    }

    @PutMapping("/procentaj/{id}/{procentaj}") //metoda care imi actualizeaza procentajul unui angajt la un proiect
    public Angajat updateProcentaj(@PathVariable int id, @PathVariable int procentaj) {
        return angajatService.updateProcentaj(id, procentaj);
    }

    @GetMapping("/proiect/{angajatId}")
    public Proiect getProiectAngajat(@PathVariable int angajatId) {
        Proiect proiect = angajatService.getProiectAngajat(angajatId);

        if (proiect != null) {
            return proiect;
        } else {
            return null;
        }
    }

    @PostMapping
    public Angajat saveAngajat(@RequestBody Angajat angajat) {
        return angajatService.saveAngajat(angajat);
    }

    @DeleteMapping("/{id}")
    public void deleteAngajat(@PathVariable int id) {
        angajatService.deleteAngajat(id);
    }


}