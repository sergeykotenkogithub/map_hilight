// Изменения блока, в функции к этому блоку добавляется либо убирается другой блок

let abb = document.querySelector(".tt"); // 
let abb2 = document.querySelector(".tt2");
let abb3 = document.querySelector(".tt3");
let abb4 = document.querySelector(".tt4");
let abb5 = document.querySelector(".tt5");
let abb6 = document.querySelector(".tt6");

// Общая функция для изменения выделения и вывода блока при нажатии

function map_hilight (a, b, c) {
	let map_choose = document.querySelector(a);
	map_choose.addEventListener('click', e => {
	b.classList.toggle(c);
	var data = $(a).mouseout().data('maphilight') || {};
	data.alwaysOn = !data.alwaysOn;
	$(a).data('maphilight', data).trigger('alwaysOn.maphilight');	
})}

// function map_h (e) {
// 	let map_choose = document.querySelector(".ns2");
// 	map_choose.addEventListener('mouseover', f => {
// 	// abb2.classList.toggle(c);
// 	// var data = $('ns').mouseout().data('maphilight') || {};
// 	// data.alwaysOn = !data.alwaysOn;
// 	// $('ns').data('maphilight', data).trigger('alwaysOn.maphilight');
// 	e.preventDefault();
// 	var data = $('.ns').mouseout().data('maphilight') || {};
// 	data.alwaysOn = !data.alwaysOn;
// 	$('.ns').data('maphilight', data).trigger('alwaysOn.maphilight');
// })}



//  Функции

map_hilight ('.ns', abb, 'z1') // Мелкое здание
map_hilight ('.ns2', abb2, 'z2') // Большое здание
map_hilight ('.ns3', abb3, 'z3') // Чуть выше большого
map_hilight ('.ns4', abb4, 'z4') // Большое дальнее
map_hilight ('.ns5', abb5, 'z5') // Самое дальнее здание
map_hilight ('.ns6', abb6, 'z6') // Самое самое

// map_h()

// Кнопка

let h = document.querySelector(".uu");
h.addEventListener('click', e => {
	abb2.classList.toggle('z2');
	e.preventDefault();
	var data = $('.ns2').mouseout().data('maphilight') || {};
	data.alwaysOn = !data.alwaysOn;
	$('.ns2').data('maphilight', data).trigger('alwaysOn.maphilight');
})

// Кнопка 2

let nn = document.querySelector(".uux");
nn.addEventListener('click', e => {
	abb5.classList.toggle('z5');
	e.preventDefault();
	var data = $('.ns5').mouseout().data('maphilight') || {};
	data.alwaysOn = !data.alwaysOn;
	$('.ns5').data('maphilight', data).trigger('alwaysOn.maphilight');
})


// Событие при выходе мышки из поле зрения

// abb2.addEventListener('mouseout', e => {
// 	abb2.classList.toggle('z2');
// 	e.preventDefault();
// 	var data = $('.ns2').mouseout().data('maphilight') || {};
// 	data.alwaysOn = !data.alwaysOn;
// 	$('.ns2').data('maphilight', data).trigger('alwaysOn.maphilight');
// })

// Функция для выделение при нажатие и появление блока с информацией

function highlighting_toggle (a, b, c) {
	a.classList.toggle(c);
	var data = $(b).mouseout().data('maphilight') || {};
	data.alwaysOn = !data.alwaysOn;
	$(b).data('maphilight', data).trigger('alwaysOn.maphilight');
}


// ...............................................................................................................................................

// Выделение цвета:


$(function() {
    $('.map').maphilight();
});

$.fn.maphilight.defaults = {
	fill: true,
	fillColor:'fbdf68', // цвет заливки
	fillOpacity: 0.3,
	stroke: true,
	strokeColor: 'ed8b33', //Цвет выделения, сейчас синий
	strokeOpacity: 0.3, // прозрачность линии (border)
	strokeWidth: 10,
	fade: true,
	alwaysOn: false,
	neverOn: false,
	groupBy: false,
	wrapClass: true,
	shadow: true,
	shadowX: 12,
	shadowY: 12,
	shadowRadius: 12,
	shadowColor: '000000',
	shadowOpacity: 0.8,
	shadowPosition: 'outside', // inside помоему ещё
	shadowFrom: false
}

// По умолчанию, кроме цвета

// $.fn.maphilight.defaults = {
// 	fill: true,
// 	fillColor: '000000',
// 	fillOpacity: 0.2,
// 	stroke: true,
// 	strokeColor: '0000ff',
// 	strokeOpacity: 1,
// 	strokeWidth: 1,
// 	fade: true,
// 	alwaysOn: false,
// 	neverOn: false,
// 	groupBy: false,
// 	wrapClass: true,
// 	shadow: false,
// 	shadowX: 0,
// 	shadowY: 0,
// 	shadowRadius: 6,
// 	shadowColor: '000000',
// 	shadowOpacity: 0.8,
// 	shadowPosition: 'outside',
// 	shadowFrom: false
// }



// $('.ns2').click(function(e) {
// 	e.preventDefault();
// 	var data = $('.ns2').mouseout().data('maphilight') || {};
// 	data.alwaysOn = !data.alwaysOn;
// 	$('.ns2').data('maphilight', data).trigger('alwaysOn.maphilight');
// });

// Мышь
init_pointer ();

init_pointer({
	pointerColor: "purple", // Css color
	ringSize: 15, // Pixels
	ringClickSize: 10 // Pixels when clicking
})