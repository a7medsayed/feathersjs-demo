// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {

    const AssociatedModel = context.app.service('users').Model;
    context.params.sequelize = {
      raw: false,
      include: [{
        model: AssociatedModel
      }]
    };

    return Promise.resolve(context);

  };
};
