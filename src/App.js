import mestoLogo from './images/header__logo.svg'

function App() {
  return (
    <body class="page">
      <header class="header">
        <img src={mestoLogo} alt="Картинка логотипа Место" class="header__logo" />
      </header>
  <main>
    
  <section class="profile">
      <a href="#" class="profile__avatar"></a> 
      <div class="profile__info">
        <h1 class="profile__name">Жак-Ив Кусто</h1>
        <button type="button" class="profile__edit"></button>
        <p class="profile__activity">Исследователь океана</p>
      </div>
    <button type="button" class="profile__add-button"></button>
  </section>
  <section class="elements">
    <ul class="elements__list">
    </ul>
  </section>
  </main>
  <footer class="footer">
    <p class="footer__copyright">© 2020 Mesto Russia</p>
  </footer>
  <template class="template">
    <li class="elements__item">
      <img class="elements__image" />
      <button type="button" class="elements__remove"></button>
      <div class="elements__info">
        <h3 class="elements__title"></h3>
          <div>
            <button type="click" class="elements__like"></button>
            <p class="elements__like-count"></p>
          </div>

      </div>
    </li>
  </template>
  <div class="popup popup_place_profile">
    <div class="popup__content">
      <h2 class="popup__title">Редактировать профиль</h2>
      <button type="button" class="popup__cross"></button>
        <form novalidate action="#" name="popup" class="popup__form">
          <div class="popup__position-container">
          <input
            required
            minlength="2"
            maxlength="40"
            type="text" 
            id="person" 
            name="person" 
            placeholder="Имя" 
            class="popup__input popup__input_place_name" />
            <span class="popup__error person-error"></span>
          </div>
          <div class="popup__position-container">
            <input
            required
            minlength="2"
            maxlength="200" 
            type="text" 
            id="job" 
            name="job" 
            placeholder="Профессиональная деятельность" 
            class="popup__input popup__input_place_activity" />
            <span class="popup__error job-error"></span>
          </div>
          <button type="submit" class="popup__button">Сохранить</button>
        </form>
    </div>
    </div>
    <div class="popup popup_place_card">
      <div class="popup__content">
        <h2 class="popup__title">Новое место</h2>
        <button type="button" class="popup__cross"></button>
          <form novalidate action="#" name="popup" class="popup__form">
            <div class="popup__position-container">
            <input
              required
              minlength="2"
              maxlength="30"  
              type="text" 
              id="name" 
              name="name" 
              placeholder="Название" 
              class="popup__input popup__input_place_card-name" />
              <span class="popup__error name-error"></span>
            </div>
            
            <div class="popup__position-container">
              <input 
              required
              type="url" 
              id="link" 
              name="link" 
              placeholder="Ссылка на картинку" 
              class="popup__input popup__input_place_card-link" />
              <span class="popup__error link-error"></span>
            </div>
            <button type="submit" class="popup__button">Создать</button>
          </form>
      </div>
    </div>
      <div class="popup popup_place_card-image">
        <div class="popup__content popup__content_card-image">
          <button type="button" class="popup__cross"></button>
          <img class="popup__card-image" />
          <p class="popup__caption"></p>
        </div>
      </div>
      <div class="popup popup_place_card-delete">
        <div class="popup__content">
          <form novalidate action="#" name="popup" class="popup__form">
            <h2 class="popup__title popup__title_place_card-delete">Вы уверены?</h2>
            <button type="button" class="popup__cross"></button>
            <button type="submit" class="popup__button">Да</button>
          </form>
        </div>
      </div>
      <div class="popup popup_place_avatar">
        <div class="popup__content">
          <form novalidate action="#" name="popup" class="popup__form">
            <h2 class="popup__title">Обновить аватар</h2>
            <div class="popup__position-container">
              <input 
              required
              type="url" 
              id="avatar" 
              name="avatar" 
              placeholder="Ссылка на картинку" 
              class="popup__input popup__input_place_card-link" />
              <span class="popup__error avatar-error"></span>
            </div>
            <button type="button" class="popup__cross"></button>
            <button type="submit" class="popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      </body>
  );
}

export default App;
