1. 一份问卷发布了，用户提交了一份答卷，
2. 答卷数据结构如下

```js
{
  questionId: 'xxxxxxxx', //问卷id
  answerList: [ // 组件列表对应的答案
    { componentId: 'c1', value: undefined },//组件1：标题，value为答案
    { componentId: 'c2', value: `xxxx` },
    { componentId: 'c3', value: `xxxxx` },
    { componentId: 'c4', value: `sssss` },
    { componentId: 'c5', value: `aaaaaa` },
  ]
}
```

3. 因此一份问卷对应的所有答卷，数据结构如下：

```js
{ //每个数组都代表一份答卷
  [
    _id: '111111',
    c2: 'xxxx',
    c3: 'xxxxx',
    c4: 'sssss',
    c5: 'aaaaaa',
  ],
  [
    _id: '222222',
    c2: 'aaa',
    c3: 'bbbb',
    c4: 'ccccc',
    c5: 'dddddd',
  ],
}
```
