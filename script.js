const product = [
    {
        id: 0,
        image: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_zJbhpfGEAxU0DK0GHTN4AWMYABANGgJwdg&ase=2&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW-bAn3hHZcb1EB2ClE2M2w7RlexWG8GSNJ_wbCRJRNv8FVWMroBwVMaAgNBEALw_wcB&ei=cKPxZY-hHL_b7_UP2Nqy8AQ&ohost=www.google.com&cid=CAESVeD2eKm5LHdFtLqNqejV6QRY98mmx2n8zubStl8a_10OB2_44o992eTrC-WBSFzLy9RwZju1cXvCpHpYvqiPzDXD0a3SZ6XD5gO2R6sgnkndnZV7_iA&sig=AOD64_2X4mpBH4kSCpyte7_sd2REaHmyzA&ctype=5&q=&nis=4&sqi=2&ved=2ahUKEwiPmYvhpfGEAxW_7bsIHVitDE4Q9aACKAB6BAgEEDg&adurl=',
        title: 'Maxi dress',
        price: 900,
    },
    {
        id: 1,
        image: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_zJbhpfGEAxU0DK0GHTN4AWMYABANGgJwdg&ase=2&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW-bAn3hHZcb1EB2ClE2M2w7RlexWG8GSNJ_wbCRJRNv8FVWMroBwVMaAgNBEALw_wcB&ei=cKPxZY-hHL_b7_UP2Nqy8AQ&ohost=www.google.com&cid=CAESVeD2eKm5LHdFtLqNqejV6QRY98mmx2n8zubStl8a_10OB2_44o992eTrC-WBSFzLy9RwZju1cXvCpHpYvqiPzDXD0a3SZ6XD5gO2R6sgnkndnZV7_iA&sig=AOD64_2X4mpBH4kSCpyte7_sd2REaHmyzA&ctype=5&q=&nis=4&sqi=2&ved=2ahUKEwiPmYvhpfGEAxW_7bsIHVitDE4Q9aACKAB6BAgEEDg&adurl=',
        title: 'Samsung galaxy 12',
        price: 120,
    },
    {
        id: 2,
        image: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_zJbhpfGEAxU0DK0GHTN4AWMYABANGgJwdg&ase=2&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW-bAn3hHZcb1EB2ClE2M2w7RlexWG8GSNJ_wbCRJRNv8FVWMroBwVMaAgNBEALw_wcB&ei=cKPxZY-hHL_b7_UP2Nqy8AQ&ohost=www.google.com&cid=CAESVeD2eKm5LHdFtLqNqejV6QRY98mmx2n8zubStl8a_10OB2_44o992eTrC-WBSFzLy9RwZju1cXvCpHpYvqiPzDXD0a3SZ6XD5gO2R6sgnkndnZV7_iA&sig=AOD64_2X4mpBH4kSCpyte7_sd2REaHmyzA&ctype=5&q=&nis=4&sqi=2&ved=2ahUKEwiPmYvhpfGEAxW_7bsIHVitDE4Q9aACKAB6BAgEEDg&adurl=',
        title: 'Nail polish',
        price: 120,
    },
    {
        id: 3,
        image: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_zJbhpfGEAxU0DK0GHTN4AWMYABANGgJwdg&ase=2&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW-bAn3hHZcb1EB2ClE2M2w7RlexWG8GSNJ_wbCRJRNv8FVWMroBwVMaAgNBEALw_wcB&ei=cKPxZY-hHL_b7_UP2Nqy8AQ&ohost=www.google.com&cid=CAESVeD2eKm5LHdFtLqNqejV6QRY98mmx2n8zubStl8a_10OB2_44o992eTrC-WBSFzLy9RwZju1cXvCpHpYvqiPzDXD0a3SZ6XD5gO2R6sgnkndnZV7_iA&sig=AOD64_2X4mpBH4kSCpyte7_sd2REaHmyzA&ctype=5&q=&nis=4&sqi=2&ved=2ahUKEwiPmYvhpfGEAxW_7bsIHVitDE4Q9aACKAB6BAgEEDg&adurl=',
        title: 'Honda Civic car',
        price: 100,
    },
    {
        id: 4,
        image: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj_zJbhpfGEAxU0DK0GHTN4AWMYABANGgJwdg&ase=2&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW-bAn3hHZcb1EB2ClE2M2w7RlexWG8GSNJ_wbCRJRNv8FVWMroBwVMaAgNBEALw_wcB&ei=cKPxZY-hHL_b7_UP2Nqy8AQ&ohost=www.google.com&cid=CAESVeD2eKm5LHdFtLqNqejV6QRY98mmx2n8zubStl8a_10OB2_44o992eTrC-WBSFzLy9RwZju1cXvCpHpYvqiPzDXD0a3SZ6XD5gO2R6sgnkndnZV7_iA&sig=AOD64_2X4mpBH4kSCpyte7_sd2REaHmyzA&ctype=5&q=&nis=4&sqi=2&ved=2ahUKEwiPmYvhpfGEAxW_7bsIHVitDE4Q9aACKAB6BAgEEDg&adurl=',
        title: 'Macbook ',
        price: 200,
    },
];

const categories = [...new Set(product.map(item => item.title))];

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2>
                <button onclick="addtocart(${i++})">Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({...product[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item, j) => {
            var { image, title, price } = item;
            total += price;
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowing' src=${image}>
                    </div>
                    <div>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size:15px;'>${price}.00</h2>
                        <i class='fa-solid fa-trash' onclick='delElement(${j})'></i>
                    </div>
                </div>`
            );
        }).join('');
    }
}
