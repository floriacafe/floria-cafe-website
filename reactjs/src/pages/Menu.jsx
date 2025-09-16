import { useState, useEffect } from "react";
import Menucard from "../blocks/Menucard";
import "./menu.css";
import Loadingscreen from "../layoutpages/Loadingscreen";

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMenu, setFilteredMenu] = useState([]);

    const menuData = [
        {
            category: "Sandwiches & Burgers",
            icon: "🍔",
            items: [
                { name: "Hot Dog Sandwich", price: 99 },
                { name: "Cheese Stuffed Hot Dog", price: 119 },
                { name: "Classic Burger", price: 149 },
                { name: "Fried Chicken Sandwich", price: 139 },
                { name: "Chicken Stripes Sandwich", price: 119 }
            ]
        },
        {
            category: "Fries",
            icon: "🍟",
            items: [
                { name: "Fries", price: 49 },
                { name: "Cheese Fries", price: 49 },
                { name: "Hot Dog Fries", price: 99 },
                { name: "Chicken Ranch Fries", price: 119 },
                { name: "Burger Fries", price: 119 },
                { name: "Floria Fries", price: 129 }
            ]
        },
        {
            category: "Appetizers",
            icon: "🧀",
            items: [
                { name: "Onion Rings", price: 49 },
                { name: "Mozzarella Sticks", price: 59 },
                { name: "Mix Appetizers", price: 79 }
            ]
        },
        {
            category: "Desserts",
            icon: "🍰",
            items: [
                { name: "Cheese Cake", price: 79 },
                { name: "Honey Cake", price: 109 },
                { name: "Red Velvet", price: 109 },
                { name: "Chocolate Cake", price: 109 },
                { name: "Brownies", price: 109 },
                { name: "Molten Cake", price: 119 },
                { name: "Cheese Madness", price: 149 },
                { name: "Oreo Madness", price: 139 },
                { name: "Waffle Stick", price: 69 },
                { name: "Waffle Nutella", price: 119 },
                { name: "Waffle Lotus", price: 139 },
                { name: "Waffle Half and Half", price: 139 },
                { name: "Fruit Salad", price: 149 },
                { name: "Floria Casserole", price: 219 },
                { name: "Floria Waffle", price: 239 }
            ]
        },
        {
            category: "Hot Coffee",
            icon: "☕",
            items: [
                { name: "Turkish Coffee Single", price: 59 },
                { name: "Turkish Coffee Double", price: 69 },
                { name: "French Coffee", price: 69 },
                { name: "Hazelnut Coffee", price: 69 },
                { name: "Espresso Single", price: 59 },
                { name: "Espresso Double", price: 69 },
                { name: "Micato Single", price: 69 },
                { name: "Micato Double", price: 79 },
                { name: "Cappuccino", price: 89 },
                { name: "Latte", price: 89 },
                { name: "Mocha", price: 109 },
                { name: "Flat White", price: 109 },
                { name: "American Coffee", price: 69 },
                { name: "Cafe Lotus", price: 109 },
                { name: "Nescafe", price: 89 },
                { name: "Turkish Coffee (Elameed) Single", price: 59 },
                { name: "Turkish Coffee (Elameed) Double", price: 69 }
            ]
        },
        {
            category: "Hot Drinks",
            icon: "☕",
            items: [
                { name: "Red Tea", price: 49 },
                { name: "Green Tea", price: 49 },
                { name: "Herbal Tea", price: 69 },
                { name: "Hot Cider", price: 69 },
                { name: "Caramel Cider", price: 79 },
                { name: "Hot Chocolate", price: 89 },
                { name: "Hot Chocolate White", price: 89 },
                { name: "Hot Chocolate Nuts", price: 109 },
                { name: "Hot Gersy", price: 104 },
                { name: "Hot Cookies", price: 109 },
                { name: "Hot White Mocha", price: 109 }
            ]
        },
        {
            category: "Milk Shakes",
            icon: "🥤",
            items: [
                { name: "Classic Shake", price: 119 },
                { name: "Chocolate Shake", price: 119 },
                { name: "Mango Shake", price: 119 },
                { name: "Strawberry Shake", price: 119 },
                { name: "Oreo Shake", price: 139 },
                { name: "Red Velvet Shake", price: 149 },
                { name: "Cheesecake Shake", price: 149 },
                { name: "Snickers Shake", price: 149 },
                { name: "Waffle Shake", price: 149 }
            ]
        },
        {
            category: "Soft Drinks",
            icon: "🥤",
            items: [
                { name: "Small Water", price: 24 },
                { name: "Soft Drink", price: 49 },
                { name: "Brill", price: 59 },
                { name: "Fairuz", price: 59 },
                { name: "Red Bull", price: 89 }
            ]
        },
        {
            category: "Soda Cocktails",
            icon: "🍹",
            items: [
                { name: "Classic Mojito", price: 99 },
                { name: "Vimot Cotton Candy", price: 99 },
                { name: "Strawberry Vanilla", price: 99 },
                { name: "Blue Rise", price: 99 },
                { name: "Mango Passion Soda", price: 99 },
                { name: "Apple Breeze", price: 99 },
                { name: "Italian Soda", price: 99 },
                { name: "Sun Rise", price: 99 }
            ]
        },
        {
            category: "Cocktails",
            icon: "🍸",
            items: [
                { name: "Piña Colada", price: 119 },
                { name: "Crash Fruit", price: 119 },
                { name: "Crazy Mango", price: 119 },
                { name: "Apple Mint", price: 119 },
                { name: "Yougi Berry", price: 119 },
                { name: "Avonuts", price: 139 },
                { name: "Parsely", price: 119 },
                { name: "Pinky", price: 119 }
            ]
        },
        {
            category: "Fresh Juices",
            icon: "🍊",
            items: [
                { name: "Mango", price: 94 },
                { name: "Strawberry", price: 89 },
                { name: "Orange", price: 89 },
                { name: "Guava", price: 89 },
                { name: "Kiwi", price: 94 },
                { name: "Lemon", price: 74 },
                { name: "Lemon Mint", price: 79 },
                { name: "Youssfi", price: 89 }
            ]
        },
        {
            category: "Iced Coffee",
            icon: "❄️",
            items: [
                { name: "Ice White Mocha", price: 109 },
                { name: "Ice Dark Mocha", price: 109 },
                { name: "Ice Latte", price: 99 },
                { name: "Ice Caramel Micato", price: 99 },
                { name: "Spanish Latte", price: 99 },
                { name: "Coffee Cream Chocolate", price: 119 },
                { name: "Frappuccino", price: 104 }
            ]
        },
        {
            category: "Smoothies",
            icon: "🥤",
            items: [
                { name: "Mango", price: 99 },
                { name: "Strawberry", price: 94 },
                { name: "Peach", price: 99 },
                { name: "Watermelon", price: 99 },
                { name: "Lemon Mint", price: 84 },
                { name: "Blueberry", price: 99 },
                { name: "Raspberry", price: 94 },
                { name: "Pink Lemon", price: 99 },
                { name: "Banana Strawberry", price: 94 },
                { name: "Mango Passion", price: 109 },
                { name: "Mix Berry", price: 109 }
            ]
        }
    ];

    // Map each category to its image in /public/menupics/
    const categoryImages = {
        "Sandwiches & Burgers": "/menupics/burgers-sandwiches.png",
        "Fries": "/menupics/fries.png",
        "Appetizers": "/menupics/sticks.png",
        "Desserts": "/menupics/desserts.png",
        "Hot Coffee": "/menupics/hot-coffee.png",
        "Hot Drinks": "/menupics/hotdrinks.png",
        "Milk Shakes": "/menupics/milkshakes.png",
        "Soft Drinks": "/menupics/softdrinks.png",
        "Soda Cocktails": "/menupics/sodacocktails.png",
        "Cocktails": "/menupics/cocktails.png",
        "Fresh Juices": "/menupics/freshjuices.png",
        "Iced Coffee": "/menupics/icedcoffee.png",
        "Smoothies": "/menupics/smoothies.png",
    };

    // Filter menu items based on search term
    useEffect(() => {
        const results = menuData.map(category => {
            const filteredItems = category.items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                category.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.price.toString().includes(searchTerm)
            );

            return {
                ...category,
                items: filteredItems
            };
        }).filter(category => category.items.length > 0);

        setFilteredMenu(results);
    }, [searchTerm]);

    return (

        <>
        <Loadingscreen />
        
        <div className="menu-page">
            <header className="menu-header">
                <h1>Floria – Cafe & Lounge</h1>
            </header>

            <div
              className="model-placeholder"
              style={{ height: "60vh", minHeight: 520 }}
            >
                <model-viewer
                    src="/models_3d/floria-stand.glb"
                    alt="3D model preview"
                    camera-controls
                    auto-rotate
                    ar
                    loading="lazy"
                    shadow-intensity="1"
                    disable-zoom
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                        borderRadius: 12,
                        transform: "scale(1.1)",
                        transformOrigin: "center"
                    }}
                />
            </div>

            {/* Category filter buttons */}
            <div className="category-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "24px 0 8px" }}>
                {menuData.map((category, idx) => (
                    <button
                        key={category.category}
                        type="button"
                        className="category-btn"
                        style={{
                            padding: "8px 18px",
                            borderRadius: "20px",
                            border: "none",
                            background: "#FFD1DC",
                            color: "#333",
                            fontWeight: 600,
                            fontSize: "1rem",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                        }}
                        onClick={() => setSearchTerm(category.category)}
                    >
                        <span style={{ marginRight: 6 }}>{category.icon}</span>
                        {category.category}
                    </button>
                ))}
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="menu-content">
                {filteredMenu.map((category, index) => (
                    <section key={index} className="menu-category">
                        <h2 className="category-title">
                            <span className="category-icon">{category.icon}</span>
                            {category.category}
                        </h2>

                        <div className="menu-grid">
                            {category.items.map((item, idx) => (
                                <Menucard
                                    key={idx}
                                    title={item.name}
                                    price={item.price}
                                    category={category.category}
                                    image={categoryImages[category.category]} // add image per category
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
        </>
    );
};

export default Menu;