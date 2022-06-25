function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Shopping bag
          <img className="cu-p" src="/img/btn-remove.svg" alt="Remove button" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men sneakers Nike Blazer Mid Suede</p>
              <b>$300 USD</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove button" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Total:</span>
              <div></div>
              <b>$300 USD</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>$15 USD</b>
            </li>
          </ul>
          <button className="greenButton">
            Checkout <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
