import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Players.css'
const Players = (props) => {
    let { first_name, sellery, img } = props.players;
    let handle = props.handle;
    return (
        <div className='wrapper'>
            <div style={{ marginRight: "5%" }}>
                <img style={{ width: "200px" }} src={img} alt="" />
            </div>
            <div>
                <h2>Name: {first_name}</h2>
                <h2>Sellery: {sellery}</h2>
                <button onClick={() =>handle(props.players)} className="btn btn-warning">
                <FontAwesomeIcon icon={faPlus} />  add for your team
                </button>
            </div>
        </div>
    );
};

export default Players;