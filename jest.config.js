module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src/app'],
  setupFilesAfterEnv: ['jest-extended/all'],
};
