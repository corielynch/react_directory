(this.webpackJsonpreact_directory=this.webpackJsonpreact_directory||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=(a(25),a(13)),m=a(14),s=a(15),i=a(19),u=a(18),h=(a(26),a(48)),d=function(e){return l.a.createElement(h.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Picture"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,e.employeeList.length>0?e.employeeList.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null," ",l.a.createElement("img",{alt:"thumbnail",src:e.picture.thumbnail})," "),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email))})):l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"}),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))))};var p=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("form",{className:"search"},l.a.createElement("label",{htmlFor:"employee"}),l.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"search",list:"employees",type:"text",className:"form-control",placeholder:"Search an Employee by First or Last Name",id:"employee"}),l.a.createElement("datalist",{id:"emloyees"},e.employeeList.map((function(e){return l.a.createElement("option",{value:e,key:e})}))),l.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Search")))},E=a(17),f=a.n(E),y=function(){return f.a.get("https://randomuser.me/api/?results=50")},L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employeeList:[],filteredList:[],search:""},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(o.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state.employeeList.filter((function(t){return t.name.first.toLowerCase()===e.state.search.toLowerCase()}));e.setState({filteredList:a});var n=e.state.employeeList.filter((function(t){return t.name.last.toLowerCase()===e.state.search.toLowerCase()}));e.setState({filteredList:n})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){e.setState({employeeList:t.data.results}),e.setState({filteredList:t.data.results})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{handleInputChange:this.handleInputChange,employeeList:this.state.employeeList,handleFormSubmit:this.handleFormSubmit}),l.a.createElement(d,{employeeList:this.state.filteredList}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.66950906.chunk.js.map