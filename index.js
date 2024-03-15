let search = document.querySelector('.search-box')
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active')
    menu.classList.remove('active')
}

let menu = document.querySelector('.navbar')
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active')
    search.classList.remove('active')
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})



// Mendapatkan elemen yang ingin diubah ketika di-scroll
function handleScroll() {
    let boxes = document.querySelectorAll('.cars-container .box');

    boxes.forEach(function (box) {

        let img = box.querySelector('img');
        let h2 = box.querySelector('#h2');

        if (isElementInViewport(box)) {
            img.classList.add('active')
            h2.style.display = 'block'
            h2.style.padding = '20px'
            h2.style.paddingTop = '50px'
            h2.style.bottom = 0
            h2.style.left = 0
        } else {
            img.classList.remove('active');
            h2.style.display = 'none';
        }
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 100 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial call to handleScroll to apply styles on page load
handleScroll();

































// const boxes = document.querySelectorAll('.box');
//         // Tambahkan event listener untuk setiap elemen 'box'
//         boxes.forEach(box => {
//             box.addEventListener('mouseenter', () => {
//                 // Ketika cursor masuk, tambahkan class 'triger' ke gambar
//                 box.querySelector('#img').classList.add('triger');
//             });

//             box.addEventListener('mouseleave', () => {
//                 // Ketika cursor keluar, hapus class 'triger' dari gambar
//                 box.querySelector('#img').classList.remove('triger');
//             });
//         });