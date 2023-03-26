import { Search } from "./Search.js";
const d = document;

export const Header = () => {
    const $header = document.createElement('header');
    $header.classList.add('header');
    $header.innerHTML = `
    <div class="header__container">
                <div class="header__logo__container">
                    <img class="header__logo" src="./app/assets/food-proyect-logo.svg" alt="header-icon">
                    <p class="header__logo__text">
                        Amicci Food
                    </p>
                </div>

                <nav class="nav">
                    <a class="nav__link" href="#">
                        <img class="nav__icon" src="./app/assets/recipes.svg" alt="menu icon">
                        <span>Recipes</span> 
                    </a>
                    <a class="nav__link" href="#">
                        <img class="nav__icon" src="./app/assets/fridge.svg" alt="fridge icon">
                        <span>Fridge</span>
                    </a>
                    <a class="nav__link" href="#">
                        <img class="nav__icon" data-name="nav-loop-1" src="./app/assets/loop.svg" alt="search icon">
                    </a>
                </nav>

                <div class="header__menu">
                    <i class="fa-solid fa-bars"></i>
                </div>

                <div class="modal-nav__background">
                    <nav class="modal-nav">
                        <div class="modal-nav__close">
                           <i class="fa-regular fa-circle-xmark"></i> 
                        </div>
                      <div class="modal-nav__items">
                        <form class="modal-nav__search">
                            <input class="modal-nav__input" type="text">
                            <button class="modal-nav__btn" type="submit">
                                <img src="./app/assets/loop.svg" alt="search icon">
                            </button>
                        </form>
                        <a class="modal-nav__link" href="#">
                            <img class="modal-nav__icon" src="./app/assets/recipes.svg" alt="menu icon">
                            <span>Recipes</span> 
                        </a>
                        <a class="modal-nav__link" href="#">
                            <img class="modal-nav__icon" src="./app/assets/fridge.svg" alt="fridge icon">
                            <span>Fridge</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div class="search-screen__background">
                    <form class="search-screen__form">
                        <input class="search-screen__input" type="text">
                        <button class="search-screen__btn" type="submit">
                        <img src="./app/assets/loop-white.svg" alt="search icon">
                    </button> 
                    </form>
                  </div>
            </div>
    `;

    d.addEventListener('click', e => {
        if (e.target.matches('.fa-bars')){
            d.querySelector('.modal-nav__background').classList.add('move-x')
        }
        if (e.target.matches('.fa-circle-xmark')){
            d.querySelector('.modal-nav__input').value = '';
            d.querySelector('.modal-nav__background').classList.remove('move-x');
        }
        if (e.target.matches('[data-name="nav-loop-1"]')){
            d.querySelector('.search-screen__background').classList.add('d-flex');
        }
        if (e.target.matches('.search-screen__background')){
            d.querySelector('.search-screen__input').value = '';
            e.target.classList.remove('d-flex');
        }
        console.log(e.target)
    })

    return $header;
}