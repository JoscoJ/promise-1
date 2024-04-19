const menu = [
    { name: 'BLACK COFFEE', price: '$5.99', image: 'https://images.herzindagi.info/image/2018/Aug/Drinking-Black-Coffee-Everyday-Has-These-Benefits.jpg/200' },
    { name: 'ESPRESSO', price: '$4.99', image: 'https://via.placeholder.com/200' },
    { name: 'LUNGO', price: '$3.99', image: 'https://via.placeholder.com/200' },
    { name: 'DOPPIO', price: '$6.99', image: 'https://via.placeholder.com/200' },
    { name: 'MACCHIATO', price: '$4.49', image: 'https://via.placeholder.com/200' },
    { name: 'FLAT WHITE', price: '$3.49', image: 'https://via.placeholder.com/200' }
];

const coffeemenu = document.getElementById("coffee-menu");

menu.forEach(value=>{
    const card = document.createElement("div");
    card.innerHTML=`
    <img src = "${value.image}" alt="${value.name}">
    <p> ${value.name}<p>
    <p> ${value.price}</P>

    `
    coffeemenu.appendChild(card)

});

