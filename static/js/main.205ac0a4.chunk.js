(this.webpackJsonpmdb2=this.webpackJsonpmdb2||[]).push([[0],{40:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var c=r(2),n=r.n(c),a=r(17),s=r.n(a),i=r(4),o=r.n(i),u=r(7),j=r(3),b=r(8),d=r.n(b),v=(r(40),r(0)),h=function(e){var t=e.getQuery,r=Object(c.useState)(""),n=Object(j.a)(r,2),a=n[0],s=n[1];return Object(v.jsxs)("header",{id:"top",children:[Object(v.jsx)("a",{href:"#top",children:Object(v.jsx)("h1",{children:"MovieDB"})}),Object(v.jsx)("form",{children:Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"Search...",value:a,onChange:function(e){return r=e.target.value,s(r),void t(r);var r},autoFocus:!0})})]})},f=function(e){var t=e.movieShow;return Object(v.jsxs)("div",{className:"movie",children:[Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+t.poster_path,alt:t.title}),Object(v.jsxs)("div",{className:"movie-info",children:[Object(v.jsx)("h3",{children:t.title}),Object(v.jsxs)("span",{children:["rating: ",t.vote_average]})]}),Object(v.jsxs)("div",{className:"movie-over",children:[Object(v.jsx)("h2",{children:"Overview:"}),Object(v.jsx)("p",{children:t.overview})]})]})},l=function(e){var t=e.movie;return e.isLoading?Object(v.jsx)("h1",{children:"Loading..."}):Object(v.jsx)("div",{className:"movies-container",children:t.map((function(e){return Object(v.jsx)(f,{movieShow:e},e.id)}))})};r(42).config();var p=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)(!0),s=Object(j.a)(a,2),i=s[0],b=s[1],f=Object(c.useState)(""),p=Object(j.a)(f,2),O=p[0],m=p[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=12b6a4548f1601ff9f6a609f92c9bf4c&page1");case 2:t=e.sent,n(t.data.results),b(!1),console.log(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();O?function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://api.themoviedb.org/3/search/movie?&api_key=12b6a4548f1601ff9f6a609f92c9bf4c&query="+O);case 2:t=e.sent,n(t.data.results),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():e()}),[O]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(h,{getQuery:function(e){return m(e)}}),Object(v.jsx)(l,{isLoading:i,movie:r})]})};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.205ac0a4.chunk.js.map