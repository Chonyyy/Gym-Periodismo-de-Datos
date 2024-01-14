let pages = [];
const addPage = (name, img, data) => {
    const div = document.createElement("div");
    div.style.margin = "5px";
    div.style.padding = 0;
    div.style.display = "flex";
    div.style.alignContent = "center";
    div.style.alignItems = "center";
    div.style.flexDirection = "column";
    div.style.flex = "0 0 15vw"
    div.style.height = "15vw";
    div.style.width = "15vw";
    div.style.position = "relative";
    //div.style.backgroundColor = "#ff0000";
    const viewpager = document.getElementById("viewpager");
    viewpager.appendChild(div);

    const _img = document.createElement("img");
    _img.src = "/assets/" + img;
    _img.style.width = "82%";
    _img.style.height = "82%";
    div.appendChild(_img);

    const txt = document.createElement("p");
    txt.style.padding = 0;
    txt.style.margin = 0;
    txt.style.height = "16%";
    txt.innerText = name;
    div.appendChild(txt);

    const hint = document.getElementById("hint");


    div.addEventListener("mouseover", function () {

        const rect = div.getBoundingClientRect();
        hint.innerText = data;
        hint.style.display = "block";
        hint.style.top = rect.top + window.scrollY + "px";
        hint.style.left = rect.left + window.scrollX + "px";
    });


    div.addEventListener("mouseout", function () {
        hint.style.display = "none";
    });
}

  

  
