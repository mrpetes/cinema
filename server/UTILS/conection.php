<?php
	require 'config.php';
        
	function get_conection() {
		$con = mysqli_connect(server,user,password,bbddcinema);
		if (!$con)
			die('<br>Error en la conexion: ' . mysql_error() . "<br>");
		return($con);
	}
?>