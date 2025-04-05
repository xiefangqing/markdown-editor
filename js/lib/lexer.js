import Tokenizer from './tokenizer.js';

class Lexer {
    constructor() {
        /**
         * 存储所有解析后的 token
         */
        this.tokens = [];

        this.tokenizer = new Tokenizer();
    }

    /**
     * 对 src 进行分词
     * @param {*} src
     */
    lex(src) {
        this.tokens = [];

        src = this.preprocess(src);

        this.parseBlock(src, this.tokens);

        return this.tokens;
    }

    /**
     * 预处理
     * @param {*} src
     */
    preprocess(src) {
        return src.replace(/\r\n?|\n/g, '\n').replace(/\t/g, '    ');
    }

    parseBlock(src, tokens) {
        let token;

        // 通过 while 循环对 src 的内容进行规则匹配（正则）
        while (src) {
            // newline
            if ((token = this.tokenizer.newline(src))) {
                // 把匹配的内容从原 src 中给去掉
                src = src.slice(token.raw.length);
                tokens.push(token);
                continue;
            }

            // heading
            if ((token = this.tokenizer.heading(src))) {
                this.inlineToken(token.text, token.children);

                src = src.slice(token.raw.length);
                tokens.push(token);
                continue;
            }

            // list
            if ((token = this.tokenizer.list(src))) {
                this.inlineToken(token.text, token.children);

                src = src.slice(token.raw.length);
                tokens.push(token);
                continue;
            }

            // 兜底
            if (src) {
                // throw new Error(`Error：${src}`);
                src = '';
            }
        }
    }

    inlineToken(src, tokens = []) {
        let token;

        while (src) {
            // em
            if ((token = this.tokenizer.em(src))) {
                src = src.slice(token.raw.length);
                tokens.push(token);
                continue;
            }

            // text
            if ((token = this.tokenizer.text(src))) {
                src = src.slice(token.raw.length);
                tokens.push(token);
                continue;
            }

            // 兜底
            if (src) {
                // throw new Error(`Error：${src}`);
                src = '';
            }
        }
    }
}

export default Lexer;
