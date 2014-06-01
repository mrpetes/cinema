-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 28-04-2014 a las 13:35:27
-- Versión del servidor: 5.6.12-log
-- Versión de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `thecinemaconspiracy`
--
CREATE DATABASE IF NOT EXISTS `thecinemaconspiracy` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `thecinemaconspiracy`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `name_categorie` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`name_categorie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`name_categorie`) VALUES
('accion'),
('animacion'),
('aventuras'),
('comedia'),
('documental'),
('historico'),
('infantil'),
('musical'),
('romance'),
('sagas'),
('terror'),
('thriller');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `movie_id` int(11) NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(200) NOT NULL,
  `movie_year` int(10) DEFAULT NULL,
  `actors` varchar(200) NOT NULL,
  `director` varchar(200) NOT NULL,
  `sinopsis` varchar(2000) NOT NULL,
  `movie_category` varchar(100) NOT NULL,
  `imagen` longblob,
  `score` decimal(3,2) DEFAULT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`movie_id`, `movie_name`, `movie_year`, `actors`, `director`, `sinopsis`, `movie_category`, `imagen`, `score`) VALUES
(32, 'Dracula', 1992, 'Gary Oldman, Winona Ryder, Anthony Hopkins, Keanu Reeves, Richard E. Grant, Cary Elwes, Sadie Frost, Tom Waits, Bill Campbell, Monica Bellucci, Jay Robinson', 'Francis Ford Coppola', 'En el año 1890, el joven abogado Jonathan Harker viaja a un castillo perdido de Transilvania, donde conoce al conde Drácula, que en 1462 perdió a su amor Elisabeta. El Conde, fascinado por una fotografía de Mina Murray, la novia de Harker, que le recuerda a su Elisabeta, viaja hasta Londres cruzando océanos de tiempo para conocerla. Ya en Inglaterra, intentará conquistar y seducir a Lucy, la mejor amiga de Mina. ', 'terror', NULL, NULL),
(33, 'Jungla de cristal', 1988, 'Bruce Willis, Bonnie Bedelia, Alan Rickman, Alexander Godunov, Reginald Veljohnson, Paul Gleason, William Atherton, Hart Bochner, Robert Davi, Grand L. Bush, Wilhelm von Homburg', 'John McTiernan', 'En lo alto de la ciudad de Los Ángeles un grupo armado terrorista se ha apoderado de un edificio tomando a un grupo de personas como rehenes. Sólo un hombre, el policía de Nueva York John McClane (Bruce Willis), ha conseguido escapar del acoso terrorista. McClane está solo y fuera de servicio, pero mantendrá una lucha feroz y agotadora contra los secuestradores. Él es la única esperanza para los rehenes.', 'accion', NULL, NULL),
(34, 'El Padrino', 1972, 'Marlo Brando , Al Pacino ', 'Francis Ford Coppola', 'Años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: una chica, Connie (Talia Shire), y tres varones: el impulsivo Sonny (James Caan), el pusilánime Freddie (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, siempre aconsejado por su consejero Tom Hagen (Robert Duvall), se niega a intervenir en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.', 'accion', NULL, NULL),
(35, 'Ocho Apellidos Vascos', 2013, 'Dani Rovira, Clara Lago, Carmen Machi, Karra Elejalde, Alfonso Sánchez, Alberto López, Aitor Mazo, Lander Otaola', 'Emilio Martínez-Lázaro', 'Rafa (Dani Rovira) es un joven señorito andaluz que no ha tenido que salir jamás de su Sevilla natal para conseguir lo único que le importa en la vida: el fino, la gomina, el Betis y las mujeres. Todo cambia cuando conoce a la primera mujer que se resiste a sus encantos: es Amaia (Clara Lago), una chica vasca. Decidido a conquistarla, se traslada a un pueblo de las Vascongadas, donde se hace pasar por vasco para vencer su resistencia. Adopta el nombre de Antxon y varios apellidos vascos: Arguiñano, Igartiburu, Erentxun, Gabilondo, Urdangarín, Otegi, Zubizarreta e incluso Clemente.', 'comedia', NULL, NULL),
(36, 'La Lista de Schindler', 1993, 'Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall, Jonathan Sagall, Embeth Davidtz, Norbert Weisser, Martin S. Bergmann, Mark Ivanir, Malgorzata Gebel, Shmuel Levy, Michael Schneider, Joachim', 'Steven Spielberg', 'Segunda Guerra Mundial (1939-1945). Oskar Schindler (Liam Neeson), un hombre de enorme astucia y talento para las relaciones públicas, organiza un ambicioso plan para ganarse la simpatía de los nazis. Después de la invasión de Polonia por los alemanes (1939), consigue, gracias a sus relaciones con los nazis, la propiedad de una fábrica de Cracovia. Allí emplea a cientos de operarios judíos, cuya explotación le hace prosperar rápidamente. Su gerente (Ben Kingsley), también judío, es el verdadero director en la sombra, pues Schindler carece completamente de conocimientos para dirigir una empresa.', 'historico', NULL, NULL),
(37, 'Pulp Fiction', 1994, 'John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Eric Stoltz, Tim Roth, Maria de Medeiros, Amanda Plummer, Ving Rhames, Rosanna Arquette, Christopher Walken, Quentin Taranti', 'Quentin Tarantino', 'Jules y Vincent son dos asesinos a sueldo con muy pocas luces que trabajan para Marsellus Wallace. Antes de realizar un trabajo, Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe, pero llega la hora de trabajar y ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.', 'thriller', NULL, NULL),
(38, 'Ciudad de Dios', 2002, 'Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva, Seu Jorge, Jonathan Haagensen, Matheus Nachtergaele, Jefechander Suplino, Alice Braga, Emerson Gomes, Luis Otávio, Babu Santana', 'Fernando Meirelles, Kátia Lund', 'Basada en hechos reales, este es relato del incremento del crimen organizado en Cidade de Deus, un suburbio de Río de Janeiro, desde finales de los años sesenta hasta el comienzo de los ochenta, cuando el tráfico de drogas y la violencia impusieron su ley en las favelas. Todo comienza a finales de los sesenta, cuando Buscapé tiene 11 años y es sólo un niño más en Cidade de Deus. Tímido y delicado, observa a los niños duros de su barrio, sus robos, sus peleas, sus enfrentamientos diarios con la policía. Ya sabe lo que quiere ser si consigue sobrevivir: fotógrafo. Dadinho, un niño de su misma edad, se traslada al barrio. Sueña con ser el criminal más peligroso de Río de Janeiro y empieza su aprendizaje haciendo recados para los delincuentes locales. Admira a Cabeleira y su pandilla, que se dedica a atracar los camiones del gas y hacen otros pequeños robos armados. Un día Cabeleira da a Dadinho la oportunidad de cometer su primer asesinato...', 'drama', NULL, NULL),
(39, 'Bowling For Columbine', 2002, 'Documentary', 'Michael Moore', 'Famoso documental que aborda la cuestión de la violencia en América. ¿Por qué 11.000 personas mueren cada año en Estados Unidos víctimas de las armas de fuego? Los bustos parlantes vociferan desde la pantalla de TV echándole la culpa ya a Satán ya a los videojuegos. Pero, ¿en qué se diferencia Estados Unidos de otros países? ¿Por qué Estados Unidos se ha convertido en responsable y víctima de tanta violencia? Bowling for Columbine no es una película sobre el control de la venta de armas, es una película sobre el miedo de 280 millones de norteamericanos que se sienten más seguros sabiendo que la tenencia de armas es un derecho consagrado por la Constitución. En este incisivo y tragicómico estudio de la violencia y su relación con las armas de fuego aparecen personalidades como Charlon Heston, George W. Bush o Marilyn Manson. Ganó numerosos premios en USA al mejor documental -entre los que destacan los prestigiosos National Board Of Review y el Chicago Film Critics Awards-, así como el premio a la mejor película extranjera -compitiendo con largometrajes- en los César de la Academia Francesa de Cine.', 'documental', NULL, NULL),
(40, 'Los Miserables', 2012, 'Hugh Jackman, Russell Crowe, Anne Hathaway, Amanda Seyfried, Eddie Redmayne, Samantha Barks, Helena Bonham Carter, Sacha Baron Cohen, Aaron Tveit, Isabelle Allen, Daniel Huttlestone, Colm Wilkinson, N', 'Tom Hooper', 'El expresidiario Jean Valjean (Hugh Jackman) es perseguido durante décadas por el despiadado policía Javert (Russell Crowe). Cuando Valjean decide hacerse cargo de Cosette, la pequeña hija de Fantine (Anne Hathaway), sus vidas cambiarán para siempre. Adaptación cinematográfica del famoso musical ''Les miserables'', basado a su vez en la novela homónima de Victor Hugo.', 'musical', NULL, NULL),
(41, 'Resacon en las Vegas', 2009, 'Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha, Heather Graham, Sasha Barrese, Jeffrey Tambor, Ken Jeong, Rachael Harris, Mike Tyson, Mike Epps, Jernard Burks, Rob Riggle, Cleo King, Bryan', 'Todd Phillips', 'Historia de una desmadrada despedida de soltero en la que el novio y tres amigos se montan una gran juerga en Las Vegas. Como era de esperar, a la mañana siguiente tienen una resaca tan monumental que no pueden recordar nada de lo ocurrido la noche anterior. Lo más extraordinario es que el novio ha desaparecido y en la suite del hotel se encuentran un tigre y un bebé.', 'comedia', NULL, NULL),
(42, 'Batman Begins', 2005, 'Christian Bale, Liam Neeson, Katie Holmes, Cillian Murphy, Michael Caine, Morgan Freeman, Gary Oldman, Ken Watanabe, Tom Wilkinson, Rutger Hauer, Mark Boone Junior, Gus Lewis, Linus Roache, Colin McFa', 'Christopher Nolan', 'Nueva adaptación del famoso cómic. Narra los orígenes de la leyenda de Batman y los motivos que lo convirtieron en el representante del Bien en la ciudad de Gotham. Bruce Wayne vive obsesionado con el recuerdo de sus padres, muertos a tiros en su presencia. Atormentado por el dolor, se va de Gotham y recorre el mundo hasta que encuentra a un extraño personaje que lo adiestra en todas las disciplinas físicas y mentales que le servirán para combatir el Mal. Por esta razón, la Liga de las Sombras, una poderosa y subversiva sociedad secreta, dirigida por el enigmático Ra''s Al Ghul, intenta reclutarlo. Cuando Bruce vuelve a Gotham, la ciudad está dominada por el crimen y la corrupción. Con la ayuda de su leal mayordomo Alfred, del detective de la policía Jim Gordon y de Lucius Fox, su aliado en la sociedad Ciencias Aplicadas de Wayne Enterprises, Wayne libera a su imponente alter ego: Batman, un justiciero enmascarado que utiliza la fuerza, la inteligencia y un despliegue de artefactos de alta tecnología para luchar contra las siniestras fuerzas que amenazan con destruir la ciudad. ', 'sagas', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_info`
--

