// Изменения блока, в функции к этому блоку добавляется либо убирается другой блок

// let abb = document.querySelector(".tt"); //
let map_main = document.querySelector(".map_main_div"); // Большре здание
let abb3 = document.querySelector(".tt3");
let abb4 = document.querySelector(".tt4");
let map_roof = document.querySelector(".map_roof_div"); // c рефлёной крышей
let abb6 = document.querySelector(".tt6");


// Общая функция для изменения выделения и вывода блока при нажатии, d - это для кнопок отдельно

// Удаление при нажатие

function map_hilight(a, b, c, d) {
  let map_choose = document.querySelector(d);
  map_choose.addEventListener("click", (e) => {
    e.preventDefault();
    b.classList.toggle(c);
    var data = $(a).mouseout().data("maphilight") || {};
    data.alwaysOn = !data.alwaysOn;
    $(a).data("maphilight", data).trigger("alwaysOn.maphilight");
    if (a === ".map_main") {
      map_roof.classList.remove("map_roof_display")           
      abb6.classList.remove("z6")           
      var datas = $(".map_roof").mouseout().data("maphilight") || {};
      var datas2 = $(".ns6").mouseout().data("maphilight") || {};
      datas.alwaysOn = false;
      datas2.alwaysOn = false;
      $(".map_roof ").data("maphilight", datas).trigger("alwaysOn.maphilight");
      $(".ns6 ").data("maphilight", datas2).trigger("alwaysOn.maphilight");
    }
    if (a === ".map_roof") {
      map_main.classList.remove("map_main_display") 
      abb6.classList.remove("z6")    
      var datas = $(".map_main").mouseout().data("maphilight") || {};
      var datas2 = $(".ns6").mouseout().data("maphilight") || {};
      datas.alwaysOn = false;
      datas2.alwaysOn = false
      $(".map_main").data("maphilight", datas).trigger("alwaysOn.maphilight");
      $(".ns6 ").data("maphilight", datas2).trigger("alwaysOn.maphilight");
    }
    if (a === ".ns6") {
      map_main.classList.remove("map_main_display") 
      map_roof.classList.remove("map_roof_display")      
      var datas = $(".map_main").mouseout().data("maphilight") || {};
      var datas2 = $(".map_roof").mouseout().data("maphilight") || {};
      datas.alwaysOn = false;
      datas2.alwaysOn = false
      $(".map_main").data("maphilight", datas).trigger("alwaysOn.maphilight");
      $(".map_roof ").data("maphilight", datas2).trigger("alwaysOn.maphilight");
    }
  });
}

// Просто выделение

// function map_hilight(a, b, c, d) {
//   let map_choose = document.querySelector(d);
//   map_choose.addEventListener("click", (e) => {
//     e.preventDefault();
//     b.classList.toggle(c);
//     var data = $(a).mouseout().data("maphilight") || {};
//     data.alwaysOn = !data.alwaysOn;
//     $(a).data("maphilight", data).trigger("alwaysOn.maphilight");  
//   });
// }

//  Функции

// map_hilight(".map_little", abb, "z1", ".map_little"); // Мелкое здание
map_hilight(".map_main", map_main, "map_main_display", ".map_main"); // Большое здание !!!!
// map_hilight(".ns3", abb3, "z3", ".ns3"); // Чуть выше большого
// map_hilight(".ns4", abb4, "z4", ".ns4"); // Большое дальнее
map_hilight(".map_roof", map_roof, "map_roof_display", ".map_roof"); // С ребристой крышой здание !!!!
map_hilight(".ns6", abb6, "z6", ".ns6"); // Самое самое

// Кнопка закрытия в окне

map_hilight(".map_main", map_main, "map_main_display", ".map_main_div_btn"); // Большое здание !!!!
map_hilight(".map_roof", map_roof, "map_roof_display", ".map_roof_div_btn"); // С ребристой крышой здание !!!!

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

init_pointer({
  pointerColor: "purple", // Css color
  ringSize: 15, // Pixels
  ringClickSize: 10, // Pixels when clicking
});
