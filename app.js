const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


const btnContainer = document.querySelector(".btn-container"); // Oluşturduğumuz butonları appendchild özelliği ile içerisine dahil edeceğiz.
const sectionMenu = document.querySelector(".section-center"); // menude yer alan bilgilerin içinde dönüp bu alana yazdıracağız.

// All Butonu
const btnAll = document.createElement("button");
btnAll.setAttribute("class", "btn btn-outline-dark btn-item");
btnAll.setAttribute("id", "All");
btnAll.innerText = "All";
btnContainer.appendChild(btnAll);
// Korea Butonu
const btnKorea = document.createElement("button");
btnKorea.setAttribute("class", "btn btn-outline-dark btn-item");
btnKorea.setAttribute("id", "Korea");
btnKorea.innerText = "Korea";
btnContainer.appendChild(btnKorea);
// Japan Butonu
const btnJapan = document.createElement("button");
btnJapan.setAttribute("class", "btn btn-outline-dark btn-item");
btnJapan.setAttribute("id", "Japan");
btnJapan.innerText = "Japan";
btnContainer.appendChild(btnJapan);
// China Butonu
const btnChina = document.createElement("button");
btnChina.setAttribute("class", "btn btn-outline-dark btn-item");
btnChina.setAttribute("id", "China");
btnChina.innerText = "China";
btnContainer.appendChild(btnChina);

let menuItems = "";

menu.forEach(item => {
  menuItems += `
    <div class="menu-items col-lg-6 col-sm-12">
      <img src="${item.img}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
         <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
    </div>`
});

sectionMenu.innerHTML = menuItems;

// China butonu tıklanırsa
let btnChinaSec = document.getElementById("China");
btnChinaSec.onclick = function ch() {
  let menuFiltrele = menu.filter(m => m.category === "China");
    menuListele = menuFiltrele.map((m) =>
    `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${m.img}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
         <h4>${m.title}</h4>
          <h4 class="price">${m.price}</h4>
        </div>
        <div class="menu-text">${m.desc}</div>
      </div>
    </div>`
  );
  sectionMenu.innerHTML = menuListele;
}

// Japan butonu tıklanırsa
let btnJapanSec = document.getElementById("Japan");
btnJapanSec.onclick = function jp() {
  let menuFiltrele = menu.filter(m => m.category === "Japan");
    menuListele = menuFiltrele.map((m) =>
    `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${m.img}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
         <h4>${m.title}</h4>
          <h4 class="price">${m.price}</h4>
        </div>
        <div class="menu-text">${m.desc}</div>
      </div>
    </div>`
  );
  sectionMenu.innerHTML = menuListele;
}

// Korea butonu tıklanırsa
let btnKoreaSec = document.getElementById("Korea");
btnKoreaSec.onclick = function ko() {
  let menuFiltrele = menu.filter(m => m.category === "Korea");
    menuListele = menuFiltrele.map((m) =>
    `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${m.img}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
         <h4>${m.title}</h4>
          <h4 class="price">${m.price}</h4>
        </div>
        <div class="menu-text">${m.desc}</div>
      </div>
    </div>`
  );
  sectionMenu.innerHTML = menuListele;
}

// All butonu tıklanırsa
let btnAllSec = document.getElementById("All");
btnAllSec.onclick = function All() {
  let menuFiltrele = menu.filter(m => m.id === 1 || m.id === 2 || m.id === 3 || m.id === 4 || m.id === 5 || m.id === 6 || m.id === 7 || m.id === 8);
    menuListele = menuFiltrele.map((m) =>`
    <div class="menu-items col-lg-6 col-sm-12">
      <img src="${m.img}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
         <h4>${m.title}</h4>
          <h4 class="price">${m.price}</h4>
        </div>
        <div class="menu-text">${m.desc}</div>
      </div>
    </div>`
  );
  sectionMenu.innerHTML = menuListele;
}