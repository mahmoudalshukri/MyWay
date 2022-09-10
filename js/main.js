$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >10) {
            $(".navbar").css("backgroundColor" , "#fff");
            $(".navbar").css("height" , "60px");
            $(".navbar .logo a").css('color', '#000');
            $('.navbar-dark .navbar-nav .nav-link').css('color', '#000');

        }
        else{
            $(".navbar").css("backgroundColor" , "rgba(0, 0, 0, 0.3)");  	
            $(".navbar").css("height" , "80px");
            $(".navbar .logo a").css('color', '#fff');
            $('.navbar-dark .navbar-nav .nav-link').css('color', '#fff')
        }
        if(window.innerWidth < 992){
            $(".navbar").css("backgroundColor" , "#fff");
            $(".navbar").css("height" , "60px");
            $(".navbar .logo a").css('color', '#000');
            $('.navbar-dark .navbar-nav .nav-link').css('color', '#000');
        }
        
    })
    // nav bar
    $('.navbar-toggler').click(function(){
        $('.menu').toggleClass('show');

    })
})