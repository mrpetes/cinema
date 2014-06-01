
<?php

	class movie_class {

	  private $movie_id;
    private $movie_name;
    private $movie_year;
    private $actors;
    private $director;
    private $movie_category;
    private $imagen;
    private $score;


    function movie_class(){

    	$movie_id = "";
    	$movie_name = "";
    	$movie_year = "";
    	$actors = "";
    	$director = "";
    	$movie_category = "";
    	$imagen = "";
    	$score = "";

   	 }

   	 function movie_class_1($movie_id,$movie_name,$movie_year,$actors,$director,$movie_category,$imagen,$score){

   	 	$this->movie_id = $movie_id;
   	 	$this->movie_name = $movie_name;
   	 	$this->movie_year = $movie_year;
   	 	$this->actors = $actors;
   	 	$this->director = $director;
   	 	$this->movie_category = $movie_category;
   	 	$this->imagen = $imagen;
   	 	$this->score = $score;

   	 }

   	 function setMovie_id($movie_id){

   	 	$this->movie_id = $movie_id;
   	 }

   	 function setMovie_name($movie_name){

   	 	$this->movie_name = $movie_name;
   	 }

   	 function setMovie_year($movie_year){

   	 	$this->movie_year = $movie_year;
   	 }

   	 function setActors($actors){

   	 	$this->actors = $actors;
   	 }

   	 function setDirector($director){

   	 	$this->director = $director;
   	 }

   	 function setMovie_category($movie_category){

   	 	$this->movie_category = $movie_category;
   	 }

   	 function setImagen($imagen){

   	 	$this->imagen = $imagen;
   	 }

   	 function setScore($score){

   	 	$this->score = $score;
   	 }

//FUNCIONES GETTER//

   	 function getMovie_id(){

   	 	return $this->movie_id;
   	 }

   	 function getMovie_name(){

   	 	return $this->movie_name;

   	 }

   	 function getMovie_year(){

   	 	return $this->movie_year;
   	 }

   	 function getActors(){

   	 	return $this->actors;
   	 }

   	 function getDirector(){

   	 	return $this->director;
   	 }

   	 function getMovie_category(){

   	 	return $this->movie_category;
   	 }

   	 function getImagen(){

   	 	return $this->imagen;
   	 }

   	 function getScore(){

   	 	return $this->score;

   	 }


}



?>
