{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended"
  ],
    "ignorePatterns": [
      "setupTests.ts",
      "serviceWorker.ts",
      "node_modules/**",
      "coverage/**",
      "dist",
      "**/*.js",
      "**/*.json",
      "src/constants/snippets/*.tsx"
    ],
      "parser": "@typescript-eslint/parser",
        "parserOptions": {
    "sourceType": "module",
      "project": "./tsconfig.json",
        "ecmaVersion": 2020,
          "ecmaFeatures": {
      "modules": true,
        "jsx": true
    }
  },
  "plugins": [
    "import",
    "import-newlines",
    "unused-imports",
    "react",
    "react-hooks",
    "eslint-plugin-react",
    "eslint-plugin-prefer-arrow",
    "@typescript-eslint"
  ],
    "rules": {
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
      "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
          "react/jsx-boolean-value": "error",
            "react/jsx-closing-bracket-location": [
              "error",
              "tag-aligned"
            ],
              "react/jsx-closing-tag-location": "error",
                "react/jsx-first-prop-new-line": [
                  "error",
                  "multiline-multiprop"
                ],
                  "react/jsx-key": "error",
                    "react/jsx-no-bind": "error",
                      "react/jsx-no-duplicate-props": "error",
                        "react/jsx-max-props-per-line": [
                          "error",
                          {
                            "maximum": {
                              "single": 2,
                              "multi": 1
                            }
                          }
                        ],
                          "react/self-closing-comp": "error",
                            "react/jsx-wrap-multilines": [
                              "error",
                              {
                                "declaration": "parens-new-line",
                                "assignment": "parens-new-line",
                                "return": "parens-new-line",
                                "arrow": "parens-new-line",
                                "condition": "parens-new-line",
                                "logical": "parens-new-line",
                                "prop": "parens-new-line"
                              }
                            ],
                              "react/no-danger-with-children": "error",
                                "@typescript-eslint/consistent-type-imports": "error",
                                  "@typescript-eslint/indent": [
                                    "error",
                                    2,
                                    {
                                      "SwitchCase": 1
                                    }
                                  ],
                                    "@typescript-eslint/member-delimiter-style": "error",
                                      "@typescript-eslint/no-floating-promises": "error",
                                        "@typescript-eslint/semi": "error",
                                          "@typescript-eslint/no-empty-interface": "off",
                                            "@typescript-eslint/ban-ts-comment": "off",
                                              "@typescript-eslint/no-empty-function": "off",
                                                "@typescript-eslint/no-explicit-any": "warn",
                                                  "@typescript-eslint/no-unused-vars": "error",
                                                    "array-bracket-spacing": [
                                                      "error",
                                                      "never"
                                                    ],
                                                      "arrow-spacing": "error",
                                                        "brace-style": [
                                                          "error",
                                                          "1tbs",
                                                          {
                                                            "allowSingleLine": false
                                                          }
                                                        ],
                                                          "comma-dangle": [
                                                            "error",
                                                            "always-multiline"
                                                          ],
                                                            "comma-spacing": "error",
                                                              "comma-style": "error",
                                                                "curly": [
                                                                  "error",
                                                                  "all"
                                                                ],
                                                                  "dot-location": [
                                                                    "error",
                                                                    "property"
                                                                  ],
                                                                    "eqeqeq": "error",
                                                                      "import-newlines/enforce": [
                                                                        "warn",
                                                                        {
                                                                          "items": 1,
                                                                          "semi": false
                                                                        }
                                                                      ],
                                                                        "unused-imports/no-unused-imports": "error",
                                                                          "import/order": [
                                                                            "error",
                                                                            {
                                                                              "groups": [
                                                                                "builtin",
                                                                                "external",
                                                                                "internal",
                                                                                "unknown",
                                                                                "parent",
                                                                                "sibling",
                                                                                "index",
                                                                                "object",
                                                                                "type"
                                                                              ],
                                                                              "pathGroups": [
                                                                                {
                                                                                  "pattern": "@/**",
                                                                                  "group": "internal",
                                                                                  "position": "after"
                                                                                }
                                                                              ],
                                                                              "pathGroupsExcludedImportTypes": [
                                                                                "builtin"
                                                                              ],
                                                                              "newlines-between": "always",
                                                                              "alphabetize": {
                                                                                "order": "asc",
                                                                                "caseInsensitive": true
                                                                              }
                                                                            }
                                                                          ],
                                                                            "import/no-unresolved": [
                                                                              "error",
                                                                              {
                                                                                "ignore": [
                                                                                  "^virtual:"
                                                                                ]
                                                                              }
                                                                            ],
                                                                              "key-spacing": [
                                                                                "error",
                                                                                {
                                                                                  "afterColon": true,
                                                                                  "beforeColon": false,
                                                                                  "mode": "strict"
                                                                                }
                                                                              ],
                                                                                "keyword-spacing": "error",
                                                                                  "no-extra-boolean-cast": "off",
                                                                                    "no-prototype-builtins": "off",
                                                                                      "no-unused-vars": [
                                                                                        "error",
                                                                                        {
                                                                                          "ignoreRestSiblings": true,
                                                                                          "argsIgnorePattern": "^_",
                                                                                          "destructuredArrayIgnorePattern": "[A-Z]",
                                                                                          "caughtErrors": "none"
                                                                                        }
                                                                                      ],
                                                                                        "no-restricted-imports": [
                                                                                          "error",
                                                                                          {
                                                                                            "paths": [
                                                                                              {
                                                                                                "name": "react",
                                                                                                "importNames": [
                                                                                                  "MouseEvent"
                                                                                                ],
                                                                                                "message": "Please do not import MouseEvent from react. Use React.MouseEvent instead."
                                                                                              }
                                                                                            ]
                                                                                          }
                                                                                        ],
                                                                                          "no-duplicate-case": "error",
                                                                                            "no-multi-spaces": "error",
                                                                                              "no-multiple-empty-lines": [
                                                                                                "error",
                                                                                                {
                                                                                                  "max": 1,
                                                                                                  "maxBOF": 0,
                                                                                                  "maxEOF": 1
                                                                                                }
                                                                                              ],
                                                                                                "no-param-reassign": "error",
                                                                                                  "no-unreachable-loop": "error",
                                                                                                    "no-whitespace-before-property": "error",
                                                                                                      "object-curly-spacing": [
                                                                                                        "error",
                                                                                                        "always"
                                                                                                      ],
                                                                                                        "object-shorthand": "error",
                                                                                                          "operator-linebreak": [
                                                                                                            "error",
                                                                                                            "before",
                                                                                                            {
                                                                                                              "overrides": {
                                                                                                                "+=": "ignore",
                                                                                                                "+": "ignore",
                                                                                                                "=": "ignore"
                                                                                                              }
                                                                                                            }
                                                                                                          ],
                                                                                                            "tailwindcss/no-custom-classname": "off",
                                                                                                              "tailwindcss/classnames-order": [
                                                                                                                "warn",
                                                                                                                {
                                                                                                                  "callees": [
                                                                                                                    "cn"
                                                                                                                  ],
                                                                                                                  "officialSorting": true,
                                                                                                                  "removeDuplicates": true,
                                                                                                                  "configPath": "tailwind.config"
                                                                                                                }
                                                                                                              ],
                                                                                                                "quotes": [
                                                                                                                  "error",
                                                                                                                  "single",
                                                                                                                  {
                                                                                                                    "allowTemplateLiterals": true
                                                                                                                  }
                                                                                                                ],
                                                                                                                  "semi-spacing": "error",
                                                                                                                    "semi": "off",
                                                                                                                      "sort-imports": [
                                                                                                                        "error",
                                                                                                                        {
                                                                                                                          "ignoreCase": true,
                                                                                                                          "ignoreDeclarationSort": true
                                                                                                                        }
                                                                                                                      ],
                                                                                                                        "space-in-parens": [
                                                                                                                          "error",
                                                                                                                          "never"
                                                                                                                        ],
                                                                                                                          "space-infix-ops": "error"
  },
  "overrides": [
    {
      "files": [
        "src/assets/workers/*.ts"
      ],
      "rules": {
        "import/default": "off"
      }
    }
  ],
    "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "typescript": {
        "project": [
          "app/tsconfig.json",
          "packages/*/tsconfig.json"
        ]
      }
    },
    "react": {
      "version": "detect"
    }
  }
}
