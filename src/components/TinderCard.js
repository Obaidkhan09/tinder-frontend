import React, { useState } from 'react'

import TinderCard from "react-tinder-card";

import { people } from "./constants/constants";
import "./styles/tinderCard.css"
function TinderCardComp() {
    const [person, setPerson] = useState(people);
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className='tinderCard'>
            <div className="tinderCard_container">
                {person.map((item) => (
                    <TinderCard
                        key={item.name}
                        onSwipe={onSwipe()}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['up', 'down']}
                        className="swipe"
                        >
                        <div style={{
                            backgroundImage: `url(${item.url})`,
                            color: "white",
                        }}
                            className="card"
                        >
                            <h1>{item.name}</h1>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCardComp