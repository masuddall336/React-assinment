import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Myteam.css'
const Myteam = (props) => {
    let player = props.playerr;
    let totalCost = player.reduce((total, palyerrr) => total = total + palyerrr.sellery, 0)
    return (
        <div>
            <h2>My team is here</h2>
            <h4>Player added: {player.length}</h4>
            <h4>Total cost: {totalCost}</h4>
            {
                player.map(names => <div style={{textAlign:"center", backgroundColor:"#ad002c", padding:"10px", borderRadius:"10px", marginBottom:"10px"}}>
                    <h4>Name: { names.first_name}</h4>
                    <h4>Sellery: { names.sellery}</h4>
                </div>)
            }
        </div>
    );
};

export default Myteam;