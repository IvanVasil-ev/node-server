import { MODEL_ROLES, ROLES } from '../../configuration';

export const tableName = 'Users';

export function connectModel(connection, DataTypes) {
  const Users = connection.define(tableName, {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM({
        values: MODEL_ROLES,
      }),
      defaultValue: ROLES.user,
    },
    emailConfirm: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    tableName,
  });

  return Users;
}
