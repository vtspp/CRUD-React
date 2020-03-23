import React from 'react';
import './Header.css'


export default props =>
<header className="header d-nome d-sm-flex flex-column">
  <h1 className="mt-3">
    <i className={`fa fa-${props.icon}`}>
      {props.title}
    </i>
  </h1>
  <p className="load text-muted">{props.subtitle}</p>

</header>
