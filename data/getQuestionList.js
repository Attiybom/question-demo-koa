
const Mock = require('mockjs')

const Random = Mock.Random

function getQuestionList(option = {}) {
  const {len = 10, isStar = false, isDeleted = false } = option

  const list = []

  for (let i = 0; i < len; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar,
      answerCount: Random.natural(50, 100),
      createAt: Random.datetime(),
      isDeleted
    })
  }

  return list
}

module.exports = getQuestionList
