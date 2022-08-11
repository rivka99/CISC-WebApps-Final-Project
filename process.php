<?php
$n = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$country = $_POST['country'];

//write query/create connection/ and executing the query
//takes host_name, user_name, Password, DB name
$con = mysqli_connect("localhost", "root", "root", "test_db");
$sql = "INSERT INTO user_info (n,age,gender,country) VALUES ('$n','$age','$gender','$country')";

$res = mysqli_query($con, $sql);
if($res){
    header( 'Location: http://localhost/Home.html' );
}else{
    echo "error saving contact, please return to previous page and try something else!";
}

//echo "the name is ".$name." and age is ".$age." and they are ".$gender." and they live in ".$country ;
?>