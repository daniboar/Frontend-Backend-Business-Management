CREATE DATABASE  IF NOT EXISTS `proiect` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proiect`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proiect
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `angajat`
--

DROP TABLE IF EXISTS `angajat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `angajat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nume` varchar(255) DEFAULT NULL,
  `parola` varchar(255) DEFAULT NULL,
  `prenume` varchar(255) DEFAULT NULL,
  `procentaj_proiect` int DEFAULT NULL,
  `salariu` int DEFAULT NULL,
  `echipa_id` int DEFAULT NULL,
  `proiect_asignat_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnrxw1cdc99txb9u7j2fug97ry` (`echipa_id`),
  KEY `FKg744m0t2ovv7vofsii0pp191k` (`proiect_asignat_id`),
  CONSTRAINT `FKg744m0t2ovv7vofsii0pp191k` FOREIGN KEY (`proiect_asignat_id`) REFERENCES `proiect` (`id`),
  CONSTRAINT `FKnrxw1cdc99txb9u7j2fug97ry` FOREIGN KEY (`echipa_id`) REFERENCES `echipa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `angajat`
--

LOCK TABLES `angajat` WRITE;
/*!40000 ALTER TABLE `angajat` DISABLE KEYS */;
INSERT INTO `angajat` VALUES (1,'daniboar@yahoo.com','Dani','123124D','Boar',10,6500,1,1),(2,'elecfi@gmail.com','Elecfi','123Dasda','Sergiu',50,4500,1,1),(3,'csionca@yahoo.com','Cionca','cionca123','Antoniu',30,10000,1,1),(4,'mihai12@yahoo.com','Mihai','mihaita123','Larisa',0,3000,NULL,NULL),(5,'andreeaG@gmail.com','Marin','andre44','Andreea',0,5000,NULL,NULL);
/*!40000 ALTER TABLE `angajat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ceo`
--

DROP TABLE IF EXISTS `ceo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ceo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nume` varchar(255) DEFAULT NULL,
  `parola` varchar(255) DEFAULT NULL,
  `prenume` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ceo`
--

