import styles from './Drawer.module.scss';

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Shopping bag
          <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className={styles.items}>
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  {/* <img className="cartItemImg" src={obj.imageUrl} alt="Sneakers" /> */}
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>${obj.price} USD</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove button"
                  />
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul className={styles.cartTotalBlock}>
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
              <button className={styles.greenButton}>
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={'120px'}
              height={'120px'}
              src="/img/empty-cart.jpg"
              alt="Empty cart"
            />
            <h2>The cart is empty</h2>
            <p className="opacity-6">Add at least one pair of sneakers, to make an order</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="arrow" />
              Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
