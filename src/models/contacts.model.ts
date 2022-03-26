// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const contacts = sequelizeClient.define('contacts', {
    contactName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },  
  
  {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = false;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (contacts as any).associate = function (models: any): void {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
      const { users } = models;
      contacts.belongsTo(users);
    
  };

  return contacts;
}
