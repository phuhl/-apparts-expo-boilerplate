module.exports = {
  "env": {
    "es6": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2,
      {
        "VariableDeclarator": "first",
        "FunctionDeclaration": {
          parameters: "first",
          body: 1
        },
        "FunctionExpression": {
          parameters: "first",
          body: 1
        },
        "ArrayExpression": "first",
        "ObjectExpression": "first",
        "ImportDeclaration": "first"
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "max-len": ["error", { "code": 80, "ignoreUrls": true,
                           "ignoreRegExpLiterals": true}],
    "no-template-curly-in-string": "error",
    "no-console": 0,

    // STYLE
    // arrays
    "array-bracket-spacing": [
      "error", "always", {
        "singleValue": false,
        "objectsInArrays": false,
        "arraysInArrays": false
      }
    ],

    // somewhat conflicting?...
//    "array-bracket-newline": [ "error", { "multiline": true } ],
//    "array-element-newline": [ "error", { "multiline": true } ],
    // objects
    "object-curly-spacing": [
      "error", "always", { "objectsInObjects": false }
    ],
    "computed-property-spacing": [ "error", "never" ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "minimum"
      }
    ],
    // other stuff
    "keyword-spacing": ["error"],
    "space-in-parens": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "max-statements-per-line": ["error", { "max": 1 }],
    "brace-style": "error",
    "camelcase": "error",
    "comma-dangle": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "curly": "error",
    "no-var": "error",
    "prefer-const": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "operator-linebreak": ["error", "before"],
    //    "function-call-argument-newline": ["error", "never"],
    "no-trailing-spaces": "error",
    "no-multi-assign": "error",
    "no-unneeded-ternary": "error",
    "prefer-destructuring": ["error", {
      "object": true
    }, {
      "enforceForRenamedProperties": false
    }],
    "prefer-arrow-callback": "error",
    "object-shorthand": "error",
    "prefer-spread": "error",
    "prefer-rest-params": "error",
    // blocks
    "block-spacing": "error",
    // operators
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    "space-infix-ops": "error"
  },
  "overrides": [
    {
      "files": ["*-?test.js", "*test.js"],
      "env": {
        "jest": true
      }
    }
  ]
};
