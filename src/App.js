
import { useState } from 'react';
import Product from './components/Product';
import { BsCart4} from 'react-icons/bs';

function App() {

const [basket, setBasket]=useState([])



  return (
    <div className="flex flex-col justify-center items-center md:mx-auto bg-gray-900 min-h-screen">

      <div className=' h-8 relative  my-4  w-8'>
      <BsCart4 className='text-lg text-white'/>

      <div className='absolute -top-2 right-1 flex items-center justify-center h-4 text-center w-4 bg-orange-500 rounded-full'>

        <p className='text-white text-xs'>{basket.length}</p>
      </div>

      </div>

      <div className=' grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
      <Product
      id = '1'
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWM4u5nPImuD4tQePNxo5ATrBazCGhDT7Pg&usqp=CAU'}
      price='1,233'
      dicount_price="1000"
      description="Macbook pro 16 M1"
     
      setBasket={setBasket}
      basket={basket}


      
    />
      <Product
      id = '2'
      image={'https://techarc.pk/wp-content/uploads/2022/08/HP-Laptop-Intel-Core-i7-1260P-8GB-512GB-SSD-Intel-Graphics-15.6-FHD-IPS-Spruce-Blue-1.jpg'}
      price='5,233'
      dicount_price="2000"
      description="Hp 300 corei7"
      setBasket={setBasket}
      basket={basket}
    />
      <Product
      id = '3'
      image={'data:image/jpeg;base64,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'}
      price='1,500'
      dicount_price="1,200"
      description="iPhone 14 Pro Max"
      setBasket={setBasket}
      basket={basket}
    />
      <Product
      id = '4'
      image={'https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_NG?$jpglarge$&wid=1250'}
      price='1,00'
      dicount_price="1,400"
      description="Headphone"
      setBasket={setBasket}
      basket={basket}
    />

    </div>

    </div>
  );
}

export default App;
