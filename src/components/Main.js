import { useState, useEffect } from 'react';
import api from '../utils/api.js'

function Main (props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
    })
    .catch(err => {console.log(err)});
})

  return (
    <main>
    <section className="profile">
        <a href="##" className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}  >
        </a> 
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
          <p className="profile__activity">{userDescription}</p>
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