function calculate()
{	
	var failhtml = document.querySelector(".fail b");
	var succhtml = document.querySelector(".success b");
	var chancehtml = document.querySelector("#chance");
	var attemptshtml = document.querySelector("#attempts");
	var imghtml = document.querySelector("img");
	var chance = chancehtml.value;
	var attempts = attemptshtml.value;
	
	failhtml.textContent = calcFail(chance, attempts).toString() + "%";
	succhtml.textContent = (100 - calcFail(chance, attempts)).toString() + "%";
    imghtml.style.webkitAnimation = 'none';
    setTimeout(function() {
        imghtml.style.webkitAnimation = '';
    }, 10);
}

function calcFail(chance, attempts)
{
	return (Math.pow((1 - (chance / 100)), attempts)*100).toFixed(2);
}