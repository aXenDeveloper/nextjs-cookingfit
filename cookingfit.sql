-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2021 at 08:26 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cookingfit`
--

-- --------------------------------------------------------

--
-- Table structure for table `core_members`
--

CREATE TABLE `core_members` (
  `id` bigint(20) NOT NULL,
  `member_name` varchar(100) NOT NULL,
  `member_name_seo` text NOT NULL,
  `member_email` varchar(255) NOT NULL,
  `member_password` varchar(255) NOT NULL,
  `member_group_id` int(11) NOT NULL DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `core_members`
--

INSERT INTO `core_members` (`id`, `member_name`, `member_name_seo`, `member_email`, `member_password`, `member_group_id`) VALUES
(16, 'aXen', 'axen', 'test@test.pl', '$2b$16$YTr3a8plw4Xk5pjbfdV.cezbL.WfesG7UAmp2fA.qGlym1DweEuoe', 3),
(27, 'Admin aXen', 'adminaxen', 'admin@admin.pl', '$2b$16$X5t9MXhoNBhAqrdU/n0VSe9ppej/N2IfN.JMkQY4U4g1faHSvaVgi', 4),
(28, 'test1234414', 'test1234414', 'test@test123456.pl', '$2b$16$pq5Bqz0eOjZqWtYrDP2iV.7p6MN3y6u5RaSnsBptHLfs7Mj/xCi6e', 3);

-- --------------------------------------------------------

--
-- Table structure for table `recipes_categories`
--

CREATE TABLE `recipes_categories` (
  `id` bigint(20) NOT NULL,
  `category_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes_categories`
--

INSERT INTO `recipes_categories` (`id`, `category_name`) VALUES
(1, 'breakfasts'),
(2, 'dinners'),
(3, 'soups'),
(4, 'fastfoods'),
(5, 'seafoods'),
(6, 'salads'),
(7, 'desserts'),
(8, 'icecreams'),
(9, 'snacks'),
(10, 'drinks');

-- --------------------------------------------------------

--
-- Table structure for table `recipes_recipes`
--

CREATE TABLE `recipes_recipes` (
  `id` bigint(20) NOT NULL,
  `title` text NOT NULL,
  `url` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `author_id` bigint(20) NOT NULL,
  `publish_date` int(11) NOT NULL,
  `image` text DEFAULT NULL,
  `difficulty` int(3) NOT NULL DEFAULT 1,
  `time` int(11) NOT NULL,
  `text` text NOT NULL,
  `calories` int(11) NOT NULL DEFAULT 0,
  `proteins` int(11) NOT NULL DEFAULT 0,
  `fats` int(11) NOT NULL DEFAULT 0,
  `carbohydrates` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes_recipes`
--

