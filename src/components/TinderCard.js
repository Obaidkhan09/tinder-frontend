import React, { useEffect, useState } from 'react'
// import axios from "axios";
import TinderCard from "react-tinder-card";
import axios from "./constants/constants";
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import "./styles/tinderCard.css"

function TinderCardComp() {
    const [person, setPerson] = useState([]);

    async function fetchData() {
        const req = await axios.get("/tinder/cards");
        setPerson(req.data);
        // console.log(req);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const deleteItem = async (id) => {
        await axios.delete(`tinder/cards/${id}`)
        .then(() =>{
            fetchData();
        })
        // window.location.reload();
    }

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    return (
        <div className='tinderCard'>
            <div className="tinderCard_container">
                {person.map((item, index) => (
                    <TinderCard
                        key={index}
                        onSwipe={onSwipe()}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['up', 'down']}
                        className="swipe"
                    >
                        <div style={{
                            backgroundImage: `url(${item.imageUrl})`,
                            color: "white",
                        }}
                            className="card"
                        >
                            <h1>{item.name}</h1>
                            <IconButton fontSize='large' className="btnn" key={index} onClick={() => deleteItem(item._id)}>
                                <HighlightOffIcon className='closeCircleButton' fontSize='large' />
                            </IconButton>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCardComp