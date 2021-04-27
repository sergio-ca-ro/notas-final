module.exports = (sequelize, DataTypes) => {

    const cols = { 
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,

        },
        task: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    const config = {
        tableName: 'tasks',
        paranoid: false,
        timestamps: false
    }
    const Task = sequelize.define("Task", cols, config);

    return Task;
}