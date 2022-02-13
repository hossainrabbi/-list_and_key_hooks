import React from 'react';
import { BirthdayList, ListDetails } from './styles/Element.style';

export default function List({ name, age, image }) {
    return (
        <BirthdayList>
            <img src={image} alt={name} />
            <ListDetails>
                <h3>{name}</h3>
                <p>{age} Years</p>
            </ListDetails>
        </BirthdayList>
    );
}
