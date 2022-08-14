-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 14, 2022 at 10:14 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `n` varchar(35) NOT NULL,
  `age` varchar(3) NOT NULL,
  `gender` varchar(12) NOT NULL,
  `country` varchar(30) NOT NULL,
  `music` varchar(15) NOT NULL,
  `flavor` varchar(15) NOT NULL,
  `presidents` varchar(15) NOT NULL,
  `baby` varchar(15) NOT NULL,
  `water` varchar(15) NOT NULL,
  `sleep` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`n`, `age`, `gender`, `country`, `music`, `flavor`, `presidents`, `baby`, `water`, `sleep`) VALUES
('Ron', '35', 'male', 'MT', 'Ron', 'sweet', 'roosevelt', 'coco', 'flask', '36'),
('Anne', '23', 'female', 'PK', 'Anne', 'salty', 'obama', 'earl', 'thermos', 'always'),
('Jackie', '17', 'other', 'HU', 'Jackie', 'salty', 'roosevelt', 'coco', 'nowater', '13'),
('Srull', '13', 'male', 'US', 'Srull', 'sweet', 'roosevelt', 'coco', 'flask', '710'),
('Mom', '54', 'female', 'FK', 'Mom', 'tart', 'carter', 'basil', 'plastic', '13'),
('Gem', '29', 'other', 'EC', 'Gem', 'spicy', 'jackson', 'germ', 'nowater', 'nosleep'),
('Robin', '19', 'other', 'IN', 'Robin', 'cheesy', 'kennedy', 'coco', 'tap', '36');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
