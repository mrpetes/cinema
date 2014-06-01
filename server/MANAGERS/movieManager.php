<?php
	require_once("../DAOS/movieDAO.php");


	function insert_manager_movie($movie_name,$actors,$movie_year,$director,$sinopsis,$movie_category){

		$con = get_conection();

		$query = "SELECT * FROM movies where movie_name = '$movie_name'";

		$exist = mysqli_query($con,$query);

		    if(!$exist){
                    die ("error" . mysqli_error($con)); //si la consulta no arroja resultados , dara error
                }         
		if(mysqli_num_rows($exist)){ 
                    return false;
                }else{
                   
                    $insert = insert_new_movie($movie_name,$actors,$movie_year,$director,$sinopsis,$movie_category);

                    if(!$insert){
                            return false;
                    }else{
                            return true;
                    }
                }
	};

    function get_all_movies_manager(){
        

          
       
            return get_all_movies();

        
        
    };

    function get_full_movie_manager($movie_id){
        $result =  get_full_movies($movie_id);
        if(!$result){
            return false;
        }else{
            return $result;
        }
    };

    function add_collection_manager($movie_id){
        $result = add_collection_final($movie_id);
        if(!$result){
            return false;
        }else{
            return true;
        }
       
    };

    function get_favourites_manager(){
        $result = get_favourites();
        if(!$result){
            return false;
        }else{
            return $result;
        }
    };

    function compartir_manager($movie_id){
        $result = compartir_final();
        if(!$result){
            return false;
        }else{
            return $result;
        }
    };

    function user_search_manager($name,$movie_id,$movie_name){
        $result = user_search_final($name,$movie_id,$movie_name);
        if(!$result){
            return false;
        }else{
            return true;
        }
    };

















    ?>