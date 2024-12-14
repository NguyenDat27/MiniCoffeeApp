import { Swiper } from "zmp-ui";

const productsale = [
    {
        id: 1,
        product: "Bộ 3 Blue Corner Coffee siêu HOT",
        image: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-rect-1.webp",
        price: 25000,
        lastprice: 20000,
        type: "percent",
        sale: 0.2,
    },
    // {
    //     id: 2,
    //     product: "Combo Hi Tea Aroma",
    //     image: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-rect-2.webp",
    //     price: 57000,
    //     lastprice: 50000,
    //     type: fixed,
    //     sale: 7000,
    // },
    // {
    //     id: 3,
    //     product: "Milk Tea Combo",
    //     image: "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/product-rect-3.webp",
    //     price: 55000,
    //     lastprice: 27500,
    //     type: "percent",
    //     sale: 0.5,
    // },
]

const Recommend = () => {
  return (
    <div className='w-full h-full py-4 space-y-4'>
        <span className='px-4 text-[18px] font-medium'>Gợi ý cho bạn</span>
        <div className="w-full h-full pb-4">
            <Swiper autoplay direction="horizontal">
                {productsale.map((product) => (
                    <Swiper.Slide key={product.id}>
                        <div className="w-full">
                            <img 
                                src={product.image} alt={product.product}
                                className="w-5/6 h-full pl-4 pr-4 object-cover"
                            />
                        </div>
                    </Swiper.Slide>
                ))}
            </Swiper>
        </div>
    </div>
  );
};
export default Recommend