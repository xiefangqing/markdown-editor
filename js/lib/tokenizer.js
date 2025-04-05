import Rules from './rules.js';

class Tokenizer {
    /**
     * newline
     * @param {*} src
     * @returns
     */
    newline(src) {
        const cap = Rules.block.newline.exec(src);

        if (cap) {
            return {
                // 该节点的类型
                type: 'newline',
                // 匹配到的内容
                raw: cap[0],
            };
        }
    }

    heading(src) {
        const cap = Rules.block.heading.exec(src);

        if (cap) {
            return {
                type: 'heading',
                raw: cap[0],
                depth: cap[1].length,
                text: cap[2].trim(),
                children: [],
            };
        }
    }

    list(src) {
        const cap = Rules.block.list.exec(src);

        if (cap) {
            return {
                type: 'list',
                raw: cap[0],
                text: cap?.[2]?.trim(),
                children: [],
            };
        }
    }

    text(src) {
        const cap = Rules.inline.text.exec(src);

        if (cap) {
            return {
                type: 'text',
                raw: cap[0],
                text: cap[0],
            };
        }
    }

    em(src) {
        const cap = Rules.inline.em.exec(src);

        if (cap) {
            return {
                type: 'em',
                raw: cap[0],
                text: cap[1],
            };
        }
    }
}

export default Tokenizer;
