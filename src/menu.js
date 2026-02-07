import pastaAlVesuvioImage from "./pasta-el-vesuvio.png";

const divContent = document.getElementById("content");

const loadMenu = () => {

    divContent.textContent = "";

    const menuTitle = document.createElement("div");
    const textTitle = document.createElement("h1");
    textTitle.textContent = "Menu";
    menuTitle.appendChild(textTitle);

    const firstPlate = document.createElement("div");
    const pastaAlVesuvioTitle = document.createElement("p");
    const pastaPrice = document.createElement("p");
    const pastaImage = document.createElement("img");
    pastaAlVesuvioTitle.textContent = "Pasta El Vesuvio";
    pastaPrice.textContent = "$4.99"
    pastaImage.src = pastaAlVesuvioImage;
    firstPlate.append(pastaAlVesuvioTitle, pastaPrice, pastaImage);
    

    divContent.append(menuTitle, firstPlate);
};

export default loadMenu;