// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: 40.1069509, lng: -83.1386173 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: uluru, mapTypeId: google.maps.MapTypeId.ROADMAP });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });

    google.maps.event.addListener(marker, 'click', function () {
        window.location.href = "https://www.google.com/maps/dir//5600+Post+Rd,+Dublin,+OH+43017/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8838eccb67e5a699:0xe6c23b72fd1a8d50?ved=2ahUKEwi_582G0tTeAhXL7IMKHfhsB0wQwwUwAHoECAAQAw";
    });
}   