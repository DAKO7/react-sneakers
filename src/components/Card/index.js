function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Men sneakers Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column align-center">
          <span>Price:</span>
          <b>$300</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;