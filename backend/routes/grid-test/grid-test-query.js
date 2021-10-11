const whereSearchCondition = (condition) => {
    let where = '';
    const conditionLength = condition.length;
    if(conditionLength > 0) {
        where += 'WHERE ';
        for(let i = 0 ; i < conditionLength ; ++i) {
            const keyword = condition[i].keyword;
            const value   = condition[i].value;
            where += `${keyword} = '${value}'`;

            if(i < conditionLength - 1)
                where += ' AND ';
        }
    }

    return where;
}

exports.selectAll = 'SELECT * FROM GRID_TEST'

exports.selectByPageSearch = (paging, searchQuery) => {
    let query = 'SELECT * FROM GRID_TEST';
    
    if(searchQuery.condition) {
        query += ' ';
        query += whereSearchCondition(searchQuery.condition);
    }

    if(paging) {
        query += ' ';
        query += `LIMIT ${paging.offset}, ${paging.rows}`;
    }

    console.log(query);
    return query;
}

exports.selectCountAll = (searchQuery) => {
    let query = 'SELECT COUNT(*) AS total FROM GRID_TEST';
    
    if(searchQuery.condition) {
        query += ' ';
        query += whereSearchCondition(searchQuery.condition);
    }

    console.log(query);
    return query;
}