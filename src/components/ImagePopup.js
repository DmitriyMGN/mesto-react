function ImagePopup () {
  return (
    <div className="popup popup_place_card-image">
      <div className="popup__content popup__content_card-image">
        <button type="button" className="popup__cross"></button>
        <img className="popup__card-image" alt="" />
        <p className="popup__caption"></p>
      </div>
    </div>
  )
}

export default ImagePopup;