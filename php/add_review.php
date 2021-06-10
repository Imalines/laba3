<?php
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];

	$sXML = simplexml_load_file('../xml/otziv.xml');
	$newchild = $sXML->addChild("otziv");
	$newchild->addChild("name", $name);
	$newchild->addChild("email", $email);
	$newchild->addChild("text", $text);
	file_put_contents('../xml/otziv.xml', $sXML->asXML());

?>