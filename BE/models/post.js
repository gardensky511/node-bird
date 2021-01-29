module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        // id는 mysql이 자동으로 만들어줌
        content: {}
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    })
    Post.associate = (db) => {}
    return Post
}