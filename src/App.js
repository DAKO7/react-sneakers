import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartResponse, favoriteResponse] = await Promise.all([
          axios.get('http://62bc5ee36b1401736cf90dfe.mockapi.io/items'),
          axios.get('http://62bc5ee36b1401736cf90dfe.mockapi.io/cart'),
          axios.get('http://62bc5ee36b1401736cf90dfe.mockapi.io/favorites'),
        ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Data from server error :(');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`http://62bc5ee36b1401736cf90dfe.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('http://62bc5ee36b1401736cf90dfe.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Unable to add to cart');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`http://62bc5ee36b1401736cf90dfe.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Unable to remove item from cart');
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    console.log(obj);
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`http://62bc5ee36b1401736cf90dfe.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'http://62bc5ee36b1401736cf90dfe.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Unable to add to favorites');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path=""
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
            exact
          />
          <Route path="/favorites" element={<Favorites />} exact />
          <Route path="/orders" element={<Orders />} exact />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
