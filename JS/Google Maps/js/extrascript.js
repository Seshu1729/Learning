var locations = [
    ['Kailasagiri', 17.7492, 83.3422, 'http://1.bp.blogspot.com/-c8Gd66eNTvM/Uwmm16INP1I/AAAAAAAAATg/enaXbWNPazA/s1600/kailasagiri-hill-visakhapatnam.jpg'],['Kailasagiri', 17.7492, 83.3422, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kailasagiri.jpg/240px-Kailasagiri.jpg'],
    ['Taj Mahal', 27.1750, 78.0422, 'https://pbs.twimg.com/media/Cra35VnXEAA72X5.jpg'],
    ['Vignan Institute of Information Technology', 17.7107, 83.1659, 'https://www.vignaniit.com/images/slide1.jpg'],
];

function initMap() 
{
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: new google.maps.LatLng(20.5937, 78.9629)
    });

    for (var index = 0; index < locations.length; index++) 
    {  
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[index][1], locations[index][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, index) {
            return function() 
            {
                var data = locations[index][0]+'<br><img src="'+locations[index][3]+'" style="width:300px;">';

                var infowindow = new google.maps.InfoWindow();
                infowindow.setContent(data);
                infowindow.open(map, marker);
            }
        })(marker, index));
    }
}
