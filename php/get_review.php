<?php
	$url = '../xml/otziv.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);
	$massive = array();
	$i=0;
	foreach ($xml as $otziv) {
		$massive[$i] = $otziv;
		$i++;
	}

	echo json_encode($massive);
?>