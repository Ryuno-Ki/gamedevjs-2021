(()=>{function f(t,e=[],n={}){let o="http://www.w3.org/2000/svg",r=document.createElementNS(o,t);e.forEach(s=>{r.classList.add(s)});for(let[s,c]of Object.entries(n))r.setAttribute(s,c);return r}function x(t,e){let[n,o]=e,r=`M${n[0]},${n[1]} L${o[0]},${o[1]}`,i=f("path",["end"],{d:r,fill:"none",stroke:"black","stroke-width":1});t.appendChild(i)}function y(t,e){let n=`M${e[0][0]},${e[0][1]}`+e.slice(1).map(c=>`L${c[0]},${c[1]}`).join(" "),s=f("path",["level"],{d:n,fill:"white",stroke:"black","stroke-width":1});t.appendChild(s)}function p({intercept:t,slope:e}){return function(n){return e*n+t}}function h(t,e){let n=t.slope,o=e.slope;return n===o?j():Number.isFinite(n)&&Number.isFinite(o)?O(t,e):!Number.isFinite(n)&&o===0||!Number.isFinite(o)&&n===0?T(t,e):P(t,e)}function j(){return null}function O(t,e){let n=t.slope,o=t.intercept,r=e.slope,s=e.intercept,c=1/(n-r);return[c*(s-o),c*(n*s-o*r)]}function P(t,e){let n=t.slope,o=t.intercept,r=e.slope,s=e.intercept;if(!Number.isFinite(n)){let u=p({slope:r,intercept:s})(t.x);return[(u-s)/r,u]}let i=p({slope:n,intercept:o})(e.x);return[(i-o)/n,i]}function T(t,e){let n=t.slope,o=t.intercept,r=e.slope,s=e.intercept;return!Number.isFinite(r)&&n===0?[e.x,o]:!Number.isFinite(n)&&r===0?[t.x,s]:null}function I(t,e){let[n,o]=t,[r,s]=e;return n===r?s<o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY:(o*r-s*n)/(r-n)}function w(t,e){let[n,o]=t,[r,s]=e;return n===r?s<o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY:o===s?0:(s-o)/(r-n)}function m(t,e){let n=w(t,e),o=I(t,e);return Number.isFinite(n)?{intercept:o,slope:n}:{intercept:o,slope:n,x:t[0]}}function E(t,e){let n=h(t,e);return n===null?null:e.slope===0?q(t,e,n):Number.isFinite(e.slope)?R(t,e,n):M(t,e,n)}function q(t,e,n){if(!Number.isFinite(t.slope))return M(t,e,n);let o=p({...t}),[r,s]=n,c=-1/t.slope,i=s-c*r,a=c*(r+1)+i;return m([...n],[r+1,a])}function M(t,e,n){let[o,r]=n,s=-1*t.slope;return{intercept:r-s*o,slope:s,x:t.x}}function R(t,e,n){let o=p({...e}),r=n[0],s=o(r),c=o(r+1);return m([r,s],[r-c,s+1])}function L(t,e,n,o){let r=D(n,o,e),s=`M${r[0][0]},${r[0][1]}`+r.slice(1).map(u=>`L${u[0]},${u[1]}`).join(" "),a=f("path",["light"],{d:s,fill:"none",stroke:"orange","stroke-width":1}),l=a.getTotalLength();a.style.strokeDasharray=`${l} ${l}`,a.style.strokeDashoffset=l,a.getBoundingClientRect(),a.style.transition="stroke-dashoffset 1s linear",t.appendChild(a),setTimeout(()=>a.style.strokeDashoffset="0",500)}function D(t,e,n){let o=[t],r=v(t),s=v(t.map((l,u)=>l+e[u])),c=V(n),i=k(r,s,c),a=100;for(;a--&&i!==null;){o.push(U(i.crosspoint));let l=W(r,i);r=l.from,s=l.to,i=k(r,s,c)}return o}function k(t,e,n){let o=m(t,e),s=n.map((c,i)=>{let a=h({intercept:c.intercept,slope:c.slope,x:c.x},o);return{...c,crosspoint:a,distance:C(a,t),index:i}}).map(c=>{let{crosspoint:i,start:a,end:l}=c,u={x:null,y:null};return i!==null&&(u={x:F(i[0],a[0],l[0]),y:F(i[1],a[1],l[1])}),{...c,within:u}}).filter(c=>c.within.x&&c.within.y).filter(c=>c.distance>0);return s.length===0?null:s.reduce((c,i)=>c.distance<i.distance?c:i)}function v(t){let[e,n]=t;return[e,100-n]}function U(t){let[e,n]=t;return[e,100-n]}function V(t){let e=[];for(let n=0;n<t.length-1;n++){let o=v(t[n]),r=v(t[n+1]),s=m(o,r);e.push({start:o,end:r,length:C(o,r),...s})}return e}function W(t,e){let n=m(t,e.crosspoint),o=E(n,{intercept:e.intercept,slope:e.slope,x:e.x}),r=p({...o}),s=e.crosspoint[0],c=r(s+1);return{from:e.crosspoint,to:[s+1,c]}}function C(t,e){if(!t||!e)return null;let[n,o]=t,[r,s]=e;return Math.round(Math.sqrt(Math.pow(Math.abs(r-n),2)+Math.pow(Math.abs(s-o),2)))}function F(t,e,n){let o=0,r=e<n?Math.round(t)-e>=o:Math.round(t)-n>=o,s=n>e?n-Math.round(t)>=o:e-Math.round(t)>=o;return r&&s}function $(t,e){let n=`M${e[0]},${e[1]} l3,5 h-6Z`,s=f("path",["start"],{d:n,fill:"orange",stroke:"orange","stroke-width":1});t.appendChild(s)}var d=[{name:"Level I",start:[50,89],end:[[45,11],[55,11]],shape:[[49,90],[40,90],[40,10],[60,10],[60,90],[51,90]]},{name:"Level O",start:[40,89],end:[[57,89],[63,89]],shape:[[39,90],[35,90],[30,88],[25,85],[20,80],[15,70],[10,60],[10,40],[15,30],[20,20],[25,15],[30,12],[35,10],[65,10],[70,12],[75,15],[80,20],[85,30],[90,40],[90,60],[85,70],[80,80],[75,85],[65,90],[55,90],[55,70],[65,70],[75,60],[75,40],[65,30],[35,30],[25,40],[25,60],[35,70],[44,70],[44,90],[41,90]]},{name:"Level M",start:[15,89],end:[[82,89],[88,89]],shape:[[14,90],[10,90],[10,20],[20,10],[30,10],[45,70],[55,70],[70,10],[80,10],[90,20],[90,90],[80,90],[80,24],[60,90],[40,90],[20,24],[20,90],[16,90]]},{name:"Level R",start:[15,89],end:[[82,89],[88,89]],shape:[[14,90],[10,90],[30,40],[25,38],[20,35],[15,30],[15,20],[20,15],[25,12],[30,10],[49,10],[50,12],[51,10],[70,10],[75,12],[80,15],[85,20],[85,30],[80,35],[75,38],[70,40],[90,90],[80,90],[60,40],[60,90],[51,90],[51,30],[70,30],[75,25],[70,20],[30,20],[25,25],[30,30],[49,30],[49,90],[40,90],[40,40],[20,90],[16,90]]}];var g=0;z(d.map(t=>t.name));_();S(d[g].name);function z(t){let e=document.getElementById("levels");t.forEach(n=>{let o=document.createElement("li");o.textContent=n,e.appendChild(o)})}function _(){let t=document.getElementById("angle"),e=document.getElementById("form"),n=document.getElementById("levels");t.addEventListener("change",o=>G(o)),e.addEventListener("submit",o=>Z(o)),n.addEventListener("click",o=>X(o))}function G(t){let e=document.querySelector(".start");if(e===null)return;let n=t.target,o=parseInt(n.value,10),{start:r}=d[g],[s,c]=r;e.setAttribute("transform",`rotate(${o}, ${s}, ${c})`),b(),N()}function X(t){let{currentTarget:e,target:n}=t;n.nodeName.toLowerCase()==="li"&&(g=Array.from(e.children).findIndex(o=>o===n),S(n.textContent))}function Z(t){t.preventDefault();let e=document.getElementById("root");b();let{shape:n,start:o}=d[g];L(e,n,o,J()),H(),K(),N()}function S(t){let e=document.getElementById("root"),n=d.find(o=>o.name===t);Q(),y(e,n.shape),$(e,n.start),x(e,n.end),N()}function tt(){let t=document.getElementById("angle");t.value=0}function et(){let t=document.getElementById("attempt");t.value=0}function Q(){tt(),et(),nt(),ot(),rt(),b()}function nt(){let t=document.querySelector(".level");t&&t.remove()}function ot(){let t=document.querySelector(".start");t&&t.remove()}function rt(){let t=document.querySelector(".end");t&&t.remove()}function b(){let t=document.querySelector(".light");t&&t.remove()}function J(){let t=document.getElementById("angle"),e=st(parseInt(t.value,10)-90);return ct({r:1,degree:e})}function H(){let t=document.getElementById("attempt");t.value=parseInt(t.value,10)+1}function st(t){return t*Math.PI/180}function ct(t){let{r:e,degree:n}=t,o=parseFloat((Math.cos(n)/e).toFixed(2)),r=parseFloat((Math.sin(n)/e).toFixed(2));return[o,r]}function N(){let t=document.getElementById("root"),e=document.querySelector('link[rel="icon"]'),o=new XMLSerializer().serializeToString(t).replace(/ id="\w+"/g,"").replace(/ style=".*"/g,"").replace(/ class="\w+"/g,"");e.href="data:image/svg+xml;utf8,"+o}function K(){let t=document.getElementById("attempt"),e=document.querySelector(".light"),n=document.getElementById("share-me"),o=parseInt(t.value,10),r=o!==1?"":"s",s=d[g].name,c=Math.round(e.getTotalLength()),i=encodeURIComponent(['I played "I Really Move On".',`I tried ${s} ${o} time${r}!`,`My score was ${c}.`,"Can you beat me?",""].join(`
`)),{hostname:a,pathname:l,protocol:u}=location,A=`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${u}//${a}${l}`)}&hashtags=gamedevjs&via=AndreJaenisch&text=${i}`;n.href=A}})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpZXcvc3ZnLmpzIiwgIi4uL2NsaWVudC92aWV3L2RyYXctZW5kLmpzIiwgIi4uL2NsaWVudC92aWV3L2RyYXctbGV2ZWwuanMiLCAiLi4vY2xpZW50L21hdGhzL2V2YWx1YXRlLmpzIiwgIi4uL2NsaWVudC9tYXRocy9jcm9zc3BvaW50LmpzIiwgIi4uL2NsaWVudC9tYXRocy9pbnRlcmNlcHQuanMiLCAiLi4vY2xpZW50L21hdGhzL3Nsb3BlLmpzIiwgIi4uL2NsaWVudC9tYXRocy9saW5lLmpzIiwgIi4uL2NsaWVudC9tYXRocy9yZWZsZWN0LmpzIiwgIi4uL2NsaWVudC92aWV3L2RyYXctbGlnaHQuanMiLCAiLi4vY2xpZW50L3ZpZXcvZHJhdy1zdGFydC5qcyIsICIuLi9jbGllbnQvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN2ZyAodGFnLCBjbGFzc2VzID0gW10sIGF0dHJzID0ge30pIHtcbiAgY29uc3QgbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIHRhZylcblxuICBjbGFzc2VzLmZvckVhY2goKGNscykgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpXG4gIH0pXG5cbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzKSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gIH1cblxuICByZXR1cm4gZWxlbWVudFxufVxuXG4iLCAiaW1wb3J0IHN2ZyBmcm9tICcuL3N2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd0VuZCAocm9vdCwgY29vcmRzKSB7XG4gIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gY29vcmRzXG4gIGNvbnN0IGQgPSBgTSR7c3RhcnRbIDAgXX0sJHtzdGFydFsgMSBdfSBMJHtlbmRbIDAgXX0sJHtlbmRbIDEgXX1gXG4gIGNvbnN0IGZpbGwgPSAnbm9uZSdcbiAgY29uc3Qgc3Ryb2tlID0gJ2JsYWNrJ1xuICBjb25zdCBwYXRoID0gc3ZnKCdwYXRoJywgWyAnZW5kJyBdLCB7IGQsIGZpbGwsIHN0cm9rZSwgJ3N0cm9rZS13aWR0aCc6IDEgfSlcbiAgcm9vdC5hcHBlbmRDaGlsZChwYXRoKVxufVxuXG4iLCAiaW1wb3J0IHN2ZyBmcm9tICcuL3N2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd0xldmVsIChyb290LCBwb2ludHMpIHtcbiAgY29uc3QgZCA9IGBNJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWAgKyBwb2ludHNcbiAgICAuc2xpY2UoMSlcbiAgICAubWFwKChwYWlyKSA9PiBgTCR7cGFpclswXX0sJHtwYWlyWzFdfWApXG4gICAgLmpvaW4oJyAnKVxuICBjb25zdCBmaWxsID0gJ3doaXRlJ1xuICBjb25zdCBzdHJva2UgPSAnYmxhY2snXG4gIGNvbnN0IHBhdGggPSBzdmcoJ3BhdGgnLCBbICdsZXZlbCcgXSwgeyBkLCBmaWxsLCBzdHJva2UsICdzdHJva2Utd2lkdGgnOiAxIH0pXG4gIHJvb3QuYXBwZW5kQ2hpbGQocGF0aClcbn1cblxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2YWx1YXRlICh7IGludGVyY2VwdCwgc2xvcGUgfSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gc2xvcGUgKiB4ICsgaW50ZXJjZXB0XG4gIH1cbn1cblxuIiwgImltcG9ydCBldmFsdWF0ZSBmcm9tICcuL2V2YWx1YXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcm9zc3BvaW50IChsaW5lMCwgbGluZTEpIHtcbiAgY29uc3Qgc2xvcGUwID0gbGluZTAuc2xvcGVcbiAgY29uc3Qgc2xvcGUxID0gbGluZTEuc2xvcGVcblxuICBpZiAoc2xvcGUwID09PSBzbG9wZTEpIHtcbiAgICByZXR1cm4gY3Jvc3Nwb2ludFdoZW5QYXJhbGxlbHMoKVxuICB9XG5cbiAgaWYgKE51bWJlci5pc0Zpbml0ZShzbG9wZTApICYmIE51bWJlci5pc0Zpbml0ZShzbG9wZTEpKSB7XG4gICAgcmV0dXJuIGNyb3NzcG9pbnRXaGVuQm90aEFyZUZpbml0ZShsaW5lMCwgbGluZTEpXG4gIH1cblxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShzbG9wZTApICYmIHNsb3BlMSA9PT0gMCkge1xuICAgIHJldHVybiBjcm9zc3BvaW50V2hlbk9uZUlzSW5maW5pdGVUaGVPdGhlclplcm8obGluZTAsIGxpbmUxKVxuICB9XG5cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2xvcGUxKSAmJiBzbG9wZTAgPT09IDApIHtcbiAgICByZXR1cm4gY3Jvc3Nwb2ludFdoZW5PbmVJc0luZmluaXRlVGhlT3RoZXJaZXJvKGxpbmUwLCBsaW5lMSlcbiAgfVxuXG4gIHJldHVybiBjcm9zc3BvaW50V2hlbk9uZUlzSW5maW5pdGUobGluZTAsIGxpbmUxKVxufVxuXG5mdW5jdGlvbiBjcm9zc3BvaW50V2hlblBhcmFsbGVscyAoKSB7XG4gIC8vIExpbmVzIGFyZSBwYXJhbGxlbCwgaS5lLiB3aWxsIG5ldmVyIGludGVyc2VjdFxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBjcm9zc3BvaW50V2hlbkJvdGhBcmVGaW5pdGUgKGxpbmUwLCBsaW5lMSkge1xuICBjb25zdCBzbG9wZTAgPSBsaW5lMC5zbG9wZVxuICBjb25zdCBpbnRlcmNlcHQwID0gbGluZTAuaW50ZXJjZXB0XG5cbiAgY29uc3Qgc2xvcGUxID0gbGluZTEuc2xvcGVcbiAgY29uc3QgaW50ZXJjZXB0MSA9IGxpbmUxLmludGVyY2VwdFxuXG4gIGNvbnN0IGZhY3RvciA9IDEgLyAoc2xvcGUwIC0gc2xvcGUxKVxuXG4gIHJldHVybiBbXG4gICAgZmFjdG9yICogKGludGVyY2VwdDEgLSBpbnRlcmNlcHQwKSxcbiAgICBmYWN0b3IgKiAoc2xvcGUwICogaW50ZXJjZXB0MSAtIGludGVyY2VwdDAgKiBzbG9wZTEpLFxuICBdXG59XG5cbmZ1bmN0aW9uIGNyb3NzcG9pbnRXaGVuT25lSXNJbmZpbml0ZSAobGluZTAsIGxpbmUxKSB7XG4gIGNvbnN0IHNsb3BlMCA9IGxpbmUwLnNsb3BlXG4gIGNvbnN0IGludGVyY2VwdDAgPSBsaW5lMC5pbnRlcmNlcHRcblxuICBjb25zdCBzbG9wZTEgPSBsaW5lMS5zbG9wZVxuICBjb25zdCBpbnRlcmNlcHQxID0gbGluZTEuaW50ZXJjZXB0XG5cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2xvcGUwKSkge1xuICAgIGNvbnN0IGZ1bmMgPSBldmFsdWF0ZSh7IHNsb3BlOiBzbG9wZTEsIGludGVyY2VwdDogaW50ZXJjZXB0MSB9KVxuICAgIGNvbnN0IHkgPSBmdW5jKGxpbmUwLngpXG4gICAgY29uc3QgeCA9ICh5IC0gaW50ZXJjZXB0MSkgLyBzbG9wZTFcbiAgICByZXR1cm4gWyB4LCB5IF1cbiAgfVxuXG4gIGNvbnN0IGZ1bmMgPSBldmFsdWF0ZSh7IHNsb3BlOiBzbG9wZTAsIGludGVyY2VwdDogaW50ZXJjZXB0MCB9KVxuICBjb25zdCB5ID0gZnVuYyhsaW5lMS54KVxuICBjb25zdCB4ID0gKHkgLSBpbnRlcmNlcHQwKSAvIHNsb3BlMFxuICByZXR1cm4gWyB4LCB5IF1cbn1cblxuZnVuY3Rpb24gY3Jvc3Nwb2ludFdoZW5PbmVJc0luZmluaXRlVGhlT3RoZXJaZXJvIChsaW5lMCwgbGluZTEpIHtcbiAgY29uc3Qgc2xvcGUwID0gbGluZTAuc2xvcGVcbiAgY29uc3QgaW50ZXJjZXB0MCA9IGxpbmUwLmludGVyY2VwdFxuXG4gIGNvbnN0IHNsb3BlMSA9IGxpbmUxLnNsb3BlXG4gIGNvbnN0IGludGVyY2VwdDEgPSBsaW5lMS5pbnRlcmNlcHRcblxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShzbG9wZTEpKSB7XG4gICAgaWYgKHNsb3BlMCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFsgbGluZTEueCwgaW50ZXJjZXB0MCBdXG4gICAgfVxuICB9XG5cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2xvcGUwKSkge1xuICAgIGlmIChzbG9wZTEgPT09IDApIHtcbiAgICAgIHJldHVybiBbIGxpbmUwLngsIGludGVyY2VwdDEgXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVJbnRlcmNlcHQgKHBvaW50MCwgcG9pbnQxKSB7XG4gIGNvbnN0IFt4MCwgeTBdID0gcG9pbnQwXG4gIGNvbnN0IFt4MSwgeTFdID0gcG9pbnQxXG5cbiAgaWYgKHgwID09PSB4MSkge1xuICAgIGlmICh5MSA8IHkwKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgfVxuXG4gIHJldHVybiAoeTAgKiB4MSAtIHkxICogeDApIC8gKHgxIC0geDApXG59XG5cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU2xvcGUgKHBvaW50MCwgcG9pbnQxKSB7XG4gIGNvbnN0IFt4MCwgeTBdID0gcG9pbnQwXG4gIGNvbnN0IFt4MSwgeTFdID0gcG9pbnQxXG5cbiAgaWYgKHgwID09PSB4MSkge1xuICAgIGlmICh5MSA8IHkwKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgfVxuXG4gIGlmICh5MCA9PT0geTEpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcmV0dXJuICh5MSAtIHkwKSAvICh4MSAtIHgwKVxufVxuXG4iLCAiaW1wb3J0IGNvbXB1dGVJbnRlcmNlcHQgZnJvbSAnLi9pbnRlcmNlcHQuanMnXG5pbXBvcnQgY29tcHV0ZVNsb3BlIGZyb20gJy4vc2xvcGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVMaW5lVmFyaWFibGVzIChwb2ludDAsIHBvaW50MSkge1xuICBjb25zdCBzbG9wZSA9IGNvbXB1dGVTbG9wZShwb2ludDAsIHBvaW50MSlcbiAgY29uc3QgaW50ZXJjZXB0ID0gY29tcHV0ZUludGVyY2VwdChwb2ludDAsIHBvaW50MSlcblxuICBpZiAoTnVtYmVyLmlzRmluaXRlKHNsb3BlKSkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlcmNlcHQsXG4gICAgICBzbG9wZSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGludGVyY2VwdCxcbiAgICBzbG9wZSxcbiAgICB4OiBwb2ludDBbIDAgXVxuICB9XG59XG5cbiIsICJpbXBvcnQgY3Jvc3Nwb2ludCBmcm9tICcuL2Nyb3NzcG9pbnQuanMnXG5pbXBvcnQgZXZhbHVhdGUgZnJvbSAnLi9ldmFsdWF0ZS5qcydcbmltcG9ydCBsaW5lIGZyb20gJy4vbGluZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVmbGVjdCAobGluZTAsIGxpbmUxKSB7XG4gIGNvbnN0IHBvaW50ID0gY3Jvc3Nwb2ludChsaW5lMCwgbGluZTEpXG5cbiAgaWYgKHBvaW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChsaW5lMS5zbG9wZSA9PT0gMCkge1xuICAgIHJldHVybiByZWZsZWN0T25QYXJhbGxlbFRvWEF4aXMobGluZTAsIGxpbmUxLCBwb2ludClcbiAgfVxuXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKGxpbmUxLnNsb3BlKSkge1xuICAgIHJldHVybiByZWZsZWN0T25QYXJhbGxlbFRvWUF4aXMobGluZTAsIGxpbmUxLCBwb2ludClcbiAgfVxuXG4gIHJldHVybiByZWZsZWN0T25EaWFnb25hbHMobGluZTAsIGxpbmUxLCBwb2ludClcbn1cblxuZnVuY3Rpb24gcmVmbGVjdE9uUGFyYWxsZWxUb1hBeGlzIChsaW5lMCwgbGluZTEsIHBvaW50KSB7XG4gIC8qXG4gICAqIEdlb21ldHJpYyBtb3RpdmF0aW9uXG4gICAqIE9uIGEgbGluZSBwYXJhbGxlbCB0byB0aGUgeCBheGlzLCB0aGUgcmVmbGVjdGVkIGxpbmUgc2ltcGx5IHN3aXRjaGVzIGl0c1xuICAgKiBzaWdudW0gYW5kIGlzIGludmVydGVkXG4gICAqL1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShsaW5lMC5zbG9wZSkpIHtcbiAgICByZXR1cm4gcmVmbGVjdE9uUGFyYWxsZWxUb1lBeGlzKGxpbmUwLCBsaW5lMSwgcG9pbnQpXG4gIH1cblxuICBjb25zdCBmdW5jID0gZXZhbHVhdGUoeyAuLi5saW5lMCB9KVxuICBjb25zdCBbIHgsIHkgXSA9IHBvaW50XG4gIGNvbnN0IHNsb3BlID0gLTEgLyBsaW5lMC5zbG9wZVxuICBjb25zdCBpbnRlcmNlcHQgPSB5IC0gc2xvcGUgKiB4XG4gIGNvbnN0IHkxID0gc2xvcGUgKiAoeCArIDEpICsgaW50ZXJjZXB0XG5cbiAgcmV0dXJuIGxpbmUoWyAuLi5wb2ludCBdLCBbIHggKyAxLCB5MSBdKVxufVxuXG5mdW5jdGlvbiByZWZsZWN0T25QYXJhbGxlbFRvWUF4aXMgKGxpbmUwLCBsaW5lMSwgcG9pbnQpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSBwb2ludFxuICBjb25zdCBzbG9wZSA9IC0xICogbGluZTAuc2xvcGVcbiAgY29uc3QgaW50ZXJjZXB0ID0geSAtIHNsb3BlICogeFxuXG4gIHJldHVybiB7IGludGVyY2VwdCwgc2xvcGUsIHg6IGxpbmUwLnggfVxufVxuXG5mdW5jdGlvbiByZWZsZWN0T25EaWFnb25hbHMgKGxpbmUwLCBsaW5lMSwgcG9pbnQpIHtcbiAgLyogR2VvbWV0cmljIG1vdGl2YXRpb246XG4gICAqIElmIEkgZ28gb25lIHVuaXQgaW4gdGhlIHggZGlyZWN0aW9uIGFuZCBsb29rIGF0IHRoZSBkaWZmZXJlbmNlIGluIHlcbiAgICogSSBoYXZlIHRvIGdvIHRoZSBzYW1lIGRpc3RhbmNlIGluIG5lZ2F0aXZlIGRpcmVjdGlvbiBhbG9uZyB0aGUgeCBheGlzIHRvXG4gICAqIGdldCB0aGUgZGVsdGEgaW4geSBmb3Igb25lIHVuaXQuXG4gICAqIFRoZXNlIHdpbGwgZ2l2ZSBtZSB0aGUgc2Vjb25kIHBvaW50IHRvIGZvcm0gYSBsaW5lIHdpdGggdGhlIGNyb3NzIHBvaW50LlxuICAgKi9cbiAgY29uc3QgZnVuYyA9IGV2YWx1YXRlKHsgLi4ubGluZTEgfSlcbiAgY29uc3QgeCA9IHBvaW50WyAwIF1cbiAgY29uc3QgeSA9IGZ1bmMoeClcbiAgY29uc3QgeTEgPSBmdW5jKHggKyAxKVxuXG4gIHJldHVybiBsaW5lKFsgeCwgeSBdLCBbIHggLSB5MSwgeSArIDEgXSlcbn1cblxuIiwgImltcG9ydCBjcm9zc3BvaW50IGZyb20gJy4uL21hdGhzL2Nyb3NzcG9pbnQnXG5pbXBvcnQgZXZhbHVhdGUgZnJvbSAnLi4vbWF0aHMvZXZhbHVhdGUnXG5pbXBvcnQgbGluZSBmcm9tICcuLi9tYXRocy9saW5lJ1xuaW1wb3J0IHJlZmxlY3QgZnJvbSAnLi4vbWF0aHMvcmVmbGVjdCdcbmltcG9ydCBzdmcgZnJvbSAnLi9zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdMaWdodCAocm9vdCwgbGV2ZWxQb2ludHMsIHN0YXJ0LCBkaXJlY3Rpb24pIHtcbiAgY29uc3QgcG9pbnRzID0gY29tcHV0ZVBvaW50cyhzdGFydCwgZGlyZWN0aW9uLCBsZXZlbFBvaW50cylcbiAgY29uc3QgZCA9IGBNJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWAgKyBwb2ludHNcbiAgICAuc2xpY2UoMSlcbiAgICAubWFwKChwYWlyKSA9PiBgTCR7cGFpclswXX0sJHtwYWlyWzFdfWApXG4gICAgLmpvaW4oJyAnKVxuICBjb25zdCBmaWxsID0gJ25vbmUnXG4gIGNvbnN0IHN0cm9rZSA9ICdvcmFuZ2UnXG4gIGNvbnN0IHBhdGggPSBzdmcoJ3BhdGgnLCBbICdsaWdodCcgXSwgeyBkLCBmaWxsLCBzdHJva2UsICdzdHJva2Utd2lkdGgnOiAxIH0pXG4gIC8vIGMuZi4gaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDEzL2FuaW1hdGVkLWxpbmUtZHJhd2luZy1zdmcvI2FuaW1hdGluZy1pdFxuICBjb25zdCBsZW5ndGggPSBwYXRoLmdldFRvdGFsTGVuZ3RoKClcbiAgcGF0aC5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHtsZW5ndGh9ICR7bGVuZ3RofWBcbiAgcGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gbGVuZ3RoXG4gIHBhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcGF0aC5zdHlsZS50cmFuc2l0aW9uID0gJ3N0cm9rZS1kYXNob2Zmc2V0IDFzIGxpbmVhcidcbiAgcm9vdC5hcHBlbmRDaGlsZChwYXRoKVxuICBzZXRUaW1lb3V0KCgpID0+IHBhdGguc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9ICcwJywgNTAwKVxufVxuXG5mdW5jdGlvbiBjb21wdXRlUG9pbnRzIChzdGFydCwgZGlyZWN0aW9uLCBsZXZlbFBvaW50cykge1xuICBjb25zdCBzdmdQb2ludHMgPSBbIHN0YXJ0IF1cbiAgbGV0IGZyb20gPSBzdmdDb29yZFRvQ2FydGVzaWFuQ29vcmQoc3RhcnQpXG4gIGxldCB0byA9IHN2Z0Nvb3JkVG9DYXJ0ZXNpYW5Db29yZChcbiAgICBzdGFydC5tYXAoKHBvaW50LCBpbmRleCkgPT4gcG9pbnQgKyBkaXJlY3Rpb25bIGluZGV4IF0pXG4gIClcblxuICBjb25zdCBwb2ludHMgPSBwYXJzZUxldmVsUG9pbnRzKGxldmVsUG9pbnRzKVxuICBsZXQgcG9pbnQgPSBjb21wdXRlUG9pbnQoZnJvbSwgdG8sIHBvaW50cylcbiAgbGV0IGNvdW50ZXIgPSAxMDBcbiAgd2hpbGUgKGNvdW50ZXItLSAmJiBwb2ludCAhPT0gbnVsbCkge1xuICAgIHN2Z1BvaW50cy5wdXNoKGNhcnRlc2lhbkNvb3JkVG9TdmdDb29yZChwb2ludC5jcm9zc3BvaW50KSlcbiAgICBjb25zdCBuZXh0UG9pbnQgPSBjb21wdXRlTmV4dFBvaW50KGZyb20sIHBvaW50KVxuICAgIGZyb20gPSBuZXh0UG9pbnQuZnJvbVxuICAgIHRvID0gbmV4dFBvaW50LnRvXG4gICAgcG9pbnQgPSBjb21wdXRlUG9pbnQoZnJvbSwgdG8sIHBvaW50cylcbiAgfVxuICByZXR1cm4gc3ZnUG9pbnRzXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVQb2ludCAoZnJvbSwgdG8sIGxldmVsUG9pbnRzKSB7XG4gIGNvbnN0IGxpZ2h0ID0gbGluZShmcm9tLCB0bylcblxuICBjb25zdCBkaXN0YW5jZXMgPSBsZXZlbFBvaW50c1xuICAgIC5tYXAoKHB0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY3JwdCA9IGNyb3NzcG9pbnQoXG4gICAgICAgIHsgaW50ZXJjZXB0OiBwdC5pbnRlcmNlcHQsIHNsb3BlOiBwdC5zbG9wZSwgeDogcHQueCB9LFxuICAgICAgICBsaWdodFxuICAgICAgKVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wdCxcbiAgICAgICAgY3Jvc3Nwb2ludDogY3JwdCxcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlKGNycHQsIGZyb20pLFxuICAgICAgICBpbmRleCxcbiAgICAgIH1cbiAgICB9KVxuICAgIC5tYXAoKHB0KSA9PiB7XG4gICAgICBjb25zdCB7IGNyb3NzcG9pbnQsIHN0YXJ0LCBlbmQgfSA9IHB0XG4gICAgICBsZXQgd2l0aGluID0geyB4OiBudWxsLCB5OiBudWxsIH1cblxuICAgICAgaWYgKGNyb3NzcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgd2l0aGluID0ge1xuICAgICAgICAgIHg6IGlzV2l0aGluQm91bmRzKGNyb3NzcG9pbnRbIDAgXSwgc3RhcnRbIDAgXSwgZW5kWyAwIF0pLFxuICAgICAgICAgIHk6IGlzV2l0aGluQm91bmRzKGNyb3NzcG9pbnRbIDEgXSwgc3RhcnRbIDEgXSwgZW5kWyAxIF0pLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnB0LFxuICAgICAgICB3aXRoaW4sXG4gICAgICB9XG4gICAgfSlcblxuICBjb25zdCBjYW5kaWRhdGVzID0gZGlzdGFuY2VzXG4gICAgLmZpbHRlcigocHQpID0+IHB0LndpdGhpbi54ICYmIHB0LndpdGhpbi55KVxuICAgIC5maWx0ZXIoKHB0KSA9PiBwdC5kaXN0YW5jZSA+IDApXG5cbiAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzXG4gICAgLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cy5kaXN0YW5jZSA8IGN1cnJlbnQuZGlzdGFuY2VcbiAgICAgICAgPyBwcmV2aW91c1xuICAgICAgICA6IGN1cnJlbnRcbiAgICAgIH1cbiAgICApXG59XG5cbmZ1bmN0aW9uIHN2Z0Nvb3JkVG9DYXJ0ZXNpYW5Db29yZCAocG9pbnQpIHtcbiAgLy8gQXNzdW1lIGEgdmlld0JveCBvZiBcIjAgMCAxMDAgMTAwXCIgaGVyZVxuICBjb25zdCBbIHgsIHkgXSA9IHBvaW50XG4gIHJldHVybiBbIHgsIDEwMCAtIHkgXVxufVxuXG5mdW5jdGlvbiBjYXJ0ZXNpYW5Db29yZFRvU3ZnQ29vcmQgKHBvaW50KSB7XG4gIC8vIEFzc3VtZSBhIHZpZXdCb3ggb2YgXCIwIDAgMTAwIDEwMFwiIGhlcmVcbiAgY29uc3QgWyB4LCB5IF0gPSBwb2ludFxuICByZXR1cm4gWyB4LCAxMDAgLSB5IF1cbn1cblxuZnVuY3Rpb24gcGFyc2VMZXZlbFBvaW50cyAobGV2ZWxQb2ludHMpIHtcbiAgY29uc3QgcG9pbnRzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbFBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3ZnQ29vcmRUb0NhcnRlc2lhbkNvb3JkKGxldmVsUG9pbnRzWyBpIF0pXG4gICAgY29uc3QgbmV4dCA9IHN2Z0Nvb3JkVG9DYXJ0ZXNpYW5Db29yZChsZXZlbFBvaW50c1sgaSArIDEgXSlcbiAgICBjb25zdCBsZXZlbCA9IGxpbmUoY3VycmVudCwgbmV4dClcblxuICAgIHBvaW50cy5wdXNoKHtcbiAgICAgIHN0YXJ0OiBjdXJyZW50LFxuICAgICAgZW5kOiBuZXh0LFxuICAgICAgbGVuZ3RoOiBkaXN0YW5jZShjdXJyZW50LCBuZXh0KSxcbiAgICAgIC4uLmxldmVsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gcG9pbnRzXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVOZXh0UG9pbnQgKG9sZFBvaW50LCBwb2ludCkge1xuICBjb25zdCBiZWZvcmUgPSBsaW5lKG9sZFBvaW50LCBwb2ludC5jcm9zc3BvaW50KVxuICBjb25zdCBhZnRlciA9IHJlZmxlY3QoXG4gICAgYmVmb3JlLFxuICAgIHsgaW50ZXJjZXB0OiBwb2ludC5pbnRlcmNlcHQsIHNsb3BlOiBwb2ludC5zbG9wZSwgeDogcG9pbnQueCB9XG4gIClcblxuICBjb25zdCBmdW5jID0gZXZhbHVhdGUoeyAuLi5hZnRlciB9KVxuICBjb25zdCB4ID0gcG9pbnQuY3Jvc3Nwb2ludFsgMCBdXG4gIGNvbnN0IHkgPSBmdW5jKHggKyAxKVxuXG4gIHJldHVybiB7XG4gICAgZnJvbTogcG9pbnQuY3Jvc3Nwb2ludCxcbiAgICB0bzogWyB4ICsgMSwgeSBdLFxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3RhbmNlIChwb2ludDAsIHBvaW50MSkge1xuICBpZiAoIXBvaW50MCB8fCAhcG9pbnQxKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IFsgeDAsIHkwIF0gPSBwb2ludDBcbiAgY29uc3QgWyB4MSwgeTEgXSA9IHBvaW50MVxuICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhNYXRoLmFicyh4MSAtIHgwKSwgMikgKyBNYXRoLnBvdyhNYXRoLmFicyh5MSAtIHkwKSwgMilcbiAgICApXG4gIClcbn1cblxuZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZHMgKHZhbHVlLCBsb3dlciwgdXBwZXIpIHtcbiAgLy8gU2luY2UgZmxvYXRpbmcgcG9pbnQgYXJpdGhtZXRpYyBpcyBmdXp6eSwgcm91bmQgYmVmb3JlIGNvbXBhcmlzb25cbiAgY29uc3QgdG9sZXJhbmNlID0gMFxuXG4gIC8qIHZhbHVlID49IGxvd2VyIDw9PiB2YWx1ZSAtIGxvd2VyID49IDAgKi9cbiAgY29uc3QgbGFyZ2VyVGhhbkxvd2VyID0gbG93ZXIgPCB1cHBlclxuICAgID8gTWF0aC5yb3VuZCh2YWx1ZSkgLSBsb3dlciA+PSB0b2xlcmFuY2VcbiAgICA6IE1hdGgucm91bmQodmFsdWUpIC0gdXBwZXIgPj0gdG9sZXJhbmNlXG4gIC8qIHZhbHVlIDw9IHVwcGVyIDw9PiB1cHBlciAtIHZhbHVlID49IDAgKi9cbiAgY29uc3Qgc21hbGxlclRoYW5VcHBlciA9IHVwcGVyID4gbG93ZXJcbiAgICA/IHVwcGVyIC0gTWF0aC5yb3VuZCh2YWx1ZSkgPj0gdG9sZXJhbmNlXG4gICAgOiBsb3dlciAtIE1hdGgucm91bmQodmFsdWUpID49IHRvbGVyYW5jZVxuXG4gIHJldHVybiBsYXJnZXJUaGFuTG93ZXIgJiYgc21hbGxlclRoYW5VcHBlclxufVxuXG4iLCAiaW1wb3J0IHN2ZyBmcm9tICcuL3N2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd1N0YXJ0IChyb290LCBzdGFydCkge1xuICBjb25zdCBkID0gYE0ke3N0YXJ0WzBdfSwke3N0YXJ0WzFdfSBsMyw1IGgtNlpgXG4gIGNvbnN0IGZpbGwgPSAnb3JhbmdlJ1xuICBjb25zdCBzdHJva2UgPSAnb3JhbmdlJ1xuICBjb25zdCBwYXRoID0gc3ZnKCdwYXRoJywgWyAnc3RhcnQnIF0sIHsgZCwgZmlsbCwgc3Ryb2tlLCAnc3Ryb2tlLXdpZHRoJzogMSB9KVxuICByb290LmFwcGVuZENoaWxkKHBhdGgpXG59XG5cbiIsICJpbXBvcnQgZHJhd0VuZCBmcm9tICcuL3ZpZXcvZHJhdy1lbmQnXG5pbXBvcnQgZHJhd0xldmVsIGZyb20gJy4vdmlldy9kcmF3LWxldmVsJ1xuaW1wb3J0IGRyYXdMaWdodCBmcm9tICcuL3ZpZXcvZHJhdy1saWdodCdcbmltcG9ydCBkcmF3U3RhcnQgZnJvbSAnLi92aWV3L2RyYXctc3RhcnQnXG5pbXBvcnQgbGV2ZWxzIGZyb20gJy4vbGV2ZWxzLmpzb24nXG5cbid1c2Ugc3RyaWN0JztcblxubGV0IGN1cnJlbnRMZXZlbEluZGV4ID0gMFxuXG5saXN0TGV2ZWxzKGxldmVscy5tYXAoKGxldmVsKSA9PiBsZXZlbC5uYW1lKSlcbnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKVxubG9hZExldmVsKGxldmVsc1sgY3VycmVudExldmVsSW5kZXggXS5uYW1lKVxuXG4vLyBUT0RPOiBBZGQgYSBnYW1lIG92ZXIgc2NyZWVuXG4vLyBUT0RPOiBBZGQgYSBzaGFyZSBvbiBUd2l0dGVyIHNjcmVlblxuXG5mdW5jdGlvbiBsaXN0TGV2ZWxzIChuYW1lcykge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVscycpXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSBuYW1lXG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50TGlzdGVuZXJzICgpIHtcbiAgY29uc3QgYW5nbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5nbGUnKVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKVxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVscycpXG5cbiAgYW5nbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCkpXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiBvblN1Ym1pdChldmVudCkpXG4gIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IG9uQ2xpY2soZXZlbnQpKVxufVxuXG5mdW5jdGlvbiBvbkNoYW5nZSAoZXZlbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpXG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldFxuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlLCAxMClcbiAgY29uc3QgeyBzdGFydCB9ID0gbGV2ZWxzWyBjdXJyZW50TGV2ZWxJbmRleCBdXG4gIGNvbnN0IFsgYmVnaW4sIGVuZCBdID0gc3RhcnRcblxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHJvdGF0ZSgke3ZhbHVlfSwgJHtiZWdpbn0sICR7ZW5kfSlgKVxuICBjbGVhckxpZ2h0KClcbiAgdXBkYXRlRmF2aWNvbigpXG59XG5cbmZ1bmN0aW9uIG9uQ2xpY2sgKGV2ZW50KSB7XG4gIGNvbnN0IHsgY3VycmVudFRhcmdldCwgdGFyZ2V0IH0gPSBldmVudFxuICBpZiAodGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdsaScpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGN1cnJlbnRMZXZlbEluZGV4ID0gQXJyYXlcbiAgICAuZnJvbShcbiAgICAgIGN1cnJlbnRUYXJnZXQuY2hpbGRyZW5cbiAgICApXG4gICAgLmZpbmRJbmRleCgoY2hpbGQpID0+IGNoaWxkID09PSB0YXJnZXQpXG4gIGxvYWRMZXZlbCh0YXJnZXQudGV4dENvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIG9uU3VibWl0IChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuICBjbGVhckxpZ2h0KClcblxuICBjb25zdCB7IHNoYXBlLCBzdGFydCB9ID0gbGV2ZWxzWyBjdXJyZW50TGV2ZWxJbmRleCBdXG4gIGRyYXdMaWdodChyb290LCBzaGFwZSwgc3RhcnQsIGdldEFuZ2xlKCkpXG5cbiAgaW5jcmVhc2VBdHRlbXB0KClcbiAgc2hhcmVPblR3aXR0ZXIoKVxuICB1cGRhdGVGYXZpY29uKClcbn1cblxuZnVuY3Rpb24gbG9hZExldmVsIChsZXZlbE5hbWUpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgY29uc3QgbGV2ZWwgPSBsZXZlbHMuZmluZCgobGV2ZWwpID0+IGxldmVsLm5hbWUgPT09IGxldmVsTmFtZSlcblxuICByZXNldCgpXG4gIGRyYXdMZXZlbChyb290LCBsZXZlbC5zaGFwZSlcbiAgZHJhd1N0YXJ0KHJvb3QsIGxldmVsLnN0YXJ0KVxuICBkcmF3RW5kKHJvb3QsIGxldmVsLmVuZClcbiAgdXBkYXRlRmF2aWNvbigpXG59XG5cbmZ1bmN0aW9uIHJlc2V0QW5nbGUgKCkge1xuICBjb25zdCBhbmdsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZScpXG4gIGFuZ2xlLnZhbHVlID0gMFxufVxuXG5mdW5jdGlvbiByZXNldEF0dGVtcHRzICgpIHtcbiAgY29uc3QgYXR0ZW1wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRlbXB0JylcbiAgYXR0ZW1wdC52YWx1ZSA9IDBcbn1cblxuZnVuY3Rpb24gcmVzZXQgKCkge1xuICByZXNldEFuZ2xlKClcbiAgcmVzZXRBdHRlbXB0cygpXG5cbiAgY2xlYXJMZXZlbCgpXG4gIGNsZWFyU3RhcnQoKVxuICBjbGVhckVuZCgpXG4gIGNsZWFyTGlnaHQoKVxufVxuXG5mdW5jdGlvbiBjbGVhckxldmVsICgpIHtcbiAgY29uc3QgbGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWwnKVxuICBpZiAobGV2ZWwpIHtcbiAgICBsZXZlbC5yZW1vdmUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyU3RhcnQgKCkge1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpXG4gIGlmIChzdGFydCkge1xuICAgIHN0YXJ0LnJlbW92ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJFbmQgKCkge1xuICBjb25zdCBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kJylcbiAgaWYgKGVuZCkge1xuICAgIGVuZC5yZW1vdmUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTGlnaHQgKCkge1xuICBjb25zdCBsaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodCcpXG4gIGlmIChsaWdodCkge1xuICAgIGxpZ2h0LnJlbW92ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5nbGUgKCkge1xuICBjb25zdCBhbmdsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZScpXG5cbiAgY29uc3QgcmFkaWFucyA9IGRlZ1RvUmFkKHBhcnNlSW50KGFuZ2xlLnZhbHVlLCAxMCkgLSA5MClcbiAgcmV0dXJuIHBvbGFyVG9DYXJ0ZXNpYW4oeyByOiAxLCBkZWdyZWU6IHJhZGlhbnMgfSlcbn1cblxuZnVuY3Rpb24gaW5jcmVhc2VBdHRlbXB0ICgpIHtcbiAgY29uc3QgYXR0ZW1wdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRlbXB0JylcbiAgYXR0ZW1wdC52YWx1ZSA9IHBhcnNlSW50KGF0dGVtcHQudmFsdWUsIDEwKSArIDFcbn1cblxuZnVuY3Rpb24gZGVnVG9SYWQgKGRlZykge1xuICAvKiBkZWcgLyAxODAgPSB4IC8gUEkgKi9cbiAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODBcbn1cblxuZnVuY3Rpb24gcG9sYXJUb0NhcnRlc2lhbiAocG9sYXIpIHtcbiAgY29uc3QgeyByLCBkZWdyZWUgfSA9IHBvbGFyXG4gIGNvbnN0IHggPSBwYXJzZUZsb2F0KChNYXRoLmNvcyhkZWdyZWUpIC8gcikudG9GaXhlZCgyKSlcbiAgY29uc3QgeSA9IHBhcnNlRmxvYXQoKE1hdGguc2luKGRlZ3JlZSkgLyByKS50b0ZpeGVkKDIpKVxuICByZXR1cm4gWyB4LCB5IF1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRmF2aWNvbiAoKSB7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiaWNvblwiXScpXG5cbiAgY29uc3Qgc2VyaWFsaXplciA9IG5ldyBYTUxTZXJpYWxpemVyKClcbiAgY29uc3Qgc3RyID0gc2VyaWFsaXplclxuICAgIC5zZXJpYWxpemVUb1N0cmluZyhzdmcpXG4gICAgLnJlcGxhY2UoLyBpZD1cIlxcdytcIi9nLCAnJylcbiAgICAucmVwbGFjZSgvIHN0eWxlPVwiLipcIi9nLCAnJylcbiAgICAucmVwbGFjZSgvIGNsYXNzPVwiXFx3K1wiL2csICcnKVxuICBpY29uLmhyZWYgPSAnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJyArIHN0clxufVxuXG5mdW5jdGlvbiBzaGFyZU9uVHdpdHRlciAoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0ZW1wdCcpXG4gIGNvbnN0IGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0JylcbiAgY29uc3Qgc2hhcmVNZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1tZScpXG5cbiAgY29uc3QgYXR0ZW1wdHMgPSBwYXJzZUludChlbGVtZW50LnZhbHVlLCAxMClcbiAgY29uc3QgcGx1cmFsID0gYXR0ZW1wdHMgIT09IDEgPyAnJyA6ICdzJ1xuICBjb25zdCBjdXJyZW50TGV2ZWwgPSBsZXZlbHNbIGN1cnJlbnRMZXZlbEluZGV4IF0ubmFtZVxuICBjb25zdCBzY29yZSA9IE1hdGgucm91bmQobGlnaHQuZ2V0VG90YWxMZW5ndGgoKSlcblxuICBjb25zdCBlbmNvZGVkVGV4dCA9IGVuY29kZVVSSUNvbXBvbmVudChcbiAgICBbXG4gICAgICAnSSBwbGF5ZWQgXCJJIFJlYWxseSBNb3ZlIE9uXCIuJyxcbiAgICAgIGBJIHRyaWVkICR7Y3VycmVudExldmVsfSAke2F0dGVtcHRzfSB0aW1lJHtwbHVyYWx9IWAsXG4gICAgICBgTXkgc2NvcmUgd2FzICR7c2NvcmV9LmAsXG4gICAgICAnQ2FuIHlvdSBiZWF0IG1lPycsXG4gICAgICAnJyAgLy8gVG8gcHVzaCBoYXNodGFnIGFuZCB2aWEgdG8gbmV3IGxpbmVcbiAgICBdLmpvaW4oJ1xcbicpXG4gIClcblxuICBjb25zdCB7IGhvc3RuYW1lLCBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IGxvY2F0aW9uXG4gIGNvbnN0IGVuY29kZWRVcmwgPSBlbmNvZGVVUklDb21wb25lbnQoYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cGF0aG5hbWV9YClcblxuICBjb25zdCBocmVmID0gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke2VuY29kZWRVcmx9Jmhhc2h0YWdzPWdhbWVkZXZqcyZ2aWE9QW5kcmVKYWVuaXNjaCZ0ZXh0PSR7ZW5jb2RlZFRleHR9YFxuICBzaGFyZU1lLmhyZWYgPSBocmVmXG59XG4iXSwKICAibWFwcGluZ3MiOiAiTUFBZSxXQUFjLEVBQUssRUFBVSxHQUFJLEVBQVEsR0FBSSxDQUMxRCxHQUFNLEdBQUssNkJBQ0wsRUFBVSxTQUFTLGdCQUFnQixFQUFJLEdBRTdDLEVBQVEsUUFBUSxBQUFDLEdBQVEsQ0FDdkIsRUFBUSxVQUFVLElBQUksS0FHeEIsT0FBUyxDQUFDLEVBQUssSUFBVSxRQUFPLFFBQVEsR0FDdEMsRUFBUSxhQUFhLEVBQUssR0FHNUIsTUFBTyxHQ1ZNLFdBQWtCLEVBQU0sRUFBUSxDQUM3QyxHQUFNLENBQUUsRUFBTyxHQUFRLEVBQ2pCLEVBQUksSUFBSSxFQUFPLE1BQU8sRUFBTyxPQUFRLEVBQUssTUFBTyxFQUFLLEtBR3RELEVBQU8sRUFBSSxPQUFRLENBQUUsT0FBUyxDQUFFLElBQUcsS0FGNUIsT0FFa0MsT0FEaEMsUUFDd0Ms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
