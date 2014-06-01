<?php
require_once("../UTILS/conection.php");
require_once("../UTILS/createJsonMovie.php");

$con = get_conection();
$query = "SELECT *FROM movies";
$resultado = mysqli_query($con,$query);

$peliculas =array(); 
while ($row = $resultado->fetch_assoc()) {
      	
       $peliculas[] = $row;
       
       //echo 'TITULO DE LA PELICULA'.$nombre.'AÑO DE LA PELICULA  ';
       //echo $anopeli.'<br>';
       //printf ("TITULO DE LA PELICULA : %s AÑO DE LA PELICULA : (%s) PROTAGONIZADA POR : %s %s \n", $row['movie_name'], $row['movie_year'],$row['actors'],$salto);
       
       
};
		
echo json_encode($peliculas);


	
?>