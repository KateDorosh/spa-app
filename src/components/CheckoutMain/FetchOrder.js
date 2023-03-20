import axios from './axios';

export const getOrder = (setOrder) => {
    axios.get('/')
    .then(({data}) => {
        console.log('getOrder frontend', data)
        setOrder(data)
    }).catch((err) => console.log('getOrder front err', err))
}


export const sendData = (firstName, setFirstName, lastName, setLastName, email, setEmail, tel, setTel, cartItems ) => {
    axios.post(`/booking`, { firstName, lastName, email, tel, cartItems })
    .then(({data}) => {
        console.log('axios sendData', data);
        setFirstName('');
        setLastName('');
        setEmail('');
        setTel('');
    }).catch((err) => console.log('sentData err', err))
}


