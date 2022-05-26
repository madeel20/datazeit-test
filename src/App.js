import './App.css';
import MyChart from './MyChart';
import { useEffect, useState } from 'react';
import DataTable from './DataTable';

function App() {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((data) => setProducts(data?.products || []));
  },[]);

  console.log(products);

  return (
    <div className="App">
      <MyChart products={products}/>

      <DataTable  products={products}/>
    </div>
  );
}

export default App;
