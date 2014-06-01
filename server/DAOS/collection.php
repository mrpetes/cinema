<?php

session_start();

$con = get_conection();
$movieid = $_POST['movieid'];

echo ' el id de la pelicula es :'.$movieid;

$query =("UPDATE movies set score = $score WHERE movie_id='$movieid';");
$resultado = mysqli_query($con,$query);
if($resultado){
	echo 'la puntuacion enviada es de :'.$score;
}else{
	echo 'ha habido un error a la hora de votar la pelicula , intentalo de nuevo mas tarde';
}




?>