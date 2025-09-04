/* eslint-disable no-console */

export const log = console.log;
export const error = console.error;

export const getFriendlyDirectoryName = (name: string) => {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
