<?php
require_once('../common/connection.php');

$user = new UserConnect($admin, $pass);

$user_name = $_GET['$user_name'];

logger($user_name);

$sql = "DROP USER $user_name";

//MySQL string should be "DROP USER $user_name";

$result = $user->conn->query($sql);

if ($result) {
	logger('dropped user');
	echo "dropped user $user_name";
} else {
	logger($user->conn->error);
}
