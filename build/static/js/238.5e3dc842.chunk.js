/*! For license information please see 238.5e3dc842.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[238,2],{2447:function(e,t,r){"use strict";r.r(t);var n=r(79),a=r(45),i=r(10),o=r(11),c=r(13),l=r(12),u=r(0),s=r.n(u),f=r(8),d=r(819),h=r(820),p=r(821),m=r(824),g=r(817),v=r(827),y=r(815),w=r(814),b=r(191),E=r(186),S=r(102),x=r(839),P=(r(849),r(318)),N=r(274),z=(r(21),r(836),r(583),r(841)),L=r.n(z),D=r(61),k=r(807);function O(){O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(D){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),c=new N(a||[]);return n(o,"_invoke",{value:E(e,r,c)}),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(D){return{type:"throw",arg:D}}}e.wrap=u;var f={};function d(){}function h(){}function p(){}var m={};l(m,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(z([])));v&&v!==t&&r.call(v,i)&&(m=v);var y=p.prototype=d.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;n(this,"_invoke",{value:function(n,i){function o(){return new t((function(a,o){!function n(a,i,o,c){var l=s(e[a],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(f).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,c)}))}c(l.arg)}(n,i,a,o)}))}return a=a?a.then(o,o):o()}})}function E(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=S(o,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function z(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new b(u(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),l(y,c,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=z,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:z(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var j=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e,n;Object(i.a)(this,r);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return(n=t.call.apply(t,[this].concat(c))).state={rowData:[],Viewpermisson:null,Editpermisson:null,Createpermisson:null,Deletepermisson:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},(e={headerName:"Actions",field:"sortorder"},Object(a.a)(e,"field","transactions"),Object(a.a)(e,"width",160),Object(a.a)(e,"cellRendererFramework",(function(e){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(D.b,{render:function(t){var r=t.history;return s.a.createElement(P.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){r.push({pathname:"/app/freshlist/account/editRole/".concat(null===e||void 0===e?void 0:e.data._id),data:e.data}),localStorage.setItem("PDFID",e.data._id)}})}}),s.a.createElement(k.b,{className:"mr-50",size:"25px",color:"red",onClick:function(){n.runthisfunction(e.data._id)}}))})),e),{headerName:"PDF Name",field:"pdfName",filter:!0,resizable:!0,width:160,cellRendererFramework:function(e){var t;return s.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.pdfName)}},{headerName:"Uploded Pdf",field:"PDFFile",filter:!0,resizable:!0,width:160,cellRendererFramework:function(e){var t;return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("div",{className:""},s.a.createElement("span",null,null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.pdf)))}}]},n.onGridReady=function(e){n.gridApi=e.api,n.gridColumnApi=e.columnApi,n.setState({currenPageSize:n.gridApi.paginationGetCurrentPage()+1,getPageSize:n.gridApi.paginationGetPageSize(),totalPages:n.gridApi.paginationGetTotalPages()})},n.updateSearchQuery=function(e){n.gridApi.setQuickFilter(e)},n.filterSize=function(e){n.gridApi&&(n.gridApi.paginationSetPageSize(Number(e)),n.setState({currenPageSize:e,getPageSize:e}))},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(n.a)(O().mark((function e(){var t=this;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/pdf/view-pdf").then((function(e){var r,n;console.log(null===(r=e.data)||void 0===r?void 0:r.PDF),t.setState({rowData:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.PDF})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(e){var t=this,r=this.gridApi.getSelectedRows();L()("Warning","Sure You Want to Delete it",{buttons:{cancel:"cancel",catch:{text:"Delete ",value:"delete"}}}).then((function(n){switch(n){case"delete":t.gridApi.updateRowData({remove:r}),E.a.delete("/pdf/delete-pdf/".concat(e)).then((function(e){}))}}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,n=t.columnDefs,a=t.defaultColDef;return s.a.createElement(d.a,{className:"app-user-list"},s.a.createElement(h.a,{sm:"12"},s.a.createElement(p.a,null,s.a.createElement(d.a,{className:"m-2"},s.a.createElement(h.a,null,s.a.createElement("h1",{className:"float-left"},"Pdf List")),s.a.createElement("div",{className:"text-end "},s.a.createElement(f.b,{to:"/app/Trupee/account/Pdfform"},s.a.createElement("button",{type:"button",className:"btn btn-primary"},"Add PDF  ")))),s.a.createElement(m.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(g.a,{className:"p-1 ag-dropdown"},s.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(N.a,{className:"ml-50",size:15})),s.a.createElement(y.a,{right:!0},s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134"))))),s.a.createElement(S.a.Consumer,null,(function(t){return s.a.createElement(x.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:n,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),r}(s.a.Component);j.contextType=b.a,t.default=j},836:function(e,t,r){}}]);
//# sourceMappingURL=238.5e3dc842.chunk.js.map