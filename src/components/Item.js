import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  border: 5px solid white;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
`;

const Counter = styled.div`
  border: 2px solid blue;
`;

const Item = (props) => {
  console.log("purchased item", props.purchasedItem);

  return (
    <Wrapper
      onClick={(ev) => {
        props.setPurchasedItem({
          ...props.purchasedItem,
          [props.id]: props.purchasedItem[props.id] + 1,
        });
      }}
    >
      <ItemInfo>
        <div className="item">
          <h3>{props.id}</h3>
        </div>
        <div className="cost">
          <p>
            Cost {props.cost} Cookies. Produces {props.value} cookie/second.
          </p>
        </div>
      </ItemInfo>
      <Counter>
        <h2>{props.purchasedItem[props.id]}</h2>
        {/* <h2>{props.handleClick}</h2> */}
      </Counter>
    </Wrapper>
  );
};

export default Item;
