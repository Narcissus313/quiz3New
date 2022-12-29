let desc = document.querySelector(".desc");
let items = document.querySelectorAll("p");
let h1 = document.createElement("h1");
h1.innerText = items[0].innerText;
let explain = document.createElement("span");
explain.innerText = "London is in England";
desc.appendChild(h1);
desc.appendChild(explain);
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", function () {
		h1.innerText = items[i].innerText;
		explain.innerText = items[i].innerText + " is in ";
		switch (items[i].innerText) {
			case "London":
				explain.innerText += " England";
				break;
			case "Tehran":
				explain.innerText += " Iran";
				break;
			case "Tokyo":
				explain.innerText += " Japan";
				break;
			default:
				desc.appendChild(h1);
				desc.appendChild(explain);
		}
	});
}
