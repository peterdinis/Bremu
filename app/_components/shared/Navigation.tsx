"use client"

import { FC, useState } from "react";
import { Heart, User, Menu, Search, ShoppingCart, Home, Truck, Package, Gift } from "lucide-react";

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
                        className="lg:hidden"
                    >
                        <Menu size={24} />
                    </button>

                    <div className="text-2xl font-bold">Bremu</div>

                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full py-2 px-4 pr-10 rounded-full text-gray-900 focus:outline-none"
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-6">
                        <button className="flex items-center">
                            <Heart size={24} />
                        </button>
                        <button className="flex items-center">
                            <ShoppingCart size={24} />
                        </button>
                        <button className="flex items-center">
                            <User size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                    <div className="bg-white w-64 h-full">
                        <div className="p-4 border-b">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-500"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="space-y-4">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategoryClick(category.id)}
                                        className={`flex items-center space-x-3 w-full ${selectedCategory === category.id ? 'text-[#ff2b43]' : 'text-gray-600 hover:text-[#ff2b43]'
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