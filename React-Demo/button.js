import { useState } from 'react';

function Base() {
    return (
        <img src= "imageHere.png" alt = "Some Image"/>
    );
}

export default function Profile() {
    return (
        <section>
            <h1>Some Images:</h1>
            <Base />
            <Base />
            <Base />
        </section>
    )
}