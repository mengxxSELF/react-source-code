// import {creatElement} from './react'
// import diff from './dom'
class React {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

function creatElement(type, props, children) {
  return new React(type, props, children)
}

let virtualDom = creatElement('ul', {class: 'list'}, [
  creatElement('li', {class: 'lia'}, ['a']),
  creatElement('li', {class: 'lib'}, ['b']),
  creatElement('li', {class: 'lic'}, ['c'])
])

let newVirtual = creatElement('ul', {class: 'listNew'}, [
  creatElement('li', {class: 'more'}, ['a']),
  creatElement('li', {class: 'lib'}, ['b']),
  creatElement('li', {class: 'lic'}, ['c'])
])

// console.log(virtualDom);

let INDEX = 0
// 遍历所有节点
function diff(oldTree, newTree) {
  // 补丁包
  let patches = {}

  //  将比较后的结果放入补丁包
  walk(oldTree, newTree, INDEX, patches)


  return patches
}

// {type: xxx, props: xxx, children: xxx}
const ATTRS = 'ATTRS'

function walk(oldNode, newNode, index, allPatch) {
  let currentPatch = {} // 每一个节点的补丁

  let {type: oldType, props: oldProps} = oldNode
  let {type: newType, props: newProps} = newNode

  // 1 判断节点类型 
  if (oldType === newType) {
    // 类型一致 比较属性 将更改后的 补丁包返回
    let diffAttr = getDiffAttr(oldProps, newProps)
    console.log(diffAttr, 'diffAttr');

  // 判断diffAttr是否是空的
    if (Object.entries(diffAttr).length > 0) {
      currentPatch.push({type: ATTRS, attrs: diffAttr})
    } 
  }

  // 将本节点的补丁 放入总补丁包中
  allPatch[index] = currentPatch
}

function getDiffAttr(oldProps, newProps) {
  if (Object.is(oldProps, newProps)) return {}
  
  let patch = {}

  for (const key in oldProps) {
    // 判断新的节点里 有没有 旧的的 值
    if (oldProps[key] !== newProps[key]) {
      // 不等于 证明 新的更改了
      patch[key] = newProps[key]
    }
  }

  // 有的属性 在 newProps中存在 但是在 oldProps 中不存在
  for (const key in newProps) {
    if (!oldProps.hasOwnProperty(key)) {
      patch[key] = newProps[key]
    }
  }

  return patch
}

let end = diff(virtualDom, newVirtual)
console.log(end, 'end');

// export default diff