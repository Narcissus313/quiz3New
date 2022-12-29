let mainDiv = document.querySelector('.main');
percentText = mainDiv.lastChild.data;
percentText =  '10%';
let progressPercent = document.querySelector(".pro").offsetWidth;
console.log('progressPercent: ', progressPercent);
document.querySelector('.btn').addEventListener('click', function () {
    progressPercent = +progressPercent;
    progressPercent += 80;
    progressPercent += 'px';
    document.querySelector('.pro').style.width = progressPercent;
    percentText = percentText.split("%");
    console.log('percentText: ', percentText);
    mainDiv.lastChild.data = '20%';
})