/**
 * @description 生成组件列表
 *
 */

const Mock = require("mockjs");

const Random = Mock.Random;

function getComponentList() {
  return [
    //info
    {
      fe_id: `c1`, //由于统计页的左侧组件列表和中间表格表头需要联动，因此得保证id的一致性，暂时不能用Random.id()
      type: "questionInfo", //组件类型,不能重复，前后端统一
      title: "问卷标题", //
      isHidden: false,
      isLocked: false,
      props: {
        title: "问卷标题",
        desc: "问卷描述...",
      },
    },
    {
      fe_id: `c2`,
      type: "questionTitle", //组件类型,不能重复，前后端统一
      title: "标题", //
      isHidden: false,
      isLocked: false,
      props: {
        text: "个人信息调研",
        level: 1,
        isCenter: false,
      },
    },
    //input
    {
      fe_id: `c4`,
      type: "questionInput", //组件类型,不能重复，前后端统一
      title: "输入框", //
      isHidden: false,
      isLocked: false,
      props: {
        title: "你的姓名",
        placeholder: "请输入姓名...",
      },
    },
    {
      fe_id: `c5`,
      type: "questionInput", //组件类型,不能重复，前后端统一
      title: "输入框2", //这类型组件的默认标题
      isHidden: false, // 控制该组件是否隐藏显示
      isLocked: false,
      props: {
        title: "你的电话",
        placeholder: "请输入电话...",
      },
    },
    // textarea
    {
      fe_id: `c6`,
      type: "questionTextarea", //组件类型,不能重复，前后端统一
      title: "多行输入框", //这类型组件的默认标题
      isHidden: false, // 控制该组件是否隐藏显示
      isLocked: false,
      props: {
        title: "你的爱好",
        placeholder: "请输入...",
      },
    },
    // 段落
    {
      fe_id: `c3`,
      type: "questionParagraph", //组件类型,不能重复，前后端统一
      title: "段落", //这类型组件的默认标题
      isHidden: false, // 控制该组件是否隐藏显示
      isLocked: false,
      props: {
        text: "一行段落1\n一行段落2",
        isCenter: false,
      },
    },
    //单选框
    {
      fe_id: `c7`,
      type: "questionRadio", //组件类型,不能重复，前后端统一
      title: "单选框", //这类型组件的默认标题
      isHidden: false, // 控制该组件是否隐藏显示
      isLocked: false,
      props: {
        title: "单选标题",
        isVertical: false,
        options: [
          // 单选框选项
          { value: "item1", text: "选项1" },
          { value: "item2", text: "选项2" },
          { value: "item3", text: "选项3" },
        ],
        value: "", //单选框默认初始选项
      },
    },
    //多选框
    {
      fe_id: `c8`,
      type: "questionCheckbox", //组件类型,不能重复，前后端统一
      title: "多选框", //这类型组件的默认标题
      isHidden: false, // 控制该组件是否隐藏显示
      isLocked: false,
      props: {
        title: "多选标题",
        isVertical: false,
        list: [
          // 单选框选项
          { value: "item1", text: "选项1", checked: false },
          { value: "item2", text: "选项2", checked: false },
          { value: "item3", text: "选项3", checked: false },
        ],
      },
    },
  ];
}

module.exports = getComponentList;
