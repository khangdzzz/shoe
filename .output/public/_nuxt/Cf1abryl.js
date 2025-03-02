import{_ as W,t as T,Q as V,v as x,x as _,r as S,E as O,y as z,O as F,o as B,z as A,M as w,K as N,S as H}from"./MD-QCpK6.js";const q={key:0,class:"pyro"},j={__name:"fireworks",props:{isShow:Boolean},setup(s){return(e,t)=>s.isShow?(x(),T("div",q,t[0]||(t[0]=[_("div",{class:"before"},null,-1),_("div",{class:"after"},null,-1)]))):V("",!0)}},$=W(j,[["__scopeId","data-v-9d6ebf88"]]),Y={class:"message"},X={__name:"toast",props:{message:String,type:{type:String,default:"info"},isVisible:{type:Boolean,default:!1},duration:{type:Number,default:3e3}},setup(s){const e=s,t=S(e.isVisible);return O(()=>e.isVisible,i=>{t.value=i}),(i,r)=>t.value?(x(),T("div",{key:0,class:F(["toast",s.type]),onMouseenter:r[0]||(r[0]=(...n)=>i.pauseTimer&&i.pauseTimer(...n)),onMouseleave:r[1]||(r[1]=(...n)=>i.resumeTimer&&i.resumeTimer(...n))},[_("span",Y,z(s.message),1)],34)):V("",!0)}},Q=W(X,[["__scopeId","data-v-7301f6db"]]);function U(s=0,e=0,t=14){return parseFloat((Math.random()*(e-s)+s).toFixed(t))}function c(s=0){return s*Math.PI/180}function G(s,e,t){return e<t?e<=s&&s<t:e<=s||s<t}function J(s,e,t,i){i.save(),i.font=`1px ${e}`;const r=i.measureText(s).width;return i.restore(),t/r}function K(s={x:0,y:0},e,t,i){return(s.x-e)**2+(s.y-t)**2<=i**2}function I(s={x:0,y:0},e={},t=1){const i=e.getBoundingClientRect();return{x:(s.x-i.left)*t,y:(s.y-i.top)*t}}function Z(s,e,t,i){const r=s-t,n=e-i;let a=Math.atan2(-n,-r);return a*=180/Math.PI,a<0&&(a+=360),a}function ee(s=0,e=0){const t=s+e;let i;return t>0?i=t%360:i=360+t%360,i===360&&(i=0),i}function te(s=0,e=0){const t=180-e;return 180-ee(s,t)}function ie(s=0,e=0,t=1){let i=(s%360+e)%360;return i=se(i),i=(t===1?360-i:360+i)%360,i*=t,s+i}function M(s){return typeof s=="object"&&!Array.isArray(s)&&s!==null}function g(s){return typeof s=="number"&&!Number.isNaN(s)}function l({val:s,isValid:e,errorMessage:t,defaultValue:i,action:r=null}){if(e)return r?r():s;if(s===void 0)return i;throw new Error(t)}function se(s=0){return Number(s.toFixed(9))}function ne(s){return Math.sin(s*Math.PI/2)}function re(s={},e={}){if(window.ResizeObserver){const t=new ResizeObserver(()=>{e({redraw:!0})});return t.observe(s),{stop:()=>{t.unobserve(s),t.disconnect()}}}return window.addEventListener("resize",e),{stop:()=>{window.removeEventListener("resize",e)}}}const b=-90,E=500,k=250,y=Object.freeze({left:"left",right:"right",center:"center"}),o=Object.freeze({wheel:{borderColor:"#000",borderWidth:1,debug:!1,image:null,isInteractive:!0,itemBackgroundColors:["#fff"],itemLabelAlign:y.right,itemLabelBaselineOffset:0,itemLabelColors:["#000"],itemLabelFont:"sans-serif",itemLabelFontSizeMax:E,itemLabelRadius:.85,itemLabelRadiusMax:.2,itemLabelRotation:0,itemLabelStrokeColor:"#fff",itemLabelStrokeWidth:0,items:[],lineColor:"#000",lineWidth:1,pixelRatio:0,radius:.95,rotation:0,rotationResistance:-35,rotationSpeedMax:300,offset:{x:0,y:0},onCurrentIndexChange:null,onRest:null,onSpin:null,overlayImage:null,pointerAngle:0},item:{backgroundColor:null,image:null,imageOpacity:1,imageRadius:.5,imageRotation:0,imageScale:1,label:"",labelColor:null,value:null,weight:1}}),L=Object.freeze({pointerLineColor:"#ff00ff",labelBoundingBoxColor:"#ff00ff",labelRadiusColor:"#00ff00",dragPointHue:300});function ae(s={}){le(s),s._handler_onResize=re(s._canvasContainer,({redraw:t=!0})=>{s.resize(),t&&s.draw(performance.now())});const e=()=>{s._mediaQueryList=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),s._mediaQueryList.addEventListener("change",s._handler_onDevicePixelRatioChange,{once:!0})};s._handler_onDevicePixelRatioChange=()=>{s.resize(),e()},e()}function oe(s={}){const e=s.canvas;"PointerEvent"in window?(e.removeEventListener("pointerdown",s._handler_onPointerDown),e.removeEventListener("pointermove",s._handler_onPointerMoveRefreshCursor)):(e.removeEventListener("touchstart",s._handler_onTouchStart),e.removeEventListener("mousedown",s._handler_onMouseDown),e.removeEventListener("mousemove",s._handler_onMouseMoveRefreshCursor)),s._handler_onResize.stop(),s._mediaQueryList.removeEventListener("change",s._handler_onDevicePixelRatioChange)}function le(s={}){const e=s.canvas;s._handler_onPointerMoveRefreshCursor=(t={})=>{const i={x:t.clientX,y:t.clientY};s._isCursorOverWheel=s.wheelHitTest(i),s.refreshCursor()},s._handler_onMouseMoveRefreshCursor=(t={})=>{const i={x:t.clientX,y:t.clientY};s._isCursorOverWheel=s.wheelHitTest(i),s.refreshCursor()},s._handler_onPointerDown=(t={})=>{const i={x:t.clientX,y:t.clientY};if(!s.isInteractive||!s.wheelHitTest(i))return;t.preventDefault(),s.dragStart(i),e.setPointerCapture(t.pointerId),e.addEventListener("pointermove",r),e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("pointerout",n);function r(a={}){a.preventDefault(),s.dragMove({x:a.clientX,y:a.clientY})}function n(a={}){a.preventDefault(),e.releasePointerCapture(a.pointerId),e.removeEventListener("pointermove",r),e.removeEventListener("pointerup",n),e.removeEventListener("pointercancel",n),e.removeEventListener("pointerout",n),s.dragEnd()}},s._handler_onMouseDown=(t={})=>{const i={x:t.clientX,y:t.clientY};if(!s.isInteractive||!s.wheelHitTest(i))return;s.dragStart(i),document.addEventListener("mousemove",r),document.addEventListener("mouseup",n);function r(a={}){a.preventDefault(),s.dragMove({x:a.clientX,y:a.clientY})}function n(a={}){a.preventDefault(),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",n),s.dragEnd()}},s._handler_onTouchStart=(t={})=>{const i={x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY};if(!s.isInteractive||!s.wheelHitTest(i))return;t.preventDefault(),s.dragStart(i),e.addEventListener("touchmove",r),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n);function r(a={}){a.preventDefault(),s.dragMove({x:a.targetTouches[0].clientX,y:a.targetTouches[0].clientY})}function n(a={}){a.preventDefault(),e.removeEventListener("touchmove",r),e.removeEventListener("touchend",n),e.removeEventListener("touchcancel",n),s.dragEnd()}},"PointerEvent"in window?(e.addEventListener("pointerdown",s._handler_onPointerDown),e.addEventListener("pointermove",s._handler_onPointerMoveRefreshCursor)):(e.addEventListener("touchstart",s._handler_onTouchStart),e.addEventListener("mousedown",s._handler_onMouseDown),e.addEventListener("mousemove",s._handler_onMouseMoveRefreshCursor))}class he{constructor(e,t={}){if(!M(e))throw new Error("wheel must be an instance of Wheel");if(!M(t)&&t!==null)throw new Error("props must be an Object or null");this._wheel=e;for(const i of Object.keys(o.item))this["_"+i]=o.item[i];t?this.init(t):this.init(o.item)}init(e={}){this.backgroundColor=e.backgroundColor,this.image=e.image,this.imageOpacity=e.imageOpacity,this.imageRadius=e.imageRadius,this.imageRotation=e.imageRotation,this.imageScale=e.imageScale,this.label=e.label,this.labelColor=e.labelColor,this.value=e.value,this.weight=e.weight}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){typeof e=="string"?this._backgroundColor=e:this._backgroundColor=o.item.backgroundColor,this._wheel.refresh()}get image(){return this._image}set image(e){e instanceof HTMLImageElement?this._image=e:this._image=o.item.image,this._wheel.refresh()}get imageOpacity(){return this._imageOpacity}set imageOpacity(e){typeof e=="number"?this._imageOpacity=e:this._imageOpacity=o.item.imageOpacity,this._wheel.refresh()}get imageRadius(){return this._imageRadius}set imageRadius(e){typeof e=="number"?this._imageRadius=e:this._imageRadius=o.item.imageRadius,this._wheel.refresh()}get imageRotation(){return this._imageRotation}set imageRotation(e){typeof e=="number"?this._imageRotation=e:this._imageRotation=o.item.imageRotation,this._wheel.refresh()}get imageScale(){return this._imageScale}set imageScale(e){typeof e=="number"?this._imageScale=e:this._imageScale=o.item.imageScale,this._wheel.refresh()}get label(){return this._label}set label(e){typeof e=="string"?this._label=e:this._label=o.item.label,this._wheel.refresh()}get labelColor(){return this._labelColor}set labelColor(e){typeof e=="string"?this._labelColor=e:this._labelColor=o.item.labelColor,this._wheel.refresh()}get value(){return this._value}set value(e){e!==void 0?this._value=e:this._value=o.item.value}get weight(){return this._weight}set weight(e){typeof e=="number"?this._weight=e:this._weight=o.item.weight}getIndex(){const e=this._wheel.items.findIndex(t=>t===this);if(e===-1)throw new Error("Item not found in parent Wheel");return e}getCenterAngle(){const e=this._wheel.getItemAngles()[this.getIndex()];return e.start+(e.end-e.start)/2}getStartAngle(){return this._wheel.getItemAngles()[this.getIndex()].start}getEndAngle(){return this._wheel.getItemAngles()[this.getIndex()].end}getRandomAngle(){return U(this.getStartAngle(),this.getEndAngle())}}class ue{constructor(e,t={}){if(!(e instanceof Element))throw new Error("container must be an instance of Element");if(!M(t)&&t!==null)throw new Error("props must be an Object or null");this._frameRequestId=null,this._rotationSpeed=0,this._rotationDirection=1,this._spinToTimeEnd=null,this._lastSpinFrameTime=null,this._isCursorOverWheel=!1,this.add(e);for(const i of Object.keys(o.wheel))this["_"+i]=o.wheel[i];t?this.init(t):this.init(o.wheel)}init(e={}){this._isInitialising=!0,this.borderColor=e.borderColor,this.borderWidth=e.borderWidth,this.debug=e.debug,this.image=e.image,this.isInteractive=e.isInteractive,this.itemBackgroundColors=e.itemBackgroundColors,this.itemLabelAlign=e.itemLabelAlign,this.itemLabelBaselineOffset=e.itemLabelBaselineOffset,this.itemLabelColors=e.itemLabelColors,this.itemLabelFont=e.itemLabelFont,this.itemLabelFontSizeMax=e.itemLabelFontSizeMax,this.itemLabelRadius=e.itemLabelRadius,this.itemLabelRadiusMax=e.itemLabelRadiusMax,this.itemLabelRotation=e.itemLabelRotation,this.itemLabelStrokeColor=e.itemLabelStrokeColor,this.itemLabelStrokeWidth=e.itemLabelStrokeWidth,this.items=e.items,this.lineColor=e.lineColor,this.lineWidth=e.lineWidth,this.pixelRatio=e.pixelRatio,this.rotationSpeedMax=e.rotationSpeedMax,this.radius=e.radius,this.rotation=e.rotation,this.rotationResistance=e.rotationResistance,this.offset=e.offset,this.onCurrentIndexChange=e.onCurrentIndexChange,this.onRest=e.onRest,this.onSpin=e.onSpin,this.overlayImage=e.overlayImage,this.pointerAngle=e.pointerAngle}add(e){this._canvasContainer=e,this.canvas=document.createElement("canvas"),this.canvas.style.display="block",this._context=this.canvas.getContext("2d"),this._canvasContainer.append(this.canvas),ae(this),this._isInitialising===!1&&this.resize()}remove(){this.canvas!==null&&(this._frameRequestId!==null&&window.cancelAnimationFrame(this._frameRequestId),oe(this),this._canvasContainer.removeChild(this.canvas),this._canvasContainer=null,this.canvas=null,this._context=null)}resize(){if(this.canvas===null)return;this.canvas.style.width=this._canvasContainer.clientWidth+"px",this.canvas.style.height=this._canvasContainer.clientHeight+"px";const[e,t]=[this._canvasContainer.clientWidth*this.getActualPixelRatio(),this._canvasContainer.clientHeight*this.getActualPixelRatio()];this.canvas.width=e,this.canvas.height=t;const i=Math.min(e,t),r={w:i-i*this._offset.x,h:i-i*this._offset.y},n=Math.min(e/r.w,t/r.h);this._size=Math.max(r.w*n,r.h*n),this._center={x:e/2+e*this._offset.x,y:t/2+t*this._offset.y},this._actualRadius=this._size/2*this.radius,this._itemLabelFontSize=this.itemLabelFontSizeMax*(this._size/E),this._labelMaxWidth=this._actualRadius*(this.itemLabelRadius-this.itemLabelRadiusMax),this.itemLabelAlign==="center"&&(this._labelMaxWidth*=2);for(const a of this._items)this._itemLabelFontSize=Math.min(this._itemLabelFontSize,J(a.label,this.itemLabelFont,this._labelMaxWidth,this._context));this.refresh()}draw(e=0){if(this._frameRequestId=null,this._context===null||this.canvas===null)return;const t=this._context;t.clearRect(0,0,this.canvas.width,this.canvas.height),this.animateRotation(e);const i=this.getItemAngles(this._rotation),r=this.getScaledNumber(this._borderWidth);t.textBaseline="middle",t.textAlign=this.itemLabelAlign,t.font=this._itemLabelFontSize+"px "+this.itemLabelFont;for(const[n,a]of i.entries()){const d=this._items[n],u=new Path2D;u.moveTo(this._center.x,this._center.y),u.arc(this._center.x,this._center.y,this._actualRadius-r/2,c(a.start+b),c(a.end+b)),d.path=u}this.drawItemBackgrounds(t,i),this.drawItemImages(t,i),this.drawItemLines(t,i),this.drawItemLabels(t,i),this.drawBorder(t),this.drawImage(t,this._image,!1),this.drawImage(t,this._overlayImage,!0),this.drawDebugPointerLine(t),this._isInitialising=!1}drawItemBackgrounds(e,t=[]){for(const[i,r]of t.entries()){const n=this._items[i];e.fillStyle=n.backgroundColor??this._itemBackgroundColors[i%this._itemBackgroundColors.length],e.fill(n.path)}}drawItemImages(e,t=[]){for(const[i,r]of t.entries()){const n=this._items[i];if(n.image===null)continue;e.save(),e.clip(n.path);const a=r.start+(r.end-r.start)/2;e.translate(this._center.x+Math.cos(c(a+b))*(this._actualRadius*n.imageRadius),this._center.y+Math.sin(c(a+b))*(this._actualRadius*n.imageRadius)),e.rotate(c(a+n.imageRotation)),e.globalAlpha=n.imageOpacity;const d=this._size/500*n.image.width*n.imageScale,u=this._size/500*n.image.height*n.imageScale,p=-d/2,v=-u/2;e.drawImage(n.image,p,v,d,u),e.restore()}}drawImage(e,t,i=!1){if(t===null)return;e.translate(this._center.x,this._center.y),i||e.rotate(c(this._rotation));const r=i?this._size:this._size*this.radius,n=-(r/2);e.drawImage(t,n,n,r,r),e.resetTransform()}drawDebugPointerLine(e){this.debug&&(e.translate(this._center.x,this._center.y),e.rotate(c(this._pointerAngle+b)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius*2,0),e.strokeStyle=L.pointerLineColor,e.lineWidth=this.getScaledNumber(2),e.stroke(),e.resetTransform())}drawBorder(e){if(this._borderWidth<=0)return;const t=this.getScaledNumber(this._borderWidth),i=this._borderColor||"transparent";if(e.beginPath(),e.strokeStyle=i,e.lineWidth=t,e.arc(this._center.x,this._center.y,this._actualRadius-t/2,0,2*Math.PI),e.stroke(),this.debug){const r=this.getScaledNumber(1);e.beginPath(),e.strokeStyle=e.strokeStyle=L.labelRadiusColor,e.lineWidth=r,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadius,0,2*Math.PI),e.stroke(),e.beginPath(),e.strokeStyle=e.strokeStyle=L.labelRadiusColor,e.lineWidth=r,e.arc(this._center.x,this._center.y,this._actualRadius*this.itemLabelRadiusMax,0,2*Math.PI),e.stroke()}}drawItemLines(e,t=[]){if(this._lineWidth<=0)return;const i=this.getScaledNumber(this._lineWidth),r=this.getScaledNumber(this._borderWidth);e.translate(this._center.x,this._center.y);for(const n of t)e.rotate(c(n.start+b)),e.beginPath(),e.moveTo(0,0),e.lineTo(this._actualRadius-r,0),e.strokeStyle=this.lineColor,e.lineWidth=i,e.stroke(),e.rotate(-c(n.start+b));e.resetTransform()}drawItemLabels(e,t=[]){const i=this._itemLabelFontSize*-this.itemLabelBaselineOffset,r=this.getScaledNumber(1),n=this.getScaledNumber(this._itemLabelStrokeWidth*2);for(const[a,d]of t.entries()){const u=this._items[a],p=u.labelColor||this._itemLabelColors[a%this._itemLabelColors.length]||"transparent";if(u.label.trim()===""||p==="transparent")continue;e.save(),e.clip(u.path);const v=d.start+(d.end-d.start)/2;if(e.translate(this._center.x+Math.cos(c(v+b))*(this._actualRadius*this.itemLabelRadius),this._center.y+Math.sin(c(v+b))*(this._actualRadius*this.itemLabelRadius)),e.rotate(c(v+b)),e.rotate(c(this.itemLabelRotation)),this.debug){e.save();let f=0;this.itemLabelAlign==="left"?f=this._labelMaxWidth:this.itemLabelAlign==="center"&&(f=this._labelMaxWidth/2),e.beginPath(),e.moveTo(f,0),e.lineTo(-this._labelMaxWidth+f,0),e.strokeStyle=L.labelBoundingBoxColor,e.lineWidth=r,e.stroke(),e.strokeRect(f,-this._itemLabelFontSize/2,-this._labelMaxWidth,this._itemLabelFontSize),e.restore()}if(this._itemLabelStrokeWidth>0&&(e.lineWidth=n,e.strokeStyle=this._itemLabelStrokeColor,e.lineJoin="round",e.strokeText(u.label,0,i)),e.fillStyle=p,e.fillText(u.label,0,i),this.debug){const f=this.getScaledNumber(2);e.beginPath(),e.arc(0,0,f,0,2*Math.PI),e.fillStyle=L.labelRadiusColor,e.fill()}e.restore()}}drawDebugDragPoints(e){var n;if(!this.debug||!((n=this._dragEvents)!=null&&n.length))return;const t=[...this._dragEvents].reverse(),i=this.getScaledNumber(.5),r=this.getScaledNumber(4);for(const[a,d]of t.entries()){const u=a/this._dragEvents.length*100;e.beginPath(),e.arc(d.x,d.y,r,0,2*Math.PI),e.fillStyle=`hsl(${L.dragPointHue},100%,${u}%)`,e.strokeStyle="#000",e.lineWidth=i,e.fill(),e.stroke()}}animateRotation(e=0){if(this._spinToTimeEnd!==null){if(e>=this._spinToTimeEnd){this.rotation=this._spinToEndRotation,this._spinToTimeEnd=null,this.raiseEvent_onRest();return}const t=this._spinToTimeEnd-this._spinToTimeStart;let i=(e-this._spinToTimeStart)/t;i=i<0?0:i;const r=this._spinToEndRotation-this._spinToStartRotation;this.rotation=this._spinToStartRotation+r*this._spinToEasingFunction(i),this.refresh();return}if(this._lastSpinFrameTime!==null){const t=e-this._lastSpinFrameTime;t>0&&(this.rotation+=t/1e3*this._rotationSpeed%360,this._rotationSpeed=this.getRotationSpeedPlusDrag(t),this._rotationSpeed===0?(this.raiseEvent_onRest(),this._lastSpinFrameTime=null):this._lastSpinFrameTime=e),this.refresh();return}}getRotationSpeedPlusDrag(e=0){const t=this._rotationSpeed+this.rotationResistance*(e/1e3)*this._rotationDirection;return this._rotationDirection===1&&t<0||this._rotationDirection===-1&&t>=0?0:t}spin(e=0){if(!g(e))throw new Error("rotationSpeed must be a number");this._dragEvents=[],this.beginSpin(e,"spin")}spinTo(e=0,t=0,i=null){if(!g(e))throw new Error("Error: rotation must be a number");if(!g(t))throw new Error("Error: duration must be a number");this.stop(),this._dragEvents=[],this.animate(e,t,i),this.raiseEvent_onSpin({method:"spinto",targetRotation:e,duration:t})}spinToItem(e=0,t=0,i=!0,r=1,n=1,a=null){this.stop(),this._dragEvents=[];const d=i?this.items[e].getCenterAngle():this.items[e].getRandomAngle();let u=ie(this.rotation,d-this._pointerAngle,n);u+=r*360*n,this.animate(u,t,a),this.raiseEvent_onSpin({method:"spintoitem",targetItemIndex:e,targetRotation:u,duration:t})}animate(e,t,i){this._spinToStartRotation=this.rotation,this._spinToEndRotation=e,this._spinToTimeStart=performance.now(),this._spinToTimeEnd=this._spinToTimeStart+t,this._spinToEasingFunction=i||ne,this.refresh()}stop(){this._spinToTimeEnd=null,this._rotationSpeed=0,this._lastSpinFrameTime=null}getScaledNumber(e){return e/E*this._size}getActualPixelRatio(){return this._pixelRatio!==0?this._pixelRatio:window.devicePixelRatio}wheelHitTest(e={x:0,y:0}){if(this.canvas===null)return!1;const t=I(e,this.canvas,this.getActualPixelRatio());return K(t,this._center.x,this._center.y,this._actualRadius)}refreshCursor(){if(this.canvas!==null){if(this.isInteractive){if(this.isDragging){this.canvas.style.cursor="grabbing";return}if(this._isCursorOverWheel){this.canvas.style.cursor="grab";return}}this.canvas.style.cursor=""}}getAngleFromCenter(e={x:0,y:0}){return(Z(this._center.x,this._center.y,e.x,e.y)+90)%360}getCurrentIndex(){return this._currentIndex}refreshCurrentIndex(e=[]){this._items.length===0&&(this._currentIndex=-1);for(const[t,i]of e.entries())if(G(this._pointerAngle,i.start%360,i.end%360)){if(this._currentIndex===t)break;this._currentIndex=t,this._isInitialising||this.raiseEvent_onCurrentIndexChange();break}}getItemAngles(e=0){let t=0;for(const d of this.items)t+=d.weight;const i=360/t;let r,n=e;const a=[];for(const d of this._items)r=d.weight*i,a.push({start:n,end:n+r}),n+=r;return this._items.length>1&&(a[a.length-1].end=a[0].start+360),a}refresh(){this._frameRequestId===null&&(this._frameRequestId=window.requestAnimationFrame(e=>this.draw(e)))}limitSpeed(e=0,t=0){const i=Math.min(e,t);return Math.max(i,-t)}beginSpin(e=0,t=""){this.stop(),this._rotationSpeed=this.limitSpeed(e,this._rotationSpeedMax),this._lastSpinFrameTime=performance.now(),this._rotationDirection=this._rotationSpeed>=0?1:-1,this._rotationSpeed!==0&&this.raiseEvent_onSpin({method:t,rotationSpeed:this._rotationSpeed,rotationResistance:this._rotationResistance}),this.refresh()}refreshAriaLabel(){if(this.canvas===null)return;this.canvas.setAttribute("role","img");const e=this.items.length>=2?` The wheel has ${this.items.length} slices.`:"";this.canvas.setAttribute("aria-label","An image of a spinning prize wheel."+e)}get borderColor(){return this._borderColor}set borderColor(e){this._borderColor=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.borderColor must be a string",defaultValue:o.wheel.borderColor}),this.refresh()}get borderWidth(){return this._borderWidth}set borderWidth(e){this._borderWidth=l({val:e,isValid:g(e),errorMessage:"Wheel.borderWidth must be a number",defaultValue:o.wheel.borderWidth}),this.refresh()}get debug(){return this._debug}set debug(e){this._debug=l({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.debug must be a boolean",defaultValue:o.wheel.debug}),this.refresh()}get image(){return this._image}set image(e){this._image=l({val:e,isValid:e instanceof HTMLImageElement||e===null,errorMessage:"Wheel.image must be a HTMLImageElement or null",defaultValue:o.wheel.image}),this.refresh()}get isInteractive(){return this._isInteractive}set isInteractive(e){this._isInteractive=l({val:e,isValid:typeof e=="boolean",errorMessage:"Wheel.isInteractive must be a boolean",defaultValue:o.wheel.isInteractive}),this.refreshCursor()}get itemBackgroundColors(){return this._itemBackgroundColors}set itemBackgroundColors(e){this._itemBackgroundColors=l({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemBackgroundColors must be an array",defaultValue:o.wheel.itemBackgroundColors}),this.refresh()}get itemLabelAlign(){return this._itemLabelAlign}set itemLabelAlign(e){this._itemLabelAlign=l({val:e,isValid:typeof e=="string"&&(e===y.left||e===y.right||e===y.center),errorMessage:"Wheel.itemLabelAlign must be one of Constants.AlignText",defaultValue:o.wheel.itemLabelAlign}),this.resize()}get itemLabelBaselineOffset(){return this._itemLabelBaselineOffset}set itemLabelBaselineOffset(e){this._itemLabelBaselineOffset=l({val:e,isValid:g(e),errorMessage:"Wheel.itemLabelBaselineOffset must be a number",defaultValue:o.wheel.itemLabelBaselineOffset}),this.resize()}get itemLabelColors(){return this._itemLabelColors}set itemLabelColors(e){this._itemLabelColors=l({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.itemLabelColors must be an array",defaultValue:o.wheel.itemLabelColors}),this.refresh()}get itemLabelFont(){return this._itemLabelFont}set itemLabelFont(e){this._itemLabelFont=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelFont must be a string",defaultValue:o.wheel.itemLabelFont}),this.resize()}get itemLabelFontSizeMax(){return this._itemLabelFontSizeMax}set itemLabelFontSizeMax(e){this._itemLabelFontSizeMax=l({val:e,isValid:g(e),errorMessage:"Wheel.itemLabelFontSizeMax must be a number",defaultValue:o.wheel.itemLabelFontSizeMax}),this.resize()}get itemLabelRadius(){return this._itemLabelRadius}set itemLabelRadius(e){this._itemLabelRadius=l({val:e,isValid:g(e),errorMessage:"Wheel.itemLabelRadius must be a number",defaultValue:o.wheel.itemLabelRadius}),this.resize()}get itemLabelRadiusMax(){return this._itemLabelRadiusMax}set itemLabelRadiusMax(e){this._itemLabelRadiusMax=l({val:e,isValid:g(e),errorMessage:"Wheel.itemLabelRadiusMax must be a number",defaultValue:o.wheel.itemLabelRadiusMax}),this.resize()}get itemLabelRotation(){return this._itemLabelRotation}set itemLabelRotation(e){this._itemLabelRotation=l({val:e,isValid:g(e),errorMessage:"Wheel.itemLabelRotation must be a number",defaultValue:o.wheel.itemLabelRotation}),this.refresh()}get itemLabelStrokeColor(){return this._itemLabelStrokeColor}set itemLabelStrokeColor(e){this._itemLabelStrokeColor=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.itemLabelStrokeColor must be a string",defaultValue:o.wheel.itemLabelStrokeColor}),this.refresh()}get itemLabelStrokeWidth(){return this._itemLabelStrokeWidth}set itemLabelStrokeWidth(e){this._itemLabelStrokeWidth=l({val:e,isValid:g(e),errorMessage:"Wheel.itemLabelStrokeWidth must be a number",defaultValue:o.wheel.itemLabelStrokeWidth}),this.refresh()}get items(){return this._items}set items(e){this._items=l({val:e,isValid:Array.isArray(e),errorMessage:"Wheel.items must be an array of Items",defaultValue:o.wheel.items,action:()=>{const t=[];for(const i of e)t.push(new he(this,i));return t}}),this.refreshAriaLabel(),this.refreshCurrentIndex(this.getItemAngles(this._rotation)),this.resize()}get lineColor(){return this._lineColor}set lineColor(e){this._lineColor=l({val:e,isValid:typeof e=="string",errorMessage:"Wheel.lineColor must be a string",defaultValue:o.wheel.lineColor}),this.refresh()}get lineWidth(){return this._lineWidth}set lineWidth(e){this._lineWidth=l({val:e,isValid:g(e),errorMessage:"Wheel.lineWidth must be a number",defaultValue:o.wheel.lineWidth}),this.refresh()}get offset(){return this._offset}set offset(e){this._offset=l({val:e,isValid:M(e),errorMessage:"Wheel.offset must be an object",defaultValue:o.wheel.offset}),this.resize()}get onCurrentIndexChange(){return this._onCurrentIndexChange}set onCurrentIndexChange(e){this._onCurrentIndexChange=l({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onCurrentIndexChange must be a function or null",defaultValue:o.wheel.onCurrentIndexChange})}get onRest(){return this._onRest}set onRest(e){this._onRest=l({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onRest must be a function or null",defaultValue:o.wheel.onRest})}get onSpin(){return this._onSpin}set onSpin(e){this._onSpin=l({val:e,isValid:typeof e=="function"||e===null,errorMessage:"Wheel.onSpin must be a function or null",defaultValue:o.wheel.onSpin})}get overlayImage(){return this._overlayImage}set overlayImage(e){this._overlayImage=l({val:e,isValid:e instanceof HTMLImageElement||e===null,errorMessage:"Wheel.overlayImage must be a HTMLImageElement or null",defaultValue:o.wheel.overlayImage}),this.refresh()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){this._pixelRatio=l({val:e,isValid:g(e),errorMessage:"Wheel.pixelRatio must be a number",defaultValue:o.wheel.pixelRatio}),this._dragEvents=[],this.resize()}get pointerAngle(){return this._pointerAngle}set pointerAngle(e){this._pointerAngle=l({val:e,isValid:g(e)&&e>=0,errorMessage:"Wheel.pointerAngle must be a number between 0 and 360",defaultValue:o.wheel.pointerAngle,action:()=>e%360}),this.debug&&this.refresh()}get radius(){return this._radius}set radius(e){this._radius=l({val:e,isValid:g(e),errorMessage:"Wheel.radius must be a number",defaultValue:o.wheel.radius}),this.resize()}get rotation(){return this._rotation}set rotation(e){this._rotation=l({val:e,isValid:g(e),errorMessage:"Wheel.rotation must be a number",defaultValue:o.wheel.rotation}),this.refreshCurrentIndex(this.getItemAngles(this._rotation)),this.refresh()}get rotationResistance(){return this._rotationResistance}set rotationResistance(e){this._rotationResistance=l({val:e,isValid:g(e),errorMessage:"Wheel.rotationResistance must be a number",defaultValue:o.wheel.rotationResistance})}get rotationSpeed(){return this._rotationSpeed}get rotationSpeedMax(){return this._rotationSpeedMax}set rotationSpeedMax(e){this._rotationSpeedMax=l({val:e,isValid:g(e)&&e>=0,errorMessage:"Wheel.rotationSpeedMax must be a number >= 0",defaultValue:o.wheel.rotationSpeedMax})}dragStart(e={x:0,y:0}){if(this.canvas===null)return;const t=I(e,this.canvas,this.getActualPixelRatio());this.isDragging=!0,this.stop(),this._dragEvents=[{distance:0,x:t.x,y:t.y,now:performance.now()}],this.refreshCursor()}dragMove(e={x:0,y:0}){if(this.canvas===null)return;const t=I(e,this.canvas,this.getActualPixelRatio()),i=this.getAngleFromCenter(t),r=this._dragEvents[0],n=this.getAngleFromCenter(r),a=te(n,i);this._dragEvents.unshift({distance:a,x:t.x,y:t.y,now:performance.now()}),this.debug&&this._dragEvents.length>=40&&this._dragEvents.pop(),this.rotation+=a}dragEnd(){this.isDragging=!1;let e=0;const t=performance.now();for(const[i,r]of this._dragEvents.entries()){if(!this.isDragEventTooOld(t,r)){e+=r.distance;continue}this._dragEvents.length=i,this.debug&&this.refresh();break}this.refreshCursor(),e!==0&&this.beginSpin(e*(1e3/k),"interact")}isDragEventTooOld(e=0,t={}){return e-t.now>k}raiseEvent_onCurrentIndexChange(e={}){var t;(t=this.onCurrentIndexChange)==null||t.call(this,{type:"currentIndexChange",currentIndex:this._currentIndex,...e})}raiseEvent_onRest(e={}){var t;(t=this.onRest)==null||t.call(this,{type:"rest",currentIndex:this._currentIndex,rotation:this._rotation,...e})}raiseEvent_onSpin(e={}){var t;(t=this.onSpin)==null||t.call(this,{type:"spin",...e})}}async function de(s=[]){if(!("fonts"in document))return;const e=[];for(const t of s)typeof t=="string"&&e.push(document.fonts.load("1em "+t));await Promise.all(e)}async function me(s=[]){const e=[];for(const t of s)t instanceof HTMLImageElement&&e.push(t.decode());try{await Promise.all(e)}catch{throw new Error("An image could not be loaded")}}const ge=Object.freeze({left:"left",right:"right",center:"center"}),C={name:"Money",radius:.88,itemLabelRadius:.93,itemLabelRotation:180,itemLabelAlign:ge.left,itemLabelColors:["#000"],itemLabelBaselineOffset:-.06,itemLabelFont:"Arial",itemLabelFontSizeMax:18,lineWidth:1,lineColor:"#000",overlayImage:"./images/spin/bg.svg",items:[{label:"50.000"},{label:"60.000"},{label:"300.000",weight:.4,backgroundColor:"#f23925",labelColor:"#fff"},{label:"70.000"},{label:"80.000"},{label:"150.000",weight:.6,backgroundColor:"#b1ddff"},{label:"50.000"},{label:"60.000"},{label:"500.000",weight:.3,backgroundColor:"#000",labelColor:"#fff"},{label:"70.000"},{label:"80.000"},{label:"150.000",weight:.6,backgroundColor:"#b1ddff"},{label:"50.000"},{label:"60.000"},{label:"200.000",weight:.5,backgroundColor:"#f23925",labelColor:"#fff"},{label:"70.000"},{label:"80.000"},{label:"150.000",weight:.6,backgroundColor:"#b1ddff"}]},ce={class:"wheel-wrapper",ref:"wheelContainer"},fe={__name:"index",setup(s){let e=0;const t=S(""),i=S(null),r=S(!1),n=S(!1),a=S(!1),d=async()=>{await de(C.itemLabelFont),i.value=new ue(document.querySelector(".wheel-wrapper"));const m=[];m.push(f(C,"image")),m.push(f(C,"overlayImage"));for(const h of C.items)m.push(f(h,"image"));await me(m),H(()=>{document.querySelector(".wheel-wrapper").style.visibility="visible",i.value.init({...C,isInteractive:!1,rotation:i.value.rotation,onCurrentIndexChange:({currentIndex:h})=>{t.value=C.items[h].label},onRest:()=>{n.value=!0,a.value=!0,P(t.value),setTimeout(()=>{a.value=!1,n.value=!1},3e3)},onSpin:()=>{r.value=!0}})})},u=()=>{const{duration:m,winningItemRotaion:h}=p();i.value.spinTo(h,m)},p=()=>{const h=v(360,1080)+e;return e+=360*3,{duration:3e3,winningItemRotaion:h}},v=(m,h)=>(m=Math.ceil(m),h=Math.floor(h),Math.floor(Math.random()*(h-m))+m),f=(m,h)=>{if(!m[h])return null;const R=new Image;return R.src=m[h],m[h]=R,R};B(async()=>{await d()});const P=async m=>{try{const h=await $fetch("/api/telegram",{method:"POST",body:{message:`🎉 Chúc mừng! Bạn đã quay trúng thưởng ${m} 🏆✨`}})}catch(h){console.error("Error sending message:",h)}};return(m,h)=>{const R=$,D=Q;return x(),T(N,null,[h[0]||(h[0]=_("div",{class:"gui-wrapper"},[_("p",{class:"title"},"Chào mừng bạn đến với vòng quay may mắn của RUNNING STORE!")],-1)),A(R,{"is-show":w(n)},null,8,["is-show"]),A(D,{message:"🎉 Bạn đã quay trúng thưởng:"+w(t)+"VND 🏆✨","is-visible":w(a)},null,8,["message","is-visible"]),_("div",ce,[_("div",{class:F(["btn-spin",{disabled:w(r)}]),onClick:u},[_("span",null,z(w(t)||"QUAY"),1)],2)],512)],64)}}},_e=W(fe,[["__scopeId","data-v-090df0ab"]]);export{_e as default};
