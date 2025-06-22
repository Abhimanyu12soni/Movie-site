// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menu-toggle');
//     const navLinks = document.getElementById('navLinks');
//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('show');
//     });
// });


// const movies = [
//     {
//         title: "Sholay",
//         genre: "Action, Adventure",
//         rating: 4.9,
//         img: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
//         trailer: "https://www.youtube.com/embed/1wPq9jvG1UU",
//         reviews: []
//     },
//     {
//         title: "Mother India",
//         genre: "Drama",
//         rating: 4.8,
//         img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
//         trailer: "https://www.youtube.com/embed/8M1S2U6bRRA",
//         reviews: []
//     },
//     {
//         title: "Maine Pyar Kiya",
//         genre: "Romance",
//         rating: 4.5,
//         img: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
//         trailer: "https://www.youtube.com/embed/9zPz6l2iKLg",
//         reviews: []
//     }
// ];

// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menu-toggle');
//     const navLinks = document.getElementById('navLinks');
//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('show');
//     });

//     renderMovies(movies);

//     document.getElementById('searchBar').addEventListener('input', function(e) {
//         const search = e.target.value.toLowerCase();
//         const filtered = movies.filter(m =>
//             m.title.toLowerCase().includes(search) ||
//             m.genre.toLowerCase().includes(search)
//         );
//         renderMovies(filtered);
//     });
// });

// function renderMovies(movieList) {
//     const grid = document.getElementById('movieGrid');
//     grid.innerHTML = '';
//     movieList.forEach((movie, idx) => {
//         const card = document.createElement('div');
//         card.className = 'movie-card';
//         card.innerHTML = `
//             <img src="${movie.img}" alt="${movie.title}">
//             <h3>${movie.title}</h3>
//             <p>Genre: ${movie.genre}</p>
//             <p>Rating: ${movie.rating}/5</p>
//             <button onclick="openTrailer('${movie.trailer}')"><i class="fa fa-play"></i> Watch Trailer</button>
//             <button onclick="openReviewModal(${idx})"><i class="fa fa-comments"></i> User Reviews</button>
//         `;
//         grid.appendChild(card);
//     });
// }

// function openTrailer(trailerUrl) {
//     const modal = document.getElementById('trailerModal');
//     const frame = document.getElementById('trailerFrame');
//     frame.src = trailerUrl + "?autoplay=1";
//     modal.style.display = 'block';
// }
// document.getElementById('closeModal').onclick = function() {
//     document.getElementById('trailerModal').style.display = 'none';
//     document.getElementById('trailerFrame').src = '';
// };
// window.onclick = function(event) {
//     if (event.target === document.getElementById('trailerModal')) {
//         document.getElementById('trailerModal').style.display = 'none';
//         document.getElementById('trailerFrame').src = '';
//     }
//     if (event.target === document.getElementById('reviewModal')) {
//         document.getElementById('reviewModal').style.display = 'none';
//     }
// };

// let currentReviewMovie = null;
// function openReviewModal(idx) {
//     currentReviewMovie = idx;
//     const modal = document.getElementById('reviewModal');
//     document.getElementById('reviewMovieTitle').textContent = movies[idx].title + " - User Reviews";
//     renderUserReviews();
//     modal.style.display = 'block';
// }
// document.getElementById('closeReviewModal').onclick = function() {
//     document.getElementById('reviewModal').style.display = 'none';
// };
// function renderUserReviews() {
//     const reviewsDiv = document.getElementById('userReviews');
//     reviewsDiv.innerHTML = '';
//     if (movies[currentReviewMovie].reviews.length === 0) {
//         reviewsDiv.innerHTML = "<p>No reviews yet. Be the first to review!</p>";
//     } else {
//         movies[currentReviewMovie].reviews.forEach(r => {
//             const div = document.createElement('div');
//             div.className = 'review';
//             div.innerHTML = `<strong>${r.name}:</strong> ${r.text}`;
//             reviewsDiv.appendChild(div);
//         });
//     }
// }
// document.getElementById('reviewForm').onsubmit = function(e) {
//     e.preventDefault();
//     const name = document.getElementById('reviewerName').value.trim();
//     const text = document.getElementById('reviewText').value.trim();
//     if (name && text && currentReviewMovie !== null) {
//         movies[currentReviewMovie].reviews.push({ name, text });
//         renderUserReviews();
//         document.getElementById('reviewForm').reset();
//     }
// };