INSERT INTO `recipes_recipes` (`id`, `title`, `url`, `category_id`, `author_id`, `publish_date`, `image`, `difficulty`, `time`, `text`, `calories`, `proteins`, `fats`, `carbohydrates`) VALUES
(1, 'test123', 'test123', 1, 16, 1630252931, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80', 1, 42, 'sdgdsg', 0, 0, 0, 0),
(2, 'jakiś test', 'jakis-test', 2, 16, 1630252931, 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?', 3, 23, '32tedsew', 0, 0, 0, 0),
(13, 'test1234', 'test1234', 1, 16, 2147483647, NULL, 1, 3, '<p>Hello from CKEditor 5!</p>', 0, 0, 0, 0),
(14, 'test12345', 'test12345', 1, 16, 2147483647, NULL, 1, 3, '<p>Hello from CKEditor 5!</p>', 0, 0, 0, 0),
(15, 'test123456', 'test123456', 1, 16, 2147483647, NULL, 1, 3, '<p>Hello from CKEditor 5!</p>', 0, 0, 0, 0),
(16, 'zxvvxz', 'zxvvxz', 1, 16, 2147483647, NULL, 1, 3, '<p>Hello from CKEditor 5!</p>', 0, 0, 0, 0),
(17, 'afsaf', 'afsaf', 1, 16, 2147483647, NULL, 1, 3, '<p>Hello from CKEditor 5!</p>', 0, 0, 0, 0),
(18, 'test123saf', 'test123saf', 3, 16, 2147483647, NULL, 1, 3, '<p>z</p>', 0, 0, 0, 0),
(19, 'fsaafdhsd', 'fsaafdhsd', 1, 16, 2147483647, NULL, 1, 3, '<p>asgshdh</p>', 0, 0, 0, 0),
(20, '1ewfgsd', '1ewfgsd', 1, 16, 2147483647, NULL, 3, 34, '<p>saga</p>', 0, 0, 0, 0),
(21, 'hrfesdgsdh', 'hrfesdgsdh', 1, 16, 2147483647, NULL, 2, 75, '<p>sdhsjd</p>', 0, 0, 0, 0),
(22, 'test123shdfdj', 'test123shdfdj', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(23, 'dfjdjerfj', 'dfjdjerfj', 1, 16, 2147483647, NULL, 1, 35, '<p>ggfm</p>', 0, 0, 0, 0),
(24, 'test123shdfdjg', 'test123shdfdjg', 2, 16, 346, '/uploads/monthly_8_2021/1631455668981_photo-1504674900247-0877df9cc836.jpeg', 1, 1, 'sgwd', 0, 0, 0, 0),
(25, 'test123shdfdjgdgsgds', 'test123shdfdjgdgsgds', 2, 16, 346, '/uploads/monthly_8_2021/1631456254157_photo-1504674900247-0877df9cc836.jpeg', 1, 1, 'sgwd', 0, 0, 0, 0),
(26, 'test123shdfdjgdgsgdsgfd', 'test123shdfdjgdgsgdsgfd', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(27, 'test123shdfdjgdgsgdsgfdfe', 'test123shdfdjgdgsgdsgfdfe', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(28, 'test123shdfdjgdgsgdsgfdfedf', 'test123shdfdjgdgsgdsgfdfedf', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(29, 'test123shdfdjgdgsgdsgfdfedff', 'test123shdfdjgdgsgdsgfdfedff', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(30, 'vndnf', 'vndnf', 1, 16, 2147483647, NULL, 1, 342, '<p>ghn</p>', 0, 0, 0, 0),
(31, 'test123shdfdjgdgsgdsgfdfedffd', 'test123shdfdjgdgsgdsgfdfedffd', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(32, 'postman', 'postman', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(33, 'dsgdsg', 'dsgdsg', 1, 16, 2147483647, NULL, 1, 46, '<p>fdh</p>', 0, 0, 0, 0),
(34, 'postman1', 'postman1', 2, 16, 346, NULL, 1, 1, 'sgwd', 0, 0, 0, 0),
(35, 'postman12', 'postman12', 2, 16, 2147483647, '/uploads/monthly_8_2021/1631458544361_photo-1504674900247-0877df9cc836.jpeg', 1, 1, 'sgwd', 0, 0, 0, 0),
(36, 'wefdfsdg', 'wefdfsdg', 1, 16, 2147483647, NULL, 1, 654, '<p>cxvdfb</p>', 0, 0, 0, 0),
(37, 'safasf', 'safasf', 1, 16, 2147483647, '/uploads/monthly_8_2021/1631458732238_photo-1504674900247-0877df9cc836.jpeg', 2, 355, '<p>asfsaf</p>', 0, 0, 0, 0),
(38, 'efw gsgsdg', 'efw-gsgsdg', 1, 16, 2147483647, '/uploads/monthly_8_2021/1631458840055_photo-1504674900247-0877df9cc836.jpeg', 3, 3, '<p>dsgdsg</p>', 0, 0, 0, 0),
(39, 'safasfsafsaf', 'safasfsafsaf', 1, 16, 2147483647, NULL, 1, 14, '<p>sdgsdh</p>', 0, 0, 0, 0),
(40, 'dsgdfbsfdsb', 'dsgdfbsfdsb', 1, 16, 2147483647, '/uploads/monthly_8_2021/1631465689983_photo-1504674900247-0877df9cc836.jpeg', 1, 3, '<p>dfbsdfbdfsb</p>', 0, 0, 0, 0),
(41, 'ewfsdvsdg', 'ewfsdvsdg', 1, 16, 2147483647, NULL, 1, 43, '<p>sdgsdg</p>', 0, 0, 0, 0),
(42, 'fdh', 'fdh', 1, 16, 2147483647, NULL, 1, 346, '<p>dfhfdh</p>', 0, 0, 0, 0),
(43, 'rsbdfbh', 'rsbdfbh', 1, 16, 2147483647, '/uploads/monthly_8_2021/1631473304529_photo-1504674900247-0877df9cc836 - Copy.jpeg', 1, 46, '<p>sfhsh</p>', 0, 0, 0, 0),
(44, 'dvsdbvsd', 'dvsdbvsd', 1, 16, 2147483647, NULL, 1, 324, '<p>dsgsdgsgd</p>', 0, 0, 0, 0),
(45, 'xcb', 'xcb', 1, 16, 2147483647, NULL, 1, 63, '<p>dfn</p>', 0, 0, 0, 0),
(46, 'gewdv23egw', 'gewdv23egw', 1, 16, 2147483647, NULL, 1, 324, '<p>sdg</p>', 0, 0, 0, 0),
(47, 'fesdf323fe23f3', 'fesdf323fe23f3', 1, 16, 2147483647, NULL, 1, 1432, '<p>sdgsdv</p>', 3432, 324, 124, 54);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `core_members`
--
ALTER TABLE `core_members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`member_name`,`member_email`);

--
-- Indexes for table `recipes_categories`
--
ALTER TABLE `recipes_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipes_recipes`
--
ALTER TABLE `recipes_recipes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `core_members`
--
ALTER TABLE `core_members`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `recipes_categories`
--
ALTER TABLE `recipes_categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `recipes_recipes`
--
ALTER TABLE `recipes_recipes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
