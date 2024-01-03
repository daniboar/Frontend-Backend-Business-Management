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
INSERT INTO `team_leader` VALUES (1,NULL,1,'luca@gmail.com','Graur','1234','Luca',90,10000,1),(7,NULL,2,'mm@yahoo.com','Mircea','patrula123','Mihai',0,1000,NULL),(8,NULL,4,'test@yahoo.com','Gabor','luci444','Lucian',0,1500,4);
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

-- Dump completed on 2023-12-27 13:21:56
