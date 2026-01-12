import{a as t,F as Pe,j as T,c as Ee}from"./utils-14f1029f.js";import{r as l}from"./index-49dd5b96.js";import{c as Re,P as De,b as E,a as Le}from"./index-42772863.js";import{u as me}from"./index-65e79f52.js";import{D as Ne}from"./index-79c416c5.js";import{u as Be}from"./index-5870cbc5.js";import{c as fe,A as Se,C as ke,a as Ae,R as Ie}from"./index-fc4eee16.js";import{P as Oe}from"./index-09dc48b3.js";import{R as Me}from"./index-6657d751.js";import{B as w}from"./Button-9ecee7bc.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-94eabfb1.js";import"./index-ba32353a.js";import"./index-bf7d13df.js";import"./index-3a35a76c.js";var He=Symbol("radix.slottable");function je(e){const n=({children:o})=>t(Pe,{children:o});return n.displayName=`${e}.Slottable`,n.__radixId=He,n}var[j,xt]=Re("Tooltip",[fe]),F=fe(),ge="TooltipProvider",Fe=700,W="tooltip.open",[Ge,q]=j(ge),ve=e=>{const{__scopeTooltip:n,delayDuration:o=Fe,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:c}=e,s=l.useRef(!0),m=l.useRef(!1),a=l.useRef(0);return l.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),t(Ge,{scope:n,isOpenDelayedRef:s,delayDuration:o,onOpen:l.useCallback(()=>{window.clearTimeout(a.current),s.current=!1},[]),onClose:l.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:m,onPointerInTransitChange:l.useCallback(u=>{m.current=u},[]),disableHoverableContent:i,children:c})};ve.displayName=ge;var B="Tooltip",[We,G]=j(B),Ce=e=>{const{__scopeTooltip:n,children:o,open:r,defaultOpen:i,onOpenChange:c,disableHoverableContent:s,delayDuration:m}=e,a=q(B,e.__scopeTooltip),u=F(n),[p,h]=l.useState(null),f=Be(),d=l.useRef(0),y=s??a.disableHoverableContent,b=m??a.delayDuration,x=l.useRef(!1),[P,_]=Le({prop:r,defaultProp:i??!1,onChange:U=>{U?(a.onOpen(),document.dispatchEvent(new CustomEvent(W))):a.onClose(),c==null||c(U)},caller:B}),D=l.useMemo(()=>P?x.current?"delayed-open":"instant-open":"closed",[P]),L=l.useCallback(()=>{window.clearTimeout(d.current),d.current=0,x.current=!1,_(!0)},[_]),N=l.useCallback(()=>{window.clearTimeout(d.current),d.current=0,_(!1)},[_]),z=l.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>{x.current=!0,_(!0),d.current=0},b)},[b,_]);return l.useEffect(()=>()=>{d.current&&(window.clearTimeout(d.current),d.current=0)},[]),t(Ie,{...u,children:t(We,{scope:n,contentId:f,open:P,stateAttribute:D,trigger:p,onTriggerChange:h,onTriggerEnter:l.useCallback(()=>{a.isOpenDelayedRef.current?z():L()},[a.isOpenDelayedRef,z,L]),onTriggerLeave:l.useCallback(()=>{y?N():(window.clearTimeout(d.current),d.current=0)},[N,y]),onOpen:L,onClose:N,disableHoverableContent:y,children:o})})};Ce.displayName=B;var V="TooltipTrigger",ye=l.forwardRef((e,n)=>{const{__scopeTooltip:o,...r}=e,i=G(V,o),c=q(V,o),s=F(o),m=l.useRef(null),a=me(n,m,i.onTriggerChange),u=l.useRef(!1),p=l.useRef(!1),h=l.useCallback(()=>u.current=!1,[]);return l.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),t(Se,{asChild:!0,...s,children:t(De.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:a,onPointerMove:E(e.onPointerMove,f=>{f.pointerType!=="touch"&&!p.current&&!c.isPointerInTransitRef.current&&(i.onTriggerEnter(),p.current=!0)}),onPointerLeave:E(e.onPointerLeave,()=>{i.onTriggerLeave(),p.current=!1}),onPointerDown:E(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:E(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:E(e.onBlur,i.onClose),onClick:E(e.onClick,i.onClose)})})});ye.displayName=V;var Ve="TooltipPortal",[bt,$e]=j(Ve,{forceMount:void 0}),R="TooltipContent",xe=l.forwardRef((e,n)=>{const o=$e(R,e.__scopeTooltip),{forceMount:r=o.forceMount,side:i="top",...c}=e,s=G(R,e.__scopeTooltip);return t(Oe,{present:r||s.open,children:s.disableHoverableContent?t(be,{side:i,...c,ref:n}):t(qe,{side:i,...c,ref:n})})}),qe=l.forwardRef((e,n)=>{const o=G(R,e.__scopeTooltip),r=q(R,e.__scopeTooltip),i=l.useRef(null),c=me(n,i),[s,m]=l.useState(null),{trigger:a,onClose:u}=o,p=i.current,{onPointerInTransitChange:h}=r,f=l.useCallback(()=>{m(null),h(!1)},[h]),d=l.useCallback((y,b)=>{const x=y.currentTarget,P={x:y.clientX,y:y.clientY},_=Ke(P,x.getBoundingClientRect()),D=Je(P,_),L=Qe(b.getBoundingClientRect()),N=et([...D,...L]);m(N),h(!0)},[h]);return l.useEffect(()=>()=>f(),[f]),l.useEffect(()=>{if(a&&p){const y=x=>d(x,p),b=x=>d(x,a);return a.addEventListener("pointerleave",y),p.addEventListener("pointerleave",b),()=>{a.removeEventListener("pointerleave",y),p.removeEventListener("pointerleave",b)}}},[a,p,d,f]),l.useEffect(()=>{if(s){const y=b=>{const x=b.target,P={x:b.clientX,y:b.clientY},_=(a==null?void 0:a.contains(x))||(p==null?void 0:p.contains(x)),D=!Ze(P,s);_?f():D&&(f(),u())};return document.addEventListener("pointermove",y),()=>document.removeEventListener("pointermove",y)}},[a,p,s,u,f]),t(be,{...e,ref:c})}),[ze,Ue]=j(B,{isInside:!1}),Ye=je("TooltipContent"),be=l.forwardRef((e,n)=>{const{__scopeTooltip:o,children:r,"aria-label":i,onEscapeKeyDown:c,onPointerDownOutside:s,...m}=e,a=G(R,o),u=F(o),{onClose:p}=a;return l.useEffect(()=>(document.addEventListener(W,p),()=>document.removeEventListener(W,p)),[p]),l.useEffect(()=>{if(a.trigger){const h=f=>{const d=f.target;d!=null&&d.contains(a.trigger)&&p()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[a.trigger,p]),t(Ne,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:h=>h.preventDefault(),onDismiss:p,children:T(ke,{"data-state":a.stateAttribute,...u,...m,ref:n,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[t(Ye,{children:r}),t(ze,{scope:o,isInside:!0,children:t(Me,{id:a.contentId,role:"tooltip",children:i||r})})]})})});xe.displayName=R;var we="TooltipArrow",Xe=l.forwardRef((e,n)=>{const{__scopeTooltip:o,...r}=e,i=F(o);return Ue(we,o).isInside?null:t(Ae,{...i,...r,ref:n})});Xe.displayName=we;function Ke(e,n){const o=Math.abs(n.top-e.y),r=Math.abs(n.bottom-e.y),i=Math.abs(n.right-e.x),c=Math.abs(n.left-e.x);switch(Math.min(o,r,i,c)){case c:return"left";case i:return"right";case o:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Je(e,n,o=5){const r=[];switch(n){case"top":r.push({x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o});break;case"bottom":r.push({x:e.x-o,y:e.y-o},{x:e.x+o,y:e.y-o});break;case"left":r.push({x:e.x+o,y:e.y-o},{x:e.x+o,y:e.y+o});break;case"right":r.push({x:e.x-o,y:e.y-o},{x:e.x-o,y:e.y+o});break}return r}function Qe(e){const{top:n,right:o,bottom:r,left:i}=e;return[{x:i,y:n},{x:o,y:n},{x:o,y:r},{x:i,y:r}]}function Ze(e,n){const{x:o,y:r}=e;let i=!1;for(let c=0,s=n.length-1;c<n.length;s=c++){const m=n[c],a=n[s],u=m.x,p=m.y,h=a.x,f=a.y;p>r!=f>r&&o<(h-u)*(r-p)/(f-p)+u&&(i=!i)}return i}function et(e){const n=e.slice();return n.sort((o,r)=>o.x<r.x?-1:o.x>r.x?1:o.y<r.y?-1:o.y>r.y?1:0),tt(n)}function tt(e){if(e.length<=1)return e.slice();const n=[];for(let r=0;r<e.length;r++){const i=e[r];for(;n.length>=2;){const c=n[n.length-1],s=n[n.length-2];if((c.x-s.x)*(i.y-s.y)>=(c.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}n.pop();const o=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;o.length>=2;){const c=o[o.length-1],s=o[o.length-2];if((c.x-s.x)*(i.y-s.y)>=(c.y-s.y)*(i.x-s.x))o.pop();else break}o.push(i)}return o.pop(),n.length===1&&o.length===1&&n[0].x===o[0].x&&n[0].y===o[0].y?n:n.concat(o)}var ot=ve,nt=Ce,rt=ye,_e=xe;const $=({delayDuration:e=0,...n})=>t(ot,{delayDuration:e,...n}),g=nt,C=rt,v=l.forwardRef(({className:e,sideOffset:n=4,...o},r)=>t(_e,{ref:r,sideOffset:n,className:Ee("z-50 overflow-hidden rounded-md bg-foreground text-background px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));v.displayName=_e.displayName;try{g.displayName="Tooltip",g.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}try{C.displayName="TooltipTrigger",C.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="TooltipContent",v.__docgenInfo={description:"",displayName:"TooltipContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{$.displayName="TooltipProvider",$.__docgenInfo={description:"",displayName:"TooltipProvider",props:{}}}catch{}const wt={title:"Components/Tooltip",component:g,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>t($,{delayDuration:0,children:t(e,{})})]},S={render:()=>T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Hover"})}),t(v,{children:t("p",{children:"Add to library"})})]})},k={render:()=>T(g,{children:[t(C,{asChild:!0,children:t(w,{children:"Hover me"})}),t(v,{children:t("p",{children:"This is a tooltip with helpful information"})})]})},A={render:()=>T("div",{className:"flex gap-4 items-center justify-center",children:[T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Top"})}),t(v,{side:"top",children:t("p",{children:"Top tooltip"})})]}),T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Right"})}),t(v,{side:"right",children:t("p",{children:"Right tooltip"})})]}),T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Bottom"})}),t(v,{side:"bottom",children:t("p",{children:"Bottom tooltip"})})]}),T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Left"})}),t(v,{side:"left",children:t("p",{children:"Left tooltip"})})]})]})},I={render:()=>T(g,{children:[t(C,{asChild:!0,children:t("button",{className:"inline-flex items-center justify-center rounded-full w-8 h-8 bg-muted hover:bg-muted/80",children:T("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t("circle",{cx:"12",cy:"12",r:"10"}),t("path",{d:"M12 16v-4"}),t("path",{d:"M12 8h.01"})]})})}),t(v,{children:t("p",{children:"More information"})})]})},O={render:()=>T(g,{children:[t(C,{asChild:!0,children:t(w,{children:"Hover for details"})}),t(v,{className:"max-w-xs",children:t("p",{children:"This is a longer tooltip with more detailed information that spans multiple lines. It can contain helpful context or instructions."})})]})},M={render:()=>T(g,{delayDuration:700,children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Slow tooltip"})}),t(v,{children:t("p",{children:"This tooltip has a 700ms delay"})})]})},H={render:()=>T("div",{className:"flex gap-4",children:[T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Save"})}),t(v,{children:t("p",{children:"Save changes (Ctrl+S)"})})]}),T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Copy"})}),t(v,{children:t("p",{children:"Copy to clipboard (Ctrl+C)"})})]}),T(g,{children:[t(C,{asChild:!0,children:t(w,{variant:"outline",children:"Delete"})}),t(v,{children:t("p",{children:"Delete item (Del)"})})]})]})};var Y,X,K;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
}`,...(K=(X=S.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var J,Q,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip with helpful information</p>
      </TooltipContent>
    </Tooltip>
}`,...(Z=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,oe;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Top tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Right tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Bottom tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Left tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(oe=(te=A.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,re,ie;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <button className="inline-flex items-center justify-center rounded-full w-8 h-8 bg-muted hover:bg-muted/80">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>More information</p>
      </TooltipContent>
    </Tooltip>
}`,...(ie=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ae,se;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip with more detailed information that spans
          multiple lines. It can contain helpful context or instructions.
        </p>
      </TooltipContent>
    </Tooltip>
}`,...(se=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,pe,de;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Tooltip delayDuration={700}>
      <TooltipTrigger asChild>
        <Button variant="outline">Slow tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip has a 700ms delay</p>
      </TooltipContent>
    </Tooltip>
}`,...(de=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,he,Te;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Save</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Save changes (Ctrl+S)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Copy</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard (Ctrl+C)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Delete</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete item (Del)</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(Te=(he=H.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};const _t=["Default","WithArrow","Positions","WithIcon","LongContent","DelayedOpen","MultipleTooltips"];export{S as Default,M as DelayedOpen,O as LongContent,H as MultipleTooltips,A as Positions,k as WithArrow,I as WithIcon,_t as __namedExportsOrder,wt as default};
