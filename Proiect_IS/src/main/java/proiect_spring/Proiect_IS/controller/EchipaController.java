package proiect_spring.Proiect_IS.controller;

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
    public List<Echipa> getAllEchipe() {
        return echipaService.getAllEchipe();
    }

    @GetMapping("/{id}")
    public Echipa getEchipaById(@PathVariable int id) {
        return echipaService.getEchipaById(id);
    }

    @PostMapping
    public Echipa saveEchipa(@RequestBody Echipa echipa) {
        return echipaService.saveEchipa(echipa);
    }

    @DeleteMapping("/{id}")
    public void deleteEchipa(@PathVariable int id) {
        echipaService.deleteEchipa(id);
    }

    @DeleteMapping("/{echipaId}/angajati/{angajatId}")
    public void stergereAngajat(@PathVariable int echipaId, @PathVariable int angajatId) {
        echipaService.stergereAngajat(echipaId, angajatId);
    }

    @PostMapping("/{echipaId}/asignare_angajat/{angajatId}")
    public void asignareAngajatEchipa(@PathVariable int echipaId, @PathVariable int angajatId) {
        echipaService.asignareAngajatEchipa(echipaId, angajatId);
    }
}
