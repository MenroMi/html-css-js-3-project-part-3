import {IAdvantages} from '../types';

export const navItems: string[] = ['Feauters', 'Team', 'Sign In'];

export enum BUTTON_TYPES {
  SUBMIT = 'submit',
  BUTTON = 'button',
  RESET = 'reset',
}

export const advantages: IAdvantages[] = [
  {
    title: 'Access your files, anywhere',
    descr:
      'The ablity to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    icon: './icon-access-anywhere.svg',
  },
  {
    title: 'Security you can trust',
    descr:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    icon: './icon-security.svg',
  },
  {
    title: 'Real-time collaboration',
    descr:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    icon: './icon-collaboration.svg',
  },
  {
    title: 'Store any type of file',
    descr:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    icon: './icon-any-file.svg',
  },
];

export const footerMenuItems = [
  'About Us',
  'Jobs',
  'Press',
  'Blog',
  'Contact Us',
  'Terms',
  'Privacy',
];

export const socialMedia = ['facebook', 'twitter', 'instagram'];

export const regexpEmail: RegExp =
  /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
