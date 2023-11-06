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

export interface CommentsComments extends Schema.Component {
  collectionName: 'components_comments_comments';
  info: {
    displayName: 'Comments';
  };
  attributes: {
    Name: Attribute.String;
    Starts: Attribute.Enumeration<['One', 'Two', 'Three', 'Four', 'Five']>;
    Comment: Attribute.RichText;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    Content: Attribute.RichText;
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

export interface UnavailableUnavailable extends Schema.Component {
  collectionName: 'components_unavailable_unavailables';
  info: {
    displayName: 'Unavailable';
  };
  attributes: {
    Date: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'all-services.all-services': AllServicesAllServices;
      'comments.comments': CommentsComments;
      'experience.experience': ExperienceExperience;
      'our-values-items.our-values-items': OurValuesItemsOurValuesItems;
      'phones.phones': PhonesPhones;
      'unavailable.unavailable': UnavailableUnavailable;
    }
  }
}
