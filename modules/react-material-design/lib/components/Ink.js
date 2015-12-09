"use strict";(function(){var t,e,r,n=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){function r(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;e=require("react"),r=require("reactcss"),module.exports=t=function(t){function o(){return this.handleClick=n(this.handleClick,this),o.__super__.constructor.apply(this,arguments)}return i(o,t),o.defaultProps={color:"dark"},o.prototype.css=r.inline,o.prototype.classes=function(){return{"default":{ink:{position:"relative",cursor:"pointer",overflow:"hidden"},ripple:{position:"absolute",width:"10px",height:"10px",transform:"translate(-50%, -50%) scale(0)",transition:"transform 400ms cubic-bezier(.55,0,.3,1), opacity 200ms 200ms linear",borderRadius:"50%",opacity:"1"}},"color-dark":{ripple:{background:"rgba(0,0,0,.1)"}},"color-light":{ripple:{background:"rgba(255,255,255,.15)"}}}},o.prototype.styles=function(){return this.css()},o.prototype.handleClick=function(t){var r,n,i,o;return r=Math.round(t.clientX-t.currentTarget.getBoundingClientRect().left),o=Math.round(t.clientY-t.currentTarget.getBoundingClientRect().top),i=Math.max(t.currentTarget.clientWidth,t.currentTarget.clientHeight),n=e.findDOMNode(this.refs.ripple),n.style.left=r,n.style.top=o,n.style.width=2*i,n.style.height=2*i,n.style.transform="translate(-50%, -50%) scale(1)",n.style.opacity="0",setTimeout(function(t){return function(){return n.style.transform="translate(-50%, -50%) scale(0)",setTimeout(function(){return n.style.opacity=1},400)}}(this),400)},o.prototype.render=function(){return e.createElement("div",{is:"ink",onClick:this.handleClick},e.createElement("div",{is:"ripple",ref:"ripple"}),this.props.children)},o}(e.Component)}).call(void 0);