CREATE TABLE IF NOT EXISTS `user_info` (
  `mail` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `surname` varchar(100) DEFAULT NULL,
  `phone` varchar(9) DEFAULT NULL,
  `mobilephone` varchar(9) DEFAULT NULL,
  `user_categories` varchar(100) DEFAULT NULL,
  `confirmation_code` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`mail`),
  KEY `user_categories` (`user_categories`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user_info`
--

INSERT INTO `user_info` (`mail`, `password`, `name`, `surname`, `phone`, `mobilephone`, `user_categories`, `confirmation_code`) VALUES
('', '', '', NULL, NULL, NULL, NULL, NULL),
('analucia@gmail.com', 'comermierda12121', 'analucia', NULL, NULL, NULL, NULL, NULL),
('antonio', 'perico', 'meneame', NULL, NULL, NULL, NULL, NULL),
('aqaqa', 'aqaqaq', 'aqaq', NULL, NULL, NULL, NULL, NULL),
('aqaqafwegwegwre', 'dfvsdfvdsa', 'dweref', NULL, NULL, NULL, NULL, NULL),
('awdfawfegvs', 'dsvsdvd', 'wadrqwdf', NULL, NULL, NULL, NULL, NULL),
('bfbd', ' vf', 'sdbfads', NULL, NULL, NULL, NULL, NULL),
('dbdfbf', 'xbdfbdfbds', 'gbrnb', NULL, NULL, NULL, NULL, NULL),
('dfhf', 'fdf', 'ththd', NULL, NULL, NULL, NULL, NULL),
('dvsdbsbds', 'dbsdbsdsv', 'cdcdv', NULL, NULL, NULL, NULL, NULL),
('efwef', 'egwe', 'dedegfe', NULL, NULL, NULL, NULL, NULL),
('f`pmfpmf`pm', 'f`pmf`pmfep', 'd`pw`pkd', NULL, NULL, NULL, NULL, NULL),
('mierda', 'pomncs', 'aopasoaspj', NULL, NULL, NULL, NULL, NULL),
('paco', 'rabo', 'pedro', NULL, NULL, NULL, NULL, NULL),
('pedroror@gmail.com', 'aojoojoojo', 'pedrorodpojspos', NULL, NULL, NULL, NULL, NULL),
('pedrorupster242@gmail.com', 'dpdpojdspojgf1234', 'pedropojdpojso', NULL, NULL, NULL, NULL, NULL),
('pedrorupster@gmail.com', 'mrpotato', 'mrpetes', NULL, NULL, NULL, NULL, NULL),
('pruebaformulario@gmail.com', 'prueba123456', 'pruebaformulario', NULL, NULL, NULL, NULL, NULL),
('viernesnoche', 'puesosqe', 'prueba ', NULL, NULL, NULL, NULL, NULL),
('wer', 'vgnb', 'aq', NULL, NULL, NULL, NULL, NULL),
('wetwe', 'egwew', 'frrf', NULL, NULL, NULL, NULL, NULL),
('WEWQ', 'WR', 'DW', NULL, NULL, NULL, NULL, NULL),
('zzzz', 'aaaa', 'qqqq', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_movies`
--

CREATE TABLE IF NOT EXISTS `user_movies` (
  `user_mail` varchar(100) NOT NULL,
  `user_movies` int(11) NOT NULL,
  KEY `user_mail` (`user_mail`),
  KEY `user_movies` (`user_movies`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_movie_categories`
--

CREATE TABLE IF NOT EXISTS `user_movie_categories` (
  `mail_user_data` varchar(100) NOT NULL,
  `user_categories` varchar(100) NOT NULL,
  KEY `mail_user_data` (`mail_user_data`),
  KEY `user_categories` (`user_categories`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user_info`
--
ALTER TABLE `user_info`
  ADD CONSTRAINT `user_info_ibfk_1` FOREIGN KEY (`user_categories`) REFERENCES `categories` (`name_categorie`);

--
-- Filtros para la tabla `user_movies`
--
ALTER TABLE `user_movies`
  ADD CONSTRAINT `user_movies_ibfk_1` FOREIGN KEY (`user_mail`) REFERENCES `user_info` (`mail`),
  ADD CONSTRAINT `user_movies_ibfk_2` FOREIGN KEY (`user_movies`) REFERENCES `movies` (`movie_id`);

--
-- Filtros para la tabla `user_movie_categories`
--
ALTER TABLE `user_movie_categories`
  ADD CONSTRAINT `user_movie_categories_ibfk_1` FOREIGN KEY (`mail_user_data`) REFERENCES `user_info` (`mail`),
  ADD CONSTRAINT `user_movie_categories_ibfk_2` FOREIGN KEY (`user_categories`) REFERENCES `categories` (`name_categorie`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
