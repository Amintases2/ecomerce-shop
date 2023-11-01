import mac from "../assets/products/mac.png";
import SearchPanel from "../components/SearchPanel.jsx";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal.jsx";
import { useState } from "react";
import {
  ProductCard,
  ProductsWrapper,
  Discount,
  DiscountWrapper,
} from "../styles/Shop.jsx";

import { ModalButtonsWrapper } from "../styles/Modal.jsx";
import { HeadTitle } from "../styles/global.jsx";

export default function ShopPage() {
  const [modalActive, setModalActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  return (
    <>
      <HeadTitle>Shopping List</HeadTitle>
      <SearchPanel />
      <ProductsWrapper>
        <ProductCard onClick={() => setModalActive(!modalActive)}>
          <DiscountWrapper>
            <Discount>99%</Discount>
          </DiscountWrapper>
          <img src={mac} alt="" />
          <h2>Macbook air 13</h2>
          <Modal active={modalActive} setActive={setModalActive}>
            <ProductCard>
              <img src={mac} alt="" />
              <h2>Macbook air 13</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod sed lorem sed efficitur. Cras congue nisi non felis
                semper, et vestibulum risus ornare. Fusce tristique auctor nisl,
                eu tempus dui aliquam a. Aenean vulputate vestibulum velit, nec
                viverra felis mattis a. Aliquam ac eleifend tellus. Nulla
                hendrerit, justo non porta pellentesque, nunc est iaculis
                ligula, sed molestie turpis turpis sit amet augue. Phasellus
                vulputate quam sem, vel congue nulla bibendum quis. Sed
                elementum massa et ante congue, id ullamcorper leo elementum.
              </p>
            </ProductCard>
            <ModalButtonsWrapper active={buttonActive}>
              <button onMouseOver={() => setButtonActive(true)}>
                Забронировать
              </button>
              <button onMouseOver={() => setButtonActive(false)}>Купить</button>
            </ModalButtonsWrapper>
          </Modal>
        </ProductCard>
        <ProductCard>
          <img src={mac} alt="" />
          <h2>Macbook air 13</h2>
        </ProductCard>
        <ProductCard>
          <img src={mac} alt="" />
          <h2>Macbook air 13</h2>
        </ProductCard>
        <ProductCard>
          <img src={mac} alt="" />
          <h2>Macbook air 13</h2>
        </ProductCard>
        <ProductCard>
          <img src={mac} alt="" />
          <h2>Macbook air 13</h2>
        </ProductCard>
        <ProductCard>
          <img src={mac} alt="" />
          <h2>Macbook air 13</h2>
        </ProductCard>
      </ProductsWrapper>

      <Pagination />
    </>
  );
}