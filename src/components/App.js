import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import PopupWithForm  from './PopupWithForm.js'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" />
      <PopupWithForm name="card" title="Новое место" />
      <PopupWithForm name="card-delete" title="Вы уверены?" />
      <PopupWithForm name="avatar" title="Обновить аватар" />
  <template className="template">
    <li className="elements__item">
      <img className="elements__image" alt="" />
      <button type="button" className="elements__remove"></button>
      <div className="elements__info">
        <h3 className="elements__title">
        </h3>
          <div>
            <button type="click" className="elements__like"></button>
            <p className="elements__like-count">
            </p>
          </div>

      </div>
    </li>
  </template>
  <div className="popup popup_place_profile">
    <div className="popup__content">
      <h2 className="popup__title">Редактировать профиль</h2>
      <button type="button" className="popup__cross"></button>
        <form noValidate action="#" name="popup" className="popup__form">
          <div className="popup__position-container">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text" 
            id="person" 
            name="person" 
            placeholder="Имя" 
            className="popup__input popup__input_place_name" />
            <span className="popup__error person-error"></span>
          </div>
          <div className="popup__position-container">
            <input
            required
            minLength="2"
            maxLength="200" 
            type="text" 
            id="job" 
            name="job" 
            placeholder="Профессиональная деятельность" 
            className="popup__input popup__input_place_activity" />
            <span className="popup__error job-error"></span>
          </div>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
    </div>
    </div>
    <div className="popup popup_place_card">
      <div className="popup__content">
        <h2 className="popup__title">Новое место</h2>
        <button type="button" className="popup__cross"></button>
          <form noValidate action="#" name="popup" className="popup__form">
            <div className="popup__position-container">
            <input
              required
              minLength="2"
              maxLength="30"  
              type="text" 
              id="name" 
              name="name" 
              placeholder="Название" 
              className="popup__input popup__input_place_card-name" />
              <span className="popup__error name-error"></span>
            </div>
            
            <div className="popup__position-container">
              <input 
              required
              type="url" 
              id="link" 
              name="link" 
              placeholder="Ссылка на картинку" 
              className="popup__input popup__input_place_card-link" />
              <span className="popup__error link-error"></span>
            </div>
            <button type="submit" className="popup__button">Создать</button>
          </form>
      </div>
    </div>
      <div className="popup popup_place_card-image">
        <div className="popup__content popup__content_card-image">
          <button type="button" className="popup__cross"></button>
          <img className="popup__card-image" alt="" />
          <p className="popup__caption"></p>
        </div>
      </div>
      <div className="popup popup_place_card-delete">
        <div className="popup__content">
          <form noValidate action="#" name="popup" className="popup__form">
            <h2 className="popup__title popup__title_place_card-delete">Вы уверены?</h2>
            <button type="button" className="popup__cross"></button>
            <button type="submit" className="popup__button">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_place_avatar">
        <div className="popup__content">
          <form noValidate action="#" name="popup" className="popup__form">
            <h2 className="popup__title">Обновить аватар</h2>
            <div className="popup__position-container">
              <input 
              required
              type="url" 
              id="avatar" 
              name="avatar" 
              placeholder="Ссылка на картинку" 
              className="popup__input popup__input_place_card-link" />
              <span className="popup__error avatar-error"></span>
            </div>
            <button type="button" className="popup__cross"></button>
            <button type="submit" className="popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      </div>
  );
}

export default App;
