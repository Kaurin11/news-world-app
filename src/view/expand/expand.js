import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'

const Expand = () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    );
  }

export default Expand;