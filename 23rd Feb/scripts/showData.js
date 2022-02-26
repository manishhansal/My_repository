const getData = async (url) => {
    try {

        let res = await fetch(url);

        let data = await res.json();

        return data;

    } catch (err) {

        console.log(err);

    }
}

const displayData = (data, parent) => {

    data.forEach((prod) => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.src = prod.image;

        let title = document.createElement("p");
        title.textContent = prod.title;

        card.append(img, title);
        parent.append(card);
    })

}

export { getData, displayData };