module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("organization", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        }
    });

    return Tutorial;
};