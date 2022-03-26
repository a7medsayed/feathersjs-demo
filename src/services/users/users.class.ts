import { Id, Params } from '@feathersjs/feathers';
import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

interface User {
    email: string;
    password: string;

}
export class Users extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    options.multi = true;
    super(options);
  }

  async create(data: User , params?: Params): Promise<any> {
    
    const { email , password } = data;

    const userData = {
      email ,
      password
    }
    return super.create(userData , params );
  }

  async get(id: Id, params?: Params): Promise<any> {
    return super.get(id , params);
  }


}
