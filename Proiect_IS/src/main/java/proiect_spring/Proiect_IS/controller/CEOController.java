package proiect_spring.Proiect_IS.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proiect_spring.Proiect_IS.model.*;
import proiect_spring.Proiect_IS.service.*;

import java.util.List;

@RestController
@RequestMapping("/ceos")
public class CEOController {

    @Autowired
    private CEOService ceoService;

    @Autowired
    private EchipaService echipaService;

    @Autowired
    private AngajatService angajatService;

    @Autowired
    private TeamLeaderService teamLeaderService;

    @Autowired
    private ProiectService proiectService;

    @Autowired
    private ClientService clientService;

    @Autowired
    private CerereMarireService cerereMarireService;

    @Autowired
    private CerereProiectService cerereProiectService;

    @GetMapping
    @Operation(summary = "Endpoint pentru a vedea datele tuturor directorilor generali.")
    public List<CEO> getAllCEOs() {
        return ceoService.getAllCEOs();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Endpoint pentru a vedea datele unui CEO")
    public CEO getCEOById(@PathVariable int id) {
        return ceoService.getCEOById(id);
    }

    @GetMapping("/echipe")
    @Operation(summary = "Endpoint pentru a vedea toate echipele")
    public List<Echipa> getEchipe() {
        return ceoService.getEchipe();
    }

    @GetMapping("/echipe/{id}")
    @Operation(summary = "Endpoint pentru a vedea o echipa")
    public Echipa getEchipeById(@PathVariable int id) {
        return echipaService.getEchipaById(id);
    }

    @GetMapping("/proiecte")
    @Operation(summary = "Endpoint pentru a vedea toate proiectele")
    public List<Proiect> getProiecte(){
        return ceoService.getProiecte();
    }

    @GetMapping("/proiecte/{id}")
    @Operation(summary = "Endpoint pentru a vedea un proiect")
    public Proiect getProiecte(@PathVariable int id){
        return proiectService.getProjectById(id);
    }

    @GetMapping("/angajati")
    @Operation(summary = "Endpoint pentru a vedea toti angajatii")
    public List<Angajat> getAngajati(){
        return angajatService.getAllAngajati();
    }

    @GetMapping("/angajati/{id}")
    @Operation(summary = "Endpoint pentru a vedea un angajat")
    public Angajat getAngajati(@PathVariable int id){
        return angajatService.getAngajatById(id);
    }

    @GetMapping("/teamleaders")
    @Operation(summary = "Endpoint pentru a vedea toti teamLeaderii")
    public List<TeamLeader> getTeamLeaders(){
        return teamLeaderService.getAllTeamLeaders();
    }

    @GetMapping("/teamleaders/{id}")
    @Operation(summary = "Endpoint pentru a vedea un teamLeader")
    public TeamLeader getTeamLeadersById(@PathVariable int id){
        return teamLeaderService.getTeamLeaderById(id);
    }

    @GetMapping("/clienti")
    @Operation(summary = "Endpoint pentru a vedea toti clienti")
    public List<Client> getClienti(){
        return clientService.getAllClients();
    }

    @GetMapping("/clienti/{id}")
    @Operation(summary = "Endpoint pentru a vedea un clienti")
    public Client getClienti(@PathVariable int id){
        return clientService.getClientById(id);
    }

    @GetMapping("/cereri_marire")
    @Operation(summary = "Endpoint pentru a vedea toate cererile de marire de salariu")
    public List<CerereMarire> getCereriMarire(){
        return cerereMarireService.getAllCereriMarire();
    }

    @GetMapping("/cereri_proiect")
    @Operation(summary = "Endpoint pentru a vedea toate cererile pentru proiect")
    public List<CerereProiect> getCereriProiect(){
        return cerereProiectService.getAllCereriProiect();
    }

    @PostMapping
    @Operation(summary = "Endpoint pentru a adauga un nou CEO.", description = "Acest endpoint trebuie sa primeasca toate datele necesare pentru a introduce un CEO in tabela. ")
    public CEO saveCEO(@RequestBody CEO ceo) {
        return ceoService.saveCEO(ceo);
    }

    @PostMapping("/angajat")
    @Operation(summary = "Endpoint pentru a adauga un nou angajat.")
    public Angajat saveAngajat(@RequestBody Angajat angajat) {
        return angajatService.saveAngajat(angajat);
    }

    @PostMapping("/teamleader")
    @Operation(summary = "Endpoint pentru a adauga un nou Teamleader.")
    public TeamLeader saveTeamLeader(@RequestBody TeamLeader teamLeader) {
        return teamLeaderService.saveTeamLeader(teamLeader);
    }

    @PostMapping("/echipa")
    @Operation(summary = "Endpoint pentru a forma o noua echipa.")
    public Echipa saveEchipa(@RequestBody Echipa echipa){
        return echipaService.saveEchipa(echipa);
    }

    @PostMapping("/schimba-salariu/angajat/{ceoId}/{angajatId}/{salariu_nou}")
    @Operation(summary = "Endpoint pentru a schimba salariul unui angajat.")
    public void schimbaSalariuAngajat(@PathVariable int ceoId, @PathVariable int angajatId, @PathVariable int salariu_nou) {
        ceoService.schimbaSalariuAngajat(ceoId, angajatId, salariu_nou);
    }

    @PostMapping("/schimba-salariu/teamleader/{ceoId}/{teamLeaderId}/{salariu_nou}")
    @Operation(summary = "Endpoint pentru a schimba salariul unui TeamLeader.")
    public void schimbaSalariuTeamLeader(@PathVariable int ceoId, @PathVariable int teamLeaderId, @PathVariable int salariu_nou) {
        ceoService.schimbaSalariuTeamLeader(ceoId, teamLeaderId, salariu_nou);
    }

    @PostMapping("/gestioneazaCerereMarire/{ceoID}/{angajatID}/{salariu}")
    @Operation(summary = "Endpoint care imi schimba salariu angajatului daca cererea sa este aprobata.")
    public void gestioneazaCerereMarire(@PathVariable int ceoID, @PathVariable int angajatID, @PathVariable int salariu) {
        ceoService.gestioneazaCerereMarire(ceoID, angajatID, salariu);
    }

    @PostMapping("/gestioneazaCerereProiect/{cerereProiectID}/{stare}")
    @Operation(summary = "Endpoint care se aproba/refuza cererea de proiect.")
    public void gestioneazaCerereProiect(@PathVariable int cerereProiectID, @PathVariable boolean stare) {
        ceoService.gestioneazaCerereProiect(cerereProiectID, stare);
    }

    @PostMapping("/asignareProiectEchipa/{echipaID}/{proiectID}")
    @Operation(summary = "Endpoint pentru a asigna proiectul unei echipe.")
    public void asignareProiectEchipa(@PathVariable int echipaID, @PathVariable int proiectID) {
        echipaService.asignareProiectEchipa(echipaID, proiectID);
    }


    @PostMapping("/adauga_teamleader/{ceoId}/{echipaId}/{teamLeaderId}")
    @Operation(summary = "Endpoint pentru a adauga un TeamLeader intr-o echipa.")
    public void adaugaTeamLeaderInEchipa(@PathVariable int ceoId, @PathVariable int echipaId, @PathVariable int teamLeaderId) {
        ceoService.adaugaTeamLeaderInEchipa(ceoId, echipaId, teamLeaderId);
    }

    @PostMapping("/asignareAngajatLaEchipa/{echipaID}/{angajatID}")
    @Operation(summary = "Endpoint pentru a asigna angajatul unei echipe.")
    public void asignareAngajatLaEchipa(@PathVariable int echipaID, @PathVariable int angajatID) {
        echipaService.asignareAngajatEchipa(echipaID, angajatID);
    }

    @PostMapping("/schimbaStareCerereMarire/{angajatID}/{nouaStare}")
    @Operation(summary = "Endpoint care imi schimba starea cererii angajatului.")
    public void schimbaStareCerereMarire(@PathVariable int angajatID, @PathVariable boolean nouaStare) {
        ceoService.schimbaStareCerereMarireAngajat(angajatID, nouaStare);
    }

    @PostMapping("/promoveaza/{ceoID}/{angajatID}")
    @Operation(summary = "Endpoint care imi promoveaza un angajat la statutul de TeamLeader")
    public void promoveazaAngajat(@PathVariable int ceoID, @PathVariable int angajatID){
        ceoService.promoveazaAngajat(ceoID, angajatID);
    }

    @PostMapping("/login")
    @Operation(summary = "Endpoint pentru login CEO")
    public Boolean login(@RequestParam String email, @RequestParam String password) {
        System.out.println("Received login request with email: " + email + " and password: " + password);
        return ceoService.login(email, password);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Endpoint pentru a sterge un CEO din tabela.")
    public void deleteCEO(@PathVariable int id) {
        ceoService.deleteCEO(id);
    }

    @DeleteMapping("/angajat/{id}")
    @Operation(summary = "Endpoint pentru a sterge un angajat.")
    public void deleteAngajat(@PathVariable int id) {
        angajatService.deleteAngajat(id);
    }

    @DeleteMapping("/teamleader/{id}")
    @Operation(summary = "Endpoint pentru a sterge un TeamLeader.")
    public void deleteTeamLeader(@PathVariable int id) {
        teamLeaderService.deleteTeamLeader(id);
    }

    @DeleteMapping("/echipa/{id}")
    @Operation(summary = "Endpoint pentru a sterge o echipa.")
    public void deleteEchipa(@PathVariable int id) {
        echipaService.deleteEchipa(id);
    }

    @DeleteMapping("/sterge_teamleader/{ceoId}/{echipaId}")
    @Operation(summary = "Endpoint pentru a sterge un TeamLeader dintr-o echipa.")
    public void stergeTeamLeaderDinEchipa(@PathVariable int ceoId, @PathVariable int echipaId) {
        ceoService.stergeTeamLeaderDinEchipa(ceoId, echipaId);
    }

}
