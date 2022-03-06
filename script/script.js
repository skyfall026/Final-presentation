const music1 = new Audio('audio/swimmer.mp3');
const easter = new Audio('audio/easterEgg.mp3');

$('#welcomen').hide();
$('#welcomen').slideToggle(2500);



let x = 1;
$(document).mouseover(function () {
    if (x == 1) {
          music1Toggle();

        if (music1.paused == false) {
            x = 0;
        }
    }
});

$('#musicButton1').click(function () {
    music1Toggle();
});

$('#assortiment').slideToggle();
$('.mayble').slideToggle();

$(document).keypress(function (e) {
    if (e.key === 'm') {
        music1Toggle();
    }
});

$('.music-box').click(function () {
    music1Toggle();
});


function music1Toggle() {
    if (music1.paused == true) {
        music1.play();
    } else {
        music1.pause();
    }
};


$('#themes').click(function () {
    $('#themes').toggleClass('dark-mode-button');
    $('body').toggleClass('bg-dark');
    $('body').toggleClass('text-white');;
    $('.container-fluid').toggleClass('dark-mode');
    $('.anchorFix').toggleClass('text-white');
});


$('#arrowDownAssortiment').click(function () {
    $('#assortiment').slideToggle();
    $('#arrowDownPricelist').toggleClass('upsideDown');
});

$('#arrowDownPricelist').click(function () {
    $('.mayble').slideToggle();
    $('#arrowDownPricelist').toggleClass('upsideDown');
});

$('#easter').mouseover(function () {
    easter.play();
});
