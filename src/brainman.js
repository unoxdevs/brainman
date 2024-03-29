const fetch = require("cross-fetch");

/**
 * A function that sends a request to a chat API endpoint based on the prompt provided, and returns the response data.
 *
 * @param {string} prompt - The prompt for the chat API.
 * @return {Promise} The response data from the chat API.
 */
const brainman = async (prompt) => {
    const response = await fetch(`http://brainman.only-fans.club/chat/${prompt}`);
    const data = await response.json();
    return data;
}

module.exports = brainman;