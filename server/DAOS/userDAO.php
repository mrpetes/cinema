<?php
        session_start();
        
		require_once("../UTILS/conection.php");
		require_once("../CLASSES/user.php");
	
	//REGISTRO//
	function insert_new_user($name, $mail, $password){


	
		$conn = get_conection(); //Conexion
		
		$query = "INSERT INTO user_info (name, mail, password) 
			VALUES ('$name','$mail','$password');"; 
		
		$insert = mysqli_query($conn, $query);
		
		if(!$insert){
			return false;
		}else{
			return true;
		}
		
	};
	function login_new_user($name, $password){
	
		$conn = get_conection(); //Conexion
		
		$query = "SELECT * FROM user_info WHERE name = '$name' AND password = '$password';"; 
		$exist = mysqli_query($conn, $query);
                
                if(!$exist){
                    die ("error" . mysqli_error($conn));
                }         
		if(!mysqli_num_rows($exist)){
                    return false;
                }else{   
                    while($row = mysqli_fetch_array($exist)){
                        $user = array(
                            "name" => $row['name'],
                            "mail"=>$row['mail']
                         );
                    }
                    $_SESSION['user'] = $user; //creamos la sesion de usuario si la consulta a la base de datos es exitosa.
                    return true;
                }
	};


	  function logout_user(){
		if(!$_SESSION){
			return false;
		}else{
            $_SESSION = null;
            session_destroy();
			return true;
		}
		
	};

	function me(){
		if(empty($_SESSION['user'])){
            return false;
        }else{
        	return true;
        }
	}

	function checkMessages_final(){

		$con = get_conection();
		$usuario = $_SESSION['user']['mail'];
		$sql = "SELECT * FROM pending_messages WHERE user_mail = '$usuario'";
		$result = mysqli_query($con,$sql);
		          if(!$result){
                    die ("error" . mysqli_error($con));
                }         
		if(!mysqli_num_rows($result)){
                    return false;
                }else{   

                	$message=array();
                    while($row = mysqli_fetch_array($result)){
                        $message[]=$row;
                    }
                   
                    
                }
                return  $message;
	};

	
        
 
?>