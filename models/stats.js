module.exports = function (sequelize, DataTypes) {
    var Bull = sequelize.define("Bull", {
        team_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        player_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        player_position: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        player_salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ppg: {
            type: DataTypes.INTEGER,
        },
    });
    return Bull;
};
