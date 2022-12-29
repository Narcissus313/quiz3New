let input = document.querySelector('input');
input.addEventListener("keyup", function (event) {
    let str = input.value;
	let res = str.replace("-", "_").replace(".", "_");
	input.value = res;
	console.log(event.key);
});
