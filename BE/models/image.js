module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        // id는 mysql이 자동으로 만들어줌
        src: {}
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
    Image.associate = (db) => {}
    return Image
}