import type { Config } from '@jest/types';
declare const _default: Partial<{
    automock: boolean;
    bail: number | boolean;
    cache: boolean;
    cacheDirectory: string;
    ci: boolean;
    clearMocks: boolean;
    changedFilesWithAncestor: boolean;
    changedSince: string;
    collectCoverage: boolean;
    collectCoverageFrom: string[];
    coverageDirectory: string;
    coveragePathIgnorePatterns: string[];
    coverageProvider: "babel" | "v8";
    coverageReporters: Config.CoverageReporters;
    coverageThreshold: {
        [path: string]: Config.CoverageThresholdValue;
        global: Config.CoverageThresholdValue;
    };
    dependencyExtractor: string;
    detectLeaks: boolean;
    detectOpenHandles: boolean;
    displayName: string | Config.DisplayName;
    expand: boolean;
    extensionsToTreatAsEsm: string[];
    fakeTimers: Config.GlobalFakeTimersConfig & ((Config.FakeTimersConfig & {
        now?: number | undefined;
    }) | Config.LegacyFakeTimersConfig);
    filter: string;
    findRelatedTests: boolean;
    forceCoverageMatch: string[];
    forceExit: boolean;
    json: boolean;
    globals: Config.ConfigGlobals;
    globalSetup: string | null | undefined;
    globalTeardown: string | null | undefined;
    haste: Config.HasteConfig;
    id: string;
    injectGlobals: boolean;
    reporters: (string | Config.ReporterConfig)[];
    logHeapUsage: boolean;
    lastCommit: boolean;
    listTests: boolean;
    maxConcurrency: number;
    maxWorkers: string | number;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    moduleNameMapper: {
        [key: string]: string | string[];
    };
    modulePathIgnorePatterns: string[];
    modulePaths: string[];
    noStackTrace: boolean;
    notify: boolean;
    notifyMode: string;
    onlyChanged: boolean;
    onlyFailures: boolean;
    outputFile: string;
    passWithNoTests: boolean;
    preset: string | null | undefined;
    prettierPath: string | null | undefined;
    projects: (string | Config.InitialProjectOptions)[];
    replname: string | null | undefined;
    resetMocks: boolean;
    resetModules: boolean;
    resolver: string | null | undefined;
    restoreMocks: boolean;
    rootDir: string;
    roots: string[];
    runner: string;
    runTestsByPath: boolean;
    runtime: string;
    sandboxInjectedGlobals: string[];
    setupFiles: string[];
    setupFilesAfterEnv: string[];
    showSeed: boolean;
    silent: boolean;
    skipFilter: boolean;
    skipNodeResolution: boolean;
    slowTestThreshold: number;
    snapshotResolver: string;
    snapshotSerializers: string[];
    snapshotFormat: Partial<{
        readonly callToJSON: boolean;
        readonly compareKeys: null;
        readonly escapeRegex: boolean;
        readonly escapeString: boolean;
        readonly highlight: boolean;
        readonly indent: number;
        readonly maxDepth: number;
        readonly maxWidth: number;
        readonly min: boolean;
        readonly printBasicPrototype: boolean;
        readonly printFunctionName: boolean;
        readonly theme: Partial<{
            readonly comment: string;
            readonly content: string;
            readonly prop: string;
            readonly tag: string;
            readonly value: string;
        }>;
    }>;
    errorOnDeprecated: boolean;
    testEnvironment: string;
    testEnvironmentOptions: Record<string, unknown>;
    testFailureExitCode: string | number;
    testLocationInResults: boolean;
    testMatch: string[];
    testNamePattern: string;
    testPathIgnorePatterns: string[];
    testRegex: string | string[];
    testResultsProcessor: string;
    testRunner: string;
    testSequencer: string;
    testTimeout: number;
    transform: {
        [regex: string]: string | Config.TransformerConfig;
    };
    transformIgnorePatterns: string[];
    watchPathIgnorePatterns: string[];
    unmockedModulePathPatterns: string[];
    updateSnapshot: boolean;
    useStderr: boolean;
    verbose?: boolean | undefined;
    watch: boolean;
    watchAll: boolean;
    watchman: boolean;
    watchPlugins: (string | [string, Record<string, unknown>])[];
    workerIdleMemoryLimit: string | number;
}>;
export default _default;