import React from 'react';
import './App.css';       
import io from 'socket.io-client';

function App() {

  const [user, setUser] = React.useState()
  const [messages, setMessages] = React.useState(['I am good.', 'Let\'s go!', 'Is this good?']);
  const [message, setMessage] = React.useState('');

  const socketRef = React.useRef();

  function recievedMessages(message){
    setMessages(oldmessages => [
      ...oldmessages, message
    ])
  }


  // React.useEffect(() => {
    // socketRef.current = io.connect('/');

  //   socketRef.current.on('user', id => {
  //     setUser(id);

  //     socketRef.current.on('message', message => {
  //       recievedMessages(message);
  //     })
  //   })

    
  // });

  // const sendMessage = (e) => {
  //   e.preventDefault();

  //   const messageObject = {
  //     body: message,
  //     id: user
  //   }

  //   setMessage('');
  //   // socketRef.current.emit('send message', messageObject);

  // }

  const sendMessage = (e) => {
    e.preventDefault();

    const newMessages = [
      ...messages, message
    ]

    setMessages(newMessages);

    setMessage('');

    console.log(messages);
    console.log('This is fine for now');
  }

  const handleChange = (event) => {
    setMessage(event.target.value);

    
  }

  

  


  return (
    <div className="App">
        <h2 id = 'header'>Chat App</h2>
        <div id = 'app-sub'>
          <div id = 'app-div'>
            <div id = 'user-list'>
              {/* {
                activeUsers.map((activeUser) => {
                  return <h3 id = 'list-item' key = {activeUser.index}>{activeUser}</h3>
                })
              } */}
            </div>
            <div id = 'chat-box'>
              {
                messages.map((chat, index) => {
                return <h5 key = {index}>{ chat }</h5>
                })
              }
            </div>
            <div  id = 'user-info'>
              User Info
            </div>
        </div>
        <div>
          <form id = 'inputer' onSubmit = {sendMessage}>
            <input value = { message } onChange = {handleChange} 
            placeholder = 'Type here' type = 'text' />
            <button>Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

