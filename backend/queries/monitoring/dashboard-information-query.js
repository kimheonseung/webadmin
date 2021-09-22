exports.selectByDashboardId = (dashboardId) => {
    return `SELECT  d.ID AS dashboardId, d.NAME AS dashboardName, d.ROW AS row, d.COLUMN AS 'column', l.ID AS dashboardLayoutId, l.X AS x, l.Y AS y, l.W AS w, l.H AS h, l.CHART_ID AS chartId, c.TEST AS chartTest
            FROM    DASHBOARD d 
                INNER JOIN DASHBOARD_LAYOUT l ON d.ID = l.DASHBOARD_ID
                INNER JOIN CHART c ON l.CHART_ID = c.ID
            WHERE   d.ID = '${dashboardId}'`;
}