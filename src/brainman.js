const axios = require('axios');

module.exports = {
    chat: async (options) => {
        const response = await axios.post("https://brainman.is-a-cool.dev/api/chat", {
            message: options.prompt
        });
        return response.data;
    },
};