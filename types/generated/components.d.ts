import type { Schema, Attribute } from '@strapi/strapi';

export interface PhonesPhones extends Schema.Component {
  collectionName: 'components_phones_phones';
  info: {
    displayName: 'Phones';
    description: '';
  };
  attributes: {
    Phone: Attribute.String;
    Country_Code: Attribute.String;
    Country: Attribute.Enumeration<['CR', 'US']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'phones.phones': PhonesPhones;
    }
  }
}
