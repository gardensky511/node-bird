module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        // id는 mysql이 자동으로 만들어줌
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    })
    Comment.associate = (db) => {}

    return Comment
}