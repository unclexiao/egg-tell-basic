# egg-tell-basic
[![npm version](https://badge.fury.io/js/egg-tell-basic.svg)](https://badge.fury.io/js/egg-tell-basic)

基于[EggJS](https://eggjs.org/zh-cn/)的企业内部框架

## 技术选型
- 文档型数据库：[MongoDB](https://www.mongodb.com/)
- 高性能缓存：[Redis](https://redis.io/)
- 对象云存储：[OSS](https://www.aliyun.com/product/oss/)

## 如何使用
### 安装模块

```bash
npm i egg-tell-basic
```

### 引入框架

在 **package.json** 指定 **egg.framework**，默认为 **egg**

```json
{
  "egg": {
    "declarations": true,
    "framework": "egg-tell-basic"
  },
  "dependencies": {
    "egg": "^2.15.1",
    "egg-scripts": "^2.11.0",
    "egg-tell-basic": "^1.0.1"
  },
}
```
### 添加配置

指定[配置文件](https://eggjs.org/zh-cn/basics/config.html)覆盖数据库地址

```javascript
config.redis = {
    client: {
        host: process.env.EGG_REDIS_HOST || '127.0.0.1',
        port: process.env.EGG_REDIS_PORT || 6379,
        password: process.env.EGG_REDIS_PASSWORD || '',
        db: process.env.EGG_REDIS_DB || '10',
    },
};

config.mongoose = {
    url: 'mongodb://localhost:27017/teller',
    options: {
        useNewUrlParser: true,
        autoIndex: true,
        useCreateIndex: true,
    },
};
```