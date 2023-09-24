const Mock = require("mockjs");
const getStatList = require("../data/getStatList");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/stat/:questionId",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          total: 100, // 做分页用
          list: getStatList(10), //生成10条
        },
      };
    },
  },
];
