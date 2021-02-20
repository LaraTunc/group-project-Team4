import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { CartSummary, CartButton } from './CartComponents';
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from '../actions';

const Checkout = ()=>{
    const history = useHistory();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '', 
        streetAddress: '',
        city:'',
        zipCode:'',
        country:'',
        province:'',
        nameOnCard:'',
        cardNo:'',
        Exp:'',
        SecNo:'',
    });
    const [formError, setFormError] = useState('');

    const cart = useSelector((state) => state.myCartReducer);

    const dispatch = useDispatch();

    // Check for empty fields in the entered form data
    // If there are empty fields, push an error 
    const handleClickFunction = (ev)=>{
        ev.preventDefault();
        const formDataArray = Object.values(formData); 
        const emptyField = formDataArray.filter((item)=>{
            return item==='';
        });
        if(emptyField.length>0) {
            setFormError("Please fill all the fields to proceed.");
        } else {
            
            fetch("/order", {
                method: "PUT",
                body: JSON.stringify(cart),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((json) => {
                const { status } = json;
                console.log(json);
                if (status === "success") {
                    setFormError('');
                    dispatch(clearItems());
                    history.push("/confirmation");
                } else if (status === "error") {
                    setFormError(json.error);
                };
            })
        };

    };

    return(
        <Wrapper>
            <Form>
                <Row>
                    <Column>
                        <h4>Shipping Address</h4>
                        <label>Full Name</label>
                        <Input type="text" 
                            value={formData.fullName} 
                            onChange={(ev)=>{setFormData({...formData,fullName: ev.target.value})}}
                            missingField={formError && formData.fullName==='' ? '2px solid red' : 'default'}
                        />
                        <label>Email</label>
                        <Input type="text" 
                            value={formData.email} 
                            onChange={(ev)=>{setFormData({...formData,email: ev.target.value})}}
                            missingField={formError && formData.email==='' ? '2px solid red' : 'default'}
                        />
                        <label>Street address</label>
                        <Input type="text" 
                            value={formData.streetAddress} 
                            onChange={(ev)=>{setFormData({...formData,streetAddress: ev.target.value})}}
                            missingField={formError && formData.streetAddress==='' ? '2px solid red' : 'default'}
                        />
                        <label>City</label>
                        <Input type="text" 
                            value={formData.city} 
                            onChange={(ev)=>{setFormData({...formData,city: ev.target.value})}}
                            missingField={formError && formData.city==='' ? '2px solid red' : 'default'}
                        />
                        <label>Zip Code</label>
                        <Input type="text" 
                            value={formData.zipCode} 
                            onChange={(ev)=>{setFormData({...formData,zipCode: ev.target.value})}}
                            missingField={formError && formData.zipCode==='' ? '2px solid red' : 'default'}
                        />
                        <label>Country</label>
                        <Input type="text" 
                            value={formData.country} 
                            onChange={(ev)=>{setFormData({...formData,country: ev.target.value})}}
                            missingField={formError && formData.country==='' ? '2px solid red' : 'default'}
                        />
                        <label>Province</label>
                        <Input type="text" 
                            value={formData.province} 
                            onChange={(ev)=>{setFormData({...formData,province: ev.target.value})}}
                            missingField={formError && formData.province==='' ? '2px solid red' : 'default'}
                        />
                        <label>
                            <input type="checkbox" defaultChecked/> Shipping address same as billing
                        </label>
                    </Column>

                    <Column>
                        <h4>Credit Card Details</h4>
                        <label>Name on Card</label>
                        <Input type="text" 
                            value={formData.nameOnCard} 
                            onChange={(ev)=>{setFormData({...formData,nameOnCard: ev.target.value})}}
                            missingField={formError && formData.nameOnCard==='' ? '2px solid red' : 'default'}
                        />
                        <label>Credit Card Number</label>
                        <Input type="text" 
                            value={formData.cardNo} 
                            onChange={(ev)=>{setFormData({...formData,cardNo: ev.target.value})}}
                            missingField={formError && formData.cardNo==='' ? '2px solid red' : 'default'}
                        />
                        <label>Expiration date</label>
                        <Input type="text" 
                            value={formData.Exp} 
                            onChange={(ev)=>{setFormData({...formData,Exp: ev.target.value})}}
                            missingField={formError && formData.Exp==='' ? '2px solid red' : 'default'}
                        />
                        <label>Security code</label>
                        <Input type="text" 
                            value={formData.SecNo} 
                            onChange={(ev)=>{setFormData({...formData,SecNo: ev.target.value})}}
                            missingField={formError && formData.SecNo==='' ? '2px solid red' : 'default'}
                        />
                    </Column>
                </Row>
                {formError && 
                    <Error>
                        {formError}
                    </Error>
                }

            <CartSummary/>
            
            <CartButton
                handleClick={handleClickFunction}
            >
                Place Order
            </CartButton>

            </Form>
        </Wrapper>
    ); 
}; 

const Wrapper = styled.div`
display: flex; 
flex-direction:column;
margin: 0% 5%;
`;

const Form = styled.form`
display:flex;
flex-direction:column;
`;

const Row = styled.div`
display:flex;
justify-content:space-between;
`;

const Column = styled.div`
display:flex;
flex-direction:column;
width:47%;
`;

const Error = styled.div`
margin: 15px;
padding:15px;
background:#FFCCCC;
border-radius:5px;
`;

const Input = styled.input`
border: ${({missingField})=> missingField};
`;

export default Checkout; 
