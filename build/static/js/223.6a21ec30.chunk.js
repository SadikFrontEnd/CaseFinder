(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[223],{2397:function(e,a,t){"use strict";t.r(a),t.d(a,"AddGallery",(function(){return j}));var n=t(46),r=t(31),l=t(10),s=t(11),o=t(13),i=t(12),c=t(0),u=t.n(c),d=t(824),p=t(822),f=t(823),m=t(196),g=t(827),h=t(841),b=t(840),y=t(812),v=t(838),E=(t(22),t(185)),O=t(62),j=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).fileSelectedHandler=function(e){s.setState({aadharcardimage:[].concat(Object(r.a)(s.state.aadharcardimage),Object(r.a)(e.target.files))}),console.log(s.state.aadharcardimage)},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",s.state.name),a.append("sortorder",s.state.sortorder),a.append("desc",s.state.desc),a.append("status",s.state.status),a.append("product_img",s.state.selectedFile,s.state.selectedName),E.a.post(" /addproductcategory",a).then((function(e){console.log(e),s.props.history.push("/app/freshlist/gallery/gallery")})).catch((function(e){console.log(e)}))},s.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",aadharcardimage:[],status:""},s}return Object(s.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h1",null,"Add Images"),u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(p.a,{className:"m-1"},u.a.createElement(f.a,{className:""},u.a.createElement("h2",null,"Upload File")),u.a.createElement(f.a,null,u.a.createElement(O.b,{render:function(e){var a=e.history;return u.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/gallery/gallery")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(h.a,{onSubmit:this.submitHandler},u.a.createElement(p.a,{className:"mb-1"},u.a.createElement(f.a,{lg:"4"},u.a.createElement(b.a,null,"Image"),u.a.createElement(y.a,{required:!0,accept:"application/pdf,image/gif, image/jpeg,image/png",multiple:!0,type:"file",onChange:this.fileSelectedHandler})),u.a.createElement(f.a,{lg:"4"},u.a.createElement(b.a,null," Folder Name"),u.a.createElement(v.a,{required:!0,type:"select",name:"folder",placeholder:"Driver Name",onChange:this.changeHandler},u.a.createElement("option",null,"--Select--"),u.a.createElement("option",null,"Admin"),u.a.createElement("option",null,"banner"),u.a.createElement("option",null,"brand"),u.a.createElement("option",null,"Category"),u.a.createElement("option",null,"company"),u.a.createElement("option",null,"Deliveryman"),u.a.createElement("option",null,"Product"),u.a.createElement("option",null,"Shop"),u.a.createElement("option",null,"Deal")))),u.a.createElement(p.a,{style:{float:"right"}},u.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Upload")))))))}}]),t}(c.Component);a.default=j},838:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(18),s=t(19),o=t(0),i=t.n(o),c=t(2),u=t.n(c),d=t(5),p=t.n(d),f=t(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(r.a)(e,m),y=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),O="form-control";g?(O+="-plaintext",E=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":y&&(O=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var j=Object(f.mapToCssModules)(p()(a,c&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,O),t);return("input"===E||u&&"function"===typeof u)&&(b.type=l),b.children&&!g&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(E,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":c}))},a}(i.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h},840:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(0),s=t.n(l),o=t(2),i=t.n(o),c=t(5),u=t.n(c),d=t(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),g={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,i=e.tag,c=e.check,f=e.size,m=e.for,g=Object(r.a)(e,p),h=[];o.forEach((function(a,n){var r=e[a];if(delete g[a],r||""===r){var l,s=!n;if(Object(d.isObject)(r)){var o,i=s?"-":"-"+a+"-";l=b(s,a,r.size),h.push(Object(d.mapToCssModules)(u()(((o={})[l]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),t)}else l=b(s,a,r),h.push(l)}}));var y=Object(d.mapToCssModules)(u()(a,!!l&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return s.a.createElement(i,Object(n.a)({htmlFor:m},g,{className:y}))};y.propTypes=g,y.defaultProps=h,a.a=y},841:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(18),s=t(19),o=t(0),i=t.n(o),c=t(2),u=t.n(c),d=t(5),p=t.n(d),f=t(4),m=["className","cssModule","inline","tag","innerRef"],g={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,s=e.tag,o=e.innerRef,c=Object(r.a)(e,m),u=Object(f.mapToCssModules)(p()(a,!!l&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},c,{ref:o,className:u}))},a}(o.Component);h.propTypes=g,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=223.6a21ec30.chunk.js.map