const fs = require('fs'),
    path = require('path'),
    dataBash = require('../dataBash');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/**
 * @return {string}
 */
function GUID(name = "") {
    /**
     * @return {string}
     */
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (name + S4() + S4() + "-" + S4() + "-" + S4());

}

module.exports = {
    // 初始化项目
    init: async ctx => {
        return;
    },

    // 配置数据
    configuration: async ctx => {
        // 对地区进行处理
        return;
    }
};
