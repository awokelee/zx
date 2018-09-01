const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
    const books = await mysql('books')
                    .select('books.*', 'CSessionInfo.user_info')
                    .join('CSessionInfo', 'books.openid', 'cSessionInfo.open_id')
                    .orderBy('books.id', 'desc')
    ctx.state.data = {
        list: books.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign({}, v, {
                user_info: {
                    nickName: info.nickName
                }
            })
        })
    }
}
