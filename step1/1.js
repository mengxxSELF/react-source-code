 // createElement("div", null, " ", user.name, " ");
 // createElement("div", {
 //   id: "name"
 // }, " ", user.name, " ");
 /*
 * type 标签类型
 * props    属性
 * content   标签内容
 */


// step1: jsx 转化为 react元素
// step2： react 元素变为一个对象

// let args = {type: 'h1', props: {id: 'name'}, content: 'hello world'}
// let end = {type: 'h1', props: {id: 'name'}, content: 'hello world'}

class React {
  constructor(type, props) {
    this.type = type
    this.props = props
  }
}

class CreateElement {
  constructor(type, props, ...children) {
    if (children.length == 1) children = children[0]
    let objProps = Object.assign({}, props, { children: children })
    return new React(type, objProps)
  }
}


let result = new CreateElement ('div', {id: 'mxx'}, 'hello')
// let result2 = new CreateElement ('div', {id: 'mxx'}, 'hello', new CreateElement ('p', {id: 'p'}, 'world'))
console.log(result);
// React { type: 'div', props: { id: 'mxx', children: 'hello' } }
// console.log(result, result2);



// step3： 使用render渲染(虚拟DOM)对象
// render(result, document.querySelect('app') )
export function render (result, root) {
  let {type, props} = result
  // 创建一个元素
  let ele = document.createElement(type)
  // <div></div>

  // 给元素增加属性或者内容
  for (let key in props) {
    if (key == 'children') {
      let res = props[key]
      let childrenType = typeof res
      // 如果是数组 则需要进行 遍历插入节点
      // ['hello', { type: 'p', props: ''}]
      if (childrenType == 'object') {
        // 继续遍历
        res.map((item) => {
          // 如果是文本节点 直接插入
          let itemType = typeof item
          if (itemType == 'string') {
            ele.appendChild(document.createTextNode(item))
          }else {
            // 不是文本 则创建dom元素进行插入
            render(item, ele)
          }
        })
      }

      // 如果不是数组 则是文本 直接插入父元素
      if (childrenType == 'string') {
        // ele.appendChild(document.createTextNode(props[key]))
        ele.innerHTML = res
      }

    } else {
      // 如果是属性 props
      let prop = props[key]
      ele.setAttribute(key, prop)
    }

  }



  // 插入根节点
  root.appendChild(ele)
}
