package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.Client;
import proiect_spring.Proiect_IS.service.ClientService;

import java.util.List;

@RestController
@RequestMapping("/clienti")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor clientilor.")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
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

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge un client.")
    public void deleteClient(@PathVariable int id) {
        clientService.deleteClient(id);
    }
}
