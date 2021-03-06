import { useState } from "react";
import { CloseButton } from "react-bootstrap";
import { FaChevronUp, FaTimes, FaRegCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import userPlaceholer from "../../../src/assets/images/person-circle.svg";

function ChatWindowClosed(props) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={
          props.chatClosed
            ? "chat-closed d-flex justify-content-between align-items-center p-2"
            : "d-none"
        }
      >
        <div>
          {" "}
          <img
            src={loggedUser ? loggedUser?.avatar : userPlaceholer}
            alt="avatar"
            className="card-img-user-comment mr-1"
            referrerPolicy="no-referrer"
          />{" "}
          <strong>
            <span>
              {t("Chat-1")} <FaRegCommentDots />
            </span>
          </strong>
        </div>
        <div className="">
          <button
            className="chat-button"
            onClick={() => {
              props.setChatOpened(true);
              props.setChatClosed(false);
            }}
          >
            <FaChevronUp className="mb-1" />
          </button>
          <button
            className="chat-button "
            onClick={() => props.setChatClosed(false)}
          >
            <FaTimes className="mb-1" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatWindowClosed;
