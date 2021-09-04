import cytoscape from 'cytoscape';

export const makeNode = (id, label) => {
    return {
        data: {
            id: id,
            label: label
        }
    }
}

export const makeGraph = (container, elements, style, layout) => {
    return cytoscape({
        container: container,
        elements: elements,
        style: style,
        layout:layout
    });
}