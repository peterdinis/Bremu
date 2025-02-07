"use client"

import { FC, useState } from "react";
import { Heart, User, Menu, Search, ShoppingCart, Home, Truck, Package, Gift, X } from "lucide-react";

const categories = [
    { id: 'home', name: 'Home & Living', icon: <Home size={20} /> },
    { id: 'fashion', name: 'Fashion', icon: <Package size={20} /> },
    { id: 'electronics', name: 'Electronics', icon: <Truck size={20} /> },
    { id: 'gifts', name: 'Gifts', icon: <Gift size={20} /> },
];


const Navigation: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-[#ff2b43] text-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden transition-transform duration-200 hover:scale-110"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="text-2xl font-bold hover:scale-105 transition-transform duration-200">Bremu</div>

                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full py-2 px-4 pr-10 rounded-full text-gray-900 focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-[#ff2b43] focus:ring-opacity-50"
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <button className="transition-transform duration-200 hover:scale-110">
                            <Heart size={24} />
                        </button>
                        <button className="transition-transform duration-200 hover:scale-110">
                            <ShoppingCart size={24} />
                        </button>
                        <button className="transition-transform duration-200 hover:scale-110">
                            <User size={24} />
                        </button>
                    </div>
                </div>
            </div>
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-8 overflow-x-auto py-4 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryClick(category.id)}
                                className={`category-btn flex flex-col items-center min-w-[80px] ${selectedCategory === category.id ? 'text-[#ff2b43] active' : 'text-gray-600 hover:text-[#ff2b43]'
                                    }`}
                            >
                                {category.icon}
                                <span className="text-sm mt-1">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden mobile-menu-overlay">
                    <div className="bg-white w-64 h-full mobile-menu">
                        <div className="p-4 border-b">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-500 transition-transform duration-200 hover:scale-110"
                            >
                                <X />
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="space-y-4">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategoryClick(category.id)}
                                        className={`flex items-center space-x-3 w-full transition-all duration-200 hover:translate-x-2 ${selectedCategory === category.id ? 'text-[#ff2b43]' : 'text-gray-600 hover:text-[#ff2b43]'
                                            }`}
                                    >
                                        {category.icon}
                                        <span>{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navigation