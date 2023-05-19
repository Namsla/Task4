import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="header">
        <h1>This is the header!</h1>
        <p>
          Beef chicken pork bacon chuck shortloin sirloin shank shankle eiusmod,
          groundround velit tail pariatur spareribs id aliquip turducken, nisi
          biltong magna adipisicing ad hamhock ut non.
        </p>
      </div>

      <div>
        <div class="content">
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            dolorem facere fugit officia tempore molestias, eaque dolore vero
            animi consectetur voluptatum eos veniam quas nisi nostrum nemo
            debitis enim ab sequi? Voluptate sequi esse ea a, culpa molestiae
            unde odio accusantium doloremque numquam nam autem necessitatibus
            nisi nemo itaque voluptatum!
          </p>
        </div>

        <a href="https://picsum.photos/">
          <img src="https://picsum.photos/200/300" />
        </a>
      </div>
      <h1>Tommorow is weekend, Are You Ready?</h1>
      <h2>Things I want to do on the weekends:</h2>
      <ul>
        <li>Laundry</li>
        <li> Grocery </li>
        <li>Walk for 5 miles</li>
        <li>Code from 8pm-12:30am</li>
      </ul>
      <div class="footer">
        <h1>This is the footer section</h1>
        <p>
          Beef chicken pork bacon chuck shortloin sirloin shank shankle eiusmod,
          groundround velit tail pariatur spareribs id aliquip turducken, nisi
          biltong magna adipisicing ad hamhock ut non.
        </p>
      </div>
    </>
  );
}

export default App;
