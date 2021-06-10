$(document).ready(function(){
	loadotziv();
	$(".btn__submit").click(
		function(){
				var name = document.getElementById('name').value;

				var email = document.getElementById('email').value;

				var text = document.getElementById('text').value;

				sendForm(name, email, text);
			return false; 
		});
});

function sendForm(name, email, text){
	$.post("php/add_otziv.php", {name: name, email: email, text: text} ,  successAdd);
}

function successAdd(data){
	alert('Обзор добавлен!');
	document.otziv__form.reset();
	commentClear();
	loadotziv();
}
function commentClear(){
    document.getElementById('place__for__otziv').innerHTML = '';
}
function loadotziv(){
	$.ajax ({
				url: "php/get_otziv.php",
				type: "POST",
				data: ({}),
				dataType: "html",
				success: successLoadotziv
			});
}

function successLoadotziv(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let otziv = 
			`<div class="otziv__place">
				<div class="otziv__block">
					<div class="otziv__person__name">
						${data[i].name}
					</div>
					<div class="otziv__person__email">
						${data[i].email}
					</div>
					<div class="otziv__person__text">
						${data[i].text}
					</div>
				</div>
			</div>`;
			document.getElementById("place__for__otziv").insertAdjacentHTML('afterbegin', otziv);
		}}