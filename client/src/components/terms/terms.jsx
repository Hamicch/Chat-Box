import React from 'react';
import './terms.scss';

const Terms = () => (
    <div>
        <input type="checkbox" id="terms" name="terms" value="Terms"/>
        <label for="terms"> By Signing Up I agree with<strong className='text'> terms and conditions </strong> </label>
    </div>
)

export default Terms;