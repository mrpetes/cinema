<?php

		session_start();

		require_once("../UTILS/conection.php");
		require_once("../CLASSES/movie.php");

//INSERCION DE NUEVAS PELICULAS//

		function insert_new_movie($movie_name,$actors,$movie_year,$director,$sinopsis,$movie_category,$imagen){

			$conn = get_conection();

			$query = "INSERT INTO movies (movie_name,actors,movie_year,director,sinopsis,movie_category,imagen) VALUES ('$movie_name','$actors','$movie_year','$director','$sinopsis','$movie_category','$imagen');";

			$insert = mysqli_query($conn,$query);

		if(!$insert){
			return false;
		}else{
			return true;
		}
		
	};

	function get_all_movies() {

		$con = get_conection();
		$sql = "SELECT * from movies ";
		$result = mysqli_query($con,$sql);

        if(!$result){
        	die ("error" . mysqli_error($con));
        }
        
        if(!mysqli_num_rows($result)){
            return false;
        }else{

			$peliculas =array(); 
            while($row = mysqli_fetch_assoc($result)){
			
			       $peliculas[] = $row;
			       
			};

    	}	
    
    	return $peliculas;

	};

	function get_full_movies($movie_id){
		
		$con = get_conection();

		$sql = "SELECT * FROM movies where movie_id = '$movie_id'";
		$result = mysqli_query($con,$sql);
			if(!$result){
				die("error". mysqli_error($con));
			}
			if(!mysqli_num_rows($result)){
				return false;
			}else{
				$pelicula = array();
				while($row = mysqli_fetch_assoc($result)){

					$pelicula[] = $row;
				}
			}

			return $pelicula;

			
		};

		function add_collection_final($movie_id){

			$con =get_conection();
			$mail=$_SESSION['user']['mail'];

			$sql="INSERT INTO user_movies (user_mail,user_movies) VALUES ('".$mail."',".$movie_id.")";
			
			$result = mysqli_query($con,$sql);
				if(!$result){
					die("error".mysqli_error($con));
					return false;

				}else{
					return true;
				}
			



		};

		function get_favourites(){
			
			$con = get_conection();
			$mail=$_SESSION['user']['mail'];
			$sql= "SELECT * FROM movies m,user_movies u  WHERE m.movie_id=u.user_movies AND u.user_mail = '".$mail."';	";
			$result=mysqli_query($con,$sql);
			if(!$result){
				die("error".mysql_error($con));

			}
			if(!mysqli_num_rows($result)){
				return false;
			}else{
				$pelicula=array();
				while($row = mysqli_fetch_array($result)){

					$pelicula[]=$row;

				}
			}
				return $pelicula;



		}

		function compartir_final($movie_id){

			$con = get_conection();
			$sql = "SELECT * FROM movies";
			$result = mysqli_query($con,$sql);
			if(!$result){
				die("error".mysql_error($con));

			}
			if(!mysqli_num_rows($result)){
				return false;
			}else{
				$pelicula=array();
				while($row = mysqli_fetch_array($result)){

					$pelicula[]=$row;

				}
			}
				return $pelicula;


		}

		function user_search_final($name,$movie_id,$movie_name){

			$con =get_conection();
			$sql = "SELECT * FROM user_info where name ='$name'";
			$result=mysqli_query($con,$sql);
			if(!$result){
				die("error".mysqli_error($con));

			}
			if(!mysqli_num_rows($result)){
				return false;
			}else{
					
					while($row = mysqli_fetch_array($result)){
							$mail=$row['mail'];
					}
					$sql="INSERT INTO pending_messages (user_mail,user_movies) VALUES ('".$mail."',".$movie_id.")";
					$res=mysqli_query($con,$sql);
					return $result;

				}
			}
				


		
	
	
		

?>