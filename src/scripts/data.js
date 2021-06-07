import data from '../DATA.json';

data.restaurants.forEach(restaurant => {
    const resto = (restaurant);
    document.getElementById("artikel").innerHTML += `
    <article class="post">
        <div class="post-box">
            <img class="post-pict" tabindex="0" src="${resto.pictureId}" width="400px" height="250px" alt="Foto Restoran ${resto.name}  ">
            <p class="post-city" tabindex="0">${resto.city}</p>
            <p class="post-rating" tabindex="0">Rating : ${resto.rating}</p>
        </div>
        <div class="tittle-box">
            <h1 class="post-title"><a href="#">${resto.name}</a></h1>
        </div>
        <div class="post-item">
            <p class="post-description" tabindex="0">${resto.description.substring(0, 600)}...</p>
            <button>Read More</button>
        </div>
    </article>
`
});