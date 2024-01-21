import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const ChatForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Handling Form Submission
  async function sendMsg(event) {
    event.preventDefault();
    
    console.log("Client sending the following msg to the server ", {message});

    // Sending name and message to the server
    try {
      await axios.post('/temp', {
        name,
        message
      });
      alert("Message sent :)");
    }
    catch (event) {
      alert('Message not sent :(');
    }
  }

  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Box border={2} textAlign="center" fontSize="4xl">
        <Typography variant="h4" gutterBottom>
          Chatting...
        </Typography>
      </Box>

      <Box border={2} sx={{ p: 4 }}>
        <form onSubmit={sendMsg}>
          <Box mb={2}>
            <Typography variant="h6">Name</Typography>
            <TextField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{width: "100%"}}
              variant="outlined"
              margin="normal"
            />
          </Box>
          <Box mb={5}>
            <Typography variant="h6">Message</Typography>
            <TextField
              multiline
              rows={5}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{width: "100%"}}
              variant="outlined"
              margin="normal"
            />
          </Box>

          <Box display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary" sx={{ mb: 2, me: 2 }}>
              Send Message
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ChatForm;
