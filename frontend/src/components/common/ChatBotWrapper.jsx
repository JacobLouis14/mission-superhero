import React, { useEffect, useState } from "react";
import ChatBot from "react-chatbotify";
import { Link } from "react-router-dom";

const ChatBotWrapper = () => {
  const [diamention, setDiamention] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });
  const flow = {
    start: {
      message: "Hello from hero's assistant, May i know your name?",
      path: "greet_name",
    },
    greet_name: {
      message: (params) => {
        if (params.userInput.toLowerCase().includes("no")) {
          params.injectMessage(
            <div className="bg-violet-950 rounded-3xl mx-4 my-4 px-5 py-3 flex flex-col">
              <p>i can help you with below options</p>
              <Link
                to="/about"
                className="px-5 py-3 border rounded-lg mt-4 hover:text-violet-900 hover:bg-white text-center"
              >
                <button>About</button>
              </Link>
              <Link
                to="/complaints"
                className="px-5 py-3 border rounded-lg mt-4 hover:text-violet-900 hover:bg-white text-center"
              >
                <button>Grievance</button>
              </Link>
            </div>
          );
        } else {
          params.injectMessage(
            <div className="bg-violet-950 rounded-3xl mx-4 my-4 px-5 py-3 flex flex-col">
              <p>Hi {params.userInput},</p>
              <p>i can help you with below options</p>
              <Link
                to="/about"
                className="px-5 py-3 border rounded-lg mt-4 hover:text-violet-900 hover:bg-white text-center"
              >
                <button>About</button>
              </Link>
              <Link
                to="/complaints"
                className="px-5 py-3 border rounded-lg mt-4 hover:text-violet-900 hover:bg-white text-center"
              >
                <button>Grievance</button>
              </Link>
            </div>
          );
        }
      },
      chatDisabled: true,
    },
  };

  useEffect(() => {
    const resizeListner = window.addEventListener("resize", (event) => {
      setDiamention({
        width: event.currentTarget.innerWidth,
        height: event.currentTarget.innerHeight,
      });
    });

    return () => {
      window.removeEventListener("resize", resizeListner);
    };
  }, []);

  return (
    <ChatBot
      flow={flow}
      styles={{
        chatHistoryButtonStyle: { display: "none" },
        chatButtonStyle: { width: 60, height: 60 },
        notificationBadgeStyle: { display: "none" },
        tooltipStyle: { display: "none" },
        chatWindowStyle: {
          width: Math.min(Math.max(diamention.width / 4, 300), 600),
          height: Math.min(Math.max(diamention.height / 4, 400), 600),
        },
      }}
    />
  );
};

export default ChatBotWrapper;
