module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // mysql에는 users 테이블 생성
        // id는 mysql이 자동으로 만들어줌
        email: {},
        nickname: {},
        password: {},
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글저장
    })
    User.associate = (db) => {}
    return User
}