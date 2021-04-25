(()=>{function f(t,e=[],n={}){let o="http://www.w3.org/2000/svg",r=document.createElementNS(o,t);e.forEach(s=>{r.classList.add(s)});for(let[s,c]of Object.entries(n))r.setAttribute(s,c);return r}function x(t,e){let[n,o]=e,r=`M${n[0]},${n[1]} L${o[0]},${o[1]}`,i=f("path",["end"],{d:r,fill:"none",stroke:"black","stroke-width":1});t.appendChild(i)}function y(t,e){let n=`M${e[0][0]},${e[0][1]}`+e.slice(1).map(c=>`L${c[0]},${c[1]}`).join(" "),s=f("path",["level"],{d:n,fill:"white",stroke:"black","stroke-width":1});t.appendChild(s)}function p({intercept:t,slope:e}){return function(n){return e*n+t}}function h(t,e){let n=t.slope,o=e.slope;return n===o?B():Number.isFinite(n)&&Number.isFinite(o)?A(t,e):!Number.isFinite(n)&&o===0||!Number.isFinite(o)&&n===0?T(t,e):j(t,e)}function B(){return null}function A(t,e){let n=t.slope,o=t.intercept,r=e.slope,s=e.intercept,c=1/(n-r);return[c*(s-o),c*(n*s-o*r)]}function j(t,e){let n=t.slope,o=t.intercept,r=e.slope,s=e.intercept;if(!Number.isFinite(n)){let u=p({slope:r,intercept:s})(t.x);return[(u-s)/r,u]}let i=p({slope:n,intercept:o})(e.x);return[(i-o)/n,i]}function T(t,e){let n=t.slope,o=t.intercept,r=e.slope,s=e.intercept;return!Number.isFinite(r)&&n===0?[e.x,o]:!Number.isFinite(n)&&r===0?[t.x,s]:null}function I(t,e){let[n,o]=t,[r,s]=e;return n===r?s<o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY:(o*r-s*n)/(r-n)}function w(t,e){let[n,o]=t,[r,s]=e;return n===r?s<o?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY:o===s?0:(s-o)/(r-n)}function m(t,e){let n=w(t,e),o=I(t,e);return Number.isFinite(n)?{intercept:o,slope:n}:{intercept:o,slope:n,x:t[0]}}function E(t,e){let n=h(t,e);return n===null?null:e.slope===0?O(t,e,n):Number.isFinite(e.slope)?P(t,e,n):k(t,e,n)}function O(t,e,n){if(!Number.isFinite(t.slope))return k(t,e,n);let o=p({...t}),[r,s]=n,c=-1/t.slope,i=s-c*r,a=c*(r+1)+i;return m([...n],[r+1,a])}function k(t,e,n){let[o,r]=n,s=-1*t.slope;return{intercept:r-s*o,slope:s,x:t.x}}function P(t,e,n){let o=p({...e}),r=n[0],s=o(r),c=o(r+1);return m([r,s],[r-c,s+1])}function L(t,e,n,o){let r=q(n,o,e),s=`M${r[0][0]},${r[0][1]}`+r.slice(1).map(u=>`L${u[0]},${u[1]}`).join(" "),a=f("path",["light"],{d:s,fill:"none",stroke:"orange","stroke-width":1}),l=a.getTotalLength();a.style.strokeDasharray=`${l} ${l}`,a.style.strokeDashoffset=l,a.getBoundingClientRect(),a.style.transition="stroke-dashoffset 1s linear",t.appendChild(a),setTimeout(()=>a.style.strokeDashoffset="0",500)}function q(t,e,n){let o=[t],r=v(t),s=v(t.map((l,u)=>l+e[u])),c=W(n),i=M(r,s,c),a=10;for(;a--;){o.push(R(i.crosspoint));let l=Y(r,i);r=l.from,s=l.to,i=M(r,s,c)}return o}function M(t,e,n){let o=m(t,e),s=n.map((c,i)=>{let a=h({intercept:c.intercept,slope:c.slope,x:c.x},o);return{...c,crosspoint:a,distance:F(a,t),index:i}}).map(c=>{let{crosspoint:i,start:a,end:l}=c,u={x:null,y:null};return i!==null&&(u={x:C(i[0],a[0],l[0]),y:C(i[1],a[1],l[1])}),{...c,within:u}}).filter(c=>c.within.x&&c.within.y);return s.length===0?D():s.filter(c=>c.distance>0).reduce((c,i)=>c.distance<i.distance?c:i)}function v(t){let[e,n]=t;return[e,100-n]}function R(t){let[e,n]=t;return[e,100-n]}function W(t){let e=[];for(let n=0;n<t.length-1;n++){let o=v(t[n]),r=v(t[n+1]),s=m(o,r);e.push({start:o,end:r,length:F(o,r),...s})}return e}function Y(t,e){let n=m(t,e.crosspoint),o=E(n,{intercept:e.intercept,slope:e.slope,x:e.x}),r=p({...o}),s=e.crosspoint[0],c=r(s+1);return{from:e.crosspoint,to:[s+1,c]}}function F(t,e){if(!t||!e)return null;let[n,o]=t,[r,s]=e;return Math.round(Math.sqrt(Math.pow(Math.abs(r-n),2)+Math.pow(Math.abs(s-o),2)))}function C(t,e,n){let o=0,r=e<n?Math.round(t)-e>=o:Math.round(t)-n>=o,s=n>e?n-Math.round(t)>=o:e-Math.round(t)>=o;return r&&s}function D(){alert("You lost")}function $(t,e){let n=`M${e[0]},${e[1]} l3,5 h-6Z`,s=f("path",["start"],{d:n,fill:"orange",stroke:"orange","stroke-width":1});t.appendChild(s)}var d=[{name:"Level I",start:[50,91],end:[[45,11],[55,11]],shape:[[49,90],[40,90],[40,10],[60,10],[60,90],[51,90]]},{name:"Level O",start:[45,91],end:[[52,89],[58,89]],shape:[[44,90],[40,90],[35,88],[30,85],[25,80],[20,70],[15,60],[15,40],[20,30],[25,20],[30,15],[35,12],[40,10],[60,10],[65,12],[70,15],[75,20],[80,30],[85,40],[85,60],[80,70],[75,80],[70,85],[60,90],[51,90],[51,70],[60,70],[70,60],[70,40],[60,30],[40,30],[30,40],[30,60],[40,70],[49,70],[49,90],[46,90]]},{name:"Level M",start:[15,91],end:[[82,89],[88,89]],shape:[[14,90],[10,90],[10,20],[20,10],[30,10],[45,70],[55,70],[70,10],[80,10],[90,20],[90,90],[80,90],[80,24],[60,90],[40,90],[20,24],[20,90],[16,90]]},{name:"Level R",start:[15,91],end:[[82,89],[88,89]],shape:[[14,90],[10,90],[30,40],[25,38],[20,35],[15,30],[15,20],[20,15],[25,12],[30,10],[49,10],[50,12],[51,10],[70,10],[75,12],[80,15],[85,20],[85,30],[80,35],[75,38],[70,40],[90,90],[80,90],[60,40],[60,90],[51,90],[51,30],[70,30],[75,25],[70,20],[30,20],[25,25],[30,30],[49,30],[49,90],[40,90],[40,40],[20,90],[16,90]]}];var g=0;V(d.map(t=>t.name));z();S(d[g].name);function V(t){let e=document.getElementById("levels");t.forEach(n=>{let o=document.createElement("li");o.textContent=n,e.appendChild(o)})}function z(){let t=document.getElementById("angle"),e=document.getElementById("form"),n=document.getElementById("levels");t.addEventListener("change",o=>_(o)),e.addEventListener("submit",o=>X(o)),n.addEventListener("click",o=>G(o))}function _(t){let e=document.querySelector(".start");if(e===null)return;let n=t.target,o=parseInt(n.value,10),{start:r}=d[g],[s,c]=r;e.setAttribute("transform",`rotate(${o}, ${s}, ${c})`),N(),b()}function G(t){let{currentTarget:e,target:n}=t;n.nodeName.toLowerCase()==="li"&&(g=Array.from(e.children).findIndex(o=>o===n),S(n.textContent))}function X(t){t.preventDefault();let e=document.getElementById("root");N();let{shape:n,start:o}=d[g];L(e,n,o,Z()),J(),b()}function S(t){let e=document.getElementById("root"),n=d.find(o=>o.name===t);H(),y(e,n.shape),$(e,n.start),x(e,n.end),b()}function K(){let t=document.getElementById("angle");t.value=0}function Q(){let t=document.getElementById("attempt");t.value=0}function H(){K(),Q(),tt(),et(),nt(),N()}function tt(){let t=document.querySelector(".level");t&&t.remove()}function et(){let t=document.querySelector(".start");t&&t.remove()}function nt(){let t=document.querySelector(".end");t&&t.remove()}function N(){let t=document.querySelector(".light");t&&t.remove()}function Z(){let t=document.getElementById("angle"),e=ot(parseInt(t.value,10)-90);return rt({r:1,degree:e})}function ot(t){return t*Math.PI/180}function rt(t){let{r:e,degree:n}=t,o=parseFloat((Math.cos(n)/e).toFixed(2)),r=parseFloat((Math.sin(n)/e).toFixed(2));return[o,r]}function b(){let t=document.getElementById("root"),e=document.querySelector('link[rel="icon"]'),o=new XMLSerializer().serializeToString(t).replace(/ id="\w+"/g,"").replace(/ style=".*"/g,"").replace(/ class="\w+"/g,"");e.href="data:image/svg+xml;utf8,"+o}function J(){let t=document.getElementById("share-me"),e=document.getElementById("attempt"),n=parseInt(e.value,10)!==1?"":"s",o=`${e.value} attempt${n}`,r=g+1,s=encodeURIComponent(['I played "I Really Move On".',`I completed level ${r} after ${o}!`,"What is your highscore?",""].join(`
`)),{hostname:c,pathname:i,protocol:a}=location,u=`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${a}//${c}${i}`)}&hashtags=gamedevjs&via=AndreJaenisch&text=${s}`;t.href=u}})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpZXcvc3ZnLmpzIiwgIi4uL2NsaWVudC92aWV3L2RyYXctZW5kLmpzIiwgIi4uL2NsaWVudC92aWV3L2RyYXctbGV2ZWwuanMiLCAiLi4vY2xpZW50L21hdGhzL2V2YWx1YXRlLmpzIiwgIi4uL2NsaWVudC9tYXRocy9jcm9zc3BvaW50LmpzIiwgIi4uL2NsaWVudC9tYXRocy9pbnRlcmNlcHQuanMiLCAiLi4vY2xpZW50L21hdGhzL3Nsb3BlLmpzIiwgIi4uL2NsaWVudC9tYXRocy9saW5lLmpzIiwgIi4uL2NsaWVudC9tYXRocy9yZWZsZWN0LmpzIiwgIi4uL2NsaWVudC92aWV3L2RyYXctbGlnaHQuanMiLCAiLi4vY2xpZW50L3ZpZXcvZHJhdy1zdGFydC5qcyIsICIuLi9jbGllbnQvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN2ZyAodGFnLCBjbGFzc2VzID0gW10sIGF0dHJzID0ge30pIHtcbiAgY29uc3QgbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIHRhZylcblxuICBjbGFzc2VzLmZvckVhY2goKGNscykgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMpXG4gIH0pXG5cbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzKSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gIH1cblxuICByZXR1cm4gZWxlbWVudFxufVxuXG4iLCAiaW1wb3J0IHN2ZyBmcm9tICcuL3N2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd0VuZCAocm9vdCwgY29vcmRzKSB7XG4gIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gY29vcmRzXG4gIGNvbnN0IGQgPSBgTSR7c3RhcnRbIDAgXX0sJHtzdGFydFsgMSBdfSBMJHtlbmRbIDAgXX0sJHtlbmRbIDEgXX1gXG4gIGNvbnN0IGZpbGwgPSAnbm9uZSdcbiAgY29uc3Qgc3Ryb2tlID0gJ2JsYWNrJ1xuICBjb25zdCBwYXRoID0gc3ZnKCdwYXRoJywgWyAnZW5kJyBdLCB7IGQsIGZpbGwsIHN0cm9rZSwgJ3N0cm9rZS13aWR0aCc6IDEgfSlcbiAgcm9vdC5hcHBlbmRDaGlsZChwYXRoKVxufVxuXG4iLCAiaW1wb3J0IHN2ZyBmcm9tICcuL3N2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd0xldmVsIChyb290LCBwb2ludHMpIHtcbiAgY29uc3QgZCA9IGBNJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWAgKyBwb2ludHNcbiAgICAuc2xpY2UoMSlcbiAgICAubWFwKChwYWlyKSA9PiBgTCR7cGFpclswXX0sJHtwYWlyWzFdfWApXG4gICAgLmpvaW4oJyAnKVxuICBjb25zdCBmaWxsID0gJ3doaXRlJ1xuICBjb25zdCBzdHJva2UgPSAnYmxhY2snXG4gIGNvbnN0IHBhdGggPSBzdmcoJ3BhdGgnLCBbICdsZXZlbCcgXSwgeyBkLCBmaWxsLCBzdHJva2UsICdzdHJva2Utd2lkdGgnOiAxIH0pXG4gIHJvb3QuYXBwZW5kQ2hpbGQocGF0aClcbn1cblxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2YWx1YXRlICh7IGludGVyY2VwdCwgc2xvcGUgfSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gc2xvcGUgKiB4ICsgaW50ZXJjZXB0XG4gIH1cbn1cblxuIiwgImltcG9ydCBldmFsdWF0ZSBmcm9tICcuL2V2YWx1YXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcm9zc3BvaW50IChsaW5lMCwgbGluZTEpIHtcbiAgY29uc3Qgc2xvcGUwID0gbGluZTAuc2xvcGVcbiAgY29uc3Qgc2xvcGUxID0gbGluZTEuc2xvcGVcblxuICBpZiAoc2xvcGUwID09PSBzbG9wZTEpIHtcbiAgICByZXR1cm4gY3Jvc3Nwb2ludFdoZW5QYXJhbGxlbHMoKVxuICB9XG5cbiAgaWYgKE51bWJlci5pc0Zpbml0ZShzbG9wZTApICYmIE51bWJlci5pc0Zpbml0ZShzbG9wZTEpKSB7XG4gICAgcmV0dXJuIGNyb3NzcG9pbnRXaGVuQm90aEFyZUZpbml0ZShsaW5lMCwgbGluZTEpXG4gIH1cblxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShzbG9wZTApICYmIHNsb3BlMSA9PT0gMCkge1xuICAgIHJldHVybiBjcm9zc3BvaW50V2hlbk9uZUlzSW5maW5pdGVUaGVPdGhlclplcm8obGluZTAsIGxpbmUxKVxuICB9XG5cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2xvcGUxKSAmJiBzbG9wZTAgPT09IDApIHtcbiAgICByZXR1cm4gY3Jvc3Nwb2ludFdoZW5PbmVJc0luZmluaXRlVGhlT3RoZXJaZXJvKGxpbmUwLCBsaW5lMSlcbiAgfVxuXG4gIHJldHVybiBjcm9zc3BvaW50V2hlbk9uZUlzSW5maW5pdGUobGluZTAsIGxpbmUxKVxufVxuXG5mdW5jdGlvbiBjcm9zc3BvaW50V2hlblBhcmFsbGVscyAoKSB7XG4gIC8vIExpbmVzIGFyZSBwYXJhbGxlbCwgaS5lLiB3aWxsIG5ldmVyIGludGVyc2VjdFxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBjcm9zc3BvaW50V2hlbkJvdGhBcmVGaW5pdGUgKGxpbmUwLCBsaW5lMSkge1xuICBjb25zdCBzbG9wZTAgPSBsaW5lMC5zbG9wZVxuICBjb25zdCBpbnRlcmNlcHQwID0gbGluZTAuaW50ZXJjZXB0XG5cbiAgY29uc3Qgc2xvcGUxID0gbGluZTEuc2xvcGVcbiAgY29uc3QgaW50ZXJjZXB0MSA9IGxpbmUxLmludGVyY2VwdFxuXG4gIGNvbnN0IGZhY3RvciA9IDEgLyAoc2xvcGUwIC0gc2xvcGUxKVxuXG4gIHJldHVybiBbXG4gICAgZmFjdG9yICogKGludGVyY2VwdDEgLSBpbnRlcmNlcHQwKSxcbiAgICBmYWN0b3IgKiAoc2xvcGUwICogaW50ZXJjZXB0MSAtIGludGVyY2VwdDAgKiBzbG9wZTEpLFxuICBdXG59XG5cbmZ1bmN0aW9uIGNyb3NzcG9pbnRXaGVuT25lSXNJbmZpbml0ZSAobGluZTAsIGxpbmUxKSB7XG4gIGNvbnN0IHNsb3BlMCA9IGxpbmUwLnNsb3BlXG4gIGNvbnN0IGludGVyY2VwdDAgPSBsaW5lMC5pbnRlcmNlcHRcblxuICBjb25zdCBzbG9wZTEgPSBsaW5lMS5zbG9wZVxuICBjb25zdCBpbnRlcmNlcHQxID0gbGluZTEuaW50ZXJjZXB0XG5cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2xvcGUwKSkge1xuICAgIGNvbnN0IGZ1bmMgPSBldmFsdWF0ZSh7IHNsb3BlOiBzbG9wZTEsIGludGVyY2VwdDogaW50ZXJjZXB0MSB9KVxuICAgIGNvbnN0IHkgPSBmdW5jKGxpbmUwLngpXG4gICAgY29uc3QgeCA9ICh5IC0gaW50ZXJjZXB0MSkgLyBzbG9wZTFcbiAgICByZXR1cm4gWyB4LCB5IF1cbiAgfVxuXG4gIGNvbnN0IGZ1bmMgPSBldmFsdWF0ZSh7IHNsb3BlOiBzbG9wZTAsIGludGVyY2VwdDogaW50ZXJjZXB0MCB9KVxuICBjb25zdCB5ID0gZnVuYyhsaW5lMS54KVxuICBjb25zdCB4ID0gKHkgLSBpbnRlcmNlcHQwKSAvIHNsb3BlMFxuICByZXR1cm4gWyB4LCB5IF1cbn1cblxuZnVuY3Rpb24gY3Jvc3Nwb2ludFdoZW5PbmVJc0luZmluaXRlVGhlT3RoZXJaZXJvIChsaW5lMCwgbGluZTEpIHtcbiAgY29uc3Qgc2xvcGUwID0gbGluZTAuc2xvcGVcbiAgY29uc3QgaW50ZXJjZXB0MCA9IGxpbmUwLmludGVyY2VwdFxuXG4gIGNvbnN0IHNsb3BlMSA9IGxpbmUxLnNsb3BlXG4gIGNvbnN0IGludGVyY2VwdDEgPSBsaW5lMS5pbnRlcmNlcHRcblxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShzbG9wZTEpKSB7XG4gICAgaWYgKHNsb3BlMCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFsgbGluZTEueCwgaW50ZXJjZXB0MCBdXG4gICAgfVxuICB9XG5cbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2xvcGUwKSkge1xuICAgIGlmIChzbG9wZTEgPT09IDApIHtcbiAgICAgIHJldHVybiBbIGxpbmUwLngsIGludGVyY2VwdDEgXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVJbnRlcmNlcHQgKHBvaW50MCwgcG9pbnQxKSB7XG4gIGNvbnN0IFt4MCwgeTBdID0gcG9pbnQwXG4gIGNvbnN0IFt4MSwgeTFdID0gcG9pbnQxXG5cbiAgaWYgKHgwID09PSB4MSkge1xuICAgIGlmICh5MSA8IHkwKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgfVxuXG4gIHJldHVybiAoeTAgKiB4MSAtIHkxICogeDApIC8gKHgxIC0geDApXG59XG5cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU2xvcGUgKHBvaW50MCwgcG9pbnQxKSB7XG4gIGNvbnN0IFt4MCwgeTBdID0gcG9pbnQwXG4gIGNvbnN0IFt4MSwgeTFdID0gcG9pbnQxXG5cbiAgaWYgKHgwID09PSB4MSkge1xuICAgIGlmICh5MSA8IHkwKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgfVxuXG4gIGlmICh5MCA9PT0geTEpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcmV0dXJuICh5MSAtIHkwKSAvICh4MSAtIHgwKVxufVxuXG4iLCAiaW1wb3J0IGNvbXB1dGVJbnRlcmNlcHQgZnJvbSAnLi9pbnRlcmNlcHQuanMnXG5pbXBvcnQgY29tcHV0ZVNsb3BlIGZyb20gJy4vc2xvcGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVMaW5lVmFyaWFibGVzIChwb2ludDAsIHBvaW50MSkge1xuICBjb25zdCBzbG9wZSA9IGNvbXB1dGVTbG9wZShwb2ludDAsIHBvaW50MSlcbiAgY29uc3QgaW50ZXJjZXB0ID0gY29tcHV0ZUludGVyY2VwdChwb2ludDAsIHBvaW50MSlcblxuICBpZiAoTnVtYmVyLmlzRmluaXRlKHNsb3BlKSkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnRlcmNlcHQsXG4gICAgICBzbG9wZSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGludGVyY2VwdCxcbiAgICBzbG9wZSxcbiAgICB4OiBwb2ludDBbIDAgXVxuICB9XG59XG5cbiIsICJpbXBvcnQgY3Jvc3Nwb2ludCBmcm9tICcuL2Nyb3NzcG9pbnQuanMnXG5pbXBvcnQgZXZhbHVhdGUgZnJvbSAnLi9ldmFsdWF0ZS5qcydcbmltcG9ydCBsaW5lIGZyb20gJy4vbGluZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVmbGVjdCAobGluZTAsIGxpbmUxKSB7XG4gIGNvbnN0IHBvaW50ID0gY3Jvc3Nwb2ludChsaW5lMCwgbGluZTEpXG5cbiAgaWYgKHBvaW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChsaW5lMS5zbG9wZSA9PT0gMCkge1xuICAgIHJldHVybiByZWZsZWN0T25QYXJhbGxlbFRvWEF4aXMobGluZTAsIGxpbmUxLCBwb2ludClcbiAgfVxuXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKGxpbmUxLnNsb3BlKSkge1xuICAgIHJldHVybiByZWZsZWN0T25QYXJhbGxlbFRvWUF4aXMobGluZTAsIGxpbmUxLCBwb2ludClcbiAgfVxuXG4gIHJldHVybiByZWZsZWN0T25EaWFnb25hbHMobGluZTAsIGxpbmUxLCBwb2ludClcbn1cblxuZnVuY3Rpb24gcmVmbGVjdE9uUGFyYWxsZWxUb1hBeGlzIChsaW5lMCwgbGluZTEsIHBvaW50KSB7XG4gIC8qXG4gICAqIEdlb21ldHJpYyBtb3RpdmF0aW9uXG4gICAqIE9uIGEgbGluZSBwYXJhbGxlbCB0byB0aGUgeCBheGlzLCB0aGUgcmVmbGVjdGVkIGxpbmUgc2ltcGx5IHN3aXRjaGVzIGl0c1xuICAgKiBzaWdudW0gYW5kIGlzIGludmVydGVkXG4gICAqL1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShsaW5lMC5zbG9wZSkpIHtcbiAgICByZXR1cm4gcmVmbGVjdE9uUGFyYWxsZWxUb1lBeGlzKGxpbmUwLCBsaW5lMSwgcG9pbnQpXG4gIH1cblxuICBjb25zdCBmdW5jID0gZXZhbHVhdGUoeyAuLi5saW5lMCB9KVxuICBjb25zdCBbIHgsIHkgXSA9IHBvaW50XG4gIGNvbnN0IHNsb3BlID0gLTEgLyBsaW5lMC5zbG9wZVxuICBjb25zdCBpbnRlcmNlcHQgPSB5IC0gc2xvcGUgKiB4XG4gIGNvbnN0IHkxID0gc2xvcGUgKiAoeCArIDEpICsgaW50ZXJjZXB0XG5cbiAgcmV0dXJuIGxpbmUoWyAuLi5wb2ludCBdLCBbIHggKyAxLCB5MSBdKVxufVxuXG5mdW5jdGlvbiByZWZsZWN0T25QYXJhbGxlbFRvWUF4aXMgKGxpbmUwLCBsaW5lMSwgcG9pbnQpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSBwb2ludFxuICBjb25zdCBzbG9wZSA9IC0xICogbGluZTAuc2xvcGVcbiAgY29uc3QgaW50ZXJjZXB0ID0geSAtIHNsb3BlICogeFxuXG4gIHJldHVybiB7IGludGVyY2VwdCwgc2xvcGUsIHg6IGxpbmUwLnggfVxufVxuXG5mdW5jdGlvbiByZWZsZWN0T25EaWFnb25hbHMgKGxpbmUwLCBsaW5lMSwgcG9pbnQpIHtcbiAgLyogR2VvbWV0cmljIG1vdGl2YXRpb246XG4gICAqIElmIEkgZ28gb25lIHVuaXQgaW4gdGhlIHggZGlyZWN0aW9uIGFuZCBsb29rIGF0IHRoZSBkaWZmZXJlbmNlIGluIHlcbiAgICogSSBoYXZlIHRvIGdvIHRoZSBzYW1lIGRpc3RhbmNlIGluIG5lZ2F0aXZlIGRpcmVjdGlvbiBhbG9uZyB0aGUgeCBheGlzIHRvXG4gICAqIGdldCB0aGUgZGVsdGEgaW4geSBmb3Igb25lIHVuaXQuXG4gICAqIFRoZXNlIHdpbGwgZ2l2ZSBtZSB0aGUgc2Vjb25kIHBvaW50IHRvIGZvcm0gYSBsaW5lIHdpdGggdGhlIGNyb3NzIHBvaW50LlxuICAgKi9cbiAgY29uc3QgZnVuYyA9IGV2YWx1YXRlKHsgLi4ubGluZTEgfSlcbiAgY29uc3QgeCA9IHBvaW50WyAwIF1cbiAgY29uc3QgeSA9IGZ1bmMoeClcbiAgY29uc3QgeTEgPSBmdW5jKHggKyAxKVxuXG4gIHJldHVybiBsaW5lKFsgeCwgeSBdLCBbIHggLSB5MSwgeSArIDEgXSlcbn1cblxuIiwgImltcG9ydCBjcm9zc3BvaW50IGZyb20gJy4uL21hdGhzL2Nyb3NzcG9pbnQnXG5pbXBvcnQgZXZhbHVhdGUgZnJvbSAnLi4vbWF0aHMvZXZhbHVhdGUnXG5pbXBvcnQgbGluZSBmcm9tICcuLi9tYXRocy9saW5lJ1xuaW1wb3J0IHJlZmxlY3QgZnJvbSAnLi4vbWF0aHMvcmVmbGVjdCdcbmltcG9ydCBzdmcgZnJvbSAnLi9zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdMaWdodCAocm9vdCwgbGV2ZWxQb2ludHMsIHN0YXJ0LCBkaXJlY3Rpb24pIHtcbiAgY29uc3QgcG9pbnRzID0gY29tcHV0ZVBvaW50cyhzdGFydCwgZGlyZWN0aW9uLCBsZXZlbFBvaW50cylcbiAgY29uc3QgZCA9IGBNJHtwb2ludHNbMF1bMF19LCR7cG9pbnRzWzBdWzFdfWAgKyBwb2ludHNcbiAgICAuc2xpY2UoMSlcbiAgICAubWFwKChwYWlyKSA9PiBgTCR7cGFpclswXX0sJHtwYWlyWzFdfWApXG4gICAgLmpvaW4oJyAnKVxuICBjb25zdCBmaWxsID0gJ25vbmUnXG4gIGNvbnN0IHN0cm9rZSA9ICdvcmFuZ2UnXG4gIGNvbnN0IHBhdGggPSBzdmcoJ3BhdGgnLCBbICdsaWdodCcgXSwgeyBkLCBmaWxsLCBzdHJva2UsICdzdHJva2Utd2lkdGgnOiAxIH0pXG4gIC8vIGMuZi4gaHR0cHM6Ly9qYWtlYXJjaGliYWxkLmNvbS8yMDEzL2FuaW1hdGVkLWxpbmUtZHJhd2luZy1zdmcvI2FuaW1hdGluZy1pdFxuICBjb25zdCBsZW5ndGggPSBwYXRoLmdldFRvdGFsTGVuZ3RoKClcbiAgcGF0aC5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBgJHtsZW5ndGh9ICR7bGVuZ3RofWBcbiAgcGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gbGVuZ3RoXG4gIHBhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcGF0aC5zdHlsZS50cmFuc2l0aW9uID0gJ3N0cm9rZS1kYXNob2Zmc2V0IDFzIGxpbmVhcidcbiAgcm9vdC5hcHBlbmRDaGlsZChwYXRoKVxuICBzZXRUaW1lb3V0KCgpID0+IHBhdGguc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9ICcwJywgNTAwKVxufVxuXG5mdW5jdGlvbiBjb21wdXRlUG9pbnRzIChzdGFydCwgZGlyZWN0aW9uLCBsZXZlbFBvaW50cykge1xuICBjb25zdCBzdmdQb2ludHMgPSBbIHN0YXJ0IF1cbiAgbGV0IGZyb20gPSBzdmdDb29yZFRvQ2FydGVzaWFuQ29vcmQoc3RhcnQpXG4gIGxldCB0byA9IHN2Z0Nvb3JkVG9DYXJ0ZXNpYW5Db29yZChcbiAgICBzdGFydC5tYXAoKHBvaW50LCBpbmRleCkgPT4gcG9pbnQgKyBkaXJlY3Rpb25bIGluZGV4IF0pXG4gIClcblxuICBjb25zdCBwb2ludHMgPSBwYXJzZUxldmVsUG9pbnRzKGxldmVsUG9pbnRzKVxuICBsZXQgcG9pbnQgPSBjb21wdXRlUG9pbnQoZnJvbSwgdG8sIHBvaW50cylcbiAgbGV0IGNvdW50ZXIgPSAxMFxuICB3aGlsZSAoY291bnRlci0tKSB7XG4gICAgc3ZnUG9pbnRzLnB1c2goY2FydGVzaWFuQ29vcmRUb1N2Z0Nvb3JkKHBvaW50LmNyb3NzcG9pbnQpKVxuICAgIGNvbnN0IG5leHRQb2ludCA9IGNvbXB1dGVOZXh0UG9pbnQoZnJvbSwgcG9pbnQpXG4gICAgZnJvbSA9IG5leHRQb2ludC5mcm9tXG4gICAgdG8gPSBuZXh0UG9pbnQudG9cbiAgICBwb2ludCA9IGNvbXB1dGVQb2ludChmcm9tLCB0bywgcG9pbnRzKVxuICB9XG4gIHJldHVybiBzdmdQb2ludHNcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVBvaW50IChmcm9tLCB0bywgbGV2ZWxQb2ludHMpIHtcbiAgY29uc3QgbGlnaHQgPSBsaW5lKGZyb20sIHRvKVxuXG4gIGNvbnN0IGRpc3RhbmNlcyA9IGxldmVsUG9pbnRzXG4gICAgLm1hcCgocHQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjcnB0ID0gY3Jvc3Nwb2ludChcbiAgICAgICAgeyBpbnRlcmNlcHQ6IHB0LmludGVyY2VwdCwgc2xvcGU6IHB0LnNsb3BlLCB4OiBwdC54IH0sXG4gICAgICAgIGxpZ2h0XG4gICAgICApXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnB0LFxuICAgICAgICBjcm9zc3BvaW50OiBjcnB0LFxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2UoY3JwdCwgZnJvbSksXG4gICAgICAgIGluZGV4LFxuICAgICAgfVxuICAgIH0pXG4gICAgLm1hcCgocHQpID0+IHtcbiAgICAgIGNvbnN0IHsgY3Jvc3Nwb2ludCwgc3RhcnQsIGVuZCB9ID0gcHRcbiAgICAgIGxldCB3aXRoaW4gPSB7IHg6IG51bGwsIHk6IG51bGwgfVxuXG4gICAgICBpZiAoY3Jvc3Nwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICB3aXRoaW4gPSB7XG4gICAgICAgICAgeDogaXNXaXRoaW5Cb3VuZHMoY3Jvc3Nwb2ludFsgMCBdLCBzdGFydFsgMCBdLCBlbmRbIDAgXSksXG4gICAgICAgICAgeTogaXNXaXRoaW5Cb3VuZHMoY3Jvc3Nwb2ludFsgMSBdLCBzdGFydFsgMSBdLCBlbmRbIDEgXSksXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHQsXG4gICAgICAgIHdpdGhpbixcbiAgICAgIH1cbiAgICB9KVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBkaXN0YW5jZXMuZmlsdGVyKChwdCkgPT4gcHQud2l0aGluLnggJiYgcHQud2l0aGluLnkpXG5cbiAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGdhbWVvdmVyKClcbiAgfVxuXG4gIHJldHVybiBjYW5kaWRhdGVzXG4gICAgLmZpbHRlcigocHQpID0+IHB0LmRpc3RhbmNlID4gMClcbiAgICAucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzLmRpc3RhbmNlIDwgY3VycmVudC5kaXN0YW5jZVxuICAgICAgICA/IHByZXZpb3VzXG4gICAgICAgIDogY3VycmVudFxuICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gc3ZnQ29vcmRUb0NhcnRlc2lhbkNvb3JkIChwb2ludCkge1xuICAvLyBBc3N1bWUgYSB2aWV3Qm94IG9mIFwiMCAwIDEwMCAxMDBcIiBoZXJlXG4gIGNvbnN0IFsgeCwgeSBdID0gcG9pbnRcbiAgcmV0dXJuIFsgeCwgMTAwIC0geSBdXG59XG5cbmZ1bmN0aW9uIGNhcnRlc2lhbkNvb3JkVG9TdmdDb29yZCAocG9pbnQpIHtcbiAgLy8gQXNzdW1lIGEgdmlld0JveCBvZiBcIjAgMCAxMDAgMTAwXCIgaGVyZVxuICBjb25zdCBbIHgsIHkgXSA9IHBvaW50XG4gIHJldHVybiBbIHgsIDEwMCAtIHkgXVxufVxuXG5mdW5jdGlvbiBwYXJzZUxldmVsUG9pbnRzIChsZXZlbFBvaW50cykge1xuICBjb25zdCBwb2ludHMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsUG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdmdDb29yZFRvQ2FydGVzaWFuQ29vcmQobGV2ZWxQb2ludHNbIGkgXSlcbiAgICBjb25zdCBuZXh0ID0gc3ZnQ29vcmRUb0NhcnRlc2lhbkNvb3JkKGxldmVsUG9pbnRzWyBpICsgMSBdKVxuICAgIGNvbnN0IGxldmVsID0gbGluZShjdXJyZW50LCBuZXh0KVxuXG4gICAgcG9pbnRzLnB1c2goe1xuICAgICAgc3RhcnQ6IGN1cnJlbnQsXG4gICAgICBlbmQ6IG5leHQsXG4gICAgICBsZW5ndGg6IGRpc3RhbmNlKGN1cnJlbnQsIG5leHQpLFxuICAgICAgLi4ubGV2ZWxcbiAgICB9KVxuICB9XG4gIHJldHVybiBwb2ludHNcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU5leHRQb2ludCAob2xkUG9pbnQsIHBvaW50KSB7XG4gIGNvbnN0IGJlZm9yZSA9IGxpbmUob2xkUG9pbnQsIHBvaW50LmNyb3NzcG9pbnQpXG4gIGNvbnN0IGFmdGVyID0gcmVmbGVjdChcbiAgICBiZWZvcmUsXG4gICAgeyBpbnRlcmNlcHQ6IHBvaW50LmludGVyY2VwdCwgc2xvcGU6IHBvaW50LnNsb3BlLCB4OiBwb2ludC54IH1cbiAgKVxuXG4gIGNvbnN0IGZ1bmMgPSBldmFsdWF0ZSh7IC4uLmFmdGVyIH0pXG4gIGNvbnN0IHggPSBwb2ludC5jcm9zc3BvaW50WyAwIF1cbiAgY29uc3QgeSA9IGZ1bmMoeCArIDEpXG5cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBwb2ludC5jcm9zc3BvaW50LFxuICAgIHRvOiBbIHggKyAxLCB5IF0sXG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzdGFuY2UgKHBvaW50MCwgcG9pbnQxKSB7XG4gIGlmICghcG9pbnQwIHx8ICFwb2ludDEpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgWyB4MCwgeTAgXSA9IHBvaW50MFxuICBjb25zdCBbIHgxLCB5MSBdID0gcG9pbnQxXG4gIHJldHVybiBNYXRoLnJvdW5kKFxuICAgIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KE1hdGguYWJzKHgxIC0geDApLCAyKSArIE1hdGgucG93KE1hdGguYWJzKHkxIC0geTApLCAyKVxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBpc1dpdGhpbkJvdW5kcyAodmFsdWUsIGxvd2VyLCB1cHBlcikge1xuICAvLyBTaW5jZSBmbG9hdGluZyBwb2ludCBhcml0aG1ldGljIGlzIGZ1enp5LCByb3VuZCBiZWZvcmUgY29tcGFyaXNvblxuICBjb25zdCB0b2xlcmFuY2UgPSAwXG5cbiAgLyogdmFsdWUgPj0gbG93ZXIgPD0+IHZhbHVlIC0gbG93ZXIgPj0gMCAqL1xuICBjb25zdCBsYXJnZXJUaGFuTG93ZXIgPSBsb3dlciA8IHVwcGVyXG4gICAgPyBNYXRoLnJvdW5kKHZhbHVlKSAtIGxvd2VyID49IHRvbGVyYW5jZVxuICAgIDogTWF0aC5yb3VuZCh2YWx1ZSkgLSB1cHBlciA+PSB0b2xlcmFuY2VcbiAgLyogdmFsdWUgPD0gdXBwZXIgPD0+IHVwcGVyIC0gdmFsdWUgPj0gMCAqL1xuICBjb25zdCBzbWFsbGVyVGhhblVwcGVyID0gdXBwZXIgPiBsb3dlclxuICAgID8gdXBwZXIgLSBNYXRoLnJvdW5kKHZhbHVlKSA+PSB0b2xlcmFuY2VcbiAgICA6IGxvd2VyIC0gTWF0aC5yb3VuZCh2YWx1ZSkgPj0gdG9sZXJhbmNlXG5cbiAgcmV0dXJuIGxhcmdlclRoYW5Mb3dlciAmJiBzbWFsbGVyVGhhblVwcGVyXG59XG5cbmZ1bmN0aW9uIGdhbWVvdmVyICgpIHtcbiAgYWxlcnQoJ1lvdSBsb3N0Jylcbn1cbiIsICJpbXBvcnQgc3ZnIGZyb20gJy4vc3ZnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3U3RhcnQgKHJvb3QsIHN0YXJ0KSB7XG4gIGNvbnN0IGQgPSBgTSR7c3RhcnRbMF19LCR7c3RhcnRbMV19IGwzLDUgaC02WmBcbiAgY29uc3QgZmlsbCA9ICdvcmFuZ2UnXG4gIGNvbnN0IHN0cm9rZSA9ICdvcmFuZ2UnXG4gIGNvbnN0IHBhdGggPSBzdmcoJ3BhdGgnLCBbICdzdGFydCcgXSwgeyBkLCBmaWxsLCBzdHJva2UsICdzdHJva2Utd2lkdGgnOiAxIH0pXG4gIHJvb3QuYXBwZW5kQ2hpbGQocGF0aClcbn1cblxuIiwgImltcG9ydCBkcmF3RW5kIGZyb20gJy4vdmlldy9kcmF3LWVuZCdcbmltcG9ydCBkcmF3TGV2ZWwgZnJvbSAnLi92aWV3L2RyYXctbGV2ZWwnXG5pbXBvcnQgZHJhd0xpZ2h0IGZyb20gJy4vdmlldy9kcmF3LWxpZ2h0J1xuaW1wb3J0IGRyYXdTdGFydCBmcm9tICcuL3ZpZXcvZHJhdy1zdGFydCdcbmltcG9ydCBsZXZlbHMgZnJvbSAnLi9sZXZlbHMuanNvbidcblxuJ3VzZSBzdHJpY3QnO1xuXG5sZXQgY3VycmVudExldmVsSW5kZXggPSAwXG5cbmxpc3RMZXZlbHMobGV2ZWxzLm1hcCgobGV2ZWwpID0+IGxldmVsLm5hbWUpKVxucmVnaXN0ZXJFdmVudExpc3RlbmVycygpXG5sb2FkTGV2ZWwobGV2ZWxzWyBjdXJyZW50TGV2ZWxJbmRleCBdLm5hbWUpXG5cbi8vIFRPRE86IEFkZCBhIGdhbWUgb3ZlciBzY3JlZW5cbi8vIFRPRE86IEFkZCBhIHNoYXJlIG9uIFR3aXR0ZXIgc2NyZWVuXG5cbmZ1bmN0aW9uIGxpc3RMZXZlbHMgKG5hbWVzKSB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWxzJylcbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IG5hbWVcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMgKCkge1xuICBjb25zdCBhbmdsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmdsZScpXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpXG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWxzJylcblxuICBhbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KSlcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IG9uU3VibWl0KGV2ZW50KSlcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gb25DbGljayhldmVudCkpXG59XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlIChldmVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JylcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0XG4gIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKVxuICBjb25zdCB7IHN0YXJ0IH0gPSBsZXZlbHNbIGN1cnJlbnRMZXZlbEluZGV4IF1cbiAgY29uc3QgWyBiZWdpbiwgZW5kIF0gPSBzdGFydFxuXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7dmFsdWV9LCAke2JlZ2lufSwgJHtlbmR9KWApXG4gIGNsZWFyTGlnaHQoKVxuICB1cGRhdGVGYXZpY29uKClcbn1cblxuZnVuY3Rpb24gb25DbGljayAoZXZlbnQpIHtcbiAgY29uc3QgeyBjdXJyZW50VGFyZ2V0LCB0YXJnZXQgfSA9IGV2ZW50XG4gIGlmICh0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2xpJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgY3VycmVudExldmVsSW5kZXggPSBBcnJheVxuICAgIC5mcm9tKFxuICAgICAgY3VycmVudFRhcmdldC5jaGlsZHJlblxuICAgIClcbiAgICAuZmluZEluZGV4KChjaGlsZCkgPT4gY2hpbGQgPT09IHRhcmdldClcbiAgbG9hZExldmVsKHRhcmdldC50ZXh0Q29udGVudClcbn1cblxuZnVuY3Rpb24gb25TdWJtaXQgKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuXG4gIGNsZWFyTGlnaHQoKVxuXG4gIGNvbnN0IHsgc2hhcGUsIHN0YXJ0IH0gPSBsZXZlbHNbIGN1cnJlbnRMZXZlbEluZGV4IF1cbiAgZHJhd0xpZ2h0KHJvb3QsIHNoYXBlLCBzdGFydCwgZ2V0QW5nbGUoKSlcblxuICBzaGFyZU9uVHdpdHRlcigpXG4gIHVwZGF0ZUZhdmljb24oKVxufVxuXG5mdW5jdGlvbiBsb2FkTGV2ZWwgKGxldmVsTmFtZSkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICBjb25zdCBsZXZlbCA9IGxldmVscy5maW5kKChsZXZlbCkgPT4gbGV2ZWwubmFtZSA9PT0gbGV2ZWxOYW1lKVxuXG4gIHJlc2V0KClcbiAgZHJhd0xldmVsKHJvb3QsIGxldmVsLnNoYXBlKVxuICBkcmF3U3RhcnQocm9vdCwgbGV2ZWwuc3RhcnQpXG4gIGRyYXdFbmQocm9vdCwgbGV2ZWwuZW5kKVxuICB1cGRhdGVGYXZpY29uKClcbn1cblxuZnVuY3Rpb24gcmVzZXRBbmdsZSAoKSB7XG4gIGNvbnN0IGFuZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlJylcbiAgYW5nbGUudmFsdWUgPSAwXG59XG5cbmZ1bmN0aW9uIHJlc2V0QXR0ZW1wdHMgKCkge1xuICBjb25zdCBhdHRlbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGVtcHQnKVxuICBhdHRlbXB0LnZhbHVlID0gMFxufVxuXG5mdW5jdGlvbiByZXNldCAoKSB7XG4gIHJlc2V0QW5nbGUoKVxuICByZXNldEF0dGVtcHRzKClcblxuICBjbGVhckxldmVsKClcbiAgY2xlYXJTdGFydCgpXG4gIGNsZWFyRW5kKClcbiAgY2xlYXJMaWdodCgpXG59XG5cbmZ1bmN0aW9uIGNsZWFyTGV2ZWwgKCkge1xuICBjb25zdCBsZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXZlbCcpXG4gIGlmIChsZXZlbCkge1xuICAgIGxldmVsLnJlbW92ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJTdGFydCAoKSB7XG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JylcbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQucmVtb3ZlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckVuZCAoKSB7XG4gIGNvbnN0IGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQnKVxuICBpZiAoZW5kKSB7XG4gICAgZW5kLnJlbW92ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJMaWdodCAoKSB7XG4gIGNvbnN0IGxpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0JylcbiAgaWYgKGxpZ2h0KSB7XG4gICAgbGlnaHQucmVtb3ZlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmdsZSAoKSB7XG4gIGNvbnN0IGFuZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuZ2xlJylcblxuICBjb25zdCByYWRpYW5zID0gZGVnVG9SYWQocGFyc2VJbnQoYW5nbGUudmFsdWUsIDEwKSAtIDkwKVxuICByZXR1cm4gcG9sYXJUb0NhcnRlc2lhbih7IHI6IDEsIGRlZ3JlZTogcmFkaWFucyB9KVxufVxuXG5mdW5jdGlvbiBpbmNyZWFzZUF0dGVtcHQgKCkge1xuICBjb25zdCBhdHRlbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGVtcHQnKVxuICBhdHRlbXB0LnZhbHVlID0gcGFyc2VJbnQoYXR0ZW1wdC52YWx1ZSwgMTApICsgMVxufVxuXG5mdW5jdGlvbiBkZWdUb1JhZCAoZGVnKSB7XG4gIC8qIGRlZyAvIDE4MCA9IHggLyBQSSAqL1xuICByZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MFxufVxuXG5mdW5jdGlvbiBwb2xhclRvQ2FydGVzaWFuIChwb2xhcikge1xuICBjb25zdCB7IHIsIGRlZ3JlZSB9ID0gcG9sYXJcbiAgY29uc3QgeCA9IHBhcnNlRmxvYXQoKE1hdGguY29zKGRlZ3JlZSkgLyByKS50b0ZpeGVkKDIpKVxuICBjb25zdCB5ID0gcGFyc2VGbG9hdCgoTWF0aC5zaW4oZGVncmVlKSAvIHIpLnRvRml4ZWQoMikpXG4gIHJldHVybiBbIHgsIHkgXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVGYXZpY29uICgpIHtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJpY29uXCJdJylcblxuICBjb25zdCBzZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKVxuICBjb25zdCBzdHIgPSBzZXJpYWxpemVyXG4gICAgLnNlcmlhbGl6ZVRvU3RyaW5nKHN2ZylcbiAgICAucmVwbGFjZSgvIGlkPVwiXFx3K1wiL2csICcnKVxuICAgIC5yZXBsYWNlKC8gc3R5bGU9XCIuKlwiL2csICcnKVxuICAgIC5yZXBsYWNlKC8gY2xhc3M9XCJcXHcrXCIvZywgJycpXG4gIGljb24uaHJlZiA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICsgc3RyXG59XG5cbmZ1bmN0aW9uIHNoYXJlT25Ud2l0dGVyICgpIHtcbiAgY29uc3Qgc2hhcmVNZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1tZScpXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0ZW1wdCcpXG5cbiAgY29uc3QgcGx1cmFsID0gcGFyc2VJbnQoZWxlbWVudC52YWx1ZSwgMTApICE9PSAxID8gJycgOiAncydcbiAgY29uc3QgYXR0ZW1wdCA9IGAke2VsZW1lbnQudmFsdWV9IGF0dGVtcHQke3BsdXJhbH1gXG4gIGNvbnN0IGN1cnJlbnRMZXZlbCA9IGN1cnJlbnRMZXZlbEluZGV4ICsgMVxuXG4gIGNvbnN0IGVuY29kZWRUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIFtcbiAgICAgICdJIHBsYXllZCBcIkkgUmVhbGx5IE1vdmUgT25cIi4nLFxuICAgICAgYEkgY29tcGxldGVkIGxldmVsICR7Y3VycmVudExldmVsfSBhZnRlciAke2F0dGVtcHR9IWAsXG4gICAgICAnV2hhdCBpcyB5b3VyIGhpZ2hzY29yZT8nLFxuICAgICAgJycgIC8vIFRvIHB1c2ggaGFzaHRhZyBhbmQgdmlhIHRvIG5ldyBsaW5lXG4gICAgXS5qb2luKCdcXG4nKVxuICApXG5cbiAgY29uc3QgeyBob3N0bmFtZSwgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBsb2NhdGlvblxuICBjb25zdCBlbmNvZGVkVXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BhdGhuYW1lfWApXG5cbiAgY29uc3QgaHJlZiA9IGBodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JHtlbmNvZGVkVXJsfSZoYXNodGFncz1nYW1lZGV2anMmdmlhPUFuZHJlSmFlbmlzY2gmdGV4dD0ke2VuY29kZWRUZXh0fWBcbiAgc2hhcmVNZS5ocmVmID0gaHJlZlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIk1BQWUsV0FBYyxFQUFLLEVBQVUsR0FBSSxFQUFRLEdBQUksQ0FDMUQsR0FBTSxHQUFLLDZCQUNMLEVBQVUsU0FBUyxnQkFBZ0IsRUFBSSxHQUU3QyxFQUFRLFFBQVEsQUFBQyxHQUFRLENBQ3ZCLEVBQVEsVUFBVSxJQUFJLEtBR3hCLE9BQVMsQ0FBQyxFQUFLLElBQVUsUUFBTyxRQUFRLEdBQ3RDLEVBQVEsYUFBYSxFQUFLLEdBRzVCLE1BQU8sR0NWTSxXQUFrQixFQUFNLEVBQVEsQ0FDN0MsR0FBTSxDQUFFLEVBQU8sR0FBUSxFQUNqQixFQUFJLElBQUksRUFBTyxNQUFPLEVBQU8sT0FBUSxFQUFLLE1BQU8sRUFBSyxLQUd0RCxFQUFPLEVBQUksT0FBUSxDQUFFLE9BQVMsQ0FBRSxJQUFHLEtBRjVCLE9BRWtDLE9BRGhDLFFBQ3dDLGVBQWdCLElBQ3ZFLEVBQUssWUFBWSxHQ05KLFdBQW9CLEVBQU0sRUFBUSxDQUMvQyxHQUFNLEdBQUksSUFBSSxFQUFPLEdBQUcsTUFBTSxFQUFPLEdBQUcsS0FBTyxFQUM1QyxNQUFN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
