<?php   
    
    
        
	require_once("../DAOS/userDAO.php");
	
	function insert_manager_user($name, $mail, $password){
                $conn = get_conection();
            
                $query = "SELECT * FROM user_info WHERE name = '$name'"; 
		$exist = mysqli_query($conn, $query);
                
                if(!$exist){
                    die ("error" . mysqli_error($conn));
                }         
		if(mysqli_num_rows($exist)){
                    return false;
                }else{
                    $insert = insert_new_user($name, $mail, $password);

                    if(!$insert){
                            return false;
                    }else{
                            return true;
                    }
                }
	};

    function log_user_manager($name, $password){

            if(!empty($_SESSION['user'])){
                return false;
            }else{
                $exist = login_new_user($name, $password);
                if(!$exist){
                    return false;
                }else{
                    $user = $_SESSION['user'];
                    return $_SESSION['user'];
                    //return true;
                }
            }
        };

     function logout_manager_user(){
            
            $exist = logout_user();
            
            if(!$exist){
                return false;
            }else{
                return true;
            }
            
        };

        function manager_me(){
        $result=me();
        if(!$result){
            return false;
        }else{
            return true;
        }

    }


        function checkMessages_manager(){

            $result =checkMessages_final();
            if(!$result){
                return false;
            }else{
                return $result;
            }
        }
    
?>