import React from 'react';
import './Msimgames.css';
import Slot from './Slotgames';
import emoji from './Gamesemoji';
function Games() {
    return (
        <>
            <div className="heading_Style">
                <h1> 🎰 Welcome to <span style={{ fontWeight : '10px'}}> Slot Gaming machine </span> 🎰 </h1>
            </div>
            <br />
            <div className="slot_machine">
            {emoji.map( (val) =>
                {
                return(
                    <>
                        <Slot key={val.id} x = {val.first} y= {val.second} z = {val.third} />
                    </>
                );
            })}
            </div>
        </>
    );
    }

export default Games;