import React, { useState } from 'react';


function LoyaltyProgram() {

const [loyaltyPoints, setLoyaltyPoints] = useState(0);


const earnPoints = () => {

setLoyaltyPoints(loyaltyPoints + 10); // Earn 10 points for each booking

};


return (

<div className="loyalty-program">

<h2>Loyalty & Rewards Program</h2>

<p>You currently have {loyaltyPoints} loyalty points.</p>

<button onClick={earnPoints}>Earn 10 Points</button>

<p>Redeem your points for discounts on services and products!</p>

</div>

);

}


export default LoyaltyProgram