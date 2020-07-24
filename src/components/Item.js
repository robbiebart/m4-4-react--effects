import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 0px 0px 5px 0px solid white;

  .item-cost {
    display: flex;
    flex-direction: column;
  }
`;

const Item = (props) => {
  return (
    <Wrapper>
      <div className="item-cost">
        <div className="item">
          <h3>Cursor</h3>
        </div>
        <div className="cost">
          <p>Cost 10 Cookies. Produces 1 cookie/second.</p>
        </div>
      </div>
      <div className="counter">
        <h2>0</h2>
      </div>
    </Wrapper>
  );
};

export default Item;
