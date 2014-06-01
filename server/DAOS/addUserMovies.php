<?php
require_once("../UTILS/conection.php");

$con = get_conection();
$movieid = $_POST['movieid'];
$usermail =$_POST['usermail'];



$query =("INSERT INTO user_movies ('user_mail','user_movies') VALUES ();");
$resultado = mysqli_query($con,$query);
if($resultado){
	echo 'la pelicula del usuario'.$usermail.' ha sido insertada correctamente'
}else{
	echo 'ha habido un error a la hora de insertar  la pelicula para el usuario concreto , intentalo de nuevo mas tarde';
}




?>