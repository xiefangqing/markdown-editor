import Lexer from './lexer.js';
import AST from './ast.js';

class Parser {
    constructor() {
        this.lexer = new Lexer();
    }

    /**
     * 解析传入的 markdown 内容
     * @param {*} src
     */
    parse(src) {
        const tokens = this.lexer.lex(src);
        console.log('tokens:', tokens);

        const ast = new AST().createAST(tokens);

        return ast;
    }
}

export default Parser;
