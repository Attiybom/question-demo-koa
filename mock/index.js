const question = require('./question')
const user = require('./user')
const stat = require("./stat");

const mockList = [...question, ...user, ...stat];

module.exports = mockList
