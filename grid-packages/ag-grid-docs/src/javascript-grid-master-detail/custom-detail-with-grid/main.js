var gridOptions = {
    columnDefs: [
        // group cell renderer needed for expand / collapse icons
        { field: 'name', cellRenderer: 'agGroupCellRenderer' },
        { field: 'account' },
        { field: 'calls' },
        { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" }
    ],
    defaultColDef: {
        flex: 1
    },
    masterDetail: true,
    detailRowHeight: 310,
    detailCellRenderer: "myDetailCellRenderer",
    components: {
        myDetailCellRenderer: DetailCellRenderer
    },
    onFirstDataRendered: onFirstDataRendered
};

function onFirstDataRendered(params) {
    // arbitrarily expand a row for presentational purposes
    setTimeout(function() { params.api.getDisplayedRowAtIndex(1).setExpanded(true); }, 0);
}

function printDetailGridInfo() {
    console.log("Currently registered detail grid's: ");
    gridOptions.api.forEachDetailGridInfo(function(detailGridInfo) {
        console.log(detailGridInfo);
    });
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/custom-detail-with-grid/data/data.json' }).then(function(data) {
        gridOptions.api.setRowData(data);
    });
});