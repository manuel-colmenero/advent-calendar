(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(18)},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(3),i=n.n(c),o=(n(16),n(1)),u=n(4),s=n(5),l=n(7),d=n(6),f=n(8),m=n(9),h="advent-calendar",v=function(t){var e=localStorage.getItem(h);if(null===e)return t;var n=null;try{n=JSON.parse(e)}catch(a){return t}return"object"!==typeof n?t:Object(m.a)({},t,n)},g=function(){return r.a.createElement("svg",{className:"lock",viewBox:"0 0 12 17"},r.a.createElement("path",{className:"lock__path",transform:"translate(-4,-273.5)",d:"m 10,273.5 c -5.0164424,8e-5 -5,1.90449 -4.9996947,8.50005 L 4,282 v 8.44597 c 4.0590193,-7.1e-4 8.026417,-3.2e-4 12,0 V 282 l -0.999789,5e-5 C 15,275.67748 14.983558,273.50008 10,273.5 Z m -0.021261,1.50025 C 13.516537,275.00025 13.5,276.24577 13.5,282 h -7 c 0,-5.69885 0.016537,-6.99975 3.478739,-6.99975 z"}))},p=(new Date).getDate(),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Array(24).fill(t)},w=function(){return y().map(function(t,e){return e+1}).sort(function(t,e){return Math.random()>.5})},k=function(t){return t>p},b=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(d.a)(e).call(this,t))).state=v({days:w(),visited:y(!1),images:[]}),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"onDayClick",value:function(t,e){k(t)||this.setState(function(t){return{visited:t.visited.map(function(t,n){return n===e?!t:t})}})}},{key:"getSubreddit",value:function(){return window.location.hash?window.location.hash.replace(/#/,""):"earthporn"}},{key:"fetchImages",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!(this.state.images.length>=24)){var n=this.getSubreddit(),a="https://www.reddit.com/r/".concat(n,"/top/.json?t=all&limit=100&after=").concat(e);fetch(a).then(function(t){return t.json()}).then(function(e){var n=e.data.children.map(function(t){return t.data.url}).filter(function(t){return/\.(jpe?g|png|gif)$/i.test(t)});t.setState(function(t){return{images:Object(o.a)(t.images).concat(Object(o.a)(n))}},function(){t.fetchImages()})})}}},{key:"componentDidUpdate",value:function(){var t;t=this.state,localStorage.setItem(h,JSON.stringify(t))}},{key:"componentDidMount",value:function(){var t=this;this.fetchImages(),window.addEventListener("hashchange",function(){t.setState(function(t){return{images:[],visited:y(!1)}},function(){t.fetchImages()})})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"calendar"},this.state.days.map(function(e,n){return r.a.createElement("div",{key:n,className:"day","data-open":t.state.visited[n],"data-locked":k(e),onClick:function(){return t.onDayClick(e,n)}},r.a.createElement("div",{className:"day__backside",style:{backgroundImage:t.state.images[n]?"url(".concat(t.state.images[n],")"):null}}),e,k(e)?r.a.createElement(g,null):null)}))}}]),e}(a.Component);i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.e5f7fe75.chunk.js.map