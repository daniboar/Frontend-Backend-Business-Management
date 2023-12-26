package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.Angajat;
import proiect_spring.Proiect_IS.model.Client;
import proiect_spring.Proiect_IS.model.Proiect;
import proiect_spring.Proiect_IS.service.ClientService;
import proiect_spring.Proiect_IS.service.ProiectService;

import java.util.List;

@RestController
@RequestMapping("/clienti")
public class ClientController {
    @Autowired
    private  ClientService clientService;

    @Autowired
    private ProiectService proiectService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor clientilor.")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/proiecte/{clientId}")
    @Operation(summary = "Endpoint pentru a obține toate proiectele unui client.")
    public List<Proiect> getProiecteClient(@PathVariable int clientId) {
        return clientService.vizualizareProiect(clientId);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unui client.")
    public Client getClientById(@PathVariable int id) {
        return clientService.getClientById(id);
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga un nou client.")
    public Client saveClient(@RequestBody Client client) {
        return clientService.saveClient(client);
    }

    @PostMapping("/proiect")
    @Operation(summary = "Endpoint pentru a crea un proiect.")
    public Proiect saveProiect(@RequestBody Proiect proiect) {
        return  proiectService.saveProject(proiect);
    }

    @PostMapping("/adauga_cerere_proiect/{proiectId}")
    @Operation(summary = "Endpoint care adauga o cerere de proiect pentru un client.")
    public void adaugaCerereProiect(@PathVariable int proiectId) {
        clientService.adaugaCerereProiect(proiectId);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge un client.")
    public void deleteClient(@PathVariable int id) {
        clientService.deleteClient(id);
    }
}
