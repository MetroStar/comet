module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:react/recommended", "standard-with-typescript", "plugin:storybook/recommended"],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["eslint-plugin-react", "prettier"],
  "rules": {
    "semi": "warn",
    "quotes": "warn",
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "warn",
    "testing-library/no-unnecessary-act": "off",
    "react/prop-types": "off"
  },
};