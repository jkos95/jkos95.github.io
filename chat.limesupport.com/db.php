<?php

$host = "chat.limesupport.com";
$user = "chat_test_admin";
$pass = "Ch@tTest!";
$db_name = "chat_test";

$con = new mysqli($host,$user,$pass,$db_name);

function formatDate($date){
    return date('g:i a', strtotime($date));
}


?>