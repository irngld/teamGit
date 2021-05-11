import React from "react";

const Header = (props) => {
  return (
    <header className='mt-5'>
      <h3>
        Your Current Location Is:{" "}
        {`${props?.location?.city}, ${props?.location?.state}`}
      </h3>
    </header>
  );
};

export default Header;
