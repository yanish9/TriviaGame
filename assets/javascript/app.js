
var time = 30;
startTimer();


var question;

var answer;
var q1, q2, q3, q4, q5, q6, q7, q8 ,q9 , q10;
var arr = [];

var wins = 0;
var losses = 0;

var count = 0;

var opts = [];

function set (question, opts, answer) {
	this.question = question;
	this.opts = shuffle(opts);
	this.answer = answer;
}

function setUpGame (argument) {

	q1 = new set("The fastest animal on the planet:", ["Lion", "Zebra", "cheetah", "Leopard"], "cheetah");
	arr.push(q1);

	q2 = new set("Name our galaxy :", ["Lion", "Marshmallow", "Ice Cream", "Milky Way"], "Milky Way");
	arr.push(q2);

	q3 = new set("Which Spanish Island is known as 'The Island of Eternal Spring'?", ["Tenerife", "Tenirifi", "Tenerifa", "Tanarife"], "Tenerife");
	arr.push(q3);

	/*q2 = new set("Name our galaxy :", "Lion", "Marshmallow", "Ice Cream", "Milky Way", "Milky Way");
	arr.push(q2);
*/
	

arr = shuffle(arr);

nextQuestion();

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function check () {

	if ($(this).text() == arr[count].answer) {

		winner();
	}

	else
	{
		loser();

	}


}


function loser (argument) {
	
	$(".container").html("<h1>Wrong</h1> <div>The answer was <b>"+arr[count].answer+"</b></div>");
	setWinLoseTimer();
	losses++;

}

function winner (argument) {

	var div = $("<img>Correct</img>");
	div.attr("src","https://thumbs.dreamstime.com/z/grunge-office-stamp-correct-3089029.jpg");
	$(".container").html(div);

	setWinLoseTimer();

	wins++;
}


function setWinLoseTimer (argument) {

setTimeout(function (argument) {

		nextQuestion(count++);

		resetTimer();

	}, 2000);

}

function nextQuestion (argument) {

	if (count >= arr.length) {

		$(".container").html("<h2>Correct Answers: </h2>" + wins + "<h2>Wrong Answers: </h2>" + losses);
		$(".container").append("<br><button class= 'restart'>Restart</button>");
		$(".restart").on('click', restart);
	}

	else{

startTimer();
		console.log("next");
		$(".container").html('<div class="row question">'+arr[count].question+'</div>');
		$(".container").append('<div class=" row answers opt1">'+arr[count].opts[0]+'</div>');
		$(".container").append('<div class=" row answers opt2">'+arr[count].opts[1]+'</div>');
		$(".container").append('<div class=" row answers opt3">'+arr[count].opts[2]+'</div>');
		$(".container").append('<div class=" row answers opt4">'+arr[count].opts[3]+'</div>');
		$(".answers").on("click", check);

	}

}


function restart () {
	count =0;
	nextQuestion();

}

function resetTimer (argument) {
	time = 30;
}

function startTimer (argument) {

	var timer = setInterval(function () {

		$("#time").html(time--);
		

		if (time == 0) {
			clearInterval(timer);
			loser();
		}
	}, 1000)
	// body... 
}


setUpGame();
