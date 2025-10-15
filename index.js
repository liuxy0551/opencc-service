const express = require("express");
const path = require("path");
const OpenCC = require("opencc-js");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// 初始化转换器
const converters = {
    s2t: OpenCC.Converter({ from: "cn", to: "t" }),
    t2s: OpenCC.Converter({ from: "t", to: "cn" }),
    s2tw: OpenCC.Converter({ from: "cn", to: "tw" }),
    s2hk: OpenCC.Converter({ from: "cn", to: "hk" }),
};

// /convert 接口
app.post("/convert", (req, res) => {
    const { text, mode } = req.body;
    if (!text || typeof text !== "string") return res.status(400).json({ error: "请输入文本" });

    const converter = converters[mode];
    if (!converter) return res.status(400).json({ error: `未知转换模式: ${mode}` });

    try {
        const output = converter(text);
        res.json({ input: text, output });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// /compare 接口
app.post("/compare", (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== "string") return res.status(400).json({ error: "请输入文本" });

    try {
        const result = {
            input: text,
            traditional: converters.s2t(text),
            taiwan: converters.s2tw(text),
            hongkong: converters.s2hk(text),
        };
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const port = 3040;
app.listen(port, () => {
    console.log(`✅ OpenCC-JS 2.x 服务启动: http://localhost:${port}`);
});
