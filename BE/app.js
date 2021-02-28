const express = require('express')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

const postRouter = require('./routes/post')
const postsRouter = require('./routes/posts')
const userRouter = require('./routes/user')
const db = require('./models')
const passportConfig = require('./passort')

dotenv.config()
const app = express()
db.sequelize.sync()
    .then(() => {
        console.log('db연결 성공')
    })
    .catch(console.error)
passportConfig()

app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use('/', express.static(path.join(__dirname, 'uploads')))
// FE에서 보낸 데이터를 req.body안에 넣는 역할
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.send('hello express')
})

app.use('/post', postRouter)
app.use('/posts', postsRouter)
app.use('/user', userRouter)

// 에러처리 미들웨어는 여기 내부적으로 존재. 별도로 쓰고싶으면 에러처리 미들웨어를 아래처럼 적어줌
app.use((error, req, res, next) => {})

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