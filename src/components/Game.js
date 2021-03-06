import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";
import useInterval from "../hooks/use-interval.hook";
import cookieSrc from "../cookie.svg";
import useKeydown from "../hooks/useKeydown";
import useDocumentTitle from "../hooks/useDocumentTitle";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const itemsObj = {};
items.forEach((item) => {
  itemsObj[item.id] = item;
});

const Game = () => {
  const [cookies, setCookies] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  const calculateCookiesPerTick = (purchasedItem) => {
    let tick = 0;
    tick += purchasedItem.cursor * itemsObj.cursor.value;
    tick += purchasedItem.grandma * itemsObj.grandma.value;
    tick += purchasedItem.farm * itemsObj.farm.value;
    return tick;
  };

  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItem);

    // setCookies and give it numOfGeneratedCookies
    setCookies(cookies + numOfGeneratedCookies);
  }, 1000);

  // useEffect(() => {
  //   document.title = `I got ${cookies}`;
  // }, [cookies]);

  useKeydown("Space", () => {
    setCookies(cookies + itemsObj.cursor.value);
  });

  useDocumentTitle(`I got ${cookies}`, "Cookie Clicker :)");

  /*
no d array: use effect runs every time
empty array: use effect runs on first render
a specific dependency array: useeffect runs on the rerendering of that specific item; this can be 
multiple items
*/
  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{cookies} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>{calculateCookiesPerTick(purchasedItem)}</strong> cookies per
          second
        </Indicator>
        <Button
          onClick={(ev) => {
            setCookies(cookies + 1);
          }}
        >
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>

        {items.map((item) => {
          return (
            <Item
              id={item.id}
              name={item.name}
              cost={item.cost}
              value={item.value}
              setPurchasedItem={setPurchasedItem}
              purchasedItem={purchasedItem}
            />
          );
        })}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

/* TODO: Add <Item> instances here, 1 for each item type. pass item info as a prop, 
        mapping through 
        items to repeat the item component, passing the whole item object 
        and using all of them   */

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
