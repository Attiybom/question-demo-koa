module.exports = [
  // 新建（收集）答卷
  {
    url: "/api/answer",
    method: "post",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