// Movie data with trailers and reviews

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
















const movies = [

    {
        title: "INCEPTION",
        genre: "Sci-Fi, Thriller, Action",
        rating: "4.9/5",
        image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
        link: "https://www.imdb.com/title/tt1375666/"
    },
    {
        title: "AVENGERS: ENDGAME",
        genre: "Action, Adventure",
        rating: "4.8/5",
        image: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
        trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
        link: "https://www.imdb.com/title/tt4154796/"
    },
    {
        title: "PULP FICTION",
        genre: "Crime, Drama, Romance",
        rating: "4.5/5",
        image: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        link: "https://www.imdb.com/title/tt0110912/"
    },
    {
        title: "THE DARK KNIGHT",
        genre: "Action, Crime, Drama",
        rating: "4.9/5",
        image: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
        link: "https://www.imdb.com/title/tt0468569/"
    },
    {
        title: "THE GODFATHER",
        genre: "Crime, Drama",
        rating: "4.8/5",
        image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        trailer: "https://www.youtube.com/embed/sY1S34973zA",
        link: "https://www.imdb.com/title/tt0068646/"
    },
    {
        title: "FIGHT CLUB",
        genre: "Drama",
        rating: "4.7/5",
        image: "https://www.bing.com/th/id/OIP.GGzj_iHbeurTqIEcNGIEdwHaLH?w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        trailer: "https://www.youtube.com/embed/qtRKdVHc-cE",
        link: "https://www.imdb.com/title/tt0137523/",
    },
    {
        title: "3 IDIOTS",
        genre: "Comedy, Drama",
        rating: "4.7/5",
        image: "https://www.bing.com/th/id/OIP.qeTgeLDl6ZpMpEaGSff_9AHaJ9?w=138&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        trailer: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
        link: "https://www.imdb.com/title/tt1187043/"
    },
    {
        title: "BAHUBALI: THE BEGINNING",
        genre: "Action, Drama",
        rating: "4.6/5",
        image: "https://th.bing.com/th/id/ODL.23fcd868a918f9184f4f2725587f3bbb?w=138&h=97&c=10&rs=1&o=6&dpr=1.5&pid=AlgoBlockDebug",
        trailer: "https://www.youtube.com/watch?v=sOEg_YZQsTI",
        link: "https://www.imdb.com/title/tt2631186/"
    }
];







const movieGrid = document.getElementById('movieGrid');
const searchBar = document.getElementById('searchBar');
const trailerModal = document.getElementById('trailerModal');
const trailerFrame = document.getElementById('trailerFrame');
const closeModal = document.getElementById('closeModal');
const reviewModal = document.getElementById('reviewModal');
const closeReviewModal = document.getElementById('closeReviewModal');
const reviewForm = document.getElementById('reviewForm');
const userReviews = document.getElementById('userReviews');
const reviewMovieTitle = document.getElementById('reviewMovieTitle');
const reviewerName = document.getElementById('reviewerName');
const reviewText = document.getElementById('reviewText');
const reviews = {};

