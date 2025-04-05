class Renderer {
    render(ast) {
        let rootElement = document.createElement('div');

        this.renderNodes(ast.children, rootElement);

        return rootElement;
    }

    renderNodes(children, parent) {
        if (Array.isArray(children)) {
            children.forEach((n) => {
                let el;
                switch (n.type) {
                    case 'heading':
                        el = document.createElement(`h${n.depth}`);
                        parent.append(el);
                        this.renderNodes(n.children, el);
                        break;
                    case 'text':
                        el = document.createElement('span');
                        el.innerText = n.text;
                        parent.append(el);
                        this.renderNodes(n.children, el);
                        break;
                    case 'em':
                        el = document.createElement('em');
                        el.innerText = n.text;
                        parent.append(el);
                        this.renderNodes(n.children, el);
                        break;
                    case 'listContainer':
                        el = document.createElement('ul');
                        parent.append(el);
                        this.renderNodes(n.children, el);
                        break;
                    case 'list':
                        el = document.createElement('li');
                        parent.append(el);
                        this.renderNodes(n.children, el);
                        break;
                    default:
                        break;
                }
            });
        }
    }
}

export default Renderer;
