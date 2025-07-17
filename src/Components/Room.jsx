import React from "react";
import roomData from '../data/roomData';
import './Room.css'
const Room = () => {
    
    return (
        <section className="room-section">
        <h1 className="room-title">Our Rooms</h1>
            <div className='room-grid'>
                {roomData.map((room) => (
                    <div className="room-item" key={room.id}>
         <h3>{room.name}</h3>
         <div className="price-tags">
         <span className='room-type room'>Room: {room.roomPrice}</span> 
         <span className='room-type short-rest'>Short Rest: {room.shortRestPrice}</span>
                   </div>
                    </div>
                ))}
                </div>
        </section>  
    );
}

export default Room;