function Main (props) {

  return (
    <main>
    <section className="profile">
        <a href="##" className="profile__avatar" onClick={props.onEditAvatar} >
        </a> 
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
          <p className="profile__activity">Исследователь океана</p>
        </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>
    </main>
  )
}

export default Main;