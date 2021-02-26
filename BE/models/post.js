module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        // id는 mysql이 자동으로 만들어줌
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
        // RetweetId
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    })
    Post.associate = (db) => {
        db.Post.belongsTo(db.User) // post.addUser, post.getUser, post.setUser
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag'}) // post.addHashtags
        db.Post.hasMany(db.Comment) // post.addComments, post.getComments
        db.Post.hasMany(db.Image) // post.addImages, post.getImages
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers
        db.Post.belongsTo(db.Post, { as: 'Retweet' }) // post.addRetweet
    }
    return Post
}