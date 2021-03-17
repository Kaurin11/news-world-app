import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'

const Expand = () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <input id="toggle" type="checkbox" checked />
        <label for="toggle">Click to toggle</label>
        <div id="expand">HHHHH</div>
        <div>
          <h1>KKKKKKK</h1>
        </div>
      </div>
    );
  }

export default Expand;