import Parser from './parser.js';
import Renderer from './renderer.js';

class MyMarkdown {
    constructor() {
        this.parser = new Parser();
        this.renderer = new Renderer();
    }

    /**
     * 解析 markdown 为 ast
     * @param {*} src
     * @returns
     */
    parse(src) {
        const ast = this.parser.parse(src);
        return ast;
    }

    /**
     * 将 ast 转换为 html
     * @param {*} ast
     */
    render(ast) {
        return this.renderer.render(ast);
    }
}

export default MyMarkdown;
