-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2021 at 02:25 PM
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
  `name_seo` text NOT NULL,
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

--
-- Dumping data for table `recipes_recipes`
--

INSERT INTO `recipes_recipes` (`id`, `title`, `url`, `category_id`, `author_id`, `publish_date`, `image`, `difficulty`, `time`, `text`, `calories`, `proteins`, `fats`, `carbohydrates`, `ingredients`, `serve_count`) VALUES
(51, 'asg', 'asg', 1, 16, 0, NULL, 1, 2154, '<p>sagasg</p>', 0, 0, 0, 0, '[{\"id\":\"815af5e3-efec-4367-93d6-26cd1075014d\",\"quantity\":0,\"unit\":\"\",\"name\":\"sagsag\"},{\"id\":\"e2adeba5-1909-4550-a8e9-7e26c00366da\",\"quantity\":0,\"unit\":\"\",\"name\":\"sagasg\"}]', NULL),
(52, 'horizonf', 'horizonf', 1, 16, 1632410575, NULL, 3, 2431, '<p>test</p>', 999, 0, 0, 0, '[{\"id\":\"06aebea2-ae46-4db9-af3e-4df341f30855\",\"quantity\":1.5,\"unit\":\"ml\",\"name\":\"safsaf\"}]', 2),
(55, 'testgssdg', 'testgssdg', 1, 16, 0, NULL, 1, 42, '<p>sdgsdg</p>', 0, 0, 0, 0, '[{\"id\":\"221b45dc-692b-4bad-8d0e-e058eb20275a\",\"quantity\":0.5,\"unit\":\"asf\",\"name\":\"asf\"},{\"id\":\"3e68e836-40ce-41cd-9e69-b78b49ddcb4d\",\"quantity\":5,\"unit\":\"fgd\",\"name\":\"243\"}]', NULL),
(56, 'zsgbsdh', 'zsgbsdh', 1, 16, 0, NULL, 1, 325, '<p>asf</p>', 0, 0, 0, 0, '[{\"id\":\"64d06a9f-ab8a-4ebf-a2d8-2f08ef6a870f\",\"quantity\":5,\"unit\":\"asf\",\"name\":\"asf\"}]', NULL),
(57, 'testgssdg3', 'testgssdg3', 1, 16, 0, NULL, 1, 2145, '<p>asf</p>', 0, 0, 0, 0, NULL, NULL),
(58, 'asgsag', 'asgsag', 1, 16, 0, NULL, 1, 352, '<p>asfsaf</p>', 0, 0, 0, 0, NULL, NULL),
(59, 'sagasg', 'sagasg', 1, 16, 0, NULL, 1, 214, '<p>asfasf</p>', 0, 0, 0, 0, '[{\"id\":\"75dd6e5e-6961-49da-9c67-6091220d1934\",\"quantity\":5,\"unit\":\"asg\",\"name\":\"asf\"}]', NULL),
(60, 'test 123 sagasg', 'test-123-sagasg', 1, 16, 0, NULL, 1, 10, '<p>test</p>', 0, 0, 0, 0, '[{\"id\":\"0a487246-8e53-4e1c-b5e8-6fe216b7b314\",\"quantity\":5,\"unit\":\"kg\",\"name\":\"pomidory\"},{\"id\":\"4f70214f-b10f-48f7-bc6f-5be24ea8a281\",\"quantity\":2.5,\"unit\":\"mg\",\"name\":\"testu\"}]', NULL),
(61, 'tasgf sag asg sag  ', 'tasgf-sag-asg-sag', 1, 16, 0, NULL, 1, 215, '<p>asf</p>', 0, 0, 0, 0, '[{\"id\":\"e3d63764-e246-4990-a868-3b3cfbf5b17d\",\"quantity\":2,\"unit\":\"kg\",\"name\":\"saf\"}]', NULL),
(62, 'asfas saf saf 3tasgf', 'asfas-saf-saf-3tasgf', 1, 16, 0, NULL, 1, 2154, '<p>asg</p>', 0, 0, 0, 0, '[{\"id\":\"1ccf6c9f-70b3-42ae-a2c8-8f4f2f44b755\",\"quantity\":1,\"unit\":\"kg\",\"name\":\"asg\"}]', NULL),
(63, 'test', 'test', 2, 16, 0, NULL, 1, 13, '<p>test</p>', 0, 0, 0, 0, '[{\"id\":\"50fc4948-86bf-4353-ab0f-377f00f7fc08\",\"quantity\":1.3333333333333333,\"unit\":\"pieces\",\"name\":\"test\"},{\"id\":\"6d351736-201a-4bcb-9551-6ab3fbc13ee3\",\"quantity\":3.3333333333333335,\"unit\":\"pieces\",\"name\":\"pomidorów\"},{\"id\":\"586d744b-8baf-4608-80e8-799118554478\",\"quantity\":42.666666666666664,\"unit\":\"mg\",\"name\":\"kokli\"}]', NULL),
(64, 'test21r5', 'test21r5', 1, 16, 0, NULL, 1, 234, '<p>saf</p>', 0, 0, 0, 0, '[{\"id\":\"0245addc-f2de-462e-8acb-92d542cfcdf9\",\"quantity\":1,\"unit\":\"pieces\",\"name\":\"test\"},{\"id\":\"0c84b6f8-e78f-414b-b955-b290ca4090d5\",\"quantity\":1,\"unit\":\"teaspoon\",\"name\":\"tasgf\"},{\"id\":\"a4cf0325-952a-4380-aa18-0872ec1ba656\",\"quantity\":1,\"unit\":\"cup\",\"name\":\"asg\"},{\"id\":\"d2e361dd-e2e7-4b74-9647-2468a548e35f\",\"quantity\":1,\"unit\":\"glass\",\"name\":\"asg\"}]', 2),
(65, 'test', 'test', 1, 16, 23, NULL, 1, 13, '<p>asf</p>', 0, 0, 0, 0, '[]', 1),
(66, 'sdg', 'sdg', 1, 16, 1632139016, NULL, 1, 214, '<p>ag</p>', 0, 0, 0, 0, '[]', 1),
(67, 'saf', 'saf', 1, 16, 1598970717, NULL, 1, 2, '<p>asfsaf</p>', 0, 0, 0, 0, '[]', 1),
(68, 'tasgf', 'tasgf', 1, 16, 1598941917, NULL, 1, 23, '<p>asg</p>', 0, 0, 0, 0, '[]', 1),
(69, 'asg', 'asg', 1, 16, 1621094271, NULL, 1, 2, '<p>asg</p>', 0, 0, 0, 0, '[]', 1),
(70, 'sag', 'sag', 1, 16, 1630477917, NULL, 1, 23, '<p>sag</p>', 0, 0, 0, 0, '[]', 1),
(71, 'asf', 'asf', 1, 16, 1632302794, NULL, 1, 12, '<p>saf</p>', 0, 0, 0, 0, '[]', 1),
(72, 'sag', 'sag', 1, 16, 1632033117, NULL, 1, 125, '<p>asg</p>', 0, 0, 0, 0, '[]', 1),
(73, 'saf', 'saf', 1, 16, 1632205917, NULL, 1, 1, '<p>safasf</p>', 0, 0, 0, 0, '[]', 1),
(74, 'test', 'test', 1, 16, 1632405319, NULL, 2, 12, '<p>sag</p>', 325, 253, 235, 235, '[{\"id\":\"b24a8d14-c41d-4aca-a212-9f917c3eb277\",\"quantity\":6,\"unit\":\"pieces\",\"name\":\"test\"},{\"id\":\"f983b679-0fcc-4fa0-a871-63ef51dcab6b\",\"quantity\":2,\"unit\":\"teaspoon\",\"name\":\"asg\"}]', 2),
(75, 'vcnn', 'vcnn', 1, 16, 1632406966, NULL, 1, 24, '<p>sdg</p>', 0, 0, 0, 0, '[]', 1),
(76, 'sdg', 'sdg', 1, 16, 1632407644, NULL, 1, 325, '<p>sdg</p>', 0, 0, 0, 0, '[]', 1),
(77, 'test123', 'test123', 1, 16, 1632410842, NULL, 1, 1, '<p>asffffasf</p>', 0, 0, 0, 0, '[]', 1),
(78, 'test 123', 'test-123', 1, 27, 1632483879, '/uploads/monthly_8_2021/1632411111386_lily-banse--YHSwy6uqvk-unsplash.jpg', 1, 1, '<p>asgsagsdg</p><figure class=\"image\"><img src=\"/uploads/monthly_8_2021/1632415002145_lily-banse--YHSwy6uqvk-unsplash.jpg\"></figure>', 0, 0, 0, 0, '[{\"id\":\"bc1b90b7-6c4c-46fb-b937-7483c575be37\",\"quantity\":2,\"unit\":\"g\",\"name\":\"saqsaf\"}]', 1),
(79, 'asgfasg', 'asgfasg', 2, 16, 1632485315, '/uploads/monthly_8_2021/1632411190577_lily-banse--YHSwy6uqvk-unsplash.jpg', 1, 1, '<p>asfasf</p>', 0, 0, 0, 0, '[]', 1);

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
