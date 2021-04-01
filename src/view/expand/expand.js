import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'

const Expand = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="accordion">
        <section id="item1">
          <a href="#item1"><h1>item1</h1></a>
          <p>duvaj lepak</p>
        </section>
        <section id="item2">
          <a href="#item2"><h1>item2</h1></a>
          <p>duvaj lepak</p>
        </section>
        <section id="item3">
          <a href="#item3"><h1>item3</h1></a>
          <p>duvaj lepak</p>
        </section>
      </div>
    );
  }


export default Expand;