function renderMovies(filter = '') {
    movieGrid.innerHTML = '';
    movies
        .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach((movie, index) => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
                <button class="trailer-btn" data-index="${index}">Watch Trailer</button>
                <button class="review-btn" data-title="${movie.title}">User Reviews</button>
            `;
            movieGrid.appendChild(movieCard);
        });
}
renderMovies();

searchBar.addEventListener('input', (e) => {
    renderMovies(e.target.value);
});

movieGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('trailer-btn')) {
        const index = e.target.getAttribute('data-index');
        trailerFrame.src = movies[index].trailer + "?autoplay=1";
        trailerModal.style.display = 'block';
    } else if (e.target.classList.contains('review-btn')) {
        const title = e.target.getAttribute('data-title');
        reviewMovieTitle.textContent = title;
        userReviews.innerHTML = reviews[title]
            ? reviews[title].map(review => `<div class="review"><strong>${review.name}:</strong> ${review.text}</div>`).join('')
            : 'No reviews yet.';
        reviewModal.style.display = 'block';
    }
});

closeModal.addEventListener('click', () => {
    trailerModal.style.display = 'none';
    trailerFrame.src = '';
});
closeReviewModal.addEventListener('click', () => {
    reviewModal.style.display = 'none';
});
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = reviewMovieTitle.textContent;
    if (!reviews[title]) {
        reviews[title] = [];
    }
    reviews[title].push({
        name: reviewerName.value,
        text: reviewText.value
    });
    reviewerName.value = '';
    reviewText.value = '';
    userReviews.innerHTML = reviews[title].map(review => `<div class="review"><strong>${review.name}:</strong> ${review.text}</div>`).join('');
});
window.addEventListener('click', (event) => {
    if (event.target === trailerModal) {
        trailerModal.style.display = 'none';
        trailerFrame.src = '';
    } else if (event.target === reviewModal) {
        reviewModal.style.display = 'none';
    }
});































weatherBtn.onclick = function() {
  weatherModal.style.display = "flex";
};
closeWeather.onclick = function() {
  weatherModal.style.display = "none";
};
window.onclick = function(e) {
  if (e.target === weatherModal) {
    weatherModal.style.display = "none";
  }
};

















// Animate About Section Counters
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.about-advanced .stat-number').forEach(function(el) {
    let countTo = parseInt(el.getAttribute('data-count'), 10);
    let count = 0;
    let increment = Math.ceil(countTo / 60);
    let interval = setInterval(() => {
      count += increment;
      if (count >= countTo) {
        count = countTo;
        clearInterval(interval);
      }
      el.textContent = count;
    }, 20);
  });
});









// Responsive nav
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});
window.addEventListener('resize', () => {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth > 800) {
        navLinks.classList.remove('active');
    }
});
// Optional: Simple form validation and message
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // You can add AJAX here to send data to your backend if needed
  document.getElementById('formMsg').textContent = "Thank you! Your message has been sent.";
  this.reset();
  setTimeout(() => {
    document.getElementById('formMsg').textContent = "";
  }, 4000);
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







// Contact form validation and message
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = "Thank you! Your message has been sent.";
  this.reset();
  setTimeout(() => {
    document.getElementById('formMsg').textContent = "";
  }, 4000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Toggle navigation menu on small screens
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });
});
// Highlight active section in navigation
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navLinks a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
// Initialize AOS (Animate On Scroll) library
AOS.init({
  duration: 1200, // Animation duration in milliseconds
  once: true // Whether animation should happen only once while scrolling down
});
// Initialize Swiper for testimonials

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 30,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
    }
    });
// Initialize Google Maps
function initMap() {
    const location = { lat: 28.7041, lng: 77.1025 }; // Example coordinates (Delhi)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    new google.maps.Marker({
        position: location,
        map: map
    });
}
// Load Google Maps script dynamically
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com
/maps/api/js" + "?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
// Call the function to load Google Maps
loadGoogleMaps();
// Add event listener for DOMContentLoaded to ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGoogleMaps();
});
// Add event listener for window load to ensure the script runs after all resources are loaded
window.addEventListener('load', function() {
    loadGoogleMaps();
});
// Add event listener for window resize to adjust map size
window.addEventListener('resize', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window scroll to adjust map size
window.addEventListener('scroll', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window orientation change to adjust map size
window.addEventListener('orientationchange', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window focus to adjust map size
window.addEventListener('focus', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window blur to adjust map size
window.addEventListener('blur', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window visibility change to adjust map size
document.addEventListener('visibilitychange', function() {
    const mapElement = document.getElementById('map');
    if (mapElement && document.visibilityState === 'visible') {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window unload to clean up resources
window.addEventListener('unload', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.clearInstanceListeners(mapElement);
    }
});
// Add event listener for window beforeunload to clean up resources
window.addEventListener('beforeunload', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.clearInstanceListeners(mapElement);
    }
});
// Add event listener for window popstate to adjust map size
window.addEventListener('popstate', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window hashchange to adjust map size
window.addEventListener('hashchange', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window message to adjust map size
window.addEventListener('message', function(event) {
    const mapElement = document.getElementById('map');
    if (mapElement && event.data === 'resizeMap') {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window storage to adjust map size
window.addEventListener('storage', function(event) {
    const mapElement = document.getElementById('map');
    if (mapElement && event.key === 'resizeMap') {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window online to adjust map size
window.addEventListener('online', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});
// Add event listener for window offline to adjust map size
window.addEventListener('offline', function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.trigger(map, 'resize');
    }
});

