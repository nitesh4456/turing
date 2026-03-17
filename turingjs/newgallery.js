// // // $('.portfolio-menu ul li').click(function () {
// // //     $('.portfolio-menu ul li').removeClass('active');
// // //     $(this).addClass('active');

// // //     var selector = $(this).attr('data-filter');
// // //     $('.portfolio-item').isotope({
// // //         filter: selector
// // //     });
// // //     return false;
// // // });
// // // $(document).ready(function () {
// // //     var popup_btn = $('.popup-btn');
// // //     popup_btn.magnificPopup({
// // //         type: 'image',
// // //         gallery: {
// // //             enabled: true
// // //         }
// // //     });
// // // });


// // Initialize Isotope
// var $grid = $('.portfolio-item').isotope({
//     itemSelector: '.item',
//     layoutMode: 'fitRows'
// });

// // Normal filter buttons
// $('.portfolio-menu li[data-filter]').click(function () {

//     $('.portfolio-menu li').removeClass('active');
//     $(this).addClass('active');

//     var selector = $(this).attr('data-filter');
//     $grid.isotope({ filter: selector });

// });

// // Orientation dropdown toggle
// $('.orientation-btn').click(function (e) {
//     e.stopPropagation();
//     $('.year-dropdown').slideToggle(200);
// });

// $('.year-dropdown li').click(function (e) {
//     e.stopPropagation();

//     var selector = $(this).attr('data-filter');
//     $grid.isotope({ filter: selector });

//     // Remove active from all
//     $('.portfolio-menu li').removeClass('active');

//     // Make Orientation button active
//     $('.orientation-dropdown').addClass('active');

//     $('.year-dropdown').slideUp(200);
// });

// // Close dropdown when clicking outside
// $(document).click(function () {
//     $('.year-dropdown').slideUp(200);
// });

// Initialize Isotope
var $grid = $('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

// Normal filter buttons
$('.portfolio-menu li[data-filter]').click(function () {

    $('.portfolio-menu li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $grid.isotope({ filter: selector });

});

// Dropdown toggle (works for both Orientation & Freshers)
$('.filter-dropdown').click(function (e) {

    e.stopPropagation();

    // Close other dropdowns
    $('.year-dropdown').not($(this).find('.year-dropdown')).slideUp(200);

    // Toggle current one
    $(this).find('.year-dropdown').slideToggle(200);
});

// Year selection
$('.year-dropdown li').click(function (e) {

    e.stopPropagation();

    var selector = $(this).attr('data-filter');
    $grid.isotope({ filter: selector });

    // Remove active from all
    $('.portfolio-menu li').removeClass('active');

    // Make parent dropdown active
    $(this).closest('.filter-dropdown').addClass('active');

    $('.year-dropdown').slideUp(200);
});

// Close when clicking outside
$(document).click(function () {
    $('.year-dropdown').slideUp(200);
});

// Dropdown toggle (delegated - more reliable)
$(document).on('click', '.filter-dropdown', function (e) {

    e.stopPropagation();

    $('.year-dropdown').not($(this).find('.year-dropdown')).slideUp(200);

    $(this).find('.year-dropdown').slideToggle(200);
});