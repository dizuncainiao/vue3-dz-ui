// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-standard-vue',
    'stylelint-config-html'
    // 'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: '**/*.less',
      customSyntax: 'postcss-less',
      extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-less',
        'stylelint-config-recess-order'
      ]
    }
  ]
}
