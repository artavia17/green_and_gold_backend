import type { Schema, Attribute } from '@strapi/strapi';

export interface AllServicesAllServices extends Schema.Component {
  collectionName: 'components_all_services_all_services';
  info: {
    displayName: 'All_Services';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
    Image: Attribute.Media;
  };
}

export interface OurValuesItemsOurValuesItems extends Schema.Component {
  collectionName: 'components_our_values_items_our_values_items';
  info: {
    displayName: 'Our_Values_Items';
  };
  attributes: {
    Icon: Attribute.Media;
    Title: Attribute.String;
  };
}

export interface PhonesPhones extends Schema.Component {
  collectionName: 'components_phones_phones';
  info: {
    displayName: 'Phones';
    description: '';
  };
  attributes: {
    Phone: Attribute.String;
    Country: Attribute.Enumeration<['CR', 'US']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'all-services.all-services': AllServicesAllServices;
      'our-values-items.our-values-items': OurValuesItemsOurValuesItems;
      'phones.phones': PhonesPhones;
    }
  }
}
