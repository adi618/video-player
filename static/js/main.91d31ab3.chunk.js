(this.webpackJsonpyoutube2=this.webpackJsonpyoutube2||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),s=i(17),a=i.n(s),r=i(8),o=i.n(r),d=i(18),u=i(3),l=i(4),m=i(6),j=i(5),h=i(0),b=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={searchTerm:""},e.onInputChange=function(t){e.setState({searchTerm:t.target.value})},e.onSearchTermSubmit=function(t){t.preventDefault(),e.props.onSearchTermSubmit(e.state.searchTerm)},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"search-bar ui segment",children:Object(h.jsx)("form",{className:"ui form",onSubmit:this.onSearchTermSubmit,children:Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{children:"Video Search"}),Object(h.jsx)("input",{type:"text",value:this.state.searchTerm,onChange:this.onInputChange})]})})})}}]),i}(c.a.Component),v=i(19),p=i.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyBh8dFFn6lQTYWmj4Fpu27KfTHNM2NN7CI"}}),O=(i(44),function(e){var t=e.video,i=e.onVideoSelect;return Object(h.jsxs)("div",{className:"video-item item",onClick:function(){i(t)},children:[Object(h.jsx)("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("div",{className:"header",children:t.snippet.title})})]})}),f=function(e){var t=e.videos,i=e.onVideoSelect;return Object(h.jsx)("div",{className:"ui relaxed divided list",children:t.map((function(e){return Object(h.jsx)(O,{video:e,onVideoSelect:i},e.id.videoId)}))})},x=function(e){var t=e.video;if(console.log(t),!t)return Object(h.jsx)("div",{children:"Loading..."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"ui embed",children:Object(h.jsx)("iframe",{title:"video player",src:i})}),Object(h.jsxs)("div",{className:"ui segment",children:[Object(h.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(h.jsx)("p",{children:t.snippet.description})]})]})},S=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onSearchTermSubmit=function(){var t=Object(d.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.onSearchTermSubmit("buildings")}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"ui container",children:[Object(h.jsx)(b,{onSearchTermSubmit:this.onSearchTermSubmit}),Object(h.jsx)("div",{className:"ui grid",children:Object(h.jsxs)("div",{className:"ui row",children:[Object(h.jsx)("div",{className:"eleven wide column",children:Object(h.jsx)(x,{video:this.state.selectedVideo})}),Object(h.jsx)("div",{className:"ui five wide column",children:Object(h.jsx)(f,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})]})}}]),i}(c.a.Component);a.a.render(Object(h.jsx)(S,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.91d31ab3.chunk.js.map