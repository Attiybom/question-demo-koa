const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')

const app =  new Koa()
const router = new Router()

// 模拟延迟
async function getRes(fn, ctx) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn(ctx))
    }, 500)
  })
}

// 注册 mock 路由
mockList.forEach(item => {
  const {  url, method, response } = item


  // 类似于 router.get or router.post
  router[method](url, async ctx => {
    // const res = response()
    const res = await getRes(response, ctx)
    ctx.body = res
  })
})

app.use(router.routes())
app.listen(3001)// 端口号 3001
