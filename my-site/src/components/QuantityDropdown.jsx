import { useState } from 'react';
import './QuantityDropdown.css';
export default function QuantityDropdown() {


  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const options = Array.from({ length: 20 }, (_, i) => i + 1);


  return (
    <>
      <div className="dropdown">
        Quantity:
        <input className="inputBar" type='text' defaultValue="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button className='dropdown-btn' onClick={() => setIsOpen((prev) => !prev)}>▼</button>

        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((num) => (
              <li
                key={num}
                onClick={() => {
                  setQuantity(num);
                  setIsOpen(false);
                }}
              >
                {num}
              </li>
            ))}
          </ul>
        )}

      </div>

    </>
  )
}