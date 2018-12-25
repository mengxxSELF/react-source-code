// React.createElement(
//   div,
//   { className: 'ele' },
//   null
// )

class React {
  constructor (type, props) {
    this.type = type
    this.props = props
  }
}

class createElement {
  constructor(type, props, ...content) {
    // 因为 props 和 content 都会变为 React 对象的 props 属性值
    let allProps = Object.assign({}, props, { children: content})
    return new React(type, allProps)
  }
}

let ele = new createElement('div', { className: 'ele' }, 'i am div', new createElement('p', {}, 'i am p'))
console.log(ele)