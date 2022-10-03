module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src/app'],
  setupFilesAfterEnv: ['jest-extended/all', '@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx'],
  coveragePathIgnorePatterns: ['src/app/index.js', 'src/app/globalStyles.js'],
};
