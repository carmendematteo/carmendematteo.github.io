import{r as u,b as I,R as S,j as w}from"./chunk-B6UiALwH.js";var y=(e,t)=>/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(e)===!1&&(t!==""&&e.startsWith("/")&&e.startsWith(t))===!1,$=(e,t,i)=>e===""?{pathname:t.pathname,search:t.search,hash:""}:e.startsWith("#")?{pathname:t.pathname,search:t.search,hash:e==="#"?"":e}:i,b=(e,t)=>e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash;const k=(e,t,i)=>{const{href:r,"aria-current":n,className:s,...a}=e,c=$(r,t,i),l=b(t,c),h=[s,l?"active":void 0].filter(Boolean).join(" ");return{linkProps:a,currentLinkProps:{...l?{"aria-current":n??"page"}:{},...h===""?{}:{className:h}}}},L=({prefetch:e,discover:t,reloadDocument:i,replace:r,preventScrollReset:n,relative:s,state:a,viewTransition:c,...l})=>l,R=()=>{if(!(typeof window>"u"))return window.location.href},A=e=>{if(e!==void 0)return new URL(e,"https://webstudio.local")},E=u.forwardRef((e,t)=>{const i=u.useContext(I),{assetBaseUrl:r}=u.useContext(S),{children:n,$webstudio$canvasOnly$assetId:s,"aria-current":a,className:c,...l}=e,h=l.href!==void 0,o=h?String(l.href):"#",v=i??R(),d=A(v);let g=L(l),C={...a===void 0?{}:{"aria-current":a},...c===void 0?{}:{className:c}};if(d&&h&&y(o,r)){const N=k({...l,href:o,"aria-current":a,className:c},d,new URL(o,d));g=L(N.linkProps),C=N.currentLinkProps}return w.jsx("a",{...g,...C,href:o===""&&d?`${d.pathname}${d.search}`:o,ref:t,children:n})});E.displayName="Link";var M=[16,32,48,64,96,128,256,384],f=[640,750,828,1080,1200,1920,2048,3840],m=[...M,...f],D=(e,t)=>{if(t){const n=/(^|\s)(1?\d?\d)vw/g,s=[];for(let a;a=n.exec(t);a)s.push(Number.parseInt(a[2],10));if(s.length){const a=Math.min(...s)*.01;return{widths:m.filter(c=>c>=f[0]*a),kind:"w"}}return{widths:m,kind:"w"}}if(e==null)return{widths:f,kind:"w"};const i=2;let r=m.findIndex(n=>n>=i*e);return r=r<0?m.length:r,{widths:m.slice(0,r+1),kind:"w"}},U=({src:e,width:t,quality:i,sizes:r,loader:n})=>{const{widths:s,kind:a}=D(t,r);return{sizes:!r&&a==="w"?"100vw":r,srcSet:s.map((c,l)=>`${n({src:e,quality:i,width:c})} ${a==="w"?c:l+1}${a}`).join(", "),src:n({src:e,quality:i,width:s[s.length-1]})}},x=e=>{if(typeof e=="number")return Math.round(e);if(typeof e=="string"){const t=Number.parseFloat(e);if(!Number.isNaN(t))return Math.round(t)}},j="(min-width: 1280px) 50vw, 100vw",V=80,H=e=>{try{return new URL(e),!0}catch{return!1}},W=e=>{const t=x(e.width),i=Math.max(Math.min(x(e.quality)??V,100),0);if(e.src!=null&&e.src!==""){if(e.src.startsWith("data:"))return{src:e.src};if(e.srcSet==null&&e.optimize){const n=e.sizes??(e.width==null?j:void 0);return U({src:e.src,width:t,quality:i,sizes:n,loader:e.loader})}const r={src:H(e.src)?e.src:e.loader({src:e.src,format:"raw"})};return e.srcSet!=null&&(r.srcSet=e.srcSet),e.sizes!=null&&(r.sizes=e.sizes),r}},z=u.forwardRef(({quality:e,loader:t,optimize:i=!0,loading:r="lazy",decoding:n="async",...s},a)=>{const c=W({src:s.src,srcSet:s.srcSet,sizes:s.sizes,width:s.width,quality:e,loader:t,optimize:i})??{src:T};return w.jsx("img",{alt:"",...s,...c,decoding:n,loading:r,ref:a})});z.displayName="Image";var T=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;const Z=u.forwardRef(({loading:e="lazy",width:t,height:i,optimize:r=!0,decoding:n,$webstudio$canvasOnly$assetId:s,...a},c)=>{const l=String(a.src??""),{imageLoader:h,renderer:o}=u.useContext(S);let v=n,d=l;return o==="canvas"&&(e="eager",v="sync",d=s??l,t!==void 0&&i!==void 0&&Number.isNaN(t)&&Number.isNaN(i)&&(r=!1,t=void 0,i=void 0)),w.jsx(z,{loading:e,decoding:v,optimize:r,width:t,height:i,...a,loader:h,src:l,ref:c},d)});Z.displayName="Image";export{E as g,Z as y};
