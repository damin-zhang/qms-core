module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    'react/prop-types': 0,
    'space-before-function-paren': 0,
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': 'warn', // react-hooks 依赖检查
    'no-empty': 'warn', // catch{} 允许为空
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'react-hooks/rules-of-hooks': 'error',
  },
};
