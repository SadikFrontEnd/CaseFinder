(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[243],{2473:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProductType",(function(){return S}));var s=a(10),n=a(11),r=a(13),l=a(12),c=a(0),i=a.n(c),o=a(821),u=a(819),m=a(820),d=a(195),p=a(824),f=a(838),h=a(837),b=(a(21),a(186)),g=a(61),y=a(841),v=a.n(y),S=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeHandler1=function(e){n.setState({status:e.target.value})},n.submitHandler=function(e){e.preventDefault();var t={status:n.state.status};b.a.post("/user/update-status".concat(n.props.match.params.id),t).then((function(e){console.log(e.data),v()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e)}))},n.state={Address:"",fullname:"",GSTIN:"",B_City:"",checkbox:"",selectedStatelist:[],SelectedState:"",StateList:[],SelectedSupplierCity:[],SelectedSCity:[],CityList:[],CityList1:[],S_City:"",Mobile_no:"",B_Country:"",S_Country:"",Phone_no:"",Place_of_Supply:"",B_State:"",S_State:"",B_Street:"",S_Street:"",B_PinCode:"",S_PinCode:"",setuserList:!1,password:"",email:"",status:"",AssignRole:"",CompanyName:"",Companytype:"",Selectuser:"",UserName:"",UserId:"",City:"",Role:"",viewData:[],selectedcities:[],rolesList:[]},n}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit User Status")),i.a.createElement(m.a,null,i.a.createElement(g.b,{render:function(e){var t=e.history;return i.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/house/userlist")}},"Back")}}))),i.a.createElement(o.a,null,i.a.createElement(p.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a,{className:"mb-1 py-2"},i.a.createElement("h4",null,"Status")),i.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},i.a.createElement("input",{checked:"Active"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",checked:"Deactive"===this.state.status,name:"status",value:"Deactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),i.a.createElement(u.a,null,i.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}}]),a}(c.Component);t.default=S},837:function(e,t,a){"use strict";var s=a(6),n=a(7),r=a(0),l=a.n(r),c=a(2),i=a.n(c),o=a(5),u=a.n(o),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,r=e.hidden,c=e.widths,i=e.tag,o=e.check,p=e.size,f=e.for,h=Object(n.a)(e,d),b=[];c.forEach((function(t,s){var n=e[t];if(delete h[t],n||""===n){var r,l=!s;if(Object(m.isObject)(n)){var c,i=l?"-":"-"+t+"-";r=g(l,t,n.size),b.push(Object(m.mapToCssModules)(u()(((c={})[r]=n.size||""===n.size,c["order"+i+n.order]=n.order||0===n.order,c["offset"+i+n.offset]=n.offset||0===n.offset,c))),a)}else r=g(l,t,n),b.push(r)}}));var y=Object(m.mapToCssModules)(u()(t,!!r&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),a);return l.a.createElement(i,Object(s.a)({htmlFor:f},h,{className:y}))};y.propTypes=h,y.defaultProps=b,t.a=y},838:function(e,t,a){"use strict";var s=a(6),n=a(7),r=a(17),l=a(18),c=a(0),i=a.n(c),o=a(2),u=a.n(o),m=a(5),d=a.n(m),p=a(4),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,o=Object(n.a)(e,f),u=Object(p.mapToCssModules)(d()(t,!!r&&"form-inline"),a);return i.a.createElement(l,Object(s.a)({},o,{ref:c,className:u}))},t}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=243.f405a4de.chunk.js.map