'use strict';

module.exports = () => {
  const config = {};

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

  /**
  * 安全设置
  * @member Config#security
  * @property {String} domainWhiteList - 白名单列表
  * @property {Object} csrf - 跨站请求伪造
  */
  config.security = {
    domainWhiteList: [],
    csrf: {
      enable: false,
    },
  };

  /**
   * 性能监控
   * @member Config#alinode
   * @property {String} appid - 应用编号
   * @property {Object} secret - 应用密钥
   */
  config.alinode = {
    appid: '',
    secret: '',
  };

  return config;
};
