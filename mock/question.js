const Mock = require("mockjs");

const Random = Mock.Random;

const getQuestionList = require("../data/getQuestionList");

module.exports = [
  // 获取单个问卷信息
  {
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          js: "",
          css: "",
          desc: "",
          componentList: [
            //info
            {
              fe_id: Random.id(),
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
              fe_id: Random.id(),
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
            // 段落
            {
              fe_id: Random.id(),
              type: "questionParagraph", //组件类型,不能重复，前后端统一
              title: "段落", //这类型组件的默认标题
              isHidden: false, // 控制该组件是否隐藏显示
              isLocked: false,
              props: {
                text: "一行段落",
                isCenter: false,
              },
            },
            {
              fe_id: Random.id(),
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
              fe_id: Random.id(),
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
              fe_id: Random.id(),
              type: "questionTextarea", //组件类型,不能重复，前后端统一
              title: "多行输入框", //这类型组件的默认标题
              isHidden: false, // 控制该组件是否隐藏显示
              isLocked: false,
              props: {
                title: "你的爱好",
                placeholder: "请输入...",
              },
            },
            //单选框
            {
              fe_id: Random.id(),
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
              fe_id: Random.id(),
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
          ],
        },
      };
    },
  },
  // 创建问卷
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  // 获取问卷列表
  {
    url: "/api/question",
    method: "get",
    response(ctx) {
      // console.info('ctx', ctx.url)

      const { url, query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;

      const pageSize = parseInt(query.pageSize);

      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }),
          total: 100, //问卷总数
        },
      };
    },
  },
  // 更新问卷 (由于是mock模拟，所以request暂无要求)
  {
    url: "/api/question/:id",
    method: "patch",
    response() {
      return {
        errno: 0,
      };
    },
  },
  // 复制问卷
  {
    url: "/api/question/copy/:id",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  // 批量删除
  {
    url: "/api/question/delete",
    method: "delete",
    response() {
      return {
        errno: 0,
      };
    },
  },
];
