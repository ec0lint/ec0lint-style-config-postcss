'use strict';

module.exports = {
  extends: ['ec0lint-style-config-recommended'],
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
};
