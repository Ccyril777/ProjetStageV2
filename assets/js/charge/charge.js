// function loadData() {
// 	var mydata = [
// 			{ group:'Breads', id:'1', name:'Wholemeal' },
// 			{ group:'Breads', id:'2', name:'Wholegrain' },
// 			{ group:'Breads', id:'3', name:'White' },
// 			{ group:'Breakfast Cereals', id:'4', name:'High fibre (wholegrain) oats' },
// 			{ group:'Breakfast Cereals', id:'5', name:'Porridge' },
// 			{ group:'Breakfast Cereals', id:'6', name:'Muesli' },
// 			{ group:'Grains', id:'7', name:'Rice' },
// 			{ group:'Grains', id:'8', name:'Barley' },
// 			{ group:'Grains', id:'9', name:'Corn' },
// 			{ group:'Other products', id:'10', name:'Pasta' },
// 			{ group:'Other products', id:'11', name:'Noodles' }
// 		];
// 		return mydata;
// }
// function ObjectCellRenderer() {
// }

// ObjectCellRenderer.prototype.init = function (params) {
//     this.span = document.createElement('span');
// 	this.refresh(params);
// };

// ObjectCellRenderer.prototype.refresh = function(params) {
// 	this.span.innerHTML = '';
// 	var nb = 1;
// 	if(params.value) {
// 		var val = '';
// 		val = params.value.val.split(';');
// 		nb = val.length;
// 		console.log("Nb=" + nb);
// 		val = val.join('<br>');
// 		this.span.innerHTML = val;
// 		params.node.setRowHeight(25*nb);
// 		params.api.onRowHeightChanged();
// 	}
// }

// ObjectCellRenderer.prototype.getGui = function () {
//     return this.span;
// };


// function ObjectEditor() {

// }

// var onKeyDown = function(event) {
//         var key = event.which || event.keyCode;
//         if (key == 37 ||  // left
//             key == 39 || // right
//             key == 9 ) {  // tab
//             event.stopPropagation();
//         }
//     }

// ObjectEditor.prototype.init = function (params) {
// 	console.log(params);
//     this.container = document.createElement('div');

// 	this.myDropdown=jSuites.dropdown(this.container, {
// 		data:[
// 			{ group:'Breads', id:'1', name:'Wholemeal' },
// 			{ group:'Breads', id:'2', name:'Wholegrain' },
// 			{ group:'Breads', id:'3', name:'White' },
// 			{ group:'Breakfast Cereals', id:'4', name:'High fibre (wholegrain) oats' },
// 			{ group:'Breakfast Cereals', id:'5', name:'Porridge' },
// 			{ group:'Breakfast Cereals', id:'6', name:'Muesli' },
// 			{ group:'Grains', id:'7', name:'Rice' },
// 			{ group:'Grains', id:'8', name:'Barley' },
// 			{ group:'Grains', id:'9', name:'Corn' },
// 			{ group:'Other products', id:'10', name:'Pasta' },
// 			{ group:'Other products', id:'11', name:'Noodles' }
// 		],
// 		type:'default',
// 		autocomplete:true,
// 		multiple:true
// 	});

// 	if (params.value) {

// 		var val = params.value.id.split(';');
// 		console.log(params.value.id);
// 		this.myDropdown.setValue(val);
// 	}

// };

// ObjectEditor.prototype.getGui = function () {
//     return this.container;
// };

// ObjectEditor.prototype.afterGuiAttached = function () {
// };

// ObjectEditor.prototype.getValue = function () {

//     return {id:this.myDropdown.getValue(),val:this.myDropdown.getText()};
// };

// ObjectEditor.prototype.destroy = function () {
// };

// ObjectEditor.prototype.isPopup = function () {
//     return true;
// };


// var columns = [
//     {
//         headerName: 'ID', field: 'id', width: 50, editable: true
//     }, {
//         headerName: 'Name', field: 'name', width: 100, editable: true
//     }, {
//         headerName: "Address", field: "address", width: 200, editable: true,autoHeight: true,
//         cellRenderer: ObjectCellRenderer,
//         cellEditor: ObjectEditor
//     }
// ];

// var gridOptions = {
//     columnDefs: columns,
// 	rowData: [],
// 	editable: true,
// };

// new agGrid.Grid(document.querySelector('#myGrid'), gridOptions);

// document.querySelector('#addRow').addEventListener("click", function() {
//     gridOptions.api.addItems([{}]);
// });
