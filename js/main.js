$(document).ready(function(){
    $('.Testimonial__slider').slick({
        autoplay:true
    });

    $('.brands__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.header__burger').click(function(event){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    const selectLanguage = document.querySelector('.change-lang');
const allLang = ['en', 'ru'];
selectLanguage.addEventListener('change', changeURLLanguage);

function changeURLLanguage (){
    let lang = selectLanguage.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function ChangeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    selectLanguage.value  =  hash;
    for (let key in langArr){
        document.querySelector('.'+key).innerHTML=langArr[key][hash];
    }
    document.querySelector('.preview__link').innerHTML=langArr['preview__link'][hash]+'<img src="./img/arrow.svg" class="preview__link-img">';
    document.querySelector('.things__block-link').innerHTML=langArr['things__block-link'][hash]+'<img src="./img/arrow.svg" class="preview__link-img">';
    document.querySelector('.TeamWork__block-link').innerHTML=langArr['TeamWork__block-link'][hash]+'<img src="./img/arrow.svg" class="preview__link-img">';
    document.querySelector('.subinp').placeholder=langArr['subinp'][hash];
    document.querySelector('.subbtn').value=langArr['subbtn'][hash];
}
ChangeLanguage();
  });
          