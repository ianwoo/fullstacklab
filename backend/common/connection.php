<?php

require('logger.php');
require_once('credentials.php');
logger('loaded connection script');

class DbConnect
{
	public $conn;
	public function __construct($admin, $pass)
	{
		try {
			$this->conn = new PDO("mysql:host=127.0.0.1", $admin, $pass);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE,
				PDO::ERRMODE_EXCEPTION);
			logger("Connected successfully");
			return $this->conn;
		} catch (PDOException $e) {
			logger("Connection failed: " . $e->getMessage());
		}
	}
	public function kill()
	{
		$this->conn = null;
	}
}

class UserConnect
{
	public $conn;
	public function __construct($admin, $pass)
	{
		try {
			$this->conn = new PDO("mysql:host=127.0.0.1", $admin, $pass);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE,
				PDO::ERRMODE_EXCEPTION);
			logger("Connected successfully");
			return $this->conn;
		} catch (PDOException $e) {
			logger("Connection failed: " . $e->getMessage());
		}
	}
	public function kill()
	{
		$this->conn = null;
	}
}