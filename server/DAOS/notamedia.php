<?php
require_once("../UTILS/conection.php");

$con = get_conection();
$movieid = $_POST['movieid']
$notamedia=null;

$query("SELECT AVG(totalscore) from total_score where id_movies=$movieid group by id_movies ");
$result=mysqli_query($con,$query);
while($row=mysql_fetch_array($result)){
	$notamedia=$row;
};

return $notamedia;