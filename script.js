// Изменения блока, в функции к этому блоку добавляется либо убирается другой блок

// let abb = document.querySelector(".tt"); //
let abb2 = document.querySelector(".tt2");
let abb3 = document.querySelector(".tt3");
let abb4 = document.querySelector(".tt4");
let abb5 = document.querySelector(".tt5");
let abb6 = document.querySelector(".tt6");

// Общая функция для изменения выделения и вывода блока при нажатии, d - это для кнопок отдельно

function map_hilight(a, b, c, d) {
  let map_choose = document.querySelector(d);
  map_choose.addEventListener("click", (e) => {
    b.classList.toggle(c);
    var data = $(a).mouseout().data("maphilight") || {};
    data.alwaysOn = !data.alwaysOn;
    $(a).data("maphilight", data).trigger("alwaysOn.maphilight");
	
  });
}

//  Функции

// map_hilight(".map_little", abb, "z1", ".map_little"); // Мелкое здание
map_hilight(".map_main", abb2, "z2", ".map_main"); // Большое здание !!!!
map_hilight(".ns3", abb3, "z3", ".ns3"); // Чуть выше большого
map_hilight(".ns4", abb4, "z4", ".ns4"); // Большое дальнее
map_hilight(".ns5", abb5, "z5", ".ns5"); // С ребристой крышой здание !!!!
map_hilight(".ns6", abb6, "z6", ".ns6"); // Самое самое

// Кнопка закрытия в окне

map_hilight(".map_main", abb2, "z2", ".uu"); // Большое здание !!!!
map_hilight(".ns5", abb5, "z5", ".uux"); // С ребристой крышой здание !!!!


// Функция для выделение при нажатие и появление блока с информацией

function highlighting_toggle(a, b, c) {
  a.classList.toggle(c);
  var data = $(b).mouseout().data("maphilight") || {};
  data.alwaysOn = !data.alwaysOn;
  $(b).data("maphilight", data).trigger("alwaysOn.maphilight");
}

// ...............................................................................................................................................

// Выделение цвета, библиотека jqery:

$(function () {
  $(".map").maphilight();
});

$.fn.maphilight.defaults = {
  fill: true,
  fillColor: "fbdf68", // цвет заливки
  fillOpacity: 0.3,
  stroke: true,
  strokeColor: "ed8b33", //Цвет выделения, сейчас синий
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
  shadowColor: "000000",
  shadowOpacity: 0.8,
  shadowPosition: "outside", // inside помоему ещё
  shadowFrom: false,
};

// Курсор мыши

init_pointer();

init_pointer({
  pointerColor: "purple", // Css color
  ringSize: 15, // Pixels
  ringClickSize: 10, // Pixels when clicking
});
