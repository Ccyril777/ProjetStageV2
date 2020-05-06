var columns = [
	{headerName: 'ID', field: 'id', sortable: true, filter: true, rowGroup: true, editable: true},
	{headerName: 'Nom usuel', field: 'usual_name', sortable: true, filter: true, rowGroup: true, editable: true},
	{headerName: 'Nom SII', field: 'sii_name', sortable: true, filter: true, rowGroup: true, editable: true},
	{headerName: 'Description', field: 'description', sortable: true, filter: true, editable: true},
	{headerName: 'Confidentialité', field: 'confidentialite', sortable: true, filter: true, editable: true, cellRenderer: ObjectCellRenderer,cellEditor: ConfEditor},
    {headerName: 'Typologie MI', field: 'typology', sortable: true, filter: true, editable: true, cellRenderer: ObjectCellRenderer,cellEditor: TypoEditor},
    {headerName: 'Domaine', field: 'domain', sortable: true, filter: true, editable: true, cellRenderer: ObjectCellRenderer,cellEditor: DomEditor},
    {headerName: 'SI Support', field: 'Si support', sortable: true, filter: true, editable: true, cellRenderer: ObjectCellRenderer,cellEditor: SupEditor}
];

var gridOptions = {
    columnDefs: columns,
	rowData: [],
	rowDeselection: true,
    autocomplete:true,
    groupSelectsChildren: true,
    editable: true,
    resizable: true,
    filter: true,
	sortable: true,
};

function onQuickFilterChanged() {
	gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value);
}

	new agGrid.Grid(document.querySelector('#myGrid'), gridOptions);

document.querySelector('#addRow').addEventListener("click", function() {
    gridOptions.api.addItems([{}]);
});
