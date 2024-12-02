import{r as o,t as e}from"./index-Q1bUSFL6.js";const C={display:"flex",alignItems:"center",gap:"16px"},W={display:"flex"};function A({maxRating:t=5,color:r="#fcc419",size:n=48,className:a="",messages:s=[],defaultRating:d=0,onSetRating:x}){const[c,u]=o.useState(d),[m,i]=o.useState(0),f={lineHeight:"1",margin:"0",color:r,fontSize:`${n/1.5}px`};function p(l){u(l),x(l)}return e.jsxs("div",{style:C,className:a,children:[e.jsx("div",{style:W,children:Array.from({length:t},(l,h)=>e.jsx(_,{onRate:()=>p(h+1),full:m?m>=h+1:c>=h+1,onHoverIn:()=>i(h+1),onHoverOut:()=>i(0),color:r,size:n},h))}),e.jsx("p",{style:f,children:s.length===t?s[m?m-1:c-1]:m||c||""})]})}function _({onRate:t,full:r,onHoverIn:n,onHoverOut:a,color:s,size:d}){const x={width:`${d}px`,height:`${d}px`,display:"block",cursor:"pointer"};return e.jsx("span",{role:"button",style:x,onClick:t,onMouseEnter:n,onMouseLeave:a,children:r?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:s,stroke:s,children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:s,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"{2}",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})})}const F="67b5ad9c";function P(t,r){const[n,a]=o.useState([]),[s,d]=o.useState(!1),[x,c]=o.useState("");return o.useEffect(function(){const u=new AbortController;async function m(){try{d(!0),c("");const i=await fetch(`http://www.omdbapi.com/?apikey=${F}&s=${t}`,{signal:u.signal});if(!i.ok)throw new Error("oops! something went wrong with fetching movies");const f=await i.json();if(f.Response==="False")throw new Error(f.Error);a(f.Search),d(!1),c("")}catch(i){console.error(i.message),i.name!=="AbortError"&&c(i.message)}finally{d(!1)}}if(t.length<3){a([]),c("");return}return r==null||r(),m(),function(){u.abort()}},[t]),{movies:n,isLoading:s,error:x}}function B(t,r){const[n,a]=o.useState(function(){const s=localStorage.getItem(r);return s?JSON.parse(s):t});return o.useEffect(function(){localStorage.setItem(r,JSON.stringify(n))},[n,r]),[n,a]}function S(t,r){o.useEffect(function(){function n(a){a.code.toLowerCase()===t.toLowerCase()&&r()}return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}},[r,t])}const O="67b5ad9c",b=t=>t.reduce((r,n,a,s)=>r+n/s.length,0);function z(){const[t,r]=o.useState(""),[n,a]=o.useState(null),{movies:s,isLoading:d,error:x}=P(t,i),[c,u]=B([],"watched");function m(l){a(l!==n?l:null)}function i(){a(null)}function f(l){u(h=>[...h,l])}function p(l){u(h=>h.filter(j=>j.imdbID!==l))}return e.jsxs("div",{className:"bg-slate-900 min-h-screen p-6 font-sans text-white",children:[e.jsxs(T,{children:[e.jsx(H,{}),e.jsx(K,{query:t,setQuery:r}),e.jsx(J,{movies:s})]}),e.jsxs(U,{children:[e.jsxs(y,{children:[d&&e.jsx(R,{}),!d&&!x&&e.jsx(V,{movies:s,onSelectMovie:m}),x&&e.jsx(Y,{message:x})]}),e.jsx(y,{children:n?e.jsx(X,{selectedId:n,onCloseMovie:i,onAddWatched:f,watched:c}):e.jsxs(e.Fragment,{children:[e.jsx(Q,{watched:c}),e.jsx(Z,{watched:c,onDeleteWatched:p})]})})]})]})}function R(){return e.jsx("p",{className:"text-center uppercase text-2xl font-semibold my-12",children:"Loading..."})}function T({children:t}){return e.jsx("nav",{style:{"--color-primary":"#6741d9"},className:"grid grid-cols-3 items-center h-[7.2rem] px-[3.2rem] bg-[var(--color-primary)] rounded-[0.9rem]",children:t})}function Y({message:t}){return e.jsx("p",{className:"text-center text-2xl p-12",children:t})}function H(){return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-4xl",role:"img",children:"🍿"}),e.jsx("h1",{className:"text-2xl font-semibold text-white",children:"usePopcorn"})]})}function K({query:t,setQuery:r}){const n=o.useRef(null);return S("Enter",function(){document.activeElement!==n.current&&(n.current.focus(),r(""))}),e.jsx("input",{type:"text",placeholder:"Search movies...",value:t,onChange:a=>r(a.target.value),ref:n,style:{"--color-text":"#dee2e6","--color-text-dark":"#adb5bd","--color-primary-light":"#7950f2"},className:`\r
    self-center\r
    border-none\r
    px-4 py-2.5\r
    text-[1.8rem]\r
    rounded-[0.7rem]\r
    w-[40rem]\r
    transition-all\r
    duration-300\r
    text-[var(--color-text)]\r
    bg-[var(--color-primary-light)]\r
    placeholder-[var(--color-text-dark)]\r
    focus:outline-none\r
    focus:shadow-lg\r
    focus:translate-y-[-2px]`})}function J({movies:t}){return e.jsxs("p",{className:"num-results",children:["Found ",e.jsx("strong",{children:t.length+1})," results"]})}function U({children:t}){return e.jsx("main",{className:"mt-6 h-[calc(100vh-7.2rem-3*2.4rem)] flex gap-6 justify-center",children:t})}function y({children:t}){const[r,n]=o.useState(!0);return e.jsxs("div",{className:"w-[32rem] max-w-[32rem] bg-[var(--color-background-500)] rounded-[0.9rem] relative overflow-hidden",children:[e.jsx("button",{className:"absolute top-2 right-2 h-6 w-6 rounded-full border-none bg-[var(--color-background-900)] text-[var(--color-text)] text-lg font-bold cursor-pointer z-10",onClick:()=>n(a=>!a),children:r?"–":"+"}),r&&e.jsx("div",{className:"max-h-[32rem] overflow-y-auto overflow-x-hidden p-4 text-[1.6rem]",children:t})]})}function V({movies:t,onSelectMovie:r}){return e.jsx("ul",{className:"list-none py-2 overflow-hidden h-[calc(100%-9rem)]",children:t==null?void 0:t.map(n=>e.jsx(G,{movie:n,onSelectMovie:r},n.imdbID))})}function G({movie:t,onSelectMovie:r}){return e.jsxs("li",{onClick:()=>r(t.imdbID),className:"relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 text-[1.6rem] items-center p-4 border-b border-[var(--color-background-100)] cursor-pointer transition-all duration-300 hover:bg-[var(--color-background-100)]",children:[e.jsx("img",{src:t.Poster,alt:`${t.Title} poster`,className:"w-full row-span-full"}),e.jsx("h3",{className:"text-[1.8rem]",children:t.Title}),e.jsx("div",{className:"flex items-center gap-6",children:e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"🗓"}),e.jsx("span",{children:t.Year})]})})]})}function X({selectedId:t,onCloseMovie:r,onAddWatched:n,watched:a}){var N;const[s,d]=o.useState({}),[x,c]=o.useState(!1),[u,m]=o.useState(""),i=a.map(g=>g.imdbID).includes(t),f=(N=a.find(g=>g.imdbID===t))==null?void 0:N.userRating,p=o.useRef(0);o.useEffect(function(){u&&(p.current=p.current+1)},[u]);const{Title:l,Year:h,Poster:j,Runtime:v,imdbRating:w,Plot:k,Released:E,Actors:L,Director:M,Genre:D}=s;function I(){const g={imdbID:t,title:l,year:h,poster:j,imdbRating:Number(w),runtime:Number(v.split("").at(0)),userRating:u,conuntRatingDecisions:p.current};n(g),r()}return S("escape",r),o.useEffect(function(){async function g(){c(!0);const $=await(await fetch(`http://www.omdbapi.com/?apikey=${O}&i=${t}`)).json();d($),c(!1)}g()},[t]),o.useEffect(function(){if(l)return document.title=`Movie | ${l}`,function(){document.title="usePopcorn"}},[l]),e.jsx("div",{className:"leading-relaxed text-[1.4rem]",children:x?e.jsx(R,{}):e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"flex",children:[e.jsx("button",{className:"absolute top-[0.6rem] h-8 left-[0.6rem] w-8 rounded-full border-none bg-white text-[var(--color-background-500)] shadow-lg font-sans text-3xl font-bold cursor-pointer z-10 flex items-center justify-center",onClick:r,children:"←"}),e.jsx("img",{src:j,alt:`poster of the ${s} movie`,className:"w-1/3"}),e.jsxs("div",{className:"w-full p-6 bg-[var(--color-background-100)] flex flex-col gap-4",children:[e.jsx("h2",{className:"text-2xl mb-1 text-bold leading-tight",children:l}),e.jsxs("p",{className:"flex items-center gap-2",children:[E," • ",v]}),e.jsx("p",{children:D}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"⭐"}),w," IMDB rating"]})]})]}),e.jsxs("section",{className:"p-10 flex flex-col gap-4",children:[e.jsx("div",{className:"bg-[var(--color-background-100)] rounded-[0.9rem] p-8 font-semibold flex flex-col gap-6",children:i?e.jsxs("p",{children:["you rated this movie ",f," 🌟"]}):e.jsxs(e.Fragment,{children:[e.jsx(A,{maxRating:10,size:24,onSetRating:m}),u>0&&e.jsx("button",{className:"bg-[var(--color-primary)] text-[var(--color-text)] border-none rounded-full text-[1.4rem] p-4 font-bold cursor-pointer transition-all duration-300 hover:bg-[var(--color-primary-light)]",onClick:I,children:"+ Add to List"})]})}),e.jsx("p",{children:e.jsx("em",{children:k})}),e.jsxs("p",{children:["Starring ",L]}),e.jsxs("p",{children:["Directed by ",M]})]})]})})}function Q({watched:t}){const r=b(t.map(s=>s.imdbRating)),n=b(t.map(s=>s.userRating)),a=b(t.map(s=>s.runtime));return e.jsxs("div",{className:"p-[2.2rem_3.2rem_1.8rem_3.2rem] rounded-[0.9rem] bg-[var(--color-background-100)] shadow-md text-xl",children:[e.jsx("h2",{className:"uppercase mb-[0.6rem] font-bold",children:"Movies you watched"}),e.jsxs("div",{className:"flex items-center gap-6 font-semibold",children:[e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"#️⃣"}),e.jsxs("span",{children:[t.length," movies"]})]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"⭐️"}),e.jsx("span",{children:r.toFixed(2)})]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"🌟"}),e.jsx("span",{children:n.toFixed(2)})]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"⏳"}),e.jsxs("span",{children:[a," min"]})]})]})]})}function Z({watched:t,onDeleteWatched:r}){return e.jsx("ul",{className:"list-none py-2 overflow-hidden",children:t.map(n=>e.jsx(q,{movie:n,onDeleteWatched:r},n.imdbID))})}function q({movie:t,onDeleteWatched:r}){return e.jsxs("li",{className:"relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 text-[1.6rem] items-center py-4 px-8 border-b border-[var(--color-background-100)]",children:[e.jsx("img",{src:t.poster,alt:`${t.title} poster`,className:"w-full row-span-full"}),e.jsx("h3",{className:"text-[1.8rem]",children:t.title}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"⭐️"}),e.jsx("span",{children:t.imdbRating})]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"🌟"}),e.jsx("span",{children:t.userRating})]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"⏳"}),e.jsxs("span",{children:[t.runtime," min"]})]}),e.jsx("button",{className:"absolute right-6 h-[1.8rem] w-[1.8rem] rounded-full border-none bg-[var(--color-red)] text-[var(--color-background-900)] text-[0.9rem] font-bold cursor-pointer transition-all duration-300 hover:bg-[var(--color-red-dark)]",onClick:()=>r(t.imdbID),children:"X"})]})]})}function re(){return e.jsx("div",{className:"text-xl",children:e.jsx(z,{})})}export{re as default};
