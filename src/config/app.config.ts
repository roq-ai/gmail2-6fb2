interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Administrator'],
  tenantName: 'Organization',
  applicationName: 'gmail2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
