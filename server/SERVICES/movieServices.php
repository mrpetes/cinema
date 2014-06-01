<?php

	require_once("../UTILS/createJson.php");
	require_once("../LIBS/toro.php");
	require_once("../MANAGERS/movieManager.php");
	require_once("../ROUTERS/toroMovie.php");

	class add_movie {

		function post() {
			$result = insert_manager_movie($_POST['movie_name'],$_POST['actors'],$_POST['movie_year'],$_POST['director'],$_POST['sinopsis'],$_POST['movie_category'],$_POST['imagen']);
			
         
	        if($result){

	            echo  $return = createJson("200","pelicula insertada correctamente","true");

	        }else{
	        	
	            echo  $return = createJson("400","Ha habido un error al insertar la pelicula","false");
	        }		
		}
	}

	class get_all_movies {

		function post(){

			$result = get_all_movies_manager();


			if($result){
				echo $return = createJson("200","peliculas recuperadas satisfactoriamente",$result);
				
			}else{
				echo $return = createJson("400","error al recuperar las peliculas","false");
				 
			}
		}
	}

	class get_full_movie{

		function post(){
			$result = get_full_movie_manager($_POST['movie_id']);

			if($result){

				echo $return = createJson("200","informacion adicional de pelicula mostrada correctamente",$result);
			}else{

				echo $return = createJson("400","la recuperacion de datos de la pelicula ha fallado","false");
			}
		}
	}

	class add_collection{

		function post(){
			$result = add_collection_manager($_POST['movie_id']);

			//$result =add_collection_manager($_POST['movie_id']);
			
			if($result){
				echo $return = createJson("200","pelicula añadida a tu coleccion",$result);
			}else{
				echo $return = createJson("400","error al agregar la pelicula","false");
			}
		}
	}

	class get_favorites{

		function post(){

			$result = get_favourites_manager();
			if($result){

			echo $return = createJson("200","peliculas favoritas recuperadas",$result);
		}else{
			echo $return = createJson("400","error al recuperar las favoritas","false");
		}
			
		}
	}

	class compartir{
		function post(){

			$result = compartir_manager($_POST['movie_id']);

			if($result){
				echo $return = createJson("200","pelicula compartida con el usuario",$result);
			}else{
				echo $return = createJson("400","error al compartir la pelicula","false");
			}
		}
	
	}

	class user_search{
		function post(){

			$result = user_search_manager($_POST['name'],$_POST['movie_id'],$_POST['movie_name']);

			if($result){
				echo $return = createJson("200","usuario existe",$result);

			}else{
				echo $return = createJson("400","usuario no existe","false");
			}

		}

	}




	

	
?>

