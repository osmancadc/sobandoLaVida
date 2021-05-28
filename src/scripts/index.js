$(document).ready(function (e) {
    $('img[usemap]').rwdImageMaps();
    $('.background').rwdImageMaps();

});

let handleRedirect = (part) => {
    switch (part) {

        case 1:
            location.replace('doctor.html')
            break
        case 2:
            location.replace('meds.html')
            break
        case 3:
            location.replace('towells.html')
            break
        case 4:
            location.replace('hands.html')
            break
        case 5:
            location.replace('sick.html')
            break
    }
}

$('.background').maphilight({
	fill: true,
	fillColor: '000000',
	fillOpacity: 0.2,
	stroke: false,
	fade: true,
	alwaysOn: false,
	neverOn: false,
	groupBy: false,
	wrapClass: true,
	shadow: false,
});

$(".obscure").on('click',()=>{
    var win = window.open('https://indd.adobe.com/view/309c5836-7a97-408f-babc-dc79909af47c', '_blank');
if (win) {
    win.focus();
} else {
    alert('Por favor permite los popups en esta página');
}
})
