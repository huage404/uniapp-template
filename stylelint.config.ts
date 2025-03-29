/** @type {import('stylelint').Config} */
export default {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-standard-vue/scss',
	],
	rules: {
		// 为颜色函数指定现代或传统的符号。
		'color-function-notation': ['legacy', {'ignore': ['with-var-inside']}],
		// 指定 alpha 值的百分比或数字符号。
		'alpha-value-notation': 'number',
		// 不允许未知单位
		'unit-no-unknown': [
			true,
			{
				ignoreUnits: ['rpx'],
			},
		],
		'declaration-property-value-no-unknown': null,
	},
}
