package proiect_spring.Proiect_IS.controller;

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

    @PutMapping("/{id}/aprobata/{aprobata}")
    public CerereProiect updateAprobata(@PathVariable int id, @PathVariable boolean aprobata) {
        return cerereProiectService.updateAprobata(id, aprobata);
    }

    @GetMapping
    public List<CerereProiect> getAllCereriProiect() {
        return cerereProiectService.getAllCereriProiect();
    }

    @GetMapping("/{id}")
    public CerereProiect getCerereProiectById(@PathVariable int id) {
        return cerereProiectService.getCerereProiectById(id);
    }

    @GetMapping("/aprobate/{aprobata}")
    public List<CerereProiect> getCereriProiectByAprobata(@PathVariable boolean aprobata) {
        return cerereProiectService.getCereriProiectByAprobata(aprobata);
    }

    @PostMapping
    public CerereProiect saveCerereProiect(@RequestBody CerereProiect cerereProiect) {
        return cerereProiectService.saveCerereProiect(cerereProiect);
    }

    @DeleteMapping("/{id}")
    public void deleteCerereProiect(@PathVariable int id) {
        cerereProiectService.deleteCerereProiect(id);
    }
}
