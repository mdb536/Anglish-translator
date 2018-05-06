function validateForm(){
	const button = document.querySelector("#submitForm");
	const form = document.querySelector("#translator");
	if(form !== null){
		form.addEventListener('submit', function(event){
			console.log(document.querySelector("#englishForm").value.length);
			if(document.querySelector("#englishForm").value.length > 250){
				event.preventDefault();
				const parent = document.querySelector("#index");
				const message = document.createElement("p");
				message.querySelector("#warning");
				message.style.color = "red";
				message.innerHTML = "Exceeds 250 character limit ✗";
				message.addEventListener('click', function(event){
					message.innerHTML = "";
				});
				parent.appendChild(message);
				return false;
			}
		});
	}
}

function main(){
	validateForm();
}
document.addEventListener('DOMContentLoaded', main);
