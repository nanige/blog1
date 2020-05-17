const {loginCheck} = require('../controller/user')
const { SuccessModel, ErrorModel} = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const method = req.method

  // 这是登录接口
  if (method === 'POST' && req.path === '/api/user/login') {
    const {username, passwordd} = req.body
    const result = loginCheck(username, passwordd)
    if (result) {
      return SuccessModel()
    }
    return new ErrorModel('登录失败')
  }
}

module.exports = handleUserRouter