const HASH_CHARS = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

export const generateIntegrationHash = () => {
  return HASH_CHARS.split('')
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join('')
    .substring(0, 5);
};