LOCK TABLES `ceo` WRITE;
/*!40000 ALTER TABLE `ceo` DISABLE KEYS */;
INSERT INTO `ceo` VALUES (1,'raulboar@yahoo.com','Boar','masina','Raul');
/*!40000 ALTER TABLE `ceo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cerere_marire`
--

DROP TABLE IF EXISTS `cerere_marire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cerere_marire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cerere_aprobata` bit(1) DEFAULT NULL,
  `angajat_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK572mlcsbirxrpbmldy7j56h4u` (`angajat_id`),
  CONSTRAINT `FK572mlcsbirxrpbmldy7j56h4u` FOREIGN KEY (`angajat_id`) REFERENCES `angajat` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cerere_marire`
--

LOCK TABLES `cerere_marire` WRITE;
/*!40000 ALTER TABLE `cerere_marire` DISABLE KEYS */;
INSERT INTO `cerere_marire` VALUES (1,_binary '\0',1),(3,_binary '',3);
/*!40000 ALTER TABLE `cerere_marire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cerere_proiect`
--

DROP TABLE IF EXISTS `cerere_proiect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cerere_proiect` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aprobata` bit(1) DEFAULT NULL,
  `proiect_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2qidhdrwbki8r5s18d3gehybt` (`proiect_id`),
  CONSTRAINT `FK2qidhdrwbki8r5s18d3gehybt` FOREIGN KEY (`proiect_id`) REFERENCES `proiect` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cerere_proiect`
--

LOCK TABLES `cerere_proiect` WRITE;
/*!40000 ALTER TABLE `cerere_proiect` DISABLE KEYS */;
INSERT INTO `cerere_proiect` VALUES (1,_binary '',1),(2,_binary '\0',2),(4,_binary '',4);
/*!40000 ALTER TABLE `cerere_proiect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nume` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenume` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'dsad@gmail.com','Mircea','1234','Claudiu'),(2,'mihnea@yahoo.com','Dorob','parola','Mihnea'),(3,'ciceunchiu@gmail.com','Cicea','parolagrea','Marin');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `echipa`
--

DROP TABLE IF EXISTS `echipa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `echipa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `proiect_id` int DEFAULT NULL,
  `team_leader_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb4eb33liurn15kvfpd8veexaq` (`proiect_id`),
  KEY `FKaqkanhrtfmbxw3mdbtv9yai1q` (`team_leader_id`),
  CONSTRAINT `FKaqkanhrtfmbxw3mdbtv9yai1q` FOREIGN KEY (`team_leader_id`) REFERENCES `team_leader` (`id`),
  CONSTRAINT `FKb4eb33liurn15kvfpd8veexaq` FOREIGN KEY (`proiect_id`) REFERENCES `proiect` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `echipa`
--

LOCK TABLES `echipa` WRITE;
/*!40000 ALTER TABLE `echipa` DISABLE KEYS */;
INSERT INTO `echipa` VALUES (1,1,1),(2,2,7),(4,4,8);
/*!40000 ALTER TABLE `echipa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proiect`
--

DROP TABLE IF EXISTS `proiect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proiect` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nume_proiect` varchar(255) DEFAULT NULL,
  `client_id` int DEFAULT NULL,
  `procentaj` int DEFAULT NULL,
  `stare_proiect` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcnt9mn1dv1b5g4adtmuvpe37v` (`client_id`),
  CONSTRAINT `FKcnt9mn1dv1b5g4adtmuvpe37v` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proiect`
--

LOCK TABLES `proiect` WRITE;
/*!40000 ALTER TABLE `proiect` DISABLE KEYS */;
INSERT INTO `proiect` VALUES (1,'Automat Coca-Cola',1,90,'nefinalizat'),(2,'Ventialor electric',2,10,NULL),(3,'Fifa 25',3,0,NULL),(4,'Aspirator wireless',1,0,NULL),(5,'Masina de jucarie',2,0,NULL);
/*!40000 ALTER TABLE `proiect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_leader`
--

DROP TABLE IF EXISTS `team_leader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_leader` (
  `id` int NOT NULL AUTO_INCREMENT,
  `angajat_id` int DEFAULT NULL,
  `echipa_id` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nume` varchar(255) DEFAULT NULL,
  `parola` varchar(255) DEFAULT NULL,
  `prenume` varchar(255) DEFAULT NULL,
  `procentaj_proiect` int DEFAULT NULL,
  `salariu` int DEFAULT NULL,
  `proiect_asignat_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_oxxx700vvrdlwn61xa5bpdpwb` (`angajat_id`),
  UNIQUE KEY `UK_8t1x6i93mdje9qhbye7av4uao` (`echipa_id`),
  KEY `FKt3g3kwayvnpikqx2fcrx0mjsn` (`proiect_asignat_id`),
  CONSTRAINT `FKbx88maly2kq06g4j5a0a9af3n` FOREIGN KEY (`angajat_id`) REFERENCES `angajat` (`id`),
  CONSTRAINT `FKcxcvi3bcwv4dc08wogpljvp6y` FOREIGN KEY (`echipa_id`) REFERENCES `echipa` (`id`),
  CONSTRAINT `FKt3g3kwayvnpikqx2fcrx0mjsn` FOREIGN KEY (`proiect_asignat_id`) REFERENCES `proiect` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_leader`
--

LOCK TABLES `team_leader` WRITE;
/*!40000 ALTER TABLE `team_leader` DISABLE KEYS */;
INSERT INTO `team_leader` VALUES (1,NULL,1,'luca@gmail.com','Graur','1234','Luca',90,10000,1),(7,NULL,2,'mm@yahoo.com','Mircea','patrula123','Mihai',0,1000,2),(8,NULL,4,'test@yahoo.com','Gabor','luci444','Lucian',0,1500,4);
/*!40000 ALTER TABLE `team_leader` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-04 16:41:18
