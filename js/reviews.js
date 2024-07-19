function initReviews() {
    var placeId = 'YOUR_PLACE_ID';
    var request = {
        placeId: placeId,
        fields: ['reviews']
    };

    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails(request, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var reviews = place.reviews;
            var reviewsContainer = document.getElementById('google-reviews');
            reviews.forEach(function(review) {
                var reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerHTML = `
                    <h3>${review.author_name}</h3>
                    <p>${review.text}</p>
                    <small>Rating: ${review.rating} / 5</small>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        }
    });
}

google.maps.event.addDomListener(window, 'load', initReviews);
