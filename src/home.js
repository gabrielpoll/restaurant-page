import restaurantImage from "./restaurant-image.jpg";

const divContent = document.getElementById("content");

const loadHome = () => {
    divContent.textContent = "";

    const headline = document.createElement("h1");
    headline.textContent = "Vesuvio"
    divContent.appendChild(headline);

    const restImage = document.createElement("img");
    restImage.src = restaurantImage;
    divContent.appendChild(restImage);

    const aboutRestaurant = document.createElement("p");
    aboutRestaurant.textContent = `At Vesuvio, we believe that great food tells a story. Inspired by classic Italian traditions and the warmth of family kitchens, our restaurant offers a cozy atmosphere where every guest feels at home.

From freshly prepared pasta to carefully crafted sauces, each dish is made with high-quality ingredients and a passion for authentic flavors. Whether you’re here for a quiet dinner or a special celebration, Vesuvio is the perfect place to slow down, enjoy good company, and savor unforgettable meals.

Buon appetito — we’re glad to have you at Vesuvio.`;
    divContent.appendChild(aboutRestaurant);
}

export default loadHome;
