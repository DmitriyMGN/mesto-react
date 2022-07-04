import { useState, useEffect } from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main (props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardsData]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);

      setCards(cardsData)
      })
      .catch(err => {console.log(err)});
    }, [])

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
     {cards.map((item, id) => {
      return <Card card={item} key={id} onCardClick={props.onCardClick} />
     })}
      </ul>
    </section>
    </main>
  )
}

export default Main;