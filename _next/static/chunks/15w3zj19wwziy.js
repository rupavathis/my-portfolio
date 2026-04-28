(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88077,(e,t,i)=>{"use strict";function o(e,t,i){i=i||2;var o,p,g,x,m,y,b,_=t&&t.length,C=_?t[0]*i:e.length,P=s(e,0,C,i,!0),L=[];if(!P||P.next===P.prev)return L;if(_&&(P=function(e,t,i,o){var a,d,u,p,g,x=[];for(a=0,d=t.length;a<d;a++)u=t[a]*o,p=a<d-1?t[a+1]*o:e.length,(g=s(e,u,p,o,!1))===g.next&&(g.steiner=!0),x.push(function(e){var t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e)return i}(g));for(x.sort(r),a=0;a<x.length;a++)i=function(e,t){var i=function(e,t){var i,o,s,n=t,r=e.x,a=e.y,d=-1/0;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){var u=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=r&&u>d&&(d=u,s=n.x<n.next.x?n:n.next,u===r))return s}n=n.next}while(n!==t)if(!s)return null;var p,g=s,f=s.x,x=s.y,v=1/0;n=s;do{r>=n.x&&n.x>=f&&r!==n.x&&l(a<x?r:d,a,f,x,a<x?d:r,a,n.x,n.y)&&(p=Math.abs(a-n.y)/(r-n.x),h(n,e)&&(p<v||p===v&&(n.x>s.x||n.x===s.x&&(i=s,o=n,0>c(i.prev,i,o.prev)&&0>c(o.next,i,i.next))))&&(s=n,v=p)),n=n.next}while(n!==g)return s}(e,t);if(!i)return t;var o=f(i,e);return n(o,o.next),n(i,i.next)}(x[a],i);return i}(e,t,P,i)),e.length>80*i){o=g=e[0],p=x=e[1];for(var w=i;w<C;w+=i)m=e[w],y=e[w+1],m<o&&(o=m),y<p&&(p=y),m>g&&(g=m),y>x&&(x=y);b=0!==(b=Math.max(g-o,x-p))?32767/b:0}return function e(t,i,o,s,r,p,g){if(t){!g&&p&&function(e,t,i,o){var s=e;do 0===s.z&&(s.z=a(s.x,s.y,t,i,o)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e)s.prevZ.nextZ=null,s.prevZ=null,function(e){var t,i,o,s,n,r,a,l,c=1;do{for(i=e,e=null,n=null,r=0;i;){for(r++,o=i,a=0,t=0;t<c&&(a++,o=o.nextZ);t++);for(l=c;a>0||l>0&&o;)0!==a&&(0===l||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),n?n.nextZ=s:e=s,s.prevZ=n,n=s;i=o}n.nextZ=null,c*=2}while(r>1)}(s)}(t,s,r,p);for(var x,m,y=t;t.prev!==t.next;){if(x=t.prev,m=t.next,p?function(e,t,i,o){var s=e.prev,n=e.next;if(c(s,e,n)>=0)return!1;for(var r=s.x,d=e.x,u=n.x,p=s.y,g=e.y,h=n.y,f=r<d?r<u?r:u:d<u?d:u,x=p<g?p<h?p:h:g<h?g:h,v=r>d?r>u?r:u:d>u?d:u,m=p>g?p>h?p:h:g>h?g:h,y=a(f,x,t,i,o),b=a(v,m,t,i,o),_=e.prevZ,C=e.nextZ;_&&_.z>=y&&C&&C.z<=b;){if(_.x>=f&&_.x<=v&&_.y>=x&&_.y<=m&&_!==s&&_!==n&&l(r,p,d,g,u,h,_.x,_.y)&&c(_.prev,_,_.next)>=0||(_=_.prevZ,C.x>=f&&C.x<=v&&C.y>=x&&C.y<=m&&C!==s&&C!==n&&l(r,p,d,g,u,h,C.x,C.y)&&c(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;_&&_.z>=y;){if(_.x>=f&&_.x<=v&&_.y>=x&&_.y<=m&&_!==s&&_!==n&&l(r,p,d,g,u,h,_.x,_.y)&&c(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;C&&C.z<=b;){if(C.x>=f&&C.x<=v&&C.y>=x&&C.y<=m&&C!==s&&C!==n&&l(r,p,d,g,u,h,C.x,C.y)&&c(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}(t,s,r,p):function(e){var t=e.prev,i=e.next;if(c(t,e,i)>=0)return!1;for(var o=t.x,s=e.x,n=i.x,r=t.y,a=e.y,d=i.y,u=o<s?o<n?o:n:s<n?s:n,p=r<a?r<d?r:d:a<d?a:d,g=o>s?o>n?o:n:s>n?s:n,h=r>a?r>d?r:d:a>d?a:d,f=i.next;f!==t;){if(f.x>=u&&f.x<=g&&f.y>=p&&f.y<=h&&l(o,r,s,a,n,d,f.x,f.y)&&c(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}(t)){i.push(x.i/o|0),i.push(t.i/o|0),i.push(m.i/o|0),v(t),t=m.next,y=m.next;continue}if((t=m)===y){g?1===g?e(t=function(e,t,i){var o=e;do{var s=o.prev,r=o.next.next;!d(s,r)&&u(s,o,o.next,r)&&h(s,r)&&h(r,s)&&(t.push(s.i/i|0),t.push(o.i/i|0),t.push(r.i/i|0),v(o),v(o.next),o=e=r),o=o.next}while(o!==e)return n(o)}(n(t),i,o),i,o,s,r,p,2):2===g&&function(t,i,o,s,r,a){var l=t;do{for(var p,g,x=l.next.next;x!==l.prev;){if(l.i!==x.i&&(p=l,g=x,p.next.i!==g.i&&p.prev.i!==g.i&&!function(e,t){var i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&u(i,i.next,e,t))return!0;i=i.next}while(i!==e)return!1}(p,g)&&(h(p,g)&&h(g,p)&&function(e,t){var i=e,o=!1,s=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&s<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(o=!o),i=i.next;while(i!==e)return o}(p,g)&&(c(p.prev,p,g.prev)||c(p,g.prev,g))||d(p,g)&&c(p.prev,p,p.next)>0&&c(g.prev,g,g.next)>0))){var v=f(l,x);l=n(l,l.next),v=n(v,v.next),e(l,i,o,s,r,a,0),e(v,i,o,s,r,a,0);return}x=x.next}l=l.next}while(l!==t)}(t,i,o,s,r,p):e(n(t),i,o,s,r,p,1);break}}}}(P,L,i,o,p,b,0),L}function s(e,t,i,o,s){var n,r;if(s===y(e,t,i,o)>0)for(n=t;n<i;n+=o)r=x(n,e[n],e[n+1],r);else for(n=i-o;n>=t;n-=o)r=x(n,e[n],e[n+1],r);return r&&d(r,r.next)&&(v(r),r=r.next),r}function n(e,t){if(!e)return e;t||(t=e);var i,o=e;do if(i=!1,!o.steiner&&(d(o,o.next)||0===c(o.prev,o,o.next))){if(v(o),(o=t=o.prev)===o.next)break;i=!0}else o=o.next;while(i||o!==t)return t}function r(e,t){return e.x-t.x}function a(e,t,i,o,s){return(e=((e=((e=((e=((e=(e-i)*s|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-o)*s|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function l(e,t,i,o,s,n,r,a){return(s-r)*(t-a)>=(e-r)*(n-a)&&(e-r)*(o-a)>=(i-r)*(t-a)&&(i-r)*(n-a)>=(s-r)*(o-a)}function c(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function d(e,t){return e.x===t.x&&e.y===t.y}function u(e,t,i,o){var s=g(c(e,t,i)),n=g(c(e,t,o)),r=g(c(i,o,e)),a=g(c(i,o,t));return!!(s!==n&&r!==a||0===s&&p(e,i,t)||0===n&&p(e,o,t)||0===r&&p(i,e,o)||0===a&&p(i,t,o))}function p(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function g(e){return e>0?1:e<0?-1:0}function h(e,t){return 0>c(e.prev,e,e.next)?c(e,t,e.next)>=0&&c(e,e.prev,t)>=0:0>c(e,t,e.prev)||0>c(e,e.next,t)}function f(e,t){var i=new m(e.i,e.x,e.y),o=new m(t.i,t.x,t.y),s=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=s,s.prev=i,o.next=i,i.prev=o,n.next=o,o.prev=n,o}function x(e,t,i,o){var s=new m(e,t,i);return o?(s.next=o.next,s.prev=o,o.next.prev=s,o.next=s):(s.prev=s,s.next=s),s}function v(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function m(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function y(e,t,i,o){for(var s=0,n=t,r=i-o;n<i;n+=o)s+=(e[r]-e[n])*(e[n+1]+e[r+1]),r=n;return s}t.exports=o,t.exports.default=o,o.deviation=function(e,t,i,o){var s=t&&t.length,n=s?t[0]*i:e.length,r=Math.abs(y(e,0,n,i));if(s)for(var a=0,l=t.length;a<l;a++){var c=t[a]*i,d=a<l-1?t[a+1]*i:e.length;r-=Math.abs(y(e,c,d,i))}var u=0;for(a=0;a<o.length;a+=3){var p=o[a]*i,g=o[a+1]*i,h=o[a+2]*i;u+=Math.abs((e[p]-e[h])*(e[g+1]-e[p+1])-(e[p]-e[g])*(e[h+1]-e[p+1]))}return 0===r&&0===u?0:Math.abs((u-r)/r)},o.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},o=0,s=0;s<e.length;s++){for(var n=0;n<e[s].length;n++)for(var r=0;r<t;r++)i.vertices.push(e[s][n][r]);s>0&&(o+=e[s-1].length,i.holes.push(o))}return i}},31309,e=>{"use strict";var t=e.i(43476),i=e.i(71645),o=e.i(87739),s=e.i(78296),n=e.i(73824),r=e.i(87952),a=e.i(24671),a=a,l=e.i(73729),c=e.i(34810),d=e.i(99023);let u=`\
uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,p={name:"icon",vs:u,fs:u,uniformTypes:{sizeScale:"f32",iconsTextureDim:"vec2<f32>",sizeBasis:"f32",sizeMinPixels:"f32",sizeMaxPixels:"f32",billboard:"f32",sizeUnits:"i32",alphaCutoff:"f32"}},g=`\
#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = instancePickingColors;
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,h=`\
#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;var f=e.i(32632),x=e.i(32003);let v=()=>{},m={minFilter:"linear",mipmapFilter:"linear",magFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"},y={x:0,y:0,width:0,height:0};function b(e){return e&&(e.id||e.url)}function _(e,t,i){for(let o=0;o<t.length;o++){let{icon:s,xOffset:n}=t[o];e[b(s)]={...s,x:n,y:i}}}class C{constructor(e,{onUpdate:t=v,onError:i=v}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=4,this._canvasWidth=1024,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=i}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?b(e):e;return this._mapping[t]||y}setProps({loadOptions:e,autoPacking:t,iconAtlas:i,iconMapping:o,textureParameters:s}){e&&(this._loadOptions=e),void 0!==t&&(this._autoPacking=t),o&&(this._mapping=o),i&&(this._texture?.delete(),this._texture=null,this._externalTexture=i),s&&(this._samplerParameters=s)}get isLoaded(){return 0===this._pendingCount}packIcons(e,t){if(!this._autoPacking||"u"<typeof document)return;let i=Object.values(function(e,t,i){if(!e||!t)return null;i=i||{};let o={},{iterable:s,objectInfo:n}=(0,x.createIterable)(e);for(let e of s){n.index++;let s=t(e,n),r=b(s);if(!s)throw Error("Icon is missing.");if(!s.url)throw Error("Icon url is missing.");o[r]||i[r]&&s.url===i[r].url||(o[r]={...s,source:e,sourceIndex:n.index})}return o}(e,t,this._mapping)||{});if(i.length>0){let{mapping:e,xOffset:t,yOffset:o,rowHeight:s,canvasHeight:n}=function({icons:e,buffer:t,mapping:i={},xOffset:o=0,yOffset:s=0,rowHeight:n=0,canvasWidth:r}){let a=[];for(let l=0;l<e.length;l++){let c=e[l];if(!i[b(c)]){let{height:e,width:l}=c;o+l+t>r&&(_(i,a,s),o=0,s=n+s+t,n=0,a=[]),a.push({icon:c,xOffset:o}),o=o+l+t,n=Math.max(n,e)}}return a.length>0&&_(i,a,s),{mapping:i,rowHeight:n,xOffset:o,yOffset:s,canvasWidth:r,canvasHeight:Math.pow(2,Math.ceil(Math.log2(n+s+t)))}}({icons:i,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=s,this._mapping=e,this._xOffset=t,this._yOffset=o,this._canvasHeight=n,this._texture||(this._texture=this.device.createTexture({format:"rgba8unorm",data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||m,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)})),this._texture.height!==this._canvasHeight&&(this._texture=function(e,t,i,o){let{width:s,height:n,device:r}=e,a=r.createTexture({format:"rgba8unorm",width:t,height:i,sampler:o,mipLevels:r.getMipLevelCount(t,i)}),l=r.createCommandEncoder();return l.copyTextureToTexture({sourceTexture:e,destinationTexture:a,width:s,height:n}),l.finish(),a.generateMipmapsWebGL(),e.destroy(),a}(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||m)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement("canvas"),this._loadIcons(i)}}_loadIcons(e){let t=this._canvas.getContext("2d",{willReadFrequently:!0});for(let i of e)this._pendingCount++,(0,f.load)(i.url,this._loadOptions).then(e=>{let o=b(i),s=this._mapping[o],{x:n,y:r,width:a,height:l}=s,{image:c,width:d,height:u}=function(e,t,i,o){let s=Math.min(i/t.width,o/t.height),n=Math.floor(t.width*s),r=Math.floor(t.height*s);return 1===s?{image:t,width:n,height:r}:(e.canvas.height=r,e.canvas.width=n,e.clearRect(0,0,n,r),e.drawImage(t,0,0,t.width,t.height,0,0,n,r),{image:e.canvas,width:n,height:r})}(t,e,a,l),p=n+(a-d)/2,g=r+(l-u)/2;this._texture?.copyExternalImage({image:c,x:p,y:g,width:d,height:u}),s.x=p,s.y=g,s.width=d,s.height=u,this._texture?.generateMipmapsWebGL(),this.onUpdate(d!==a||u!==l)}).catch(e=>{this.onError({url:i.url,source:i.source,sourceIndex:i.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}}let P=[0,0,0,255],L={iconAtlas:{type:"image",value:null,async:!0},iconMapping:{type:"object",value:{},async:!0},sizeScale:{type:"number",value:1,min:0},billboard:!0,sizeUnits:"pixels",sizeBasis:"height",sizeMinPixels:{type:"number",min:0,value:0},sizeMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},alphaCutoff:{type:"number",value:.05,min:0,max:1},getPosition:{type:"accessor",value:e=>e.position},getIcon:{type:"accessor",value:e=>e.icon},getColor:{type:"accessor",value:P},getSize:{type:"accessor",value:1},getAngle:{type:"accessor",value:0},getPixelOffset:{type:"accessor",value:[0,0]},onIconError:{type:"function",value:null,optional:!0},textureParameters:{type:"object",ignore:!0,value:null}};class w extends s.Layer{getShaders(){return super.getShaders({vs:g,fs:h,modules:[n.project32,r.picking,p]})}initializeState(){this.state={iconManager:new C(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:1},instanceOffsets:{size:2,accessor:"getIcon",transform:this.getInstanceOffset},instanceIconFrames:{size:4,accessor:"getIcon",transform:this.getInstanceIconFrame},instanceColorModes:{size:1,type:"uint8",accessor:"getIcon",transform:this.getInstanceColorMode},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:P},instanceAngles:{size:1,transition:!0,accessor:"getAngle"},instancePixelOffset:{size:2,transition:!0,accessor:"getPixelOffset"}})}updateState(e){super.updateState(e);let{props:t,oldProps:i,changeFlags:o}=e,s=this.getAttributeManager(),{iconAtlas:n,iconMapping:r,data:a,getIcon:l,textureParameters:c}=t,{iconManager:d}=this.state;if("string"==typeof n)return;let u=n||this.internalState.isAsyncPropLoading("iconAtlas");d.setProps({loadOptions:t.loadOptions,autoPacking:!u,iconAtlas:n,iconMapping:u?r:null,textureParameters:c}),u?i.iconMapping!==t.iconMapping&&s.invalidate("getIcon"):(o.dataChanged||o.updateTriggersChanged&&(o.updateTriggersChanged.all||o.updateTriggersChanged.getIcon))&&d.packIcons(a,l),o.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),s.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){let{sizeScale:t,sizeBasis:i,sizeMinPixels:o,sizeMaxPixels:s,sizeUnits:n,billboard:r,alphaCutoff:a}=this.props,{iconManager:c}=this.state,d=c.getTexture();if(d){let e=this.state.model,c={iconsTexture:d,iconsTextureDim:[d.width,d.height],sizeUnits:l.UNIT[n],sizeScale:t,sizeBasis:+("height"===i),sizeMinPixels:o,sizeMaxPixels:s,billboard:r,alphaCutoff:a};e.shaderInputs.setProps({icon:c}),e.draw(this.context.renderPass)}}_getModel(){return new c.Model(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new d.Geometry({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([-1,-1,1,-1,-1,1,1,1])}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate("getIcon"),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):a.default.error(e.error.message)()}getInstanceOffset(e){let{width:t,height:i,anchorX:o=t/2,anchorY:s=i/2}=this.state.iconManager.getIconMapping(e);return[t/2-o,i/2-s]}getInstanceColorMode(e){return+!!this.state.iconManager.getIconMapping(e).mask}getInstanceIconFrame(e){let{x:t,y:i,width:o,height:s}=this.state.iconManager.getIconMapping(e);return[t,i,o,s]}}w.defaultProps=L,w.layerName="IconLayer";var S=s,M=e.i(51727),M=M;let I=`\
uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,T={name:"scatterplot",vs:I,fs:I,source:"",uniformTypes:{radiusScale:"f32",radiusMinPixels:"f32",radiusMaxPixels:"f32",lineWidthScale:"f32",lineWidthMinPixels:"f32",lineWidthMaxPixels:"f32",stroked:"f32",filled:"f32",antialiasing:"f32",billboard:"f32",radiusUnits:"i32",lineWidthUnits:"i32"}},E=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
geometry.pickingColor = instancePickingColors;
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,R=`\
#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,A=`\
// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

struct ConstantAttributeUniforms {
 instancePositions: vec3<f32>,
 instancePositions64Low: vec3<f32>,
 instanceRadius: f32,
 instanceLineWidths: f32,
 instanceFillColors: vec4<f32>,
 instanceLineColors: vec4<f32>,
 instancePickingColors: vec3<f32>,

 instancePositionsConstant: i32,
 instancePositions64LowConstant: i32,
 instanceRadiusConstant: i32,
 instanceLineWidthsConstant: i32,
 instanceFillColorsConstant: i32,
 instanceLineColorsConstant: i32,
 instancePickingColorsConstant: i32
};

@group(0) @binding(2) var<uniform> scatterplot: ScatterplotUniforms;

struct ConstantAttributes {
  instancePositions: vec3<f32>,
  instancePositions64Low: vec3<f32>,
  instanceRadius: f32,
  instanceLineWidths: f32,
  instanceFillColors: vec4<f32>,
  instanceLineColors: vec4<f32>,
  instancePickingColors: vec3<f32>
};

const constants = ConstantAttributes(
  vec3<f32>(0.0),
  vec3<f32>(0.0),
  0.0,
  0.0,
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec4<f32>(0.0, 0.0, 0.0, 1.0),
  vec3<f32>(0.0)
);

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePickingColors: vec3<f32>
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  // var geometry: Geometry;
  // geometry.worldPosition = instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  let edgePadding = select(
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    1.0,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = attributes.instancePickingColors;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, vec3<f32>(0.0)); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    let offset = attributes.positions; // * edgePadding * varyings.outerRadiusPixels;
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position.x = clipPixels.x;
    varyings.position.y = clipPixels.y;
  } else {
    let offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    // DECKGL_FILTER_SIZE(offset, geometry);
    varyings.position = project_position_to_clipspace(attributes.instancePositions, attributes.instancePositions64Low, offset); // TODO , geometry.position);
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * color.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * color.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    step(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;
  // DECKGL_FILTER_COLOR(fragColor, geometry);

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`,z=[0,0,0,255],j={radiusUnits:"meters",radiusScale:{type:"number",min:0,value:1},radiusMinPixels:{type:"number",min:0,value:0},radiusMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},lineWidthUnits:"meters",lineWidthScale:{type:"number",min:0,value:1},lineWidthMinPixels:{type:"number",min:0,value:0},lineWidthMaxPixels:{type:"number",min:0,value:Number.MAX_SAFE_INTEGER},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:"accessor",value:e=>e.position},getRadius:{type:"accessor",value:1},getFillColor:{type:"accessor",value:z},getLineColor:{type:"accessor",value:z},getLineWidth:{type:"accessor",value:1},strokeWidth:{deprecatedFor:"getLineWidth"},outline:{deprecatedFor:"stroked"},getColor:{deprecatedFor:["getFillColor","getLineColor"]}};class N extends S.Layer{getShaders(){return super.getShaders({vs:E,fs:R,source:A,modules:[n.project32,M.default,r.picking,T]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getFillColor",defaultValue:[0,0,0,255]},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:"unorm8",accessor:"getLineColor",defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,accessor:"getLineWidth",defaultValue:1}})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:i,radiusMinPixels:o,radiusMaxPixels:s,stroked:n,filled:r,billboard:a,antialiasing:c,lineWidthUnits:d,lineWidthScale:u,lineWidthMinPixels:p,lineWidthMaxPixels:g}=this.props,h={stroked:n,filled:r,billboard:a,antialiasing:c,radiusUnits:l.UNIT[t],radiusScale:i,radiusMinPixels:o,radiusMaxPixels:s,lineWidthUnits:l.UNIT[d],lineWidthScale:u,lineWidthMinPixels:p,lineWidthMaxPixels:g},f=this.state.model;f.shaderInputs.setProps({scatterplot:h}),"webgpu"===this.context.device.type&&(f.instanceCount=this.props.data.length),f.draw(this.context.renderPass)}_getModel(){let e="webgpu"===this.context.device.type?{depthWriteEnabled:!0,depthCompare:"less-equal"}:void 0;return new c.Model(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new d.Geometry({topology:"triangle-strip",attributes:{positions:{size:3,value:new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0])}}}),isInstanced:!0,parameters:e})}}N.defaultProps=j,N.layerName="ScatterplotLayer";var k=s,F=e.i(37429),O=e.i(83175);let D=new Uint32Array([0,2,1,0,3,2]),W=new Float32Array([0,1,0,0,1,0,1,1]),G=`\
uniform bitmapUniforms {
  vec4 bounds;
  float coordinateConversion;
  float desaturate;
  vec3 tintColor;
  vec4 transparentColor;
} bitmap;
`,U={name:"bitmap",vs:G,fs:G,uniformTypes:{bounds:"vec4<f32>",coordinateConversion:"f32",desaturate:"f32",tintColor:"vec3<f32>",transparentColor:"vec4<f32>"}},V=`\
#version 300 es
#define SHADER_NAME bitmap-layer-vertex-shader

in vec2 texCoords;
in vec3 positions;
in vec3 positions64Low;

out vec2 vTexCoord;
out vec2 vTexPos;

const vec3 pickingColor = vec3(1.0, 0.0, 0.0);

void main(void) {
  geometry.worldPosition = positions;
  geometry.uv = texCoords;
  geometry.pickingColor = pickingColor;

  gl_Position = project_position_to_clipspace(positions, positions64Low, vec3(0.0), geometry.position);
  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);

  vTexCoord = texCoords;

  if (bitmap.coordinateConversion < -0.5) {
    vTexPos = geometry.position.xy + project.commonOrigin.xy;
  } else if (bitmap.coordinateConversion > 0.5) {
    vTexPos = geometry.worldPosition.xy;
  }

  vec4 color = vec4(0.0);
  DECKGL_FILTER_COLOR(color, geometry);
}
`,Z=`
vec3 packUVsIntoRGB(vec2 uv) {
  // Extract the top 8 bits. We want values to be truncated down so we can add a fraction
  vec2 uv8bit = floor(uv * 256.);

  // Calculate the normalized remainders of u and v parts that do not fit into 8 bits
  // Scale and clamp to 0-1 range
  vec2 uvFraction = fract(uv * 256.);
  vec2 uvFraction4bit = floor(uvFraction * 16.);

  // Remainder can be encoded in blue channel, encode as 4 bits for pixel coordinates
  float fractions = uvFraction4bit.x + uvFraction4bit.y * 16.;

  return vec3(uv8bit, fractions) / 255.;
}
`,B=`\
#version 300 es
#define SHADER_NAME bitmap-layer-fragment-shader

#ifdef GL_ES
precision highp float;
#endif

uniform sampler2D bitmapTexture;

in vec2 vTexCoord;
in vec2 vTexPos;

out vec4 fragColor;

/* projection utils */
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / PI / 2.0;

// from degrees to Web Mercator
vec2 lnglat_to_mercator(vec2 lnglat) {
  float x = lnglat.x;
  float y = clamp(lnglat.y, -89.9, 89.9);
  return vec2(
    radians(x) + PI,
    PI + log(tan(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// from Web Mercator to degrees
vec2 mercator_to_lnglat(vec2 xy) {
  xy /= WORLD_SCALE;
  return degrees(vec2(
    xy.x - PI,
    atan(exp(xy.y - PI)) * 2.0 - PI * 0.5
  ));
}
/* End projection utils */

// apply desaturation
vec3 color_desaturate(vec3 color) {
  float luminance = (color.r + color.g + color.b) * 0.333333333;
  return mix(color, vec3(luminance), bitmap.desaturate);
}

// apply tint
vec3 color_tint(vec3 color) {
  return color * bitmap.tintColor;
}

// blend with background color
vec4 apply_opacity(vec3 color, float alpha) {
  if (bitmap.transparentColor.a == 0.0) {
    return vec4(color, alpha);
  }
  float blendedAlpha = alpha + bitmap.transparentColor.a * (1.0 - alpha);
  float highLightRatio = alpha / blendedAlpha;
  vec3 blendedRGB = mix(bitmap.transparentColor.rgb, color, highLightRatio);
  return vec4(blendedRGB, blendedAlpha);
}

vec2 getUV(vec2 pos) {
  return vec2(
    (pos.x - bitmap.bounds[0]) / (bitmap.bounds[2] - bitmap.bounds[0]),
    (pos.y - bitmap.bounds[3]) / (bitmap.bounds[1] - bitmap.bounds[3])
  );
}

${Z}

void main(void) {
  vec2 uv = vTexCoord;
  if (bitmap.coordinateConversion < -0.5) {
    vec2 lnglat = mercator_to_lnglat(vTexPos);
    uv = getUV(lnglat);
  } else if (bitmap.coordinateConversion > 0.5) {
    vec2 commonPos = lnglat_to_mercator(vTexPos);
    uv = getUV(commonPos);
  }
  vec4 bitmapColor = texture(bitmapTexture, uv);

  fragColor = apply_opacity(color_tint(color_desaturate(bitmapColor.rgb)), bitmapColor.a * layer.opacity);

  geometry.uv = uv;
  DECKGL_FILTER_COLOR(fragColor, geometry);

  if (bool(picking.isActive) && !bool(picking.isAttribute)) {
    // Since instance information is not used, we can use picking color for pixel index
    fragColor.rgb = packUVsIntoRGB(uv);
  }
}
`,H={image:{type:"image",value:null,async:!0},bounds:{type:"array",value:[1,0,0,1],compare:!0},_imageCoordinateSystem:l.COORDINATE_SYSTEM.DEFAULT,desaturate:{type:"number",min:0,max:1,value:0},transparentColor:{type:"color",value:[0,0,0,0]},tintColor:{type:"color",value:[255,255,255]},textureParameters:{type:"object",ignore:!0,value:null}};class K extends k.Layer{getShaders(){return super.getShaders({vs:V,fs:B,modules:[n.project32,r.picking,U]})}initializeState(){let e=this.getAttributeManager();e.remove(["instancePickingColors"]),e.add({indices:{size:1,isIndexed:!0,update:e=>e.value=this.state.mesh.indices,noAlloc:!0},positions:{size:3,type:"float64",fp64:this.use64bitPositions(),update:e=>e.value=this.state.mesh.positions,noAlloc:!0},texCoords:{size:2,update:e=>e.value=this.state.mesh.texCoords,noAlloc:!0}})}updateState({props:e,oldProps:t,changeFlags:i}){let o=this.getAttributeManager();if(i.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),o.invalidateAll()),e.bounds!==t.bounds){let e=this.state.mesh,t=this._createMesh();for(let i in this.state.model.setVertexCount(t.vertexCount),t)e&&e[i]!==t[i]&&o.invalidate(i);this.setState({mesh:t,...this._getCoordinateUniforms()})}else e._imageCoordinateSystem!==t._imageCoordinateSystem&&this.setState(this._getCoordinateUniforms())}getPickingInfo(e){let{image:t}=this.props,i=e.info;if(!i.color||!t)return i.bitmap=null,i;let{width:o,height:s}=t;i.index=0;let n=function(e){let[t,i,o]=e;return[(t+(15&o)/16)/256,(i+(240&o)/256)/256]}(i.color);return i.bitmap={size:{width:o,height:s},uv:n,pixel:[Math.floor(n[0]*o),Math.floor(n[1]*s)]},i}disablePickingIndex(){this.setState({disablePicking:!0})}restorePickingColors(){this.setState({disablePicking:!1})}_updateAutoHighlight(e){super._updateAutoHighlight({...e,color:this.encodePickingColor(0)})}_createMesh(){let{bounds:e}=this.props,t=e;return $(e)&&(t=[[e[0],e[1]],[e[0],e[3]],[e[2],e[3]],[e[2],e[1]]]),function(e,t){if(!t){var i,o,s,n=e;let t=new Float64Array(12);for(let e=0;e<n.length;e++)t[3*e+0]=n[e][0],t[3*e+1]=n[e][1],t[3*e+2]=n[e][2]||0;return{vertexCount:6,positions:t,indices:D,texCoords:W}}let r=Math.max(Math.abs(e[0][0]-e[3][0]),Math.abs(e[1][0]-e[2][0])),a=Math.max(Math.abs(e[1][1]-e[0][1]),Math.abs(e[2][1]-e[3][1])),l=Math.ceil(r/t)+1,c=Math.ceil(a/t)+1,d=(l-1)*(c-1)*6,u=new Uint32Array(d),p=new Float32Array(l*c*2),g=new Float64Array(l*c*3),h=0,f=0;for(let t=0;t<l;t++){let n=t/(l-1);for(let r=0;r<c;r++){let a=r/(c-1),l=(i=e,o=n,s=a,(0,O.lerp)((0,O.lerp)(i[0],i[1],s),(0,O.lerp)(i[3],i[2],s),o));g[3*h+0]=l[0],g[3*h+1]=l[1],g[3*h+2]=l[2]||0,p[2*h+0]=n,p[2*h+1]=1-a,t>0&&r>0&&(u[f++]=h-c,u[f++]=h-c-1,u[f++]=h-1,u[f++]=h-c,u[f++]=h-1,u[f++]=h),h++}}return{vertexCount:d,positions:g,indices:u,texCoords:p}}(t,this.context.viewport.resolution)}_getModel(){return new c.Model(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),topology:"triangle-list",isInstanced:!1})}draw(e){let{shaderModuleProps:t}=e,{model:i,coordinateConversion:o,bounds:s,disablePicking:n}=this.state,{image:r,desaturate:a,transparentColor:l,tintColor:c}=this.props;if((!t.picking.isActive||!n)&&r&&i){let e={bitmapTexture:r,bounds:s,coordinateConversion:o,desaturate:a,tintColor:c.slice(0,3).map(e=>e/255),transparentColor:l.map(e=>e/255)};i.shaderInputs.setProps({bitmap:e}),i.draw(this.context.renderPass)}}_getCoordinateUniforms(){let{LNGLAT:e,CARTESIAN:t,DEFAULT:i}=l.COORDINATE_SYSTEM,{_imageCoordinateSystem:o}=this.props;if(o!==i){let{bounds:i}=this.props;if(!$(i))throw Error("_imageCoordinateSystem only supports rectangular bounds");let s=this.context.viewport.resolution?e:t;if((o=o===e?e:t)===e&&s===t)return{coordinateConversion:-1,bounds:i};if(o===t&&s===e){let e=(0,F.lngLatToWorld)([i[0],i[1]]),t=(0,F.lngLatToWorld)([i[2],i[3]]);return{coordinateConversion:1,bounds:[e[0],e[1],t[0],t[1]]}}}return{coordinateConversion:0,bounds:[0,0,0,0]}}}function $(e){return Number.isFinite(e[0])}K.layerName="BitmapLayer",K.defaultProps=H;var Y=e.i(37212),q=e.i(84498),X=e.i(86119),J=e.i(7524);class Q extends Y.default{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id&&(e.object=t.__source.object,e.index=t.__source.index),e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:i}=this.props;return i&&i[e]&&i[e].type||t}getSubLayerRow(e,t,i){return e.__source={parent:this,object:t,index:i},e}getSubLayerAccessor(e){if("function"==typeof e){let t={index:-1,data:this.props.data,target:[]};return(i,o)=>i&&i.__source?(t.index=i.__source.index,e(i.__source.object,t)):e(i,o)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:i,visible:o,parameters:s,getPolygonOffset:n,highlightedObjectIndex:r,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:d,wrapLongitude:u,positionFormat:p,modelMatrix:g,extensions:h,fetch:f,operation:x,_subLayerProps:v}=this.props,m={id:"",updateTriggers:{},opacity:t,pickable:i,visible:o,parameters:s,getPolygonOffset:n,highlightedObjectIndex:r,autoHighlight:a,highlightColor:l,coordinateSystem:c,coordinateOrigin:d,wrapLongitude:u,positionFormat:p,modelMatrix:g,extensions:h,fetch:f,operation:x},y=v&&e.id&&v[e.id],b=y&&y.updateTriggers,_=e.id||"sublayer";if(y){let t=this.props[J.PROP_TYPES_SYMBOL],i=e.type?e.type._propTypes:{};for(let e in y){let o=i[e]||t[e];o&&"accessor"===o.type&&(y[e]=this.getSubLayerAccessor(y[e]))}}for(let t of(Object.assign(m,e,y),m.id=`${this.props.id}-${_}`,m.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b},h)){let e=t.getSubLayerProps.call(this,t);e&&Object.assign(m,e,{updateTriggers:Object.assign(m.updateTriggers,e.updateTriggers)})}return m}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let i=this.internalState.subLayers,o=!i||this.needsUpdate();if(o){let e=this.renderLayers();i=(0,X.flatten)(e,Boolean),this.internalState.subLayers=i}for(let e of((0,q.default)("compositeLayer.renderLayers",this,o,i),i))e.parent=this}}Q.layerName="CompositeLayer";let ee=Q;var a=a,et=s,ei=e.i(56409),eo=e.i(88077);function es(e,t,i={}){return function(e,t={}){return Math.sign(function(e,t={}){let{start:i=0,end:o=e.length,plane:s="xy"}=t,n=t.size||2,r=0,a=en[s[0]],l=en[s[1]];for(let t=i,s=o-n;t<o;t+=n)r+=(e[t+a]-e[s+a])*(e[t+l]+e[s+l]),s=t;return r/2}(e,t))}(e,i)!==t&&(function(e,t){let{start:i=0,end:o=e.length,size:s=2}=t,n=(o-i)/s,r=Math.floor(n/2);for(let t=0;t<r;++t){let o=i+t*s,r=i+(n-1-t)*s;for(let t=0;t<s;++t){let i=e[o+t];e[o+t]=e[r+t],e[r+t]=i}}}(e,i),!0)}let en={x:0,y:1,z:2},er={isClosed:!0};function ea(e){return"positions"in e?e.positions:e}function el(e){return"holeIndices"in e?e.holeIndices:null}function ec(e,t,i,o,s){let n,r,a=t,l=i.length;for(let t=0;t<l;t++)for(let s=0;s<o;s++)e[a++]=i[t][s]||0;if(n=i[0],r=i[i.length-1],n[0]!==r[0]||n[1]!==r[1]||n[2]!==r[2])for(let t=0;t<o;t++)e[a++]=i[0][t]||0;return er.start=t,er.end=a,er.size=o,es(e,s,er),a}function ed(e,t,i,o,s=0,n,r){let a=(n=n||i.length)-s;if(a<=0)return t;let l=t;for(let t=0;t<a;t++)e[l++]=i[s+t];if(!function(e,t,i,o){for(let s=0;s<t;s++)if(e[i+s]!==e[o-t+s])return!1;return!0}(i,o,s,n))for(let t=0;t<o;t++)e[l++]=i[s+t];return er.start=t,er.end=l,er.size=o,es(e,r,er),l}function eu(e,t){var i,o=e;if(!Array.isArray(o=o&&o.positions||o)&&!ArrayBuffer.isView(o))throw Error("invalid polygon");let s=[],n=[];if("positions"in e){let{positions:i,holeIndices:o}=e;if(o){let e=0;for(let r=0;r<=o.length;r++)e=ed(s,e,i,t,o[r-1],o[r],0===r?1:-1),n.push(e);return n.pop(),{positions:s,holeIndices:n}}e=i}if(!Array.isArray(e[0]))return ed(s,0,e,t,0,s.length,1),s;if(!((i=e).length>=1&&i[0].length>=2&&Number.isFinite(i[0][0]))){let i=0;for(let[o,r]of e.entries())i=ec(s,i,r,t,0===o?1:-1),n.push(i);return n.pop(),{positions:s,holeIndices:n}}return ec(s,0,e,t,1),s}function ep(e,t,i){let o=e.length/3,s=0;for(let n=0;n<o;n++){let r=(n+1)%o;s+=e[3*n+t]*e[3*r+i],s-=e[3*r+t]*e[3*n+i]}return Math.abs(s/2)}function eg(e,t,i,o){let s=e.length/3;for(let n=0;n<s;n++){let s=3*n,r=e[s+0],a=e[s+1],l=e[s+2];e[s+t]=r,e[s+i]=a,e[s+o]=l}}var eh=e.i(7951),ef=e.i(25768),ex=e.i(9810);class ev extends eh.Tesselator{constructor(e){const{fp64:t,IndexType:i=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:i,size:1}}})}get(e){let{attributes:t}=this;return"indices"===e?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error("missing indices buffer")}normalizeGeometry(e){if(this.normalize){let t=eu(e,this.positionSize);return this.opts.resolution?(0,ef.cutPolygonByGrid)(ea(t),el(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?(0,ex.cutPolygonByMercatorBounds)(ea(t),el(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(em(e)){let t=0;for(let i of e)t+=this.getGeometrySize(i);return t}return ea(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&em(e))for(let i of e){let e=this.getGeometrySize(i);t.geometrySize=e,this.updateGeometryAttributes(i,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else this._updateIndices(e,t),this._updatePositions(e,t),this._updateVertexValid(e,t)}_updateIndices(e,{geometryIndex:t,vertexStart:i,indexStart:o}){let{attributes:s,indexStarts:n,typedArrayManager:r}=this,a=s.indices;if(!a||!e)return;let l=o,c=function(e,t,i,o){let s=el(e);s&&(s=s.map(e=>e/t));let n=ea(e),r=o&&3===t;if(i){let e=n.length;n=n.slice();let o=[];for(let s=0;s<e;s+=t){o[0]=n[s],o[1]=n[s+1],r&&(o[2]=n[s+2]);let e=i(o);n[s]=e[0],n[s+1]=e[1],r&&(n[s+2]=e[2])}}if(r){let e=ep(n,0,1),t=ep(n,0,2),o=ep(n,1,2);if(!e&&!t&&!o)return[];e>t&&e>o||(t>o?(i||(n=n.slice()),eg(n,0,2,1)):(i||(n=n.slice()),eg(n,2,0,1)))}return(0,eo.default)(n,s,t)}(e,this.positionSize,this.opts.preproject,this.opts.full3d);a=r.allocate(a,o+c.length,{copy:!0});for(let e=0;e<c.length;e++)a[l++]=c[e]+i;n[t+1]=o+c.length,s.indices=a}_updatePositions(e,{vertexStart:t,geometrySize:i}){let{attributes:{positions:o},positionSize:s}=this;if(!o||!e)return;let n=ea(e);for(let e=t,r=0;r<i;e++,r++){let t=n[r*s],i=n[r*s+1],a=s>2?n[r*s+2]:0;o[3*e]=t,o[3*e+1]=i,o[3*e+2]=a}}_updateVertexValid(e,{vertexStart:t,geometrySize:i}){let{positionSize:o}=this,s=this.attributes.vertexValid,n=e&&el(e);if(e&&e.edgeTypes?s.set(e.edgeTypes,t):s.fill(1,t,t+i),n)for(let e=0;e<n.length;e++)s[t+n[e]/o-1]=0;s[t+i-1]=0}}function em(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}let ey=`\
uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,eb={name:"solidPolygon",vs:ey,fs:ey,uniformTypes:{extruded:"f32",isWireframe:"f32",elevationScale:"f32"}},e_=`\
in vec4 fillColors;
in vec4 lineColors;
in vec3 pickingColors;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = pickingColors;
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,eC=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${e_}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,eP=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${e_}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,eL=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,ew=[0,0,0,255],eS={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};class eM extends et.Layer{getShaders(e){return super.getShaders({vs:"top"===e?eC:eP,fs:eL,defines:{RING_WINDING_ORDER_CW:this.props._normalize||"CCW"!==this.props._windingOrder?1:0},modules:[n.project32,ei.gouraudMaterial,r.picking,eb]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds(["vertexPositions"])}initializeState(){let e,{viewport:t}=this.context,{coordinateSystem:i}=this.props,{_full3d:o}=this.props;t.isGeospatial&&i===l.COORDINATE_SYSTEM.DEFAULT&&(i=l.COORDINATE_SYSTEM.LNGLAT),i===l.COORDINATE_SYSTEM.LNGLAT&&(e=o?t.projectPosition.bind(t):t.projectFlat.bind(t)),this.setState({numInstances:0,polygonTesselator:new ev({preproject:e,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let s=this.getAttributeManager();s.remove(["instancePickingColors"]),s.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:"float64",stepMode:"dynamic",fp64:this.use64bitPositions(),transition:eS,accessor:"getPolygon",update:this.calculatePositions,noAlloc:!0,shaderAttributes:{nextVertexPositions:{vertexOffset:1}}},instanceVertexValid:{size:1,type:"uint16",stepMode:"instance",update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:"dynamic",transition:eS,accessor:"getElevation"},fillColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:eS,accessor:"getFillColor",defaultValue:ew},lineColors:{size:this.props.colorFormat.length,type:"unorm8",stepMode:"dynamic",transition:eS,accessor:"getLineColor",defaultValue:ew},pickingColors:{size:4,type:"uint8",stepMode:"dynamic",accessor:(e,{index:t,target:i})=>this.encodePickingColor(e&&e.__source?e.__source.index:t,i)}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:i}=t,o=this.props.data;return o[0]&&o[0].__source&&(t.object=o.find(e=>e.__source.index===i)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let i=0;i<t.length;i++)t[i].__source.index===e&&this._disablePickingIndex(i);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:i,wireframe:o,elevationScale:s}=this.props,{topModel:n,sideModel:r,wireframeModel:a,polygonTesselator:l}=this.state,c={extruded:!!t,elevationScale:s,isWireframe:!1};a&&o&&(a.setInstanceCount(l.instanceCount-1),a.shaderInputs.setProps({solidPolygon:{...c,isWireframe:!0}}),a.draw(this.context.renderPass)),r&&i&&(r.setInstanceCount(l.instanceCount-1),r.shaderInputs.setProps({solidPolygon:c}),r.draw(this.context.renderPass)),n&&i&&(n.setVertexCount(l.vertexCount),n.shaderInputs.setProps({solidPolygon:c}),n.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:i,changeFlags:o}=e,s=this.getAttributeManager();(o.extensionsChanged||t.filled!==i.filled||t.extruded!==i.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),s.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:i}){if(i.dataChanged||i.updateTriggersChanged&&(i.updateTriggersChanged.all||i.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,o=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:o.getPolygon,buffers:o,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:i.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),i.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let e,t,i,{id:o,filled:s,extruded:n}=this.props;if(s){let t=this.getShaders("top");t.defines.NON_INSTANCED_MODEL=1;let i=this.getAttributeManager().getBufferLayouts({isInstanced:!1});e=new c.Model(this.context.device,{...t,id:`${o}-top`,topology:"triangle-list",bufferLayout:i,isIndexed:!0,userData:{excludeAttributes:{instanceVertexValid:!0}}})}if(n){let e=this.getAttributeManager().getBufferLayouts({isInstanced:!0});t=new c.Model(this.context.device,{...this.getShaders("side"),id:`${o}-side`,bufferLayout:e,geometry:new d.Geometry({topology:"triangle-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),i=new c.Model(this.context.device,{...this.getShaders("side"),id:`${o}-wireframe`,bufferLayout:e,geometry:new d.Geometry({topology:"line-strip",attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[t,i,e].filter(Boolean),topModel:e,sideModel:t,wireframeModel:i}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get("indices")}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get("positions")}calculateVertexValid(e){e.value=this.state.polygonTesselator.get("vertexValid")}}eM.defaultProps={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:"CW",_full3d:!1,elevationScale:{type:"number",min:0,value:1},getPolygon:{type:"accessor",value:e=>e.polygon},getElevation:{type:"accessor",value:1e3},getFillColor:{type:"accessor",value:ew},getLineColor:{type:"accessor",value:ew},material:!0},eM.layerName="SolidPolygonLayer";var eI=e.i(57673);let eT=[0,0,0,255],eE={stroked:!0,filled:!0,extruded:!1,elevationScale:1,wireframe:!1,_normalize:!0,_windingOrder:"CW",lineWidthUnits:"meters",lineWidthScale:1,lineWidthMinPixels:0,lineWidthMaxPixels:Number.MAX_SAFE_INTEGER,lineJointRounded:!1,lineMiterLimit:4,getPolygon:{type:"accessor",value:e=>e.polygon},getFillColor:{type:"accessor",value:[0,0,0,255]},getLineColor:{type:"accessor",value:eT},getLineWidth:{type:"accessor",value:1},getElevation:{type:"accessor",value:1e3},material:!0};class eR extends ee{initializeState(){this.state={paths:[],pathsDiff:null},this.props.getLineDashArray&&a.default.removed("getLineDashArray","PathStyleExtension")()}updateState({changeFlags:e}){let t=e.dataChanged||e.updateTriggersChanged&&(e.updateTriggersChanged.all||e.updateTriggersChanged.getPolygon);if(t&&Array.isArray(e.dataChanged)){let t=this.state.paths.slice(),i=e.dataChanged.map(e=>(function({data:e,getIndex:t,dataRange:i,replace:o}){let{startRow:s=0,endRow:n=1/0}=i,r=e.length,a=r,l=r;for(let i=0;i<r;i++){let o=t(e[i]);if(a>i&&o>=s&&(a=i),o>=n){l=i;break}}let c=a,d=l-a!==o.length?e.slice(l):void 0;for(let t=0;t<o.length;t++)e[c++]=o[t];if(d){for(let t=0;t<d.length;t++)e[c++]=d[t];e.length=c}return{startRow:a,endRow:a+o.length}})({data:t,getIndex:e=>e.__source.index,dataRange:e,replace:this._getPaths(e)}));this.setState({paths:t,pathsDiff:i})}else t&&this.setState({paths:this._getPaths(),pathsDiff:null})}_getPaths(e={}){let{data:t,getPolygon:i,positionFormat:o,_normalize:s}=this.props,n=[],r="XY"===o?2:3,{startRow:a,endRow:l}=e,{iterable:c,objectInfo:d}=(0,x.createIterable)(t,a,l);for(let e of c){d.index++;let t=i(e,d);s&&(t=eu(t,r));let{holeIndices:o}=t,a=t.positions||t;if(o)for(let t=0;t<=o.length;t++){let i=a.slice(o[t-1]||0,o[t]||a.length);n.push(this.getSubLayerRow({path:i},e,d.index))}else n.push(this.getSubLayerRow({path:a},e,d.index))}return n}renderLayers(){let{data:e,_dataDiff:t,stroked:i,filled:o,extruded:s,wireframe:n,_normalize:r,_windingOrder:a,elevationScale:l,transitions:c,positionFormat:d}=this.props,{lineWidthUnits:u,lineWidthScale:p,lineWidthMinPixels:g,lineWidthMaxPixels:h,lineJointRounded:f,lineMiterLimit:x,lineDashJustified:v}=this.props,{getFillColor:m,getLineColor:y,getLineWidth:b,getLineDashArray:_,getElevation:C,getPolygon:P,updateTriggers:L,material:w}=this.props,{paths:S,pathsDiff:M}=this.state,I=this.getSubLayerClass("fill",eM),T=this.getSubLayerClass("stroke",eI.default),E=this.shouldRenderSubLayer("fill",S)&&new I({_dataDiff:t,extruded:s,elevationScale:l,filled:o,wireframe:n,_normalize:r,_windingOrder:a,getElevation:C,getFillColor:m,getLineColor:s&&n?y:eT,material:w,transitions:c},this.getSubLayerProps({id:"fill",updateTriggers:L&&{getPolygon:L.getPolygon,getElevation:L.getElevation,getFillColor:L.getFillColor,lineColors:s&&n,getLineColor:L.getLineColor}}),{data:e,positionFormat:d,getPolygon:P}),R=!s&&i&&this.shouldRenderSubLayer("stroke",S)&&new T({_dataDiff:M&&(()=>M),widthUnits:u,widthScale:p,widthMinPixels:g,widthMaxPixels:h,jointRounded:f,miterLimit:x,dashJustified:v,_pathType:"loop",transitions:c&&{getWidth:c.getLineWidth,getColor:c.getLineColor,getPath:c.getPolygon},getColor:this.getSubLayerAccessor(y),getWidth:this.getSubLayerAccessor(b),getDashArray:this.getSubLayerAccessor(_)},this.getSubLayerProps({id:"stroke",updateTriggers:L&&{getWidth:L.getLineWidth,getColor:L.getLineColor,getDashArray:L.getLineDashArray}}),{data:S,positionFormat:d,getPath:e=>e.path});return[!s&&E,R,s&&E]}}eR.layerName="PolygonLayer",eR.defaultProps=eE,e.i(62805);var eA=e.i(60932),ez=e.i(21049),ej=e.i(88917),eN=e.i(61105);let ek=["longitude","latitude","zoom"],eF={curve:1.414,speed:1.2};function eO(e,t,i){let o=(i=Object.assign({},eF,i)).curve,s=e.zoom,n=[e.longitude,e.latitude],r=(0,F.zoomToScale)(s),a=t.zoom,l=[t.longitude,t.latitude],c=(0,F.zoomToScale)(a-s),d=(0,F.lngLatToWorld)(n),u=(0,F.lngLatToWorld)(l),p=eN.vec2.sub([],u,d),g=Math.max(e.width,e.height),h=g/c,f=eN.vec2.length(p)*r,x=Math.max(f,.01),v=o*o,m=(h*h-g*g+v*v*x*x)/(2*g*v*x),y=(h*h-g*g-v*v*x*x)/(2*h*v*x),b=Math.log(Math.sqrt(m*m+1)-m),_=Math.log(Math.sqrt(y*y+1)-y);return{startZoom:s,startCenterXY:d,uDelta:p,w0:g,u1:f,S:(_-b)/o,rho:o,rho2:v,r0:b,r1:_}}let eD={bearing:0,pitch:0,position:[0,0,0]},eW={speed:1.2,curve:1.414};class eG extends ez.default{constructor(e={}){super({compare:["longitude","latitude","zoom","bearing","pitch","position"],extract:["width","height","longitude","latitude","zoom","bearing","pitch","position"],required:["width","height","latitude","longitude","zoom"]}),this.opts={...eW,...e}}interpolateProps(e,t,i){let o=function(e,t,i,o){let{startZoom:s,startCenterXY:n,uDelta:r,w0:a,u1:l,S:c,rho:d,rho2:u,r0:p}=eO(e,t,o);if(l<.01){let o={};for(let s of ek){let n=e[s],r=t[s];o[s]=(0,ej.lerp)(n,r,i)}return o}let g=i*c,h=Math.cosh(p)/Math.cosh(p+d*g),f=a*((Math.cosh(p)*Math.tanh(p+d*g)-Math.sinh(p))/u)/l,x=s+(0,F.scaleToZoom)(1/h),v=eN.vec2.scale([],r,f);eN.vec2.add(v,v,n);let m=(0,F.worldToLngLat)(v);return{longitude:m[0],latitude:m[1],zoom:x}}(e,t,i,this.opts);for(let s in eD)o[s]=(0,O.lerp)(e[s]||eD[s],t[s]||eD[s],i);return o}getDuration(e,t){let{transitionDuration:i}=t;return"auto"===i&&(i=function(e,t,i){let o,s={...eF,...i},{screenSpeed:n,speed:r,maxDuration:a}=s,{S:l,rho:c}=eO(e,t,s),d=1e3*l;return o=Number.isFinite(n)?d/(n/c):d/r,Number.isFinite(a)&&o>a?0:o}(e,t,this.opts)),i}}var eU=e.i(94351);let eV=(0,e.i(75254).default)("mouse-pointer-2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);var eZ=e.i(62031),eB=e.i(43531),eH=e.i(63488),eK=e.i(86311),e$=e.i(63854),eY=e.i(22016),eq=e.i(46932),eX=e.i(88653),eJ=e.i(18566);let eQ={longitude:-7.6921,latitude:53.3498,zoom:6,pitch:0,bearing:0},e0={marker:{x:0,y:0,width:128,height:128,mask:!0}};e.s(["default",0,function(){let e=(0,eJ.useSearchParams)(),[s,n]=(0,i.useState)([]),[r,a]=(0,i.useState)(eQ),[l,c]=(0,i.useState)(!1),[d,u]=(0,i.useState)(!1),[p,g]=(0,i.useState)(null),[h,f]=(0,i.useState)(!1),[x,v]=(0,i.useState)(null),[m,y]=(0,i.useState)(!1),[b,_]=(0,i.useState)(!1);(0,i.useEffect)(()=>{c(!0);let t=e.get("selected");if(t){let e=t.split(",").map(e=>decodeURIComponent(e)),i=[{name:"Dublin",latitude:53.3498,longitude:-6.2603},{name:"Cork",latitude:51.8985,longitude:-8.4756},{name:"Galway",latitude:53.2707,longitude:-9.0568},{name:"Limerick",latitude:52.6638,longitude:-8.6267},{name:"Waterford",latitude:52.2593,longitude:-7.1101},{name:"Belfast",latitude:54.5973,longitude:-5.9301}];n(i);let o=i.filter(t=>e.includes(t.name));if(o.length>0){let e=o.map(e=>e.latitude),t=o.map(e=>e.longitude);g({minLng:Math.min(...t)-.1,maxLng:Math.max(...t)+.1,minLat:Math.min(...e)-.1,maxLat:Math.max(...e)+.1}),a({...eQ,longitude:(Math.min(...t)+Math.max(...t))/2,latitude:(Math.min(...e)+Math.max(...e))/2,zoom:7,transitionDuration:1e3,transitionInterpolator:new eG})}}},[e]);let C=(0,i.useMemo)(()=>p?s.filter(e=>e.longitude>=p.minLng&&e.longitude<=p.maxLng&&e.latitude>=p.minLat&&e.latitude<=p.maxLat):[],[s,p]),P=(0,i.useMemo)(()=>{let e=[new N({id:"glow-layer",data:s,getPosition:e=>[e.longitude,e.latitude],getRadius:3e3,getFillColor:e=>{if(p){let t=e.longitude>=p.minLng&&e.longitude<=p.maxLng,i=e.latitude>=p.minLat&&e.latitude<=p.maxLat;if(t&&i)return[244,63,94,120]}return[59,130,246,40]},updateTriggers:{getFillColor:[p]}}),new w({id:"icon-layer",data:s,pickable:!0,iconAtlas:"https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png",iconMapping:e0,getIcon:()=>"marker",sizeScale:12,getPosition:e=>[e.longitude,e.latitude],getSize:5,getColor:e=>{if(p){let t=e.longitude>=p.minLng&&e.longitude<=p.maxLng,i=e.latitude>=p.minLat&&e.latitude<=p.maxLat;if(t&&i)return[244,63,94]}return[59,130,246]},getPixelOffset:[0,-20],updateTriggers:{getColor:[p]}})];return d&&e.unshift(new K({id:"historical-map-layer",bounds:[-10.66,51.3,-5.3,55.45],image:"/image.png",opacity:.7})),p&&e.push(new eR({id:"selection-box",data:[{polygon:[[p.minLng,p.minLat],[p.maxLng,p.minLat],[p.maxLng,p.maxLat],[p.minLng,p.maxLat],[p.minLng,p.minLat]]}],getPolygon:e=>e.polygon,getFillColor:[59,130,246,30],getLineColor:[59,130,246,255],getLineWidth:2,lineWidthUnits:"pixels",stroked:!0,filled:!0})),e},[s,d,p]);return l?(0,t.jsxs)("div",{className:"flex h-screen w-screen bg-[#FDFEFF] overflow-hidden text-slate-900",children:[(0,t.jsx)(eX.AnimatePresence,{children:b&&(0,t.jsx)("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm",children:(0,t.jsxs)(eq.motion.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 p-10 max-w-md w-full relative overflow-hidden text-center",children:[(0,t.jsx)("div",{className:"absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("div",{className:"w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100 mx-auto",children:(0,t.jsx)(eB.Check,{className:"w-8 h-8"})}),(0,t.jsx)("h3",{className:"text-2xl font-black text-slate-900 uppercase tracking-tight mb-2",children:"Analysis Copied!"}),(0,t.jsx)("p",{className:"text-sm text-slate-500 font-bold leading-relaxed mb-8",children:"Your research snapshot has been saved and is ready to be shared."}),(0,t.jsx)("div",{className:"w-full space-y-3 mb-8",children:(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-3",children:[(0,t.jsxs)("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-blue-300 transition-all",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform",children:(0,t.jsx)(eH.Mail,{className:"w-4 h-4"})}),(0,t.jsx)("span",{className:"text-[9px] font-bold text-slate-500",children:"Email"})]}),(0,t.jsxs)("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-indigo-300 transition-all",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform",children:(0,t.jsx)(e$.Users2,{className:"w-4 h-4"})}),(0,t.jsx)("span",{className:"text-[9px] font-bold text-slate-500",children:"Teams"})]}),(0,t.jsxs)("div",{className:"p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center gap-2 group cursor-pointer hover:border-purple-300 transition-all",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform",children:(0,t.jsx)(eK.MessageSquare,{className:"w-4 h-4"})}),(0,t.jsx)("span",{className:"text-[9px] font-bold text-slate-500",children:"Slack"})]})]})}),(0,t.jsx)("button",{onClick:()=>_(!1),className:"w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-xl",children:"Return to Map"})]})]})})}),(0,t.jsxs)("div",{className:"w-80 bg-white border-r border-slate-200 flex flex-col p-8 z-10 shadow-lg",children:[(0,t.jsxs)(eY.default,{href:"/",className:"inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-6 group",children:[(0,t.jsx)(eU.Home,{className:"w-3.5 h-3.5 group-hover:scale-110 transition-transform"}),(0,t.jsx)("span",{className:"text-[10px] font-bold uppercase tracking-widest",children:"Return to Proposals"})]}),(0,t.jsxs)("div",{className:"mb-10",children:[(0,t.jsxs)("h1",{className:"text-xl font-black text-slate-900 tracking-tight flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-2 h-6 bg-blue-600 rounded-full"}),"MAP PROTOTYPE"]}),(0,t.jsx)("p",{className:"text-[10px] text-slate-600 font-bold tracking-[0.2em] mt-1 ml-4 uppercase",children:"Data Visualization"})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-8 flex-1 overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)("label",{className:"text-[11px] font-bold text-slate-600 uppercase tracking-widest",children:"Data Source"}),(0,t.jsx)("input",{type:"file",accept:".csv",onChange:e=>{let t=e.target.files?.[0];if(t){let e=new FileReader;e.onload=e=>{let t=(e.target?.result).split("\n"),i=[];for(let e=1;e<t.length;e++){let o=t[e].trim();if(o){let e=o.split(",");if(e.length>=3){let t=e[0].trim(),o=parseFloat(e[1].trim()),s=parseFloat(e[2].trim());isNaN(o)||isNaN(s)||i.push({name:t,latitude:o,longitude:s})}}}n(i)},e.readAsText(t)}},className:"block w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[11px] file:font-bold file:uppercase file:bg-slate-100 file:text-slate-700 hover:file:bg-blue-600 hover:file:text-white transition-all cursor-pointer border border-slate-100 rounded-full"})]}),(0,t.jsxs)("button",{onDoubleClick:()=>{n([{name:"Dublin",latitude:53.3498,longitude:-6.2603},{name:"Cork",latitude:51.8985,longitude:-8.4756},{name:"Galway",latitude:53.2707,longitude:-9.0568},{name:"Limerick",latitude:52.6638,longitude:-8.6267},{name:"Waterford",latitude:52.2593,longitude:-7.1101},{name:"Belfast",latitude:54.5973,longitude:-5.9301}]),a({...r,longitude:-7.6921,latitude:53.3498,zoom:6,transitionDuration:2e3,transitionInterpolator:new eG})},className:"w-full py-3 px-4 rounded-xl border-2 border-dashed border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all group shadow-sm",children:["Load Sample ",(0,t.jsx)("span",{className:"lowercase font-normal opacity-50 block mt-1",children:"(Double-click)"})]}),(0,t.jsxs)("button",{onClick:()=>u(!d),className:`w-full py-4 px-4 rounded-xl border-2 flex items-center justify-between transition-all font-black text-[11px] uppercase tracking-widest ${d?"bg-slate-900 border-slate-900 text-white shadow-xl":"bg-white border-slate-200 text-slate-600 hover:border-blue-500"}`,children:[(0,t.jsx)("span",{children:"Historical Overlay"}),(0,t.jsx)("div",{className:`w-8 h-4 rounded-full relative transition-all ${d?"bg-blue-500":"bg-slate-300"}`,children:(0,t.jsx)("div",{className:`absolute top-1 w-2 h-2 rounded-full bg-white transition-all ${d?"left-5":"left-1"}`})})]}),(0,t.jsxs)("div",{className:"p-5 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,t.jsx)(eV,{className:"w-3.5 h-3.5 text-indigo-600"}),(0,t.jsx)("p",{className:"text-[10px] text-indigo-800 font-black uppercase tracking-wider",children:"Spatial Analysis"})]}),(0,t.jsxs)("p",{className:"text-[11px] text-indigo-700 font-medium leading-relaxed",children:["Click and drag to draw a ",(0,t.jsx)("b",{children:"Rectangle"})," and extract data within the selected boundary."]})]}),p&&(0,t.jsx)("button",{onClick:()=>{g(null),v(null)},className:"w-full py-3 text-[10px] font-black text-rose-600 uppercase tracking-widest border-2 border-rose-100 rounded-xl hover:bg-rose-50 transition-all shadow-sm",children:"Clear Selection"}),s.length>0&&(0,t.jsxs)("div",{className:"flex-1 overflow-hidden flex flex-col min-h-0",children:[(0,t.jsxs)("div",{className:"flex justify-between items-end mb-4 px-1",children:[(0,t.jsxs)("h2",{className:"text-[11px] font-black text-slate-900 uppercase tracking-widest",children:["Active Points (",s.length,")"]}),(0,t.jsx)("button",{onClick:()=>n([]),className:"text-[10px] font-black text-rose-600 hover:text-rose-700 uppercase tracking-wider",children:"Reset"})]}),(0,t.jsx)("div",{className:"space-y-2 overflow-y-auto pr-2 custom-scrollbar",children:s.map((e,i)=>(0,t.jsxs)("div",{className:"p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group",onClick:()=>a({...r,longitude:e.longitude,latitude:e.latitude,zoom:12,transitionDuration:1e3,transitionInterpolator:new eG}),children:[(0,t.jsx)("div",{className:"text-xs font-bold text-slate-900 group-hover:text-blue-700",children:e.name}),(0,t.jsxs)("div",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:[e.latitude.toFixed(4),", ",e.longitude.toFixed(4)]})]},i))})]})]})]}),(0,t.jsxs)("div",{className:"flex-1 p-8 bg-[#FDFEFF] relative",children:[(0,t.jsxs)("div",{className:"absolute top-12 right-12 z-20 flex flex-col items-end gap-3",children:[(0,t.jsx)("button",{onClick:()=>{if(0===C.length)return;let e=C.map(e=>encodeURIComponent(e.name)).join(","),t=`${window.location.origin}${window.location.pathname}?selected=${e}`;navigator.clipboard.writeText(t).then(()=>{y(!0),_(!0),setTimeout(()=>y(!1),2e3)})},disabled:0===C.length,className:`flex items-center gap-3 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all active:scale-95 ${C.length>0?"bg-slate-900 text-white hover:bg-indigo-600":"bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"}`,children:m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eB.Check,{className:"w-4 h-4 text-emerald-400"}),"Copied!"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eZ.Share2,{className:"w-4 h-4"}),"Share Analysis (",C.length,")"]})}),C.length>0&&(0,t.jsxs)("div",{className:"bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl max-w-xs animate-in slide-in-from-top-4",children:[(0,t.jsx)("p",{className:"text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-100 pb-2",children:"Selected Nodes"}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-1.5",children:[C.slice(0,5).map(e=>(0,t.jsx)("span",{className:"px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-[9px] font-bold border border-indigo-100",children:e.name},e.name)),C.length>5&&(0,t.jsxs)("span",{className:"text-[9px] font-bold text-slate-400 px-1",children:["+",C.length-5," more"]})]})]})]}),(0,t.jsx)("div",{className:"w-full h-full relative rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-200 cursor-crosshair",children:(0,t.jsx)(o.default,{viewState:r,onViewStateChange:({viewState:e})=>a({...e,pitch:0,bearing:0}),controller:{dragPan:!h,dragRotate:!1},layers:P,onDragStart:e=>{if(e.coordinate)return f(!0),v(e.coordinate),g({minLng:e.coordinate[0],minLat:e.coordinate[1],maxLng:e.coordinate[0],maxLat:e.coordinate[1]}),!0},onDrag:e=>{if(h&&x&&e.coordinate)return g({minLng:Math.min(x[0],e.coordinate[0]),maxLng:Math.max(x[0],e.coordinate[0]),minLat:Math.min(x[1],e.coordinate[1]),maxLat:Math.max(x[1],e.coordinate[1])}),!0},onDragEnd:()=>f(!1),children:(0,t.jsx)(eA.Map,{mapStyle:"https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"})})})]})]}):null}],31309)},82167,e=>{e.n(e.i(31309))}]);