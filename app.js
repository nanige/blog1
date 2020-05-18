const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUerRouter = require('./src/router/user')

// 用于处理post data 
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
     
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }

    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      
      resolve(
        postData
      )
    })
  })
  return promise
}


const serverHandle = (req, res) => {
  res.setHeader('content-type', 'application/json')

  // 获取path
  req.path = req.url.split('?')[0]

  // 解析 query
  req.query = querystring.parse(req.url.split('?')[1])

  // 处理 post data
  getPostData(req).then(postData => {
    
    req.body = postData

    // 处理blog路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
      res.end(
        JSON.stringify(blogData)
      )
      return
    }

    // 处理user路由
    const userData = handleUerRouter(req, res)
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
      return
    }

    // 未找到路由
    res.writeHead(404, {"content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()

  })
  
  
}

module.exports = serverHandle

// process.env.NODE_ENV