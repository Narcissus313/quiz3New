let input = document.querySelector("input");
let ul = document.querySelector("ul");
input.addEventListener("keyup", function () {
	let str = input.value;
	for (let i = 0; i < ul.children.length; i++) {
			if (ul.children[i].firstChild.data.startsWith(str)) {
				ul.children[i].style.display = "block";
			} else {
				ul.children[i].style.display = "none";
			}
	}
});
