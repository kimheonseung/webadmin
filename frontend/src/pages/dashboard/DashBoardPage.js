import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import './DashboardPage.css';

function DashboardPage() {

    // const ResponsiveGridLayout = WidthProvider(Responsive);
    const GridLayoutWidthProvided = WidthProvider(GridLayout);

    const [width, setWidth] = useState(1200);
    const [height, setHeight] = useState(900);
    const [rowHeight, setRowHeight] = useState(200);
    const [cols, setCols] = useState(6);


    // const calculateContainerSize = () => {
    //     console.log(document.getElementById('grid-layout-wrap').offsetWidth);
    //     console.log(document.getElementById('grid-layout-wrap').offsetHeight);
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', calculateContainerSize);
    //     return () => {
    //         window.removeEventListener('resize', calculateContainerSize);
    //     }
    // });

    const layoutResponsive = {
        lg: [
            {i: 'a', x: 0, y: 0, w: 2, h: 3, static: true},
            {i: 'b', x: 3, y: 0, w: 2, h: 2, static: true},
            {i: 'c', x: 3, y: 2, w: 2, h: 1, static: true},
            {i: 'd', x: 6, y: 0, w: 1, h: 3, static: true},
            {i: 'e', x: 2, y: 0, w: 1, h: 1, static: true},
            {i: 'f', x: 2, y: 1, w: 1, h: 1, static: true},
            {i: 'g', x: 2, y: 2, w: 1, h: 1, static: true},
        ]
    }

    const layout = [
        {i: 'a', x: 0, y: 0, w: 2, h: 3, static: true},
        {i: 'b', x: 3, y: 0, w: 2, h: 2, static: true},
        {i: 'c', x: 3, y: 2, w: 2, h: 1, static: true},
        {i: 'd', x: 6, y: 0, w: 1, h: 3, static: true},
        {i: 'e', x: 2, y: 0, w: 1, h: 1, static: true},
        {i: 'f', x: 2, y: 1, w: 1, h: 1, static: true},
        {i: 'g', x: 2, y: 2, w: 1, h: 1, static: true},
    ]

  return (
      <>
        <Layout>
            {/* <div id="grid-layout-wrap"> */}
                <GridLayoutWidthProvided className="layout" layout={layout} maxRows={cols} rowHeight={rowHeight} /*width={width}*/ cols={cols}>
                    <div className="t-text red" key="a">i: 'a', x: 0, y: 0, w: 2, h: 3</div>
                    <div className="t-text orange" key="b">i: 'b', x: 3, y: 0, w: 2, h: 2</div>
                    <div className="t-text yellow" key="c">i: 'c', x: 3, y: 2, w: 2, h: 1</div>
                    <div className="t-text green" key="d">i: 'd', x: 6, y: 0, w: 1, h: 3</div>
                    <div className="t-text blue" key="e">i: 'e', x: 2, y: 0, w: 1, h: 1</div>
                    <div className="t-text purple" key="f">i: 'f', x: 2, y: 1, w: 1, h: 1</div>
                    <div className="t-text white" key="g">i: 'g', x: 2, y: 2, w: 1, h: 1</div>
                </GridLayoutWidthProvided>
                {/* <ResponsiveGridLayout className="layout" layouts={layoutResponsive} breakpoints={{lg: width, md: width, sm: width, xs: width, xxs: width}} cosl={{lg: 6, md: 6, sm: 6, xs: 6, xxs: 6}}>
                    <div className="t-text red" key="a">i: 'a', x: 0, y: 0, w: 2, h: 3</div>
                    <div className="t-text red" key="b">i: 'b', x: 3, y: 0, w: 2, h: 2</div>
                    <div className="t-text red" key="c">i: 'c', x: 3, y: 2, w: 2, h: 1</div>
                    <div className="t-text red" key="d">i: 'd', x: 6, y: 0, w: 1, h: 3</div>
                    <div className="t-text red" key="e">i: 'e', x: 2, y: 0, w: 1, h: 1</div>
                    <div className="t-text red" key="f">i: 'f', x: 2, y: 1, w: 1, h: 1</div>
                    <div className="t-text red" key="g">i: 'g', x: 2, y: 2, w: 1, h: 1</div>
                </ResponsiveGridLayout> */}
            {/* </div> */}
        </Layout>
      </>
  );
}

export default DashboardPage;