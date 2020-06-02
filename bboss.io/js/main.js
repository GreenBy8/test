$(document).ready(function () {
    let tabsItem = $('.up_menu');

    tabsItem.on('click', function (event){
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.menu_active').toggleClass('menu_active');
        $(this).toggleClass('menu_active');
    });
});