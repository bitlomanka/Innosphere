
$(document).ready(function(){
    var currentLeftValue = 0;
    

    // select2
    $('.filter_select').select2({
        minimumResultsForSearch: -1
    });
    
    // photo hover
    $('.link_presentation_img').hover(function(e){
        $(this).find('.block_description-photo').slideToggle('');
    });
    
    // карусель
    
    function carousel (selector) {
        var container = $(selector),
            list = container.find('.list-slider'),
            items = list.find('.item-slider'),
            arrows = container.find('.arrow'),
            elementsCount = items.length,
            pixelsOffset = items.outerWidth(),
            minimumOffset = - ((elementsCount - 5) * pixelsOffset),
            maximumOffset = 0,
            currentLeftValue = 0;

        arrows.on('click', function(){
            if ($(this).hasClass('arrow-right')) {
                if (currentLeftValue != minimumOffset) {
                    currentLeftValue -= pixelsOffset;
                }
            } else {
                if (currentLeftValue != maximumOffset) {
                    currentLeftValue += pixelsOffset;
                }
            }
            list.animate({ left : currentLeftValue}, 500);
        });
    }
    
    carousel('.container-slider');
});





