var texts = ["Привет Элина", "в последнее время я вижу, что наше общение стало скдудным", "это очень печально", "особенно, если учитывать то, что ты мне нравишься","все это вопрос времени, встреч и интереса", "но знаешь, у каждого человека, есть своя страсть, грызущая ему сердце", "так вот, тук-тук, ну это - а я могу стать вашей страстью?)👉👈", "шучу, к сожалению, это не так работает", "я надеюсь, ты справишься с тем, о чем не говоришь", 
"а еще я читал в одной книжке, что улыбка лучший способ поселиться в сердце человека", "и пока я пишу этот текст, я улыбаюсь)", "но и ты должна, поэтому, когда я скажу слово пармезан, улыбнись!!!", "пармезан" , "спасибо, это очень мило)" ,  "О действительно важном, люди обычно молчат", "не серчай в одиночестве, ибо если ты к нему привыкнешь, вернуться назад будет очень сложно(","как по мне люди не встречаются случайно, но даже если это так, то это случайность мне нравится", "я рад тому, что мы встетрились", "хоть и мало виделись...", "не грусти", "до скорых встреч" ]; // массив с текстами
var index = 0; // индекс текущего текста

function startAnimation() {
  var buttonArray = document.getElementById("buttonArray");
  buttonArray.setAttribute("disabled", "disabled"); // добавляем атрибут disabled
  document.getElementById("buttonStart").style.display = "none";
  buttonArray.style.display = "block";
  document.getElementById("content").style.display = "block";

  var text = texts[index];
  var i = 0;
  var intervalId = setInterval(function() {
    content.innerHTML += text.charAt(i);
    i++;
    if (i > text.length - 1) {
      clearInterval(intervalId);
      content.style.display = "block";
      buttonArray.removeAttribute("disabled"); // удаляем атрибут disabled
      if (index === texts.length - 1) { // если это последний элемент в массиве, то показываем кнопки
        buttonArray.style.display = "none";
        document.getElementById("button1").style.display = "block";
        document.getElementById("button2").style.display = "block";
      }
    }
    if (index === 1) { // если индекс равен 0 (т.е. 1 элемент массива), включаем музыку
      var audio = document.getElementById("audio");
      audio.currentTime = 0	; // устанавливаем начальную позицию воспроизведения в секундах
      audio.play(); // запускаем воспроизведение музыки
    }
  }, 46);
}

function nextText() {
	index++; // увеличиваем индекс для вывода следующего текста
	if (index >= texts.length) { // если индекс стал больше или равен длине массива, то обнуляем его
		index = 0;
	}
	content.innerHTML = ""; // очищаем контент перед выводом нового текста
	startAnimation(); // запускаем анимацию для следующего текста
}


// При нажатии кнопки "button1"
document.getElementById("button1").addEventListener("click", function() {
	// Скрыть текст и показать изображение
	document.getElementById("content").style.display = "none";
	document.getElementById("image1").style.display = "block";
	document.getElementById("button2").style.display = "none";
	document.getElementById("button1").style.display = "none";

	// Создать маленькие сердечки
	for (var i = 0; i < 20; i++) {
		var heart = document.createElement("img");
		heart.src = "img/heart.png";
		heart.classList.add("heart");
		document.body.appendChild(heart);
	}

	// Анимировать маленькие сердечки
	var hearts = document.querySelectorAll(".heart");
	hearts.forEach(function(heart) {
		// Установить начальную позицию маленького сердца
		heart.style.left = Math.random() * window.innerWidth + "px";
		heart.style.top = window.innerHeight + "px";

		// Анимировать маленькое сердце
		var animationDuration = Math.random() * 2 + 1; // случайное время анимации
		var animationDelay = Math.random() * 2; // случайная задержка перед началом анимации
		heart.style.animationDuration = animationDuration + "s";
		heart.style.animationDelay = animationDelay + "s";
		heart.style.animationName = "heart";
	});

	// Удалить маленькие сердечки после окончания анимации
	setTimeout(function() {
		hearts.forEach(function(heart) {
			heart.remove();
		});
	}, 7000);
});

 
 // При нажатии кнопки "button2"
document.getElementById("button2").addEventListener("click", function() {
	// Скрыть текст и показать изображение
	document.getElementById("content").style.display = "none";
	document.getElementById("image2").style.display = "block";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "none";

	// Создать маленькие сердечки
	for (var i = 0; i < 20; i++) {
		var heart = document.createElement("img");
		heart.src = "img/brokenheart.png";
		heart.classList.add("heart");
		document.body.appendChild(heart);
	}

	// Анимировать маленькие сердечки
	var hearts = document.querySelectorAll(".heart");
	hearts.forEach(function(heart) {
		// Установить начальную позицию маленького сердца
		heart.style.left = Math.random() * window.innerWidth + "px";
		heart.style.top = window.innerHeight + "px";

		// Анимировать маленькое сердце
		var animationDuration = Math.random() * 2 + 1; // случайное время анимации
		var animationDelay = Math.random() * 2; // случайная задержка перед началом анимации
		heart.style.animationDuration = animationDuration + "s";
		heart.style.animationDelay = animationDelay + "s";
		heart.style.animationName = "heart";
	});

	// Удалить маленькие сердечки после окончания анимации
	setTimeout(function() {
		hearts.forEach(function(heart) {
			heart.remove();
		});
	}, 7000);
});

 document.getElementById("image1").style.display = "none";
document.getElementById("image2").style.display = "none";
