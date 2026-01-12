import{a as e,j as s,F as ge,c as O}from"./utils-14f1029f.js";import{r as u}from"./index-49dd5b96.js";import{u as me}from"./index-65e79f52.js";import{c as ye,P as M,b as W,a as Be}from"./index-42772863.js";import{u as De}from"./index-2c63bf33.js";import{u as Fe}from"./index-ba32353a.js";import{P as Le}from"./index-09dc48b3.js";import{L as c}from"./Label-c15685ef.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-bf7d13df.js";import"./index-3a35a76c.js";var R="Checkbox",[we,Ge]=ye(R),[Ee,T]=we(R);function Se(a){const{__scopeCheckbox:d,checked:n,children:h,defaultChecked:i,disabled:r,form:b,name:f,onCheckedChange:m,required:k,value:v="on",internal_do_not_use_render:p}=a,[C,y]=Be({prop:n,defaultProp:i??!1,onChange:m,caller:R}),[N,g]=u.useState(null),[B,o]=u.useState(null),l=u.useRef(!1),I=N?!!b||!!N.closest("form"):!0,A={checked:C,disabled:r,setChecked:y,control:N,setControl:g,name:f,form:b,value:v,hasConsumerStoppedPropagationRef:l,required:k,defaultChecked:x(i)?!1:i,isFormControl:I,bubbleInput:B,setBubbleInput:o};return e(Ee,{scope:d,...A,children:_e(p)?p(A):h})}var pe="CheckboxTrigger",he=u.forwardRef(({__scopeCheckbox:a,onKeyDown:d,onClick:n,...h},i)=>{const{control:r,value:b,disabled:f,checked:m,required:k,setControl:v,setChecked:p,hasConsumerStoppedPropagationRef:C,isFormControl:y,bubbleInput:N}=T(pe,a),g=me(i,v),B=u.useRef(m);return u.useEffect(()=>{const o=r==null?void 0:r.form;if(o){const l=()=>p(B.current);return o.addEventListener("reset",l),()=>o.removeEventListener("reset",l)}},[r,p]),e(M.button,{type:"button",role:"checkbox","aria-checked":x(m)?"mixed":m,"aria-required":k,"data-state":ke(m),"data-disabled":f?"":void 0,disabled:f,value:b,...h,ref:g,onKeyDown:W(d,o=>{o.key==="Enter"&&o.preventDefault()}),onClick:W(n,o=>{p(l=>x(l)?!0:!l),N&&y&&(C.current=o.isPropagationStopped(),C.current||o.stopPropagation())})})});he.displayName=pe;var j=u.forwardRef((a,d)=>{const{__scopeCheckbox:n,name:h,checked:i,defaultChecked:r,required:b,disabled:f,value:m,onCheckedChange:k,form:v,...p}=a;return e(Se,{__scopeCheckbox:n,checked:i,defaultChecked:r,disabled:f,required:b,onCheckedChange:k,name:h,form:v,value:m,internal_do_not_use_render:({isFormControl:C})=>s(ge,{children:[e(he,{...p,ref:d,__scopeCheckbox:n}),C&&e(xe,{__scopeCheckbox:n})]})})});j.displayName=R;var Ce="CheckboxIndicator",be=u.forwardRef((a,d)=>{const{__scopeCheckbox:n,forceMount:h,...i}=a,r=T(Ce,n);return e(Le,{present:h||x(r.checked)||r.checked===!0,children:e(M.span,{"data-state":ke(r.checked),"data-disabled":r.disabled?"":void 0,...i,ref:d,style:{pointerEvents:"none",...a.style}})})});be.displayName=Ce;var fe="CheckboxBubbleInput",xe=u.forwardRef(({__scopeCheckbox:a,...d},n)=>{const{control:h,hasConsumerStoppedPropagationRef:i,checked:r,defaultChecked:b,required:f,disabled:m,name:k,value:v,form:p,bubbleInput:C,setBubbleInput:y}=T(fe,a),N=me(n,y),g=De(r),B=Fe(h);u.useEffect(()=>{const l=C;if(!l)return;const I=window.HTMLInputElement.prototype,q=Object.getOwnPropertyDescriptor(I,"checked").set,ve=!i.current;if(g!==r&&q){const Ne=new Event("click",{bubbles:ve});l.indeterminate=x(r),q.call(l,x(r)?!1:r),l.dispatchEvent(Ne)}},[C,g,r,i]);const o=u.useRef(x(r)?!1:r);return e(M.input,{type:"checkbox","aria-hidden":!0,defaultChecked:b??o.current,required:f,disabled:m,name:k,value:v,form:p,...d,tabIndex:-1,ref:N,style:{...d.style,...B,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});xe.displayName=fe;function _e(a){return typeof a=="function"}function x(a){return a==="indeterminate"}function ke(a){return x(a)?"indeterminate":a?"checked":"unchecked"}const t=u.forwardRef(({className:a,...d},n)=>e(j,{ref:n,className:O("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",a),...d,children:e(be,{className:O("flex items-center justify-center text-current"),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:e("polyline",{points:"20 6 9 17 4 12"})})})}));t.displayName=j.displayName;try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ke={title:"Components/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"}}},D={render:()=>s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"default"}),e(c,{htmlFor:"default",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"이용약관에 동의합니다"})]})},F={render:()=>s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"checked",defaultChecked:!0}),e(c,{htmlFor:"checked",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"선택된 상태"})]})},L={render:()=>s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"disabled",disabled:!0}),e(c,{htmlFor:"disabled",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"비활성화 상태"})]})},w={render:()=>s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"terms"}),e(c,{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"이용약관에 동의합니다"})]})},E={render:()=>s("div",{className:"items-top flex space-x-2",children:[e(t,{id:"terms2"}),s("div",{className:"grid gap-1.5 leading-none",children:[e(c,{htmlFor:"terms2",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"마케팅 수신 동의"}),e("p",{className:"text-sm text-muted-foreground",children:"이메일과 SMS를 통해 마케팅 정보를 받습니다."})]})]})},S={render:()=>s("div",{className:"space-y-4",children:[s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"option1",defaultChecked:!0}),e(c,{htmlFor:"option1",children:"옵션 1"})]}),s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"option2"}),e(c,{htmlFor:"option2",children:"옵션 2"})]}),s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"option3"}),e(c,{htmlFor:"option3",children:"옵션 3"})]}),s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"option4",disabled:!0}),e(c,{htmlFor:"option4",children:"비활성화된 옵션"})]})]})},_={render:()=>e("div",{className:"space-y-4 w-[350px]",children:s("div",{children:[e("h3",{className:"mb-4 text-sm font-medium",children:"알림 설정"}),s("div",{className:"space-y-4",children:[s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"all",defaultChecked:!0}),e(c,{htmlFor:"all",children:"모든 알림 받기"})]}),s("div",{className:"ml-6 space-y-3",children:[s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"email",defaultChecked:!0}),e(c,{htmlFor:"email",children:"이메일 알림"})]}),s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"sms"}),e(c,{htmlFor:"sms",children:"SMS 알림"})]}),s("div",{className:"flex items-center space-x-2",children:[e(t,{id:"push",defaultChecked:!0}),e(c,{htmlFor:"push",children:"푸시 알림"})]})]})]})]})})},P={args:{defaultChecked:!0,disabled:!0}};var H,z,G;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="default" />
      <Label htmlFor="default" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        이용약관에 동의합니다
      </Label>
    </div>
}`,...(G=(z=D.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,U,X;F.parameters={...F.parameters,docs:{...(K=F.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        선택된 상태
      </Label>
    </div>
}`,...(X=(U=F.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var V,$,J;L.parameters={...L.parameters,docs:{...(V=L.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        비활성화 상태
      </Label>
    </div>
}`,...(J=($=L.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,Y,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        이용약관에 동의합니다
      </Label>
    </div>
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="items-top flex space-x-2">
      <Checkbox id="terms2" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          마케팅 수신 동의
        </Label>
        <p className="text-sm text-muted-foreground">
          이메일과 SMS를 통해 마케팅 정보를 받습니다.
        </p>
      </div>
    </div>
}`,...(ae=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,ne;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" defaultChecked />
        <Label htmlFor="option1">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <Label htmlFor="option2">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">옵션 3</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option4" disabled />
        <Label htmlFor="option4">비활성화된 옵션</Label>
      </div>
    </div>
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ce,de;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">
      <div>
        <h3 className="mb-4 text-sm font-medium">알림 설정</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="all" defaultChecked />
            <Label htmlFor="all">모든 알림 받기</Label>
          </div>
          <div className="ml-6 space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="email" defaultChecked />
              <Label htmlFor="email">이메일 알림</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sms" />
              <Label htmlFor="sms">SMS 알림</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="push" defaultChecked />
              <Label htmlFor="push">푸시 알림</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(de=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ie,le,ue;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    disabled: true
  }
}`,...(ue=(le=P.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};const Ue=["Default","Checked","Disabled","WithLabel","WithText","MultipleCheckboxes","FormExample","CheckedDisabled"];export{F as Checked,P as CheckedDisabled,D as Default,L as Disabled,_ as FormExample,S as MultipleCheckboxes,w as WithLabel,E as WithText,Ue as __namedExportsOrder,Ke as default};
