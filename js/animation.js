// Нажатие на кнопку zero two
$( ".zero_two_btn").click(window.zero_two_active = function() {
  $( ".slider__controller").css({ "opacity": "1" }); //включаем slider
  $( ".prev").css({ "opacity": "0.5" }); //делаем кнопку назад малой прозрачности
  $( ".next").css({ "opacity": "1" }); //делаем кнопку вперед нормальной прозрачности
  $( ".card").animate({ "opacity": "1" }); //включаем card
  $( ".card2").animate({ "opacity": "0" }); //выключаем card2
  $( ".card3").animate({ "opacity": "0" }); //выключаем card3
  $( ".card4").animate({ "opacity": "0" }); //выключаем card4
  $( ".name__author").text("zero two"); //меняет имя персонажа
  $( ".name__anime").text("Darling in the Franxx"); //меняем название аниме
  $("#watch_anime").attr("href", "https://shikimori.one/animes/35849-darling-in-the-franxx") //меняет ссылку
});



// Нажатие на кнопку незуко камаде
  $( ".nezuko_kamade_btn").click(window.nezuko_kamade_active = function() {
  $( ".slider__controller").css({ "opacity": "1" }); //включаем slider
  $( ".prev").css({ "opacity": "1" }); //делаем кнопку назад нормальной прозрачности
  $( ".next").css({ "opacity": "1" }); //делаем кнопку вперед нормальной прозрачности
  $( ".card").animate({ "opacity": "0" }); //выключаем card
  $( ".card2").animate({ "opacity": "1" }); //выключаем card2
  $( ".card3").animate({ "opacity": "0" }); //включаем card3
  $( ".card4").animate({ "opacity": "0" }); //выключаем card4
  $( ".name__author").text("незуко камаде"); //меняет имя персонажа
  $( ".name__anime").text("Клинок рассекающий демона"); //меняем название аниме
  $("#watch_anime").attr("href", "https://shikimori.one/animes/z38000-kimetsu-no-yaiba") //меняем ссылку
});


// Нажатие на кнопку Химико тога
$( ".himiko_toga_btn").click(window.himiko_toga_active = function() {
  $( ".slider__controller").css({ "opacity": "1" }); //включаем slider
  $( ".prev").css({ "opacity": "1" }); //делаем кнопку назад нормальной прозрачности
  $( ".next").css({ "opacity": "1" }); //делаем кнопку вперед нормальной прозрачности
  $( ".card").animate({ "opacity": "0" }); //выключаем card
  $( ".card2").animate({ "opacity": "0" }); //выключаем card2
  $( ".card3").animate({ "opacity": "1" }); //включаем card3
  $( ".card4").animate({ "opacity": "0" }); //выключаем card4
  $( ".name__author").text("Химико Тога"); //меняет имя персонажа
  $( ".name__anime").text("Моя геройская академия"); //меняем название аниме
  $("#watch_anime").attr("href", "https://shikimori.one/animes/31964-boku-no-hero-academia") //меняем ссылку
});

// Нажатие на кнопку Шинобу Кочо
$( ".shinobu_kocho_btn").click(window.shinobu_kocho_active = function() {
	$( ".slider__controller").css({ "opacity": "1" }); //включаем slider
	$( ".prev").css({ "opacity": "1" }); //делаем кнопку назад нормальной прозрачности
	$( ".next").css({ "opacity": "0.5" }); //делаем кнопку вперед малой прозрачности
	$( ".card").animate({ "opacity": "0" }); //выключаем card
	$( ".card2").animate({ "opacity": "0" }); //выключаем card2
	$( ".card3").animate({ "opacity": "0" }); //выключаем card3
	$( ".card4").animate({ "opacity": "1" }); //включаем card4
	$( ".name__author").text("Шинобу Кочо"); //меняет имя персонажа
	$( ".name__anime").text("Клинок рассекающий демона"); //меняем название аниме
	$("#watch_anime").attr("href", "https://shikimori.one/animes/z38000-kimetsu-no-yaiba") //меняем ссылку
});



// Слайдер
$( ".next").click(function(){
	if ('1' === $(".card").css('opacity')) {
		nezuko_kamade_active();
	}
	if ('1' === $(".card2").css('opacity')) {
		himiko_toga_active();
	}
	if ('1' === $(".card3").css('opacity')) {
		shinobu_kocho_active();
	}
});

$( ".prev").click(function(){
	if ('1' === $(".card4").css('opacity')) {
		himiko_toga_active();
	}
	if ('1' === $(".card3").css('opacity')) {
		nezuko_kamade_active();
	}
	if ('1' === $(".card2").css('opacity')) {
		zero_two_active();
	}
});