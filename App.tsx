import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Counter from './src/Counter';


//store: Global olarak saklamak istediğimiz verileri oluşturduğumuz depo alanı

//reducer: Global verileri güncellediğimiz fonksiyonlar bütünü

//provider: Component’lerimizi sarmallayan (bir nevi yöneten) context bileşeni


const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    
  );
};


export default App;
