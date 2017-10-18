<?php
require_once('../common/connection.php');

sleep('2');

$db = new DbConnect($admin, $pass);

$db_name = $_GET['db_name'];

$sql = "CREATE DATABASE $db_name";

$result = $db->conn->query($sql);

if ($result) {
	logger('created database');
} else {
	logger($db->conn->error);
}
