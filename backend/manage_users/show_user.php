<?php

require_once('../common/connection.php');

$user = new UserConnect($admin, $pass);

$sql = "select user from mysql.user";

//SELECT USER FROM mysql.user

$result = $user->conn->query($sql);

if ($result){
	$output = $result->fetchAll();
	logger($output);
	echo json_encode($output);
} else {
	logger($user->conn->error);
}