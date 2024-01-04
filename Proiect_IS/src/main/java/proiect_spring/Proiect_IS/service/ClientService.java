package proiect_spring.Proiect_IS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proiect_spring.Proiect_IS.model.*;
import proiect_spring.Proiect_IS.repository.CerereProiectRepository;
import proiect_spring.Proiect_IS.repository.ClientRepository;
import proiect_spring.Proiect_IS.repository.ProiectRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientService {
    private final ClientRepository clientRepository;

    @Autowired
    private ProiectRepository proiectRepository;

    @Autowired
    private CerereProiectRepository cerereProiectRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client getClientById(int id) {
        return clientRepository.findById(id).orElse(null);
    }

    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public void deleteClient(int id) {
        clientRepository.deleteById(id);
    }

    public void adaugaCerereProiect(int proiectId) {
        Proiect proiect = proiectRepository.findById(proiectId).orElse(null);

        if (proiect != null) {
            CerereProiect cerereProiect = new CerereProiect();
            cerereProiect.setProiect(proiect);
            cerereProiect.setAprobata(false); // Setează inițial cererea ca neaprobată
            cerereProiectRepository.save(cerereProiect);
        }
    }

    public List<Proiect> vizualizareProiect(int clientId){
            return proiectRepository.findAll().stream()
                    .filter(proiect -> proiect.getClientId() == clientId)
                    .collect(Collectors.toList());
    }

    public boolean login(String email, String password) {
        Client client = clientRepository.findByEmailAndPassword(email, password);
        return client != null;
    }

}
