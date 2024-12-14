import React from 'react';


function ServiceMenu() {

const services = [

'Haircut',

'Beard Trim',

'Facial',

'Massage',

'Manicure',

'Pedicure',

'Hair Coloring',

'Shaving'

];


return (

<div className="service-menu">

<h2>Our Services</h2>

<ul>

{services.map((service, index) => (

<li key={index}>{service}</li>

))}

</ul>

</div>

);

}


export default ServiceMenu;