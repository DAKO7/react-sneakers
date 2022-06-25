import Header from './components/Header';
import Drawer from './components/Drawer/index';
import Card from './components/Card/index';

const arr = [
  { name: 'Name of the sneakers', price: 300, image: '/img/sneakers/1.jpg' },
  { name: 'Name of the sneakers 2', price: 200, image: '/img/sneakers/2.jpg' },
  { name: 'Name of the sneakers 2', price: 200, image: '/img/sneakers/3.jpg' },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneaker</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.name} price={obj.price} imageUrl={obj.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
