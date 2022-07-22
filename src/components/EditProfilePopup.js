import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
  );
}

export default EditProfilePopup;
