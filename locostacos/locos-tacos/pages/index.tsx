import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Menu data
const menuItems = [
  { id: 1, name: 'Classic Taco', description: 'Beef, lettuce, cheese, salsa', price: 3.99 },
  { id: 2, name: 'Veggie Taco', description: 'Grilled veggies, avocado, cilantro', price: 3.49 },
  { id: 3, name: 'Burrito Supreme', description: 'Chicken, rice, beans, cheese, guac', price: 7.99 },
  { id: 4, name: 'Quesadilla', description: 'Cheese, chicken, peppers', price: 6.49 },
  { id: 5, name: 'Mexican Style Taco', description: 'Onions and cilantro, corn or flour tortilla', price: 3.29 },
  { id: 6, name: 'American Style Taco', description: 'Sour cream, cheese, lettuce, tomatoes, corn or flour tortilla', price: 3.49 },
  { id: 7, name: "Special's Barbacoa", description: 'Barbacoa meat, cheese, cilantro, onions in a crunchy tortilla, served with consome', price: 4.99 },
];

// Types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle Stripe checkout
  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-custom-lime">
      <Head>
        <title>Loco's Tacos</title>
        <meta name="description" content="Loco's Tacos - Order delicious tacos online!" />
      </Head>
      <Script src="https://js.stripe.com/v3/" strategy="lazyOnload" />

      {/* EXAMPLE Header */}
      <h1 className="text-5xl font-bold text-center text-black pt-4">EXAMPLE</h1>

      {/* Header */}
      <header className="bg-custom-lime text-black p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Loco's Tacos</h1>
          <nav>
            <button
              className="mr-4 bg-custom-lime text-black px-4 py-2 rounded hover:bg-custom-lime/90"
              onClick={() => scrollToSection('menu')}
            >
              Menu
            </button>
            <button
              className="bg-custom-lime text-black px-4 py-2 rounded hover:bg-custom-lime/90"
              onClick={() => scrollToSection('cart')}
            >
              Cart ({cart.length})
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-custom-lime text-black text-center py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to Loco's Tacos!</h2>
          <p className="text-lg mb-4">2307 E Main St, Kalamazoo, MI 49048</p>
          <p className="text-lg mb-4">Phone: (269) 532-1473</p>
          <p className="text-lg">Dine-in or Pickup In-Store</p>
          <button
            className="mt-4 bg-custom-lime text-black px-6 py-2 rounded hover:bg-custom-lime/90"
            onClick={() => scrollToSection('menu')}
          >
            Order Now
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 bg-custom-lime">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold text-black">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-lg font-bold text-black mt-2">${item.price.toFixed(2)}</p>
                <button
                  className="mt-4 bg-custom-lime text-black px-4 py-2 rounded hover:bg-custom-lime/90"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section id="cart" className="py-12 bg-custom-lime">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-8">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-center text-lg text-black">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white p-4 mb-4 rounded shadow"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    className="bg-custom-lime text-black px-4 py-2 rounded hover:bg-custom-lime/90"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="text-right">
                <p className="text-xl font-bold text-black">Total: ${calculateTotal()}</p>
                <button
                  className="mt-4 bg-custom-lime text-black px-6 py-2 rounded hover:bg-custom-lime/90"
                  onClick={handleCheckout}
                >
                  Checkout with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-custom-lime text-black p-4 text-center">
        <h1 className="text-5xl font-bold text-black mb-4">EXAMPLE</h1>
        <p>© 2025 Loco's Tacos Example Website.</p>
        <p>2307 E Main St, Kalamazoo, MI 49048 | (269) 532-1473</p>
      </footer>
    </div>
  );
}