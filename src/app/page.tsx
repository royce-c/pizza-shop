// App.tsx
import React from 'react';
import Menu from './components/menu'; // Assuming the Menu component is in a 'components' folder

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div className="text-2xl font-bold text-gray-900">Pizza 2001 Redesign</div>
                        <nav>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Menu</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <Menu />
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; Pizza 2001</p>
            </footer>
        </div>
    );
}

export default App;
