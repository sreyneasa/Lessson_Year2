-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2024 at 06:17 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inns_rest_system_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bed_types`
--

CREATE TABLE `bed_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bed_types`
--

INSERT INTO `bed_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'One bad', '2024-07-08 02:11:50', '2024-07-08 02:11:50'),
(2, 'Two bad', '2024-07-08 02:11:50', '2024-07-08 02:11:50'),
(3, 'One bad', '2024-07-08 05:21:49', '2024-07-08 05:21:49'),
(4, 'Two bad', '2024-07-08 05:21:49', '2024-07-08 05:21:49');

-- --------------------------------------------------------

--
-- Table structure for table `booking_user_rooms`
--

CREATE TABLE `booking_user_rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `number_of_rooms` int(11) NOT NULL,
  `departure_date` datetime NOT NULL,
  `arrival_date` datetime NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category_guest_houses`
--

CREATE TABLE `category_guest_houses` (
  `guesthouse_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `checking_room`
--

CREATE TABLE `checking_room` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `conversations`
--

CREATE TABLE `conversations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `receiver_id` bigint(20) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `conversations`
--

INSERT INTO `conversations` (`id`, `sender_id`, `receiver_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 2, 1, NULL, '2024-07-08 05:21:49', '2024-07-08 05:21:49'),
(2, 3, 1, NULL, '2024-07-08 05:21:49', '2024-07-08 05:21:49');

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_room`
--

CREATE TABLE `dashboard_room` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `day_guest_houses`
--

CREATE TABLE `day_guest_houses` (
  `day_id` int(10) UNSIGNED NOT NULL,
  `guesthouse_id` int(10) UNSIGNED NOT NULL,
  `from_hours` varchar(255) NOT NULL,
  `from_minutes` varchar(255) NOT NULL,
  `to_hours` varchar(255) NOT NULL,
  `to_minutes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `frontusers`
--

CREATE TABLE `frontusers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `guest_houses`
--

CREATE TABLE `guest_houses` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` longtext DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mailsettings`
--

CREATE TABLE `mailsettings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mail_transport` varchar(255) NOT NULL,
  `mail_host` varchar(255) NOT NULL,
  `mail_port` varchar(255) NOT NULL,
  `mail_username` varchar(255) NOT NULL,
  `mail_password` varchar(255) NOT NULL,
  `mail_encryption` varchar(255) NOT NULL,
  `mail_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mailsettings`
--

INSERT INTO `mailsettings` (`id`, `mail_transport`, `mail_host`, `mail_port`, `mail_username`, `mail_password`, `mail_encryption`, `mail_from`, `created_at`, `updated_at`) VALUES
(1, 'smtp', 'smtp.mailtrap.io', '2525', 'ed3caa94a48fd1', 'baf29d92154c72', 'tls', 'ajayyadavexpo@gmail.com', '2024-07-08 05:21:49', '2024-07-08 05:21:49');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL,
  `uuid` char(36) DEFAULT NULL,
  `collection_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `mime_type` varchar(255) DEFAULT NULL,
  `disk` varchar(255) NOT NULL,
  `conversions_disk` varchar(255) DEFAULT NULL,
  `generated_conversions` varchar(255) DEFAULT NULL,
  `size` bigint(20) UNSIGNED NOT NULL,
  `manipulations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`manipulations`)),
  `custom_properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`custom_properties`)),
  `responsive_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`responsive_images`)),
  `order_column` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `conversation_id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED DEFAULT NULL,
  `receiver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `receiver_deleted_at` timestamp NULL DEFAULT NULL,
  `sender_deleted_at` timestamp NULL DEFAULT NULL,
  `body` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `conversation_id`, `sender_id`, `receiver_id`, `read_at`, `receiver_deleted_at`, `sender_deleted_at`, `body`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, NULL, NULL, NULL, 'hello!', '2024-07-08 05:21:49', '2024-07-08 05:21:49'),
