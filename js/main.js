$(document).ready(function(){
	loadContent();
	$('#load__more__persons').click(
		function (){
			var countOfDog = document.getElementById('main__items').getElementsByClassName('dog_cart_main').length;
			$.post("php/get_more_dog.php", {kol: 6, tek: countOfDog}, successMorePersons);
		});
});

function loadContent(){
	$.post("php/get_content.php",{}, successLoad);
}

function successLoad(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let dog = 
			`	<div class="dog_cart_main">
					<div class="dog__cart">
							<div class="image__box">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="dog__cart__name">
								${data[i].name}
							</div>

							<div class="dog__cart__text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', dog);
		}}

function successMorePersons(data){
	data = JSON.parse(data);
	console.log(data);
	for(var i in data)
		{
			let dog = 
			`	<div class="dog_cart_main">
					<div class="dog__cart">
							<div class="image__box">
								<img src="${data[i].img}" alt="${data[i].name}">
							</div>

							<div class="dog__cart__name">
								${data[i].name}
							</div>

							<div class="dog__cart__text">
								<p>
									${data[i].text_p1}
								</p>

								<p>
									${data[i].text_p2}
								</p>
							</div>
						</div>
					</div>
				</div>`;
			document.getElementById("main__items").insertAdjacentHTML('beforeend', dog);
}}