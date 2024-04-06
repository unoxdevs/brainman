const fetch = require("cross-fetch");

module.exports = {
    /**
     * A function that sends a question to the server and retrieves the response.
     *
     * @param {Object} options - An object containing the prompt and version for the question.
     * @return {Promise} A Promise that resolves to the data retrieved from the server.
     */
    chat: async (options) => {
        return fetch(`https://brainman.vercel.app/chat/${options.prompt}/version/${options.version}`)
        .then(response => response.json())
        .then(data => data)
    }
}
