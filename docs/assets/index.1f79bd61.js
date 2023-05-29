var fl=Object.defineProperty;var dl=(s,e,t)=>e in s?fl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var pl=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var He=(s,e,t)=>(dl(s,typeof e!="symbol"?e+"":e,t),t);var Qm=pl(Ur=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Er="147",kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ml=0,Hr=1,gl=2,wa=1,_l=2,yi=3,ci=0,Rt=1,cn=2,hn=0,oi=1,Wr=2,qr=3,Xr=4,xl=5,ni=100,vl=101,yl=102,Yr=103,jr=104,bl=200,Ml=201,Sl=202,wl=203,Ta=204,Ea=205,Tl=206,El=207,Al=208,Cl=209,Pl=210,Ll=0,Rl=1,Dl=2,dr=3,Il=4,Nl=5,Fl=6,Ol=7,Aa=0,zl=1,Ul=2,$t=0,kl=1,Bl=2,Gl=3,Vl=4,Hl=5,Ca=300,hi=301,ui=302,pr=303,mr=304,xs=306,gr=1e3,Ft=1001,_r=1002,xt=1003,Zr=1004,Jr=1005,Pt=1006,Wl=1007,vs=1008,Dn=1009,ql=1010,Xl=1011,Pa=1012,Yl=1013,En=1014,An=1015,Pi=1016,jl=1017,Zl=1018,ai=1020,Jl=1021,Kl=1022,Ot=1023,$l=1024,Ql=1025,Pn=1026,fi=1027,ec=1028,tc=1029,nc=1030,ic=1031,sc=1033,Ds=33776,Is=33777,Ns=33778,Fs=33779,Kr=35840,$r=35841,Qr=35842,eo=35843,rc=36196,to=37492,no=37496,io=37808,so=37809,ro=37810,oo=37811,ao=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,xo=36492,In=3e3,je=3001,oc=3200,ac=3201,lc=0,cc=1,zt="srgb",Li="srgb-linear",Os=7680,hc=519,vo=35044,yo="300 es",xr=1035;class On{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bo=1234567;const wi=Math.PI/180,ps=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[s&255]+dt[s>>8&255]+dt[s>>16&255]+dt[s>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function Ar(s,e){return(s%e+e)%e}function uc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fc(s,e,t){return s!==e?(t-s)/(e-s):0}function Ti(s,e,t){return(1-t)*s+t*e}function dc(s,e,t,n){return Ti(s,e,1-Math.exp(-t*n))}function pc(s,e=1){return e-Math.abs(Ar(s,e*2)-e)}function mc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function gc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function _c(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xc(s,e){return s+Math.random()*(e-s)}function vc(s){return s*(.5-Math.random())}function yc(s){s!==void 0&&(bo=s);let e=bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bc(s){return s*wi}function Mc(s){return s*ps}function vr(s){return(s&s-1)===0&&s!==0}function Sc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ms(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wc(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Tc=Object.freeze({__proto__:null,DEG2RAD:wi,RAD2DEG:ps,generateUUID:zn,clamp:ct,euclideanModulo:Ar,mapLinear:uc,inverseLerp:fc,lerp:Ti,damp:dc,pingpong:pc,smoothstep:mc,smootherstep:gc,randInt:_c,randFloat:xc,randFloatSpread:vc,seededRandom:yc,degToRad:bc,radToDeg:Mc,isPowerOfTwo:vr,ceilPowerOfTwo:Sc,floorPowerOfTwo:ms,setQuaternionFromProperEuler:wc,normalize:_t,denormalize:bi});class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],_=i[6],T=i[1],v=i[4],y=i[7],b=i[2],R=i[5],I=i[8];return r[0]=a*m+o*T+c*b,r[3]=a*f+o*v+c*R,r[6]=a*_+o*y+c*I,r[1]=l*m+h*T+u*b,r[4]=l*f+h*v+u*R,r[7]=l*_+h*y+u*I,r[2]=d*m+p*T+g*b,r[5]=d*f+p*v+g*R,r[8]=d*_+p*y+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*l-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=d*m,e[4]=(h*t-i*c)*m,e[5]=(i*r-o*t)*m,e[6]=p*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new nt;function La(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ri(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Us={[zt]:{[Li]:Ln},[Li]:{[zt]:us}},mt={legacyMode:!0,get workingColorSpace(){return Li},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Us[e]&&Us[e][t]!==void 0){const n=Us[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Dt={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function ks(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function ki(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Ar(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ks(a,r,e+1/3),this.g=ks(a,r,e),this.b=ks(a,r,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,mt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,mt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,mt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zt){const n=Ra[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return mt.fromWorkingColorSpace(ki(this,tt),e),ct(tt.r*255,0,255)<<16^ct(tt.g*255,0,255)<<8^ct(tt.b*255,0,255)<<0}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(ki(this,tt),t);const n=tt.r,i=tt.g,r=tt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(ki(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=zt){return mt.fromWorkingColorSpace(ki(this,tt),e),e!==zt?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(Ui);const n=Ti(Dt.h,Ui.h,t),i=Ti(Dt.s,Ui.s,t),r=Ti(Dt.l,Ui.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=Ra;let Gn;class Da{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=Ri("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ri("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ia{constructor(e=null){this.isSource=!0,this.uuid=zn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Bs(i[a].image)):r.push(Bs(i[a]))}else r=Bs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Bs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Da.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ec=0;class vt extends On{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Ft,i=Ft,r=Pt,a=vs,o=Ot,c=Dn,l=vt.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=zn(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ca)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Ca;vt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],m=c[2],f=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(p+1)/2,b=(_+1)/2,R=(h+d)/4,I=(u+m)/4,x=(g+f)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=I/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=R/i,r=x/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=I/r,i=x/r),this.set(n,i,r,t),this}let T=Math.sqrt((f-g)*(f-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(f-g)/T,this.y=(u-m)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fn extends On{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Na extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ac extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(u!==m||c!==d||l!==p||h!==g){let f=1-o;const _=c*d+l*p+h*g+u*m,T=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const b=Math.sqrt(v),R=Math.atan2(b,_*T);f=Math.sin(f*R)/b,o=Math.sin(o*R)/b}const y=o*T;if(c=c*f+d*y,l=l*f+p*y,h=h*f+g*y,u=u*f+m*y,f===1-o){const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,h=c*n+o*t-r*i,u=c*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=l*c+d*-r+h*-o-u*-a,this.y=h*c+d*-a+u*-r-l*-o,this.z=u*c+d*-o+l*-a-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new V,Mo=new Nn;class Un{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)xn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox),Vs.applyMatrix4(e.matrixWorld),this.union(Vs);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Bi.subVectors(this.max,gi),Vn.subVectors(e.a,gi),Hn.subVectors(e.b,gi),Wn.subVectors(e.c,gi),tn.subVectors(Hn,Vn),nn.subVectors(Wn,Hn),vn.subVectors(Vn,Wn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-vn.z,vn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,vn.z,0,-vn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-vn.y,vn.x,0];return!Hs(t,Vn,Hn,Wn,Bi)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,Vn,Hn,Wn,Bi))?!1:(Gi.crossVectors(tn,nn),t=[Gi.x,Gi.y,Gi.z],Hs(t,Vn,Hn,Wn,Bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new V,new V,new V,new V,new V,new V,new V,new V],xn=new V,Vs=new Un,Vn=new V,Hn=new V,Wn=new V,tn=new V,nn=new V,vn=new V,gi=new V,Bi=new V,Gi=new V,yn=new V;function Hs(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){yn.fromArray(s,r);const o=i.x*Math.abs(yn.x)+i.y*Math.abs(yn.y)+i.z*Math.abs(yn.z),c=e.dot(yn),l=t.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Cc=new Un,_i=new V,Ws=new V;class Cr{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Ws)),this.expandByPoint(_i.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new V,qs=new V,Vi=new V,sn=new V,Xs=new V,Hi=new V,Ys=new V;class Fa{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qs.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(qs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Vi),o=sn.dot(this.direction),c=-sn.dot(Vi),l=sn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Vi).multiplyScalar(d).add(qs),p}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),i=qt.dot(qt)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,i,r){Xs.subVectors(t,e),Hi.subVectors(n,e),Ys.crossVectors(Xs,Hi);let a=this.direction.dot(Ys),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sn.subVectors(this.origin,e);const c=o*this.direction.dot(Hi.crossVectors(sn,Hi));if(c<0)return null;const l=o*this.direction.dot(Xs.cross(sn));if(l<0||c+l>a)return null;const h=-o*sn.dot(Ys);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,o,c,l,h,u,d,p,g,m,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/qn.setFromMatrixColumn(e,0).length(),r=1/qn.setFromMatrixColumn(e,1).length(),a=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-m*l,t[9]=-o*c,t[2]=m-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,m=l*u;t[0]=d+m*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=m+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,m=l*u;t[0]=d-m*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,m=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+m,t[1]=c*u,t[5]=m*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=m-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-m*u}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,m=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pc,e,Lc)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),rn.crossVectors(n,St),rn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),rn.crossVectors(n,St)),rn.normalize(),Wi.crossVectors(St,rn),i[0]=rn.x,i[4]=Wi.x,i[8]=St.x,i[1]=rn.y,i[5]=Wi.y,i[9]=St.y,i[2]=rn.z,i[6]=Wi.z,i[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],_=n[14],T=n[3],v=n[7],y=n[11],b=n[15],R=i[0],I=i[4],x=i[8],E=i[12],F=i[1],Z=i[5],Q=i[9],Y=i[13],z=i[2],te=i[6],ae=i[10],J=i[14],U=i[3],de=i[7],ce=i[11],ne=i[15];return r[0]=a*R+o*F+c*z+l*U,r[4]=a*I+o*Z+c*te+l*de,r[8]=a*x+o*Q+c*ae+l*ce,r[12]=a*E+o*Y+c*J+l*ne,r[1]=h*R+u*F+d*z+p*U,r[5]=h*I+u*Z+d*te+p*de,r[9]=h*x+u*Q+d*ae+p*ce,r[13]=h*E+u*Y+d*J+p*ne,r[2]=g*R+m*F+f*z+_*U,r[6]=g*I+m*Z+f*te+_*de,r[10]=g*x+m*Q+f*ae+_*ce,r[14]=g*E+m*Y+f*J+_*ne,r[3]=T*R+v*F+y*z+b*U,r[7]=T*I+v*Z+y*te+b*de,r[11]=T*x+v*Q+y*ae+b*ce,r[15]=T*E+v*Y+y*J+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],m=e[7],f=e[11],_=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*p-n*c*p)+m*(+t*c*p-t*l*d+r*a*d-i*a*p+i*l*h-r*c*h)+f*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+_*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],m=e[13],f=e[14],_=e[15],T=u*f*l-m*d*l+m*c*p-o*f*p-u*c*_+o*d*_,v=g*d*l-h*f*l-g*c*p+a*f*p+h*c*_-a*d*_,y=h*m*l-g*u*l+g*o*p-a*m*p-h*o*_+a*u*_,b=g*u*c-h*m*c-g*o*d+a*m*d+h*o*f-a*u*f,R=t*T+n*v+i*y+r*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return e[0]=T*I,e[1]=(m*d*r-u*f*r-m*i*p+n*f*p+u*i*_-n*d*_)*I,e[2]=(o*f*r-m*c*r+m*i*l-n*f*l-o*i*_+n*c*_)*I,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*p-n*c*p)*I,e[4]=v*I,e[5]=(h*f*r-g*d*r+g*i*p-t*f*p-h*i*_+t*d*_)*I,e[6]=(g*c*r-a*f*r-g*i*l+t*f*l+a*i*_-t*c*_)*I,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*p+t*c*p)*I,e[8]=y*I,e[9]=(g*u*r-h*m*r-g*n*p+t*m*p+h*n*_-t*u*_)*I,e[10]=(a*m*r-g*o*r+g*n*l-t*m*l-a*n*_+t*o*_)*I,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*I,e[12]=b*I,e[13]=(h*m*i-g*u*i+g*n*d-t*m*d-h*n*f+t*u*f)*I,e[14]=(g*o*i-a*m*i-g*n*c+t*m*c+a*n*f-t*o*f)*I,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,m=a*h,f=a*u,_=o*u,T=c*l,v=c*h,y=c*u,b=n.x,R=n.y,I=n.z;return i[0]=(1-(m+_))*b,i[1]=(p+y)*b,i[2]=(g-v)*b,i[3]=0,i[4]=(p-y)*R,i[5]=(1-(d+_))*R,i[6]=(f+T)*R,i[7]=0,i[8]=(g+v)*I,i[9]=(f-T)*I,i[10]=(1-(d+m))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=qn.set(i[0],i[1],i[2]).length();const a=qn.set(i[4],i[5],i[6]).length(),o=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],It.copy(this);const l=1/r,h=1/a,u=1/o;return It.elements[0]*=l,It.elements[1]*=l,It.elements[2]*=l,It.elements[4]*=h,It.elements[5]*=h,It.elements[6]*=h,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,t.setFromRotationMatrix(It),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,c=1/(t-e),l=1/(n-i),h=1/(a-r),u=(t+e)*c,d=(n+i)*l,p=(a+r)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new V,It=new et,Pc=new V(0,0,0),Lc=new V(1,1,1),rn=new V,Wi=new V,St=new V,So=new et,wo=new Nn;class Fi{constructor(e=0,t=0,n=0,i=Fi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return So.makeRotationFromQuaternion(e),this.setFromRotationMatrix(So,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wo.setFromEuler(this),this.setFromQuaternion(wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Fi.DefaultOrder="XYZ";Fi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Pr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rc=0;const To=new V,Xn=new Nn,Xt=new et,qi=new V,xi=new V,Dc=new V,Ic=new Nn,Eo=new V(1,0,0),Ao=new V(0,1,0),Co=new V(0,0,1),Nc={type:"added"},Po={type:"removed"};class yt extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DefaultUp.clone();const e=new V,t=new Fi,n=new Nn,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new nt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DefaultMatrixWorldAutoUpdate,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(Ao,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(Ao,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qi.copy(e):qi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(xi,qi,this.up):Xt.lookAt(qi,xi,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),Xn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Po)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Po)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,Dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Ic,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DefaultUp=new V(0,1,0);yt.DefaultMatrixAutoUpdate=!0;yt.DefaultMatrixWorldAutoUpdate=!0;const Nt=new V,Yt=new V,js=new V,jt=new V,Yn=new V,jn=new V,Lo=new V,Zs=new V,Js=new V,Ks=new V;class Jt{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nt.subVectors(e,t),i.cross(Nt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nt.subVectors(i,t),Yt.subVectors(n,t),js.subVectors(e,t);const a=Nt.dot(Nt),o=Nt.dot(Yt),c=Nt.dot(js),l=Yt.dot(Yt),h=Yt.dot(js),u=a*l-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,jt),c.set(0,0),c.addScaledVector(r,jt.x),c.addScaledVector(a,jt.y),c.addScaledVector(o,jt.z),c}static isFrontFacing(e,t,n,i){return Nt.subVectors(n,t),Yt.subVectors(e,t),Nt.cross(Yt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Nt.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Jt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Yn.subVectors(i,n),jn.subVectors(r,n),Zs.subVectors(e,n);const c=Yn.dot(Zs),l=jn.dot(Zs);if(c<=0&&l<=0)return t.copy(n);Js.subVectors(e,i);const h=Yn.dot(Js),u=jn.dot(Js);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Yn,a);Ks.subVectors(e,r);const p=Yn.dot(Ks),g=jn.dot(Ks);if(g>=0&&p<=g)return t.copy(r);const m=p*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(jn,o);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Lo.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Lo,o);const _=1/(f+m+d);return a=m*_,o=d*_,t.copy(n).addScaledVector(Yn,a).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fc=0;class ys extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=oi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ta,this.blendDst=Ea,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new V,Xi=new fe;class Tt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=vo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xi.fromBufferAttribute(this,t),Xi.applyMatrix3(e),this.setXY(t,Xi.x,Xi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Oa extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class za extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oc=0;const Ct=new et,$s=new yt,Zn=new V,wt=new Un,vi=new Un,at=new V;class Et extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(La(e)?za:Oa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vi.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(wt.min,vi.min),wt.expandByPoint(at),at.addVectors(wt.max,vi.max),wt.expandByPoint(at)):(wt.expandByPoint(vi.min),wt.expandByPoint(vi.max))}wt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)at.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(at));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)at.fromBufferAttribute(o,l),c&&(Zn.fromBufferAttribute(e,l),at.add(Zn)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let F=0;F<o;F++)l[F]=new V,h[F]=new V;const u=new V,d=new V,p=new V,g=new fe,m=new fe,f=new fe,_=new V,T=new V;function v(F,Z,Q){u.fromArray(i,F*3),d.fromArray(i,Z*3),p.fromArray(i,Q*3),g.fromArray(a,F*2),m.fromArray(a,Z*2),f.fromArray(a,Q*2),d.sub(u),p.sub(u),m.sub(g),f.sub(g);const Y=1/(m.x*f.y-f.x*m.y);!isFinite(Y)||(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(Y),T.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(Y),l[F].add(_),l[Z].add(_),l[Q].add(_),h[F].add(T),h[Z].add(T),h[Q].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let F=0,Z=y.length;F<Z;++F){const Q=y[F],Y=Q.start,z=Q.count;for(let te=Y,ae=Y+z;te<ae;te+=3)v(n[te+0],n[te+1],n[te+2])}const b=new V,R=new V,I=new V,x=new V;function E(F){I.fromArray(r,F*3),x.copy(I);const Z=l[F];b.copy(Z),b.sub(I.multiplyScalar(I.dot(Z))).normalize(),R.crossVectors(x,Z);const Y=R.dot(h[F])<0?-1:1;c[F*4]=b.x,c[F*4+1]=b.y,c[F*4+2]=b.z,c[F*4+3]=Y}for(let F=0,Z=y.length;F<Z;++F){const Q=y[F],Y=Q.start,z=Q.count;for(let te=Y,ae=Y+z;te<ae;te+=3)E(n[te+0]),E(n[te+1]),E(n[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new V,r=new V,a=new V,o=new V,c=new V,l=new V,h=new V,u=new V;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let m=0,f=c.length;m<f;m++){o.isInterleavedBufferAttribute?p=c[m]*o.data.stride+o.offset:p=c[m]*h;for(let _=0;_<h;_++)d[g++]=l[p++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new et,Jn=new Fa,Qs=new Cr,on=new V,an=new V,ln=new V,er=new V,tr=new V,nr=new V,Yi=new V,ji=new V,Zi=new V,Ji=new fe,Ki=new fe,$i=new fe,ir=new V,Qi=new V;class ut extends yt{constructor(e=new Et,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),e.ray.intersectsSphere(Qs)===!1)||(Ro.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(Ro),n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],T=i[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let b=v,R=y;b<R;b+=3){const I=o.getX(b),x=o.getX(b+1),E=o.getX(b+2);a=es(this,T,e,Jn,c,l,h,u,d,I,x,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let _=m,T=f;_<T;_+=3){const v=o.getX(_),y=o.getX(_+1),b=o.getX(_+2);a=es(this,i,e,Jn,c,l,h,u,d,v,y,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],T=i[_.materialIndex],v=Math.max(_.start,g.start),y=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let b=v,R=y;b<R;b+=3){const I=b,x=b+1,E=b+2;a=es(this,T,e,Jn,c,l,h,u,d,I,x,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let _=m,T=f;_<T;_+=3){const v=_,y=_+1,b=_+2;a=es(this,i,e,Jn,c,l,h,u,d,v,y,b),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function zc(s,e,t,n,i,r,a,o){let c;if(e.side===Rt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side!==cn,o),c===null)return null;Qi.copy(o),Qi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Qi);return l<t.near||l>t.far?null:{distance:l,point:Qi.clone(),object:s}}function es(s,e,t,n,i,r,a,o,c,l,h,u){on.fromBufferAttribute(i,l),an.fromBufferAttribute(i,h),ln.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){Yi.set(0,0,0),ji.set(0,0,0),Zi.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const f=d[g],_=r[g];f!==0&&(er.fromBufferAttribute(_,l),tr.fromBufferAttribute(_,h),nr.fromBufferAttribute(_,u),a?(Yi.addScaledVector(er,f),ji.addScaledVector(tr,f),Zi.addScaledVector(nr,f)):(Yi.addScaledVector(er.sub(on),f),ji.addScaledVector(tr.sub(an),f),Zi.addScaledVector(nr.sub(ln),f)))}on.add(Yi),an.add(ji),ln.add(Zi)}s.isSkinnedMesh&&(s.boneTransform(l,on),s.boneTransform(h,an),s.boneTransform(u,ln));const p=zc(s,e,t,n,on,an,ln,ir);if(p){o&&(Ji.fromBufferAttribute(o,l),Ki.fromBufferAttribute(o,h),$i.fromBufferAttribute(o,u),p.uv=Jt.getUV(ir,on,an,ln,Ji,Ki,$i,new fe)),c&&(Ji.fromBufferAttribute(c,l),Ki.fromBufferAttribute(c,h),$i.fromBufferAttribute(c,u),p.uv2=Jt.getUV(ir,on,an,ln,Ji,Ki,$i,new fe));const g={a:l,b:h,c:u,normal:new V,materialIndex:0};Jt.getNormal(on,an,ln,g.normal),p.face=g}return p}class en extends Et{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(m,f,_,T,v,y,b,R,I,x,E){const F=y/I,Z=b/x,Q=y/2,Y=b/2,z=R/2,te=I+1,ae=x+1;let J=0,U=0;const de=new V;for(let ce=0;ce<ae;ce++){const ne=ce*Z-Y;for(let se=0;se<te;se++){const ge=se*F-Q;de[m]=ge*T,de[f]=ne*v,de[_]=z,l.push(de.x,de.y,de.z),de[m]=0,de[f]=0,de[_]=R>0?1:-1,h.push(de.x,de.y,de.z),u.push(se/I),u.push(1-ce/x),J+=1}}for(let ce=0;ce<x;ce++)for(let ne=0;ne<I;ne++){const se=d+ne+te*ce,ge=d+ne+te*(ce+1),N=d+(ne+1)+te*(ce+1),L=d+(ne+1)+te*ce;c.push(se,ge,L),c.push(ge,N,L),U+=6}o.addGroup(p,U,E),p+=U,d+=J}}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function di(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gt(s){const e={};for(let t=0;t<s.length;t++){const n=di(s[t]);for(const i in n)e[i]=n[i]}return e}function Uc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ua(s){return s.getRenderTarget()===null&&s.outputEncoding===je?zt:Li}const ka={clone:di,merge:gt};var kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qt extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=di(e.uniforms),this.uniformsGroups=Uc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ba extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends Ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,$n=1;class Gc extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Lt(Kn,$n,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Lt(Kn,$n,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Lt(Kn,$n,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Lt(Kn,$n,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Lt(Kn,$n,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Lt(Kn,$n,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=$t,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ga extends vt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vc extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ga(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new en(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:hn});r.uniforms.tEquirect.value=t;const a=new ut(i,r),o=t.minFilter;return t.minFilter===vs&&(t.minFilter=Pt),new Gc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const sr=new V,Hc=new V,Wc=new nt;class Mn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sr.subVectors(n,t).cross(Hc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wc.getNormalMatrix(e),i=this.coplanarPoint(sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Cr,ts=new V;class Va{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],_=n[13],T=n[14],v=n[15];return t[0].setComponents(o-i,u-c,m-d,v-f).normalize(),t[1].setComponents(o+i,u+c,m+d,v+f).normalize(),t[2].setComponents(o+r,u+l,m+p,v+_).normalize(),t[3].setComponents(o-r,u-l,m-p,v-_).normalize(),t[4].setComponents(o-a,u-h,m-g,v-T).normalize(),t[5].setComponents(o+a,u+h,m+g,v+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ts.x=i.normal.x>0?e.max.x:e.min.x,ts.y=i.normal.y>0?e.max.y:e.min.y,ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ha(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qc(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,p=s.createBuffer();s.bindBuffer(h,p),s.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,p=h.updateRange;s.bindBuffer(u,l),p.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:a,remove:o,update:c}}class Oi extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],m=[],f=[];for(let _=0;_<h;_++){const T=_*d-a;for(let v=0;v<l;v++){const y=v*u-r;g.push(y,-T,0),m.push(0,0,1),f.push(v/o),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<o;T++){const v=T+l*_,y=T+l*(_+1),b=T+1+l*(_+1),R=T+1+l*_;p.push(v,y,R),p.push(y,b,R)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(m,3)),this.setAttribute("uv",new lt(f,2))}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Yc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$c="vec3 transformed = vec3( position );",Qc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",vh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ph=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Oh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Gh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,su=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ou=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,_u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ou=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Uu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ku=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Hu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ju=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ku=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:Xc,alphamap_pars_fragment:Yc,alphatest_fragment:jc,alphatest_pars_fragment:Zc,aomap_fragment:Jc,aomap_pars_fragment:Kc,begin_vertex:$c,beginnormal_vertex:Qc,bsdfs:eh,iridescence_fragment:th,bumpmap_pars_fragment:nh,clipping_planes_fragment:ih,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:rh,clipping_planes_vertex:oh,color_fragment:ah,color_pars_fragment:lh,color_pars_vertex:ch,color_vertex:hh,common:uh,cube_uv_reflection_fragment:fh,defaultnormal_vertex:dh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,encodings_fragment:xh,encodings_pars_fragment:vh,envmap_fragment:yh,envmap_common_pars_fragment:bh,envmap_pars_fragment:Mh,envmap_pars_vertex:Sh,envmap_physical_pars_fragment:Fh,envmap_vertex:wh,fog_vertex:Th,fog_pars_vertex:Eh,fog_fragment:Ah,fog_pars_fragment:Ch,gradientmap_pars_fragment:Ph,lightmap_fragment:Lh,lightmap_pars_fragment:Rh,lights_lambert_fragment:Dh,lights_lambert_pars_fragment:Ih,lights_pars_begin:Nh,lights_toon_fragment:Oh,lights_toon_pars_fragment:zh,lights_phong_fragment:Uh,lights_phong_pars_fragment:kh,lights_physical_fragment:Bh,lights_physical_pars_fragment:Gh,lights_fragment_begin:Vh,lights_fragment_maps:Hh,lights_fragment_end:Wh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:jh,map_fragment:Zh,map_pars_fragment:Jh,map_particle_fragment:Kh,map_particle_pars_fragment:$h,metalnessmap_fragment:Qh,metalnessmap_pars_fragment:eu,morphcolor_vertex:tu,morphnormal_vertex:nu,morphtarget_pars_vertex:iu,morphtarget_vertex:su,normal_fragment_begin:ru,normal_fragment_maps:ou,normal_pars_fragment:au,normal_pars_vertex:lu,normal_vertex:cu,normalmap_pars_fragment:hu,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:fu,clearcoat_pars_fragment:du,iridescence_pars_fragment:pu,output_fragment:mu,packing:gu,premultiplied_alpha_fragment:_u,project_vertex:xu,dithering_fragment:vu,dithering_pars_fragment:yu,roughnessmap_fragment:bu,roughnessmap_pars_fragment:Mu,shadowmap_pars_fragment:Su,shadowmap_pars_vertex:wu,shadowmap_vertex:Tu,shadowmask_pars_fragment:Eu,skinbase_vertex:Au,skinning_pars_vertex:Cu,skinning_vertex:Pu,skinnormal_vertex:Lu,specularmap_fragment:Ru,specularmap_pars_fragment:Du,tonemapping_fragment:Iu,tonemapping_pars_fragment:Nu,transmission_fragment:Fu,transmission_pars_fragment:Ou,uv_pars_fragment:zu,uv_pars_vertex:Uu,uv_vertex:ku,uv2_pars_fragment:Bu,uv2_pars_vertex:Gu,uv2_vertex:Vu,worldpos_vertex:Hu,background_vert:Wu,background_frag:qu,backgroundCube_vert:Xu,backgroundCube_frag:Yu,cube_vert:ju,cube_frag:Zu,depth_vert:Ju,depth_frag:Ku,distanceRGBA_vert:$u,distanceRGBA_frag:Qu,equirect_vert:ef,equirect_frag:tf,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:of,meshlambert_vert:af,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:hf,meshnormal_vert:uf,meshnormal_frag:ff,meshphong_vert:df,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:_f,meshtoon_frag:xf,points_vert:vf,points_frag:yf,shadow_vert:bf,shadow_frag:Mf,sprite_vert:Sf,sprite_frag:wf},ye={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nt},uv2Transform:{value:new nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}}},Ut={basic:{uniforms:gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:gt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:gt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new We(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:gt([ye.points,ye.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:gt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:gt([ye.common,ye.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:gt([ye.sprite,ye.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:gt([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:gt([ye.lights,ye.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Ut.physical={uniforms:gt([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ns={r:0,b:0,g:0};function Tf(s,e,t,n,i,r,a){const o=new We(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(f,_){let T=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=s.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?m(o,c):v&&v.isColor&&(m(v,1),T=!0),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xs)?(h===void 0&&(h=new ut(new en(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:di(Ut.backgroundCube.uniforms),vertexShader:Ut.backgroundCube.vertexShader,fragmentShader:Ut.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ut(new Oi(2,2),new Qt({name:"BackgroundMaterial",uniforms:di(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function m(f,_){f.getRGB(ns,Ua(s)),n.buffers.color.setClear(ns.r,ns.g,ns.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(f,_=1){o.set(f),c=_,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,m(o,c)},render:g}}function Ef(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=f(null);let l=c,h=!1;function u(z,te,ae,J,U){let de=!1;if(a){const ce=m(J,ae,te);l!==ce&&(l=ce,p(l.object)),de=_(z,J,ae,U),de&&T(z,J,ae,U)}else{const ce=te.wireframe===!0;(l.geometry!==J.id||l.program!==ae.id||l.wireframe!==ce)&&(l.geometry=J.id,l.program=ae.id,l.wireframe=ce,de=!0)}U!==null&&t.update(U,34963),(de||h)&&(h=!1,x(z,te,ae,J),U!==null&&s.bindBuffer(34963,t.get(U).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(z){return n.isWebGL2?s.bindVertexArray(z):r.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?s.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function m(z,te,ae){const J=ae.wireframe===!0;let U=o[z.id];U===void 0&&(U={},o[z.id]=U);let de=U[te.id];de===void 0&&(de={},U[te.id]=de);let ce=de[J];return ce===void 0&&(ce=f(d()),de[J]=ce),ce}function f(z){const te=[],ae=[],J=[];for(let U=0;U<i;U++)te[U]=0,ae[U]=0,J[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ae,attributeDivisors:J,object:z,attributes:{},index:null}}function _(z,te,ae,J){const U=l.attributes,de=te.attributes;let ce=0;const ne=ae.getAttributes();for(const se in ne)if(ne[se].location>=0){const N=U[se];let L=de[se];if(L===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(L=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(L=z.instanceColor)),N===void 0||N.attribute!==L||L&&N.data!==L.data)return!0;ce++}return l.attributesNum!==ce||l.index!==J}function T(z,te,ae,J){const U={},de=te.attributes;let ce=0;const ne=ae.getAttributes();for(const se in ne)if(ne[se].location>=0){let N=de[se];N===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(N=z.instanceColor));const L={};L.attribute=N,N&&N.data&&(L.data=N.data),U[se]=L,ce++}l.attributes=U,l.attributesNum=ce,l.index=J}function v(){const z=l.newAttributes;for(let te=0,ae=z.length;te<ae;te++)z[te]=0}function y(z){b(z,0)}function b(z,te){const ae=l.newAttributes,J=l.enabledAttributes,U=l.attributeDivisors;ae[z]=1,J[z]===0&&(s.enableVertexAttribArray(z),J[z]=1),U[z]!==te&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,te),U[z]=te)}function R(){const z=l.newAttributes,te=l.enabledAttributes;for(let ae=0,J=te.length;ae<J;ae++)te[ae]!==z[ae]&&(s.disableVertexAttribArray(ae),te[ae]=0)}function I(z,te,ae,J,U,de){n.isWebGL2===!0&&(ae===5124||ae===5125)?s.vertexAttribIPointer(z,te,ae,U,de):s.vertexAttribPointer(z,te,ae,J,U,de)}function x(z,te,ae,J){if(n.isWebGL2===!1&&(z.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=J.attributes,de=ae.getAttributes(),ce=te.defaultAttributeValues;for(const ne in de){const se=de[ne];if(se.location>=0){let ge=U[ne];if(ge===void 0&&(ne==="instanceMatrix"&&z.instanceMatrix&&(ge=z.instanceMatrix),ne==="instanceColor"&&z.instanceColor&&(ge=z.instanceColor)),ge!==void 0){const N=ge.normalized,L=ge.itemSize,M=t.get(ge);if(M===void 0)continue;const w=M.buffer,X=M.type,re=M.bytesPerElement;if(ge.isInterleavedBufferAttribute){const k=ge.data,ue=k.stride,H=ge.offset;if(k.isInstancedInterleavedBuffer){for(let W=0;W<se.locationSize;W++)b(se.location+W,k.meshPerAttribute);z.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let W=0;W<se.locationSize;W++)y(se.location+W);s.bindBuffer(34962,w);for(let W=0;W<se.locationSize;W++)I(se.location+W,L/se.locationSize,X,N,ue*re,(H+L/se.locationSize*W)*re)}else{if(ge.isInstancedBufferAttribute){for(let k=0;k<se.locationSize;k++)b(se.location+k,ge.meshPerAttribute);z.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let k=0;k<se.locationSize;k++)y(se.location+k);s.bindBuffer(34962,w);for(let k=0;k<se.locationSize;k++)I(se.location+k,L/se.locationSize,X,N,L*re,L/se.locationSize*k*re)}}else if(ce!==void 0){const N=ce[ne];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(se.location,N);break;case 3:s.vertexAttrib3fv(se.location,N);break;case 4:s.vertexAttrib4fv(se.location,N);break;default:s.vertexAttrib1fv(se.location,N)}}}}R()}function E(){Q();for(const z in o){const te=o[z];for(const ae in te){const J=te[ae];for(const U in J)g(J[U].object),delete J[U];delete te[ae]}delete o[z]}}function F(z){if(o[z.id]===void 0)return;const te=o[z.id];for(const ae in te){const J=te[ae];for(const U in J)g(J[U].object),delete J[U];delete te[ae]}delete o[z.id]}function Z(z){for(const te in o){const ae=o[te];if(ae[z.id]===void 0)continue;const J=ae[z.id];for(const U in J)g(J[U].object),delete J[U];delete ae[z.id]}}function Q(){Y(),h=!0,l!==c&&(l=c,p(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:Y,dispose:E,releaseStatesOfGeometry:F,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function Af(s,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,p;if(i)d=s,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,l,h,u),t.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=c}function Cf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),f=s.getParameter(36347),_=s.getParameter(36348),T=s.getParameter(36349),v=d>0,y=a||e.has("OES_texture_float"),b=v&&y,R=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:R}}function Pf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Mn,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,p){const g=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,_=s.get(u);if(!i||g===null||g.length===0||r&&!f)r?h(null):l();else{const T=r?0:n,v=T*4;let y=_.clippingState||null;c.value=y,y=h(g,d,v,p);for(let b=0;b!==v;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=c.value,g!==!0||f===null){const _=p+m*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(f===null||f.length<_)&&(f=new Float32Array(_));for(let v=0,y=p;v!==m;++v,y+=4)a.copy(u[v]).applyMatrix4(T,o),a.normal.toArray(f,y),f[y+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function Lf(s){let e=new WeakMap;function t(a,o){return o===pr?a.mapping=hi:o===mr&&(a.mapping=ui),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pr||o===mr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vc(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Lr extends Ba{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ii=4,Do=[.125,.215,.35,.446,.526,.582],wn=20,rr=new Lr,Io=new We;let or=null;const Sn=(1+Math.sqrt(5))/2,ei=1/Sn,No=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Sn,ei),new V(0,Sn,-ei),new V(ei,0,Sn),new V(-ei,0,Sn),new V(Sn,ei,0),new V(-Sn,ei,0)];class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){or=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(or),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),or=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Pi,format:Ot,encoding:In,depthBuffer:!1},i=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rf(r)),this._blurMaterial=Df(r,e,t)}return i}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,rr)}_sceneToCubeUV(e,t,n,i){const o=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Io),h.toneMapping=$t,h.autoClear=!1;const p=new dn({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new ut(new en,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Io),m=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):T===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const v=this._cubeSize;is(i,T*v,_>2?v:0,v,v),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hi||e.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;is(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,rr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=No[(i-1)%No.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wn-1),m=r/g,f=isFinite(r)?1+Math.floor(h*m):wn;f>wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${wn}`);const _=[];let T=0;for(let I=0;I<wn;++I){const x=I/m,E=Math.exp(-x*x/2);_.push(E),I===0?T+=E:I<f&&(T+=2*E)}for(let I=0;I<_.length;I++)_[I]=_[I]/T;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],b=3*y*(i>v-ii?i-v+ii:0),R=4*(this._cubeSize-y);is(t,b,R,3*y,2*y),c.setRenderTarget(t),c.render(u,rr)}}function Rf(s){const e=[],t=[],n=[];let i=s;const r=s-ii+1+Do.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-ii?c=Do[a-s+ii-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,f=2,_=1,T=new Float32Array(m*g*p),v=new Float32Array(f*g*p),y=new Float32Array(_*g*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,x=R>2?0:-1,E=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];T.set(E,m*g*R),v.set(d,f*g*R);const F=[R,R,R,R,R,R];y.set(F,_*g*R)}const b=new Et;b.setAttribute("position",new Tt(T,m)),b.setAttribute("uv",new Tt(v,f)),b.setAttribute("faceIndex",new Tt(y,_)),e.push(b),i>ii&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oo(s,e,t){const n=new fn(s,e,t);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Df(s,e,t){const n=new Float32Array(wn),i=new V(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function zo(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Uo(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function If(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===pr||c===mr,h=c===hi||c===ui;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Fo(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Fo(s));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Nf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ff(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)e.update(m[f],34962)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const T=p.array;m=p.version;for(let v=0,y=T.length;v<y;v+=3){const b=T[v+0],R=T[v+1],I=T[v+2];d.push(b,R,R,I,I,b)}}else{const T=g.array;m=g.version;for(let v=0,y=T.length/3-1;v<y;v+=3){const b=v+0,R=v+1,I=v+2;d.push(b,R,R,I,I,b)}}const f=new(La(d)?za:Oa)(d,1);f.version=m;const _=r.get(u);_&&e.remove(_),r.set(u,f)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Of(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,p){s.drawElements(r,p,o,d*c),t.update(p,r,1)}function u(d,p,g){if(g===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,p,o,d*c,g),t.update(p,r,g)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u}function zf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uf(s,e){return s[0]-e[0]}function kf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Bf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ht,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u,d){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let _=r.get(h);if(_===void 0||_.count!==f){let ae=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",ae)};var g=ae;_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let F=0;y===!0&&(F=1),b===!0&&(F=2),R===!0&&(F=3);let Z=h.attributes.position.count*F,Q=1;Z>e.maxTextureSize&&(Q=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const Y=new Float32Array(Z*Q*4*f),z=new Na(Y,Z,Q,f);z.type=An,z.needsUpdate=!0;const te=F*4;for(let J=0;J<f;J++){const U=I[J],de=x[J],ce=E[J],ne=Z*Q*4*J;for(let se=0;se<U.count;se++){const ge=se*te;y===!0&&(a.fromBufferAttribute(U,se),Y[ne+ge+0]=a.x,Y[ne+ge+1]=a.y,Y[ne+ge+2]=a.z,Y[ne+ge+3]=0),b===!0&&(a.fromBufferAttribute(de,se),Y[ne+ge+4]=a.x,Y[ne+ge+5]=a.y,Y[ne+ge+6]=a.z,Y[ne+ge+7]=0),R===!0&&(a.fromBufferAttribute(ce,se),Y[ne+ge+8]=a.x,Y[ne+ge+9]=a.y,Y[ne+ge+10]=a.z,Y[ne+ge+11]=ce.itemSize===4?a.w:1)}}_={count:f,texture:z,size:new fe(Z,Q)},r.set(h,_),h.addEventListener("dispose",ae)}let T=0;for(let y=0;y<p.length;y++)T+=p[y];const v=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",p),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let b=0;b<m;b++)f[b]=[b,0];n[h.id]=f}for(let b=0;b<m;b++){const R=f[b];R[0]=b,R[1]=p[b]}f.sort(kf);for(let b=0;b<8;b++)b<m&&f[b][1]?(o[b][0]=f[b][0],o[b][1]=f[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Uf);const _=h.morphAttributes.position,T=h.morphAttributes.normal;let v=0;for(let b=0;b<8;b++){const R=o[b],I=R[0],x=R[1];I!==Number.MAX_SAFE_INTEGER&&x?(_&&h.getAttribute("morphTarget"+b)!==_[I]&&h.setAttribute("morphTarget"+b,_[I]),T&&h.getAttribute("morphNormal"+b)!==T[I]&&h.setAttribute("morphNormal"+b,T[I]),i[b]=x,v+=x):(_&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),T&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const y=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Gf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Wa=new vt,qa=new Na,Xa=new Ac,Ya=new Ga,ko=[],Bo=[],Go=new Float32Array(16),Vo=new Float32Array(9),Ho=new Float32Array(4);function pi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ko[i];if(r===void 0&&(r=new Float32Array(i),ko[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function it(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function st(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function bs(s,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;s.uniform2fv(this.addr,e),st(t,e)}}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;s.uniform3fv(this.addr,e),st(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;s.uniform4fv(this.addr,e),st(t,e)}}function Xf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;Ho.set(n),s.uniformMatrix2fv(this.addr,!1,Ho),st(t,n)}}function Yf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;Vo.set(n),s.uniformMatrix3fv(this.addr,!1,Vo),st(t,n)}}function jf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;Go.set(n),s.uniformMatrix4fv(this.addr,!1,Go),st(t,n)}}function Zf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;s.uniform2iv(this.addr,e),st(t,e)}}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;s.uniform3iv(this.addr,e),st(t,e)}}function $f(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;s.uniform4iv(this.addr,e),st(t,e)}}function Qf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ed(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;s.uniform2uiv(this.addr,e),st(t,e)}}function td(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;s.uniform3uiv(this.addr,e),st(t,e)}}function nd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;s.uniform4uiv(this.addr,e),st(t,e)}}function id(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Wa,i)}function sd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xa,i)}function rd(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ya,i)}function od(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qa,i)}function ad(s){switch(s){case 5126:return Vf;case 35664:return Hf;case 35665:return Wf;case 35666:return qf;case 35674:return Xf;case 35675:return Yf;case 35676:return jf;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return Kf;case 35669:case 35673:return $f;case 5125:return Qf;case 36294:return ed;case 36295:return td;case 36296:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return sd;case 35680:case 36300:case 36308:case 36293:return rd;case 36289:case 36303:case 36311:case 36292:return od}}function ld(s,e){s.uniform1fv(this.addr,e)}function cd(s,e){const t=pi(e,this.size,2);s.uniform2fv(this.addr,t)}function hd(s,e){const t=pi(e,this.size,3);s.uniform3fv(this.addr,t)}function ud(s,e){const t=pi(e,this.size,4);s.uniform4fv(this.addr,t)}function fd(s,e){const t=pi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dd(s,e){const t=pi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pd(s,e){const t=pi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function md(s,e){s.uniform1iv(this.addr,e)}function gd(s,e){s.uniform2iv(this.addr,e)}function _d(s,e){s.uniform3iv(this.addr,e)}function xd(s,e){s.uniform4iv(this.addr,e)}function vd(s,e){s.uniform1uiv(this.addr,e)}function yd(s,e){s.uniform2uiv(this.addr,e)}function bd(s,e){s.uniform3uiv(this.addr,e)}function Md(s,e){s.uniform4uiv(this.addr,e)}function Sd(s,e,t){const n=this.cache,i=e.length,r=bs(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wa,r[a])}function wd(s,e,t){const n=this.cache,i=e.length,r=bs(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Xa,r[a])}function Td(s,e,t){const n=this.cache,i=e.length,r=bs(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ya,r[a])}function Ed(s,e,t){const n=this.cache,i=e.length,r=bs(t,i);it(n,r)||(s.uniform1iv(this.addr,r),st(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||qa,r[a])}function Ad(s){switch(s){case 5126:return ld;case 35664:return cd;case 35665:return hd;case 35666:return ud;case 35674:return fd;case 35675:return dd;case 35676:return pd;case 5124:case 35670:return md;case 35667:case 35671:return gd;case 35668:case 35672:return _d;case 35669:case 35673:return xd;case 5125:return vd;case 36294:return yd;case 36295:return bd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Sd;case 35679:case 36299:case 36307:return wd;case 35680:case 36300:case 36308:case 36293:return Td;case 36289:case 36303:case 36311:case 36292:return Ed}}class Cd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ad(t.type)}}class Pd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ad(t.type)}}class Ld{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function Wo(s,e){s.seq.push(e),s.map[e.id]=e}function Rd(s,e,t){const n=s.name,i=n.length;for(ar.lastIndex=0;;){const r=ar.exec(n),a=ar.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Wo(t,l===void 0?new Cd(o,s,e):new Pd(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ld(o),Wo(t,u)),t=u}}}class fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Rd(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Dd=0;function Id(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Nd(s){switch(s){case In:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Xo(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Id(s.getShaderSource(e),a)}else return i}function Fd(s,e){const t=Nd(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Od(s,e){let t;switch(e){case kl:t="Linear";break;case Bl:t="Reinhard";break;case Gl:t="OptimizedCineon";break;case Vl:t="ACESFilmic";break;case Hl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zd(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Ud(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kd(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Mi(s){return s!==""}function Yo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bd=/^[ \t]*#include +<([\w\d./]+)>/gm;function yr(s){return s.replace(Bd,Gd)}function Gd(s,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yr(t)}const Vd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zo(s){return s.replace(Vd,Hd)}function Hd(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wd(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wa?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function qd(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hi:case ui:e="ENVMAP_TYPE_CUBE";break;case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xd(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Yd(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Aa:e="ENVMAP_BLENDING_MULTIPLY";break;case zl:e="ENVMAP_BLENDING_MIX";break;case Ul:e="ENVMAP_BLENDING_ADD";break}return e}function jd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zd(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Wd(t),l=qd(t),h=Xd(t),u=Yd(t),d=jd(t),p=t.isWebGL2?"":zd(t),g=Ud(r),m=i.createProgram();let f,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Mi).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(Mi).join(`
`),_.length>0&&(_+=`
`)):(f=[Jo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),_=[p,Jo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?Ie.tonemapping_pars_fragment:"",t.toneMapping!==$t?Od("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,Fd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),a=yr(a),a=Yo(a,t),a=jo(a,t),o=yr(o),o=Yo(o,t),o=jo(o,t),a=Zo(a),o=Zo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=T+f+a,y=T+_+o,b=qo(i,35633,v),R=qo(i,35632,y);if(i.attachShader(m,b),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const E=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(b).trim(),Z=i.getShaderInfoLog(R).trim();let Q=!0,Y=!0;if(i.getProgramParameter(m,35714)===!1){Q=!1;const z=Xo(i,b,"vertex"),te=Xo(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+z+`
`+te)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(F===""||Z==="")&&(Y=!1);Y&&(this.diagnostics={runnable:Q,programLog:E,vertexShader:{log:F,prefix:f},fragmentShader:{log:Z,prefix:_}})}i.deleteShader(b),i.deleteShader(R);let I;this.getUniforms=function(){return I===void 0&&(I=new fs(i,m)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=kd(i,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Dd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=R,this}let Jd=0;class Kd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $d(e),t.set(e,n)),n}}class $d{constructor(e){this.id=Jd++,this.code=e,this.usedTimes=0}}function Qd(s,e,t,n,i,r,a){const o=new Pr,c=new Kd,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,E,F,Z,Q){const Y=Z.fog,z=Q.geometry,te=x.isMeshStandardMaterial?Z.environment:null,ae=(x.isMeshStandardMaterial?t:e).get(x.envMap||te),J=!!ae&&ae.mapping===xs?ae.image.height:null,U=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=de!==void 0?de.length:0;let ne=0;z.morphAttributes.position!==void 0&&(ne=1),z.morphAttributes.normal!==void 0&&(ne=2),z.morphAttributes.color!==void 0&&(ne=3);let se,ge,N,L;if(U){const ue=Ut[U];se=ue.vertexShader,ge=ue.fragmentShader}else se=x.vertexShader,ge=x.fragmentShader,c.update(x),N=c.getVertexShaderID(x),L=c.getFragmentShaderID(x);const M=s.getRenderTarget(),w=x.alphaTest>0,X=x.clearcoat>0,re=x.iridescence>0;return{isWebGL2:h,shaderID:U,shaderName:x.type,vertexShader:se,fragmentShader:ge,defines:x.defines,customVertexShaderID:N,customFragmentShaderID:L,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:M===null?s.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:In,map:!!x.map,matcap:!!x.matcap,envMap:!!ae,envMapMode:ae&&ae.mapping,envMapCubeUVHeight:J,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===cc,tangentSpaceNormalMap:x.normalMapType===lc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===je,clearcoat:X,clearcoatMap:X&&!!x.clearcoatMap,clearcoatRoughnessMap:X&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:X&&!!x.clearcoatNormalMap,iridescence:re,iridescenceMap:re&&!!x.iridescenceMap,iridescenceThicknessMap:re&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===oi,alphaMap:!!x.alphaMap,alphaTest:w,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!z.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Y,useFog:x.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:$t,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===Rt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)E.push(F),E.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(_(E,x),T(E,x),E.push(s.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function T(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),x.push(o.mask)}function v(x){const E=g[x.type];let F;if(E){const Z=Ut[E];F=ka.clone(Z.uniforms)}else F=x.uniforms;return F}function y(x,E){let F;for(let Z=0,Q=l.length;Z<Q;Z++){const Y=l[Z];if(Y.cacheKey===E){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new Zd(s,E,x,r),l.push(F)),F}function b(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function R(x){c.remove(x)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:I}}function ep(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ko(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $o(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,g,m,f){let _=s[e];return _===void 0?(_={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},s[e]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=f),e++,_}function o(u,d,p,g,m,f){const _=a(u,d,p,g,m,f);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function c(u,d,p,g,m,f){const _=a(u,d,p,g,m,f);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function l(u,d){t.length>1&&t.sort(u||tp),n.length>1&&n.sort(d||Ko),i.length>1&&i.sort(d||Ko)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function np(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new $o,s.set(n,[a])):i>=r.length?(a=new $o,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function ip(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new We};break;case"SpotLight":t={position:new V,direction:new V,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function sp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rp=0;function op(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ap(s,e){const t=new ip,n=sp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new V);const r=new V,a=new et,o=new et;function c(h,u){let d=0,p=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let m=0,f=0,_=0,T=0,v=0,y=0,b=0,R=0,I=0,x=0;h.sort(op);const E=u!==!0?Math.PI:1;for(let Z=0,Q=h.length;Z<Q;Z++){const Y=h[Z],z=Y.color,te=Y.intensity,ae=Y.distance,J=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)d+=z.r*te*E,p+=z.g*te*E,g+=z.b*te*E;else if(Y.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(Y.sh.coefficients[U],te);else if(Y.isDirectionalLight){const U=t.get(Y);if(U.color.copy(Y.color).multiplyScalar(Y.intensity*E),Y.castShadow){const de=Y.shadow,ce=n.get(Y);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,i.directionalShadow[m]=ce,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=Y.shadow.matrix,y++}i.directional[m]=U,m++}else if(Y.isSpotLight){const U=t.get(Y);U.position.setFromMatrixPosition(Y.matrixWorld),U.color.copy(z).multiplyScalar(te*E),U.distance=ae,U.coneCos=Math.cos(Y.angle),U.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),U.decay=Y.decay,i.spot[_]=U;const de=Y.shadow;if(Y.map&&(i.spotLightMap[I]=Y.map,I++,de.updateMatrices(Y),Y.castShadow&&x++),i.spotLightMatrix[_]=de.matrix,Y.castShadow){const ce=n.get(Y);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,i.spotShadow[_]=ce,i.spotShadowMap[_]=J,R++}_++}else if(Y.isRectAreaLight){const U=t.get(Y);U.color.copy(z).multiplyScalar(te),U.halfWidth.set(Y.width*.5,0,0),U.halfHeight.set(0,Y.height*.5,0),i.rectArea[T]=U,T++}else if(Y.isPointLight){const U=t.get(Y);if(U.color.copy(Y.color).multiplyScalar(Y.intensity*E),U.distance=Y.distance,U.decay=Y.decay,Y.castShadow){const de=Y.shadow,ce=n.get(Y);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,ce.shadowCameraNear=de.camera.near,ce.shadowCameraFar=de.camera.far,i.pointShadow[f]=ce,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=Y.shadow.matrix,b++}i.point[f]=U,f++}else if(Y.isHemisphereLight){const U=t.get(Y);U.skyColor.copy(Y.color).multiplyScalar(te*E),U.groundColor.copy(Y.groundColor).multiplyScalar(te*E),i.hemi[v]=U,v++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==m||F.pointLength!==f||F.spotLength!==_||F.rectAreaLength!==T||F.hemiLength!==v||F.numDirectionalShadows!==y||F.numPointShadows!==b||F.numSpotShadows!==R||F.numSpotMaps!==I)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=T,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=R+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,F.directionalLength=m,F.pointLength=f,F.spotLength=_,F.rectAreaLength=T,F.hemiLength=v,F.numDirectionalShadows=y,F.numPointShadows=b,F.numSpotShadows=R,F.numSpotMaps=I,i.version=rp++)}function l(h,u){let d=0,p=0,g=0,m=0,f=0;const _=u.matrixWorldInverse;for(let T=0,v=h.length;T<v;T++){const y=h[T];if(y.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),d++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(y.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),f++}}}return{setup:c,setupView:l,state:i}}function Qo(s,e){const t=new ap(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function lp(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Qo(s,e),t.set(r,[c])):a>=o.length?(c=new Qo(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class cp extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hp extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const up=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dp(s,e,t){let n=new Va;const i=new fe,r=new fe,a=new ht,o=new cp({depthPacking:ac}),c=new hp,l={},h=t.maxTextureSize,u={0:Rt,1:ci,2:cn},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:up,fragmentShader:fp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ut(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa,this.render=function(y,b,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const I=s.getRenderTarget(),x=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),F=s.state;F.setBlending(hn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let Z=0,Q=y.length;Z<Q;Z++){const Y=y[Z],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const te=z.getFrameExtents();if(i.multiply(te),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null){const J=this.type!==yi?{minFilter:xt,magFilter:xt}:{};z.map=new fn(i.x,i.y,J),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ae=z.getViewportCount();for(let J=0;J<ae;J++){const U=z.getViewport(J);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),F.viewport(a),z.updateMatrices(Y,J),n=z.getFrustum(),v(b,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===yi&&_(z,R),z.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(I,x,E)};function _(y,b){const R=e.update(m);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new fn(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(b,null,R,d,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(b,null,R,p,m,null)}function T(y,b,R,I,x,E){let F=null;const Z=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Z!==void 0?F=Z:F=R.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Q=F.uuid,Y=b.uuid;let z=l[Q];z===void 0&&(z={},l[Q]=z);let te=z[Y];te===void 0&&(te=F.clone(),z[Y]=te),F=te}return F.visible=b.visible,F.wireframe=b.wireframe,E===yi?F.side=b.shadowSide!==null?b.shadowSide:b.side:F.side=b.shadowSide!==null?b.shadowSide:u[b.side],F.alphaMap=b.alphaMap,F.alphaTest=b.alphaTest,F.map=b.map,F.clipShadows=b.clipShadows,F.clippingPlanes=b.clippingPlanes,F.clipIntersection=b.clipIntersection,F.displacementMap=b.displacementMap,F.displacementScale=b.displacementScale,F.displacementBias=b.displacementBias,F.wireframeLinewidth=b.wireframeLinewidth,F.linewidth=b.linewidth,R.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(R.matrixWorld),F.nearDistance=I,F.farDistance=x),F}function v(y,b,R,I,x){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===yi)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const Z=e.update(y),Q=y.material;if(Array.isArray(Q)){const Y=Z.groups;for(let z=0,te=Y.length;z<te;z++){const ae=Y[z],J=Q[ae.materialIndex];if(J&&J.visible){const U=T(y,J,I,R.near,R.far,x);s.renderBufferDirect(R,null,Z,U,y,ae)}}}else if(Q.visible){const Y=T(y,Q,I,R.near,R.far,x);s.renderBufferDirect(R,null,Z,Y,y,null)}}const F=y.children;for(let Z=0,Q=F.length;Z<Q;Z++)v(F[Z],b,R,I,x)}}function pp(s,e,t){const n=t.isWebGL2;function i(){let G=!1;const le=new ht;let xe=null;const Ee=new ht(0,0,0,0);return{setMask:function(Pe){xe!==Pe&&!G&&(s.colorMask(Pe,Pe,Pe,Pe),xe=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,Ve,rt,ft,pn){pn===!0&&(Pe*=ft,Ve*=ft,rt*=ft),le.set(Pe,Ve,rt,ft),Ee.equals(le)===!1&&(s.clearColor(Pe,Ve,rt,ft),Ee.copy(le))},reset:function(){G=!1,xe=null,Ee.set(-1,0,0,0)}}}function r(){let G=!1,le=null,xe=null,Ee=null;return{setTest:function(Pe){Pe?w(2929):X(2929)},setMask:function(Pe){le!==Pe&&!G&&(s.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(xe!==Pe){switch(Pe){case Ll:s.depthFunc(512);break;case Rl:s.depthFunc(519);break;case Dl:s.depthFunc(513);break;case dr:s.depthFunc(515);break;case Il:s.depthFunc(514);break;case Nl:s.depthFunc(518);break;case Fl:s.depthFunc(516);break;case Ol:s.depthFunc(517);break;default:s.depthFunc(515)}xe=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Ee!==Pe&&(s.clearDepth(Pe),Ee=Pe)},reset:function(){G=!1,le=null,xe=null,Ee=null}}}function a(){let G=!1,le=null,xe=null,Ee=null,Pe=null,Ve=null,rt=null,ft=null,pn=null;return{setTest:function(Ye){G||(Ye?w(2960):X(2960))},setMask:function(Ye){le!==Ye&&!G&&(s.stencilMask(Ye),le=Ye)},setFunc:function(Ye,Vt,At){(xe!==Ye||Ee!==Vt||Pe!==At)&&(s.stencilFunc(Ye,Vt,At),xe=Ye,Ee=Vt,Pe=At)},setOp:function(Ye,Vt,At){(Ve!==Ye||rt!==Vt||ft!==At)&&(s.stencilOp(Ye,Vt,At),Ve=Ye,rt=Vt,ft=At)},setLocked:function(Ye){G=Ye},setClear:function(Ye){pn!==Ye&&(s.clearStencil(Ye),pn=Ye)},reset:function(){G=!1,le=null,xe=null,Ee=null,Pe=null,Ve=null,rt=null,ft=null,pn=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,m=[],f=null,_=!1,T=null,v=null,y=null,b=null,R=null,I=null,x=null,E=!1,F=null,Z=null,Q=null,Y=null,z=null;const te=s.getParameter(35661);let ae=!1,J=0;const U=s.getParameter(7938);U.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(U)[1]),ae=J>=1):U.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),ae=J>=2);let de=null,ce={};const ne=s.getParameter(3088),se=s.getParameter(2978),ge=new ht().fromArray(ne),N=new ht().fromArray(se);function L(G,le,xe){const Ee=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,10241,9728),s.texParameteri(G,10240,9728);for(let Ve=0;Ve<xe;Ve++)s.texImage2D(le+Ve,0,6408,1,1,0,6408,5121,Ee);return Pe}const M={};M[3553]=L(3553,3553,1),M[34067]=L(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),w(2929),c.setFunc(dr),ie(!1),pe(Hr),w(2884),B(hn);function w(G){d[G]!==!0&&(s.enable(G),d[G]=!0)}function X(G){d[G]!==!1&&(s.disable(G),d[G]=!1)}function re(G,le){return p[G]!==le?(s.bindFramebuffer(G,le),p[G]=le,n&&(G===36009&&(p[36160]=le),G===36160&&(p[36009]=le)),!0):!1}function k(G,le){let xe=m,Ee=!1;if(G)if(xe=g.get(le),xe===void 0&&(xe=[],g.set(le,xe)),G.isWebGLMultipleRenderTargets){const Pe=G.texture;if(xe.length!==Pe.length||xe[0]!==36064){for(let Ve=0,rt=Pe.length;Ve<rt;Ve++)xe[Ve]=36064+Ve;xe.length=Pe.length,Ee=!0}}else xe[0]!==36064&&(xe[0]=36064,Ee=!0);else xe[0]!==1029&&(xe[0]=1029,Ee=!0);Ee&&(t.isWebGL2?s.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function ue(G){return f!==G?(s.useProgram(G),f=G,!0):!1}const H={[ni]:32774,[vl]:32778,[yl]:32779};if(n)H[Yr]=32775,H[jr]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(H[Yr]=G.MIN_EXT,H[jr]=G.MAX_EXT)}const W={[bl]:0,[Ml]:1,[Sl]:768,[Ta]:770,[Pl]:776,[Al]:774,[Tl]:772,[wl]:769,[Ea]:771,[Cl]:775,[El]:773};function B(G,le,xe,Ee,Pe,Ve,rt,ft){if(G===hn){_===!0&&(X(3042),_=!1);return}if(_===!1&&(w(3042),_=!0),G!==xl){if(G!==T||ft!==E){if((v!==ni||R!==ni)&&(s.blendEquation(32774),v=ni,R=ni),ft)switch(G){case oi:s.blendFuncSeparate(1,771,1,771);break;case Wr:s.blendFunc(1,1);break;case qr:s.blendFuncSeparate(0,769,0,1);break;case Xr:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case oi:s.blendFuncSeparate(770,771,1,771);break;case Wr:s.blendFunc(770,1);break;case qr:s.blendFuncSeparate(0,769,0,1);break;case Xr:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,b=null,I=null,x=null,T=G,E=ft}return}Pe=Pe||le,Ve=Ve||xe,rt=rt||Ee,(le!==v||Pe!==R)&&(s.blendEquationSeparate(H[le],H[Pe]),v=le,R=Pe),(xe!==y||Ee!==b||Ve!==I||rt!==x)&&(s.blendFuncSeparate(W[xe],W[Ee],W[Ve],W[rt]),y=xe,b=Ee,I=Ve,x=rt),T=G,E=!1}function ee(G,le){G.side===cn?X(2884):w(2884);let xe=G.side===Rt;le&&(xe=!xe),ie(xe),G.blending===oi&&G.transparent===!1?B(hn):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const Ee=G.stencilWrite;l.setTest(Ee),Ee&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),C(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?w(32926):X(32926)}function ie(G){F!==G&&(G?s.frontFace(2304):s.frontFace(2305),F=G)}function pe(G){G!==ml?(w(2884),G!==Z&&(G===Hr?s.cullFace(1029):G===gl?s.cullFace(1028):s.cullFace(1032))):X(2884),Z=G}function O(G){G!==Q&&(ae&&s.lineWidth(G),Q=G)}function C(G,le,xe){G?(w(32823),(Y!==le||z!==xe)&&(s.polygonOffset(le,xe),Y=le,z=xe)):X(32823)}function ve(G){G?w(3089):X(3089)}function Te(G){G===void 0&&(G=33984+te-1),de!==G&&(s.activeTexture(G),de=G)}function P(G,le,xe){xe===void 0&&(de===null?xe=33984+te-1:xe=de);let Ee=ce[xe];Ee===void 0&&(Ee={type:void 0,texture:void 0},ce[xe]=Ee),(Ee.type!==G||Ee.texture!==le)&&(de!==xe&&(s.activeTexture(xe),de=xe),s.bindTexture(G,le||M[G]),Ee.type=G,Ee.texture=le)}function S(){const G=ce[de];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function D(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(G){ge.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ge.copy(G))}function Ce(G){N.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),N.copy(G))}function Oe(G,le){let xe=u.get(le);xe===void 0&&(xe=new WeakMap,u.set(le,xe));let Ee=xe.get(G);Ee===void 0&&(Ee=s.getUniformBlockIndex(le,G.name),xe.set(G,Ee))}function ze(G,le){const Ee=u.get(le).get(G);h.get(G)!==Ee&&(s.uniformBlockBinding(le,Ee,G.__bindingPointIndex),h.set(G,Ee))}function qe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},de=null,ce={},p={},g=new WeakMap,m=[],f=null,_=!1,T=null,v=null,y=null,b=null,R=null,I=null,x=null,E=!1,F=null,Z=null,Q=null,Y=null,z=null,ge.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:w,disable:X,bindFramebuffer:re,drawBuffers:k,useProgram:ue,setBlending:B,setMaterial:ee,setFlipSided:ie,setCullFace:pe,setLineWidth:O,setPolygonOffset:C,setScissorTest:ve,activeTexture:Te,bindTexture:P,unbindTexture:S,compressedTexImage2D:K,compressedTexImage3D:me,texImage2D:we,texImage3D:Se,updateUBOMapping:Oe,uniformBlockBinding:ze,texStorage2D:q,texStorage3D:Me,texSubImage2D:_e,texSubImage3D:be,compressedTexSubImage2D:Le,compressedTexSubImage3D:D,scissor:Ae,viewport:Ce,reset:qe}}function mp(s,e,t,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,S){return _?new OffscreenCanvas(P,S):Ri("canvas")}function v(P,S,K,me){let _e=1;if((P.width>me||P.height>me)&&(_e=me/Math.max(P.width,P.height)),_e<1||S===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const be=S?ms:Math.floor,Le=be(_e*P.width),D=be(_e*P.height);m===void 0&&(m=T(Le,D));const q=K?T(Le,D):m;return q.width=Le,q.height=D,q.getContext("2d").drawImage(P,0,0,Le,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Le+"x"+D+")."),q}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return vr(P.width)&&vr(P.height)}function b(P){return o?!1:P.wrapS!==Ft||P.wrapT!==Ft||P.minFilter!==xt&&P.minFilter!==Pt}function R(P,S){return P.generateMipmaps&&S&&P.minFilter!==xt&&P.minFilter!==Pt}function I(P){s.generateMipmap(P)}function x(P,S,K,me,_e=!1){if(o===!1)return S;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let be=S;return S===6403&&(K===5126&&(be=33326),K===5131&&(be=33325),K===5121&&(be=33321)),S===33319&&(K===5126&&(be=33328),K===5131&&(be=33327),K===5121&&(be=33323)),S===6408&&(K===5126&&(be=34836),K===5131&&(be=34842),K===5121&&(be=me===je&&_e===!1?35907:32856),K===32819&&(be=32854),K===32820&&(be=32855)),(be===33325||be===33326||be===33327||be===33328||be===34842||be===34836)&&e.get("EXT_color_buffer_float"),be}function E(P,S,K){return R(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==xt&&P.minFilter!==Pt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function F(P){return P===xt||P===Zr||P===Jr?9728:9729}function Z(P){const S=P.target;S.removeEventListener("dispose",Z),Y(S),S.isVideoTexture&&g.delete(S)}function Q(P){const S=P.target;S.removeEventListener("dispose",Q),te(S)}function Y(P){const S=n.get(P);if(S.__webglInit===void 0)return;const K=P.source,me=f.get(K);if(me){const _e=me[S.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&z(P),Object.keys(me).length===0&&f.delete(K)}n.remove(P)}function z(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const K=P.source,me=f.get(K);delete me[S.__cacheKey],a.memory.textures--}function te(P){const S=P.texture,K=n.get(P),me=n.get(S);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)s.deleteFramebuffer(K.__webglFramebuffer[_e]),K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer[_e]);else{if(s.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&s.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let _e=0;_e<K.__webglColorRenderbuffer.length;_e++)K.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(K.__webglColorRenderbuffer[_e]);K.__webglDepthRenderbuffer&&s.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let _e=0,be=S.length;_e<be;_e++){const Le=n.get(S[_e]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),a.memory.textures--),n.remove(S[_e])}n.remove(S),n.remove(P)}let ae=0;function J(){ae=0}function U(){const P=ae;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),ae+=1,P}function de(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.encoding),S.join()}function ce(P,S){const K=n.get(P);if(P.isVideoTexture&&ve(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(K,P,S);return}}t.bindTexture(3553,K.__webglTexture,33984+S)}function ne(P,S){const K=n.get(P);if(P.version>0&&K.__version!==P.version){X(K,P,S);return}t.bindTexture(35866,K.__webglTexture,33984+S)}function se(P,S){const K=n.get(P);if(P.version>0&&K.__version!==P.version){X(K,P,S);return}t.bindTexture(32879,K.__webglTexture,33984+S)}function ge(P,S){const K=n.get(P);if(P.version>0&&K.__version!==P.version){re(K,P,S);return}t.bindTexture(34067,K.__webglTexture,33984+S)}const N={[gr]:10497,[Ft]:33071,[_r]:33648},L={[xt]:9728,[Zr]:9984,[Jr]:9986,[Pt]:9729,[Wl]:9985,[vs]:9987};function M(P,S,K){if(K?(s.texParameteri(P,10242,N[S.wrapS]),s.texParameteri(P,10243,N[S.wrapT]),(P===32879||P===35866)&&s.texParameteri(P,32882,N[S.wrapR]),s.texParameteri(P,10240,L[S.magFilter]),s.texParameteri(P,10241,L[S.minFilter])):(s.texParameteri(P,10242,33071),s.texParameteri(P,10243,33071),(P===32879||P===35866)&&s.texParameteri(P,32882,33071),(S.wrapS!==Ft||S.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,10240,F(S.magFilter)),s.texParameteri(P,10241,F(S.minFilter)),S.minFilter!==xt&&S.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(S.type===An&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Pi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(P,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function w(P,S){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",Z));const me=S.source;let _e=f.get(me);_e===void 0&&(_e={},f.set(me,_e));const be=de(S);if(be!==P.__cacheKey){_e[be]===void 0&&(_e[be]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),_e[be].usedTimes++;const Le=_e[P.__cacheKey];Le!==void 0&&(_e[P.__cacheKey].usedTimes--,Le.usedTimes===0&&z(S)),P.__cacheKey=be,P.__webglTexture=_e[be].texture}return K}function X(P,S,K){let me=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(me=35866),S.isData3DTexture&&(me=32879);const _e=w(P,S),be=S.source;t.bindTexture(me,P.__webglTexture,33984+K);const Le=n.get(be);if(be.version!==Le.__version||_e===!0){t.activeTexture(33984+K),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const D=b(S)&&y(S.image)===!1;let q=v(S.image,D,!1,h);q=Te(S,q);const Me=y(q)||o,we=r.convert(S.format,S.encoding);let Se=r.convert(S.type),Ae=x(S.internalFormat,we,Se,S.encoding,S.isVideoTexture);M(me,S,Me);let Ce;const Oe=S.mipmaps,ze=o&&S.isVideoTexture!==!0,qe=Le.__version===void 0||_e===!0,G=E(S,q,Me);if(S.isDepthTexture)Ae=6402,o?S.type===An?Ae=36012:S.type===En?Ae=33190:S.type===ai?Ae=35056:Ae=33189:S.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Pn&&Ae===6402&&S.type!==Pa&&S.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=En,Se=r.convert(S.type)),S.format===fi&&Ae===6402&&(Ae=34041,S.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ai,Se=r.convert(S.type))),qe&&(ze?t.texStorage2D(3553,1,Ae,q.width,q.height):t.texImage2D(3553,0,Ae,q.width,q.height,0,we,Se,null));else if(S.isDataTexture)if(Oe.length>0&&Me){ze&&qe&&t.texStorage2D(3553,G,Ae,Oe[0].width,Oe[0].height);for(let le=0,xe=Oe.length;le<xe;le++)Ce=Oe[le],ze?t.texSubImage2D(3553,le,0,0,Ce.width,Ce.height,we,Se,Ce.data):t.texImage2D(3553,le,Ae,Ce.width,Ce.height,0,we,Se,Ce.data);S.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,G,Ae,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,we,Se,q.data)):t.texImage2D(3553,0,Ae,q.width,q.height,0,we,Se,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(35866,G,Ae,Oe[0].width,Oe[0].height,q.depth);for(let le=0,xe=Oe.length;le<xe;le++)Ce=Oe[le],S.format!==Ot?we!==null?ze?t.compressedTexSubImage3D(35866,le,0,0,0,Ce.width,Ce.height,q.depth,we,Ce.data,0,0):t.compressedTexImage3D(35866,le,Ae,Ce.width,Ce.height,q.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,le,0,0,0,Ce.width,Ce.height,q.depth,we,Se,Ce.data):t.texImage3D(35866,le,Ae,Ce.width,Ce.height,q.depth,0,we,Se,Ce.data)}else{ze&&qe&&t.texStorage2D(3553,G,Ae,Oe[0].width,Oe[0].height);for(let le=0,xe=Oe.length;le<xe;le++)Ce=Oe[le],S.format!==Ot?we!==null?ze?t.compressedTexSubImage2D(3553,le,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(3553,le,Ae,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,le,0,0,Ce.width,Ce.height,we,Se,Ce.data):t.texImage2D(3553,le,Ae,Ce.width,Ce.height,0,we,Se,Ce.data)}else if(S.isDataArrayTexture)ze?(qe&&t.texStorage3D(35866,G,Ae,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,we,Se,q.data)):t.texImage3D(35866,0,Ae,q.width,q.height,q.depth,0,we,Se,q.data);else if(S.isData3DTexture)ze?(qe&&t.texStorage3D(32879,G,Ae,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,we,Se,q.data)):t.texImage3D(32879,0,Ae,q.width,q.height,q.depth,0,we,Se,q.data);else if(S.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(3553,G,Ae,q.width,q.height);else{let le=q.width,xe=q.height;for(let Ee=0;Ee<G;Ee++)t.texImage2D(3553,Ee,Ae,le,xe,0,we,Se,null),le>>=1,xe>>=1}}else if(Oe.length>0&&Me){ze&&qe&&t.texStorage2D(3553,G,Ae,Oe[0].width,Oe[0].height);for(let le=0,xe=Oe.length;le<xe;le++)Ce=Oe[le],ze?t.texSubImage2D(3553,le,0,0,we,Se,Ce):t.texImage2D(3553,le,Ae,we,Se,Ce);S.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,G,Ae,q.width,q.height),t.texSubImage2D(3553,0,0,0,we,Se,q)):t.texImage2D(3553,0,Ae,we,Se,q);R(S,Me)&&I(me),Le.__version=be.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function re(P,S,K){if(S.image.length!==6)return;const me=w(P,S),_e=S.source;t.bindTexture(34067,P.__webglTexture,33984+K);const be=n.get(_e);if(_e.version!==be.__version||me===!0){t.activeTexture(33984+K),s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,q=[];for(let le=0;le<6;le++)!Le&&!D?q[le]=v(S.image[le],!1,!0,l):q[le]=D?S.image[le].image:S.image[le],q[le]=Te(S,q[le]);const Me=q[0],we=y(Me)||o,Se=r.convert(S.format,S.encoding),Ae=r.convert(S.type),Ce=x(S.internalFormat,Se,Ae,S.encoding),Oe=o&&S.isVideoTexture!==!0,ze=be.__version===void 0||me===!0;let qe=E(S,Me,we);M(34067,S,we);let G;if(Le){Oe&&ze&&t.texStorage2D(34067,qe,Ce,Me.width,Me.height);for(let le=0;le<6;le++){G=q[le].mipmaps;for(let xe=0;xe<G.length;xe++){const Ee=G[xe];S.format!==Ot?Se!==null?Oe?t.compressedTexSubImage2D(34069+le,xe,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(34069+le,xe,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+le,xe,0,0,Ee.width,Ee.height,Se,Ae,Ee.data):t.texImage2D(34069+le,xe,Ce,Ee.width,Ee.height,0,Se,Ae,Ee.data)}}}else{G=S.mipmaps,Oe&&ze&&(G.length>0&&qe++,t.texStorage2D(34067,qe,Ce,q[0].width,q[0].height));for(let le=0;le<6;le++)if(D){Oe?t.texSubImage2D(34069+le,0,0,0,q[le].width,q[le].height,Se,Ae,q[le].data):t.texImage2D(34069+le,0,Ce,q[le].width,q[le].height,0,Se,Ae,q[le].data);for(let xe=0;xe<G.length;xe++){const Pe=G[xe].image[le].image;Oe?t.texSubImage2D(34069+le,xe+1,0,0,Pe.width,Pe.height,Se,Ae,Pe.data):t.texImage2D(34069+le,xe+1,Ce,Pe.width,Pe.height,0,Se,Ae,Pe.data)}}else{Oe?t.texSubImage2D(34069+le,0,0,0,Se,Ae,q[le]):t.texImage2D(34069+le,0,Ce,Se,Ae,q[le]);for(let xe=0;xe<G.length;xe++){const Ee=G[xe];Oe?t.texSubImage2D(34069+le,xe+1,0,0,Se,Ae,Ee.image[le]):t.texImage2D(34069+le,xe+1,Ce,Se,Ae,Ee.image[le])}}}R(S,we)&&I(34067),be.__version=_e.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function k(P,S,K,me,_e){const be=r.convert(K.format,K.encoding),Le=r.convert(K.type),D=x(K.internalFormat,be,Le,K.encoding);n.get(S).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,D,S.width,S.height,S.depth,0,be,Le,null):t.texImage2D(_e,0,D,S.width,S.height,0,be,Le,null)),t.bindFramebuffer(36160,P),C(S)?d.framebufferTexture2DMultisampleEXT(36160,me,_e,n.get(K).__webglTexture,0,O(S)):(_e===3553||_e>=34069&&_e<=34074)&&s.framebufferTexture2D(36160,me,_e,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function ue(P,S,K){if(s.bindRenderbuffer(36161,P),S.depthBuffer&&!S.stencilBuffer){let me=33189;if(K||C(S)){const _e=S.depthTexture;_e&&_e.isDepthTexture&&(_e.type===An?me=36012:_e.type===En&&(me=33190));const be=O(S);C(S)?d.renderbufferStorageMultisampleEXT(36161,be,me,S.width,S.height):s.renderbufferStorageMultisample(36161,be,me,S.width,S.height)}else s.renderbufferStorage(36161,me,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,P)}else if(S.depthBuffer&&S.stencilBuffer){const me=O(S);K&&C(S)===!1?s.renderbufferStorageMultisample(36161,me,35056,S.width,S.height):C(S)?d.renderbufferStorageMultisampleEXT(36161,me,35056,S.width,S.height):s.renderbufferStorage(36161,34041,S.width,S.height),s.framebufferRenderbuffer(36160,33306,36161,P)}else{const me=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let _e=0;_e<me.length;_e++){const be=me[_e],Le=r.convert(be.format,be.encoding),D=r.convert(be.type),q=x(be.internalFormat,Le,D,be.encoding),Me=O(S);K&&C(S)===!1?s.renderbufferStorageMultisample(36161,Me,q,S.width,S.height):C(S)?d.renderbufferStorageMultisampleEXT(36161,Me,q,S.width,S.height):s.renderbufferStorage(36161,q,S.width,S.height)}}s.bindRenderbuffer(36161,null)}function H(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ce(S.depthTexture,0);const me=n.get(S.depthTexture).__webglTexture,_e=O(S);if(S.depthTexture.format===Pn)C(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,me,0,_e):s.framebufferTexture2D(36160,36096,3553,me,0);else if(S.depthTexture.format===fi)C(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,me,0,_e):s.framebufferTexture2D(36160,33306,3553,me,0);else throw new Error("Unknown depthTexture format")}function W(P){const S=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");H(S.__webglFramebuffer,P)}else if(K){S.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(36160,S.__webglFramebuffer[me]),S.__webglDepthbuffer[me]=s.createRenderbuffer(),ue(S.__webglDepthbuffer[me],P,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),ue(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function B(P,S,K){const me=n.get(P);S!==void 0&&k(me.__webglFramebuffer,P,P.texture,36064,3553),K!==void 0&&W(P)}function ee(P){const S=P.texture,K=n.get(P),me=n.get(S);P.addEventListener("dispose",Q),P.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=S.version,a.memory.textures++);const _e=P.isWebGLCubeRenderTarget===!0,be=P.isWebGLMultipleRenderTargets===!0,Le=y(P)||o;if(_e){K.__webglFramebuffer=[];for(let D=0;D<6;D++)K.__webglFramebuffer[D]=s.createFramebuffer()}else{if(K.__webglFramebuffer=s.createFramebuffer(),be)if(i.drawBuffers){const D=P.texture;for(let q=0,Me=D.length;q<Me;q++){const we=n.get(D[q]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&C(P)===!1){const D=be?S:[S];K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer);for(let q=0;q<D.length;q++){const Me=D[q];K.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(36161,K.__webglColorRenderbuffer[q]);const we=r.convert(Me.format,Me.encoding),Se=r.convert(Me.type),Ae=x(Me.internalFormat,we,Se,Me.encoding,P.isXRRenderTarget===!0),Ce=O(P);s.renderbufferStorageMultisample(36161,Ce,Ae,P.width,P.height),s.framebufferRenderbuffer(36160,36064+q,36161,K.__webglColorRenderbuffer[q])}s.bindRenderbuffer(36161,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,me.__webglTexture),M(34067,S,Le);for(let D=0;D<6;D++)k(K.__webglFramebuffer[D],P,S,36064,34069+D);R(S,Le)&&I(34067),t.unbindTexture()}else if(be){const D=P.texture;for(let q=0,Me=D.length;q<Me;q++){const we=D[q],Se=n.get(we);t.bindTexture(3553,Se.__webglTexture),M(3553,we,Le),k(K.__webglFramebuffer,P,we,36064+q,3553),R(we,Le)&&I(3553)}t.unbindTexture()}else{let D=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?D=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,me.__webglTexture),M(D,S,Le),k(K.__webglFramebuffer,P,S,36064,D),R(S,Le)&&I(D),t.unbindTexture()}P.depthBuffer&&W(P)}function ie(P){const S=y(P)||o,K=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let me=0,_e=K.length;me<_e;me++){const be=K[me];if(R(be,S)){const Le=P.isWebGLCubeRenderTarget?34067:3553,D=n.get(be).__webglTexture;t.bindTexture(Le,D),I(Le),t.unbindTexture()}}}function pe(P){if(o&&P.samples>0&&C(P)===!1){const S=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],K=P.width,me=P.height;let _e=16384;const be=[],Le=P.stencilBuffer?33306:36096,D=n.get(P),q=P.isWebGLMultipleRenderTargets===!0;if(q)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){be.push(36064+Me),P.depthBuffer&&be.push(Le);const we=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(we===!1&&(P.depthBuffer&&(_e|=256),P.stencilBuffer&&(_e|=1024)),q&&s.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[Me]),we===!0&&(s.invalidateFramebuffer(36008,[Le]),s.invalidateFramebuffer(36009,[Le])),q){const Se=n.get(S[Me]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Se,0)}s.blitFramebuffer(0,0,K,me,0,0,K,me,_e,9728),p&&s.invalidateFramebuffer(36008,be)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Me,36161,D.__webglColorRenderbuffer[Me]);const we=n.get(S[Me]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Me,3553,we,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function O(P){return Math.min(u,P.samples)}function C(P){const S=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ve(P){const S=a.render.frame;g.get(P)!==S&&(g.set(P,S),P.update())}function Te(P,S){const K=P.encoding,me=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===xr||K!==In&&(K===je?o===!1?e.has("EXT_sRGB")===!0&&me===Ot?(P.format=xr,P.minFilter=Pt,P.generateMipmaps=!1):S=Da.sRGBToLinear(S):(me!==Ot||_e!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",K)),S}this.allocateTextureUnit=U,this.resetTextureUnits=J,this.setTexture2D=ce,this.setTexture2DArray=ne,this.setTexture3D=se,this.setTextureCube=ge,this.rebindTextures=B,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=k,this.useMultisampledRTT=C}function gp(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===Dn)return 5121;if(r===jl)return 32819;if(r===Zl)return 32820;if(r===ql)return 5120;if(r===Xl)return 5122;if(r===Pa)return 5123;if(r===Yl)return 5124;if(r===En)return 5125;if(r===An)return 5126;if(r===Pi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Jl)return 6406;if(r===Ot)return 6408;if(r===$l)return 6409;if(r===Ql)return 6410;if(r===Pn)return 6402;if(r===fi)return 34041;if(r===Kl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===xr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ec)return 6403;if(r===tc)return 36244;if(r===nc)return 33319;if(r===ic)return 33320;if(r===sc)return 36249;if(r===Ds||r===Is||r===Ns||r===Fs)if(a===je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ds)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ds)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Is)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kr||r===$r||r===Qr||r===eo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Kr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$r)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===to||r===no)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===to)return a===je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===no)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===io||r===so||r===ro||r===oo||r===ao||r===lo||r===co||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===_o)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===io)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===so)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ro)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oo)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ao)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lo)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===co)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ho)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uo)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fo)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===po)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mo)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===go)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_o)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===xo)return a===je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ai?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class _p extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n),_=this._getHandJoint(l,m);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vp extends vt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Pn,h!==Pn&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pn&&(n=En),n===void 0&&h===fi&&(n=ai),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=c!==void 0?c:xt,this.flipY=!1,this.generateMipmaps=!1}}class yp extends On{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=null,l=null,h=null,u=null,d=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],T=[],v=new Set,y=new Map,b=new Lt;b.layers.enable(1),b.viewport=new ht;const R=new Lt;R.layers.enable(2),R.viewport=new ht;const I=[b,R],x=new _p;x.layers.enable(1),x.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let se=_[ne];return se===void 0&&(se=new lr,_[ne]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ne){let se=_[ne];return se===void 0&&(se=new lr,_[ne]=se),se.getGripSpace()},this.getHand=function(ne){let se=_[ne];return se===void 0&&(se=new lr,_[ne]=se),se.getHandSpace()};function Z(ne){const se=T.indexOf(ne.inputSource);if(se===-1)return;const ge=_[se];ge!==void 0&&ge.dispatchEvent({type:ne.type,data:ne.inputSource})}function Q(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",Y);for(let ne=0;ne<_.length;ne++){const se=T[ne];se!==null&&(T[ne]=null,_[ne].disconnect(se))}E=null,F=null,e.setRenderTarget(m),d=null,u=null,h=null,i=null,f=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),f=new fn(d.framebufferWidth,d.framebufferHeight,{format:Ot,type:Dn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let se=null,ge=null,N=null;g.depth&&(N=g.stencil?35056:33190,se=g.stencil?fi:Pn,ge=g.stencil?ai:En);const L={colorFormat:32856,depthFormat:N,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(L),i.updateRenderState({layers:[u]}),f=new fn(u.textureWidth,u.textureHeight,{format:Ot,type:Dn,depthTexture:new vp(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const M=e.properties.get(f);M.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(ne){for(let se=0;se<ne.removed.length;se++){const ge=ne.removed[se],N=T.indexOf(ge);N>=0&&(T[N]=null,_[N].disconnect(ge))}for(let se=0;se<ne.added.length;se++){const ge=ne.added[se];let N=T.indexOf(ge);if(N===-1){for(let M=0;M<_.length;M++)if(M>=T.length){T.push(ge),N=M;break}else if(T[M]===null){T[M]=ge,N=M;break}if(N===-1)break}const L=_[N];L&&L.connect(ge)}}const z=new V,te=new V;function ae(ne,se,ge){z.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);const N=z.distanceTo(te),L=se.projectionMatrix.elements,M=ge.projectionMatrix.elements,w=L[14]/(L[10]-1),X=L[14]/(L[10]+1),re=(L[9]+1)/L[5],k=(L[9]-1)/L[5],ue=(L[8]-1)/L[0],H=(M[8]+1)/M[0],W=w*ue,B=w*H,ee=N/(-ue+H),ie=ee*-ue;se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ie),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const pe=w+ee,O=X+ee,C=W-ie,ve=B+(N-ie),Te=re*X/O*pe,P=k*X/O*pe;ne.projectionMatrix.makePerspective(C,ve,Te,P,pe,O)}function J(ne,se){se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;x.near=R.near=b.near=ne.near,x.far=R.far=b.far=ne.far,(E!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,F=x.far);const se=ne.parent,ge=x.cameras;J(x,se);for(let L=0;L<ge.length;L++)J(ge[L],se);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),ne.matrix.copy(x.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale);const N=ne.children;for(let L=0,M=N.length;L<M;L++)N[L].updateMatrixWorld(!0);ge.length===2?ae(x,b,R):x.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(ne){u!==null&&(u.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.getPlanes=function(){return v};let U=null;function de(ne,se){if(l=se.getViewerPose(c||a),p=se,l!==null){const ge=l.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let N=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,N=!0);for(let L=0;L<ge.length;L++){const M=ge[L];let w=null;if(d!==null)w=d.getViewport(M);else{const re=h.getViewSubImage(u,M);w=re.viewport,L===0&&(e.setRenderTargetTextures(f,re.colorTexture,u.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(f))}let X=I[L];X===void 0&&(X=new Lt,X.layers.enable(L),X.viewport=new ht,I[L]=X),X.matrix.fromArray(M.transform.matrix),X.projectionMatrix.fromArray(M.projectionMatrix),X.viewport.set(w.x,w.y,w.width,w.height),L===0&&x.matrix.copy(X.matrix),N===!0&&x.cameras.push(X)}}for(let ge=0;ge<_.length;ge++){const N=T[ge],L=_[ge];N!==null&&L!==void 0&&L.update(N,se,c||a)}if(U&&U(ne,se),se.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:se.detectedPlanes});let ge=null;for(const N of v)se.detectedPlanes.has(N)||(ge===null&&(ge=[]),ge.push(N));if(ge!==null)for(const N of ge)v.delete(N),y.delete(N),n.dispatchEvent({type:"planeremoved",data:N});for(const N of se.detectedPlanes)if(!v.has(N))v.add(N),y.set(N,se.lastChangedTime),n.dispatchEvent({type:"planeadded",data:N});else{const L=y.get(N);N.lastChangedTime>L&&(y.set(N,N.lastChangedTime),n.dispatchEvent({type:"planechanged",data:N}))}}p=null}const ce=new Ha;ce.setAnimationLoop(de),this.setAnimationLoop=function(ne){U=ne},this.dispose=function(){}}}function bp(s,e){function t(m,f){f.color.getRGB(m.fogColor.value,Ua(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,T,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),l(m,f)):f.isMeshStandardMaterial?(i(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?o(m,f,_,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Rt&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Rt&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let T;f.map?T=f.map:f.specularMap?T=f.specularMap:f.displacementMap?T=f.displacementMap:f.normalMap?T=f.normalMap:f.bumpMap?T=f.bumpMap:f.roughnessMap?T=f.roughnessMap:f.metalnessMap?T=f.metalnessMap:f.alphaMap?T=f.alphaMap:f.emissiveMap?T=f.emissiveMap:f.clearcoatMap?T=f.clearcoatMap:f.clearcoatNormalMap?T=f.clearcoatNormalMap:f.clearcoatRoughnessMap?T=f.clearcoatRoughnessMap:f.iridescenceMap?T=f.iridescenceMap:f.iridescenceThicknessMap?T=f.iridescenceThicknessMap:f.specularIntensityMap?T=f.specularIntensityMap:f.specularColorMap?T=f.specularColorMap:f.transmissionMap?T=f.transmissionMap:f.thicknessMap?T=f.thicknessMap:f.sheenColorMap?T=f.sheenColorMap:f.sheenRoughnessMap&&(T=f.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,_,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=T*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Rt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Mp(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function c(T,v){const y=v.program;n.uniformBlockBinding(T,y)}function l(T,v){let y=i[T.id];y===void 0&&(g(T),y=h(T),i[T.id]=y,T.addEventListener("dispose",f));const b=v.program;n.updateUBOMapping(T,b);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const v=u();T.__bindingPointIndex=v;const y=s.createBuffer(),b=T.__size,R=T.usage;return s.bindBuffer(35345,y),s.bufferData(35345,b,R),s.bindBuffer(35345,null),s.bindBufferBase(35345,v,y),y}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const v=i[T.id],y=T.uniforms,b=T.__cache;s.bindBuffer(35345,v);for(let R=0,I=y.length;R<I;R++){const x=y[R];if(p(x,R,b)===!0){const E=x.value,F=x.__offset;typeof E=="number"?(x.__data[0]=E,s.bufferSubData(35345,F,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):E.toArray(x.__data),s.bufferSubData(35345,F,x.__data))}}s.bindBuffer(35345,null)}function p(T,v,y){const b=T.value;if(y[v]===void 0)return typeof b=="number"?y[v]=b:y[v]=b.clone(),!0;if(typeof b=="number"){if(y[v]!==b)return y[v]=b,!0}else{const R=y[v];if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(T){const v=T.uniforms;let y=0;const b=16;let R=0;for(let I=0,x=v.length;I<x;I++){const E=v[I],F=m(E);if(E.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,I>0){R=y%b;const Z=b-R;R!==0&&Z-F.boundary<0&&(y+=b-R,E.__offset=y)}y+=F.storage}return R=y%b,R>0&&(y+=b-R),T.__size=y,T.__cache={},this}function m(T){const v=T.value,y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function f(T){const v=T.target;v.removeEventListener("dispose",f);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function _(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:c,update:l,dispose:_}}function Sp(){const s=Ri("canvas");return s.style.display="block",s}function ja(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Sp(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=In,this.physicallyCorrectLights=!1,this.toneMapping=$t,this.toneMappingExposure=1;const m=this;let f=!1,_=0,T=0,v=null,y=-1,b=null;const R=new ht,I=new ht;let x=null,E=e.width,F=e.height,Z=1,Q=null,Y=null;const z=new ht(0,0,E,F),te=new ht(0,0,E,F);let ae=!1;const J=new Va;let U=!1,de=!1,ce=null;const ne=new et,se=new fe,ge=new V,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function L(){return v===null?Z:1}let M=t;function w(A,$){for(let oe=0;oe<A.length;oe++){const j=A[oe],he=e.getContext(j,$);if(he!==null)return he}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Er}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),M===null){const $=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&$.shift(),M=w($,A),M===null)throw w($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let X,re,k,ue,H,W,B,ee,ie,pe,O,C,ve,Te,P,S,K,me,_e,be,Le,D,q,Me;function we(){X=new Nf(M),re=new Cf(M,X,s),X.init(re),D=new gp(M,X,re),k=new pp(M,X,re),ue=new zf,H=new ep,W=new mp(M,X,k,H,re,D,ue),B=new Lf(m),ee=new If(m),ie=new qc(M,re),q=new Ef(M,X,ie,re),pe=new Ff(M,ie,ue,q),O=new Gf(M,pe,ie,ue),_e=new Bf(M,re,W),S=new Pf(H),C=new Qd(m,B,ee,X,re,q,S),ve=new bp(m,H),Te=new np,P=new lp(X,re),me=new Tf(m,B,ee,k,O,h,a),K=new dp(m,O,re),Me=new Mp(M,ue,re,k),be=new Af(M,X,ue,re),Le=new Of(M,X,ue,re),ue.programs=C.programs,m.capabilities=re,m.extensions=X,m.properties=H,m.renderLists=Te,m.shadowMap=K,m.state=k,m.info=ue}we();const Se=new yp(m,M);this.xr=Se,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=X.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=X.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(E,F,!1))},this.getSize=function(A){return A.set(E,F)},this.setSize=function(A,$,oe){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,F=$,e.width=Math.floor(A*Z),e.height=Math.floor($*Z),oe!==!1&&(e.style.width=A+"px",e.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(E*Z,F*Z).floor()},this.setDrawingBufferSize=function(A,$,oe){E=A,F=$,Z=oe,e.width=Math.floor(A*oe),e.height=Math.floor($*oe),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,$,oe,j){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,$,oe,j),k.viewport(R.copy(z).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,$,oe,j){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,$,oe,j),k.scissor(I.copy(te).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){k.setScissorTest(ae=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(A=!0,$=!0,oe=!0){let j=0;A&&(j|=16384),$&&(j|=256),oe&&(j|=1024),M.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),Te.dispose(),P.dispose(),H.dispose(),B.dispose(),ee.dispose(),O.dispose(),q.dispose(),Me.dispose(),C.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ee),Se.removeEventListener("sessionend",Pe),ce&&(ce.dispose(),ce=null),Ve.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const A=ue.autoReset,$=K.enabled,oe=K.autoUpdate,j=K.needsUpdate,he=K.type;we(),ue.autoReset=A,K.enabled=$,K.autoUpdate=oe,K.needsUpdate=j,K.type=he}function Oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const $=A.target;$.removeEventListener("dispose",ze),qe($)}function qe(A){G(A),H.remove(A)}function G(A){const $=H.get(A).programs;$!==void 0&&($.forEach(function(oe){C.releaseProgram(oe)}),A.isShaderMaterial&&C.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,oe,j,he,Re){$===null&&($=N);const De=he.isMesh&&he.matrixWorld.determinant()<0,Ne=ll(A,$,oe,j,he);k.setMaterial(j,De);let Fe=oe.index,Ge=1;j.wireframe===!0&&(Fe=pe.getWireframeAttribute(oe),Ge=2);const Ue=oe.drawRange,ke=oe.attributes.position;let Ke=Ue.start*Ge,bt=(Ue.start+Ue.count)*Ge;Re!==null&&(Ke=Math.max(Ke,Re.start*Ge),bt=Math.min(bt,(Re.start+Re.count)*Ge)),Fe!==null?(Ke=Math.max(Ke,0),bt=Math.min(bt,Fe.count)):ke!=null&&(Ke=Math.max(Ke,0),bt=Math.min(bt,ke.count));const Ht=bt-Ke;if(Ht<0||Ht===1/0)return;q.setup(he,j,Ne,oe,Fe);let mn,$e=be;if(Fe!==null&&(mn=ie.get(Fe),$e=Le,$e.setIndex(mn)),he.isMesh)j.wireframe===!0?(k.setLineWidth(j.wireframeLinewidth*L()),$e.setMode(1)):$e.setMode(4);else if(he.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),k.setLineWidth(Be*L()),he.isLineSegments?$e.setMode(1):he.isLineLoop?$e.setMode(2):$e.setMode(3)}else he.isPoints?$e.setMode(0):he.isSprite&&$e.setMode(4);if(he.isInstancedMesh)$e.renderInstances(Ke,Ht,he.count);else if(oe.isInstancedBufferGeometry){const Be=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Cs=Math.min(oe.instanceCount,Be);$e.renderInstances(Ke,Ht,Cs)}else $e.render(Ke,Ht)},this.compile=function(A,$){function oe(j,he,Re){j.transparent===!0&&j.side===cn?(j.side=Rt,j.needsUpdate=!0,At(j,he,Re),j.side=ci,j.needsUpdate=!0,At(j,he,Re),j.side=cn):At(j,he,Re)}d=P.get(A),d.init(),g.push(d),A.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights(m.physicallyCorrectLights),A.traverse(function(j){const he=j.material;if(he)if(Array.isArray(he))for(let Re=0;Re<he.length;Re++){const De=he[Re];oe(De,A,j)}else oe(he,A,j)}),g.pop(),d=null};let le=null;function xe(A){le&&le(A)}function Ee(){Ve.stop()}function Pe(){Ve.start()}const Ve=new Ha;Ve.setAnimationLoop(xe),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(A){le=A,Se.setAnimationLoop(A),A===null?Ve.stop():Ve.start()},Se.addEventListener("sessionstart",Ee),Se.addEventListener("sessionend",Pe),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera($),$=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,$,v),d=P.get(A,g.length),d.init(),g.push(d),ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),J.setFromProjectionMatrix(ne),de=this.localClippingEnabled,U=S.init(this.clippingPlanes,de,$),u=Te.get(A,p.length),u.init(),p.push(u),rt(A,$,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Q,Y),U===!0&&S.beginShadows();const oe=d.state.shadowsArray;if(K.render(oe,A,$),U===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(u,A),d.setupLights(m.physicallyCorrectLights),$.isArrayCamera){const j=$.cameras;for(let he=0,Re=j.length;he<Re;he++){const De=j[he];ft(u,A,De,De.viewport)}}else ft(u,A,$);v!==null&&(W.updateMultisampleRenderTarget(v),W.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(m,A,$),q.resetDefaultState(),y=-1,b=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function rt(A,$,oe,j){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){j&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const De=O.update(A),Ne=A.material;Ne.visible&&u.push(A,De,Ne,oe,ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ue.render.frame&&(A.skeleton.update(),A.skeleton.frame=ue.render.frame),!A.frustumCulled||J.intersectsObject(A))){j&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const De=O.update(A),Ne=A.material;if(Array.isArray(Ne)){const Fe=De.groups;for(let Ge=0,Ue=Fe.length;Ge<Ue;Ge++){const ke=Fe[Ge],Ke=Ne[ke.materialIndex];Ke&&Ke.visible&&u.push(A,De,Ke,oe,ge.z,ke)}}else Ne.visible&&u.push(A,De,Ne,oe,ge.z,null)}}const Re=A.children;for(let De=0,Ne=Re.length;De<Ne;De++)rt(Re[De],$,oe,j)}function ft(A,$,oe,j){const he=A.opaque,Re=A.transmissive,De=A.transparent;d.setupLightsView(oe),Re.length>0&&pn(he,$,oe),j&&k.viewport(R.copy(j)),he.length>0&&Ye(he,$,oe),Re.length>0&&Ye(Re,$,oe),De.length>0&&Ye(De,$,oe),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function pn(A,$,oe){const j=re.isWebGL2;ce===null&&(ce=new fn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Pi:Dn,minFilter:vs,samples:j&&r===!0?4:0})),m.getDrawingBufferSize(se),j?ce.setSize(se.x,se.y):ce.setSize(ms(se.x),ms(se.y));const he=m.getRenderTarget();m.setRenderTarget(ce),m.clear();const Re=m.toneMapping;m.toneMapping=$t,Ye(A,$,oe),m.toneMapping=Re,W.updateMultisampleRenderTarget(ce),W.updateRenderTargetMipmap(ce),m.setRenderTarget(he)}function Ye(A,$,oe){const j=$.isScene===!0?$.overrideMaterial:null;for(let he=0,Re=A.length;he<Re;he++){const De=A[he],Ne=De.object,Fe=De.geometry,Ge=j===null?De.material:j,Ue=De.group;Ne.layers.test(oe.layers)&&Vt(Ne,$,oe,Fe,Ge,Ue)}}function Vt(A,$,oe,j,he,Re){A.onBeforeRender(m,$,oe,j,he,Re),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),he.onBeforeRender(m,$,oe,j,A,Re),he.transparent===!0&&he.side===cn?(he.side=Rt,he.needsUpdate=!0,m.renderBufferDirect(oe,$,j,he,A,Re),he.side=ci,he.needsUpdate=!0,m.renderBufferDirect(oe,$,j,he,A,Re),he.side=cn):m.renderBufferDirect(oe,$,j,he,A,Re),A.onAfterRender(m,$,oe,j,he,Re)}function At(A,$,oe){$.isScene!==!0&&($=N);const j=H.get(A),he=d.state.lights,Re=d.state.shadowsArray,De=he.state.version,Ne=C.getParameters(A,he.state,Re,$,oe),Fe=C.getProgramCacheKey(Ne);let Ge=j.programs;j.environment=A.isMeshStandardMaterial?$.environment:null,j.fog=$.fog,j.envMap=(A.isMeshStandardMaterial?ee:B).get(A.envMap||j.environment),Ge===void 0&&(A.addEventListener("dispose",ze),Ge=new Map,j.programs=Ge);let Ue=Ge.get(Fe);if(Ue!==void 0){if(j.currentProgram===Ue&&j.lightsStateVersion===De)return Br(A,Ne),Ue}else Ne.uniforms=C.getUniforms(A),A.onBuild(oe,Ne,m),A.onBeforeCompile(Ne,m),Ue=C.acquireProgram(Ne,Fe),Ge.set(Fe,Ue),j.uniforms=Ne.uniforms;const ke=j.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=S.uniform),Br(A,Ne),j.needsLights=hl(A),j.lightsStateVersion=De,j.needsLights&&(ke.ambientLightColor.value=he.state.ambient,ke.lightProbe.value=he.state.probe,ke.directionalLights.value=he.state.directional,ke.directionalLightShadows.value=he.state.directionalShadow,ke.spotLights.value=he.state.spot,ke.spotLightShadows.value=he.state.spotShadow,ke.rectAreaLights.value=he.state.rectArea,ke.ltc_1.value=he.state.rectAreaLTC1,ke.ltc_2.value=he.state.rectAreaLTC2,ke.pointLights.value=he.state.point,ke.pointLightShadows.value=he.state.pointShadow,ke.hemisphereLights.value=he.state.hemi,ke.directionalShadowMap.value=he.state.directionalShadowMap,ke.directionalShadowMatrix.value=he.state.directionalShadowMatrix,ke.spotShadowMap.value=he.state.spotShadowMap,ke.spotLightMatrix.value=he.state.spotLightMatrix,ke.spotLightMap.value=he.state.spotLightMap,ke.pointShadowMap.value=he.state.pointShadowMap,ke.pointShadowMatrix.value=he.state.pointShadowMatrix);const Ke=Ue.getUniforms(),bt=fs.seqWithValue(Ke.seq,ke);return j.currentProgram=Ue,j.uniformsList=bt,Ue}function Br(A,$){const oe=H.get(A);oe.outputEncoding=$.outputEncoding,oe.instancing=$.instancing,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function ll(A,$,oe,j,he){$.isScene!==!0&&($=N),W.resetTextureUnits();const Re=$.fog,De=j.isMeshStandardMaterial?$.environment:null,Ne=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:In,Fe=(j.isMeshStandardMaterial?ee:B).get(j.envMap||De),Ge=j.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ue=!!j.normalMap&&!!oe.attributes.tangent,ke=!!oe.morphAttributes.position,Ke=!!oe.morphAttributes.normal,bt=!!oe.morphAttributes.color,Ht=j.toneMapped?m.toneMapping:$t,mn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,$e=mn!==void 0?mn.length:0,Be=H.get(j),Cs=d.state.lights;if(U===!0&&(de===!0||A!==b)){const Mt=A===b&&j.id===y;S.setState(j,A,Mt)}let ot=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Cs.state.version||Be.outputEncoding!==Ne||he.isInstancedMesh&&Be.instancing===!1||!he.isInstancedMesh&&Be.instancing===!0||he.isSkinnedMesh&&Be.skinning===!1||!he.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Fe||j.fog===!0&&Be.fog!==Re||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==S.numPlanes||Be.numIntersection!==S.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==Ue||Be.morphTargets!==ke||Be.morphNormals!==Ke||Be.morphColors!==bt||Be.toneMapping!==Ht||re.isWebGL2===!0&&Be.morphTargetsCount!==$e)&&(ot=!0):(ot=!0,Be.__version=j.version);let gn=Be.currentProgram;ot===!0&&(gn=At(j,$,he));let Gr=!1,mi=!1,Ps=!1;const pt=gn.getUniforms(),_n=Be.uniforms;if(k.useProgram(gn.program)&&(Gr=!0,mi=!0,Ps=!0),j.id!==y&&(y=j.id,mi=!0),Gr||b!==A){if(pt.setValue(M,"projectionMatrix",A.projectionMatrix),re.logarithmicDepthBuffer&&pt.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),b!==A&&(b=A,mi=!0,Ps=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const Mt=pt.map.cameraPosition;Mt!==void 0&&Mt.setValue(M,ge.setFromMatrixPosition(A.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||he.isSkinnedMesh)&&pt.setValue(M,"viewMatrix",A.matrixWorldInverse)}if(he.isSkinnedMesh){pt.setOptional(M,he,"bindMatrix"),pt.setOptional(M,he,"bindMatrixInverse");const Mt=he.skeleton;Mt&&(re.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),pt.setValue(M,"boneTexture",Mt.boneTexture,W),pt.setValue(M,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ls=oe.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0&&re.isWebGL2===!0)&&_e.update(he,oe,j,gn),(mi||Be.receiveShadow!==he.receiveShadow)&&(Be.receiveShadow=he.receiveShadow,pt.setValue(M,"receiveShadow",he.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_n.envMap.value=Fe,_n.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),mi&&(pt.setValue(M,"toneMappingExposure",m.toneMappingExposure),Be.needsLights&&cl(_n,Ps),Re&&j.fog===!0&&ve.refreshFogUniforms(_n,Re),ve.refreshMaterialUniforms(_n,j,Z,F,ce),fs.upload(M,Be.uniformsList,_n,W)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(fs.upload(M,Be.uniformsList,_n,W),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(M,"center",he.center),pt.setValue(M,"modelViewMatrix",he.modelViewMatrix),pt.setValue(M,"normalMatrix",he.normalMatrix),pt.setValue(M,"modelMatrix",he.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Mt=j.uniformsGroups;for(let Rs=0,ul=Mt.length;Rs<ul;Rs++)if(re.isWebGL2){const Vr=Mt[Rs];Me.update(Vr,gn),Me.bind(Vr,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function cl(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function hl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,$,oe){H.get(A.texture).__webglTexture=$,H.get(A.depthTexture).__webglTexture=oe;const j=H.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=oe===void 0,j.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,$){const oe=H.get(A);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,oe=0){v=A,_=$,T=oe;let j=!0,he=null,Re=!1,De=!1;if(A){const Fe=H.get(A);Fe.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(36160,null),j=!1):Fe.__webglFramebuffer===void 0?W.setupRenderTarget(A):Fe.__hasExternalTextures&&W.rebindTextures(A,H.get(A.texture).__webglTexture,H.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);const Ue=H.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(he=Ue[$],Re=!0):re.isWebGL2&&A.samples>0&&W.useMultisampledRTT(A)===!1?he=H.get(A).__webglMultisampledFramebuffer:he=Ue,R.copy(A.viewport),I.copy(A.scissor),x=A.scissorTest}else R.copy(z).multiplyScalar(Z).floor(),I.copy(te).multiplyScalar(Z).floor(),x=ae;if(k.bindFramebuffer(36160,he)&&re.drawBuffers&&j&&k.drawBuffers(A,he),k.viewport(R),k.scissor(I),k.setScissorTest(x),Re){const Fe=H.get(A.texture);M.framebufferTexture2D(36160,36064,34069+$,Fe.__webglTexture,oe)}else if(De){const Fe=H.get(A.texture),Ge=$||0;M.framebufferTextureLayer(36160,36064,Fe.__webglTexture,oe||0,Ge)}y=-1},this.readRenderTargetPixels=function(A,$,oe,j,he,Re,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){k.bindFramebuffer(36160,Ne);try{const Fe=A.texture,Ge=Fe.format,Ue=Fe.type;if(Ge!==Ot&&D.convert(Ge)!==M.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ue===Pi&&(X.has("EXT_color_buffer_half_float")||re.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ue!==Dn&&D.convert(Ue)!==M.getParameter(35738)&&!(Ue===An&&(re.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-j&&oe>=0&&oe<=A.height-he&&M.readPixels($,oe,j,he,D.convert(Ge),D.convert(Ue),Re)}finally{const Fe=v!==null?H.get(v).__webglFramebuffer:null;k.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(A,$,oe=0){const j=Math.pow(2,-oe),he=Math.floor($.image.width*j),Re=Math.floor($.image.height*j);W.setTexture2D($,0),M.copyTexSubImage2D(3553,oe,0,0,A.x,A.y,he,Re),k.unbindTexture()},this.copyTextureToTexture=function(A,$,oe,j=0){const he=$.image.width,Re=$.image.height,De=D.convert(oe.format),Ne=D.convert(oe.type);W.setTexture2D(oe,0),M.pixelStorei(37440,oe.flipY),M.pixelStorei(37441,oe.premultiplyAlpha),M.pixelStorei(3317,oe.unpackAlignment),$.isDataTexture?M.texSubImage2D(3553,j,A.x,A.y,he,Re,De,Ne,$.image.data):$.isCompressedTexture?M.compressedTexSubImage2D(3553,j,A.x,A.y,$.mipmaps[0].width,$.mipmaps[0].height,De,$.mipmaps[0].data):M.texSubImage2D(3553,j,A.x,A.y,De,Ne,$.image),j===0&&oe.generateMipmaps&&M.generateMipmap(3553),k.unbindTexture()},this.copyTextureToTexture3D=function(A,$,oe,j,he=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,De=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Fe=D.convert(j.format),Ge=D.convert(j.type);let Ue;if(j.isData3DTexture)W.setTexture3D(j,0),Ue=32879;else if(j.isDataArrayTexture)W.setTexture2DArray(j,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(37440,j.flipY),M.pixelStorei(37441,j.premultiplyAlpha),M.pixelStorei(3317,j.unpackAlignment);const ke=M.getParameter(3314),Ke=M.getParameter(32878),bt=M.getParameter(3316),Ht=M.getParameter(3315),mn=M.getParameter(32877),$e=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;M.pixelStorei(3314,$e.width),M.pixelStorei(32878,$e.height),M.pixelStorei(3316,A.min.x),M.pixelStorei(3315,A.min.y),M.pixelStorei(32877,A.min.z),oe.isDataTexture||oe.isData3DTexture?M.texSubImage3D(Ue,he,$.x,$.y,$.z,Re,De,Ne,Fe,Ge,$e.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),M.compressedTexSubImage3D(Ue,he,$.x,$.y,$.z,Re,De,Ne,Fe,$e.data)):M.texSubImage3D(Ue,he,$.x,$.y,$.z,Re,De,Ne,Fe,Ge,$e),M.pixelStorei(3314,ke),M.pixelStorei(32878,Ke),M.pixelStorei(3316,bt),M.pixelStorei(3315,Ht),M.pixelStorei(32877,mn),he===0&&j.generateMipmaps&&M.generateMipmap(Ue),k.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){_=0,T=0,v=null,k.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class wp extends ja{}wp.prototype.isWebGL1Renderer=!0;class Tp extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new fe:new V);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new V,i=[],r=[],a=[],o=new V,c=new et;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new V)}r[0]=new V,a[0]=new V;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ct(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(ct(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dr extends Gt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new fe,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ep extends Dr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ir(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const ss=new V,cr=new Ir,hr=new Ir,ur=new Ir;class Ap extends Gt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new V){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ss.subVectors(i[0],i[1]).add(i[0]),l=ss);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),f<1e-4&&(f=m),cr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,m,f),hr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,m,f),ur.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,m,f)}else this.curveType==="catmullrom"&&(cr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),hr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ur.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(cr.calc(c),hr.calc(c),ur.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new V().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ea(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Cp(s,e){const t=1-s;return t*t*e}function Pp(s,e){return 2*(1-s)*s*e}function Lp(s,e){return s*s*e}function Ei(s,e,t,n){return Cp(s,e)+Pp(s,t)+Lp(s,n)}function Rp(s,e){const t=1-s;return t*t*t*e}function Dp(s,e){const t=1-s;return 3*t*t*s*e}function Ip(s,e){return 3*(1-s)*s*s*e}function Np(s,e){return s*s*s*e}function Ai(s,e,t,n,i){return Rp(s,e)+Dp(s,t)+Ip(s,n)+Np(s,i)}class Za extends Gt{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ai(e,i.x,r.x,a.x,o.x),Ai(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fp extends Gt{constructor(e=new V,t=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ai(e,i.x,r.x,a.x,o.x),Ai(e,i.y,r.y,a.y,o.y),Ai(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nr extends Gt{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new fe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Op extends Gt{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ja extends Gt{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ei(e,i.x,r.x,a.x),Ei(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends Gt{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ei(e,i.x,r.x,a.x),Ei(e,i.y,r.y,a.y),Ei(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ka extends Gt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ea(o,c.x,l.x,h.x,u.x),ea(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var $a=Object.freeze({__proto__:null,ArcCurve:Ep,CatmullRomCurve3:Ap,CubicBezierCurve:Za,CubicBezierCurve3:Fp,EllipseCurve:Dr,LineCurve:Nr,LineCurve3:Op,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:zp,SplineCurve:Ka});class Up extends Gt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Nr(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new $a[i.type]().fromJSON(i))}return this}}class li extends Up{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Nr(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Ja(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Za(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ka(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Dr(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ci extends li{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new li().fromJSON(i))}return this}}const kp={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Qa(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,p;if(n&&(r=Wp(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Di(r,a,t,o,c,p,0),a}};function Qa(s,e,t,n,i){let r,a;if(i===tm(s,e,t,n)>0)for(r=e;r<t;r+=n)a=ta(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=ta(r,s[r],s[r+1],a);return a&&Ms(a,a.next)&&(Ni(a),a=a.next),a}function Fn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ms(t,t.next)||Ze(t.prev,t,t.next)===0)){if(Ni(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Di(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Zp(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Gp(s,n,i,r):Bp(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ni(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Vp(Fn(s),e,t),Di(s,e,t,n,i,r,2)):a===2&&Hp(s,e,t,n,i,r):Di(Fn(s),e,t,n,i,r,1);break}}}function Bp(s){const e=s.prev,t=s,n=s.next;if(Ze(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&si(i,o,r,c,a,l,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gp(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Ze(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,m=o>c?o>l?o:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,_=br(p,g,e,t,n),T=br(m,f,e,t,n);let v=s.prevZ,y=s.nextZ;for(;v&&v.z>=_&&y&&y.z<=T;){if(v.x>=p&&v.x<=m&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&si(o,h,c,u,l,d,v.x,v.y)&&Ze(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=m&&y.y>=g&&y.y<=f&&y!==i&&y!==a&&si(o,h,c,u,l,d,y.x,y.y)&&Ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=_;){if(v.x>=p&&v.x<=m&&v.y>=g&&v.y<=f&&v!==i&&v!==a&&si(o,h,c,u,l,d,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=T;){if(y.x>=p&&y.x<=m&&y.y>=g&&y.y<=f&&y!==i&&y!==a&&si(o,h,c,u,l,d,y.x,y.y)&&Ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vp(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ms(i,r)&&el(i,n,n.next,r)&&Ii(i,r)&&Ii(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ni(n),Ni(n.next),n=s=r),n=n.next}while(n!==s);return Fn(n)}function Hp(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$p(a,o)){let c=tl(a,o);a=Fn(a,a.next),c=Fn(c,c.next),Di(a,e,t,n,i,r,0),Di(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Wp(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Qa(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Kp(l));for(i.sort(qp),r=0;r<i.length;r++)t=Xp(i[r],t);return t}function qp(s,e){return s.x-e.x}function Xp(s,e){const t=Yp(s,e);if(!t)return e;const n=tl(t,s);return Fn(n,n.next),Fn(t,t.next)}function Yp(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&si(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Ii(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&jp(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function jp(s,e){return Ze(s.prev,s,e.prev)<0&&Ze(e.next,s,s.next)<0}function Zp(s,e,t,n){let i=s;do i.z===0&&(i.z=br(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Jp(i)}function Jp(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function br(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Kp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function si(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function $p(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Qp(s,e)&&(Ii(s,e)&&Ii(e,s)&&em(s,e)&&(Ze(s.prev,s,e.prev)||Ze(s,e.prev,e))||Ms(s,e)&&Ze(s.prev,s,s.next)>0&&Ze(e.prev,e,e.next)>0)}function Ze(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ms(s,e){return s.x===e.x&&s.y===e.y}function el(s,e,t,n){const i=os(Ze(s,e,t)),r=os(Ze(s,e,n)),a=os(Ze(t,n,s)),o=os(Ze(t,n,e));return!!(i!==r&&a!==o||i===0&&rs(s,t,e)||r===0&&rs(s,n,e)||a===0&&rs(t,s,n)||o===0&&rs(t,e,n))}function rs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function os(s){return s>0?1:s<0?-1:0}function Qp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&el(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ii(s,e){return Ze(s.prev,s,s.next)<0?Ze(s,e,s.next)>=0&&Ze(s,s.prev,e)>=0:Ze(s,e,s.prev)<0||Ze(s,s.next,e)<0}function em(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function tl(s,e){const t=new Mr(s.i,s.x,s.y),n=new Mr(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ta(s,e,t,n){const i=new Mr(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ni(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Mr(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tm(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Rn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Rn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];na(e),ia(n,e);let a=e.length;t.forEach(na);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,ia(n,t[c]);const o=kp.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function na(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ia(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Fr extends Et{constructor(e=new Ci([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new lt(i,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:nm;let v,y=!1,b,R,I,x;_&&(v=_.getSpacedPoints(h),y=!0,d=!1,b=_.computeFrenetFrames(h,!1),R=new V,I=new V,x=new V),d||(f=0,p=0,g=0,m=0);const E=o.extractPoints(l);let F=E.shape;const Z=E.holes;if(!Rn.isClockWise(F)){F=F.reverse();for(let H=0,W=Z.length;H<W;H++){const B=Z[H];Rn.isClockWise(B)&&(Z[H]=B.reverse())}}const Y=Rn.triangulateShape(F,Z),z=F;for(let H=0,W=Z.length;H<W;H++){const B=Z[H];F=F.concat(B)}function te(H,W,B){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().multiplyScalar(B).add(H)}const ae=F.length,J=Y.length;function U(H,W,B){let ee,ie,pe;const O=H.x-W.x,C=H.y-W.y,ve=B.x-H.x,Te=B.y-H.y,P=O*O+C*C,S=O*Te-C*ve;if(Math.abs(S)>Number.EPSILON){const K=Math.sqrt(P),me=Math.sqrt(ve*ve+Te*Te),_e=W.x-C/K,be=W.y+O/K,Le=B.x-Te/me,D=B.y+ve/me,q=((Le-_e)*Te-(D-be)*ve)/(O*Te-C*ve);ee=_e+O*q-H.x,ie=be+C*q-H.y;const Me=ee*ee+ie*ie;if(Me<=2)return new fe(ee,ie);pe=Math.sqrt(Me/2)}else{let K=!1;O>Number.EPSILON?ve>Number.EPSILON&&(K=!0):O<-Number.EPSILON?ve<-Number.EPSILON&&(K=!0):Math.sign(C)===Math.sign(Te)&&(K=!0),K?(ee=-C,ie=O,pe=Math.sqrt(P)):(ee=O,ie=C,pe=Math.sqrt(P/2))}return new fe(ee/pe,ie/pe)}const de=[];for(let H=0,W=z.length,B=W-1,ee=H+1;H<W;H++,B++,ee++)B===W&&(B=0),ee===W&&(ee=0),de[H]=U(z[H],z[B],z[ee]);const ce=[];let ne,se=de.concat();for(let H=0,W=Z.length;H<W;H++){const B=Z[H];ne=[];for(let ee=0,ie=B.length,pe=ie-1,O=ee+1;ee<ie;ee++,pe++,O++)pe===ie&&(pe=0),O===ie&&(O=0),ne[ee]=U(B[ee],B[pe],B[O]);ce.push(ne),se=se.concat(ne)}for(let H=0;H<f;H++){const W=H/f,B=p*Math.cos(W*Math.PI/2),ee=g*Math.sin(W*Math.PI/2)+m;for(let ie=0,pe=z.length;ie<pe;ie++){const O=te(z[ie],de[ie],ee);w(O.x,O.y,-B)}for(let ie=0,pe=Z.length;ie<pe;ie++){const O=Z[ie];ne=ce[ie];for(let C=0,ve=O.length;C<ve;C++){const Te=te(O[C],ne[C],ee);w(Te.x,Te.y,-B)}}}const ge=g+m;for(let H=0;H<ae;H++){const W=d?te(F[H],se[H],ge):F[H];y?(I.copy(b.normals[0]).multiplyScalar(W.x),R.copy(b.binormals[0]).multiplyScalar(W.y),x.copy(v[0]).add(I).add(R),w(x.x,x.y,x.z)):w(W.x,W.y,0)}for(let H=1;H<=h;H++)for(let W=0;W<ae;W++){const B=d?te(F[W],se[W],ge):F[W];y?(I.copy(b.normals[H]).multiplyScalar(B.x),R.copy(b.binormals[H]).multiplyScalar(B.y),x.copy(v[H]).add(I).add(R),w(x.x,x.y,x.z)):w(B.x,B.y,u/h*H)}for(let H=f-1;H>=0;H--){const W=H/f,B=p*Math.cos(W*Math.PI/2),ee=g*Math.sin(W*Math.PI/2)+m;for(let ie=0,pe=z.length;ie<pe;ie++){const O=te(z[ie],de[ie],ee);w(O.x,O.y,u+B)}for(let ie=0,pe=Z.length;ie<pe;ie++){const O=Z[ie];ne=ce[ie];for(let C=0,ve=O.length;C<ve;C++){const Te=te(O[C],ne[C],ee);y?w(Te.x,Te.y+v[h-1].y,v[h-1].x+B):w(Te.x,Te.y,u+B)}}}N(),L();function N(){const H=i.length/3;if(d){let W=0,B=ae*W;for(let ee=0;ee<J;ee++){const ie=Y[ee];X(ie[2]+B,ie[1]+B,ie[0]+B)}W=h+f*2,B=ae*W;for(let ee=0;ee<J;ee++){const ie=Y[ee];X(ie[0]+B,ie[1]+B,ie[2]+B)}}else{for(let W=0;W<J;W++){const B=Y[W];X(B[2],B[1],B[0])}for(let W=0;W<J;W++){const B=Y[W];X(B[0]+ae*h,B[1]+ae*h,B[2]+ae*h)}}n.addGroup(H,i.length/3-H,0)}function L(){const H=i.length/3;let W=0;M(z,W),W+=z.length;for(let B=0,ee=Z.length;B<ee;B++){const ie=Z[B];M(ie,W),W+=ie.length}n.addGroup(H,i.length/3-H,1)}function M(H,W){let B=H.length;for(;--B>=0;){const ee=B;let ie=B-1;ie<0&&(ie=H.length-1);for(let pe=0,O=h+f*2;pe<O;pe++){const C=ae*pe,ve=ae*(pe+1),Te=W+ee+C,P=W+ie+C,S=W+ie+ve,K=W+ee+ve;re(Te,P,S,K)}}}function w(H,W,B){c.push(H),c.push(W),c.push(B)}function X(H,W,B){k(H),k(W),k(B);const ee=i.length/3,ie=T.generateTopUV(n,i,ee-3,ee-2,ee-1);ue(ie[0]),ue(ie[1]),ue(ie[2])}function re(H,W,B,ee){k(H),k(W),k(ee),k(W),k(B),k(ee);const ie=i.length/3,pe=T.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);ue(pe[0]),ue(pe[1]),ue(pe[3]),ue(pe[1]),ue(pe[2]),ue(pe[3])}function k(H){i.push(c[H*3+0]),i.push(c[H*3+1]),i.push(c[H*3+2])}function ue(H){r.push(H.x),r.push(H.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return im(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $a[i.type]().fromJSON(i)),new Fr(n,e.options)}}const nm={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new fe(r,a),new fe(o,c),new fe(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],m=e[r*3],f=e[r*3+1],_=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-u),new fe(d,1-g),new fe(m,1-_)]:[new fe(o,1-c),new fe(h,1-u),new fe(p,1-g),new fe(f,1-_)]}};function im(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}const gs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class nl{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const sm=new nl;class zi{constructor(e){this.manager=e!==void 0?e:sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Zt={};class rm extends Error{constructor(e,t){super(e),this.response=t}}class il extends zi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zt[e]!==void 0){Zt[e].push({onLoad:t,onProgress:n,onError:i});return}Zt[e]=[],Zt[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Zt[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(_){T();function T(){u.read().then(({done:v,value:y})=>{if(v)_.close();else{m+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let R=0,I=h.length;R<I;R++){const x=h[R];x.onProgress&&x.onProgress(b)}_.enqueue(y),T()}})}}});return new Response(f)}else throw new rm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{gs.add(e,l);const h=Zt[e];delete Zt[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Zt[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zt[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class om extends zi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=gs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ri("img");function c(){h(),gs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class am extends zi{constructor(e){super(e)}load(e,t,n,i){const r=new vt,a=new om(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class lm{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sa(){return(typeof performance>"u"?Date:performance).now()}class hm{constructor(e,t,n=0,i=1/0){this.ray=new Fa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Sr(e,this,n,t),n.sort(ra),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Sr(e[i],this,n,t);return n.sort(ra),n}}function ra(s,e){return s.distance-e.distance}function Sr(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Sr(i[r],e,t,!0)}}class oa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const aa=new fe;class um{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=aa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return aa.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class bn{constructor(){this.type="ShapePath",this.color=new We,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new li,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const T=[];for(let v=0,y=_.length;v<y;v++){const b=_[v],R=new Ci;R.curves=b.curves,T.push(R)}return T}function n(_,T){const v=T.length;let y=!1;for(let b=v-1,R=0;R<v;b=R++){let I=T[b],x=T[R],E=x.x-I.x,F=x.y-I.y;if(Math.abs(F)>Number.EPSILON){if(F<0&&(I=T[R],E=-E,x=T[b],F=-F),_.y<I.y||_.y>x.y)continue;if(_.y===I.y){if(_.x===I.x)return!0}else{const Z=F*(_.x-I.x)-E*(_.y-I.y);if(Z===0)return!0;if(Z<0)continue;y=!y}}else{if(_.y!==I.y)continue;if(x.x<=_.x&&_.x<=I.x||I.x<=_.x&&_.x<=x.x)return!0}}return y}const i=Rn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new Ci,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let p=[],g=0,m;d[g]=void 0,p[g]=[];for(let _=0,T=r.length;_<T;_++)o=r[_],m=o.getPoints(),a=i(m),a=e?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new Ci,p:m},d[g].s.curves=o.curves,h&&g++,p[g]=[]):p[g].push({h:o,p:m[0]});if(!d[0])return t(r);if(d.length>1){let _=!1,T=0;for(let v=0,y=d.length;v<y;v++)u[v]=[];for(let v=0,y=d.length;v<y;v++){const b=p[v];for(let R=0;R<b.length;R++){const I=b[R];let x=!0;for(let E=0;E<d.length;E++)n(I.p,d[E].p)&&(v!==E&&T++,x?(x=!1,u[E].push(I)):_=!0);x&&u[v].push(I)}}T>0&&_===!1&&(p=u)}let f;for(let _=0,T=d.length;_<T;_++){c=d[_].s,l.push(c),f=p[_];for(let v=0,y=f.length;v<y;v++)c.holes.push(f[v].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Er);class Ss{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fm=new Lr(-1,1,1,-1,0,1),Or=new Et;Or.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));Or.setAttribute("uv",new lt([0,2,0,0,2,0],2));class dm{constructor(e){this._mesh=new ut(Or,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pm extends Ss{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const la={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ca extends Ss{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ka.clone(e.uniforms),this.material=new Qt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ha extends Ss{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class mm extends Ss{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gm{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new fe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],la===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),ca===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new ca(la),this.clock=new cm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ha!==void 0&&(a instanceof ha?n=!0:a instanceof mm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Lr(-1,1,1,-1,0,1);const sl=new Et;sl.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3));sl.setAttribute("uv",new lt([0,2,0,0,2,0],2));var un={Linear:{None:function(s){return s}},Quadratic:{In:function(s){return s*s},Out:function(s){return s*(2-s)},InOut:function(s){return(s*=2)<1?.5*s*s:-.5*(--s*(s-2)-1)}},Cubic:{In:function(s){return s*s*s},Out:function(s){return--s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s:.5*((s-=2)*s*s+2)}},Quartic:{In:function(s){return s*s*s*s},Out:function(s){return 1- --s*s*s*s},InOut:function(s){return(s*=2)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2)}},Quintic:{In:function(s){return s*s*s*s*s},Out:function(s){return--s*s*s*s*s+1},InOut:function(s){return(s*=2)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2)}},Sinusoidal:{In:function(s){return 1-Math.cos(s*Math.PI/2)},Out:function(s){return Math.sin(s*Math.PI/2)},InOut:function(s){return .5*(1-Math.cos(Math.PI*s))}},Exponential:{In:function(s){return s===0?0:Math.pow(1024,s-1)},Out:function(s){return s===1?1:1-Math.pow(2,-10*s)},InOut:function(s){return s===0?0:s===1?1:(s*=2)<1?.5*Math.pow(1024,s-1):.5*(-Math.pow(2,-10*(s-1))+2)}},Circular:{In:function(s){return 1-Math.sqrt(1-s*s)},Out:function(s){return Math.sqrt(1- --s*s)},InOut:function(s){return(s*=2)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1)}},Elastic:{In:function(s){return s===0?0:s===1?1:-Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI)},Out:function(s){return s===0?0:s===1?1:Math.pow(2,-10*s)*Math.sin((s-.1)*5*Math.PI)+1},InOut:function(s){return s===0?0:s===1?1:(s*=2,s<1?-.5*Math.pow(2,10*(s-1))*Math.sin((s-1.1)*5*Math.PI):.5*Math.pow(2,-10*(s-1))*Math.sin((s-1.1)*5*Math.PI)+1)}},Back:{In:function(s){var e=1.70158;return s*s*((e+1)*s-e)},Out:function(s){var e=1.70158;return--s*s*((e+1)*s+e)+1},InOut:function(s){var e=2.5949095;return(s*=2)<1?.5*(s*s*((e+1)*s-e)):.5*((s-=2)*s*((e+1)*s+e)+2)}},Bounce:{In:function(s){return 1-un.Bounce.Out(1-s)},Out:function(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},InOut:function(s){return s<.5?un.Bounce.In(s*2)*.5:un.Bounce.Out(s*2-1)*.5+.5}}},Si;typeof self>"u"&&typeof process<"u"&&process.hrtime?Si=function(){var s=process.hrtime();return s[0]*1e3+s[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Si=self.performance.now.bind(self.performance):Date.now!==void 0?Si=Date.now:Si=function(){return new Date().getTime()};var Tn=Si,rl=function(){function s(){this._tweens={},this._tweensAddedDuringUpdate={}}return s.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},s.prototype.removeAll=function(){this._tweens={}},s.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},s.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},s.prototype.update=function(e,t){e===void 0&&(e=Tn()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]],a=!t;r&&r.update(e,a)===!1&&!t&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},s}(),ri={Linear:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=ri.Utils.Linear;return e<0?r(s[0],s[1],n):e>1?r(s[t],s[t-1],t-n):r(s[i],s[i+1>t?t:i+1],n-i)},Bezier:function(s,e){for(var t=0,n=s.length-1,i=Math.pow,r=ri.Utils.Bernstein,a=0;a<=n;a++)t+=i(1-e,n-a)*i(e,a)*s[a]*r(n,a);return t},CatmullRom:function(s,e){var t=s.length-1,n=t*e,i=Math.floor(n),r=ri.Utils.CatmullRom;return s[0]===s[t]?(e<0&&(i=Math.floor(n=t*(1+e))),r(s[(i-1+t)%t],s[i],s[(i+1)%t],s[(i+2)%t],n-i)):e<0?s[0]-(r(s[0],s[0],s[1],s[1],-n)-s[0]):e>1?s[t]-(r(s[t],s[t],s[t-1],s[t-1],n-t)-s[t]):r(s[i?i-1:0],s[i],s[t<i+1?t:i+1],s[t<i+2?t:i+2],n-i)},Utils:{Linear:function(s,e,t){return(e-s)*t+s},Bernstein:function(s,e){var t=ri.Utils.Factorial;return t(s)/t(e)/t(s-e)},Factorial:function(){var s=[1];return function(e){var t=1;if(s[e])return s[e];for(var n=e;n>1;n--)t*=n;return s[e]=t,t}}(),CatmullRom:function(s,e,t,n,i){var r=(t-s)*.5,a=(n-e)*.5,o=i*i,c=i*o;return(2*e-2*t+r+a)*c+(-3*e+3*t-2*r-a)*o+r*i+e}}},zr=function(){function s(){}return s.nextId=function(){return s._nextId++},s._nextId=0,s}(),ol=new rl,ws=function(){function s(e,t){t===void 0&&(t=ol),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=un.Linear.None,this._interpolationFunction=ri.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=zr.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return s.prototype.getId=function(){return this._id},s.prototype.isPlaying=function(){return this._isPlaying},s.prototype.isPaused=function(){return this._isPaused},s.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},s.prototype.duration=function(e){return this._duration=e,this},s.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Tn()+parseFloat(e):e:Tn(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},s.prototype._setupProperties=function(e,t,n,i){for(var r in n){var a=e[r],o=Array.isArray(a),c=o?"array":typeof a,l=!o&&Array.isArray(n[r]);if(!(c==="undefined"||c==="function")){if(l){var h=n[r];if(h.length===0)continue;h=h.map(this._handleRelativeValue.bind(this,a)),n[r]=[a].concat(h)}if((c==="object"||o)&&a&&!l){t[r]=o?[]:{};for(var u in a)t[r][u]=a[u];i[r]=o?[]:{},this._setupProperties(a,t[r],n[r],i[r])}else typeof t[r]>"u"&&(t[r]=a),o||(t[r]*=1),l?i[r]=n[r].slice().reverse():i[r]=t[r]||0}}},s.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},s.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},s.prototype.pause=function(e){return e===void 0&&(e=Tn()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},s.prototype.resume=function(e){return e===void 0&&(e=Tn()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},s.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},s.prototype.group=function(e){return this._group=e,this},s.prototype.delay=function(e){return this._delayTime=e,this},s.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},s.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},s.prototype.yoyo=function(e){return this._yoyo=e,this},s.prototype.easing=function(e){return this._easingFunction=e,this},s.prototype.interpolation=function(e){return this._interpolationFunction=e,this},s.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},s.prototype.onStart=function(e){return this._onStartCallback=e,this},s.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},s.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},s.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},s.prototype.onStop=function(e){return this._onStopCallback=e,this},s.prototype.update=function(e,t){if(e===void 0&&(e=Tn()),t===void 0&&(t=!0),this._isPaused)return!0;var n,i,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>r)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(e-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var a=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,c=this._chainedTweens.length;o<c;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},s.prototype._updateProperties=function(e,t,n,i){for(var r in n)if(t[r]!==void 0){var a=t[r]||0,o=n[r],c=Array.isArray(e[r]),l=Array.isArray(o),h=!c&&l;h?e[r]=this._interpolationFunction(o,i):typeof o=="object"&&o?this._updateProperties(e[r],a,o,i):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[r]=a+(o-a)*i))}},s.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},s.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},s}(),_m="18.6.4",xm=zr.nextId,Bt=ol,vm=Bt.getAll.bind(Bt),ym=Bt.removeAll.bind(Bt),bm=Bt.add.bind(Bt),Mm=Bt.remove.bind(Bt),Sm=Bt.update.bind(Bt),Ur={Easing:un,Group:rl,Interpolation:ri,now:Tn,Sequence:zr,nextId:xm,Tween:ws,VERSION:_m,getAll:vm,removeAll:ym,add:bm,remove:Mm,update:Sm};const wm=[[[15,8,0,0,0,0,0,2],[4,0,0,0,0,0,0,3],[3,8,0,0,0,1,0,6],[4,0,0,0,2,12,0,2],[0,0,0,0,0,0,0,2],[2,9,0,0,0,0,1,2],[0,4,0,0,0,0,6,10],[1,1,1,3,9,1,1,3]],[[15,8,0,2,12,0,0,2],[4,2,9,0,0,0,0,2],[0,0,4,0,0,0,0,3],[0,3,8,0,0,0,1,6],[0,4,0,0,0,0,6,10],[0,0,0,0,0,1,0,2],[0,0,0,0,2,12,0,2],[1,1,3,9,1,1,1,3]],[[15,8,0,0,1,0,0,2],[4,0,0,0,6,8,0,3],[2,9,0,0,0,0,0,6],[0,4,0,0,0,0,0,2],[0,0,0,0,0,0,0,2],[0,1,0,0,0,0,3,10],[2,12,0,0,0,0,4,2],[1,1,3,9,1,1,1,3]],[[15,8,0,0,0,0,1,2],[4,0,0,0,0,2,12,2],[0,0,2,9,0,0,0,3],[0,1,0,4,0,0,0,6],[0,6,8,0,0,0,0,2],[0,0,0,0,0,0,0,2],[0,0,0,0,0,3,8,2],[1,1,3,9,1,5,1,3]]],ua=[[{token:"yellow-planet",color:["yellow"],position:[0,2]},{token:"blue-cross",color:["blue"],position:[5,3]},{token:"green-moon",color:["green"],position:[1,5]},{token:"red-gear",color:["red"],position:[6,6]}],[{token:"black-hole",color:["red","yellow","green","blue"],position:[4,0]},{token:"blue-moon",color:["blue"],position:[2,1]},{token:"yellow-gear",color:["yellow"],position:[1,3]},{token:"green-planet",color:["green"],position:[6,4]},{token:"red-cross",color:["red"],position:[5,6]}],[{token:"red-moon",color:["red"],position:[4,1]},{token:"blue-planet",color:["blue"],position:[1,2]},{token:"green-gear",color:["green"],position:[6,5]},{token:"yellow-cross",color:["yellow"],position:[1,6]}],[{token:"green-cross",color:["green"],position:[6,1]},{token:"red-planet",color:["red"],position:[3,2]},{token:"blue-gear",color:["blue"],position:[1,4]},{token:"yellow-moon",color:["yellow"],position:[5,6]}]],Tm=[{name:"blue",color:"#03A9F4",tint:"#B3E5FC"},{name:"green",color:"#7CB342",tint:"#DCEDC8"},{name:"yellow",color:"#F9A825",tint:"#FFECB3"},{name:"red",color:"#E53935",tint:"#FFCDD2"},{name:"grey",color:"#607D8B",tint:"#CFD8DC"}],Em="background.svg",Am={board:Em,"yellow-planet":"tokens/yellow-planet.png","yellow-cross":"tokens/yellow-cross.png","yellow-gear":"tokens/yellow-gear.png","yellow-moon":"tokens/yellow-moon.png","blue-planet":"tokens/blue-planet.png","blue-cross":"tokens/blue-cross.png","blue-gear":"tokens/blue-gear.png","blue-moon":"tokens/blue-moon.png","green-planet":"tokens/green-planet.png","green-cross":"tokens/green-cross.png","green-gear":"tokens/green-gear.png","green-moon":"tokens/green-moon.png","red-planet":"tokens/red-planet.png","red-cross":"tokens/red-cross.png","red-gear":"tokens/red-gear.png","red-moon":"tokens/red-moon.png","black-hole":"tokens/black-hole.png"};async function Cm(s){const e=new am(s),t=Object.entries(Am).map(async n=>({name:n[0],texture:await e.loadAsync("/ricochet-robots-core/"+n[1])}));return await Promise.all(t).then(n=>n.reduce((i,r)=>({...i,[r.name]:r.texture}),{}))}class Pm extends zi{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new il(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){function t(l){const h=new DataView(l),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;const g=[115,111,108,105,100];for(let m=0;m<5;m++)if(n(g,h,m))return!1;return!0}function n(l,h,u){for(let d=0,p=l.length;d<p;d++)if(l[d]!==h.getUint8(u+d))return!1;return!0}function i(l){const h=new DataView(l),u=h.getUint32(80,!0);let d,p,g,m=!1,f,_,T,v,y;for(let F=0;F<80-10;F++)h.getUint32(F,!1)==1129270351&&h.getUint8(F+4)==82&&h.getUint8(F+5)==61&&(m=!0,f=new Float32Array(u*3*3),_=h.getUint8(F+6)/255,T=h.getUint8(F+7)/255,v=h.getUint8(F+8)/255,y=h.getUint8(F+9)/255);const b=84,R=12*4+2,I=new Et,x=new Float32Array(u*3*3),E=new Float32Array(u*3*3);for(let F=0;F<u;F++){const Z=b+F*R,Q=h.getFloat32(Z,!0),Y=h.getFloat32(Z+4,!0),z=h.getFloat32(Z+8,!0);if(m){const te=h.getUint16(Z+48,!0);(te&32768)===0?(d=(te&31)/31,p=(te>>5&31)/31,g=(te>>10&31)/31):(d=_,p=T,g=v)}for(let te=1;te<=3;te++){const ae=Z+te*12,J=F*3*3+(te-1)*3;x[J]=h.getFloat32(ae,!0),x[J+1]=h.getFloat32(ae+4,!0),x[J+2]=h.getFloat32(ae+8,!0),E[J]=Q,E[J+1]=Y,E[J+2]=z,m&&(f[J]=d,f[J+1]=p,f[J+2]=g)}}return I.setAttribute("position",new Tt(x,3)),I.setAttribute("normal",new Tt(E,3)),m&&(I.setAttribute("color",new Tt(f,3)),I.hasColors=!0,I.alpha=y),I}function r(l){const h=new Et,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g;let p=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),f=new RegExp("normal"+g+g+g,"g"),_=[],T=[],v=new V;let y,b=0,R=0,I=0;for(;(y=u.exec(l))!==null;){R=I;const x=y[0];for(;(y=d.exec(x))!==null;){let Z=0,Q=0;const Y=y[0];for(;(y=f.exec(Y))!==null;)v.x=parseFloat(y[1]),v.y=parseFloat(y[2]),v.z=parseFloat(y[3]),Q++;for(;(y=m.exec(Y))!==null;)_.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),T.push(v.x,v.y,v.z),Z++,I++;Q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+p),Z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+p),p++}const E=R,F=I-R;h.addGroup(E,F,b),b++}return h.setAttribute("position",new lt(_,3)),h.setAttribute("normal",new lt(T,3)),h}function a(l){return typeof l!="string"?lm.decodeText(new Uint8Array(l)):l}function o(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}const c=o(e);return t(c)?i(c):r(a(e))}}const Lm="robot.stl",Rm={robot:Lm};async function Dm(s){const e=new Pm(s),t=Object.entries(Rm).map(async n=>({name:n[0],model:await e.loadAsync("/ricochet-robots-core/"+n[1])}));return await Promise.all(t).then(n=>n.reduce((i,r)=>({...i,[r.name]:r.model}),{}))}class wr extends ut{constructor(e,t){super(new Oi(Xe*.95,Xe*.95),new dn({map:t[e.token],transparent:!0})),this.name="token",this.userData={type:e.token,color:e.color},this.rotation.x=-180*(Math.PI/180),this.position.set(e.position[0]*Xe,e.position[1]*Xe,-.001)}get coords(){const e=new V;return this.getWorldPosition(e),new As().coordsByPosition({x:Math.round(e.x*1e4)/1e4,y:Math.round(e.z*1e4)/1e4})}}class fa extends yt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const ti=new V,da=new et,pa=new et,ma=new V,ga=new V;class Im{constructor(e={}){const t=this;let n,i,r,a;const o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:i}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),da.copy(g.matrixWorldInverse),pa.multiplyMatrices(g.projectionMatrix,da),l(p,p,g),d(p)},this.setSize=function(p,g){n=p,i=g,r=n/2,a=i/2,c.style.width=p+"px",c.style.height=g+"px"};function l(p,g,m){if(p.isCSS2DObject){ti.setFromMatrixPosition(p.matrixWorld),ti.applyMatrix4(pa);const f=p.visible===!0&&ti.z>=-1&&ti.z<=1&&p.layers.test(m.layers)===!0;if(p.element.style.display=f===!0?"":"none",f===!0){p.onBeforeRender(t,g,m);const T=p.element;T.style.transform="translate(-50%,-50%) translate("+(ti.x*r+r)+"px,"+(-ti.y*a+a)+"px)",T.parentNode!==c&&c.appendChild(T),p.onAfterRender(t,g,m)}const _={distanceToCameraSquared:h(m,p)};o.objects.set(p,_)}for(let f=0,_=p.children.length;f<_;f++)l(p.children[f],g,m)}function h(p,g){return ma.setFromMatrixPosition(p.matrixWorld),ga.setFromMatrixPosition(g.matrixWorld),ma.distanceToSquared(ga)}function u(p){const g=[];return p.traverse(function(m){m.isCSS2DObject&&g.push(m)}),g}function d(p){const g=u(p).sort(function(f,_){if(f.renderOrder!==_.renderOrder)return _.renderOrder-f.renderOrder;const T=o.objects.get(f).distanceToCameraSquared,v=o.objects.get(_).distanceToCameraSquared;return T-v}),m=g.length;for(let f=0,_=g.length;f<_;f++)g[f].element.style.zIndex=m-f}}}const kt=16,Nm=1/kt,Fm=8,Xe=1/Fm,Je=Xe/2,Ts=.1,Kt=.015,Tr=Xe-Kt,as=new dn({color:"#B0BEC5"}),_a=new dn({color:"#607D8B"}),Es=[as,as,as,as,_a,_a],xa=new ut(new en(kt*Nm,Kt,Ts),Es),ls=new ut(new en(Tr,Kt,Ts),Es),cs=new ut(new en(Kt,Kt,Ts),Es),va=.04;class Om extends Cn{constructor(t,n,i){super();He(this,"map",new As);this.name="board",this.rotation.x=-90*(Math.PI/180),this.add(...this.walls(t,n,i)),this.add(...this.notations)}walls(t,n,i){return t.map((r,a)=>{const o=n[a].map(g=>new wr(g,i)),c=r.flatMap((g,m,{length:f})=>g.reduce((_,T,v,{length:y})=>{const b=m===0,R=v===0,I=m===f-1,x=v===y-1;if(T===15){const E=new ut(new en(Tr+Kt,Tr+Kt,.1),Es);return E.position.set(v*Xe,m*Xe,0),_.push(E),_}if(T>>3&1&&R){const E=ls.clone();E.name="wall",E.rotation.z=90*(Math.PI/180),E.position.set(v*Xe-Je,m*Xe,0),_.push(E)}if(T>>2&1&&b){const E=ls.clone();E.name="wall",E.position.set(v*Xe,m*Xe-Je,0),_.push(E)}if(T>>1&1&&!x){const E=ls.clone();E.name="wall",E.rotation.z=90*(Math.PI/180),E.position.set(v*Xe+Je,m*Xe,0),_.push(E)}if(T>>0&1&&!I){const E=ls.clone();E.name="wall",E.position.set(v*Xe,m*Xe+Je,0),_.push(E)}if((T>>2&3)===3){const E=cs.clone();E.position.set(v*Xe-Je,m*Xe-Je,0),_.push(E)}if((T>>1&3)===3&&!x){const E=cs.clone();E.position.set(v*Xe+Je,m*Xe-Je,0),_.push(E)}if((T>>0&3)===3&&!x&&!I){const E=cs.clone();E.position.set(v*Xe+Je,m*Xe+Je,0),_.push(E)}if(T>>3&1&(T>>0&1)&&!I){const E=cs.clone();E.position.set(v*Xe-Je,m*Xe+Je,0),_.push(E)}return _},[])),l=xa.clone();l.position.set(.5-Je+Kt/2,1-Je,0);const h=xa.clone();h.rotation.z=90*(Math.PI/180),h.position.set(1-Je,.5-Je-Kt/2,0),o.forEach(g=>{g.rotation.z=a*90*(Math.PI/180)});const u=new Cn;u.position.set(Je,-Je,0),u.rotation.x=Math.PI,u.add(...c,l,h,...o);const d=new Oi;d.translate(.5,-.5,0);const p=new ut(d,new dn({map:i.board}));return p.name=`part_${a}`,p.rotation.z=a*90*(Math.PI/180)*-1,p.add(u),p})}get notations(){return[Array(kt).fill(void 0).map((t,n)=>{const i=document.createElement("span");i.innerText=String.fromCharCode(65+n);const r=new fa(i),a=this.map.positionByCoords({x:0+n,y:16});return r.position.set(a.x,a.y+va,0),r}),Array(kt).fill(void 0).map((t,n)=>{const i=document.createElement("span");i.innerText=String(n+1).padStart(2,"\u2007");const r=new fa(i),a=this.map.positionByCoords({x:-1,y:15-n});return r.position.set(a.x-va,a.y,0),r})].flat()}get tokens(){const t=[];return this.traverse(n=>{n.name==="token"&&n instanceof wr&&t.push(n)}),t}}class As{generate(e,t){const n=[];return e.traverse(i=>{if(i.name==="wall"){const r=new V;i.getWorldPosition(r),n.push({x:Math.round(r.x*1e4)/1e4,y:Math.round(r.z*1e4)/1e4})}}),Array.from({length:kt},(i,r)=>Array.from({length:kt},(a,o)=>{const c=this.positionByCoords({x:o,y:r});let l=0;const h=o===0,u=r===0,d=o===kt-1,p=r===kt-1,g=[7,8].includes(o)&&[7,8].includes(r),m=o===6&&[7,8].includes(r),f=r===6&&[7,8].includes(o),_=o===9&&[7,8].includes(r),T=r===9&&[7,8].includes(o),v=n.find(Q=>Q.x===c.x-Je&&Q.y===c.y),y=n.find(Q=>Q.x===c.x&&Q.y===c.y-Je),b=n.find(Q=>Q.x===c.x+Je&&Q.y===c.y),R=n.find(Q=>Q.x===c.x&&Q.y===c.y+Je),I=t.find(Q=>Q.coords.x===o&&Q.coords.y===r),x=t.find(Q=>Q.coords.x===o+1&&Q.coords.y===r),E=t.find(Q=>Q.coords.x===o&&Q.coords.y===r+1),F=t.find(Q=>Q.coords.x===o-1&&Q.coords.y===r),Z=t.find(Q=>Q.coords.x===o&&Q.coords.y===r-1);return g||I?l=15:((h||_||F||v)&&(l+=8),(u||T||Z||y)&&(l+=4),(d||m||x||b)&&(l+=2),(p||f||E||R)&&(l+=1),l)}))}positionByCoords(e){return{x:Xe*(e.x-7.5),y:Xe*(e.y-7.5)}}coordsByPosition(e){return{x:e.x/Xe+7.5,y:e.y/Xe+7.5}}calcRouteToByDirection(e,t,n){let i={...e};for(;this.hasMoveByDirection(i,t,n);)i=this.moveStepByDirection(i,t);return i}hasMoveByDirection(e,t,n){return!Boolean(n[e.y][e.x]>>3-t&1)}moveStepByDirection(e,t){const n={...e};switch(t){case 0:n.x-=1;break;case 1:n.y-=1;break;case 2:n.x+=1;break;case 3:n.y+=1;break}return n}}class al extends ut{constructor(t,n){super(t.robot.center(),new dn({color:n,transparent:!0,opacity:.7}));He(this,"boardDescription",new As);this.name="robot",this.rotation.x=-90*(Math.PI/180),this.scale.set(.005,.005,.005);const i=new Un().setFromObject(this);this.position.y=i.max.y}moveTo(t){const n=this.boardDescription.positionByCoords(t);return new ws({x:this.position.x,y:this.position.z}).to(n,300).easing(un.Circular.InOut).onUpdate(({x:i,y:r})=>{this.position.x=i,this.position.z=r}).start()}markUnselect(){this.material.opacity=.7}markSelect(){this.material.opacity=.9}get coords(){return this.boardDescription.coordsByPosition({x:this.position.x,y:this.position.z})}}class zm{constructor(e,t,n,i,r){He(this,"map",new As);He(this,"_phase",null);He(this,"_initialPositions");He(this,"moves");this.board=e,this.robots=t,this.arrows=n,this.tc=i,this.mc=r,this.arrows.hide(),this.moves=0,this._initialPositions=this.generatePositions()}prepare(){this.unselectRobot(),this.robots.forEach((e,t)=>e.moveTo(this._initialPositions[t])),this.robots.show(),this.tc.prepare()}resetRobots(){this.moves=0,this.prepare()}restoreState(){this.unselectRobot(),this.robots.forEach((e,t)=>e.moveTo(this._initialPositions[t])),this.robots.show(),this.tc.prepare(),this.moves=0}showRobots(){this.robots.show()}hideRobots(){this.robots.hide()}setPhaseEndRound(){this._phase="end_round",this.board.removeTargetToken(),this.mc.postMessage({event:"commit_state",state:{...this.tc.state,robots:this.robots.state}})}setPhasePrepare(){this._phase="prepare",this.setNextToken()}setNextToken(e=this.tc.makeNextToken()){if(!e)return this.mc.postMessage({event:"end_game"});this.board.setTargetToken(e),this.mc.postMessage({event:"next_token",token:e})}clickByRobot(e){this.selectRobot(e)}clickByArrow(e){return this.moveSelectedRobot(e.userData.direction)}clickMiss(){this.unselectRobot()}moveSelectedRobot(e){if(!this.selectedRobot||!this.arrows.isArrowVisible(e))return;const t=this.routeTo(this.selectedRobot,e);this.selectedRobot.moveTo(t).onStart(()=>this.arrows.hide()).onComplete(()=>{this.selectedRobot&&(this.arrows.attachToRobot(this.selectedRobot),this.arrows.visibleByDirection(this.robotDirection(this.selectedRobot)),this.moves=this.moves+1,this.tc.target&&this.validateWin(this.selectedRobot,this.tc.target)&&this.mc.postMessage({event:"change_phase",phase:"target_reached"}))})}get hasSelectedRobot(){return Boolean(this.selectedRobot)}get models(){return[this.board,this.arrows,...this.robots]}get phase(){return this._phase}selectRobot(e){this.robots.setSelectedRobot(e),this.arrows.attachToRobot(e),this.arrows.visibleByDirection(this.robotDirection(e))}unselectRobot(){this.robots.clearSelectedRobot(),this.arrows.hide()}generatePositions(){const e=this.map.generate(this.board,[]),t=Array(kt).fill(void 0).flatMap((n,i)=>Array(kt).fill(void 0).map((r,a)=>e[a][i]!==15&&!this.board.tokens.some(o=>o.coords.x===a&&o.coords.y===i)&&{x:a,y:i}).filter(Boolean));return Array(5).fill(void 0).map(()=>t.splice(Tc.randInt(0,t.length-1),1)[0])}validateWin(e,t){return this.board.tokens.some(n=>t.token===n.userData.type&&n.coords.x===e.coords.x&&n.coords.y===e.coords.y&&n.userData.color.includes(e.userData.type))}robotDirection(e){return this.map.generate(this.board,this.unselectedRobots)[e.coords.y][e.coords.x]}routeTo(e,t){const n=this.map.generate(this.board,this.robots.filter(i=>i!==e));return this.map.calcRouteToByDirection(e.coords,t,n)}get selectedRobot(){return this.robots.selectedRobot}get unselectedRobots(){return this.robots.filter(e=>e!==this.selectedRobot)}}const Um=.01;class ya extends ut{constructor(e){super(new Fr(e,{depth:.05}),new dn({color:"#F06292",opacity:.7,transparent:!0})),this.name="arrow",this.rotation.x=90*(Math.PI/180),this.position.y=Um,this.scale.set(.05,.025,.05);const t=new Un().setFromObject(this);this.position.y=t.max.y}}const ba={type:"change"},fr={type:"start"},Ma={type:"end"};class km extends On{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:Bn.ROTATE,TWO:Bn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Te),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ba),n.update(),r=i.NONE},this.update=function(){const D=new V,q=new Nn().setFromUnitVectors(e.up,new V(0,1,0)),Me=q.clone().invert(),we=new V,Se=new Nn,Ae=2*Math.PI;return function(){const Oe=n.object.position;D.copy(Oe).sub(n.target),D.applyQuaternion(q),o.setFromVector3(D),n.autoRotate&&r===i.NONE&&E(I()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ze=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(qe)&&(ze<-Math.PI?ze+=Ae:ze>Math.PI&&(ze-=Ae),qe<-Math.PI?qe+=Ae:qe>Math.PI&&(qe-=Ae),ze<=qe?o.theta=Math.max(ze,Math.min(qe,o.theta)):o.theta=o.theta>(ze+qe)/2?Math.max(ze,o.theta):Math.min(qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),D.setFromSpherical(o),D.applyQuaternion(Me),Oe.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||we.distanceToSquared(n.object.position)>a||8*(1-Se.dot(n.object.quaternion))>a?(n.dispatchEvent(ba),we.copy(n.object.position),Se.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",K),n.domElement.removeEventListener("pointerdown",B),n.domElement.removeEventListener("pointercancel",pe),n.domElement.removeEventListener("wheel",ve),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ie),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Te)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new oa,c=new oa;let l=1;const h=new V;let u=!1;const d=new fe,p=new fe,g=new fe,m=new fe,f=new fe,_=new fe,T=new fe,v=new fe,y=new fe,b=[],R={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function E(D){c.theta-=D}function F(D){c.phi-=D}const Z=function(){const D=new V;return function(Me,we){D.setFromMatrixColumn(we,0),D.multiplyScalar(-Me),h.add(D)}}(),Q=function(){const D=new V;return function(Me,we){n.screenSpacePanning===!0?D.setFromMatrixColumn(we,1):(D.setFromMatrixColumn(we,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Me),h.add(D)}}(),Y=function(){const D=new V;return function(Me,we){const Se=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;D.copy(Ae).sub(n.target);let Ce=D.length();Ce*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*Me*Ce/Se.clientHeight,n.object.matrix),Q(2*we*Ce/Se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(Me*(n.object.right-n.object.left)/n.object.zoom/Se.clientWidth,n.object.matrix),Q(we*(n.object.top-n.object.bottom)/n.object.zoom/Se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(D){d.set(D.clientX,D.clientY)}function J(D){T.set(D.clientX,D.clientY)}function U(D){m.set(D.clientX,D.clientY)}function de(D){p.set(D.clientX,D.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;E(2*Math.PI*g.x/q.clientHeight),F(2*Math.PI*g.y/q.clientHeight),d.copy(p),n.update()}function ce(D){v.set(D.clientX,D.clientY),y.subVectors(v,T),y.y>0?z(x()):y.y<0&&te(x()),T.copy(v),n.update()}function ne(D){f.set(D.clientX,D.clientY),_.subVectors(f,m).multiplyScalar(n.panSpeed),Y(_.x,_.y),m.copy(f),n.update()}function se(D){D.deltaY<0?te(x()):D.deltaY>0&&z(x()),n.update()}function ge(D){let q=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),q=!0;break}q&&(D.preventDefault(),n.update())}function N(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),q=.5*(b[0].pageY+b[1].pageY);d.set(D,q)}}function L(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const D=.5*(b[0].pageX+b[1].pageX),q=.5*(b[0].pageY+b[1].pageY);m.set(D,q)}}function M(){const D=b[0].pageX-b[1].pageX,q=b[0].pageY-b[1].pageY,Me=Math.sqrt(D*D+q*q);T.set(0,Me)}function w(){n.enableZoom&&M(),n.enablePan&&L()}function X(){n.enableZoom&&M(),n.enableRotate&&N()}function re(D){if(b.length==1)p.set(D.pageX,D.pageY);else{const Me=Le(D),we=.5*(D.pageX+Me.x),Se=.5*(D.pageY+Me.y);p.set(we,Se)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;E(2*Math.PI*g.x/q.clientHeight),F(2*Math.PI*g.y/q.clientHeight),d.copy(p)}function k(D){if(b.length===1)f.set(D.pageX,D.pageY);else{const q=Le(D),Me=.5*(D.pageX+q.x),we=.5*(D.pageY+q.y);f.set(Me,we)}_.subVectors(f,m).multiplyScalar(n.panSpeed),Y(_.x,_.y),m.copy(f)}function ue(D){const q=Le(D),Me=D.pageX-q.x,we=D.pageY-q.y,Se=Math.sqrt(Me*Me+we*we);v.set(0,Se),y.set(0,Math.pow(v.y/T.y,n.zoomSpeed)),z(y.y),T.copy(v)}function H(D){n.enableZoom&&ue(D),n.enablePan&&k(D)}function W(D){n.enableZoom&&ue(D),n.enableRotate&&re(D)}function B(D){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",ee),n.domElement.addEventListener("pointerup",ie)),me(D),D.pointerType==="touch"?P(D):O(D))}function ee(D){n.enabled!==!1&&(D.pointerType==="touch"?S(D):C(D))}function ie(D){_e(D),b.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ie)),n.dispatchEvent(Ma),r=i.NONE}function pe(D){_e(D)}function O(D){let q;switch(D.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case kn.DOLLY:if(n.enableZoom===!1)return;J(D),r=i.DOLLY;break;case kn.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;U(D),r=i.PAN}else{if(n.enableRotate===!1)return;ae(D),r=i.ROTATE}break;case kn.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;ae(D),r=i.ROTATE}else{if(n.enablePan===!1)return;U(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(fr)}function C(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;de(D);break;case i.DOLLY:if(n.enableZoom===!1)return;ce(D);break;case i.PAN:if(n.enablePan===!1)return;ne(D);break}}function ve(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(fr),se(D),n.dispatchEvent(Ma))}function Te(D){n.enabled===!1||n.enablePan===!1||ge(D)}function P(D){switch(be(D),b.length){case 1:switch(n.touches.ONE){case Bn.ROTATE:if(n.enableRotate===!1)return;N(),r=i.TOUCH_ROTATE;break;case Bn.PAN:if(n.enablePan===!1)return;L(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Bn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(),r=i.TOUCH_DOLLY_PAN;break;case Bn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;X(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(fr)}function S(D){switch(be(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;re(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;k(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(D),n.update();break;default:r=i.NONE}}function K(D){n.enabled!==!1&&D.preventDefault()}function me(D){b.push(D)}function _e(D){delete R[D.pointerId];for(let q=0;q<b.length;q++)if(b[q].pointerId==D.pointerId){b.splice(q,1);return}}function be(D){let q=R[D.pointerId];q===void 0&&(q=new fe,R[D.pointerId]=q),q.set(D.pageX,D.pageY)}function Le(D){const q=D.pointerId===b[0].pointerId?b[1]:b[0];return R[q.pointerId]}n.domElement.addEventListener("contextmenu",K),n.domElement.addEventListener("pointerdown",B),n.domElement.addEventListener("pointercancel",pe),n.domElement.addEventListener("wheel",ve,{passive:!1}),this.update()}}const hs=new V(0,2.6,0);class Bm extends km{constructor(e,t){super(e,t),this.camera=e,e.position.set(hs.x,hs.y,hs.z),this.target=new V(0,-.3,0),this.enablePan=!1,this.enableZoom=!1,this.maxAzimuthAngle=0,this.minAzimuthAngle=0,this.maxPolarAngle=30*(Math.PI/180)}toInitialPosition(){new ws(this.camera.position).to(hs,300).easing(un.Cubic.Out).onUpdate(this.update).start()}}class Gm extends Tp{constructor(){super(),this.changeBackground()}changeBackground(e=new We("#D7CCC8")){this.background||(this.background=new We("black")),new ws(this.background).to(e,300).easing(un.Linear.None).start()}}class Vm extends hm{intersects(e,t,n,i){const r=i.getBoundingClientRect(),a={x:(n.x-r.left)/i.scrollWidth*2-1,y:-((n.y-r.top)/i.scrollHeight)*2+1};return this.setFromCamera(a,t),this.intersectObjects(e.children)}}const Sa=.13;class Hm extends Cn{constructor(e){const t=Array.from({length:4},(n,i)=>{const r=e.clone();return r.userData={direction:i===3?0:i+1},r.rotation.z=i*90*(Math.PI/180),r.position.x=Math.abs(i&1)*Sa*Math.sign(2-i),r.position.z=Math.abs((i&1)-1)*Sa*Math.sign(i-1),r});super(),this.add(...t)}attachToRobot(e){this.position.x=e.position.x,this.position.z=e.position.z}visibleByDirection(e){this.children.forEach(t=>{t.visible=!Boolean(e>>3-t.userData.direction&1)})}show(){this.visibleByDirection(0)}hide(){this.visibleByDirection(15)}isArrowVisible(e){var t;return(t=this.children.find(n=>n.userData.direction===e))==null?void 0:t.visible}}const _s=class extends Om{constructor(e,t,n){super(e,t,n),this.textures=n}setTargetToken(e){this.removeTargetToken();const t=new wr(e,this.textures);t.name=_s.TOKEN_TARGET_KEY,t.rotation.y=t.rotation.z=Math.PI,t.position.set(0,0,Ts/2+.001),t.scale.set(1.6,1.6,1.6),this.add(t)}removeTargetToken(){var e;(e=this.getObjectByName(_s.TOKEN_TARGET_KEY))==null||e.removeFromParent()}};let ds=_s;He(ds,"TOKEN_TARGET_KEY","target");class Wm extends Array{constructor(){super(...arguments);He(this,"_selectedRobot",null)}make(t,n){const i=t.map(r=>{const a=new al(n,new We(r.color));return a.userData={type:r.name,tint:r.tint},a.visible=!1,a});return this.splice(0),this.push(...i),this}setSelectedRobot(t){this.forEach(n=>n.markUnselect()),this._selectedRobot=t,this._selectedRobot.markSelect()}clearSelectedRobot(){this.forEach(t=>t.markUnselect()),this._selectedRobot=null}get selectedRobot(){return this._selectedRobot}get nextRobot(){const t=this.selectedRobot?this.indexOf(this.selectedRobot):-1;return t+1>=this.length||t===-1?this[0]:this[t+1]}show(){this.forEach(t=>{t.visible=!0})}hide(){this.forEach(t=>{t.visible=!1})}restore(t){t.forEach(n=>{const i=this.find(r=>n.type===r.userData.type);i&&(i.visible=!0,i.moveTo(n.position))})}get state(){return this.map(t=>({type:t.userData.type,position:t.coords}))}}class qm{constructor(e){He(this,"initialTokens");He(this,"_tokens",[]);He(this,"_target",null);this.initialTokens=e.flat(2).sort(()=>Math.random()-.5)}makeNextToken(){const e=this._tokens.pop()||null;return this._target=e,this._target}prepare(){return this._tokens=this.initialTokens.slice(),this}get target(){return this._target}restore(e){if(this._tokens=e.tokens.map(t=>this.initialTokens.find(n=>t===n.token)).filter(Boolean),this._target=this.initialTokens.find(t=>e.target===t.token),!this._target)throw new Error("Cant restore tokens")}get state(){var e;return{target:(e=this._target)==null?void 0:e.token,tokens:this._tokens.map(t=>t.token)}}}class Xm{addMessagesListener(e){window.addEventListener("message",e)}postMessage(e){window.postMessage(e)}}class Ym extends Im{constructor(e){super(e),this.domElement.id="notation-container",this.domElement.style.position="absolute",this.domElement.style.top="0px",this.domElement.style.pointerEvents="none"}}class kr extends zi{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const r=this,a=new il(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(N,L){if(N.nodeType!==1)return;const M=y(N);let w=!1,X=null;switch(N.nodeName){case"svg":L=g(N,L);break;case"style":r(N);break;case"g":L=g(N,L);break;case"path":L=g(N,L),N.hasAttribute("d")&&(X=i(N));break;case"rect":L=g(N,L),X=c(N);break;case"polygon":L=g(N,L),X=l(N);break;case"polyline":L=g(N,L),X=h(N);break;case"circle":L=g(N,L),X=u(N);break;case"ellipse":L=g(N,L),X=d(N);break;case"line":L=g(N,L),X=p(N);break;case"defs":w=!0;break;case"use":L=g(N,L);const ue=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),H=N.viewportElement.getElementById(ue);H?n(H,L):console.warn("SVGLoader: 'use node' references non-existent node id: "+ue);break}X&&(L.fill!==void 0&&L.fill!=="none"&&X.color.setStyle(L.fill),R(X,ne),Q.push(X),X.userData={node:N,style:L});const re=N.childNodes;for(let k=0;k<re.length;k++){const ue=re[k];w&&ue.nodeName!=="style"&&ue.nodeName!=="defs"||n(ue,L)}M&&(z.pop(),z.length>0?ne.copy(z[z.length-1]):ne.identity())}function i(N){const L=new bn,M=new fe,w=new fe,X=new fe;let re=!0,k=!1;const H=N.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let W=0,B=H.length;W<B;W++){const ee=H[W],ie=ee.charAt(0),pe=ee.slice(1).trim();re===!0&&(k=!0,re=!1);let O;switch(ie){case"M":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=2)M.x=O[C+0],M.y=O[C+1],w.x=M.x,w.y=M.y,C===0?L.moveTo(M.x,M.y):L.lineTo(M.x,M.y),C===0&&X.copy(M);break;case"H":O=f(pe);for(let C=0,ve=O.length;C<ve;C++)M.x=O[C],w.x=M.x,w.y=M.y,L.lineTo(M.x,M.y),C===0&&k===!0&&X.copy(M);break;case"V":O=f(pe);for(let C=0,ve=O.length;C<ve;C++)M.y=O[C],w.x=M.x,w.y=M.y,L.lineTo(M.x,M.y),C===0&&k===!0&&X.copy(M);break;case"L":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=2)M.x=O[C+0],M.y=O[C+1],w.x=M.x,w.y=M.y,L.lineTo(M.x,M.y),C===0&&k===!0&&X.copy(M);break;case"C":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=6)L.bezierCurveTo(O[C+0],O[C+1],O[C+2],O[C+3],O[C+4],O[C+5]),w.x=O[C+2],w.y=O[C+3],M.x=O[C+4],M.y=O[C+5],C===0&&k===!0&&X.copy(M);break;case"S":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=4)L.bezierCurveTo(m(M.x,w.x),m(M.y,w.y),O[C+0],O[C+1],O[C+2],O[C+3]),w.x=O[C+0],w.y=O[C+1],M.x=O[C+2],M.y=O[C+3],C===0&&k===!0&&X.copy(M);break;case"Q":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=4)L.quadraticCurveTo(O[C+0],O[C+1],O[C+2],O[C+3]),w.x=O[C+0],w.y=O[C+1],M.x=O[C+2],M.y=O[C+3],C===0&&k===!0&&X.copy(M);break;case"T":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=2){const Te=m(M.x,w.x),P=m(M.y,w.y);L.quadraticCurveTo(Te,P,O[C+0],O[C+1]),w.x=Te,w.y=P,M.x=O[C+0],M.y=O[C+1],C===0&&k===!0&&X.copy(M)}break;case"A":O=f(pe,[3,4],7);for(let C=0,ve=O.length;C<ve;C+=7){if(O[C+5]==M.x&&O[C+6]==M.y)continue;const Te=M.clone();M.x=O[C+5],M.y=O[C+6],w.x=M.x,w.y=M.y,a(L,O[C],O[C+1],O[C+2],O[C+3],O[C+4],Te,M),C===0&&k===!0&&X.copy(M)}break;case"m":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=2)M.x+=O[C+0],M.y+=O[C+1],w.x=M.x,w.y=M.y,C===0?L.moveTo(M.x,M.y):L.lineTo(M.x,M.y),C===0&&X.copy(M);break;case"h":O=f(pe);for(let C=0,ve=O.length;C<ve;C++)M.x+=O[C],w.x=M.x,w.y=M.y,L.lineTo(M.x,M.y),C===0&&k===!0&&X.copy(M);break;case"v":O=f(pe);for(let C=0,ve=O.length;C<ve;C++)M.y+=O[C],w.x=M.x,w.y=M.y,L.lineTo(M.x,M.y),C===0&&k===!0&&X.copy(M);break;case"l":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=2)M.x+=O[C+0],M.y+=O[C+1],w.x=M.x,w.y=M.y,L.lineTo(M.x,M.y),C===0&&k===!0&&X.copy(M);break;case"c":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=6)L.bezierCurveTo(M.x+O[C+0],M.y+O[C+1],M.x+O[C+2],M.y+O[C+3],M.x+O[C+4],M.y+O[C+5]),w.x=M.x+O[C+2],w.y=M.y+O[C+3],M.x+=O[C+4],M.y+=O[C+5],C===0&&k===!0&&X.copy(M);break;case"s":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=4)L.bezierCurveTo(m(M.x,w.x),m(M.y,w.y),M.x+O[C+0],M.y+O[C+1],M.x+O[C+2],M.y+O[C+3]),w.x=M.x+O[C+0],w.y=M.y+O[C+1],M.x+=O[C+2],M.y+=O[C+3],C===0&&k===!0&&X.copy(M);break;case"q":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=4)L.quadraticCurveTo(M.x+O[C+0],M.y+O[C+1],M.x+O[C+2],M.y+O[C+3]),w.x=M.x+O[C+0],w.y=M.y+O[C+1],M.x+=O[C+2],M.y+=O[C+3],C===0&&k===!0&&X.copy(M);break;case"t":O=f(pe);for(let C=0,ve=O.length;C<ve;C+=2){const Te=m(M.x,w.x),P=m(M.y,w.y);L.quadraticCurveTo(Te,P,M.x+O[C+0],M.y+O[C+1]),w.x=Te,w.y=P,M.x=M.x+O[C+0],M.y=M.y+O[C+1],C===0&&k===!0&&X.copy(M)}break;case"a":O=f(pe,[3,4],7);for(let C=0,ve=O.length;C<ve;C+=7){if(O[C+5]==0&&O[C+6]==0)continue;const Te=M.clone();M.x+=O[C+5],M.y+=O[C+6],w.x=M.x,w.y=M.y,a(L,O[C],O[C+1],O[C+2],O[C+3],O[C+4],Te,M),C===0&&k===!0&&X.copy(M)}break;case"Z":case"z":L.currentPath.autoClose=!0,L.currentPath.curves.length>0&&(M.copy(X),L.currentPath.currentPoint.copy(M),re=!0);break;default:console.warn(ee)}k=!1}return L}function r(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let L=0;L<N.sheet.cssRules.length;L++){const M=N.sheet.cssRules[L];if(M.type!==1)continue;const w=M.selectorText.split(/,/gm).filter(Boolean).map(X=>X.trim());for(let X=0;X<w.length;X++){const re=Object.fromEntries(Object.entries(M.style).filter(([,k])=>k!==""));Y[w[X]]=Object.assign(Y[w[X]]||{},re)}}}function a(N,L,M,w,X,re,k,ue){if(L==0||M==0){N.lineTo(ue.x,ue.y);return}w=w*Math.PI/180,L=Math.abs(L),M=Math.abs(M);const H=(k.x-ue.x)/2,W=(k.y-ue.y)/2,B=Math.cos(w)*H+Math.sin(w)*W,ee=-Math.sin(w)*H+Math.cos(w)*W;let ie=L*L,pe=M*M;const O=B*B,C=ee*ee,ve=O/ie+C/pe;if(ve>1){const q=Math.sqrt(ve);L=q*L,M=q*M,ie=L*L,pe=M*M}const Te=ie*C+pe*O,P=(ie*pe-Te)/Te;let S=Math.sqrt(Math.max(0,P));X===re&&(S=-S);const K=S*L*ee/M,me=-S*M*B/L,_e=Math.cos(w)*K-Math.sin(w)*me+(k.x+ue.x)/2,be=Math.sin(w)*K+Math.cos(w)*me+(k.y+ue.y)/2,Le=o(1,0,(B-K)/L,(ee-me)/M),D=o((B-K)/L,(ee-me)/M,(-B-K)/L,(-ee-me)/M)%(Math.PI*2);N.currentPath.absellipse(_e,be,L,M,Le,Le+D,re===0,w)}function o(N,L,M,w){const X=N*M+L*w,re=Math.sqrt(N*N+L*L)*Math.sqrt(M*M+w*w);let k=Math.acos(Math.max(-1,Math.min(1,X/re)));return N*w-L*M<0&&(k=-k),k}function c(N){const L=v(N.getAttribute("x")||0),M=v(N.getAttribute("y")||0),w=v(N.getAttribute("rx")||N.getAttribute("ry")||0),X=v(N.getAttribute("ry")||N.getAttribute("rx")||0),re=v(N.getAttribute("width")),k=v(N.getAttribute("height")),ue=1-.551915024494,H=new bn;return H.moveTo(L+w,M),H.lineTo(L+re-w,M),(w!==0||X!==0)&&H.bezierCurveTo(L+re-w*ue,M,L+re,M+X*ue,L+re,M+X),H.lineTo(L+re,M+k-X),(w!==0||X!==0)&&H.bezierCurveTo(L+re,M+k-X*ue,L+re-w*ue,M+k,L+re-w,M+k),H.lineTo(L+w,M+k),(w!==0||X!==0)&&H.bezierCurveTo(L+w*ue,M+k,L,M+k-X*ue,L,M+k-X),H.lineTo(L,M+X),(w!==0||X!==0)&&H.bezierCurveTo(L,M+X*ue,L+w*ue,M,L+w,M),H}function l(N){function L(re,k,ue){const H=v(k),W=v(ue);X===0?w.moveTo(H,W):w.lineTo(H,W),X++}const M=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,w=new bn;let X=0;return N.getAttribute("points").replace(M,L),w.currentPath.autoClose=!0,w}function h(N){function L(re,k,ue){const H=v(k),W=v(ue);X===0?w.moveTo(H,W):w.lineTo(H,W),X++}const M=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,w=new bn;let X=0;return N.getAttribute("points").replace(M,L),w.currentPath.autoClose=!1,w}function u(N){const L=v(N.getAttribute("cx")||0),M=v(N.getAttribute("cy")||0),w=v(N.getAttribute("r")||0),X=new li;X.absarc(L,M,w,0,Math.PI*2);const re=new bn;return re.subPaths.push(X),re}function d(N){const L=v(N.getAttribute("cx")||0),M=v(N.getAttribute("cy")||0),w=v(N.getAttribute("rx")||0),X=v(N.getAttribute("ry")||0),re=new li;re.absellipse(L,M,w,X,0,Math.PI*2);const k=new bn;return k.subPaths.push(re),k}function p(N){const L=v(N.getAttribute("x1")||0),M=v(N.getAttribute("y1")||0),w=v(N.getAttribute("x2")||0),X=v(N.getAttribute("y2")||0),re=new bn;return re.moveTo(L,M),re.lineTo(w,X),re.currentPath.autoClose=!1,re}function g(N,L){L=Object.assign({},L);let M={};if(N.hasAttribute("class")){const k=N.getAttribute("class").split(/\s/).filter(Boolean).map(ue=>ue.trim());for(let ue=0;ue<k.length;ue++)M=Object.assign(M,Y["."+k[ue]])}N.hasAttribute("id")&&(M=Object.assign(M,Y["#"+N.getAttribute("id")]));function w(k,ue,H){H===void 0&&(H=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),N.hasAttribute(k)&&(L[ue]=H(N.getAttribute(k))),M[k]&&(L[ue]=H(M[k])),N.style&&N.style[k]!==""&&(L[ue]=H(N.style[k]))}function X(k){return Math.max(0,Math.min(1,v(k)))}function re(k){return Math.max(0,v(k))}return w("fill","fill"),w("fill-opacity","fillOpacity",X),w("fill-rule","fillRule"),w("opacity","opacity",X),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",X),w("stroke-width","strokeWidth",re),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",re),w("visibility","visibility"),L}function m(N,L){return N-(L-N)}function f(N,L,M){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const w={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},X=0,re=1,k=2,ue=3;let H=X,W=!0,B="",ee="";const ie=[];function pe(Te,P,S){const K=new SyntaxError('Unexpected character "'+Te+'" at index '+P+".");throw K.partial=S,K}function O(){B!==""&&(ee===""?ie.push(Number(B)):ie.push(Number(B)*Math.pow(10,Number(ee)))),B="",ee=""}let C;const ve=N.length;for(let Te=0;Te<ve;Te++){if(C=N[Te],Array.isArray(L)&&L.includes(ie.length%M)&&w.FLAGS.test(C)){H=re,B=C,O();continue}if(H===X){if(w.WHITESPACE.test(C))continue;if(w.DIGIT.test(C)||w.SIGN.test(C)){H=re,B=C;continue}if(w.POINT.test(C)){H=k,B=C;continue}w.COMMA.test(C)&&(W&&pe(C,Te,ie),W=!0)}if(H===re){if(w.DIGIT.test(C)){B+=C;continue}if(w.POINT.test(C)){B+=C,H=k;continue}if(w.EXP.test(C)){H=ue;continue}w.SIGN.test(C)&&B.length===1&&w.SIGN.test(B[0])&&pe(C,Te,ie)}if(H===k){if(w.DIGIT.test(C)){B+=C;continue}if(w.EXP.test(C)){H=ue;continue}w.POINT.test(C)&&B[B.length-1]==="."&&pe(C,Te,ie)}if(H===ue){if(w.DIGIT.test(C)){ee+=C;continue}if(w.SIGN.test(C)){if(ee===""){ee+=C;continue}ee.length===1&&w.SIGN.test(ee)&&pe(C,Te,ie)}}w.WHITESPACE.test(C)?(O(),H=X,W=!1):w.COMMA.test(C)?(O(),H=X,W=!0):w.SIGN.test(C)?(O(),H=re,B=C):w.POINT.test(C)?(O(),H=k,B=C):pe(C,Te,ie)}return O(),ie}const _=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(N){let L="px";if(typeof N=="string"||N instanceof String)for(let w=0,X=_.length;w<X;w++){const re=_[w];if(N.endsWith(re)){L=re,N=N.substring(0,N.length-re.length);break}}let M;return L==="px"&&t.defaultUnit!=="px"?M=T.in[t.defaultUnit]/t.defaultDPI:(M=T[L][t.defaultUnit],M<0&&(M=T[L].in*t.defaultDPI)),M*parseFloat(N)}function y(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const L=b(N);return z.length>0&&L.premultiply(z[z.length-1]),ne.copy(L),z.push(L),L}function b(N){const L=new nt,M=te;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const w=v(N.getAttribute("x")),X=v(N.getAttribute("y"));L.translate(w,X)}if(N.hasAttribute("transform")){const w=N.getAttribute("transform").split(")");for(let X=w.length-1;X>=0;X--){const re=w[X].trim();if(re==="")continue;const k=re.indexOf("("),ue=re.length;if(k>0&&k<ue){const H=re.slice(0,k),W=f(re.slice(k+1));switch(M.identity(),H){case"translate":if(W.length>=1){const B=W[0];let ee=0;W.length>=2&&(ee=W[1]),M.translate(B,ee)}break;case"rotate":if(W.length>=1){let B=0,ee=0,ie=0;B=W[0]*Math.PI/180,W.length>=3&&(ee=W[1],ie=W[2]),ae.makeTranslation(-ee,-ie),J.makeRotation(B),U.multiplyMatrices(J,ae),ae.makeTranslation(ee,ie),M.multiplyMatrices(ae,U)}break;case"scale":if(W.length>=1){const B=W[0];let ee=B;W.length>=2&&(ee=W[1]),M.scale(B,ee)}break;case"skewX":W.length===1&&M.set(1,Math.tan(W[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":W.length===1&&M.set(1,0,0,Math.tan(W[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":W.length===6&&M.set(W[0],W[2],W[4],W[1],W[3],W[5],0,0,1);break}}L.premultiply(M)}}return L}function R(N,L){function M(k){ce.set(k.x,k.y,1).applyMatrix3(L),k.set(ce.x,ce.y)}function w(k){const ue=k.xRadius,H=k.yRadius,W=Math.cos(k.aRotation),B=Math.sin(k.aRotation),ee=new V(ue*W,ue*B,0),ie=new V(-H*B,H*W,0),pe=ee.applyMatrix3(L),O=ie.applyMatrix3(L),C=te.set(pe.x,O.x,0,pe.y,O.y,0,0,0,1),ve=ae.copy(C).invert(),S=J.copy(ve).transpose().multiply(ve).elements,K=Z(S[0],S[1],S[4]),me=Math.sqrt(K.rt1),_e=Math.sqrt(K.rt2);if(k.xRadius=1/me,k.yRadius=1/_e,k.aRotation=Math.atan2(K.sn,K.cs),!((k.aEndAngle-k.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Le=ae.set(me,0,0,0,_e,0,0,0,1),D=J.set(K.cs,K.sn,0,-K.sn,K.cs,0,0,0,1),q=Le.multiply(D).multiply(C),Me=we=>{const{x:Se,y:Ae}=new V(Math.cos(we),Math.sin(we),0).applyMatrix3(q);return Math.atan2(Ae,Se)};k.aStartAngle=Me(k.aStartAngle),k.aEndAngle=Me(k.aEndAngle),I(L)&&(k.aClockwise=!k.aClockwise)}}function X(k){const ue=E(L),H=F(L);k.xRadius*=ue,k.yRadius*=H;const W=ue>Number.EPSILON?Math.atan2(L.elements[1],L.elements[0]):Math.atan2(-L.elements[3],L.elements[4]);k.aRotation+=W,I(L)&&(k.aStartAngle*=-1,k.aEndAngle*=-1,k.aClockwise=!k.aClockwise)}const re=N.subPaths;for(let k=0,ue=re.length;k<ue;k++){const W=re[k].curves;for(let B=0;B<W.length;B++){const ee=W[B];ee.isLineCurve?(M(ee.v1),M(ee.v2)):ee.isCubicBezierCurve?(M(ee.v0),M(ee.v1),M(ee.v2),M(ee.v3)):ee.isQuadraticBezierCurve?(M(ee.v0),M(ee.v1),M(ee.v2)):ee.isEllipseCurve&&(de.set(ee.aX,ee.aY),M(de),ee.aX=de.x,ee.aY=de.y,x(L)?w(ee):X(ee))}}}function I(N){const L=N.elements;return L[0]*L[4]-L[1]*L[3]<0}function x(N){const L=N.elements,M=L[0]*L[3]+L[1]*L[4];if(M===0)return!1;const w=E(N),X=F(N);return Math.abs(M/(w*X))>Number.EPSILON}function E(N){const L=N.elements;return Math.sqrt(L[0]*L[0]+L[1]*L[1])}function F(N){const L=N.elements;return Math.sqrt(L[3]*L[3]+L[4]*L[4])}function Z(N,L,M){let w,X,re,k,ue;const H=N+M,W=N-M,B=Math.sqrt(W*W+4*L*L);return H>0?(w=.5*(H+B),ue=1/w,X=N*ue*M-L*ue*L):H<0?X=.5*(H-B):(w=.5*B,X=-.5*B),W>0?re=W+B:re=W-B,Math.abs(re)>2*Math.abs(L)?(ue=-2*L/re,k=1/Math.sqrt(1+ue*ue),re=ue*k):Math.abs(L)===0?(re=1,k=0):(ue=-.5*re/L,re=1/Math.sqrt(1+ue*ue),k=ue*re),W>0&&(ue=re,re=-k,k=ue),{rt1:w,rt2:X,cs:re,sn:k}}const Q=[],Y={},z=[],te=new nt,ae=new nt,J=new nt,U=new nt,de=new fe,ce=new V,ne=new nt,se=new DOMParser().parseFromString(e,"image/svg+xml");return n(se.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:Q,xml:se.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(f,_,T,v){const y=f.x,b=_.x,R=T.x,I=v.x,x=f.y,E=_.y,F=T.y,Z=v.y,Q=(I-R)*(x-F)-(Z-F)*(y-R),Y=(b-y)*(x-F)-(E-x)*(y-R),z=(Z-F)*(b-y)-(I-R)*(E-x),te=Q/z,ae=Y/z;if(z===0&&Q!==0||te<=0||te>=1||ae<0||ae>1)return null;if(Q===0&&z===0){for(let J=0;J<2;J++)if(a(J===0?T:v,f,_),i.loc==n.ORIGIN){const U=J===0?T:v;return{x:U.x,y:U.y,t:i.t}}else if(i.loc==n.BETWEEN){const U=+(y+i.t*(b-y)).toPrecision(10),de=+(x+i.t*(E-x)).toPrecision(10);return{x:U,y:de,t:i.t}}return null}else{for(let de=0;de<2;de++)if(a(de===0?T:v,f,_),i.loc==n.ORIGIN){const ce=de===0?T:v;return{x:ce.x,y:ce.y,t:i.t}}const J=+(y+te*(b-y)).toPrecision(10),U=+(x+te*(E-x)).toPrecision(10);return{x:J,y:U,t:te}}}function a(f,_,T){const v=T.x-_.x,y=T.y-_.y,b=f.x-_.x,R=f.y-_.y,I=v*R-b*y;if(f.x===_.x&&f.y===_.y){i.loc=n.ORIGIN,i.t=0;return}if(f.x===T.x&&f.y===T.y){i.loc=n.DESTINATION,i.t=1;return}if(I<-Number.EPSILON){i.loc=n.LEFT;return}if(I>Number.EPSILON){i.loc=n.RIGHT;return}if(v*b<0||y*R<0){i.loc=n.BEHIND;return}if(Math.sqrt(v*v+y*y)<Math.sqrt(b*b+R*R)){i.loc=n.BEYOND;return}let x;v!==0?x=b/v:x=R/y,i.loc=n.BETWEEN,i.t=x}function o(f,_){const T=[],v=[];for(let y=1;y<f.length;y++){const b=f[y-1],R=f[y];for(let I=1;I<_.length;I++){const x=_[I-1],E=_[I],F=r(b,R,x,E);F!==null&&T.find(Z=>Z.t<=F.t+Number.EPSILON&&Z.t>=F.t-Number.EPSILON)===void 0&&(T.push(F),v.push(new fe(F.x,F.y)))}}return v}function c(f,_,T){const v=new fe;_.getCenter(v);const y=[];return T.forEach(b=>{b.boundingBox.containsPoint(v)&&o(f,b.points).forEach(I=>{y.push({identifier:b.identifier,isCW:b.isCW,point:I})})}),y.sort((b,R)=>b.point.x-R.point.x),y}function l(f,_,T,v,y){(y==null||y==="")&&(y="nonzero");const b=new fe;f.boundingBox.getCenter(b);const R=[new fe(T,b.y),new fe(v,b.y)],I=c(R,f.boundingBox,_);I.sort((Y,z)=>Y.point.x-z.point.x);const x=[],E=[];I.forEach(Y=>{Y.identifier===f.identifier?x.push(Y):E.push(Y)});const F=x[0].point.x,Z=[];let Q=0;for(;Q<E.length&&E[Q].point.x<F;)Z.length>0&&Z[Z.length-1]===E[Q].identifier?Z.pop():Z.push(E[Q].identifier),Q++;if(Z.push(f.identifier),y==="evenodd"){const Y=Z.length%2===0,z=Z[Z.length-2];return{identifier:f.identifier,isHole:Y,for:z}}else if(y==="nonzero"){let Y=!0,z=null,te=null;for(let ae=0;ae<Z.length;ae++){const J=Z[ae];Y?(te=_[J].isCW,Y=!1,z=J):te!==_[J].isCW&&(te=_[J].isCW,Y=!0)}return{identifier:f.identifier,isHole:Y,for:z}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let h=0,u=999999999,d=-999999999,p=e.subPaths.map(f=>{const _=f.getPoints();let T=-999999999,v=999999999,y=-999999999,b=999999999;for(let R=0;R<_.length;R++){const I=_[R];I.y>T&&(T=I.y),I.y<v&&(v=I.y),I.x>y&&(y=I.x),I.x<b&&(b=I.x)}return d<=y&&(d=y+1),u>=b&&(u=b-1),{curves:f.curves,points:_,isCW:Rn.isClockWise(_),identifier:h++,boundingBox:new um(new fe(b,v),new fe(y,T))}});p=p.filter(f=>f.points.length>1);const g=p.map(f=>{var _;return l(f,p,u,d,(_=e.userData)==null?void 0:_.style.fillRule)}),m=[];return p.forEach(f=>{if(!g[f.identifier].isHole){const T=new Ci;T.curves=f.curves,g.filter(y=>y.isHole&&y.for===f.identifier).forEach(y=>{const b=p[y.identifier],R=new li;R.curves=b.curves,T.holes.push(R)}),m.push(T)}}),m}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){const r=[],a=[],o=[];if(kr.pointsToStrokeWithBuffers(e,t,n,i,r,a,o)===0)return null;const c=new Et;return c.setAttribute("position",new lt(r,3)),c.setAttribute("normal",new lt(a,3)),c.setAttribute("uv",new lt(o,2)),c}static pointsToStrokeWithBuffers(e,t,n,i,r,a,o,c){const l=new fe,h=new fe,u=new fe,d=new fe,p=new fe,g=new fe,m=new fe,f=new fe,_=new fe,T=new fe,v=new fe,y=new fe,b=new fe,R=new fe,I=new fe,x=new fe,E=new fe;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,e=W(e);const F=e.length;if(F<2)return 0;const Z=e[0].equals(e[F-1]);let Q,Y=e[0],z;const te=t.strokeWidth/2,ae=1/(F-1);let J=0,U,de,ce,ne,se=!1,ge=0,N=c*3,L=c*2;M(e[0],e[1],l).multiplyScalar(te),f.copy(e[0]).sub(l),_.copy(e[0]).add(l),T.copy(f),v.copy(_);for(let B=1;B<F;B++){Q=e[B],B===F-1?Z?z=e[1]:z=void 0:z=e[B+1];const ee=l;if(M(Y,Q,ee),u.copy(ee).multiplyScalar(te),y.copy(Q).sub(u),b.copy(Q).add(u),U=J+ae,de=!1,z!==void 0){M(Q,z,h),u.copy(h).multiplyScalar(te),R.copy(Q).sub(u),I.copy(Q).add(u),ce=!0,u.subVectors(z,Y),ee.dot(u)<0&&(ce=!1),B===1&&(se=ce),u.subVectors(z,Q),u.normalize();const ie=Math.abs(ee.dot(u));if(ie>Number.EPSILON){const pe=te/ie;u.multiplyScalar(-pe),d.subVectors(Q,Y),p.copy(d).setLength(pe).add(u),x.copy(p).negate();const O=p.length(),C=d.length();d.divideScalar(C),g.subVectors(z,Q);const ve=g.length();switch(g.divideScalar(ve),d.dot(x)<C&&g.dot(x)<ve&&(de=!0),E.copy(p).add(Q),x.add(Q),ne=!1,de?ce?(I.copy(x),b.copy(x)):(R.copy(x),y.copy(x)):re(),t.strokeLineJoin){case"bevel":k(ce,de,U);break;case"round":ue(ce,de),ce?X(Q,y,R,U,0):X(Q,I,b,U,1);break;case"miter":case"miter-clip":default:const Te=te*t.strokeMiterLimit/O;if(Te<1)if(t.strokeLineJoin!=="miter-clip"){k(ce,de,U);break}else ue(ce,de),ce?(g.subVectors(E,y).multiplyScalar(Te).add(y),m.subVectors(E,R).multiplyScalar(Te).add(R),w(y,U,0),w(g,U,0),w(Q,U,.5),w(Q,U,.5),w(g,U,0),w(m,U,0),w(Q,U,.5),w(m,U,0),w(R,U,0)):(g.subVectors(E,b).multiplyScalar(Te).add(b),m.subVectors(E,I).multiplyScalar(Te).add(I),w(b,U,1),w(g,U,1),w(Q,U,.5),w(Q,U,.5),w(g,U,1),w(m,U,1),w(Q,U,.5),w(m,U,1),w(I,U,1));else de?(ce?(w(_,J,1),w(f,J,0),w(E,U,0),w(_,J,1),w(E,U,0),w(x,U,1)):(w(_,J,1),w(f,J,0),w(E,U,1),w(f,J,0),w(x,U,0),w(E,U,1)),ce?R.copy(E):I.copy(E)):ce?(w(y,U,0),w(E,U,0),w(Q,U,.5),w(Q,U,.5),w(E,U,0),w(R,U,0)):(w(b,U,1),w(E,U,1),w(Q,U,.5),w(Q,U,.5),w(E,U,1),w(I,U,1)),ne=!0;break}}else re()}else re();!Z&&B===F-1&&H(e[0],T,v,ce,!0,J),J=U,Y=Q,f.copy(R),_.copy(I)}if(!Z)H(Q,y,b,ce,!1,U);else if(de&&r){let B=E,ee=x;se!==ce&&(B=x,ee=E),ce?(ne||se)&&(ee.toArray(r,0*3),ee.toArray(r,3*3),ne&&B.toArray(r,1*3)):(ne||!se)&&(ee.toArray(r,1*3),ee.toArray(r,3*3),ne&&B.toArray(r,0*3))}return ge;function M(B,ee,ie){return ie.subVectors(ee,B),ie.set(-ie.y,ie.x).normalize()}function w(B,ee,ie){r&&(r[N]=B.x,r[N+1]=B.y,r[N+2]=0,a&&(a[N]=0,a[N+1]=0,a[N+2]=1),N+=3,o&&(o[L]=ee,o[L+1]=ie,L+=2)),ge+=3}function X(B,ee,ie,pe,O){l.copy(ee).sub(B).normalize(),h.copy(ie).sub(B).normalize();let C=Math.PI;const ve=l.dot(h);Math.abs(ve)<1&&(C=Math.abs(Math.acos(ve))),C/=n,u.copy(ee);for(let Te=0,P=n-1;Te<P;Te++)d.copy(u).rotateAround(B,C),w(u,pe,O),w(d,pe,O),w(B,pe,.5),u.copy(d);w(d,pe,O),w(ie,pe,O),w(B,pe,.5)}function re(){w(_,J,1),w(f,J,0),w(y,U,0),w(_,J,1),w(y,U,1),w(b,U,0)}function k(B,ee,ie){ee?B?(w(_,J,1),w(f,J,0),w(y,U,0),w(_,J,1),w(y,U,0),w(x,U,1),w(y,ie,0),w(R,ie,0),w(x,ie,.5)):(w(_,J,1),w(f,J,0),w(b,U,1),w(f,J,0),w(x,U,0),w(b,U,1),w(b,ie,1),w(I,ie,0),w(x,ie,.5)):B?(w(y,ie,0),w(R,ie,0),w(Q,ie,.5)):(w(b,ie,1),w(I,ie,0),w(Q,ie,.5))}function ue(B,ee){ee&&(B?(w(_,J,1),w(f,J,0),w(y,U,0),w(_,J,1),w(y,U,0),w(x,U,1),w(y,J,0),w(Q,U,.5),w(x,U,1),w(Q,U,.5),w(R,J,0),w(x,U,1)):(w(_,J,1),w(f,J,0),w(b,U,1),w(f,J,0),w(x,U,0),w(b,U,1),w(b,J,1),w(x,U,0),w(Q,U,.5),w(Q,U,.5),w(x,U,0),w(I,J,1)))}function H(B,ee,ie,pe,O,C){switch(t.strokeLineCap){case"round":O?X(B,ie,ee,C,.5):X(B,ee,ie,C,.5);break;case"square":if(O)l.subVectors(ee,B),h.set(l.y,-l.x),u.addVectors(l,h).add(B),d.subVectors(h,l).add(B),pe?(u.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(u.toArray(r,1*3),u.toArray(r,3*3),d.toArray(r,0*3));else{l.subVectors(ie,B),h.set(l.y,-l.x),u.addVectors(l,h).add(B),d.subVectors(h,l).add(B);const ve=r.length;pe?(u.toArray(r,ve-1*3),d.toArray(r,ve-2*3),d.toArray(r,ve-4*3)):(u.toArray(r,ve-2*3),d.toArray(r,ve-1*3),d.toArray(r,ve-4*3))}break}}function W(B){let ee=!1;for(let pe=1,O=B.length-1;pe<O;pe++)if(B[pe].distanceTo(B[pe+1])<i){ee=!0;break}if(!ee)return B;const ie=[];ie.push(B[0]);for(let pe=1,O=B.length-1;pe<O;pe++)B[pe].distanceTo(B[pe+1])>=i&&ie.push(B[pe]);return ie.push(B[B.length-1]),ie}}}const jm="arrow.svg",Zm={arrow:jm};async function Jm(s){const e=new kr(s),t=Object.entries(Zm).map(async n=>({name:n[0],model:await e.loadAsync("/ricochet-robots-core/"+n[1]).then(i=>i.paths.map(r=>r.toShapes(!0)))}));return await Promise.all(t).then(n=>n.reduce((i,r)=>({...i,[r.name]:r.model}),{}))}class Km{constructor(){He(this,"scene",new Gm);He(this,"camera",new Lt(50,window.innerWidth/window.innerHeight,.1,1e3));He(this,"renderer",new ja({antialias:!0}));He(this,"notationsRenderer",new Ym);He(this,"composer",new gm(this.renderer));He(this,"renderPass",new pm(this.scene,this.camera));He(this,"controls",new Bm(this.camera,this.renderer.domElement));He(this,"raycaster",new Vm);He(this,"loadingManager",new nl);He(this,"arrows");He(this,"board");He(this,"robots");He(this,"gc");He(this,"tc");He(this,"mc");He(this,"clickListener",e=>{const t={x:e.clientX,y:e.clientY},n=this.raycaster.intersects(this.scene,this.camera,t,this.renderer.domElement);if(!n.length)return;let i;return(i=n.find(r=>r.object instanceof ya&&r.object.visible))?this.handleClickByArrow(i.object):(i=n.find(r=>r.object instanceof al&&r.object.visible))?this.handleClickByRobot(i.object):this.handleMissClick()});He(this,"keyupListener",e=>{switch(e.code){case"ArrowLeft":{this.gc.hasSelectedRobot&&this.gc.moveSelectedRobot(0);break}case"ArrowUp":{this.gc.hasSelectedRobot&&this.gc.moveSelectedRobot(1);break}case"ArrowRight":{this.gc.hasSelectedRobot&&this.gc.moveSelectedRobot(2);break}case"ArrowDown":{this.gc.hasSelectedRobot&&this.gc.moveSelectedRobot(3);break}case"Space":{this.handleClickByRobot(this.robots.nextRobot);break}case"KeyN":{this.mc.postMessage({event:"start_round"});break}case"KeyR":{this.mc.postMessage({event:"restore_state"});break}}});He(this,"messagesListener",e=>{switch(e.data.event){case"start_round":{this.gc.setPhasePrepare();break}case"prepare":{this.gc.prepare();break}case"restore_state":{this.gc.restoreState();break}case"show_robots":{this.gc.showRobots();break}case"hide_robots":{this.gc.hideRobots();break}case"next_token":break;case"change_phase":{switch(e.data.phase){case"prepare":{this.gc.setPhasePrepare();break}case"presentation":{this.startListeners();break}case"target_failed":case"target_reached":{console.log("Moves Done:",this.gc.moves);break}case"end_round":{this.gc.setPhaseEndRound();break}}break}}})}async make(){const[e,t,n]=await Promise.all([Cm(this.loadingManager),Dm(this.loadingManager),Jm(this.loadingManager)]);return this.arrows=new Hm(new ya(n.arrow[0])),this.board=new ds(wm,ua,e),this.robots=new Wm().make(Tm,t),this.mc=new Xm,this.tc=new qm(ua),this.gc=new zm(this.board,this.robots,this.arrows,this.tc,this.mc),this.mc.addMessagesListener(this.messagesListener),this.prepareScene(),this}start(){const e=t=>{this.composer.render(),this.notationsRenderer.render(this.scene,this.camera),this.controls.update(),Ur.update(t)};document.body.append(this.renderer.domElement),document.body.append(this.notationsRenderer.domElement),this.renderer.setAnimationLoop(e),this.startListeners(),this.gc.prepare()}prepareScene(){this.scene.add(...this.gc.models),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.notationsRenderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.notationsRenderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}),this.composer.addPass(this.renderPass)}handleMissClick(){return this.controls.enabled=!0,this.scene.changeBackground(),this.gc.clickMiss()}handleClickByArrow(e){return this.controls.enabled=!1,this.gc.clickByArrow(e)}handleClickByRobot(e){return this.controls.enabled=!1,this.controls.toInitialPosition(),this.scene.changeBackground(new We(e.userData.tint)),this.gc.clickByRobot(e)}startListeners(){window.addEventListener("keyup",this.keyupListener),this.renderer.domElement.addEventListener("click",this.clickListener)}}async function $m(){try{(await new Km().make()).start()}catch(s){throw console.error(s),new Error("Not implemented")}}$m()});export default Qm();
