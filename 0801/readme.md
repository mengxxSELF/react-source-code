* 节点类型相同 产生一个补丁包 

```javascript
{type: 'ATTRS', attr:{class: 'you_class'}}
```
* 新的dom节点不存在

```javascript
{type: 'REMOVE', index: 2}
```

* 节点类型不一致，直接替换

```
{type: 'REPLACE', newNode: newNode}
```

* 文本变化

```
{type: 'TEXT', text: 'my'}
```
