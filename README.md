# OpenCC-Service

> 基于 [opencc-js](https://github.com/nk2028/opencc-js) 的汉字简繁转换服务

提供简体、通用繁体、台湾正体、香港繁体的在线转换与对比功能，同时支持网页界面和 API 调用。

---

## 🔹 特性

- 支持 **简体 ↔ 通用繁体**  
- 支持 **简体 ↔ 台湾正体**  
- 支持 **简体 ↔ 香港繁体**  
- 支持批量文本转换  
- 提供网页界面和 RESTful API  
- 快捷键支持：Command/Ctrl + Enter  
- 统一美观的卡片式 UI

---

## 🌐 在线访问

- 域名部署：https://opencc.liuxianyu.cn  

---

## 📦 安装

```bash
git clone https://github.com/liuxy0551/opencc-service.git
cd opencc-service
pnpm install  # 或 npm install
pnpm start    # 或 npm start
```

服务默认运行在 `http://localhost:3040`

---

## ⚡ 接口说明

### 1. POST `/convert`

将文本按指定模式转换。

**请求示例：**

```json
{
  "text": "汉字转换测试",
  "mode": "s2t"
}
```

**mode 可选值：**

- `"s2t"`：简体 → 通用繁体  
- `"t2s"`：通用繁体 → 简体  
- `"s2tw"`：简体 → 台湾正体  
- `"s2hk"`：简体 → 香港繁体  

**响应示例：**

```json
{
  "input": "汉字转换测试",
  "output": "漢字轉換測試"
}
```

**curl 示例：**

```bash
curl -X POST https://opencc.liuxianyu.cn/convert \
  -H "Content-Type: application/json" \
  -d '{"text":"汉字转换测试","mode":"s2t"}'
```

---

### 2. POST `/compare`

将简体文本转换成三种繁体版本进行对比。

**请求示例：**

```json
{
  "text": "汉字转换测试"
}
```

**响应示例：**

```json
{
  "result": {
    "input": "汉字转换测试",
    "traditional": "漢字轉換測試",
    "taiwan": "漢字轉換測試",
    "hongkong": "漢字轉換測試"
  }
}
```

**curl 示例：**

```bash
curl -X POST https://opencc.liuxianyu.cn/compare \
  -H "Content-Type: application/json" \
  -d '{"text":"汉字转换测试"}'
```

---

## 🖥 网页使用

- 转换页面：[convert.html](https://opencc.liuxianyu.cn/convert.html)  
- 对比页面：[compare.html](https://opencc.liuxianyu.cn/compare.html)  

支持批量文本输入和 Command/Ctrl + Enter 快捷键触发转换。

---

## 🔗 相关链接

- 项目仓库（本项目）：[liuxy0551/opencc-service](https://github.com/liuxy0551/opencc-service)  
- 上游依赖：[nk2028/opencc-js](https://github.com/nk2028/opencc-js)  

---

## 📝 License

MIT
