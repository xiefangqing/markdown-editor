import MyMarkdown from './lib/my-markdown.js';

let input1 = `

# Hello *world*!

- 1*11*1
- 222
- 333

## 编译原理

`;

const editorElement = document.querySelector('#editor');
const viewerElement = document.querySelector('#viewer');

let myMarkdown = new MyMarkdown();

function parseAndRender() {
    viewerElement.innerHTML = '';

    // 解析 markdown 为 ast
    const ast = myMarkdown.parse(editorElement.value);

    // 将 ast 转换为 html
    const markdownElement = myMarkdown.render(ast);

    viewerElement.append(markdownElement);

    console.log('ast:', ast);
    console.log('markdownElement:', markdownElement);
}

editorElement.value = input1;

editorElement.addEventListener('input', parseAndRender);

parseAndRender();
