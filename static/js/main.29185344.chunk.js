(this.webpackJsonpmdb2=this.webpackJsonpmdb2||[]).push([[0],{40:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(17),s=c.n(a),i=c(4),o=c.n(i),j=c(7),u=c(3),b=c(8),d=c.n(b),v=(c(40),c(0)),h=function(e){var t=e.getQuery,c=Object(r.useState)(""),n=Object(u.a)(c,2),a=n[0],s=n[1];return Object(v.jsxs)("header",{id:"top",children:[Object(v.jsx)("a",{href:"#top",children:Object(v.jsx)("h1",{children:"MovieDB"})}),Object(v.jsx)("form",{children:Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"Search...",value:a,onChange:function(e){return c=e.target.value,s(c),void t(c);var c},autoFocus:!0})})]})},l=function(e){var t=e.movieShow;return Object(v.jsxs)("div",{className:"movie",children:[Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:t.title}),Object(v.jsxs)("div",{className:"movie-info",children:[Object(v.jsx)("h3",{children:t.title}),Object(v.jsxs)("span",{children:["rating: ",t.vote_average]})]}),Object(v.jsxs)("div",{className:"movie-over",children:[Object(v.jsx)("h2",{children:"Overview:"}),Object(v.jsx)("p",{children:t.overview})]})]})},f=function(e){var t=e.movie;return e.isLoading?Object(v.jsx)("h1",{children:"Loading..."}):Object(v.jsx)("div",{className:"movies-container",children:t.map((function(e){return Object(v.jsx)(l,{movieShow:e},e.id)}))})},p=function(){return Object(v.jsx)("div",{className:"topic",children:Object(v.jsx)("h1",{children:"Popular"})})};c(42).config();var O=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),s=Object(u.a)(a,2),i=s[0],b=s[1],l=Object(r.useState)(""),O=Object(u.a)(l,2),m=O[0],x=O[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=12b6a4548f1601ff9f6a609f92c9bf4c&page1");case 2:t=e.sent,n(t.data.results),b(!1),console.log(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m?function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://api.themoviedb.org/3/search/movie?&api_key=12b6a4548f1601ff9f6a609f92c9bf4c&query="+m);case 2:t=e.sent,n(t.data.results),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():e()}),[m]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(h,{getQuery:function(e){return x(e)}}),Object(v.jsx)(p,{}),Object(v.jsx)(f,{isLoading:i,movie:c})]})};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.29185344.chunk.js.map