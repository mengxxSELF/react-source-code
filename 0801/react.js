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

export {CreateElement}