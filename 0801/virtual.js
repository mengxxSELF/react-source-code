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

console.log(virtualDom);
