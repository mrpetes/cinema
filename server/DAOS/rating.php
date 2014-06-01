<?php
require_once("../UTILS/conection.php");

$con = get_conection();
$score = $_POST['value'];
$movieid = $_POST['movieid'];

echo 'la puntuacion recibida es de:'.$score.'y el id de la pelicula es :'.$movieid;

$query =("UPDATE movies set score = $score WHERE movie_id='$movieid';");
$resultado = mysqli_query($con,$query);
if($resultado){
	echo 'la puntuacion enviada es de :'.$score;
}else{
	echo 'ha habido un error a la hora de votar la pelicula , intentalo de nuevo mas tarde';
}

$query2= "INSERT INTO total_score values($score,$movieid)";
$result2=mysqli_query($con,$query2);


?>