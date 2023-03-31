const gifts = [
    // { name: "xxxxxxx", price: 20, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Cafezinho para dois", price: 25, img: "./img/cafezinho.png", paymentlink: "https://nubank.com.br/pagar/377tv/K45UrmLf5i" },
    { name: "Almoço de rua", price: 30, img: "./img/almoco.png", paymentlink: "https://nubank.com.br/pagar/377tv/1nA352NHM3" },
    // { name: "xxxxxxx", price: 40, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    // { name: "xxxxxxx", price: 45, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Caixa de doces", price: 50, img: "./img/doces.png", paymentlink: "https://nubank.com.br/pagar/377tv/06wIjkiOJh" },
    { name: "Piquenique no parque", price: 60, img: "./img/picnic.png", paymentlink: "https://nubank.com.br/pagar/377tv/aYv7rX5v4V" },
    // { name: "xxxxxxx", price: 70, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Souvenirs da viagem", price: 80, img: "./img/souvenir.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/pPRCSMEMlQ" },
    // { name: "xxxxxxx", price: 90, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Café da manhã colonial", price: 100, img: "./img/cafe_colonial.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/4LDteRpu4u" },
    { name: "Tour guiado", price: 120, img: "./img/tour.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/Xt0BXNt3JK" },
    { name: "Garrafa de vinho", price: 150, img: "./img/vinho.png", paymentlink: "https://nubank.com.br/pagar/377tv/q4rNZkdu1Q" },
    { name: "Entradas para o museu", price: 200, img: "./img/museum.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/oWcDpVsZir" },
    { name: "Jantar romântico", price: 250, img: "./img/jantar.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/liQUHr28m6" },
    { name: "Ingressos para show", price: 300, img: "./img/show.png", paymentlink: "https://nubank.com.br/pagar/377tv/0LoTeetvzf" },
    // { name: "xxxxxxx", price: 400, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Passeio de trem", price: 500, img: "./img/trem.png", paymentlink: "https://nubank.com.br/pagar/377tv/VlXLMamKp0" },
    // { name: "Passeio aventura", price: 600, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    // { name: "xxxxxxx", price: 800, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Hospedagem", price: 1000, img: "./img/hotel.png", paymentlink: "https://nubank.com.br/pagar/377tv/ECibiz9uPw" },
    // { name: "Passeio de buggy", price: 1200, img: "./img/placeholder.png", paymentlink: "https://nubank.com.br/pagar/377tv/RNMI4SrDGC" },
    { name: "Passagens aéreas para Lua de Mel", price: 1500, img: "./img/aviao.jpg", paymentlink: "https://nubank.com.br/pagar/377tv/6GhUXNKbbw" }
];

document.querySelector('#presentes .row').insertAdjacentHTML('afterBegin', gifts.sort((a, b) => a.price > b.price ? 1 : -1).map(gift => `
    <div class="col col-md-6 col-lg-4 col-xl-3">
        <div class="card bg-transparent border-light my-1">
            <div class="card-header">${gift.name}</div>
            <img src="${gift.img}" alt="${gift.name}">
            <a href="${gift.paymentlink}" target="_blank" class="btn card-footer" data-price="${gift.price}">PRESENTEAR</a>
        </div>
    </div>`).join('')
);