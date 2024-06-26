import { useContext, useEffect, useRef, useState } from "react";
import "./messagingStyles.css";
import Avatar from "./Avatar";
import Logo from "./Logo";
import { UserContext } from "../context/UserContext";
import { uniqBy } from "lodash";
import axios from "axios";
import Contact from "./Contact";
import { Navigate, useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();

  // Initialize WebSocket state
  const [ws, setWs] = useState(null);

  const [onlinePeople, setOnlinePeople] = useState({});
  const [offlinePeople, setOfflinePeople] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [newMessageText, setNewMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const divUnderMessages = useRef();
  const [redirect, setRedirect] = useState(false);

  // Storing User Id from context into id
  const id = user ? user._id : null;

  // Set up WebSocket connection on component mount
  useEffect(() => {
    connectToWS();
  }, []);

  // Establish WebSocket connection
  function connectToWS() {
    // Create a new WebSocket instance
    const ws = new WebSocket("ws://localhost:8000");
    setWs(ws);

    // Add event listener for incoming messages
    ws.addEventListener("message", handleMessage);

    // Add event listener for closing connection
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected! Trying to reconnect!");
        // Reconnect to the WebSocket server automatically when the connection is closed
        connectToWS();
      }, 1000);
    });
  }

  // Display online users
  function showOnlinePeople(peopleArray) {
    // console.log(peopleArray);

    const people = {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    // console.log(people);

    setOnlinePeople(people);
  }

  // Handle incoming messages
  function handleMessage(e) {
    // console.log('New Msg: ', e);
    // console.log(e.data);

    const messageData = JSON.parse(e.data);

    console.log({ e, messageData }); //...list of all online users

    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      // console.log({messageData});
      setMessages((prev) => [...prev, { ...messageData }]);
    }
  }

  // Handle user logout
  function logout() {
    axios.post("/logout").then(() => {
      setWs(null);
      setUser(null);
      alert("User logout successfully!");
      navigate("/");
      window.location.reload(); // Reload the page after navigation to index page
    });
  }

  // Handle Redirection to profile page
  function redirectToProfilePage () {
    setRedirect(true);
  }

  // Handle text msg transfer
  async function sendMessage(e, file = null) {
    if (e) e.preventDefault();
    // console.log("Sending msg...");
    ws.send(
      JSON.stringify({
        recipient: selectedUserId,
        text: newMessageText,
        file,
      })
    );
    setNewMessageText("");
    // console.log('Message Sent!');

    // Wait for the message to be sent
    await new Promise((resolve) => {
      // Resolve the promise after 100ms to ensure the message is sent
      setTimeout(resolve, 100);
    });

    // Fetch the updated messages after sending the message
    axios
      .get("/messages/" + selectedUserId)
      .then((response) => {
        setMessages(response.data);
        console.log(messages);
      })
      .catch((error) => {
        console.error("Error in fetching messages: ", error);
      });
  }

  // Handle file transfer
  function sendFile(e) {
    // console.log(e.target.files);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      sendMessage(null, {
        name: e.target.files[0].name,
        data: reader.result,
      });
    };
  }

  // Automatically scroll to bottom of message container when new message is send or recieved
  useEffect(() => {
    const div = divUnderMessages.current;
    if (div) {
      div.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  // Filter out all offline people
  useEffect(() => {
    axios.get("/getAllProfiles").then((res) => {
      // console.log(res.data);
      const offlinePeopleArray = res.data
        .filter((p) => p._id !== id) // Filter out our profile
        .filter((p) => !Object.keys(onlinePeople).includes(p._id)); // Filter out profiles that are not included in the onlinePeople object
      // console.log(offlinePeopleArray);

      const offlinePeople = {};
      offlinePeopleArray.forEach((p) => {
        // Assign each user object to the offlinePeople object with it's _id as the key
        offlinePeople[p._id] = p;
      });
      // console.log(offlinePeopleArray, offlinePeople);

      setOfflinePeople(offlinePeople);
      // console.log(offlinePeople);
    });
  }, [onlinePeople]);

  // To fetch the all the messages(history) of selected userId from database
  useEffect(() => {
    if (selectedUserId) {
      // console.log(selectedUserId);
      axios
        .get("/messages/" + selectedUserId)
        .then((response) => {
          console.log(response.data);
          setMessages(response.data);
        })
        .catch((error) => {
          console.error("Error in fetching messages: ", error);
        });
    }
  }, [selectedUserId]);

  // Make copy of online people
  const onlinePeopleExclOurUser = { ...onlinePeople };

  // Delete our account from online people
  delete onlinePeopleExclOurUser[id];

  // Remove duplicate messages based on the '_id'
  // console.log(messages);

  const messagesWithoutDupes = uniqBy(messages, "_id");
  // console.log(messagesWithoutDupes);

  if(redirect === true) {
    return <Navigate to={'/profile'}/>
  }

  return (
    <div
      className="flex h-screen"
      style={{ fontFamily: "Segoe UI", fontWeight: 500 }}
    >
      {/* Left Section */}
      <div
        className="bg-white w-1/3 flex flex-col"
        style={{ paddingTop: "4rem" }}
      >
        <div className="flex-grow">
          <Logo />
          {/* All Online people */}
          {Object.keys(onlinePeopleExclOurUser).map((userId) => (
            <Contact
              key={userId}
              id={userId}
              online={true}
              username={onlinePeopleExclOurUser[userId] || ""}
              onClick={() => setSelectedUserId(userId)}
              selected={userId === selectedUserId}
            />
          ))}

          {/* All offline people */}
          {Object.keys(offlinePeople).map((userId) => (
            <Contact
              key={userId}
              id={userId}
              online={false}
              username={offlinePeople[userId].name}
              onClick={() => setSelectedUserId(userId)}
              selected={userId === selectedUserId}
            />
          ))}
        </div>

        {/* User name diaplay, logout and back buttons */}
        <div className="p-2 text-center flex items-center justify-center">
          {/* Displaying user name */}
          {user && (
            <span className="mr-2 text-gray-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              {user.name}
            </span>
          )}
          {/* Logout */}
          <button
            onClick={logout}
            className="text-sm cursor-pointer bg-blue-100 py-1 px-2 text-gray-500 border border-gray-100 rounded-sm transition-colors duration-300 hover:bg-blue-200"
          >
            Logout
          </button>
          <button
            onClick={redirectToProfilePage}
            className="text-sm cursor-pointer ml-1 bg-blue-100 py-1 px-2 text-gray-500 border border-gray-100 rounded-sm transition-colors duration-300 hover:bg-blue-200"
          >
            Back
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="flex flex-col bg-blue-100 w-2/3 p-2"
        style={{ paddingTop: "4rem" }}
      >
        <div className="flex-grow">
          {!selectedUserId && (
            <div className="flex h-full items-center justify-center">
              {" "}
              <div className="text-gray-400">
                &larr; Select a person from the sidebar!
              </div>{" "}
            </div>
          )}
          {!!selectedUserId && (
            <div className="relative h-full">
              <div className="overflow-y-scroll absolute top-0 left-0 right-0 bottom-2">
                {messagesWithoutDupes.map((message) => (
                  <div
                    key={message._id}
                    className={
                      message.sender === id ? "text-right" : "text-left"
                    }
                  >
                    <div
                      className={
                        "text-left inline-block p-2 my-2 mr-2 rounded-md text-sm " +
                        (message.sender === id
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-500")
                      }
                    >
                      {message.text}
                      {message.file && (
                        <div>
                          <a
                            target="_blank"
                            className={
                              "flex items-center gap-1" +
                              (message.sender === id
                                ? " text-white"
                                : " text-gray-500")
                            }
                            href={
                              axios.defaults.baseURL +
                              "/uploads/" +
                              message.file
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                              />
                            </svg>
                            {message.file}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={divUnderMessages}></div>
              </div>
            </div>
          )}
        </div>

        {!!selectedUserId && (
          <form className="flex gap-2" onSubmit={sendMessage}>
            {/* Text input bar */}
            <input
              type="text"
              value={newMessageText}
              onChange={(e) => setNewMessageText(e.target.value)}
              placeholder="Type your message here"
              className="bg-white flex-grow border-gray-100 p-2 rounded-sm"
            />

            {/* Attachment button */}
            <label className="cursor-pointer bg-gray-50 p-2 text-gray-600 rounded-sm border border-gray-300">
              <input type="file" className="hidden" onChange={sendFile} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                />
              </svg>
            </label>

            {/* Send message button */}
            <button
              type="submit"
              className="cursor-pointer bg-blue-500 p-2 text-white rounded-sm border border-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
