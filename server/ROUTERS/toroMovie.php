<?php

ToroHook::add("404", function() {
    header('HTTP/1.0 404 Not Found');
    echo "Error";
});

Toro::serve(array(
    "/addmovie" => "add_movie",
    "/getAllMovies" => "get_all_movies",
    "/getFullMovie" =>"get_full_movie",
    "/addCollection"=>"add_collection",
    "/getFavorites"=>"get_favorites",
    "/compartir" =>"compartir",
    "/userSearch"=>"user_search"
));

?>