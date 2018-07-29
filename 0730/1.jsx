import render from './1.js'
let result = { type: 'div', props: { id: 'mxx', children: 'hello' } }
render(result, document.querySelect('app') )
