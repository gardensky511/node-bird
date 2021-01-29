const express = require('express')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const db = require('./models')
const app = express()
db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공')
    })
    .catch(console.error)

// FE에서 보낸 데이터를 req.body안에 넣는 역할
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send('hello express')
})

app.get('/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hello'},
        { id: 2, content: 'hello'},
        { id: 3, content: 'hello'},
    ])
})

app.use('/post', postRouter)
app.use('/user', userRouter)

app.listen(3065, () => {
    console.log('서버 실행중!!!!')
})

// app.get : 가져오다
// app.post : 생성하다
// app.delete : 제거
// app.patch : 부분수정
// app.put : 전체수정
// app.options : 찔러보기(?)
// app.head : 헤더만 가져오기