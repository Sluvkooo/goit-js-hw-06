const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function galleryMarkup() {
  const cardList = document.querySelector(".gallery");

  const cardsItem = images
    .map((elem) =>`<li> <img class ="img" src ="${elem.url}" alt = "${elem.alt}"  /></li>`)
    .join(" ");

  cardList.insertAdjacentHTML("afterbegin", cardsItem);
  console.log(cardList);

  cardList.style.display = "flex";
  cardList.style.justifyContent = "center";
  cardList.style.flexGrow = "1";
  cardList.style.listStyle = "none";
  cardList.style.padding = "0";

  const imgMarkup = document.querySelectorAll(".img");
  imgMarkup.forEach(
    (elem) => (elem.style.height = "100%") && (elem.style.width = "100%")
  );

  const itemMarkup = document.querySelectorAll("li");
  itemMarkup.forEach((elem) => (elem.style.margin = "15px"));
}

galleryMarkup();