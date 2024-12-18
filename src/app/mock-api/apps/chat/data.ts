/* eslint-disable */
import * as moment from 'moment';

/**
 * Attachments are common and will be filled from here
 * to keep the demo data maintainable.
 */
const _attachments = {
    media: [
        'assets/images/cards/01-320x200.jpg',
        'assets/images/cards/02-320x200.jpg',
        'assets/images/cards/03-320x200.jpg',
        'assets/images/cards/04-320x200.jpg',
        'assets/images/cards/05-320x200.jpg',
        'assets/images/cards/06-320x200.jpg',
        'assets/images/cards/07-320x200.jpg',
        'assets/images/cards/08-320x200.jpg'
    ],
    docs : [],
    links: []
};

/**
 *  If a message belongs to our user, it's marked by setting it as
 *  'me'. If it belongs to the user we are chatting with, then it
 *  left empty. We will be using this same conversation for each chat
 *  to keep things more maintainable for the demo.
 */
export const messages = [];
export const chats = [];
export const contacts = [];
export const profile: any = {
    id    : 'cfaad35d-07a3-4447-a6c3-d8c3d54fd5df',
    name  : 'Brian Hughes',
    email : 'admin',
    avatar: 'assets/images/avatars/brian-hughes.jpg',
    about : 'Hi there! I\'m using FuseChat.'
};
