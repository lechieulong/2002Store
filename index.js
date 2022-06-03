const searchBar = document.querySelector('.search-bar');
const search = document.querySelector('.header-icon');
const remove  = document.querySelector('.cancel-icon');
const fixed = document.querySelector('.header-section')

search.addEventListener('click', () =>{
    searchBar.classList.add('is-active');
  
})
remove.addEventListener('click', () =>{
    searchBar.classList.remove('is-active');
})

//HANDLE SCROLL NAV BAR FIXED
document.addEventListener('DOMContentLoaded', () =>{
    window.addEventListener('scroll', () =>{
        if(window.scrollY > 100){
            fixed.classList.add('fixed-top');
        }else{
            fixed.classList.remove('fixed-top');
        }
    })
})