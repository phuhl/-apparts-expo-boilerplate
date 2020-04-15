module.exports = {
  "env": {
    "es6": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
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
