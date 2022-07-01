function PopupWithForm (props) {

  return (
    <div className={`popup popup_place_${props.name}`}>
       <div className="popup__content">
          <form noValidate action="#" name={props.name} className="popup__form">
            <h2 className={`popup__title popup__title_place_${props.name}`}>{props.title}</h2>
            <button type="button" className="popup__cross"></button>
            <button type="submit" className="popup__button">Да</button>
          </form>
        </div>
    </div>
  )
}

export default PopupWithForm;