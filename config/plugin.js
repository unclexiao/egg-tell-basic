'use strict';

// 文档型数据库
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// 高性能缓存
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

// 表单验证
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// 跨域设置
exports.cors = {
  enable: false,
  package: 'egg-cors',
};

// 性能监控平台
exports.alinode = {
  enable: false,
  package: 'egg-alinode',
};