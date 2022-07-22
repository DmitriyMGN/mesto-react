import { useState, useEffect, useContext} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import Card from './Card.js';

function Main (props) {
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 


function handleCardDelete(card) {
  api.deleteCard(card._id)
  .then(setCards((state) => state.filter((c) => c._id !== card._id )))
  }


  useEffect(() => {
     api.getInitialCards()
    .then((cardsData) => {
      setCards(cardsData)
      })
      .catch(err => {console.log(err)});
    }, [])

  return (
    <main>
    <section className="profile">
        <a href="##" className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }}  >
        </a> 
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
          <p className="profile__activity">{currentUser.about}</p>
        </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
     {cards.map((item) => {
      return <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
     })}
      </ul>
    </section>
    </main>
  )
}

export default Main;