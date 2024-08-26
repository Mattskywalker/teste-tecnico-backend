import sequelize from 'config/database';
import { DataTypes, Model } from 'sequelize';

interface IFrameEvent {
  selectors: string;
  event: keyof GlobalEventHandlersEventMap;
  title: string;
  text: string;
  frameId: string;
}

class Demo extends Model {}
class Frame extends Model {}
class FrameEvent extends Model {}

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

FrameEvent.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    selectors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'FrameEvent',
  },
);

Demo.hasMany(Frame, { as: 'frames', foreignKey: 'demoId' });
Frame.belongsTo(Demo, { as: 'demo', foreignKey: 'demoId' });

Frame.hasOne(FrameEvent, { as: 'event', foreignKey: 'frameId' });
FrameEvent.belongsTo(Frame, { as: 'frame', foreignKey: 'frameId' });

export { sequelize, Demo, Frame, FrameEvent, IFrameEvent };
