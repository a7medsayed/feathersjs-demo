import { Id, NullableId, Paginated, Params } from "@feathersjs/feathers";
import { Service, SequelizeServiceOptions } from "feathers-sequelize";
import app from "../../app";
import { Application } from "../../declarations";

interface Contact {
  contactName: string;
  mobileNumber: string;
}
export class Contacts extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    options.multi = true;
    super(options);
  }
  //listContacts
  find(params?: Params): Promise<any[] | Paginated<any>> {
    const paginate = app.get('paginate');
    const skip =  params?.query?.page <= 0? 1 : (params?.query?.page-1) * paginate.default;
    const userId = params?.user?.id;
    return super.find({query:{userId: userId , $skip:skip}});
  }
  //addContact
  create(data: Partial<Contact[]>, params?: Params): Promise<Contact> {
    const contacts = [];
    const userId = params?.user?.id;

    for (let contact of data) {
      if (contact) {
        const contactData = {
          contactName: contact.contactName,
          mobileNumber: contact.mobileNumber,
          userId,
        };
        contacts.push(contactData);
      }
    }

    return super.create(contacts, params);
  }
  //removeContact
  remove(id: NullableId, params?: Params): Promise<any> {
    return super.remove(id, params);
  }
  //updateContact
 async  update(id: Id, data: any, params?: Params): Promise<any> {
    const oldContact = await super.get(id);
    oldContact.contactName = data?.contactName;
    oldContact.mobileNumber = data?.mobileNumber;
    return super.update(id, oldContact, params);
  }
}
