const gifts = [
    { name: "Cafezinho para dois", price: 25, img: "./img/cafezinho.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Almoço de rua", price: 30, img: "./img/almoco.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Caixa de doces", price: 50, img: "./img/doces.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Piquenique no parque", price: 65, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Souvenirs da viagem", price: 80, img: "./img/souvenir.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Café da manhã colonial", price: 100, img: "./img/cafe_colonial.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Tour guiado", price: 120, img: "./img/tour.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Garrafa de vinho", price: 150, img: "./img/vinho.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Entradas para o museu", price: 200, img: "./img/museum.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Jantar romântico", price: 250, img: "./img/jantar.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Ingressos para show", price: 300, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "xxxxxxx", price: 400, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Passeio de trem", price: 500, img: "./img/trem.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Passeio aventura", price: 600, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "xxxxxxx", price: 800, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Hospedagem", price: 1000, img: "./img/hotel.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Passeio de buggy", price: 1200, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Passagens aéreas para Lua de Mel", price: 1500, img: "./img/aviao.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" }
];

document.querySelector('#presentes .row').insertAdjacentHTML('beforeend', gifts.sort((a, b) => a.price > b.price ? 1 : -1).map(gift => `
    <div class="col col-md-6 col-lg-4 col-xl-3">
        <div class="card bg-transparent border-light my-1">
            <div class="card-header">${gift.name}</div>
            <img src="${gift.img}" alt="${gift.name}">
            <a href="${gift.paymentlink}" target="_blank" class="btn card-footer" data-price="${gift.price}">PRESENTEAR</a>
        </div>
    </div>`).join('')
);