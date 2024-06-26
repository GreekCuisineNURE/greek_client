import React, { useContext, useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import MenuNav from "../components/MenuNav/MenuNav";
import AboutBlocks from "../components/AboutBlocks/AboutBlocks";
import { MENU_ITEMS, ABOUT_BLOCK_ITEMS } from "../constants/constants_items.js";
import ModalItem from "../components/modals/ModalType/ModalType.jsx";
import { observer } from "mobx-react-lite";
import { Context } from "../index.js";
import { fetchTypes } from "../http/itemAPI.js";
import { fetchItems } from "../http/itemAPI.js";

const Shop = observer(() => {
  const { item } = useContext(Context);
  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {
    fetchTypes().then((data) => item.setTypes(data));
    fetchItems().then((data) => item.setItems(data));
  }, []);

  return (
    <div>
      <AboutBlocks items={ABOUT_BLOCK_ITEMS} />
      <MenuNav />
      <Menu items={MENU_ITEMS} />
      <ModalItem active={modalActive} setActive={setModalActive} />
    </div>
  );
});

export default Shop;
