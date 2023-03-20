import cls from './Booking.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCartItems, getCost } from '../redux/cartSlice';
import { sendData, getOrder } from './FetchOrder';
import { useAuth0 } from "@auth0/auth0-react";

export const Booking = () => {
    const cartItems = useSelector(getCartItems);
    const cost = useSelector(getCost);
    const { isAuthenticated } = useAuth0();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [order, setOrder] = useState([]);

    let itemID;
    let serviceTitle;
    let itemsQuantity;
    

    useEffect(() => {
        getOrder(setOrder);
    }, [])

    console.log(cartItems);

    return (
        <section className={ cls.container }>
            <p className={ cls.heading }>BILLING DETAILS</p>
            <form method='POST' action='/booking'>
                <div>
                    <input type="text" name='firstName' placeholder='First name' />
                    <input type="text" name='lastName' placeholder='Last name' />
                    <input type="email" name='email' placeholder='Email' />
                    <input type="tel" name='tel' placeholder='Phone' />
                </div>
                <div>
                    {cartItems.map((item, i) => {
                        const { id, title, quantity } = item;
                        itemID = id;
                        serviceTitle = title;
                        itemsQuantity = quantity;
                        console.log(itemID, serviceTitle, itemsQuantity)

                        return (
                            <div key={ i } className={ cls.final_cart }>
                                <p>{ i + 1 }</p>
                                <p>{ title }</p>
                                <span>{ quantity }</span>
                            </div>
                        )
                    })}
                </div>

                <button type='submit' className={ cls.pay_btn }
                onClick={ () => sendData(firstName, setFirstName, lastName, setLastName, email, setEmail, tel, setTel, 
                    // cartItems
                    // itemID, serviceTitle, itemsQuantity 
                    ) }
                >
                    Send data & pay { cost !== 0 && (isAuthenticated ? `(-$${cost*0.9})` : `(-$${cost*0.1})`) }
                </button>
            </form>
        </section>
    )
}