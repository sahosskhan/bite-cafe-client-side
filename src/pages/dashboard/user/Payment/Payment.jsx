import { loadStripe } from "@stripe/stripe-js";
import HeadingTitle from "../../../../components/template/HeadingTitle";
import useCarts from "../../../../hooks/useCarts";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    const [cart] = useCarts();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
              <HeadingTitle text={{ short: 'Please pay to eat', long: 'PAYMENT HERE' }} />
            <div className="flex justify-center items-center lg:my-[381px]">
            <Elements stripe={stripePromise}>
              <CheckoutFrom  cart={cart} price={price}/>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;