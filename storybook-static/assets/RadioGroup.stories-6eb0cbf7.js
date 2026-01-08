import{j as r,a as e,c as Q}from"./utils-14f1029f.js";import{r as c}from"./index-49dd5b96.js";import{c as Z,P as L,a as w,u as ve}from"./index-1cd42350.js";import{u as E}from"./index-65e79f52.js";import{c as ee,R as he,I as xe}from"./index-5cd53c1a.js";import{u as Ce}from"./index-3b7ac29b.js";import{u as be}from"./index-f02f8053.js";import{u as Ne}from"./index-2c63bf33.js";import{P as ge}from"./index-59af98bf.js";import{L as d}from"./Label-c15685ef.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-c90fc0d3.js";import"./index-94eabfb1.js";import"./index-bf7d13df.js";import"./index-3a35a76c.js";var _="Radio",[Re,re]=Z(_),[ye,De]=Re(_),ae=c.forwardRef((n,s)=>{const{__scopeRadio:a,name:m,checked:t=!1,required:i,disabled:u,value:x="on",onCheck:p,form:C,...b}=n,[v,N]=c.useState(null),l=E(s,R=>N(R)),f=c.useRef(!1),g=v?C||!!v.closest("form"):!0;return r(ye,{scope:a,checked:t,disabled:u,children:[e(L.button,{type:"button",role:"radio","aria-checked":t,"data-state":de(t),"data-disabled":u?"":void 0,disabled:u,value:x,...b,ref:l,onClick:w(n.onClick,R=>{t||p==null||p(),g&&(f.current=R.isPropagationStopped(),f.current||R.stopPropagation())})}),g&&e(te,{control:v,bubbles:!f.current,name:m,value:x,checked:t,required:i,disabled:u,form:C,style:{transform:"translateX(-100%)"}})]})});ae.displayName=_;var oe="RadioIndicator",ne=c.forwardRef((n,s)=>{const{__scopeRadio:a,forceMount:m,...t}=n,i=De(oe,a);return e(ge,{present:m||i.checked,children:e(L.span,{"data-state":de(i.checked),"data-disabled":i.disabled?"":void 0,...t,ref:s})})});ne.displayName=oe;var Ae="RadioBubbleInput",te=c.forwardRef(({__scopeRadio:n,control:s,checked:a,bubbles:m=!0,...t},i)=>{const u=c.useRef(null),x=E(u,i),p=Ne(a),C=be(s);return c.useEffect(()=>{const b=u.current;if(!b)return;const v=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(v,"checked").set;if(p!==a&&l){const f=new Event("click",{bubbles:m});l.call(b,a),b.dispatchEvent(f)}},[p,a,m]),e(L.input,{type:"radio","aria-hidden":!0,defaultChecked:a,...t,tabIndex:-1,ref:x,style:{...t.style,...C,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});te.displayName=Ae;function de(n){return n?"checked":"unchecked"}var Be=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],I="RadioGroup",[Ge,$e]=Z(I,[ee,re]),se=ee(),ie=re(),[Fe,Le]=Ge(I),le=c.forwardRef((n,s)=>{const{__scopeRadioGroup:a,name:m,defaultValue:t,value:i,required:u=!1,disabled:x=!1,orientation:p,dir:C,loop:b=!0,onValueChange:v,...N}=n,l=se(a),f=Ce(C),[g,R]=ve({prop:i,defaultProp:t??null,onChange:v,caller:I});return e(Fe,{scope:a,name:m,required:u,disabled:x,value:g,onValueChange:R,children:e(he,{asChild:!0,...l,orientation:p,dir:f,loop:b,children:e(L.div,{role:"radiogroup","aria-required":u,"aria-orientation":p,"data-disabled":x?"":void 0,dir:f,...N,ref:s})})})});le.displayName=I;var ce="RadioGroupItem",ue=c.forwardRef((n,s)=>{const{__scopeRadioGroup:a,disabled:m,...t}=n,i=Le(ce,a),u=i.disabled||m,x=se(a),p=ie(a),C=c.useRef(null),b=E(s,C),v=i.value===t.value,N=c.useRef(!1);return c.useEffect(()=>{const l=g=>{Be.includes(g.key)&&(N.current=!0)},f=()=>N.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",f),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",f)}},[]),e(xe,{asChild:!0,...x,focusable:!u,active:v,children:e(ae,{disabled:u,required:i.required,checked:v,...p,...t,name:i.name,ref:b,onCheck:()=>i.onValueChange(t.value),onKeyDown:w(l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:w(t.onFocus,()=>{var l;N.current&&((l=C.current)==null||l.click())})})})});ue.displayName=ce;var Ie="RadioGroupIndicator",me=c.forwardRef((n,s)=>{const{__scopeRadioGroup:a,...m}=n,t=ie(a);return e(ne,{...t,...m,ref:s})});me.displayName=Ie;var pe=le,fe=ue,we=me;const h=c.forwardRef(({className:n,...s},a)=>e(pe,{className:Q("grid gap-2",n),...s,ref:a}));h.displayName=pe.displayName;const o=c.forwardRef(({className:n,...s},a)=>e(fe,{ref:a,className:Q("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),...s,children:e(we,{className:"flex items-center justify-center",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-2.5 w-2.5 fill-current text-current",children:e("circle",{cx:"12",cy:"12",r:"10"})})})}));o.displayName=fe.displayName;try{h.displayName="RadioGroup",h.__docgenInfo={description:"",displayName:"RadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="RadioGroupItem",o.__docgenInfo={description:"",displayName:"RadioGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Xe={title:"Components/RadioGroup",component:h,parameters:{layout:"centered"},tags:["autodocs"]},y={render:()=>r(h,{defaultValue:"option-one",children:[r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"option-one",id:"option-one"}),e(d,{htmlFor:"option-one",children:"옵션 1"})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"option-two",id:"option-two"}),e(d,{htmlFor:"option-two",children:"옵션 2"})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"option-three",id:"option-three"}),e(d,{htmlFor:"option-three",children:"옵션 3"})]})]})},D={render:()=>r(h,{defaultValue:"comfortable",children:[r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"default",id:"r1"}),r("div",{className:"grid gap-1.5 leading-none",children:[e(d,{htmlFor:"r1",children:"기본"}),e("p",{className:"text-sm text-muted-foreground",children:"기본 설정을 사용합니다."})]})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"comfortable",id:"r2"}),r("div",{className:"grid gap-1.5 leading-none",children:[e(d,{htmlFor:"r2",children:"편안한"}),e("p",{className:"text-sm text-muted-foreground",children:"넓은 간격으로 편안하게 표시됩니다."})]})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"compact",id:"r3"}),r("div",{className:"grid gap-1.5 leading-none",children:[e(d,{htmlFor:"r3",children:"압축"}),e("p",{className:"text-sm text-muted-foreground",children:"좁은 간격으로 압축되어 표시됩니다."})]})]})]})},A={render:()=>r(h,{defaultValue:"option-one",children:[r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"option-one",id:"d1"}),e(d,{htmlFor:"d1",children:"활성화됨"})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"option-two",id:"d2",disabled:!0}),e(d,{htmlFor:"d2",children:"비활성화됨"})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"option-three",id:"d3"}),e(d,{htmlFor:"d3",children:"활성화됨"})]})]})},B={render:()=>e("div",{className:"w-[350px] space-y-4",children:r("div",{children:[e("h3",{className:"mb-4 text-sm font-medium",children:"결제 방법"}),r(h,{defaultValue:"card",children:[r("div",{className:"flex items-center space-x-2 rounded-md border p-4",children:[e(o,{value:"card",id:"card"}),r("div",{className:"flex-1",children:[e(d,{htmlFor:"card",className:"font-medium",children:"신용카드"}),e("p",{className:"text-sm text-muted-foreground",children:"Visa, Mastercard, Amex"})]})]}),r("div",{className:"flex items-center space-x-2 rounded-md border p-4",children:[e(o,{value:"bank",id:"bank"}),r("div",{className:"flex-1",children:[e(d,{htmlFor:"bank",className:"font-medium",children:"계좌이체"}),e("p",{className:"text-sm text-muted-foreground",children:"실시간 계좌이체"})]})]}),r("div",{className:"flex items-center space-x-2 rounded-md border p-4",children:[e(o,{value:"phone",id:"phone"}),r("div",{className:"flex-1",children:[e(d,{htmlFor:"phone",className:"font-medium",children:"휴대폰 결제"}),e("p",{className:"text-sm text-muted-foreground",children:"통신사 자동 결제"})]})]})]})]})})},G={render:()=>e("div",{className:"w-[350px] space-y-4",children:r("div",{children:[e("h3",{className:"mb-4 text-sm font-medium",children:"배송 시간 선택"}),r(h,{defaultValue:"morning",children:[r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"morning",id:"morning"}),e(d,{htmlFor:"morning",children:"오전 배송 (09:00 - 12:00)"})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"afternoon",id:"afternoon"}),e(d,{htmlFor:"afternoon",children:"오후 배송 (12:00 - 18:00)"})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"evening",id:"evening"}),e(d,{htmlFor:"evening",children:"저녁 배송 (18:00 - 21:00)"})]}),r("div",{className:"flex items-center space-x-2",children:[e(o,{value:"anytime",id:"anytime"}),e(d,{htmlFor:"anytime",children:"시간 무관"})]})]})]})})},F={render:()=>e("div",{className:"w-[400px] space-y-4",children:r("div",{children:[e("h3",{className:"mb-4 text-lg font-semibold",children:"요금제 선택"}),r(h,{defaultValue:"pro",children:[r("div",{className:"flex items-center space-x-2 rounded-lg border-2 border-muted p-4 hover:border-primary",children:[e(o,{value:"free",id:"free"}),r("div",{className:"flex-1",children:[e(d,{htmlFor:"free",className:"text-base font-semibold",children:"무료"}),e("p",{className:"text-sm text-muted-foreground",children:"기본 기능 이용"}),e("p",{className:"mt-2 text-2xl font-bold",children:"₩0"})]})]}),r("div",{className:"flex items-center space-x-2 rounded-lg border-2 border-primary p-4",children:[e(o,{value:"pro",id:"pro"}),r("div",{className:"flex-1",children:[r(d,{htmlFor:"pro",className:"text-base font-semibold",children:["프로",e("span",{className:"ml-2 rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground",children:"인기"})]}),e("p",{className:"text-sm text-muted-foreground",children:"고급 기능 전체 이용"}),e("p",{className:"mt-2 text-2xl font-bold",children:"₩29,000/월"})]})]}),r("div",{className:"flex items-center space-x-2 rounded-lg border-2 border-muted p-4 hover:border-primary",children:[e(o,{value:"enterprise",id:"enterprise"}),r("div",{className:"flex-1",children:[e(d,{htmlFor:"enterprise",className:"text-base font-semibold",children:"엔터프라이즈"}),e("p",{className:"text-sm text-muted-foreground",children:"맞춤형 솔루션 제공"}),e("p",{className:"mt-2 text-2xl font-bold",children:"문의"})]})]})]})]})})};var k,P,S;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">옵션 3</Label>
      </div>
    </RadioGroup>
}`,...(S=(P=y.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var V,M,O;D.parameters={...D.parameters,docs:{...(V=D.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r1">기본</Label>
          <p className="text-sm text-muted-foreground">
            기본 설정을 사용합니다.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r2">편안한</Label>
          <p className="text-sm text-muted-foreground">
            넓은 간격으로 편안하게 표시됩니다.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="r3">압축</Label>
          <p className="text-sm text-muted-foreground">
            좁은 간격으로 압축되어 표시됩니다.
          </p>
        </div>
      </div>
    </RadioGroup>
}`,...(O=(M=D.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,T,j;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d1" />
        <Label htmlFor="d1">활성화됨</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d2" disabled />
        <Label htmlFor="d2">비활성화됨</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="d3" />
        <Label htmlFor="d3">활성화됨</Label>
      </div>
    </RadioGroup>
}`,...(j=(T=A.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var K,U,W;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-4">
      <div>
        <h3 className="mb-4 text-sm font-medium">결제 방법</h3>
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2 rounded-md border p-4">
            <RadioGroupItem value="card" id="card" />
            <div className="flex-1">
              <Label htmlFor="card" className="font-medium">
                신용카드
              </Label>
              <p className="text-sm text-muted-foreground">
                Visa, Mastercard, Amex
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-4">
            <RadioGroupItem value="bank" id="bank" />
            <div className="flex-1">
              <Label htmlFor="bank" className="font-medium">
                계좌이체
              </Label>
              <p className="text-sm text-muted-foreground">
                실시간 계좌이체
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-4">
            <RadioGroupItem value="phone" id="phone" />
            <div className="flex-1">
              <Label htmlFor="phone" className="font-medium">
                휴대폰 결제
              </Label>
              <p className="text-sm text-muted-foreground">
                통신사 자동 결제
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
}`,...(W=(U=B.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var z,H,$;G.parameters={...G.parameters,docs:{...(z=G.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] space-y-4">
      <div>
        <h3 className="mb-4 text-sm font-medium">배송 시간 선택</h3>
        <RadioGroup defaultValue="morning">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="morning" id="morning" />
            <Label htmlFor="morning">오전 배송 (09:00 - 12:00)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="afternoon" id="afternoon" />
            <Label htmlFor="afternoon">오후 배송 (12:00 - 18:00)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="evening" id="evening" />
            <Label htmlFor="evening">저녁 배송 (18:00 - 21:00)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="anytime" id="anytime" />
            <Label htmlFor="anytime">시간 무관</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
}`,...($=(H=G.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var X,Y,J;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-4">
      <div>
        <h3 className="mb-4 text-lg font-semibold">요금제 선택</h3>
        <RadioGroup defaultValue="pro">
          <div className="flex items-center space-x-2 rounded-lg border-2 border-muted p-4 hover:border-primary">
            <RadioGroupItem value="free" id="free" />
            <div className="flex-1">
              <Label htmlFor="free" className="text-base font-semibold">
                무료
              </Label>
              <p className="text-sm text-muted-foreground">
                기본 기능 이용
              </p>
              <p className="mt-2 text-2xl font-bold">₩0</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border-2 border-primary p-4">
            <RadioGroupItem value="pro" id="pro" />
            <div className="flex-1">
              <Label htmlFor="pro" className="text-base font-semibold">
                프로
                <span className="ml-2 rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                  인기
                </span>
              </Label>
              <p className="text-sm text-muted-foreground">
                고급 기능 전체 이용
              </p>
              <p className="mt-2 text-2xl font-bold">₩29,000/월</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border-2 border-muted p-4 hover:border-primary">
            <RadioGroupItem value="enterprise" id="enterprise" />
            <div className="flex-1">
              <Label htmlFor="enterprise" className="text-base font-semibold">
                엔터프라이즈
              </Label>
              <p className="text-sm text-muted-foreground">
                맞춤형 솔루션 제공
              </p>
              <p className="mt-2 text-2xl font-bold">문의</p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
}`,...(J=(Y=F.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const Ye=["Default","WithDescription","Disabled","PaymentMethod","DeliveryTime","PlanSelection"];export{y as Default,G as DeliveryTime,A as Disabled,B as PaymentMethod,F as PlanSelection,D as WithDescription,Ye as __namedExportsOrder,Xe as default};
