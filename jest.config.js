module.exports = {
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],

    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
        '.*\\.(svg)$': '<rootDir>/__mocks__/filesMock.js'
    },

    collectCoverage: false,
    collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '.*\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/filesMock.js'
    },

    verbose: true,

    transformIgnorePatterns: ['/node_modules/'],

    testEnvironment: 'jsdom',

    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
};
