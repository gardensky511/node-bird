module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {
        // id는 mysql이 자동으로 만들어줌
        content: {}
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    })
    Hashtag.associate = (db) => {}
    return Hashtag
}