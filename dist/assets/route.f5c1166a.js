var K=Object.defineProperty,Q=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var q=(s,t,i)=>t in s?K(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,T=(s,t)=>{for(var i in t||(t={}))V.call(t,i)&&q(s,i,t[i]);if(k)for(var i of k(t))W.call(t,i)&&q(s,i,t[i]);return s},L=(s,t)=>Q(s,U(t));import{Z as a,_ as y,cU as D,cx as $,a0 as J,c8 as M,dx as x,dj as _,dy as z,C as G,r as C}from"./index.ab15bc04.js";import{a as H,i as j,u as X,f as Y,d as ee,o as te}from"./NAMessage.584881c0.js";import{c as re}from"./DirectionsFeatureSet.cc59007e.js";let g=class extends M{constructor(s){super(s),this.directionLines=null,this.directionPoints=null,this.directions=null,this.route=null,this.routeName=null,this.stops=null}};a([y({type:D,json:{write:!0}})],g.prototype,"directionLines",void 0),a([y({type:D,json:{write:!0}})],g.prototype,"directionPoints",void 0),a([y({type:re,json:{write:!0}})],g.prototype,"directions",void 0),a([y({type:$,json:{write:!0}})],g.prototype,"route",void 0),a([y({type:String,json:{write:!0}})],g.prototype,"routeName",void 0),a([y({type:[$],json:{write:!0}})],g.prototype,"stops",void 0),g=a([J("esri.rest.support.RouteResult")],g);const se=g;function E(s){return s&&D.fromJSON(s).features.map(t=>t)}let c=class extends M{constructor(s){super(s),this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(s,t){return E(t.barriers)}readPolylineBarriers(s){return E(s)}readPolygonBarriers(s){return E(s)}};a([y({type:[H]})],c.prototype,"messages",void 0),a([y({type:[$]})],c.prototype,"pointBarriers",void 0),a([x("pointBarriers",["barriers"])],c.prototype,"readPointBarriers",null),a([y({type:[$]})],c.prototype,"polylineBarriers",void 0),a([x("polylineBarriers")],c.prototype,"readPolylineBarriers",null),a([y({type:[$]})],c.prototype,"polygonBarriers",void 0),a([x("polygonBarriers")],c.prototype,"readPolygonBarriers",null),a([y({type:[se]})],c.prototype,"routeResults",void 0),c=a([J("esri.rest.support.RouteSolveResult")],c);const oe=c,ie=te({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:s=>s.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});function S(s){return(s==null?void 0:s.declaredClass)==="esri.rest.support.FeatureSet"}async function ce(s,t,i){const A=[],v=[],d={},e={},B=_(s),{path:m}=B;S(t.stops)&&j(t.stops.features,v,"stops.features",d),S(t.pointBarriers)&&j(t.pointBarriers.features,v,"pointBarriers.features",d),S(t.polylineBarriers)&&j(t.polylineBarriers.features,v,"polylineBarriers.features",d),S(t.polygonBarriers)&&j(t.polygonBarriers.features,v,"polygonBarriers.features",d);const w=await z(v);for(const l in d){const h=d[l];A.push(l),e[l]=w.slice(h[0],h[1])}if(X(e,A)){let l=null;try{l=await Y(m,t.apiKey,i)}catch{}l&&!l.hasZ&&ee(e,A)}for(const l in e)e[l].forEach((h,I)=>{t.get(l)[I].geometry=h});const N=L(T({},i),{query:L(T(T({},B.query),ie.toQueryParams(t)),{f:"json"})}),f=m.endsWith("/solve")?m:`${m}/solve`,{data:P}=await G(f,N);return ae(P)}function ae(s){var t,i,A,v,d;const e=new Map,{directionLines:B,directionPoints:m,directions:w,routes:N,stops:f,barriers:P,polygonBarriers:l,polylineBarriers:h,messages:I}=s,O=(t=(i=(A=(v=N==null?void 0:N.spatialReference)!=null?v:f==null?void 0:f.spatialReference)!=null?A:P==null?void 0:P.spatialReference)!=null?i:l==null?void 0:l.spatialReference)!=null?t:h==null?void 0:h.spatialReference;N==null||N.features.forEach(r=>{const o=r.attributes.Name,u=r.attributes.ObjectID;e.has(o)?(e.get(o).route=r,e.get(o).routeId=u):e.set(o,{route:r,routeId:u,routeName:o}),C(r.geometry)&&(r.geometry.spatialReference=O)}),w==null||w.forEach(r=>{const o=r.routeName;e.has(o)?e.get(o).directions=r:e.set(o,{routeName:o,directions:r})}),f==null||f.features.forEach(r=>{var o;const u=(o=r.attributes.RouteName)!=null?o:null;e.has(u)?e.get(u).stops?e.get(u).stops.push(r):e.get(u).stops=[r]:e.set(u,{stops:[r],routeName:u}),C(r.geometry)&&(r.geometry.spatialReference=O)});const Z=(d=f==null?void 0:f.features.every(r=>r.attributes.RouteName==null))==null||d;if((f==null?void 0:f.features.length)>0&&Z){const r=Array.from(e.keys())[0];e.get(r).stops=e.get(null).stops,e.delete(null)}B==null||B.features.forEach(r=>{var o;const u=r.attributes.RouteID,n=(o=Array.from(e.values()).find(p=>p.routeId===u))==null?void 0:o.routeName;if(n)if(e.has(n))if(e.get(n).directionLines)e.get(n).directionLines.features.push(r);else{const{fieldAliases:p,geometryType:R,spatialReference:b}=B;e.get(n).directionLines={features:[r],fieldAliases:p,geometryType:R,spatialReference:b}}else{const{fieldAliases:p,geometryType:R,spatialReference:b}=B;e.set(n,{routeName:n,directionLines:{features:[r],fieldAliases:p,geometryType:R,spatialReference:b}})}}),m==null||m.features.forEach(r=>{var o;const u=r.attributes.RouteID,n=(o=Array.from(e.values()).find(p=>p.routeId===u))==null?void 0:o.routeName;if(n)if(e.has(n))if(e.get(n).directionPoints)e.get(n).directionPoints.features.push(r);else{const{fieldAliases:p,geometryType:R,spatialReference:b}=m;e.get(n).directionPoints={features:[r],fieldAliases:p,geometryType:R,spatialReference:b}}else{const{fieldAliases:p,geometryType:R,spatialReference:b}=m;e.set(n,{routeName:n,directionPoints:{features:[r],fieldAliases:p,geometryType:R,spatialReference:b}})}});const F=Array.from(e.values());return oe.fromJSON({routeResults:F,barriers:P,polygonBarriers:l,polylineBarriers:h,messages:I})}export{ce as p};