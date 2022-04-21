var h=Object.defineProperty,d=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var l=(t,e,s)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,N=(t,e)=>{for(var s in e||(e={}))C.call(e,s)&&l(t,s,e[s]);if(g)for(var s of g(e))L.call(e,s)&&l(t,s,e[s]);return t},_=(t,e)=>d(t,J(e));import{dv as f,e4 as c,C as T,ej as U,aB as A,bM as y,aC as O,ek as m,el as M,em as q,en as D,eo as $,ep as j,eq as Y,er as H,es as v,bz as F,et as K,eu as B,ev as w,cz as G,Z as p,_ as b,a0 as Q,e1 as k,ew as x}from"./index.3ff546ff.js";async function V(t,e,s){const n=f(t),a=N(_(N({},n.query),{f:"json"}),e.toJSON()),i=c(a,s);return T(n.path+"/areasAndLengths",i).then(o=>o.data)}async function z(t,e,s,n){const a=e[0].spatialReference,i=f(t),o=_(N({},i.query),{f:"json",sr:JSON.stringify(a.toJSON()),polygons:JSON.stringify(U(e).geometries),polylines:JSON.stringify(U(s).geometries)}),I=c(o,n);return T(i.path+"/autoComplete",I).then(({data:u})=>(u.geometries||[]).map(({rings:S})=>new A({spatialReference:a,rings:S})))}async function P(t,e,s){const n=f(t),a=N(_(N({},n.query),{f:"json"}),e.toJSON()),i=e.outSpatialReference||e.geometries[0].spatialReference,o=c(a,s);return T(n.path+"/buffer",o).then(I=>(I.data.geometries||[]).map(({rings:u})=>new A({spatialReference:i,rings:u})))}async function Z(t,e,s){const n=e[0].spatialReference,a=f(t),i=_(N({},a.query),{f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(U(e))}),o=c(i,s);return T(a.path+"/convexHull",o).then(({data:I})=>y(I.geometry).set({spatialReference:n}))}async function W(t,e,s,n){const a=f(t),i=e[0].spatialReference,o=_(N({},n),{query:_(N({},a.query),{f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:O(e[0]),geometries:e}),cutter:JSON.stringify(s)})}),I=await T(a.path+"/cut",o),{cutIndexes:u,geometries:S=[]}=I.data;return{cutIndexes:u,geometries:S.map(E=>{const R=y(E);return R.spatialReference=i,R})}}async function X(t,e,s){const n=e.geometries[0].spatialReference,a=f(t),i=N(_(N({},a.query),{f:"json"}),e.toJSON()),o=c(i,s);return T(a.path+"/densify",o).then(({data:I})=>(I.geometries||[]).map(u=>y(u).set({spatialReference:n})))}async function ee(t,e,s,n){const a=e[0].spatialReference,i=f(t);let o={query:_(N({},i.query),{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(U(e)),geometry:JSON.stringify({geometryType:O(s),geometry:s.toJSON()})})};return n&&(o=N(N({},n),o)),T(i.path+"/difference",o).then(({data:I})=>(I.geometries||[]).map(u=>y(u).set({spatialReference:a})))}async function te(t,e,s){const n=f(t),a=N(_(N({},n.query),{f:"json"}),e.toJSON()),i=c(a,s);return T(n.path+"/distance",i).then(({data:o})=>o&&o.distance)}async function re(t,e,s){const n={};e.sr!=null&&typeof e.sr=="object"?n.sr=e.sr.wkid||JSON.stringify(e.sr):n.sr=e.sr,n.strings=JSON.stringify(e.strings);const a=e.conversionType||"mgrs";n.conversionType=m.toJSON(a),n.conversionMode=e.conversionMode;const i=f(t),o=N(_(N({},i.query),{f:"json"}),n),I=c(o,s);return T(i.path+"/fromGeoCoordinateString",I).then(({data:u})=>u.coordinates)}async function se(t,e,s){const n=(e=M.from(e)).toJSON(),a=q(e),i=f(t),o=N(_(N({},i.query),{f:"json"}),a),I=n.geometries[0].spatialReference,u=c(o,s);return T(i.path+"/generalize",u).then(({data:S})=>(S.geometries||[]).map(E=>y(E).set({spatialReference:I})))}async function ne(t,e,s,n){const a=e[0].spatialReference,i=f(t),o=_(N({},i.query),{f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(U(e)),geometry:JSON.stringify({geometryType:O(s),geometry:s.toJSON()})}),I=c(o,n);return T(i.path+"/intersect",I).then(({data:u})=>(u.geometries||[]).map(S=>y(S).set({spatialReference:a})))}function ae(t,e,s){const n=e.map(u=>u.toJSON()),a=e[0].spatialReference,i=f(t),o=_(N({},i.query),{f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(n)}),I=c(o,s);return T(i.path+"/labelPoints",I).then(({data:u})=>(u.labelPoints||[]).map(S=>y(S).set({spatialReference:a})))}async function ie(t,e,s){e=D.from(e);const n=$(e),a=f(t),i=N(_(N({},a.query),{f:"json"}),n),o=c(i,s);return T(a.path+"/lengths",o).then(({data:I})=>I)}async function oe(t,e,s){e=j.from(e);const n=Y(e),a=f(t),i=N(_(N({},a.query),{f:"json"}),n),o=e.geometries[0].spatialReference,I=c(i,s);return T(a.path+"/offset",I).then(({data:u})=>(u.geometries||[]).map(S=>y(S).set({spatialReference:o})))}async function Ne(t,e,s){e=H.from(e);const n=v(e),a=f(t),i=N(_(N({},a.query),{f:"json"}),n),o=c(i,s);return T(a.path+"/relation",o).then(({data:I})=>I.relations)}async function Ie(t,e,s,n){const a=e.spatialReference,i=f(t),o=_(N({},i.query),{f:"json",sr:JSON.stringify(a.toJSON()),target:JSON.stringify({geometryType:O(e),geometry:e.toJSON()}),reshaper:JSON.stringify(s.toJSON())}),I=c(o,n);return T(i.path+"/reshape",I).then(({data:u})=>y(u.geometry).set({spatialReference:a}))}async function ue(t,e,s){const n=typeof t=="string"?F(t):t,a=e[0].spatialReference,i=O(e[0]),o=_(N({},s),{query:_(N({},n.query),{f:"json",sr:a.wkid?a.wkid:JSON.stringify(a),geometries:JSON.stringify(U(e))})}),{data:I}=await T(n.path+"/simplify",o);return K(I.geometries,i,a)}async function _e(t,e,s){const n={};e.sr!=null&&typeof e.sr=="object"?n.sr=e.sr.wkid||JSON.stringify(e.sr):n.sr=e.sr,n.coordinates=JSON.stringify(e.coordinates);const a=e.conversionType||"mgrs";n.conversionType=m.toJSON(a),n.conversionMode=e.conversionMode,n.numOfDigits=e.numOfDigits,n.rounding=e.rounding,n.addSpaces=e.addSpaces;const i=f(t),o=N(_(N({},i.query),{f:"json"}),n),I=c(o,s);return T(i.path+"/toGeoCoordinateString",I).then(({data:u})=>u.strings)}async function Te(t,e,s){e=B.from(e);const n=w(e),a=f(t),i=N(_(N({},a.query),{f:"json"}),n),o=e.sr,I=c(i,s);return T(a.path+"/trimExtend",I).then(({data:u})=>(u.geometries||[]).map(({paths:S})=>new G({spatialReference:o,paths:S})))}async function fe(t,e,s){const n=e[0].spatialReference,a=f(t),i=_(N({},a.query),{f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(U(e))}),o=c(i,s);return T(a.path+"/union",o).then(({data:I})=>y(I.geometry).set({spatialReference:n}))}let r=class extends k{constructor(t){super(t),this.url=null}areasAndLengths(t,e){return V(this.url,t,e)}autoComplete(t,e,s){return z(this.url,t,e,s)}buffer(t,e){return P(this.url,t,e)}convexHull(t,e){return Z(this.url,t,e)}cut(t,e,s){return W(this.url,t,e,s)}densify(t,e){return X(this.url,t,e)}difference(t,e,s){return ee(this.url,t,e,s)}distance(t,e){return te(this.url,t,e)}fromGeoCoordinateString(t,e){return re(this.url,t,e)}generalize(t,e){return se(this.url,t,e)}intersect(t,e,s){return ne(this.url,t,e,s)}labelPoints(t,e){return ae(this.url,t,e)}lengths(t,e){return ie(this.url,t,e)}offset(t,e){return oe(this.url,t,e)}project(t,e){return x(this.url,t,e)}relation(t,e){return Ne(this.url,t,e)}reshape(t,e,s){return Ie(this.url,t,e,s)}simplify(t,e){return ue(this.url,t,e)}toGeoCoordinateString(t,e){return _e(this.url,t,e)}trimExtend(t,e){return Te(this.url,t,e)}union(t,e){return fe(this.url,t,e)}};r.UNIT_METER=9001,r.UNIT_GERMAN_METER=9031,r.UNIT_FOOT=9002,r.UNIT_SURVEY_FOOT=9003,r.UNIT_CLARKE_FOOT=9005,r.UNIT_FATHOM=9014,r.UNIT_NAUTICAL_MILE=9030,r.UNIT_SURVEY_CHAIN=9033,r.UNIT_SURVEY_LINK=9034,r.UNIT_SURVEY_MILE=9035,r.UNIT_KILOMETER=9036,r.UNIT_CLARKE_YARD=9037,r.UNIT_CLARKE_CHAIN=9038,r.UNIT_CLARKE_LINK=9039,r.UNIT_SEARS_YARD=9040,r.UNIT_SEARS_FOOT=9041,r.UNIT_SEARS_CHAIN=9042,r.UNIT_SEARS_LINK=9043,r.UNIT_BENOIT_1895A_YARD=9050,r.UNIT_BENOIT_1895A_FOOT=9051,r.UNIT_BENOIT_1895A_CHAIN=9052,r.UNIT_BENOIT_1895A_LINK=9053,r.UNIT_BENOIT_1895B_YARD=9060,r.UNIT_BENOIT_1895B_FOOT=9061,r.UNIT_BENOIT_1895B_CHAIN=9062,r.UNIT_BENOIT_1895B_LINK=9063,r.UNIT_INDIAN_FOOT=9080,r.UNIT_INDIAN_1937_FOOT=9081,r.UNIT_INDIAN_1962_FOOT=9082,r.UNIT_INDIAN_1975_FOOT=9083,r.UNIT_INDIAN_YARD=9084,r.UNIT_INDIAN_1937_YARD=9085,r.UNIT_INDIAN_1962_YARD=9086,r.UNIT_INDIAN_1975_YARD=9087,r.UNIT_FOOT_1865=9070,r.UNIT_RADIAN=9101,r.UNIT_DEGREE=9102,r.UNIT_ARCMINUTE=9103,r.UNIT_ARCSECOND=9104,r.UNIT_GRAD=9105,r.UNIT_GON=9106,r.UNIT_MICRORADIAN=9109,r.UNIT_ARCMINUTE_CENTESIMAL=9112,r.UNIT_ARCSECOND_CENTESIMAL=9113,r.UNIT_MIL6400=9114,r.UNIT_BRITISH_1936_FOOT=9095,r.UNIT_GOLDCOAST_FOOT=9094,r.UNIT_INTERNATIONAL_CHAIN=109003,r.UNIT_INTERNATIONAL_LINK=109004,r.UNIT_INTERNATIONAL_YARD=109001,r.UNIT_STATUTE_MILE=9093,r.UNIT_SURVEY_YARD=109002,r.UNIT_50KILOMETER_LENGTH=109030,r.UNIT_150KILOMETER_LENGTH=109031,r.UNIT_DECIMETER=109005,r.UNIT_CENTIMETER=109006,r.UNIT_MILLIMETER=109007,r.UNIT_INTERNATIONAL_INCH=109008,r.UNIT_US_SURVEY_INCH=109009,r.UNIT_INTERNATIONAL_ROD=109010,r.UNIT_US_SURVEY_ROD=109011,r.UNIT_US_NAUTICAL_MILE=109012,r.UNIT_UK_NAUTICAL_MILE=109013,r.UNIT_SQUARE_INCHES="esriSquareInches",r.UNIT_SQUARE_FEET="esriSquareFeet",r.UNIT_SQUARE_YARDS="esriSquareYards",r.UNIT_ACRES="esriAcres",r.UNIT_SQUARE_MILES="esriSquareMiles",r.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",r.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",r.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",r.UNIT_SQUARE_METERS="esriSquareMeters",r.UNIT_ARES="esriAres",r.UNIT_HECTARES="esriHectares",r.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",p([b()],r.prototype,"url",void 0),r=p([Q("esri.tasks.GeometryService")],r);const ye=r;export{ye as default};
