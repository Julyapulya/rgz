// индекс текущего изображения
var slideIndex = 1;
// является ли перемотка автоматической
var isShowStarted = false;



// запуск автоматической перемотки
function startSlideShow() {
  if(isShowStarted == false){
      isShowStarted = true;
      slideIndex++;
      showSlides(slideIndex);
  }

}

// завершение автоматической перемотки
function finishSlideShow() {
    isShowStarted = false;
}

// переключение на следующий слайд
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// вывод выбранного слайда
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// вывод изображения на экран целиком
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    let mini = document.getElementById("miniatures");
    let close = document.getElementById("closebtn");
    let arrows = document.getElementsByTagName("a");
    let slider = document.getElementById("r1");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    // убираем с экрана ненужные элементы
    slider.style.display = "none";
    mini.style.display = "none";
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // добавляем необходимые поля
    arrows[0].style.display = "inline";
    arrows[1].style.display = "inline";
    start.style.display = "inline";
    stop.style.display = "inline"
    close.style.display = "inline"
    close.style.visibility = "visible";

    //вывод текущего слайда
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    slides[slideIndex - 1].style.display = "block";
    // вывод подписи
    captionText.innerHTML = dots[slideIndex - 1].alt;
    captionText.style.display = "block"
    // автоматическая перемотка
    if (isShowStarted) {
        close.style.visibility = "hidden";
        slideIndex++;
        setTimeout(() => showSlides(slideIndex), 1000);
    }
}


// закрытие слайда, возвращение к миниатюрам
function closeSlide() { 
    let mini = document.getElementById("miniatures");
    let slides = document.getElementsByClassName("mySlides");
    let captionText = document.getElementById("caption");
    let close = document.getElementById("closebtn");
    let dots = document.getElementsByClassName("mySlides");
    let arrows = document.getElementsByTagName("a");
    let slider = document.getElementById("r1");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    // убираем с экрана все ненуэные элементы
    start.style.display = "none";
    stop.style.display = "none"
    arrows[0].style.display = "none";
    arrows[1].style.display = "none";
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    captionText.style.display = "none"  

    // выводим все необходимые элементы
    slider.style.display = "block"
    close.style.display = "none";
    mini.style.display = "block";
 
}

// изменение размера миниатюр
function changeSize() {
    let slider = document.getElementById("r1");
    let pict = document.getElementsByClassName("column");
    for (i = 0; i < pict.length; i++) {
        pict[i].style.width = slider.value * 3 + 150 + "px";
    }

}