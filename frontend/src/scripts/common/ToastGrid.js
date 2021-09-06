import Grid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';

export const drawGrid = (id, columns, dataArray) => {
    Grid.applyTheme('default', {
        row: {
            odd: {
                background: 'rgb(65, 65, 65)',
                text: 'cadetblue',
            },
            even: {
                background: 'rgb(85, 85, 85)',
                text: 'cadetblue',
            },
            hover: {
                background: 'darkslateblue',
            }
        },
        cell: {
            header: {
                background: 'rgb(35, 35, 35)',
                text: 'cadetblue',
                showHorizontalBorder: false,
                showVerticalBorder: true,
                border: 'rgb(150, 150, 150)'
                // border: '#fff',
            },
            normal: {
                text: 'cadetblue',
                showHorizontalBorder: false,
                showVerticalBorder: true,
                border: 'rgb(150, 150, 150)'
                // border: '#fff',
            },
        },
    }); 
    return new Grid({
        /* avoid GA */
        usageStatistics: false,

        el: document.getElementById(id),
        columns: columns,
        data: dataArray,
        
        header: {
            align: 'center',
            height: 30,
        },
        columnOptions: {
            resizable: true,
        },
        scrollX: false,
        scrollY: true,
        width: 'auto',
        rowHeight: 5,
        bodyHeight: 'fitToParent',
        // bodyHeight: 'auto',
        // heightResizable: true,
        
       
    });
}