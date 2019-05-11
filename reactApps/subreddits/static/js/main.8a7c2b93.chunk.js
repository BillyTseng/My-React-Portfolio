(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),i=(a(94),a(9)),s=a(10),l=a(12),u=a(11),p=a(13),d=a(74),h=a.n(d),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"Subreddits Reader"))}}]),t}(r.a.Component),f=a(165),b=a(166).a.Search,v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userInput:""},a.onInputChange=function(e){a.setState({userInput:e.target.value})},a.onAdd=function(){a.state.userInput&&a.props.add(a.state.userInput),a.setState({userInput:""})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{style:{width:"700px"},placeholder:"input Subreddit. e.g. r/javascript",enterButton:"Add Subreddit",size:"large",onSearch:this.onAdd,onPressEnter:this.onAdd,onChange:this.onInputChange,value:this.state.userInput}))}}]),t}(r.a.Component),y=a(80),j=a.n(y),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.reddit.com".concat(this.props.permalink),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{className:"post-text"},this.props.title)))}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={children:[],error:""},a.parsePosts=function(){j.a.ajax({url:"https://www.reddit.com/".concat(a.props.name,".json"),method:"GET"}).then(function(e){e.data?a.setState({children:e.data.children,error:""}):a.setState({error:"No such data"})},function(e){var t=e.responseJSON,n=t.message,r=t.error;a.setState({error:"".concat(r," ").concat(n)})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.parsePosts()}},{key:"render",value:function(){return r.a.createElement("div",{className:"post-list"},this.state.error?r.a.createElement("p",{style:{color:"red"}},"Error: ",this.state.error):this.state.children.map(function(e,t){var a=e.data;return r.a.createElement(O,{title:a.title,permalink:a.permalink,key:t})}))}}]),t}(r.a.Component),w=f.a.TabPane,E=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState({activeKey:e})},a.onEdit=function(e,t){a[t](e)},a.updateLocalStorage=function(e){var t=[],a=!0,n=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var i=o.value;t.push(i.title)}}catch(s){n=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}localStorage.setItem("tabs",JSON.stringify(t))},a.add=function(e){var t=a.state.panes,n="newTab".concat(a.newTabIndex++);t.push({title:e,content:r.a.createElement(g,{name:e}),key:n,closable:!0}),a.setState({panes:t,activeKey:n}),a.updateLocalStorage(t)},a.remove=function(e){var t,n=a.state.activeKey;a.state.panes.forEach(function(a,n){a.key===e&&(t=n-1)});var r=a.state.panes.filter(function(t){return t.key!==e});t>=0&&n===e&&(n=r[t].key),a.setState({panes:r,activeKey:n}),a.updateLocalStorage(r)},a.newTabIndex=0;var n=[{title:"r/news",content:r.a.createElement(g,{name:"r/news"}),key:"1",closable:!1}];return a.state={activeKey:n[0].key,panes:n},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("tabs"));if(e){var t=this.state.panes,a=!0,n=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var s=c.value;"r/news"!==s&&t.push({title:s,content:r.a.createElement(g,{name:s}),key:"newTab".concat(this.newTabIndex++),closable:!0})}}catch(l){n=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}this.setState({panes:t})}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:16,marginBottom:16}},r.a.createElement(v,{add:this.add})),r.a.createElement(f.a,{hideAdd:!0,onChange:this.onChange,activeKey:this.state.activeKey,type:"editable-card",onEdit:this.onEdit},this.state.panes.map(function(e){return r.a.createElement(w,{tab:e.title,key:e.key,closable:e.closable},e.content)})))}}]),t}(r.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},89:function(e,t,a){e.exports=a(164)},94:function(e,t,a){}},[[89,2,1]]]);
//# sourceMappingURL=main.8a7c2b93.chunk.js.map