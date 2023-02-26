-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2023 a las 19:14:34
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_rest_node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(25) NOT NULL,
  `image` varchar(255) DEFAULT 'https://cdn-icons-png.flaticon.com/512/219/219986.png',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `name`, `correo`, `telefono`, `image`, `created_at`, `updated_at`) VALUES
(3, 'Juan Perez', '', '', 'https://cdn-icons-png.flaticon.com/512/219/219986.png', '2023-02-18 21:32:07', '2023-02-18 21:44:14'),
(4, 'Laura Beltre', '', '', 'https://cdn-icons-png.flaticon.com/512/219/219986.png', '2023-02-18 21:32:07', '2023-02-18 21:32:07'),
(5, 'prueba', 'prueba@gmail.com', '8096715201', 'https://cdn-icons-png.flaticon.com/512/219/219986.png', '2023-02-19 01:14:45', '2023-02-19 01:14:45'),
(12, 'test', 'test@gmail.com', '8096715201', 'https://www.odilmartinez.com/img/python.png', '2023-02-19 01:57:03', '2023-02-19 01:57:03'),
(13, 'oneplus 7 pro', 'odilmartinez@gmail.com', '8096715201', 'https://cdn.dxomark.com/wp-content/uploads/medias/post-29313/OnePlus-7-pro_Main-Camera-1200%C3%979001-1024x768.jpg', '2023-02-19 02:01:20', '2023-02-19 02:01:20'),
(15, 'oneplus 7 pro', 'odilmartinez@gmail.com', '8096715201', 'https://cdn.dxomark.com/wp-content/uploads/medias/post-29313/OnePlus-7-pro_Main-Camera-1200%C3%979001-1024x768.jpg', '2023-02-19 02:01:25', '2023-02-19 02:01:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(20,0) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `games`
--

INSERT INTO `games` (`id`, `nombre`, `precio`, `descripcion`) VALUES
(1, 'Naruto SUNS3', '20', 'Aventura y accion'),
(2, 'DBZ Tag Team', '10', 'Aventura y Accion'),
(4, 'MLB 23', '43', 'Deportes y BASEBALL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenguajes`
--

CREATE TABLE `lenguajes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `level` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lenguajes`
--

INSERT INTO `lenguajes` (`id`, `name`, `descripcion`, `level`) VALUES
(1, 'Python', 'IA, ODOO, DJANGO, TK/INTER, KYVY, FLET', 4),
(2, 'Javascript', 'NODE, REACT, VUE', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `cliente` int(11) NOT NULL,
  `encargado` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estado` enum('pendiente','en proceso','entregado') NOT NULL DEFAULT 'pendiente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id`, `name`, `image`, `description`, `cliente`, `encargado`, `created_at`, `updated_at`, `estado`) VALUES
(3, 'App movil', 'https://www.sistemaimpulsa.com/blog/wp-content/uploads/2022/09/tendencias-Ecommerce-2023.jpg', 'Flutter app', 4, 1, '2023-02-18 21:33:51', '2023-02-25 22:45:57', 'entregado'),
(4, 'Ecommerce', 'https://www.sistemaimpulsa.com/blog/wp-content/uploads/2022/09/tendencias-Ecommerce-2023.jpg', 'Ecommerce, Vue js, Mysql, Node Js, React Js, Flutter', 3, 1, '2023-02-18 21:33:51', '2023-02-25 22:45:57', 'entregado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`) VALUES
(1, 'Administrador', '2023-02-11 20:54:54'),
(2, 'Usuario', '2023-02-11 20:54:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 2,
  `image` varchar(255) NOT NULL DEFAULT 'https://img.icons8.com/color/512/collaborator-male--v1.png',
  `telefono` varchar(25) NOT NULL,
  `github` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `image`, `telefono`, `github`, `created_at`, `updated_at`) VALUES
(1, 'Odil Martinez', 'odildmartinezcuello@gmail.com', '$2b$10$H0O.MpiHl7VO2ZCYqdtBneBJFie2qAYnU3yf1VvEl189FyYVBSsDO', 1, 'https://img.icons8.com/color/512/collaborator-male--v1.png', '8096715201', 'https://github.com/OdilDev10', '2023-02-11 21:00:42', '2023-02-19 03:18:08'),
(2, 'Odil Martinez', 'odildmartinezcuello1@gmail.com', '$2b$10$bwv7H0K27o9QjRCJsBtfueyhWvIVUXm83wocx1SKwC1JnnYZ6B3HK', 2, 'https://img.icons8.com/color/512/collaborator-male--v1.png', '', '', '2023-02-11 22:40:12', '2023-02-12 04:03:34'),
(3, 'Odil', 'odil@gmail.com', '$2b$10$3/LD.SRqpdaLdRwGDWEdlubPwnIAQA0l0o.Ty7pEhk9v5/1L7pAUa', 2, 'https://img.icons8.com/color/512/collaborator-male--v1.png', '', '', '2023-02-11 23:06:30', '2023-02-11 23:06:30'),
(4, 'Odil', 'odil1@gmail.com', '$2b$10$QxL6ImG/R3PlcpVesR3MsOz9zpf9114NhN2.VDl3uWgt4Zcpokr2u', 2, 'https://img.icons8.com/color/512/collaborator-male--v1.png', '', '', '2023-02-11 23:44:01', '2023-02-11 23:44:01'),
(5, 'odil', 'odildmartinezcuello12@gmail.com', '$2b$10$SaXRKGSun0FxLwB00Z2I3.4ITRUbPDji.PbGZtmRSL62LcCtA0IEO', 2, 'https://img.icons8.com/color/512/collaborator-male--v1.png', '', '', '2023-02-14 01:43:31', '2023-02-14 01:43:31'),
(6, 'odil', 'odildmartinezcuello1212@gmail.com', '$2b$10$aPkPisTgxrD9f.0lybJNpOCyDBBbWSZN65eNRiTVJcW.vwLas5FFW', 2, 'https://img.icons8.com/color/512/collaborator-male--v1.png', '', '', '2023-02-25 20:57:06', '2023-02-25 20:57:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `relacion_users` (`encargado`),
  ADD KEY `relacion_clientes_proyectos` (`cliente`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `relacion_roles` (`role`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `lenguajes`
--
ALTER TABLE `lenguajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `relacion_clientes_proyectos` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relacion_users` FOREIGN KEY (`encargado`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `relacion_roles` FOREIGN KEY (`role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
