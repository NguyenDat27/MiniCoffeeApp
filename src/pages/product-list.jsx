import products from "../data/products.json"

const ProductList = () => {
  return (
    <div className='w-full py-4 space-y-4'>
        <span className='px-4 text-[18px] font-medium'>Danh sách sản phẩm</span>
        <div className="grid grid-cols-2 gap-4 px-4">
            {products.map((product) => (
                <div key={product.id} className="space-y-2">
                    <div className="aspect-square relative mb-2">
                        <img 
                            loading="lazy"
                            src={product.image}
                            className = "absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg"
                        />
                    </div>
                    <span className="text-sm block">{product.name}</span>
                    <span className="text-[12px] leading-[16px] pb-2 text-gray-400 block">{new Intl.NumberFormat('vi-VN').format(product.price)} đ</span>
                </div>
            ))}
        </div>
    </div>
  );
}

export default ProductList 
