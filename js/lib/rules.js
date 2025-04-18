/**
 * Markdown 解析规则
 */
export default {
    block: {
        newline: /^(?: *(?:\n|$))+/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        list: /^( {0,3}(?:[*+-]|\d{1,9}[.)]))( [^\n]+?)?(?:\n|$)/,
    },
    inline: {
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        em: /^\*([^\*]+)\*/,
    },
};
