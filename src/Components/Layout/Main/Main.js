import React, { useEffect, useState } from "react";
import Cart from "../../Global/Cart/Cart";
import Member from "../../Global/Member/Member";

const Main = () => {
  const [members, setMembers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./directors.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  const handleAddToCart = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 p-0 order-1 order-lg-0">
            <div className="top-title">
              <h2 className="text-center p-2 mt-4 text-secondary">
                Total Donations $ 100 million
              </h2>
              <hr />
            </div>
            <div className="directors mt-4 px-4">
              <div className="row g-4 p-0">
                {members.map((data, index) => (
                  <Member
                    data={data}
                    key={index}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-2 border-start p-0 order-0 order-lg-1">
            <Cart cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
