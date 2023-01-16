"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_jest_1 = require("ts-jest");
const tsconfig_json_1 = require("./tsconfig.json");
exports.default = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': [
            '@swc/jest',
            {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: false,
                        decorators: true,
                    },
                    target: 'es2017',
                    keepClassNames: true,
                    transform: {
                        legacyDecorator: true,
                        decoratorMetadata: true,
                    },
                },
                module: {
                    type: 'es6',
                    noInterop: false,
                },
            },
        ],
    },
    collectCoverageFrom: ['<rootDir>/src/**/*.(t|j)s'],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    moduleNameMapper: (0, ts_jest_1.pathsToModuleNameMapper)(tsconfig_json_1.compilerOptions.paths, {
        prefix: '<rootDir>',
    }),
    preset: 'ts-jest',
};
//# sourceMappingURL=jest.config.js.map