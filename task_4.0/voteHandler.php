<?php 
	if (isset($_POST['radiobutton']))
	{
		echo '<p>Был выбран независимый переключатель со следующим значением: ';
		if ($_POST['pikachu']==="pikachu") echo "<b>pikachu</b>";
		if ($_POST['bulbasaur']==="no") echo "<b>bulbasaur</b>";
		echo '</p>';
	}
?>