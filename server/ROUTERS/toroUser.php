<?php
ToroHook::add("404", function() {
    header('HTTP/1.0 404 Not Found');
    echo "Error";
});

Toro::serve(array(
    "/signup" => "add_user",
    "/login" => "login_user",
    "/logout" => "log_out",
    "/me"=> "me",
    "/checkMessages"=>"check_messages"
));
?>

