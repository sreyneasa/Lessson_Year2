-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2022 at 08:46 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pnc_bus_station`
--

-- --------------------------------------------------------

--
-- Table structure for table `buses`
--

CREATE TABLE `buses` (
  `bus_number` int(11) NOT NULL,
  `numberOfChair` int(11) DEFAULT NULL,
  `bus_model_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buses`
--

INSERT INTO `buses` (`bus_number`, `numberOfChair`, `bus_model_id`) VALUES
(1, 7, 4),
(2, 7, 4),
(3, 7, 5),
(4, 7, 5),
(5, 7, 4),
(6, 7, 2),
(7, 7, 1),
(8, 12, 5),
(9, 12, 1),
(10, 12, 1),
(11, 12, 4),
(12, 12, 5),
(13, 12, 4),
(14, 12, 5),
(15, 12, 3),
(16, 15, 5),
(17, 15, 4),
(18, 15, 1),
(19, 15, 1),
(20, 15, 1),
(21, 15, 2),
(22, 15, 3),
(23, 15, 4),
(24, 15, 5),
(25, 15, 2);

-- --------------------------------------------------------

--
-- Table structure for table `bus_models`
--

CREATE TABLE `bus_models` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bus_models`
--

INSERT INTO `bus_models` (`id`, `name`) VALUES
(1, 'Suzuki'),
(2, 'Hyandia'),
(3, 'Toyota'),
(4, 'Mazda'),
(5, 'Lexus');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`) VALUES
(1, 'Leif', 'Kynnd'),
(2, 'Farley', 'Percifull'),
(3, 'Fraze', 'Bridgeman'),
(4, 'Nelia', 'Cremins'),
(5, 'Sophronia', 'Burgon'),
(6, 'Kevyn', 'Fleckness'),
(7, 'Cheslie', 'Kirgan'),
(8, 'Chrisse', 'Matyashev'),
(9, 'Barbie', 'Rubinlicht'),
(10, 'Ulises', 'Culham'),
(11, 'Winfred', 'Ferriman'),
(12, 'Kalle', 'O\' Sullivan'),
(13, 'Kaleena', 'Callard'),
(14, 'Miguela', 'Inge'),
(15, 'Tedd', 'Kenvin'),
(16, 'Chelsy', 'Pipe'),
(17, 'Adiana', 'O\'Duggan'),
(18, 'Anallese', 'Wloch'),
(19, 'Daloris', 'Boyson'),
(20, 'Miranda', 'Culter'),
(21, 'Trudi', 'Kuhne'),
(22, 'Xymenes', 'De Beneditti'),
(23, 'Merla', 'Whitter'),
(24, 'Rory', 'Skellington'),
(25, 'Elene', 'Gleadhell'),
(26, 'Freedman', 'Pothecary'),
(27, 'Hermie', 'McArt'),
(28, 'Osmond', 'Pibworth'),
(29, 'Algernon', 'Sanson'),
(30, 'Cheri', 'Stannas'),
(31, 'Maddy', 'Selby'),
(32, 'Karissa', 'Gingedale'),
(33, 'Mahalia', 'Binge'),
(34, 'Alphard', 'Trow'),
(35, 'Jefferey', 'Sambals'),
(36, 'Sharron', 'Gowans'),
(37, 'Alonso', 'Messam'),
(38, 'Inglis', 'Bingham'),
(39, 'Geoffrey', 'MacKellar'),
(40, 'Orin', 'Kilban'),
(41, 'Kati', 'Loren'),
(42, 'Adriano', 'Jellis'),
(43, 'Jena', 'Faircliff'),
(44, 'Philip', 'Stener'),
(45, 'Dianemarie', 'Prestie'),
(46, 'Corabella', 'Pounsett'),
(47, 'Georgeanna', 'Belbin'),
(48, 'Ram', 'Braghini'),
(49, 'Robby', 'Dallinder'),
(50, 'Issie', 'Lovelace'),
(51, 'Immanuel', 'Briscow'),
(52, 'Leontyne', 'Kinney'),
(53, 'Vyky', 'Bellefonte'),
(54, 'Lucine', 'Leeman'),
(55, 'Rudolph', 'Poe'),
(56, 'Mitchel', 'Groarty'),
(57, 'Cecile', 'Pellatt'),
(58, 'Nomi', 'Chark'),
(59, 'Torey', 'McCaster'),
(60, 'Dunstan', 'Scriviner'),
(61, 'Derrek', 'Schwandner'),
(62, 'Nickie', 'Tapper'),
(63, 'Kermit', 'Kindell'),
(64, 'Irwinn', 'Handlin'),
(65, 'Riva', 'Costelow'),
(66, 'Jayme', 'Springate'),
(67, 'Phineas', 'Greger'),
(68, 'Linette', 'Sieghard'),
(69, 'Alfy', 'Reaveley'),
(70, 'Lisa', 'Blinckhorne'),
(71, 'Rosana', 'Crank'),
(72, 'Anabelle', 'Wickes'),
(73, 'Brad', 'Dakhov'),
(74, 'Feliza', 'Danforth'),
(75, 'Roanna', 'Stiegars'),
(76, 'Lebbie', 'Coil'),
(77, 'Merl', 'Arnefield'),
(78, 'Ricard', 'Sheehy'),
(79, 'Jase', 'Rosenwald'),
(80, 'Dory', 'McGowan'),
(81, 'Bondon', 'Foystone'),
(82, 'Kelsi', 'Phythean'),
(83, 'Thebault', 'Edworthye'),
(84, 'Sarene', 'Waterman'),
(85, 'Seth', 'Beckson'),
(86, 'Svend', 'MacPaik'),
(87, 'Willyt', 'Vautre'),
(88, 'Gaylor', 'Rylett'),
(89, 'Hamid', 'Ekins'),
(90, 'Cullan', 'Pinckney'),
(91, 'Johnath', 'Hoopper'),
(92, 'Tann', 'Southway'),
(93, 'Mercie', 'Bowich'),
(94, 'Marius', 'Klug'),
(95, 'Harrie', 'Fedder'),
(96, 'Siward', 'Trunby'),
(97, 'Lewes', 'Videan'),
(98, 'Lexis', 'Pickersgill'),
(99, 'Ardene', 'Bunworth'),
(100, 'Carina', 'Ryton'),
(101, 'Audi', 'Irving'),
(102, 'Sorcha', 'Coning'),
(103, 'Elyn', 'Cottem'),
(104, 'Gradey', 'Esp'),
(105, 'Godart', 'Bilney'),
(106, 'Junina', 'Klemmt'),
(107, 'Glendon', 'Breissan'),
(108, 'Brant', 'Wickendon'),
(109, 'Ronnica', 'Muirhead'),
(110, 'Isis', 'O\'Dooghaine'),
(111, 'Murial', 'Cadwallader'),
(112, 'Hildegarde', 'Horsburgh'),
(113, 'Cull', 'Glasscock'),
(114, 'Cammy', 'Gremane'),
(115, 'Margalit', 'Redley'),
(116, 'Antonia', 'Anscott'),
(117, 'Jodi', 'Birtwhistle'),
(118, 'Wanids', 'Taffee'),
(119, 'Lois', 'Lesaunier'),
(120, 'Mindy', 'Skippon'),
(121, 'Stephani', 'Balderstone'),
(122, 'Winfield', 'Oyley'),
(123, 'Jammal', 'How to preserve'),
(124, 'Tine', 'Spain'),
(125, 'Carlota', 'Matys'),
(126, 'Dennison', 'Wellman'),
(127, 'Ki', 'Hallybone'),
(128, 'Alisa', 'Aylett'),
(129, 'Mari', 'Pethick'),
(130, 'Talbot', 'Barrar'),
(131, 'Katrina', 'Axcel'),
(132, 'Flory', 'Alsop'),
(133, 'Charmian', 'Jorat'),
(134, 'Eran', 'Berling'),
(135, 'Virgina', 'Baile'),
(136, 'Anatole', 'Streatley'),
(137, 'Obed', 'Godar'),
(138, 'Harmonia', 'Trewman'),
(139, 'Elita', 'Shrubb'),
(140, 'Wynne', 'Wight'),
(141, 'Maribel', 'Haggleton'),
(142, 'Worthington', 'Locks'),
(143, 'Elvis', 'Stimson'),
(144, 'Gerry', 'Scotts'),
(145, 'Gilemette', 'Whiscard'),
(146, 'Arvin', 'Hopkins'),
(147, 'Raddy', 'Cudihy'),
(148, 'Hermie', 'Abramof'),
(149, 'Haskell', 'Peters'),
(150, 'Sigvard', 'Honeywood'),
(151, 'Daphne', 'Broz'),
(152, 'Joyan', 'Aleshkov'),
(153, 'Jeanne', 'Gricks'),
(154, 'Northrop', 'Lansbury'),
(155, 'Hoebart', 'Fennelly'),
(156, 'Ilsa', 'Nairns'),
(157, 'Lucienne', 'Causby'),
(158, 'Rodolph', 'Ferran'),
(159, 'Melony', 'Learman'),
(160, 'Fritz', 'Hardage'),
(161, 'Glen', 'Redihalgh'),
(162, 'Lu', 'Scarfe'),
(163, 'Kesley', 'Ayllett'),
(164, 'Arte', 'Kerrane'),
(165, 'Arne', 'Wykey'),
(166, 'Koo', 'Dearsley'),
(167, 'Cherrita', 'Jurczyk'),
(168, 'Devondra', 'Stiffkins'),
(169, 'Dalton', 'D\'orsay'),
(170, 'Chucho', 'Salliss'),
(171, 'Murvyn', 'Lyfield'),
(172, 'Zara', 'Macari'),
(173, 'Neils', 'Cudworth'),
(174, 'Melva', 'O\'Neil'),
(175, 'Fair', 'D\'Orsay'),
(176, 'Myca', 'MacInerney'),
(177, 'Dee dee', 'Boother'),
(178, 'Meridith', 'Ivasyushkin'),
(179, 'Livy', 'Allbut'),
(180, 'Reynard', 'Andriessen'),
(181, 'Shawn', 'Sigmund'),
(182, 'Pamelina', 'Habbes'),
(183, 'Burtie', 'Olligan'),
(184, 'Bobbie', 'Gorch'),
(185, 'Kore', 'Lestor'),
(186, 'Joya', 'Edwards'),
(187, 'Shoshanna', 'Paolacci'),
(188, 'Kim', 'Francke'),
(189, 'Rickard', 'Nickels'),
(190, 'Portie', 'Rossetti'),
(191, 'Emmey', 'Nettles'),
(192, 'Penrod', 'Mawne'),
(193, 'Paddy', 'Roloff'),
(194, 'Murdoch', 'Haszard'),
(195, 'Lani', 'Pym'),
(196, 'Dani', 'Scholtz'),
(197, 'Ronica', 'Thoumasson'),
(198, 'Quinn', 'Burder'),
(199, 'Zeke', 'Gelsthorpe'),
(200, 'Osmund', 'Shales'),
(201, 'Jamal', 'Barnwille'),
(202, 'Charmion', 'Ridolfi'),
(203, 'Hadley', 'Scoggins'),
(204, 'Sandie', 'Frift'),
(205, 'Dew', 'Diess'),
(206, 'Herve', 'Codlin'),
(207, 'Pepillo', 'Edensor'),
(208, 'Karlan', 'Crosio'),
(209, 'Mollie', 'Roberson'),
(210, 'Thomasa', 'Stillman'),
(211, 'Mathe', 'Skyppe'),
(212, 'Leland', 'Hercock'),
(213, 'Bess', 'Wigfall'),
(214, 'Madison', 'Dugmore'),
(215, 'Jackelyn', 'Hucker'),
(216, 'Fidel', 'Scotford'),
(217, 'Susy', 'Dunridge'),
(218, 'Amelina', 'Spieck'),
(219, 'Kean', 'Parlett'),
(220, 'Giffy', 'Ginnety'),
(221, 'Cully', 'Messum'),
(222, 'Shara', 'Odd'),
(223, 'Yorgo', 'Toohey'),
(224, 'Martie', 'Gercken'),
(225, 'Loleta', 'Stebbins'),
(226, 'Gawen', 'Jessope'),
(227, 'Lynn', 'Grave'),
(228, 'Nanete', 'Radcliffe'),
(229, 'Yurik', 'Small'),
(230, 'Ruthanne', 'Jinks'),
(231, 'Bonnie', 'Brettor'),
(232, 'Gage', 'Ewenson'),
(233, 'Alissa', 'Edards'),
(234, 'Kate', 'Wainscot'),
(235, 'Hugh', 'Tomkin'),
(236, 'Hynda', 'Isaaksohn'),
(237, 'Rodd', 'Scurrer'),
(238, 'Carl', 'Meharry'),
(239, 'Aldous', 'Spinozzi'),
(240, 'Chelsy', 'Braunle'),
(241, 'Hedy', 'Woollons'),
(242, 'Linea', 'Seamon'),
(243, 'Rycca', 'Tourle'),
(244, 'Tobe', 'Reville'),
(245, 'Harriet', 'Maddie'),
(246, 'Silvester', 'Ovett'),
(247, 'Pattie', 'Caddock'),
(248, 'Walker', 'Newbury'),
(249, 'Mala', 'Worrall'),
(250, 'Maximilien', 'Hesse'),
(251, 'Virginie', 'Brain'),
(252, 'Rodolphe', 'Rockey'),
(253, 'Cheryl', 'Raistrick'),
(254, 'Oren', 'Letten'),
(255, 'Carmine', 'Arnaldy'),
(256, 'Elianora', 'Wissby'),
(257, 'Ruddy', 'Bowes'),
(258, 'Emory', 'O\'Carney'),
(259, 'Bobbe', 'Salack'),
(260, 'Thayne', 'Vondra'),
(261, 'Tristam', 'Caile'),
(262, 'Elke', 'Feechan'),
(263, 'Josias', 'Joscelin'),
(264, 'Gerald', 'MacKeague'),
(265, 'Lianne', 'Hardington'),
(266, 'Mathew', 'Ambrozik'),
(267, 'Tristam', 'Peasee'),
(268, 'Emylee', 'Burgess'),
(269, 'Linus', 'Smead'),
(270, 'Cindee', 'Antoniat'),
(271, 'Misty', 'Calow'),
(272, 'Shellie', 'Cansdall'),
(273, 'Josy', 'Tamblingson'),
(274, 'Caria', 'Grice'),
(275, 'Mohandas', 'Mikalski'),
(276, 'Jedediah', 'Haslehurst'),
(277, 'Germana', 'Aylmer'),
(278, 'Aubrey', 'Bowle'),
(279, 'Melisandra', 'Sergeant'),
(280, 'Ave', 'Ginnane'),
(281, 'Selig', 'Ricciardiello'),
(282, 'Walker', 'Baterip'),
(283, 'Elberta', 'Mewton'),
(284, 'Eugene', 'Raulstone'),
(285, 'Sergeant', 'Cazin'),
(286, 'Bogey', 'Reville'),
(287, 'Tudor', 'Shakelady'),
(288, 'Giorgi', 'Kesteven'),
(289, 'Emilie', 'Gibbings'),
(290, 'Zachariah', 'Capstake'),
(291, 'Cissiee', 'Bridgland'),
(292, 'Catha', 'Wardhough'),
(293, 'Linea', 'Whapples'),
(294, 'Tabb', 'Kidds'),
(295, 'Kennedy', 'Yeandel'),
(296, 'Bryant', 'Vinter'),
(297, 'Rocky', 'Whenman'),
(298, 'Bertrando', 'Pelham'),
(299, 'Linnie', 'Greenier'),
(300, 'Kiley', 'Jonczyk');

-- --------------------------------------------------------

--
-- Table structure for table `customer_travels`
--

CREATE TABLE `customer_travels` (
  `travel_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_travels`
--

INSERT INTO `customer_travels` (`travel_id`, `customer_id`) VALUES
(9, 98),
(21, 207),
(20, 257),
(10, 63),
(24, 164),
(10, 172),
(25, 192),
(24, 70),
(8, 159),
(20, 244),
(2, 286),
(7, 223),
(24, 89),
(16, 101),
(14, 110),
(17, 276),
(21, 279),
(1, 121),
(1, 240),
(12, 204),
(25, 200),
(3, 111),
(21, 169),
(23, 242),
(9, 127),
(22, 120),
(16, 95),
(17, 292),
(21, 166),
(23, 166),
(24, 298),
(9, 265),
(8, 296),
(9, 174),
(2, 28),
(20, 146),
(23, 177),
(10, 238),
(3, 39),
(2, 92),
(23, 147),
(22, 245),
(12, 251),
(2, 31),
(7, 25),
(11, 234),
(7, 195),
(12, 156),
(4, 250),
(10, 110),
(1, 18),
(23, 285),
(12, 197),
(15, 96),
(3, 241),
(17, 249),
(22, 49),
(17, 56),
(1, 39),
(1, 158),
(6, 37),
(14, 209),
(21, 57),
(2, 189),
(22, 121),
(19, 238),
(10, 224),
(13, 256),
(9, 160),
(7, 284),
(16, 209),
(15, 132),
(19, 11),
(23, 4),
(10, 204),
(11, 144),
(18, 190),
(3, 223),
(16, 118),
(4, 67),
(10, 39),
(8, 86),
(15, 126),
(2, 202),
(4, 39),
(16, 65),
(21, 62),
(8, 172),
(3, 15),
(11, 156),
(22, 63),
(14, 82),
(25, 159),
(22, 77),
(9, 88),
(12, 142),
(2, 127),
(11, 215),
(16, 268),
(4, 108),
(15, 2),
(6, 123),
(3, 193),
(10, 27),
(23, 237),
(9, 34),
(17, 82),
(16, 210),
(13, 119),
(8, 254),
(11, 56),
(18, 197),
(7, 287),
(9, 242),
(6, 129),
(3, 237),
(23, 257),
(15, 151),
(12, 9),
(16, 266),
(13, 127),
(2, 244),
(8, 111),
(20, 54),
(10, 233),
(10, 133),
(11, 286),
(14, 295),
(3, 273),
(17, 146),
(18, 197),
(17, 269),
(9, 278),
(8, 52),
(14, 63),
(4, 296),
(14, 97),
(13, 37),
(17, 142),
(21, 36),
(23, 263),
(17, 214),
(11, 206),
(6, 172),
(4, 275),
(16, 6),
(7, 29),
(2, 73),
(17, 117),
(6, 119),
(16, 121),
(16, 143),
(18, 64),
(21, 153),
(16, 240),
(3, 80),
(12, 160),
(2, 100),
(16, 17),
(16, 11),
(11, 21),
(15, 237),
(8, 25),
(4, 194),
(12, 73),
(16, 282),
(17, 49),
(3, 205),
(22, 58),
(20, 250),
(14, 35),
(2, 79),
(19, 192),
(5, 211),
(18, 237),
(20, 200),
(4, 58),
(1, 190),
(7, 43),
(11, 44),
(20, 145),
(22, 203),
(13, 115),
(4, 101),
(22, 223),
(8, 144),
(21, 41),
(16, 115),
(2, 133),
(18, 227),
(4, 140),
(10, 166),
(17, 183),
(7, 43),
(2, 44),
(16, 279),
(21, 61),
(24, 235),
(19, 114),
(16, 90);

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `first_name`, `last_name`) VALUES
(1, 'HIM', 'HEY'),
(2, 'RADY', 'Y'),
(3, 'Hyacithe', 'madard'),
(4, 'Chantha', 'Porn'),
(5, 'Sopheak', 'Ros');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `name`) VALUES
(1, 'Banteay Meanchey'),
(2, 'Battambang'),
(3, 'Kampong Cham'),
(4, 'Kampong Chhnang'),
(5, 'Kampong Speu'),
(6, 'Kampong Thom'),
(7, 'Kampot'),
(8, 'Kandal'),
(9, 'Koh Kong'),
(10, 'Kratié'),
(11, 'Mondulkiri'),
(12, 'Phnom Penh'),
(13, 'Preah Vihear'),
(14, 'Prey Veng	'),
(15, 'Pursat'),
(16, 'Ratanakiri'),
(17, 'Siem Reap'),
(18, 'Preah Sihanouk'),
(19, 'Stung Treng'),
(20, 'Svay Rieng'),
(21, 'Takéo'),
(22, 'Oddar Meanchey'),
(23, 'Kep'),
(24, 'Pailin'),
(25, 'Tboung Khmum');

-- --------------------------------------------------------

--
-- Table structure for table `travels`
--

CREATE TABLE `travels` (
  `travel_number` int(11) NOT NULL,
  `departure_date` datetime DEFAULT NULL,
  `arrival_date` datetime DEFAULT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `bus_number` int(11) DEFAULT NULL,
  `arrival_provice_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `travels`
