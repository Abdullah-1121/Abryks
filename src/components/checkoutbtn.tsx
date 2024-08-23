import { useSelector } from 'react-redux';
import getStripe from '../lib/stripe';
import clsx from 'clsx';


interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  ImageUrl: string;
}

const CheckoutButton: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems) as CartItem[];

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.sessionId) {
        const stripe = await getStripe();
        await stripe?.redirectToCheckout({ sessionId: data.sessionId });
      } else {
        console.error('Error creating Stripe session:', data.error);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <button onClick={handleCheckout} className={clsx("bg-black hover:bg-gray-600 text-white rounded-md w-full p-2 ")}>
      Checkout
    </button>
  );
};

export default CheckoutButton;
