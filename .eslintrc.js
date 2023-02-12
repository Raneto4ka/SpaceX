module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:cypress/recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    rules: {
        indent: ['error', 4, { 'SwitchCase': 1, 'ignoredNodes': ['TemplateLiteral'] }],
        'comma-spacing': ['error', { before: false, after: true }],
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'brace-style': 'error',
        'prefer-const': [process.env.NODE_ENV === 'production' ? 'warn' : 'error', {
            destructuring: 'all',
        }],
        'template-curly-spacing' : 'off',
        'keyword-spacing': ['error',
            {
                overrides: {
                    if: { before: true, after: true },
                    for: { before: true, after: true },
                    while: { before: true, after: true },
                    catch: { before: true, after: false },
                }
            }],
        'space-infix-ops': ['error'],
        'spaced-comment': ['error', 'always'],
        'object-shorthand': 'error',
        'padded-blocks': ['error', 'never'],
        'max-len': ['error', {
            code: 120,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignorePattern: '(d="([\\s\\S]*?)")|(data:image/.)',
            ignoreStrings: true
        }],
        'space-before-function-paren': ['error',
            {
                anonymous: 'never', named: 'never', asyncArrow: 'always'
            }
        ],
        'comma-dangle': ['error', 'only-multiline'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'arrow-parens': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'no-prototype-builtins': ['off'],
        'no-param-reassign': 'error',
        'eol-last': ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'semi-spacing': ['error', { before: false, after: true }],
        'space-before-blocks': [
            'error',
            {
                functions: 'always',
                keywords: 'always',
                classes: 'always',
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'import/no-extraneous-dependencies': 0,
        'import/extensions': 0,
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            },
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'setup',
                    'asyncData',
                    'data',
                    'fetch',
                    'head',
                    'computed',
                    'watch',
                    'watchQuery',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
        'vue/max-len': [
            'error',
            {
                code: 120,
                template: 120,
                tabWidth: 4,
                comments: 120,
                ignoreUrls: true,
                ignoreHTMLTextContents: true,
                ignoreRegExpLiterals: true,
                ignorePattern: '(d="([\\s\\S]*?)")|(data:image/.)',
            },
        ],
        'vue/attribute-hyphenation': ['error', 'always', {
            'ignore': []
        }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 3,
            },
            'multiline': {
                'max': 1,
            }
        }],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }],
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
        }]
    },
    overrides: [
        {
            files: [
                '**/*.test.js',
            ],
            env: {
                jest: true
            }
        }
    ],
};
