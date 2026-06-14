const axios = require('axios');

const D_ID_API_KEY = process.env.D_ID_API_KEY;
const D_ID_AGENT_ID = process.env.D_ID_AGENT_ID;

async function initializeDIDAgent() {
  try {
    const response = await axios.post(
      `https://api.d-id.com/agents/${D_ID_AGENT_ID}/start`,
      {},
      { headers: { Authorization: `Bearer ${D_ID_API_KEY}` } }
    );
    console.log('D-ID Agent initialized:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error initializing D-ID Agent:', error.message);
    throw error;
  }
}

async function sendMessageToAgent(message) {
  try {
    const response = await axios.post(
      `https://api.d-id.com/agents/${D_ID_AGENT_ID}/message`,
      { message },
      { headers: { Authorization: `Bearer ${D_ID_API_KEY}` } }
    );
    console.log('Agent response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending message to D-ID Agent:', error.message);
    throw error;
  }
}

async function stopDIDAgent() {
  try {
    const response = await axios.post(
      `https://api.d-id.com/agents/${D_ID_AGENT_ID}/stop`,
      {},
      { headers: { Authorization: `Bearer ${D_ID_API_KEY}` } }
    );
    console.log('D-ID Agent stopped:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error stopping D-ID Agent:', error.message);
    throw error;
  }
}

module.exports = { 
  initializeDIDAgent, 
  sendMessageToAgent, 
  stopDIDAgent 
};
