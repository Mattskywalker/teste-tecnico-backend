import sequelize from 'config/database';
import { DataTypes, Model } from 'sequelize';

class Demo extends Model {}
class Frame extends Model {}

Demo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Demo',
  },
);

Frame.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Frame',
  },
);

Demo.hasMany(Frame, { as: 'frames', foreignKey: 'demoId' });
Frame.belongsTo(Demo, { as: 'demo', foreignKey: 'demoId' });

export { sequelize, Demo, Frame };
