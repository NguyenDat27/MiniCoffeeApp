
const Categories = () => {
    

    const categories = [
        {
            "id": "coffee",
            "name": "Cà phê",
            "icon": "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-coffee.svg"
        },
        {
            "id": "matcha",
            "name": "Trà xanh",
            "icon": "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-matcha.svg"
        },
        {
            "id": "food",
            "name": "Đồ ăn vặt",
            "icon": "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-food.svg"
        },
        {
            "id": "milktea",
            "name": "Trà sữa",
            "icon": "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-milktea.svg"
        },
        {
            "id": "drinks",
            "name": "Giải khát",
            "icon": "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-drinks.svg"
        },
        {
            "id": "bread",
            "name": "Bánh mỳ",
            "icon": "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-bread.svg"
        },
        {
            "id": "juice",
            "name": "Nước ép",
            "icon": "https://stc-zmp.zadn.vn/templates/zaui-coffee/dummy/category-juice.svg"
        }
    ]

    return (
        <div className="bg-white grid grid-cols-4 gap-4 p-4">
            {categories.length > 0 ? (
                categories.map((category, i) => (
                    <div key={i} className="flex flex-col space-y-2 items-center">
                        <img className="w-12 h-12" src={category.icon} alt={category.name} />
                        <span className="text-sm text-gray-500">{category.name}</span>
                    </div>
                ))
            ) : (
                <div>Không có danh mục nào</div>
            )}
        </div>
    );
};

export default Categories;
