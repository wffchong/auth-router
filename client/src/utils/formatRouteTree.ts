import { IRoute } from '@/typings'

export function formatRouteTree(data: IRoute[]) {
    // pid为0的代表一级路由
    const parents = data.filter(routeInfo => routeInfo.pid === 0)
    const children = data.filter(routeInfo => routeInfo.pid !== 0)

    // 传入一级路由和子路由
    const dataToTree = (parents: IRoute[], children: IRoute[]) => {
        parents.map(parent => {
            children.map((child, index) => {
                if (parent.id === child.pid) {
                    // 拷贝一份 children
                    let _children = JSON.parse(JSON.stringify(children))
                    // 删除当前已经遍历过得孩子节点
                    _children.splice(index, 1)
                    // 递归
                    dataToTree([child], _children)

                    if (parent.children) {
                        parent.children.push(child)
                    } else {
                        parent.children = [child]
                    }
                }
            })
        })
    }

    dataToTree(parents, children)

    return parents;
}
