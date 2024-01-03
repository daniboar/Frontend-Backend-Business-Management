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
INSERT INTO `angajat` VALUES (1,'daniboar@yahoo.com','Dani','123124D','Boar',10,6500,1,1),(2,'elecfi@gmail.com','Elecfi','123Dasda','Sergiu',50,4500,1,1),(3,'csionca@yahoo.com','Cionca','cionca123','Antoniu',30,10000,1,1);
/*!40000 ALTER TABLE `angajat` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-27 13:21:57
