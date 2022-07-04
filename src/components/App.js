import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import PopupWithForm  from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isPopupClose, setIsPopupClose] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsPopupClose(!isPopupClose);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      buttonText="Сохранить"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
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
      <PopupWithForm 
      name="card" 
      title="Новое место" 
      buttonText="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      >
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
      <PopupWithForm 
      name="card-delete" 
      title="Вы уверены?" 
      buttonText="Да" 
      />
      <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      buttonText="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <ImagePopup
      onClose={closeAllPopups}
      card={selectedCard}
      />
    </div>
  );
}

export default App;
