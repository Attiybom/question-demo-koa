const Mock = require("mockjs");
const getComponentList = require("./getComponentList");

const Random = Mock.Random;

/**
 * @description 生成答卷信息
 */
function getStatList(len = 10) {
  const componentList = getComponentList();
  const res = [];

  // len有多长，则生成多少条用户数据
  for (let i = 0; i < len; i++) {
    // 代表一份用户的答卷
    const stat = {
      _id: Random.id(),
    };

    // 增加各个组件类型的key value
    componentList.forEach((c) => {
      const { fe_id, type, props } = c;

      // 根据组件类型生成对应的键值对kv，一些纯文本的组件就不需要了
      switch (type) {
        case "questionInput":
          stat[fe_id] = Random.ctitle(); //随机生成
          break;
        case "questionTextarea":
          stat[fe_id] = Random.ctitle(); //随机生成
          break;
        case "questionRadio":
          stat[fe_id] = props.options[0].text; //假设选中第一个
          break;
        case "questionCheckbox":
          stat[fe_id] = `${props.list[0].text}, ${props.list[1].text}`; //假设选中前两项
          break;
      }
    });

    res.push(stat);
  }

  return res;
}

module.exports = getStatList;
