const getList = (author, keyword) => {
  // 先返回假数据 （格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1546610491112,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1546610492112,
      author: 'lisi'
    },
  ]
}

const getDetail = (id) => {
  return {
    id: 2,
    title: '标题B',
    content: '内容B',
    createTime: 1546610492112,
    author: 'lisi'
  }
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象
  return {
    id: 3,
  }
}

const updateBlog = (id, blogData = {}) => {
  console.log('up')
  return true
}

const delBlod = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlod
}