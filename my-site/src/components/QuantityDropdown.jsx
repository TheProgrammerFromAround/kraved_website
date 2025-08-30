import './QuantityDropdown.css';
export default function SearchBar() {

  return (
    <>
      <div className="dropdown">
          Quantity:
          <input className="inputBar" type="text" defaultValue="1"/>
          <button className='dropdown-btn'>▼</button>

          {/* {isOpen && ( */}
            <ul className="dropdown-menu">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          {/* )} */}
      </div>



      {/* <style>{`
        .dropdown {
          position: relative;
          background-color: red;
          width: 25vw;
        }

        .inputBar{
          width: 4vw;
          margin-left: 3px;
          height: 3vw;
          font-size: 1.8vw;
          outline: none;
        }

        .dropdown-btn {
          padding: 1px 2px;
          cursor: pointer;
          width: 3vw;
          height: 3vw;
          font-size: 1.8vw;
          background-color: white;
        }

        
      `}</style> */}

    </>  
  )
}