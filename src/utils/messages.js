/**
 * Generates a message object with username, text, and creation timestamp.
 * @param {string} username - The username associated with the message.
 * @param {string} text - The content of the message.
 * @returns {Object} - The generated message object.
 */
const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime(),
    };
};

/**
 * Generates a location message object with username, URL, and creation timestamp.
 * @param {string} username - The username associated with the location message.
 * @param {string} url - The URL representing the location.
 * @returns {Object} - The generated location message object.
 */
const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime(),
    };
};

module.exports = {
    generateMessage,
    generateLocationMessage,
};
