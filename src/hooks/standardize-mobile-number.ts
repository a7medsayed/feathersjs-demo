// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {

   for(let contact of context.data){
    contact.mobileNumber = contact.mobileNumber.replace(/\+/g, '')
    contact.mobileNumber =  contact.mobileNumber.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: string) => (d.charCodeAt(0) - 1632).toString()); // Convert Arabic numbers)
   }
    
    
    return context;
  };
};
