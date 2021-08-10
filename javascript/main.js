"use strict"

const jobSearch = document.querySelector('.searchJob');
const jobCards = document.querySelectorAll('.jobCard');
const headers = document.querySelectorAll('header');

let previousScrollY = window.scrollY;

window.addEventListener('scroll', e =>{
    let firstHeader = headers[0];
    let secondHeader = headers[1]

    if(window.scrollY - previousScrollY > 0){
        // the scroll direction is downward
        if(window.scrollY >= 100){
            if(firstHeader.classList.contains('shown')){
                firstHeader.classList.remove('shown');    
            }else secondHeader.classList.remove('shown')
        }
    }else{
        // the user is about to scroll to the top
        if(window.scrollY <= 10){
            secondHeader.classList.remove('shown');
            firstHeader.classList.add('shown');
        }else{
            firstHeader.classList.remove('shown');
            secondHeader.classList.add('shown');
        }
    }

    //replace the previous scroll position with the current one
    previousScrollY = window.scrollY;

    if(window.scrollY < 900){
        document.querySelectorAll('section').forEach(section => section.classList.add('green'));
    }else if(window.scrollY >= 1200){
        document.querySelectorAll('section').forEach(section => section.classList.remove('green'));
    }
})


jobSearch.querySelector('input').addEventListener('focusin', e =>{
    jobSearch.querySelector('#searchIcon').src = 'assets/search.svg'
    jobSearch.classList.add('focusedin');
});

jobSearch.querySelector('input').addEventListener('focusout', e =>{
    jobSearch.querySelector('#searchIcon').src = 'assets/search-light.svg'
    jobSearch.classList.remove('focusedin');
});

jobCards.forEach(jobCard => jobCard.addEventListener('mouseenter', e =>{
    console.log('the mouse over');
    document.querySelector('.jobCardsContainer').style.animationPlayState = 'paused';
}));

jobCards.forEach(jobCard => jobCard.addEventListener('mouseleave', e =>{
    document.querySelector('.jobCardsContainer').style.animationPlayState = 'running';
}));

const section2Details = document.querySelectorAll('.section-2__details');
const tabButtons = document.querySelectorAll('.tab-button')
tabButtons.forEach((button, index) => button.addEventListener('click', (e) => section2Animation(index, e)))
    
function section2Animation(index, event){
    section2Details.forEach(node => node.classList.add('d-none'));
    section2Details[index].classList.remove('d-none');
    tabButtons.forEach(button => button.classList.remove('active'))
    event.currentTarget.classList.add('active');
}
