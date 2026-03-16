import React from 'react'

const ProductCard = ({product, deleteProduct}) => {
  return (
    <div className="w-[360px] h-full flex flex-col gap-4 text-white border p-5 rounded-md">
      {/* Updated inner layout to keep spacing consistent */}
      {/* Fixed aspect ratio so all cards stay the same height */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src={product.image} alt="" />
      </div>
      {/* Make details block fill space so button aligns at bottom */}
      <div className="flex flex-1 flex-col gap-2 text-base">
        {/* Clamp title to keep all cards the same height */}
        <p className="text-lg font-semibold line-clamp-2 min-h-[3rem]">{product.title}</p>
        <p className="text-lg font-bold text-green-500">₹{product.price}</p>
        <p className="text-md font-medium text-gray-300 capitalize">{product.category}</p>
      </div>
      {/* Keep the button aligned at the bottom */}
      <button onClick ={()=>{
        deleteProduct(product.id)
      }} className="mt-2 w-full rounded-xl bg-red-700 p-3 text-lg font-bold">
        Remove this
      </button>
    </div>
  )
}

export default ProductCard
