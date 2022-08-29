'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    /*request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
          console.log(request.response);
          const data = JSON.parse(request.response);
          inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
    
        }
    });*/

});


  // const btnMobOpen = document.querySelector('[data-btn-open-mob]');
    //
    // btnMobOpen.addEventListener('click', () => {
    //     searchBlock.classList.add('is-visible-search');
    //     body.classList.add('overflow-mob');
    // });




     // inputs.forEach((input) => {
    //     input.addEventListener('input', () => {
    //         // const username = document.querySelector('[data-validate-field]').value;
    //         // const url = '/glassagram/account-search?username=yuli' + username;
    //         const url = 'http://localhost:4000/glassagram/insta.json';
    //
    //         if (window.innerWidth > 768) {
    //             // if (isValidUrl(input.value)) {
    //             request.open('Get', url);
    //             searchBlock.classList.add('is-visible-search');
    //             body.classList.add('overflow-mob');
    //             loader();
    //             modalSearchItemBtns.forEach((modalSearchItemBtn) => {
    //                 modalSearchItemBtn.addEventListener('click', function () {
    //                     modalNewDiscount.open('modal-new-discount');
    //                     document.querySelector('[data-search-menu]').classList.remove('is-visible-search-menu');
    //                 });
    //             });
    //             request.send();
    //             // } else {
    //             //     searchBlock.classList.remove('is-visible-search');
    //             //     body.classList.remove('overflow-mob');
    //             // }
    //         } else {
    //             // if (isValidUrl(input.value)) {
    //             request.open('Get', url);
    //             searchBlock.classList.add('is-visible-search');
    //             body.classList.add('overflow-mob');
    //             loader();
    //             modalSearchItemBtns.forEach((modalSearchItemBtn) => {
    //                 modalSearchItemBtn.addEventListener('click', function () {
    //                     modalNewDiscount.open('modal-new-discount');
    //                     document.querySelector('[data-search-menu]').classList.remove('is-visible-search-menu');
    //                 });
    //             });
    //             request.send();
    //             // } else {
    //             //     body.classList.remove('overflow-mob');
    //             // }
    //         }
    //     });
    // });