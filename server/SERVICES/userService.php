<?php
    require_once("../UTILS/createJson.php");
	require_once("../LIBS/toro.php");
	require_once("../MANAGERS/userManager.php");
	require_once("../ROUTERS/toroUser.php");
	
        
	class add_user {

		function post() {

			$result = insert_manager_user($_POST['name'], $_POST['mail'], $_POST['password']);
         
	        if($result){
	            echo  $return = createJson("200","Has sido registrado","true");
	        }else{
	            echo  $return = createJson("400","Error al registrarse","false");
	        }		
		}
	}

	class login_user {

		function post(){

		$result = log_user_manager($_POST['name'],$_POST['password']);
			
		if($result){
			echo $return = createJson("200","has sido logueado correctamente","true");
		}else{
			echo $return = createJson("400","Error en tus credenciales  revisalas de nuevo","false");
		}
	}
}

	  class log_out {

		function post() {
		    $result = logout_manager_user();
                    if($result){
                        echo  $return = createJson("200","Se ha cerrado session","true");
                    }else{
                        echo $return = createJson("400","No hay ninguna sesion iniciada","false");
                    }
                    
		}
	}

	class me {
		function post() {
		    $result = manager_me();
                    if($result){
                    	$user=$_SESSION['user'];
                        echo  $return = createJson("200","Sesion activa",$user);
                    }else{
                        echo $return = createJson("400","No hay ninguna sesion iniciada","false");
                    }
                    
		}

	}

	class check_messages {
		function post() {
		    $result = checkMessages_manager();
                    if($result){
                    	$user=$_SESSION['user'];
                        echo  $return = createJson("200","mensajes pendientes ",$result);
                    }else{
                        echo $return = createJson("400","no hay mensajes pendientes","false");
                    }
                    
		}

	}
	
?>
