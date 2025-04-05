class AST {
    constructor(tokens) {
        this.ast = {
            type: 'root',
            children: [],
        };
    }

    createAST(tokens) {
        this.createChildren(tokens, this.ast);
        return this.ast;
    }

    createChildren(tokens, parent) {
        /**
         * list 容器
         */
        let listContainer;
        /**
         * 原始的 parent
         */
        const _parent = parent;

        tokens.forEach((token) => {
            switch (token.type) {
                case 'list':
                    if (!listContainer) {
                        listContainer = {
                            type: 'listContainer',
                            children: [],
                        };
                        parent.children.push(listContainer);
                    }
                    parent = listContainer;
                    break;
                default:
                    listContainer = null;
                    parent = _parent;
                    break;
            }

            this.createNode(token, parent);
        });
    }

    createNode(token, parent) {
        parent.children.push({
            ...token,
        });
    }
}

export default AST;