(2, 2, 3, 1, NULL, NULL, NULL, 'Good morning!', '2024-07-08 05:21:49', '2024-07-08 05:21:49');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(52, '2024_07_05_164045_create_bad_types_table', 1),
(259, '2014_10_12_000000_create_users_table', 2),
(260, '2014_10_12_100000_create_password_resets_table', 2),
(261, '2019_08_19_000000_create_failed_jobs_table', 2),
(262, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(263, '2021_10_24_052122_create_frontusers_table', 2),
(264, '2021_10_24_055150_create_permission_tables', 2),
(265, '2021_10_31_101342_create_posts_table', 2),
(266, '2022_05_01_060321_add_profile_to_users_table', 2),
(267, '2022_05_19_122208_create_mailsettings_table', 2),
(268, '2024_06_23_145156_create_branch', 2),
(269, '2024_06_24_042506_create_dashboard_room', 2),
(270, '2024_06_24_054533_check_booking', 2),
(271, '2024_06_24_055346_create_history', 2),
(272, '2024_06_24_060215_create_checking_room', 2),
(273, '2024_06_25_064738_create_media_table', 2),
(274, '2024_06_25_065714_create_guest_houses_table', 2),
(275, '2024_06_25_070407_create_days_table', 2),
(276, '2024_06_25_070503_create_day_guest_houses_table', 2),
(277, '2024_06_25_075942_create_categories_table', 2),
(278, '2024_06_25_113033_create_category_guest_houses_table', 2),
(279, '2024_06_30_033643_create_conversations_table', 2),
(280, '2024_06_30_033651_create_messages_table', 2),
(281, '2024_07_04_132545_create_user_normals_table', 2),
(282, '2024_07_05_114357_create_rooms_table', 2),
(283, '2024_07_05_164045_create_bed_types_table', 2),
(284, '2024_07_05_164159_create_type_of_rooms_table', 2),
(285, '2024_07_06_040210_create_booking_user_rooms_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Post access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(2, 'Post edit', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(3, 'Post create', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(4, 'Post delete', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(5, 'Role access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(6, 'Role edit', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(7, 'Role create', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(8, 'Role delete', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(9, 'User access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(10, 'User edit', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(11, 'User create', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(12, 'User delete', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(13, 'Permission access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(14, 'Permission edit', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(15, 'Permission create', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(16, 'Permission delete', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(17, 'Create_brance access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(18, 'Create_brance edit', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(19, 'Create_brance create', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(20, 'Create_brance delete', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(21, 'Dashboard_admin access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(22, 'Dashboard_admin edit', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(23, 'Dashboard_admin create', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(24, 'Dashboard_admin delete', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(25, 'Mail access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(26, 'Mail edit', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(27, 'Chat access', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(28, 'Chat admin', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(29, 'Chat user', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `publish` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `publish`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Aut unde dolor nostrum dolor quia. Et deleniti quaerat ipsum officia corporis animi. Aut sed et dignissimos vel.', 'Suscipit quod nulla laborum doloribus. Nesciunt debitis quam sit aut. Ab ipsa autem qui voluptas doloremque optio. Rerum voluptatem ut maiores doloribus.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 2),
(2, 'Libero ut praesentium non minus. Et ea minus labore sed. Repudiandae quibusdam illo quos sed. Ipsam sit autem quo necessitatibus sapiente expedita.', 'Praesentium rerum qui molestiae commodi ad. Nihil tempore vel illum voluptates. Laboriosam voluptatem molestiae omnis autem.', 1, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(3, 'Nesciunt tenetur suscipit porro recusandae voluptatem. Rerum asperiores illum dignissimos quos magni.', 'Itaque ab id repellat ullam exercitationem. Quaerat eaque et hic. Et natus commodi dolor illo nesciunt nulla corporis omnis.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 2),
(4, 'Quasi itaque possimus in sint rerum. Ipsa quod error voluptatem accusantium ut. Qui eaque molestiae provident distinctio neque voluptatum. Excepturi consequatur totam quae dignissimos aut ut.', 'Eaque voluptatem quis velit. Omnis velit aspernatur vel fugiat ipsa quidem voluptas. Tempore nihil sint quae atque impedit optio. Dicta tenetur rem qui.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(5, 'Adipisci omnis earum ab repellendus fugiat aut assumenda sunt. Accusantium nostrum sed ea ut minus aut. Illum voluptates rerum quaerat exercitationem.', 'Qui nulla natus autem minima eaque iste vero. Ullam blanditiis incidunt voluptatibus ut perspiciatis doloribus. Sint dolor suscipit dolorem ad ipsum quia.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 3),
(6, 'Itaque aperiam consequuntur dolorem voluptas ut deleniti. Dolorem quo et repudiandae et ea. Non eaque ipsum qui sint et aspernatur laborum.', 'Ad dolorem et quo voluptatum laborum eos excepturi. Quis soluta mollitia id aliquam. Qui qui rem facere natus. Dignissimos vitae sit culpa est.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(7, 'Cumque et est blanditiis occaecati velit illum. Quidem velit natus nostrum qui sint et.', 'Ea dolores harum facere et sunt reiciendis nesciunt. Nesciunt rerum molestias nobis unde dicta nihil est. Fugiat quis nulla aut tenetur.', 1, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 2),
(8, 'Voluptatem excepturi ex hic ut optio quae. Optio sunt accusantium mollitia unde qui. Et et nesciunt aliquam hic aut provident sed. Sit fugiat facere sint qui autem.', 'Non hic natus beatae magni. Voluptatem et quod alias quo et quo blanditiis. Fuga accusamus aliquid quibusdam. Ut nemo tempore doloribus qui aut.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 3),
(9, 'Facere suscipit asperiores minus ratione sunt qui nesciunt. Ipsam repellat suscipit aspernatur asperiores autem similique. Eveniet tenetur quia laudantium ut.', 'Ut quia ipsum id voluptates. Sint officia facere et aliquid incidunt. Optio non veniam nisi accusamus voluptatum eos officiis.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(10, 'In sapiente eveniet quia vero doloremque tempore. Est consequatur incidunt est dolore praesentium quas. Earum non laborum dolorem ab. Iste et occaecati quia nisi ut non.', 'Et laudantium asperiores qui atque nulla enim. Reprehenderit quisquam excepturi aspernatur ipsum deleniti beatae cupiditate voluptatem. Vero qui et commodi et iure eum. Aut necessitatibus autem quam sint.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 2),
(11, 'Minus impedit enim distinctio numquam beatae aspernatur natus. Ut molestiae totam veritatis. Ea sapiente ad excepturi qui voluptatem. Ea saepe et quia sint iusto quibusdam.', 'Unde id molestiae ad. Aperiam omnis dolore aut laborum dolorum. Est doloremque sint consequatur error porro. Dicta numquam blanditiis aut.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 2),
(12, 'Numquam impedit qui quo consectetur dignissimos. Quaerat adipisci iusto rerum ab corporis a labore. Consectetur aspernatur quibusdam ipsam omnis qui.', 'Est accusantium qui consequuntur atque. Qui inventore dicta rerum ut debitis quos consequuntur facilis. Quos magnam molestiae non aliquid ut ea. Neque reprehenderit et deleniti repellendus aut.', 1, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 2),
(13, 'Et qui velit doloremque in autem qui quam. Delectus dolorem neque odit. Cumque consequatur aut explicabo non facere sapiente non. Fugit molestias sapiente ipsum ducimus vel asperiores ratione.', 'Et laborum omnis mollitia est. Voluptas vero libero porro perspiciatis earum non nihil. Et rerum sit aliquid rerum porro.', 1, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(14, 'Aut earum ea sed dolorem voluptatibus ad est perferendis. Architecto mollitia est ut harum suscipit. Et nulla odit rem blanditiis excepturi quam ducimus velit. Repudiandae ut quasi sed eum.', 'Voluptas numquam aut quaerat totam nobis sapiente. Est omnis et facilis quos delectus voluptatem voluptas. Saepe vero maiores doloribus dolor eos.', 1, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(15, 'Ea beatae dignissimos velit. Repellendus assumenda harum modi a ex eius. Nobis nulla fugit nisi voluptatem ut hic voluptate reiciendis. Modi magni eius sapiente et aut ipsum qui ea.', 'Totam aut vero sint placeat alias voluptas maiores. Excepturi quisquam sunt sed ullam dolorem aut. Vel nisi doloribus vel omnis aperiam qui. Quas nulla deserunt culpa.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(16, 'Sed nihil inventore dignissimos rem quam. Modi ex hic ex debitis error placeat. Tenetur dolorem vitae voluptatibus dolorem tempore facilis.', 'In laborum voluptatem doloremque. Voluptatem eaque earum atque rerum. Cupiditate consequatur sit ut expedita.', 1, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 1),
(17, 'Non labore exercitationem ea et accusantium optio. Iusto sit quisquam ipsum culpa suscipit libero. Reprehenderit consequuntur inventore et corrupti explicabo a quia.', 'Et quia ut esse. Dolor in quibusdam hic quisquam maxime est voluptates. Error aliquam quis itaque pariatur maxime.', 0, '2024-07-08 05:21:49', '2024-07-08 05:21:49', 3);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(2, 'user', 'web', '2024-07-08 05:21:48', '2024-07-08 05:21:48');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `capacity` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `check_in` int(11) NOT NULL DEFAULT 0,
  `bed_type` int(11) DEFAULT NULL,
  `type_of_room` int(11) DEFAULT NULL,
  `number_of_rooms` int(11) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `guest_house_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type_of_rooms`
--

CREATE TABLE `type_of_rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `type_of_rooms`
--

INSERT INTO `type_of_rooms` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Air conditioned', '2024-07-08 05:21:49', '2024-07-08 05:21:49'),
(2, 'Fan', '2024-07-08 05:21:49', '2024-07-08 05:21:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `profile`, `email_verified_at`, `password`, `phoneNumber`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', 'user.avif', NULL, '$2y$10$ZLyiRBf0eOb3uoPkqSo1fepcUfzeTpJdtNbSTEaszCKxfYRDmy/1G', NULL, NULL, '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(2, 'User', 'user@gmail.com', NULL, NULL, '$2y$10$fsRmmTV3Pu6chiBEw1OZHeRmf6y5OT/OlY985FOgKxNAI.TI4DhR6', NULL, NULL, '2024-07-08 05:21:48', '2024-07-08 05:21:48'),
(3, 'Dany', 'dany@gmail.com', NULL, NULL, '$2y$10$5AsTuU5pld8fXagKNZWeKeHNZ/YBG6TW/KZlAIG6RTvzjuuQhGUYy', NULL, NULL, '2024-07-08 05:21:48', '2024-07-08 05:21:48');

-- --------------------------------------------------------

--
-- Table structure for table `user_normals`
--

CREATE TABLE `user_normals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bed_types`
--
ALTER TABLE `bed_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking_user_rooms`
--
ALTER TABLE `booking_user_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_guest_houses`
--
ALTER TABLE `category_guest_houses`
  ADD KEY `guesthouse_id_fk_667152` (`guesthouse_id`),
  ADD KEY `category_id_fk_667152` (`category_id`);

--
-- Indexes for table `checking_room`
--
ALTER TABLE `checking_room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conversations_sender_id_foreign` (`sender_id`),
  ADD KEY `conversations_receiver_id_foreign` (`receiver_id`);

--
-- Indexes for table `dashboard_room`
--
ALTER TABLE `dashboard_room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `day_guest_houses`
--
ALTER TABLE `day_guest_houses`
  ADD KEY `day_guest_houses_day_id_foreign` (`day_id`),
  ADD KEY `day_guest_houses_guesthouse_id_foreign` (`guesthouse_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `frontusers`
--
ALTER TABLE `frontusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `frontusers_email_unique` (`email`);

--
-- Indexes for table `guest_houses`
--
ALTER TABLE `guest_houses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mailsettings`
--
ALTER TABLE `mailsettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `media_model_type_model_id_index` (`model_type`,`model_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_conversation_id_foreign` (`conversation_id`),
  ADD KEY `messages_sender_id_foreign` (`sender_id`),
  ADD KEY `messages_receiver_id_foreign` (`receiver_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `type_of_rooms`
--
ALTER TABLE `type_of_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_normals`
--
ALTER TABLE `user_normals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_normals_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bed_types`
--
ALTER TABLE `bed_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `booking_user_rooms`
--
ALTER TABLE `booking_user_rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `checking_room`
--
ALTER TABLE `checking_room`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `conversations`
--
ALTER TABLE `conversations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `dashboard_room`
--
ALTER TABLE `dashboard_room`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `frontusers`
--
ALTER TABLE `frontusers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `guest_houses`
--
ALTER TABLE `guest_houses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mailsettings`
--
ALTER TABLE `mailsettings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=286;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type_of_rooms`
--
ALTER TABLE `type_of_rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_normals`
--
ALTER TABLE `user_normals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category_guest_houses`
--
ALTER TABLE `category_guest_houses`
  ADD CONSTRAINT `category_id_fk_667152` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `guesthouse_id_fk_667152` FOREIGN KEY (`guesthouse_id`) REFERENCES `guest_houses` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `conversations`
--
ALTER TABLE `conversations`
  ADD CONSTRAINT `conversations_receiver_id_foreign` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `conversations_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `day_guest_houses`
--
ALTER TABLE `day_guest_houses`
  ADD CONSTRAINT `day_guest_houses_day_id_foreign` FOREIGN KEY (`day_id`) REFERENCES `days` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `day_guest_houses_guesthouse_id_foreign` FOREIGN KEY (`guesthouse_id`) REFERENCES `guest_houses` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_conversation_id_foreign` FOREIGN KEY (`conversation_id`) REFERENCES `conversations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_receiver_id_foreign` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `messages_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
