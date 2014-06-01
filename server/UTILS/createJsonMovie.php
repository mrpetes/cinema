<?php
    function createJsonMovie($status, $msg, $result) {
           $data = array(
               'status' => $status,
               'msg' => $msg,
               'result' => $result
           );
           
           return json_encode($data);
    }
?>