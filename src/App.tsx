import { Product } from './components/Product';
import {Error} from './components/Error'
import { useProducts } from './hooks/products';
import { Loader } from './components/Loader';

function App() {
  const { loading, error, products} = useProducts()
  
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <Error error={ error} />}
      {products.map(product => <Product product={product} key={product.id}></Product>)}
   </div>
 )
}

export default App;

//TODO continue at:
// https://youtu.be/OJ16BaPC6VI?t=3810


