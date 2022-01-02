-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2022 at 09:21 PM
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
  `name` varchar(100) NOT NULL,
  `name_seo` varchar(175) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `group_id` int(11) NOT NULL DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `core_members`
--

INSERT INTO `core_members` (`id`, `name`, `name_seo`, `email`, `password`, `group_id`) VALUES
(16, 'aXen', 'axen', 'test@test.pl', '$2b$16$YTr3a8plw4Xk5pjbfdV.cezbL.WfesG7UAmp2fA.qGlym1DweEuoe', 3),
(27, 'Admin aXen', 'adminaxen', 'admin@admin.pl', '$2b$16$X5t9MXhoNBhAqrdU/n0VSe9ppej/N2IfN.JMkQY4U4g1faHSvaVgi', 4),
(28, 'test1234414', 'test1234414', 'test@test123456.pl', '$2b$16$pq5Bqz0eOjZqWtYrDP2iV.7p6MN3y6u5RaSnsBptHLfs7Mj/xCi6e', 3);

-- --------------------------------------------------------

--
-- Table structure for table `recipes_categories`
--

CREATE TABLE `recipes_categories` (
  `id` bigint(20) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes_categories`
--

INSERT INTO `recipes_categories` (`id`, `name`) VALUES
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
  `carbohydrates` int(11) NOT NULL DEFAULT 0,
  `ingredients` text DEFAULT NULL,
  `serve_count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `recipes_shopping`
--

CREATE TABLE `recipes_shopping` (
  `id` bigint(20) NOT NULL,
  `member_id` bigint(20) NOT NULL,
  `list` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recipes_shopping`
--

INSERT INTO `recipes_shopping` (`id`, `member_id`, `list`) VALUES
(2, 16, ''),
(3, 16, ''),
(4, 16, ''),
(5, 16, ''),
(6, 16, ''),
(7, 16, ''),
(8, 16, ''),
(9, 16, ''),
(10, 16, ''),
(11, 16, ''),
(12, 16, ''),
(13, 16, ''),
(14, 16, ''),
(15, 16, ''),
(16, 16, '[{\"id\":\"db2ca208-dc7c-4136-88b9-58477c049cf8\",\"quantity\":2,\"unit\":\"pieces\",\"name\":\"saf\",\"checked\":0}]'),
(17, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0}]'),
(18, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(19, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(20, 16, '[{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(21, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(22, 16, '[{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(23, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(24, 16, '[{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(25, 16, '[{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(26, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(27, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(28, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(29, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(30, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(31, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(32, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0}]'),
(33, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(34, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(35, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(36, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(37, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(38, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(39, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(40, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(41, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(42, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(43, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(44, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(45, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(46, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(47, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(48, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(49, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(50, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(51, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(52, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(53, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(54, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(55, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":0},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(56, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(57, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(58, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(59, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(60, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(61, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(62, 16, '[{\"id\":\"555f2b83-deb9-4368-93f0-aa375a10bed0\",\"quantity\":3,\"unit\":\"\",\"name\":\"dfhfdh\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(63, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"555f2b83-deb9-4368-93f0-aa375a10bed0\",\"quantity\":3,\"unit\":\"\",\"name\":\"dfhfdh\",\"checked\":0},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(64, 16, '[{\"id\":\"555f2b83-deb9-4368-93f0-aa375a10bed0\",\"quantity\":3,\"unit\":\"\",\"name\":\"dfhfdh\",\"checked\":0},{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(65, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0}]'),
(66, 16, '[{\"id\":\"0612d532-fcfe-4a20-a603-fded547a8a07\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"saf123\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1}]'),
(67, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1}]'),
(68, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(69, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(70, 16, '[{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(71, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(72, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(73, 16, '[{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]'),
(74, 16, '[{\"id\":\"b313f5ca-12be-45f0-ac34-9049e2302e65\",\"quantity\":3,\"unit\":\"mg\",\"name\":\"asf\",\"checked\":1},{\"id\":\"a9493cbe-0a6f-4dc5-b2c7-844f16ae5899\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hlj\",\"checked\":0},{\"id\":\"6c3daccb-0f5b-411a-acc5-d6bce3044554\",\"quantity\":2,\"unit\":\"ml\",\"name\":\"hj;lh;j\",\"checked\":1},{\"id\":\"9fb2431f-54ab-487a-9a8d-beea7f43fd8f\",\"quantity\":3,\"unit\":\"l\",\"name\":\"hjl\",\"checked\":0}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `core_members`
--
ALTER TABLE `core_members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`,`email`);

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
-- Indexes for table `recipes_shopping`
--
ALTER TABLE `recipes_shopping`
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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `recipes_shopping`
--
ALTER TABLE `recipes_shopping`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
