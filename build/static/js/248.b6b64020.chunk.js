(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[248],{2496:function(e,t,a){"use strict";a.r(t);var o=a(10),n=a(11),r=a(13),c=a(12),s=a(0),l=a.n(s),i=a(824),d=a(822),m=a(823),p=a(194),u=a(827),b=a(841),h=(a(913),a(1060)),y=a(1061),f=a(1033),E=a.n(f),N=(a(907),a(904),a(185)),v=(a(22),a(844)),S=a.n(v),g=a(62),k=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,description:E()(Object(h.convertToRaw)(e.getCurrentContent()))})},n.submitHandler=function(e){e.preventDefault(),N.a.post("/addprivacy_policy",n.state).then((function(e){console.log(e),n.props.history.push("/app/freshlist/privacyPolicy/privacyPolicy"),S()("Good job!","You clicked the button!","success")})).catch((function(e){console.log(e)}))},n.state={description:"",editorState:h.EditorState.createEmpty()},n}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement(i.a,null,l.a.createElement(d.a,{className:"m-2"},l.a.createElement(m.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Privacy Policy")),l.a.createElement(m.a,null,l.a.createElement(g.b,{render:function(e){var t=e.history;return l.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/privacyPolicy/privacyPolicy")}},"Back")}}))),l.a.createElement(u.a,null,l.a.createElement(b.a,{onSubmit:this.submitHandler},l.a.createElement(y.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),l.a.createElement("br",null),l.a.createElement(p.a,{color:"primary"},"Add New Policy"))))}}]),a}(l.a.Component);t.default=k},904:function(e,t,a){}}]);
//# sourceMappingURL=248.b6b64020.chunk.js.map