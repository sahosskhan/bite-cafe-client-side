/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutFrom = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosPublic.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosPublic])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
      
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            Swal.fire({
              title: "Congrats! Your Payment Received",
              text: `Your Order Complete!✅ TransID: ${paymentIntent?.id}`,
              icon: "success",
              confirmButtonText: "Done",
          })    .then((result) => {
            if (result.isConfirmed) {
                navigate("/dashboard/payment-history");
            }
        });
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuId),
                itemNames: cart.map(item => item.name)
            }
            
            fetch("http://localhost:5000/payments", {
          method: "POST",
          headers: {
              "content-type": "application/json",
            },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
           
          })
          .catch((err) => {
            Swal.fire({
                title: "Oops",
                text: `Something went wrong ${err.message}`,
                icon: "error",
                confirmButtonText: "Done",
            })
        });
           
        }


    }
    return (
        <div className="max-w-screen-2xl lg:mb-0 mb-28 container mx-auto">

<form className="flex flex-col  justify-center items-center" onSubmit={handleSubmit}>
        <CardElement
          className="bg-amber-50 text-black w-3/4 h-10 rounded-b-none rounded-t-none pt-10 pb-14 px-6  "
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#000000",
                "::placeholder": {
                  color: "#bdbbbb",
                },
              },
              invalid: {
                color: "#eb1313",
              },
            },
          }}
        />
        <button
          type="submit"
          className="py-2 px-6 h-16 bg-amber-500 w-1/2 mt-10 rounded-xl text-center font-medium text-2xl text-black "
          disabled={!stripe || !clientSecret}
        >
          PAY NOW
        </button>
      </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </div>
    );
};

export default CheckoutFrom;