module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // mysql에는 users 테이블 생성
        // id는 mysql이 자동으로 만들어줌
        email: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
            unique: true, // 고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false //필수
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false //필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글저장
    })
    User.associate = (db) => {}
    return User
}