(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[283],{2372:function(e,a,t){"use strict";t.r(a);var n=t(10),i=t(11),r=t(13),l=t(12),s=t(0),c=t.n(s),o=t(819),d=t(820),u=t(821),m=t(195),p=t(824),f=t(817),g=t(827),h=t(815),v=t(814),b=t(835),E=(t(186),t(102)),w=t(839),S=t(318),z=t(453),N=t(274),y=t(21),P=(t(836),t(61)),R=(t(583),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Image",field:"product_img",filter:!1,width:120,cellRendererFramework:function(e){var a;return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("img",{className:"rounded-circle  mr-4",src:null===(a=e.data)||void 0===a?void 0:a.product_img,alt:" brand",height:"40",width:"40"}))}},{headerName:"Title",field:"product",filter:!0,width:200,cellRendererFramework:function(e){var a;return c.a.createElement("div",{className:""},c.a.createElement("span",null,null===(a=e.data.product)||void 0===a?void 0:a.item_name))}},{headerName:"Duration",field:"product_price",filter:!0,width:120,cellRendererFramework:function(e){return c.a.createElement("div",{className:""},c.a.createElement("span",null,e.data.product_price))}},{headerName:"Active Product",field:"product_qty",filter:!0,width:120,cellRendererFramework:function(e){return c.a.createElement("div",{className:" mr-4"},c.a.createElement("span",null,e.data.product_qty))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success "},e.data.status):"Inactive"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-danger"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(S.a,{className:"mr-50",size:15,onClick:function(){return y.a.push("/app/freshlist/flashSale/editFlashSale/".concat(a.data._id))}}),c.a.createElement(z.a,{size:15,onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,i=a.defaultColDef;return c.a.createElement(o.a,{className:"app-user-list"},c.a.createElement(d.a,{sm:"12"}),c.a.createElement(d.a,{sm:"12"},c.a.createElement(u.a,null,c.a.createElement(o.a,{className:"m-2"},c.a.createElement(d.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"DealOfDay")),c.a.createElement(d.a,null,c.a.createElement(P.b,{render:function(e){var a=e.history;return c.a.createElement(m.a,{className:"btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/flashSale/addFlashSale")}},"Add Product")}}))),c.a.createElement(p.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(N.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(E.a.Consumer,null,(function(a){return c.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(c.a.Component));a.default=R},835:function(e,a,t){"use strict";var n=t(6),i=t(7),r=t(17),l=t(18),s=t(0),c=t.n(s),o=t(2),d=t.n(o),u=t(5),m=t.n(u),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,o=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,h=e.innerRef,v=Object(i.a)(e,f),b=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),w=d||("select"===r||"textarea"===r?r:"input"),S="form-control";g?(S+="-plaintext",w=d||"input"):"file"===r?S+="-file":"range"===r?S+="-range":b&&(S=u?null:"form-check-input"),v.size&&E.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=v.size,delete v.size);var z=Object(p.mapToCssModules)(m()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,S),t);return("input"===w||d&&"function"===typeof d)&&(v.type=r),v.children&&!g&&"select"!==r&&"string"===typeof w&&"select"!==w&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(w,Object(n.a)({},v,{ref:h,className:z,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h}}]);
//# sourceMappingURL=283.b2cda55c.chunk.js.map