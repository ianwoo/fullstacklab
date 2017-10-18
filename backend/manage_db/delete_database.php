<?php
require_once('../common/connection.php');

$db = new DbConnect($admin, $pass);

$db_name = $_GET['db_name'];

$sql = "DROP DATABASE $db_name";

$result = $db->conn->query($sql);

if ($result) {
	logger('dropped database');
	echo "dropped database $db_name";
} else {
	logger($db->conn->error);
}
