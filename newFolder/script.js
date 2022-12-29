document.querySelector('.light-btn').addEventListener('click', function () {
    let mainDiv = document.querySelector(".main");
    let title = document.querySelector("h1");
    title.firstChild.data = 'Light Mode';
    mainDiv.style.backgroundColor = '#f4fefe';
    mainDiv.style.color = "black";
});
document.querySelector('.dark-btn').addEventListener('click', function () {
    let mainDiv = document.querySelector(".main");
    let title = document.querySelector("h1");
	title.firstChild.data = "Dark Mode";
    mainDiv.style.backgroundColor = '#555555';
    mainDiv.style.color = 'white';
});