const divContent = document.getElementById("content");

const loadContact = () => {
    divContent.textContent = "";

    const contactMessage = document.createElement("h2")
    contactMessage.textContent = `📍 Contact Vesuvio Restaurant

We’d love to hear from you! Whether you’d like to make a reservation, ask about our menu, or plan a special event, feel free to reach out.`
    divContent.append(contactMessage);

};

export default loadContact;