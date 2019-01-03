module.exports = function (sequelize, DataTypes) {
    var Stat = sequelize.define("Stat", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        height: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Jersey: {
            type: DataTypes.INTEGER,
        },
        Salary: {
            type: DataTypes.INTEGER,
        }
    });
    return Stat;
};
