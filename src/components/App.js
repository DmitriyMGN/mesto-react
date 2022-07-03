import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import PopupWithForm  from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState('false');



  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector('.popup_place_avatar');
    popupAvatar.classList.add('popup_open')

  }

  function handleEditProfileClick() {
    // const popupProfile = document.querySelector('.popup_place_profile');
    // popupProfile.classList.add('popup_open')
    setIsEditProfilePopupOpen(true)

  }

  function handleAddPlaceClick() {
    const popupNewCard = document.querySelector('.popup_place_card');
    popupNewCard.classList.add('popup_open')
  }


  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
      <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      buttonText="Сохранить"
      isOpen={isEditProfilePopupOpen}
      >
        <div className="popup__position-container">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            id="person"
            name="person"
            placeholder="Имя"
            className="popup__input popup__input_place_name"
          />
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
            className="popup__input popup__input_place_activity"
          />
          <span className="popup__error job-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" buttonText="Создать">
        <div className="popup__position-container">
          <input
            required
            minLength="2"
            maxLength="30"
            type="text"
            id="name"
            name="name"
            placeholder="Название"
            className="popup__input popup__input_place_card-name"
          />
          <span className="popup__error name-error"></span>
        </div>
        <div className="popup__position-container">
          <input
            required
            type="url"
            id="link"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_place_card-link"
          />
          <span className="popup__error link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name="card-delete" title="Вы уверены?" buttonText="Да" />
      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить">
        <div className="popup__position-container">
          <input
            required
            type="url"
            id="avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_place_card-link"/>
          <span className="popup__error avatar-error"></span>
        </div>
        <button type="button" className="popup__cross"></button>
      </PopupWithForm>
      <ImagePopup />

      <template className="template">
        <li className="elements__item">
          <img className="elements__image" alt="" />
          <button type="button" className="elements__remove"></button>
          <div className="elements__info">
            <h3 className="elements__title">

            </h3>
            <div>
              <button type="click" className="elements__like"></button>
              <p className="elements__like-count"></p>
            </div>
          </div>
        </li>
      </template>
      
    </div>
  );
}

export default App;
