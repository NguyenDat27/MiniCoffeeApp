import { Swiper } from "zmp-ui";

const Banner = () => {
    const list = [
        "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/banner-1.webp",
        // "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/banner-2.webp",
        // "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/banner-3.webp",
        // "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/banner-4.webp",
        // "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/banner-5.webp",
    ];

    return (
        <div className="w-full h-full pb-4">
            <Swiper autoplay direction="horizontal">
                {list.map((image) => (
                    <Swiper.Slide key={image}>
                        <img 
                            src={image} alt={image}
                            className="w-full h-full pl-4 pr-4 object-cover"
                        />
                    </Swiper.Slide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