--

INSERT INTO `travels` (`travel_number`, `departure_date`, `arrival_date`, `driver_id`, `bus_number`, `arrival_provice_id`) VALUES
(1, '2021-12-05 20:15:54', '2021-06-18 05:27:36', 4, 7, 17),
(2, '2021-08-23 08:06:20', '2021-06-27 20:03:53', 5, 11, 1),
(3, '2021-05-13 22:09:51', '2021-10-13 01:10:19', 3, 10, 6),
(4, '2021-05-31 10:46:17', '2021-12-19 00:33:34', 2, 11, 14),
(5, '2022-01-08 08:09:15', '2021-12-23 02:58:17', 4, 2, 15),
(6, '2021-09-17 10:29:20', '2021-11-02 03:18:11', 1, 15, 14),
(7, '2021-05-12 06:44:32', '2021-07-21 18:21:23', 4, 12, 16),
(8, '2021-05-12 23:56:45', '2021-08-05 10:30:44', 3, 20, 6),
(9, '2022-01-25 09:45:45', '2021-10-22 11:04:18', 5, 2, 6),
(10, '2021-08-21 02:20:46', '2021-09-19 01:47:51', 1, 1, 15),
(11, '2021-05-22 13:53:30', '2021-09-30 16:57:59', 4, 23, 21),
(12, '2021-11-25 09:10:09', '2021-05-16 07:47:19', 3, 22, 10),
(13, '2021-09-10 02:49:07', '2021-05-12 22:13:37', 1, 1, 23),
(14, '2021-07-01 02:22:05', '2021-09-29 08:31:39', 1, 13, 16),
(15, '2021-12-22 09:40:04', '2021-09-08 20:57:54', 5, 2, 10),
(16, '2021-05-18 17:36:00', '2021-05-20 07:25:02', 1, 3, 3),
(17, '2022-02-24 08:09:15', '2021-06-14 13:05:15', 3, 10, 5),
(18, '2021-11-04 07:38:48', '2021-11-05 07:46:52', 1, 16, 12),
(19, '2021-05-10 06:22:27', '2021-06-30 12:49:27', 5, 10, 24),
(20, '2021-04-11 08:02:47', '2021-06-10 01:25:38', 2, 14, 14),
(21, '2022-02-11 09:42:18', '2021-06-18 01:34:44', 5, 23, 12),
(22, '2021-09-06 05:05:59', '2022-01-03 21:31:03', 5, 15, 19),
(23, '2021-06-08 21:29:32', '2021-11-16 19:48:03', 3, 10, 4),
(24, '2021-03-18 14:37:24', '2022-02-15 13:22:48', 5, 22, 25),
(25, '2021-08-28 06:53:42', '2021-08-30 02:06:53', 4, 21, 2),
(26, '2021-04-12 17:12:42', '2021-05-15 00:31:23', 1, 3, 4),
(27, '2021-05-23 18:11:05', '2021-09-05 00:22:05', 3, 6, 23),
(28, '2021-05-05 07:35:37', '2021-10-16 02:16:27', 1, 1, 22),
(29, '2021-07-11 16:00:40', '2021-11-11 20:01:29', 4, 5, 2),
(30, '2022-02-03 01:37:44', '2022-03-01 14:36:21', 1, 5, 9),
(31, '2022-02-26 15:15:51', '2021-08-23 08:04:20', 1, 2, 21),
(32, '2021-07-18 05:15:22', '2022-03-03 23:47:20', 4, 17, 24),
(33, '2021-07-02 00:00:53', '2021-07-04 11:33:29', 1, 20, 7),
(34, '2021-07-05 23:55:12', '2021-07-07 22:58:34', 4, 19, 20),
(35, '2021-03-27 20:28:09', '2021-03-14 02:19:17', 4, 2, 5),
(36, '2021-11-03 04:20:48', '2022-01-02 07:48:25', 3, 22, 21),
(37, '2021-05-03 00:23:57', '2021-04-11 15:52:02', 1, 1, 20),
(38, '2022-03-04 04:09:02', '2021-07-31 01:25:53', 1, 7, 4),
(39, '2021-03-18 14:34:32', '2021-12-21 09:59:09', 2, 9, 24),
(40, '2021-12-30 06:43:30', '2021-07-24 17:41:17', 4, 21, 23),
(41, '2022-02-02 05:11:54', '2021-09-24 19:47:43', 1, 10, 8),
(42, '2021-06-15 00:36:04', '2021-08-10 10:19:40', 2, 14, 2),
(43, '2021-11-18 02:40:03', '2021-11-10 05:22:26', 5, 22, 4),
(44, '2021-06-10 21:52:08', '2022-02-15 17:04:48', 2, 11, 2),
(45, '2021-11-06 15:39:11', '2021-04-21 06:57:58', 4, 18, 25),
(46, '2022-02-20 18:38:23', '2021-06-28 18:27:20', 1, 15, 16),
(47, '2021-07-22 07:57:23', '2021-11-18 19:08:01', 4, 12, 17),
(48, '2021-12-31 20:45:03', '2021-08-03 08:14:06', 5, 19, 13),
(49, '2021-06-12 14:02:35', '2021-06-04 07:10:45', 2, 18, 1),
(50, '2022-02-09 11:41:25', '2021-03-26 04:55:00', 2, 2, 20),
(51, '2021-04-03 00:57:35', '2022-03-05 09:06:14', 5, 5, 8),
(52, '2022-01-13 10:44:41', '2022-02-23 10:46:31', 4, 8, 22),
(53, '2022-02-28 07:10:30', '2021-03-20 00:37:50', 3, 17, 18),
(54, '2021-07-31 10:33:21', '2021-04-01 18:14:14', 2, 2, 5),
(55, '2022-02-25 20:15:34', '2021-07-28 07:13:54', 4, 24, 8),
(56, '2022-02-27 10:30:20', '2021-11-14 06:53:32', 3, 23, 15),
(57, '2021-08-10 00:21:21', '2021-05-22 09:34:18', 4, 18, 6),
(58, '2022-01-16 10:09:11', '2022-01-19 08:17:05', 5, 5, 15),
(59, '2021-08-28 11:30:04', '2021-04-16 19:08:10', 3, 17, 19),
(60, '2021-05-31 03:20:14', '2021-09-04 02:47:44', 4, 1, 22),
(61, '2021-06-17 20:29:40', '2021-09-05 15:32:55', 1, 3, 3),
(62, '2021-05-06 13:17:47', '2021-12-28 00:58:28', 5, 13, 8),
(63, '2021-10-06 03:18:51', '2021-09-27 16:10:07', 4, 22, 8),
(64, '2021-08-01 03:52:20', '2021-09-06 07:24:59', 4, 22, 9),
(65, '2021-12-10 22:27:33', '2021-04-17 15:00:08', 3, 18, 18),
(66, '2021-06-06 07:54:55', '2021-06-19 17:22:15', 2, 11, 25),
(67, '2021-05-10 00:11:48', '2021-11-09 12:55:42', 1, 13, 15),
(68, '2021-08-19 17:02:07', '2021-09-25 22:55:40', 1, 18, 5),
(69, '2021-11-17 12:32:39', '2022-03-03 16:15:51', 5, 12, 5),
(70, '2021-08-22 06:04:06', '2022-01-11 04:53:52', 3, 25, 16),
(71, '2021-03-26 15:41:33', '2021-04-06 19:16:51', 1, 21, 4),
(72, '2021-12-04 04:43:45', '2021-04-08 22:50:30', 1, 12, 9),
(73, '2021-05-27 12:26:37', '2021-10-19 20:54:22', 4, 7, 10),
(74, '2022-02-10 14:59:09', '2021-04-05 15:15:04', 2, 11, 1),
(75, '2021-08-05 05:28:51', '2021-05-31 18:31:36', 1, 10, 14),
(76, '2021-11-06 04:38:57', '2021-04-18 21:03:30', 4, 24, 16),
(77, '2021-06-09 02:56:29', '2021-12-23 09:53:32', 5, 11, 11),
(78, '2021-07-24 17:12:27', '2022-01-21 10:37:23', 3, 5, 3),
(79, '2021-05-02 13:30:13', '2021-10-27 06:14:07', 5, 23, 13),
(80, '2021-12-11 05:53:18', '2021-08-26 20:08:00', 3, 8, 14),
(81, '2021-06-16 10:41:21', '2022-03-02 01:08:16', 4, 23, 23),
(82, '2021-12-07 04:30:40', '2021-10-31 11:01:06', 5, 14, 19),
(83, '2022-02-21 21:56:42', '2021-11-01 12:55:27', 2, 16, 12),
(84, '2021-05-06 06:58:13', '2021-08-25 04:09:32', 1, 1, 13),
(85, '2021-08-11 10:22:58', '2021-05-08 08:13:41', 5, 21, 23),
(86, '2021-07-23 05:35:39', '2021-06-26 20:32:54', 3, 12, 11),
(87, '2021-08-11 13:38:17', '2021-07-18 04:10:15', 4, 22, 14),
(88, '2022-02-03 07:25:07', '2021-12-12 10:32:18', 2, 1, 18),
(89, '2021-05-07 09:07:14', '2021-08-23 01:22:41', 2, 13, 8),
(90, '2021-11-13 05:30:04', '2022-03-13 06:22:20', 3, 8, 7),
(91, '2021-10-03 07:33:49', '2022-02-21 23:54:27', 1, 21, 25),
(92, '2021-07-29 07:48:39', '2022-02-09 20:38:11', 1, 19, 10),
(93, '2021-11-30 18:26:00', '2021-07-08 19:50:09', 4, 11, 4),
(94, '2022-02-08 16:54:49', '2021-11-27 16:48:13', 4, 1, 19),
(95, '2021-12-29 17:16:26', '2021-07-04 09:47:35', 5, 15, 23),
(96, '2021-05-25 06:43:04', '2021-08-29 13:26:30', 3, 22, 23),
(97, '2021-12-21 23:06:06', '2022-02-21 16:48:00', 5, 7, 18),
(98, '2021-07-22 19:34:59', '2021-09-28 04:05:42', 1, 23, 14),
(99, '2022-01-18 05:35:56', '2021-11-10 22:28:10', 4, 5, 18),
(100, '2021-04-18 13:41:32', '2021-10-21 16:27:16', 5, 7, 3),
(101, '2021-11-28 15:22:32', '2021-07-16 06:04:54', 3, 14, 7),
(102, '2022-01-10 20:33:30', '2021-05-29 02:08:35', 3, 8, 4),
(103, '2021-10-07 18:57:27', '2021-09-18 15:03:14', 1, 17, 11),
(104, '2022-03-04 09:29:58', '2022-02-02 11:07:45', 5, 11, 18),
(105, '2021-05-15 01:26:17', '2021-10-28 16:00:37', 3, 5, 19),
(106, '2021-10-13 16:06:28', '2021-11-11 16:08:15', 5, 16, 19),
(107, '2021-12-20 03:39:25', '2021-06-11 07:51:31', 1, 17, 19),
(108, '2021-06-05 00:21:21', '2021-04-29 10:07:18', 1, 24, 7),
(109, '2021-05-01 19:05:38', '2021-12-31 22:26:25', 4, 3, 7),
(110, '2022-01-07 06:41:15', '2021-05-16 05:57:53', 3, 24, 4),
(111, '2021-12-03 14:54:58', '2022-02-16 21:30:26', 5, 5, 15),
(112, '2021-07-22 11:16:43', '2021-10-07 07:36:57', 4, 9, 10),
(113, '2021-04-09 21:37:34', '2021-08-02 16:26:38', 1, 17, 19),
(114, '2021-08-14 12:16:59', '2021-03-27 02:26:37', 1, 5, 14),
(115, '2021-12-08 21:29:00', '2022-02-13 11:24:41', 4, 13, 10),
(116, '2021-05-09 04:21:28', '2021-11-09 20:34:50', 1, 2, 20),
(117, '2021-10-23 23:59:52', '2021-06-15 14:57:27', 2, 7, 2),
(118, '2022-01-05 06:54:39', '2021-10-08 02:46:30', 1, 16, 11),
(119, '2022-01-25 10:47:38', '2021-08-09 09:15:40', 2, 20, 18),
(120, '2022-01-05 00:16:26', '2021-11-02 07:44:52', 1, 13, 8),
(121, '2021-12-22 22:37:10', '2021-08-22 01:33:01', 5, 11, 22),
(122, '2021-04-16 17:00:37', '2021-07-01 06:16:22', 5, 18, 12),
(123, '2021-06-06 21:54:49', '2021-05-04 11:59:28', 3, 22, 11),
(124, '2021-08-08 05:35:27', '2021-05-12 19:30:32', 1, 17, 6),
(125, '2021-12-04 11:28:46', '2022-02-06 12:52:33', 3, 8, 4),
(126, '2021-11-12 07:20:47', '2022-02-14 08:21:38', 3, 10, 12),
(127, '2022-01-26 20:18:50', '2022-01-04 16:30:31', 1, 17, 1),
(128, '2021-08-15 06:40:07', '2021-04-19 19:25:57', 5, 6, 8),
(129, '2021-03-30 00:46:27', '2021-08-05 01:54:26', 2, 4, 10),
(130, '2022-03-08 20:36:01', '2022-01-08 12:43:57', 5, 11, 17),
(131, '2021-10-15 01:12:29', '2022-02-19 10:31:55', 5, 9, 17),
(132, '2021-10-13 22:48:27', '2022-01-14 09:36:14', 3, 1, 10),
(133, '2021-10-15 13:02:11', '2021-05-25 17:44:50', 1, 1, 13),
(134, '2021-11-23 05:37:36', '2021-08-05 02:13:44', 2, 22, 9),
(135, '2021-06-08 06:53:37', '2021-09-24 22:23:23', 1, 2, 13),
(136, '2021-11-26 01:46:37', '2021-08-21 01:22:02', 5, 6, 19),
(137, '2021-04-06 02:58:51', '2021-12-22 10:33:22', 3, 12, 17),
(138, '2021-11-24 21:25:21', '2021-07-15 20:31:30', 2, 23, 13),
(139, '2021-07-05 09:24:37', '2021-05-16 00:35:13', 3, 3, 3),
(140, '2021-10-25 00:49:11', '2021-09-22 07:47:11', 4, 17, 16),
(141, '2021-04-02 16:02:35', '2021-12-18 17:57:12', 2, 4, 3),
(142, '2021-06-01 19:15:12', '2021-10-28 12:55:45', 2, 15, 18),
(143, '2022-03-03 01:23:54', '2022-02-15 19:01:23', 3, 22, 9),
(144, '2021-03-14 02:30:53', '2021-08-10 21:08:41', 4, 19, 8),
(145, '2021-04-03 00:28:56', '2021-10-15 06:29:11', 3, 18, 12),
(146, '2021-09-13 18:32:48', '2021-09-16 14:31:01', 1, 6, 9),
(147, '2021-03-22 00:26:12', '2021-10-22 10:09:10', 4, 17, 19),
(148, '2021-12-19 14:04:27', '2021-11-09 05:55:53', 1, 1, 4),
(149, '2021-08-28 01:13:25', '2021-04-26 06:22:47', 3, 21, 16),
(150, '2022-01-07 04:07:54', '2021-10-18 01:54:03', 1, 13, 18),
(151, '2022-03-13 17:33:48', '2021-06-08 13:42:54', 2, 10, 2),
(152, '2021-10-11 05:57:56', '2022-02-04 10:13:08', 2, 19, 20),
(153, '2022-02-12 05:46:34', '2021-09-16 00:06:17', 5, 17, 24),
(154, '2021-06-25 08:56:48', '2021-09-21 01:18:05', 4, 1, 11),
(155, '2021-11-20 09:12:00', '2021-09-02 13:14:42', 4, 11, 13),
(156, '2021-07-02 10:45:53', '2022-02-22 18:07:02', 5, 13, 2),
(157, '2021-08-31 12:59:30', '2021-05-30 19:37:29', 2, 5, 24),
(158, '2021-12-08 01:36:51', '2021-04-07 15:18:09', 2, 20, 17),
(159, '2021-04-07 15:28:06', '2022-01-05 13:49:11', 3, 16, 5),
(160, '2021-03-23 14:21:13', '2021-07-06 02:04:27', 1, 14, 11),
(161, '2022-02-22 07:22:04', '2021-08-18 00:36:14', 4, 7, 14),
(162, '2022-01-02 09:59:37', '2022-01-05 04:51:32', 4, 19, 20),
(163, '2021-09-18 22:36:34', '2021-08-30 15:50:46', 1, 8, 10),
(164, '2021-06-28 14:21:52', '2021-12-05 07:11:15', 3, 24, 2),
(165, '2021-09-13 02:49:25', '2021-06-12 13:03:46', 4, 5, 17),
(166, '2021-11-14 19:12:04', '2021-08-13 04:29:44', 4, 7, 1),
(167, '2021-03-20 15:41:06', '2021-10-04 16:25:17', 1, 20, 13),
(168, '2021-06-16 12:53:28', '2021-12-25 14:10:40', 1, 20, 16),
(169, '2021-12-19 00:59:15', '2022-01-10 19:25:38', 5, 11, 12),
(170, '2021-09-11 18:22:38', '2021-11-27 01:39:56', 5, 17, 10),
(171, '2021-05-27 00:08:50', '2021-10-15 13:45:27', 5, 1, 12),
(172, '2021-11-03 18:30:23', '2022-01-21 20:56:00', 2, 2, 12),
(173, '2022-02-22 11:44:15', '2021-04-24 10:41:42', 3, 12, 12),
(174, '2021-11-09 12:42:32', '2021-10-30 19:28:24', 2, 14, 23),
(175, '2022-01-03 09:15:27', '2021-05-28 04:46:28', 1, 12, 18),
(176, '2021-09-18 15:24:08', '2021-09-01 10:50:56', 1, 7, 13),
(177, '2021-11-30 09:34:27', '2021-05-15 02:31:38', 3, 14, 7),
(178, '2021-04-03 14:22:25', '2021-03-20 05:06:07', 3, 19, 25),
(179, '2021-08-09 21:29:17', '2021-12-30 13:52:24', 3, 7, 9),
(180, '2021-08-13 22:25:23', '2021-10-07 00:36:08', 3, 7, 21),
(181, '2021-07-26 10:27:53', '2021-07-19 03:35:30', 3, 14, 23),
(182, '2021-06-03 04:01:21', '2022-02-19 22:53:25', 1, 14, 14),
(183, '2021-09-29 21:12:39', '2021-10-03 05:25:43', 4, 25, 25),
(184, '2021-08-07 18:06:40', '2021-12-05 11:16:24', 3, 5, 3),
(185, '2021-08-21 04:29:57', '2021-08-06 14:18:58', 2, 6, 19),
(186, '2021-12-15 14:55:34', '2021-05-29 08:06:30', 4, 24, 16),
(187, '2021-06-05 05:19:54', '2021-11-30 00:02:57', 3, 4, 25),
(188, '2021-08-11 10:53:33', '2021-09-09 05:08:26', 2, 25, 9),
(189, '2021-08-08 21:53:37', '2021-03-24 05:49:32', 1, 13, 19),
(190, '2021-06-15 02:47:25', '2021-11-28 13:02:25', 3, 12, 15),
(191, '2022-01-03 04:23:06', '2021-03-22 20:51:26', 1, 19, 19),
(192, '2021-04-08 13:25:11', '2021-05-29 23:35:08', 2, 23, 17),
(193, '2021-09-28 13:17:01', '2021-09-15 19:35:22', 5, 15, 9),
(194, '2021-11-27 19:28:23', '2021-11-04 18:48:38', 1, 25, 11),
(195, '2022-02-02 19:53:51', '2021-03-30 08:54:28', 4, 22, 9),
(196, '2021-05-04 01:49:36', '2022-01-29 08:30:02', 4, 4, 11),
(197, '2022-01-10 08:41:03', '2021-03-18 17:59:56', 4, 18, 20),
(198, '2021-04-06 07:01:30', '2021-04-08 17:19:04', 3, 4, 13),
(199, '2021-11-07 06:43:49', '2022-03-02 02:56:49', 4, 24, 1),
(200, '2021-11-14 17:37:26', '2021-11-02 03:46:14', 1, 25, 13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buses`
--
ALTER TABLE `buses`
  ADD PRIMARY KEY (`bus_number`),
  ADD KEY `bus_model_id` (`bus_model_id`);

--
-- Indexes for table `bus_models`
--
ALTER TABLE `bus_models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_travels`
--
ALTER TABLE `customer_travels`
  ADD KEY `travel_id` (`travel_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `travels`
--
ALTER TABLE `travels`
  ADD PRIMARY KEY (`travel_number`),
  ADD KEY `driver_id` (`driver_id`),
  ADD KEY `bus_number` (`bus_number`),
  ADD KEY `arrival_provice_id` (`arrival_provice_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buses`
--
ALTER TABLE `buses`
  MODIFY `bus_number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `bus_models`
--
ALTER TABLE `bus_models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `travels`
--
ALTER TABLE `travels`
  MODIFY `travel_number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buses`
--
ALTER TABLE `buses`
  ADD CONSTRAINT `buses_ibfk_1` FOREIGN KEY (`bus_model_id`) REFERENCES `bus_models` (`id`);

--
-- Constraints for table `customer_travels`
--
ALTER TABLE `customer_travels`
  ADD CONSTRAINT `customer_travels_ibfk_1` FOREIGN KEY (`travel_id`) REFERENCES `travels` (`travel_number`),
  ADD CONSTRAINT `customer_travels_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `travels`
--
ALTER TABLE `travels`
  ADD CONSTRAINT `travels_ibfk_1` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`),
  ADD CONSTRAINT `travels_ibfk_2` FOREIGN KEY (`bus_number`) REFERENCES `buses` (`bus_number`),
  ADD CONSTRAINT `travels_ibfk_3` FOREIGN KEY (`arrival_provice_id`) REFERENCES `provinces` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
