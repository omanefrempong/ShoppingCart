import React,{useState} from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsCart4} from 'react-icons/bs';



function Product({dicount_price, image,price,description,id,  basket,setBasket}) {

   

const handlesubmit =()=>{

    setBasket([...basket,id])

}

  return (
    <div key={id} onClick={()=>handlesubmit(id,image)} className='flex flex-col h-70 w-60 bg-gray-100 shadow-lg rounded-lg overflow-hidden'>
        <div className='flex h-40 w-full '>
            {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEWM4u5nPImuD4tQePNxo5ATrBazCGhDT7Pg&usqp=CAU' alt="img"/> */}
            <img src={image}  alt="img" />
        </div>

        <div className='flex flex-col space-y-1.5 my-4 mx-4'>
            <div className='flex space-x-2 text-sm'>
                <p>${price}</p>
                <p className='text-gray-400 line-through '>${dicount_price}</p>
            </div>
            <div>
                <p>{description} </p>
            </div>

            <div className='flex w-full space-x-4 items-center'>
                <div className='flex bg-yellow-500 text-white items-center space-x-2 px-2 rounded-full cursor-pointer hover:bg-yellow-700'>
                    <AiFillStar/>
                    <p className='text-sm'>5.0</p>
                </div>
                <div className='text-xs text-gray-400 border-l-2 border-gray-300 pl-2'>Sold 120</div>

                <div className='bg-red-400 p-1.5 rounded-full text-white cursor-pointer hover:bg-red-700'>
                    <BsCart4 className='text-sm'/>

                </div>


            </div>


        </div>






    </div>
  )
}

export default Product