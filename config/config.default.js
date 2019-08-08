'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * 测试配置
   * @member Config#test
   * @property {String} key - 项目名
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  /**
   * 跨域设置
   * @member Config#cors
   * @property {String} allowMethods - 允许的方法
   * @property {bool} credentials - 是否带上请求凭证
   */
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  /**
   * 高性能缓存数据库
   * @member Config#redis
   * @property {String} host - 主机
   * @property {int} port - 端口
   * @property {String} password - 密码
   * @property {String} db - 数据库空间
   */
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '10',
    },
  };

  /**
   * 文档型数据库
   * @member Config#mongoose
   * @property {String} url - 地址
   * @property {Object} optints - 参数
   */
  config.mongoose = {
    url: 'mongodb://localhost:27017/teller',
    options: {
      useNewUrlParser: true,
      autoIndex: true,
      useCreateIndex: true,
    },
  };

  return config;
};
