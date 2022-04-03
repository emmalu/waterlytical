import{k as h,bn as m,ef as o,r as g,bs as _,bL as d,bW as f,g as w,e as u,al as E,j as q,s as F}from"./index.ab15bc04.js";import{m as S}from"./FeatureStore.9fff9e4e.js";import{g as b,f as x}from"./projectionSupport.7571f701.js";import{V as T}from"./QueryEngine.ca1932aa.js";import{O as j,L as I}from"./geojson.82085bfb.js";import{d as C}from"./sourceUtils.cca2681f.js";import{K as k}from"./wfsUtils.0dad9a18.js";import"./PooledRBush.de72ce9c.js";import"./json.da51edc4.js";import"./WhereClause.4b9e8d34.js";import"./QueryEngineCapabilities.650d7541.js";import"./quantizationUtils.8032b3a5.js";import"./utils.3f86be1b.js";import"./ClassBreaksDefinition.6d3728cb.js";import"./spatialQuerySupport.96d6d2ab.js";import"./xmlUtils.0a9bf91b.js";class z{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await k(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await j(s),h(e);const a=I(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!m(this._queryEngine.spatialReference,o))for(const r of a)g(r.geometry)&&(r.geometry=_(b(d(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of a){const i={};C(this._fieldsIndex,i,r.attributes,!0),r.attributes=i,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:r,geometryType:i,featureType:p,objectIdField:y,customParameters:l}=e;this._featureType=p,this._customParameters=l,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new f(r),await this._checkProjection(n),h(t),this._queryEngine=new T({fields:r,geometryType:i,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new S({geometryType:i,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(w(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),q(s)||F.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await x(o,e)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{z as default};