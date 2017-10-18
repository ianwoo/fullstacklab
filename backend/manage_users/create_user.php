<?php
require_once('../common/connection.php');

sleep('1');

$user = new UserConnect($admin, $pass);

$user_name = $_GET['user_name'];

$sql = "CREATE USER $user_name";

$result = $user->conn->query($sql);

if ($result) {
	logger('created user');
} else {
	logger($user->conn->error);
}
