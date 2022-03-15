"use strict";
const dataInfo = { price: 1.796, money: 1.716, other: '123' };
const dataInfoArr = [{ price: 1.796, money: 1.716, other: '123' }];
const rules = [
    {
        field: 'price',
        precision: 2,
        roundingMode: 'rounding'
    },
    {
        field: 'money',
        precision: 2,
        roundingMode: 'rounding'
    },
];
class NumberTool {
    constructor() {
    }
    static format(data, rules) {
        const condition = (typeof data === 'number' && (data === data)) || typeof data === 'string';
        if (Object.prototype.toString.call(data) === '[object Object]') {
            // fixme
            return NumberTool.objectFormat(data, rules);
        }
        else if (Array.isArray(data)) {
            data.forEach(item => {
                NumberTool.objectFormat(item, rules);
            });
            return data; // 返回
        }
        else if (condition) {
            const { precision, roundingMode } = rules[0];
            // fixme
            return NumberTool.simpleDataFormat(data, precision, roundingMode); // 返回 number
        }
        else {
            return data;
        }
    }
    /**
     * 对象的格式化，针对数据做处理，不补零
     * @param data
     * @param rules
     */
    static objectFormat(data, rules) {
        const keys = Object.keys(data);
        const ruleFields = rules.map(item => item.field);
        keys.forEach(key => {
            if (ruleFields.indexOf(key) > -1) {
                const index = rules.findIndex(rule => rule.field === key);
                const { precision, roundingMode } = rules[index];
                data[key] = NumberTool.simpleDataFormat(data[key], precision, roundingMode);
            }
        });
        return data;
    }
    /**
     * 基础数据类型的格式化
     * @param data 需要转换的数据
     * @param precision 精度
     * @param roundingMode 取整方式
     */
    static simpleDataFormat(data, precision, roundingMode) {
        let result = NumberTool.getNumber(data);
        if (roundingMode === 'rounding') {
            result = NumberTool.round(result, precision);
        }
        return result;
    }
    /**
     * 根据精度进行补 0，比如：1.8 保留两位是 '1.80'
     * 返回字符串，仅作页面展示
     * @param number
     * @param precision
     */
    static numberToString(number, precision) {
        try {
            const arr = String(number).split('.');
            const integer = arr[0];
            const decimal = arr[1];
            return decimal.length === precision ? number : `${integer}.${decimal}${'0'.repeat(precision - decimal.length)}`;
        }
        catch (e) {
            throw new Error(`${e} 传入的数据有误，不是数值！！！`);
        }
    }
    /**
     * 取整方法
     * @param number
     * @param precision
     * @private
     */
    static round(number, precision) {
        return Math.round(Number(+number + 'e' + precision)) / Math.pow(10, precision);
    }
    /**
     * 返回一个有效的数值，不可转为有效数值的转为 0
     * @param number
     * @private
     */
    static getNumber(number) {
        try {
            return Number(number);
        }
        catch (e) {
            console.warn(`${e} 传入的数据有误，不是数值！！！`);
            return 0;
        }
    }
}
// 根据小数位取整
const resultNumber = NumberTool.simpleDataFormat(1.796, 2, 'rounding');
const resultNumber2 = NumberTool.format(1.792, [{ precision: 2, roundingMode: 'rounding' }]);
console.log(resultNumber); // 1.8
console.log(resultNumber2); // 1.79
// 取整后的数值补零
console.log(NumberTool.numberToString(resultNumber, 3)); // '1.800'
// 对象的取整
const resultObj = NumberTool.format(dataInfo, rules);
console.log(resultObj);
// {
//     "price": 1.8,
//     "money": 1.72,
//     "other": "123"
// }
// 数组的取整
const resultArr = NumberTool.format(dataInfoArr, rules);
console.log(resultArr);
// [
//     {
//         "price": 1.8,
//         "money": 1.72,
//         "other": "123"
//     }
// ]
//# sourceMappingURL=NumberTool.js.map