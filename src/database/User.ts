import * as Sequelize from 'sequelize';

export interface UserAttributes {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  status?: any;
  karma?: number;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes> {
  createdAt?: Date;
  modifiedAt?: Date;
  dataValues?: any;
}

module.exports = function(sequelize: Sequelize.Sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(64),
      unique: "email",
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "REGISTER_PENDING"
    },
    karma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  });
  return User;
}