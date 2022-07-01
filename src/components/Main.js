function Main () {
  function handleEditAvatarClick() {
    const popupAvatar = document.querySelector('.popup_place_avatar');
    popupAvatar.classList.add('popup_open')
  }

  function handleEditProfileClick() {
    const popupProfile = document.querySelector('.popup_place_profile');
    popupProfile.classList.add('popup_open')
  }

  function handleAddPlaceClick() {
    const popupNewCard = document.querySelector('.popup_place_card');
    popupNewCard.classList.add('popup_open')
  }

  return (
    <main>
    <section className="profile">
        <a href="&" className="profile__avatar" onClick={handleEditAvatarClick}>
        </a> 
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit" onClick={handleEditProfileClick}></button>
          <p className="profile__activity">Исследователь океана</p>
        </div>
      <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>
    </main>
  )
}

export default Main;