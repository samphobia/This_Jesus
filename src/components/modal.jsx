/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import bookimg from "../assets/book.jpeg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModalWrap = styled.div`
  h1 {
    font-size: 20px;
    color: red;
    text-align: end;
    margin: 0;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 999999999999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slide-in 0.5s ease-in;

    .modal-body {
      background-color: white;
      position: relative;
      /* min-width: 320px; */
      max-width: 600px;
      padding: 2rem;
      overflow-y: scroll;
      width: 90vw;
      border-radius: 5px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      height: 70vh;
    }
    img {
      width: 50%;
      text-align: center;
      margin: auto;
      justify-self: center;
      align-self: center;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    p {
      font-size: 90%;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translatex(-100%);
    }

    100% {
      transform: translatex(0);
    }
  }
`;

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const book = useSelector((state) => state.books);

  if (sessionStorage.getItem("myFunctionExecuted") === "true") {
    return;
  }

  const toggleModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("myFunctionExecuted", "true");
  };

  setTimeout(() => {
    toggleModal();
  }, 2000);

  const navigateMe = () => {
    setIsOpen(false);
    sessionStorage.setItem("myFunctionExecuted", "true");
  };

  return (
    <ModalWrap>
      {isOpen && (
        <div className="modal">
          <section>
            <div className="modal-body">
              <h1 onClick={closeModal}>
                <AiOutlineCloseCircle />
              </h1>
              <div>
                <h1>{book?.books[0]?.authorsWord}</h1>
                <Link to="book-launch" onClick={navigateMe}>
                  <img src={bookimg} alt="" />
                </Link>

                <h2>Click image to visit our book page abi something...</h2>
                <p>
                  Book Launch & 5k Free Book Campaign for Secondary School
                  Students in Lagos State.
                  <br />
                  <br />
                  We're excited to launch a campaign to provide free copies of
                  the book "Career Paths and Opportunities for Engineering,
                  Science, Art, and Management Students" to secondary schools in
                  Lagos State.
                  <br />
                  <br />
                  This initiative aims to empower students with valuable
                  insights into diverse career options. This book will help the
                  students to navigate the world of careers in engineering,
                  science, art, and management. The book breaks down possible
                  career paths into easy-to-understand chunks and gives insights
                  on places they can work, information on the admission
                  requirements of Nigerian universities and lots more.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </ModalWrap>
  );
};

export default Modal;
