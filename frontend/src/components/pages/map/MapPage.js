import React, { useState, useEffect } from 'react';
import './MapPage.css';
import { makeNode, makeGraph } from 'scripts/map/Cyto';
import Layout from 'components/layout/Layout';

function MapPage() {
    const [nodes, setNodes] = useState([]);
    const [style, setStyle] = useState([
        {
            selector: 'node[type="manager"]',
            style: {
                // shape: 'hexagon',
                'background-color': 'lightgreen',
                'width': '50px',
                'height': '50px',
                'background-image': 'url(/icon/manager.gif)',
                'label': 'data(label)'
    
            }
        },
        {
            selector: 'node[type="agent"]',
            style: {
                // shape: 'hexagon',
                'background-color': 'lightgreen',
                'width': '50px',
                'height': '50px',
                'background-image': 'url(/icon/agent.gif)',
                'label': 'data(label)'
    
            }
        },
        {
            selector: 'node[id="172.16.0.3"]',
            style: {
                // shape: 'hexagon',
                'background-color': 'red',
                'width': '50px',
                'height': '50px',
                'background-image': 'url(/icon/agent.gif)',
                'label': 'data(label)'
    
            }
        },
        {
            selector: 'edge',
            style: {
                label: 'data(label)'
            }
        }
    ]);
    const [layout, setLayout] = useState({
        name: 'grid',
    });
    useEffect(() => {
        let cy = makeGraph(document.getElementById('cy'), nodes, style, layout);

        cy.layout({ name: 'preset' }).run();

        const mapInfoList = [
            {
                id: 'id-1',
                label: 'label-1',
                type: 't1',
                posX: 100,
                posY: 100,
                group: 'nodes',
            },
            {
                id: 'id-2',
                label: 'label-2',
                type: 't1',
                posX: 400,
                posY: 100,
                group: 'nodes',
            },
            {
                id: 'id-3',
                label: 'label-3',
                type: 't1',
                posX: 230,
                posY: 400,
                group: 'nodes',
            },
            {
                id: 'id-4',
                label: 'label-4',
                type: 't1',
                source: 'id-1',
                target: 'id-2',
                group: 'edges',
            },
            {
                id: 'id-5',
                label: 'label-5',
                type: 't1',
                source: 'id-1',
                target: 'id-3',
                group: 'edges',
            },
        ]
        mapInfoList.forEach(mapInfo => {
            const group = mapInfo.group;
            if('nodes' === group) {
                const node = {
                    data: {
                        id: mapInfo.id,
                        label: mapInfo.label,
                        type: mapInfo.type
                    },
                    position: {
                        x: mapInfo.posX,
                        y: mapInfo.posY
                    },
                    group: group
                }
                nodes.push(node.data);
                cy.add(node);
            } else if('edges' === group) {
                const edge = {
                    data: {
                        id: mapInfo.id,
                        label: mapInfo.label,
                        type: mapInfo.type,
                        source: mapInfo.source,
                        target: mapInfo.target
                    },
                    group: group
                }
                cy.add(edge);
            }
        });
    });

  return (
        <>
            <Layout>
                <div id="container">
                    <div id="cy"></div>
                </div>
            </Layout>
        </>
  );
}

export default MapPage;