-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_console
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `console`
--

DROP TABLE IF EXISTS `console`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `console` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `feature` varchar(1000) NOT NULL,
  `games` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `console`
--

LOCK TABLES `console` WRITE;
/*!40000 ALTER TABLE `console` DISABLE KEYS */;
INSERT INTO `console` VALUES (1,'PlayStation1','On September 29, 1995 in Europe','A CD-ROM drive reader,Two ports for control commands,Two ports, one parallel and one serial,Two slots intended for memory cards,One multipurpose analogue output, RF, Composite, S-Video and RGBs,A AC power input, 220-240','Battle Arena Toshinden, Kileak: The Blood'),(2,'PlayStation2','On November 24 in Europe','A / V Multi Out x1 (proprietary connector): Analog video and audio signals,Digital Out (Optical) x1 (Toslink connector): digital optical audio signal,Port of controls x2: Connection of the controls of PlayStation 2 and PlayStation,Memory Card Port x2: Connection for PlayStation 2 and PlayStation memory cards,iLink S400 x1: Connection to establish network games and connect cameras,Infrared port: Receiver for the infrared control of DVD,PCMCIA x1 (Models SCPH-1000X to SCPH-1800X): Connection for External Network Adapter and Hard Disk,Expansion Bay x1 (DEV9 connector, models SCPH-3000X to SCPH-5000X): Connection for the Network Adapter and hollow to accommodate an IDE 3.5 hard drive.','Call of Duty, Call of Duty 2: Big Red One'),(3,'PlayStation3','On March 23, 2007 in Europe','Cell Broadband Engine 3.2 GHz with 1PPE and 8 SPEs.NVIDIA / SCEI RSX 550 MHz.256 MB RAM of type GDDR3 VRAM at 700 MHz with bandwidth of 128 bits and 256 MB Rambus XDR DRAM at 3.2 GHz with a bandwidth of 64 bits.Any SATA hard drive 2.5 \"Inches and a maximum of 10 mm in height Recommended 5200rpm to decrease the heat generated.Blu-ray Discs 2x, DVD 16x, Cds 52x.Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T). EEE 802.11 b / g (Wi-Fi). Bluetooth ® 2.0 (EDR)  ','Resistance: Fall of Man, The Elder Scrolls IV'),(4,'PlayStation4','On November 29, 2013 in Europe','It has a microprocessor type APU eight-core x86-64 to 1.6 GHz.An AMD 787032 GPU with a processing power of 1.84 Teraflops.It also has a unified RAM of 8 GB, GDDR5, with a bandwidth of 176 GB / second.Connectivity with the console would have Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T), 802.11 b / g / n and Bluetooth 2.1 (with EDR).HDMI ports, digital optical output and USB 3.0 (2X)','Alien: Isolation, Assassins Creed: Origins'),(5,'Xbox','On March 14, 2002 in Europe','32-bit Central processor.733 MHz clock speed¡.64 MiB of RAM¡.A hard drive, (whose size is 8 GB in the first model and 10 GB in later models).The multimedia controller will perform the tasks of video playback, Dolby Digital audio decoding and network controller.2 processors, based on the nForce range of nVidia, were connected to each other via a HyperTransport bus','Halo, Star Wars: Knights of the Old Republic'),(6,'Xbox 360','On December 2, 2005 in Europe','A central processing unit based on an IBM PowerPC and its graphics processing unit that supports Unified Shaders technology.A special port to add an external hard drive and is compatible with most devices with USB.A unified RAM of type GDDR3 whose size is 512 MB.Two slots for memory cards, and supports four wireless controllers.The equipment has a size of approximately 258mm (width) x 309mm (height) x 83mm (depth) and weighs approximately 3.5 kilograms\',','Grand Theft Auto V, State of Decay, RAGE'),(7,'Xbox One','On November 22, 2013 in Europe','Xbox One has an integrated GPU based on AMD technology.An 8-core x86 processor with architecture similar to that of a PC.Xbox One also has the Microsoft cloud, which is capable of making calculations to free the processing of the consoles.The main one is that the triggers have an independent vibration system.It has Bluetooth 4.0 connectivity to connect to a PC.8 GB of DDR3 RAM plus 32MB of ESRAM, with a speed of up to 204GB / s18 500 GB of hard disk and a Blu-ray reader 6x.With a 1080p camera that processes 2 GB of data per second with a response time of 13 billionths of a second.The operating system consists of a Windows Kernel that has several multimedia functions and Internet Explorer','PlayerUnknowns Battlegrounds,  Resident Evil 2'),(8,'Xbox One X','On November 7, 2017 in Europe','It has 6 teraflops of graphic performance.Two Jaguar Evolved CPU modules with four cores each at 2.3GHz.memory of 12GB GDDR5 at 320 Gbit / s bandwidth and a GPU of 40 computing units at 1172 MHz.It has Bluetooth 4.0 connectivity to connect to a PC.Xbox One also has Microsofts cloud, which is capable of calculating to free console processing','PlayerUnknowns Battlegrounds, Resident Evil 2'),(9,'WII','On December 8, 2006 year in Europe','CPU: IBM PowerPC unit with code name Broadway. Made with 90nm SOI CMOS technology, with a frequency: 729 MHz and with a bandwidth: 1.9 GB per second.GPU: Resolution up to 480p, with an optional panoramic mode and with 3 MB eDRAM and 24 MB RAM (operating at 486 MHz).1T-SRAM memory.As for maintenance, it has 512MB of flash memory to save games and download content, it also has an SD memory card slot and 2 Gamecube memory card slots','Wii Play, Wii Fit, Wii Fit Plus, Super Smash Bros'),(10,'WII U','On September 13, 2012 in Europe','Graphics in high definition up to a resolution of 1080p.A new control that incorporates a touch screen that receives signal in 480p quality of the console.The system is retrocompatible with Wii games, and supports Wii peripherals, such as the Wiimote or the Wii Balance Board and including NFC technology.USB 2.0 ports (2 on the front and 2 on the back).CPU: IBM tri-core microprocessor 45 nm Power Architecture based on the POWER7 architecture of the Watson supercomputer at 1.24 Ghz.GPU: an AMD Radeon HD designed especially for the console, enhanced, based on the Radeon E6760 with R770 core running at 550 MHz','Call of Duty: Black Ops II, Call of Duty'),(11,'Nintendo 3DS','On March 25, 2011 in Europe','Two screens: Top screen: 3.53 inches, panoramic with 3D vision without glasses, 800 × 240 pixels resolution and Bottom screen: 3.02 inches, 320 × 240 pixels resolution.It has an inner camera and two external ones to recreate the 3D effect, each with a resolution of 0.3 megapixels (640 × 480).It has a 2.4GHz connection. Exchange of data with other 3DS through the Tag Mode. Internet connection in LAN access points.A / B / Y / X buttons, D-pad, L / R, Start / Select, Sliding pad (360 °), touch screen, internal microphone, camera, motion sensor, gyroscope, 3D volume, Home button, button wireless connection, power button.Slot for game cards, SD card slot, power connection, charging connection, headset connection.Touch pencil.Adjust the 3D experience to the point of converting it to 2D','Archer, 3D Reliefs, Minibillar, Fishingi'),(12,'Nintendo Switch','On March 3, 2017 around the world','CPU / GPU: NVIDIA Tegra X1 custom processor.It has a memory: 4 GB of RAM and a storage: 3 2GB.USB Terminal: Type-C (to charge or connect to the base).Sensors: Accelerometer, gyroscope and brightness sensor.Quad-core CPU ARM Cortex A57 1.2 GHz and 256 NVIDIA CUDA Cores.It has an internal battery: Lithium-ion battery with capacity 4310 mAH non-removable, with a battery life: Between 3 and 6 hours depending on the use of Nintendo Switch','Splatoon 2, ARMS, Kirby: Star Allies');
/*!40000 ALTER TABLE `console` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-19 19:44:19
