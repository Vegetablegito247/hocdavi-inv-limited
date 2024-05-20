import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./overview.css";
import { FaEdit } from "react-icons/fa";
import DashHead from "../../../components/dashHead/DashHead";
import { useSelector} from "react-redux";

function OverView({ handleSideMenu }) {
  const messages = useSelector((state) => state.message.clients);

  const [msgOpt1, setMsgOpt1] = useState(false);
  const handleMsgOpt1 = () => {
    setMsgOpt1(!msgOpt1);
  };

  return (
    <div className="overview">
      <DashHead headTitle={"Overview"} onClick={handleSideMenu} />
      <div className="overviewContent">
        <div className="newMessages">
          <div className="newMsgHead">
            <h3 className="font-bold text-xl">
              New messages ({messages.filter((msg) => !msg.read).length})
            </h3>
            <div className="msgEdit">
              <div onClick={handleMsgOpt1} className="msgEditMain">
                <span>Edit</span>
                <FaEdit className="editMsg" />
              </div>
              <div
                className={
                  msgOpt1
                    ? "editInfoMsg editNewInfo active"
                    : "editNewInfo editInfoMsg"
                }
              >
                <span>Mark all as read</span>
              </div>
            </div>
          </div>
          {messages.filter((msg) => !msg.read).length > 0 ? (
            <div
              className={
                messages.filter((msg) => !msg.read).length > 8
                  ? "newMsg length"
                  : "newMsg"
              }
            >
              {messages.filter((msg) => !msg.read).map((msg) => (
                <Link key={msg._id} to="" className="notMsg">
                  <div className="msgSender">
                    <h3>{msg.clientEmail}</h3>
                    <p>{ }</p>
                  </div>
                  <div className="msgMsg">
                    <p>{msg.clientMsg}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no_img">
              <p>No new messages</p>
            </div>
          )}
          <div
            className={
              messages.filter((msg) => !msg.read).length > 6
                ? "seeMore active"
                : "seeMore"
            }
          >
            <Link to="/dashboard/messages">...see more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
