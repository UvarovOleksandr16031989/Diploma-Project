 function initMap() {
  var uluru = {lat: 50.450613, lng: 30.587262};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var uluruOne = {lat: 50.447392, lng: 30.502872};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var uluruTwo = {lat: 50.446771, lng: 30.545925};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  var marker = new google.maps.Marker({
    position: uluruOne,
    map: map
  });
  var marker = new google.maps.Marker({
    position: uluruTwo,
    map: map
  });
};


$(document).ready(function () {
 $('.sandwichCarusel').owlCarousel({
     loop:true,
     margin:0,
     nav:false,
     center:false,
     dots: false,
     autoWidth:true,
     responsive:{
         0:{
             items:1

         },
         680:{
             items:2
         },
         1000:{
             items:3
         }
     }
 })
    var owl = $('.sandwichCarusel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtnSandwich').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtnSandwich').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

});
 $(document).ready(function () {
     $('.soupCarousel').owlCarousel({
         loop:true,
         margin:0,
         nav:false,
         center:false,
         dots: false,
         autoWidth:true,
         responsive:{
             0:{
                 items:1

             },
             680:{
                 items:2
             },
             1000:{
                 items:3
             }
         }
     })
     var owl = $('.soupCarousel');
     owl.owlCarousel();
     // Go to the next item
     $('.customNextBtnSoup').click(function() {
         owl.trigger('next.owl.carousel');
     })
     // Go to the previous item
     $('.customPrevBtnSoup').click(function() {
         // With optional speed parameter
         // Parameters has to be in square bracket '[]'
         owl.trigger('prev.owl.carousel', [300]);
     });

 });

 $(document).ready(function () {
     $('.saladCarousel').owlCarousel({
         loop:true,
         margin:0,
         nav:false,
         center:false,
         dots: false,
         autoWidth:true,
         responsive:{
             0:{
                 items:1

             },
             680:{
                 items:2
             },
             1000:{
                 items:3
             }
         }
     })
     var owl = $('.saladCarousel');
     owl.owlCarousel();
     // Go to the next item
     $('.customNextBtnSalad').click(function() {
         owl.trigger('next.owl.carousel');
     })
     // Go to the previous item
     $('.customPrevBtnSalad').click(function() {
         // With optional speed parameter
         // Parameters has to be in square bracket '[]'
         owl.trigger('prev.owl.carousel', [300]);
     });

 });

 $(document).ready(function () {
     $('.dessertCarousel').owlCarousel({
         loop:true,
         margin:0,
         nav:false,
         center:false,
         dots: false,
         autoWidth:true,
         responsive:{
             0:{
                 items:1

             },
             680:{
                 items:2
             },
             1000:{
                 items:3
             }
         }
     })
     var owl = $('.dessertCarousel');
     owl.owlCarousel();
     // Go to the next item
     $('.customNextBtnDessert').click(function() {
         owl.trigger('next.owl.carousel');
     })
     // Go to the previous item
     $('.customPrevBtnDessert').click(function() {
         // With optional speed parameter
         // Parameters has to be in square bracket '[]'
         owl.trigger('prev.owl.carousel', [300]);
     });

 });

 $(document).ready(function () {
     $('.caroselVideo').owlCarousel({
         items:3,
         loop:true,
         video:true,
         dots:false,
         margin:20,
         nav:false,
         center:true,
         autoWidth:true,
         responsive:{
             1199:{
                 items:1,
                 videoHeight:400,
                 videoWidth: 700
             },
             680:{
                 items:1,
                 videoHeight:400,
                 videoWidth: 700
             },
             600:{
                 items:1,
                 videoHeight:300,
                 videoWidth: 600
             },
             480:{
                 items:1,
                 videoHeight:200,
                 videoWidth: 400
             },
             400:{
                 items:1,
                 videoHeight:100,
                 videoWidth: 300
             }
         }
     })
     var owl = $('.caroselVideo');
     owl.owlCarousel();
     // Go to the next item
     $('.customNextBtnMedia').click(function() {
         owl.trigger('next.owl.carousel');
     })
     // Go to the previous item
     $('.customPrevBtnMedia').click(function() {
         // With optional speed parameter
         // Parameters has to be in square bracket '[]'
         owl.trigger('prev.owl.carousel', [300]);
     });
 });