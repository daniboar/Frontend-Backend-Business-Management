package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.CerereProiect;
import proiect_spring.Proiect_IS.service.CerereProiectService;

import java.util.List;

@RestController
@RequestMapping("/cereri-proiect")
public class CerereProiectController {
    private final CerereProiectService cerereProiectService;

    @Autowired
    public CerereProiectController(CerereProiectService cerereProiectService) {
        this.cerereProiectService = cerereProiectService;
    }

    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor cererilor de proiecte.")
    public List<CerereProiect> getAllCereriProiect() {
        return cerereProiectService.getAllCereriProiect();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unei cereri de proiect.")
    public CerereProiect getCerereProiectById(@PathVariable int id) {
        return cerereProiectService.getCerereProiectById(id);
    }

    @GetMapping("/aprobate/{aprobata}")
    @Operation(summary = "Endpoint pentru a vedea datele cererilor in functie de starea lor.")
    public List<CerereProiect> getCereriProiectByAprobata(@PathVariable boolean aprobata) {
        return cerereProiectService.getCereriProiectByAprobata(aprobata);
    }

    @PutMapping("/aprobata/{id}/{aprobata}")
    @Operation(summary = "Endpoint pentru a actualiza starea unui proiect.")
    public CerereProiect updateAprobata(@PathVariable int id, @PathVariable boolean aprobata) {
        return cerereProiectService.updateAprobata(id, aprobata);
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga o noua cerere de proiect.")
    public CerereProiect saveCerereProiect(@RequestBody CerereProiect cerereProiect) {
        return cerereProiectService.saveCerereProiect(cerereProiect);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge o cerere de proiect.")
    public void deleteCerereProiect(@PathVariable int id) {
        cerereProiectService.deleteCerereProiect(id);
    }
}
