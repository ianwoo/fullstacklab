<?php

require_once('logger.php');

logger('testing!!');

$cars = array("volvo"=>"good", "bmw"=>"great", "toyota"=>"good enough");

foreach($cars as $x => $x_value) {
	echo "Key=" . $x . ", Value=" . $x_value;
	echo "<br>";
}

logger($cars);

$length = count($cars);
logger("cars length is $length");

echo 'working';