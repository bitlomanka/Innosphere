
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.974255, lng: 31.968143},
    zoom: 17,
    scrollwheel: false,
    disableDefaultUI: true,
    scaleControl: true,
    });
    var marker = new google.maps.Marker({
    position: {lat: 46.974255, lng: 31.968030},
    map: map,
    title: 'Hello World!'
  });
}

$(document).ready(function(){
    var currentLeftValue = 0;

    // select2
    $('.filter_select').select2({
        minimumResultsForSearch: -1,
        width: '100%'
    });
    
    // photo hover
    $('.link_presentation_img').hover(function(e){
        $(this).find('.block_description-photo').slideToggle('');
    });
    
    
    
    // карусель
    
    $(".owl-carousel").owlCarousel({
        items: 5,
        navigation: true,
        navigationText: false,
        slideSpeed: 400
    });
    
    // validate
    
    $('.write-us').validate({
        rules: {
            first_user_name:{
                required: true,
                minlength: 6
            },
            email_user:{
                required:true,
                email: true
            },
            last_user_name:{
                required: true,
                minlength: 4
            },
            phone_user_number: {
                required: true,
                digits: true
            },
            message:'required'
        },
        messages:{
            first_user_name:{
                required: 'Enter your first name',
                minlength: 'Name must be at least 4 characters'
            },
            email_user:{
                required:'Enter your e-mail address',
                email: 'Please enter a valid e-mail address'
            },
            last_user_name:{
                required: 'enter your last name',
                minlength: 'last name must be at least 4 characters'
            },
            phone_user_number: {
                required: 'Enter your phone number',
                digits: 'Phone number must contain only digits'
            },
            message:'Enter your message'
        },
        submitHandler: function(form){
            $.ajax({
                type: "POST",
                url: 'php/index.php',
                data: $(form).serialize(),
                cache: false,
                success: function(data){
                    alert(data);
                }
            })
        }
    });
    
    // parallax
    
    $('.img-holder').imageScroll({
        holderMinHeight: 400,
        holderMaxHeight: 500,
        speed: 0.3
    });
    
    // mobile-navigation
    
    $('.mobile-navigation').on("click", function(e){
        e.stopPropagation();
        var menu = $('.container-navigation').find('.navigation');
        
        if(menu.is(":hidden")){
            menu.slideDown(400);
        }else{
            menu.slideUp(400);
        }
    });
    
    
});
document.createElement( "picture" );





