function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
  <li className="elements__item">
    <img className="elements__image" alt={props.card.name} src={props.card.link} />
    <button type="button" className="elements__remove"></button>
    <div className="elements__info">
      <h3 className="elements__title">{props.card.name}</h3>
      <div>
        <button type="click" className="elements__like"></button>
        <p className="elements__like-count">{props.card.likes.length}</p>
      </div>
    </div>
  </li>
  )
}

export default Card;
