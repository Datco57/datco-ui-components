import{a as e,c as j,j as l}from"./utils-14f1029f.js";import{r as A,a as f}from"./index-49dd5b96.js";import{c as Ce,u as G,P as x,a as se,b as ke}from"./index-1cd42350.js";import{c as Fe,u as Oe}from"./index-3b7ac29b.js";import{u as pe}from"./index-65e79f52.js";import{P as Ve}from"./index-59af98bf.js";import{u as Ae}from"./index-c90fc0d3.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";var F="Collapsible",[Me,me]=Ce(F),[qe,K]=Me(F),Be=A.forwardRef((o,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:i,disabled:c,onOpenChange:u,...d}=o,[m,B]=G({prop:r,defaultProp:i??!1,onChange:u,caller:F});return e(qe,{scope:n,disabled:c,contentId:Ae(),open:m,onOpenToggle:A.useCallback(()=>B(g=>!g),[B]),children:e(x.div,{"data-state":z(m),"data-disabled":c?"":void 0,...d,ref:t})})});Be.displayName=F;var fe="CollapsibleTrigger",ge=A.forwardRef((o,t)=>{const{__scopeCollapsible:n,...r}=o,i=K(fe,n);return e(x.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":z(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...r,ref:t,onClick:se(o.onClick,i.onOpenToggle)})});ge.displayName=fe;var W="CollapsibleContent",he=A.forwardRef((o,t)=>{const{forceMount:n,...r}=o,i=K(W,o.__scopeCollapsible);return e(Ve,{present:n||i.open,children:({present:c})=>e(Le,{...r,ref:t,present:c})})});he.displayName=W;var Le=A.forwardRef((o,t)=>{const{__scopeCollapsible:n,present:r,children:i,...c}=o,u=K(W,n),[d,m]=A.useState(r),B=A.useRef(null),g=pe(t,B),h=A.useRef(0),E=h.current,v=A.useRef(0),w=v.current,b=u.open||d,I=A.useRef(b),_=A.useRef(void 0);return A.useEffect(()=>{const a=requestAnimationFrame(()=>I.current=!1);return()=>cancelAnimationFrame(a)},[]),ke(()=>{const a=B.current;if(a){_.current=_.current||{transitionDuration:a.style.transitionDuration,animationName:a.style.animationName},a.style.transitionDuration="0s",a.style.animationName="none";const N=a.getBoundingClientRect();h.current=N.height,v.current=N.width,I.current||(a.style.transitionDuration=_.current.transitionDuration,a.style.animationName=_.current.animationName),m(r)}},[u.open,r]),e(x.div,{"data-state":z(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!b,...c,ref:g,style:{"--radix-collapsible-content-height":E?`${E}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...o.style},children:b&&i})});function z(o){return o?"open":"closed"}var $e=Be,He=ge,je=he,D="Accordion",Ge=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Q,Ke,We]=Fe(D),[O,so]=Ce(D,[We,me]),U=me(),De=f.forwardRef((o,t)=>{const{type:n,...r}=o,i=r,c=r;return e(Q.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e(Ye,{...c,ref:t}):e(Ue,{...i,ref:t})})});De.displayName=D;var[ve,ze]=O(D),[be,Qe]=O(D,{collapsible:!1}),Ue=f.forwardRef((o,t)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},collapsible:c=!1,...u}=o,[d,m]=G({prop:n,defaultProp:r??"",onChange:i,caller:D});return e(ve,{scope:o.__scopeAccordion,value:f.useMemo(()=>d?[d]:[],[d]),onItemOpen:m,onItemClose:f.useCallback(()=>c&&m(""),[c,m]),children:e(be,{scope:o.__scopeAccordion,collapsible:c,children:e(Ie,{...u,ref:t})})})}),Ye=f.forwardRef((o,t)=>{const{value:n,defaultValue:r,onValueChange:i=()=>{},...c}=o,[u,d]=G({prop:n,defaultProp:r??[],onChange:i,caller:D}),m=f.useCallback(g=>d((h=[])=>[...h,g]),[d]),B=f.useCallback(g=>d((h=[])=>h.filter(E=>E!==g)),[d]);return e(ve,{scope:o.__scopeAccordion,value:u,onItemOpen:m,onItemClose:B,children:e(be,{scope:o.__scopeAccordion,collapsible:!0,children:e(Ie,{...c,ref:t})})})}),[Je,V]=O(D),Ie=f.forwardRef((o,t)=>{const{__scopeAccordion:n,disabled:r,dir:i,orientation:c="vertical",...u}=o,d=f.useRef(null),m=pe(d,t),B=Ke(n),h=Oe(i)==="ltr",E=se(o.onKeyDown,v=>{var J;if(!Ge.includes(v.key))return;const w=v.target,b=B().filter($=>{var X;return!((X=$.ref.current)!=null&&X.disabled)}),I=b.findIndex($=>$.ref.current===w),_=b.length;if(I===-1)return;v.preventDefault();let a=I;const N=0,M=_-1,q=()=>{a=I+1,a>M&&(a=N)},L=()=>{a=I-1,a<N&&(a=M)};switch(v.key){case"Home":a=N;break;case"End":a=M;break;case"ArrowRight":c==="horizontal"&&(h?q():L());break;case"ArrowDown":c==="vertical"&&q();break;case"ArrowLeft":c==="horizontal"&&(h?L():q());break;case"ArrowUp":c==="vertical"&&L();break}const Se=a%_;(J=b[Se].ref.current)==null||J.focus()});return e(Je,{scope:n,disabled:r,direction:i,orientation:c,children:e(Q.Slot,{scope:n,children:e(x.div,{...u,"data-orientation":c,ref:m,onKeyDown:r?void 0:E})})})}),k="AccordionItem",[Xe,Y]=O(k),_e=f.forwardRef((o,t)=>{const{__scopeAccordion:n,value:r,...i}=o,c=V(k,n),u=ze(k,n),d=U(n),m=Ae(),B=r&&u.value.includes(r)||!1,g=c.disabled||o.disabled;return e(Xe,{scope:n,open:B,disabled:g,triggerId:m,children:e($e,{"data-orientation":c.orientation,"data-state":Te(B),...d,...i,ref:t,disabled:g,open:B,onOpenChange:h=>{h?u.onItemOpen(r):u.onItemClose(r)}})})});_e.displayName=k;var ye="AccordionHeader",Ee=f.forwardRef((o,t)=>{const{__scopeAccordion:n,...r}=o,i=V(D,n),c=Y(ye,n);return e(x.h3,{"data-orientation":i.orientation,"data-state":Te(c.open),"data-disabled":c.disabled?"":void 0,...r,ref:t})});Ee.displayName=ye;var H="AccordionTrigger",Ne=f.forwardRef((o,t)=>{const{__scopeAccordion:n,...r}=o,i=V(D,n),c=Y(H,n),u=Qe(H,n),d=U(n);return e(Q.ItemSlot,{scope:n,children:e(He,{"aria-disabled":c.open&&!u.collapsible||void 0,"data-orientation":i.orientation,id:c.triggerId,...d,...r,ref:t})})});Ne.displayName=H;var xe="AccordionContent",we=f.forwardRef((o,t)=>{const{__scopeAccordion:n,...r}=o,i=V(D,n),c=Y(xe,n),u=U(n);return e(je,{role:"region","aria-labelledby":c.triggerId,"data-orientation":i.orientation,...u,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});we.displayName=xe;function Te(o){return o?"open":"closed"}var Ze=De,eo=_e,oo=Ee,Re=Ne,Pe=we;const y=Ze,C=A.forwardRef(({className:o,...t},n)=>e(eo,{ref:n,className:j("border-b",o),...t}));C.displayName="AccordionItem";const s=A.forwardRef(({className:o,children:t,...n},r)=>e(oo,{className:"flex",children:l(Re,{ref:r,className:j("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",o),...n,children:[t,e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4 shrink-0 transition-transform duration-200",children:e("polyline",{points:"6 9 12 15 18 9"})})]})}));s.displayName=Re.displayName;const p=A.forwardRef(({className:o,children:t,...n},r)=>e(Pe,{ref:r,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:e("div",{className:j("pb-4 pt-0",o),children:t})}));p.displayName=Pe.displayName;try{y.displayName="Accordion",y.__docgenInfo={description:"",displayName:"Accordion",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="AccordionItem",C.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="AccordionTrigger",s.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="AccordionContent",p.__docgenInfo={description:"",displayName:"AccordionContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const po={title:"Components/Accordion",component:y,parameters:{layout:"centered"},tags:["autodocs"]},T={render:()=>l(y,{type:"single",collapsible:!0,className:"w-[450px]",children:[l(C,{value:"item-1",children:[e(s,{children:"접근성이 무엇인가요?"}),e(p,{children:"접근성은 장애가 있는 사람을 포함한 모든 사람이 웹사이트를 사용할 수 있도록 하는 것을 의미합니다."})]}),l(C,{value:"item-2",children:[e(s,{children:"스타일링이 가능한가요?"}),e(p,{children:"네, Tailwind CSS를 사용하여 원하는 대로 스타일을 변경할 수 있습니다."})]}),l(C,{value:"item-3",children:[e(s,{children:"애니메이션이 적용되나요?"}),e(p,{children:"네, 기본적으로 CSS transition을 통한 부드러운 애니메이션이 적용됩니다."})]})]})},R={render:()=>l(y,{type:"multiple",className:"w-[450px]",children:[l(C,{value:"item-1",children:[e(s,{children:"섹션 1"}),e(p,{children:"여러 섹션을 동시에 열 수 있습니다."})]}),l(C,{value:"item-2",children:[e(s,{children:"섹션 2"}),e(p,{children:'type="multiple"을 사용하면 여러 아이템을 동시에 열 수 있습니다.'})]}),l(C,{value:"item-3",children:[e(s,{children:"섹션 3"}),e(p,{children:"모든 섹션을 열어보세요!"})]})]})},P={render:()=>l(y,{type:"single",collapsible:!0,className:"w-[600px]",children:[l(C,{value:"faq-1",children:[e(s,{children:"환불 정책은 어떻게 되나요?"}),e(p,{children:"구매 후 30일 이내에 전액 환불이 가능합니다. 단, 제품이 손상되지 않은 상태여야 합니다."})]}),l(C,{value:"faq-2",children:[e(s,{children:"배송은 얼마나 걸리나요?"}),e(p,{children:l("div",{className:"space-y-2",children:[e("p",{children:"배송 기간은 지역에 따라 다릅니다:"}),l("ul",{className:"list-disc list-inside pl-2",children:[e("li",{children:"서울/경기: 1-2일"}),e("li",{children:"지방: 2-3일"}),e("li",{children:"제주/도서산간: 3-5일"})]})]})})]}),l(C,{value:"faq-3",children:[e(s,{children:"교환은 어떻게 하나요?"}),e(p,{children:"고객센터(1588-0000)로 연락주시면 교환 절차를 안내해드립니다."})]}),l(C,{value:"faq-4",children:[e(s,{children:"회원가입이 필수인가요?"}),e(p,{children:"아니요, 비회원으로도 구매가 가능합니다. 하지만 회원가입 시 적립금 혜택을 받으실 수 있습니다."})]})]})},S={render:()=>l(y,{type:"single",collapsible:!0,defaultValue:"item-2",className:"w-[450px]",children:[l(C,{value:"item-1",children:[e(s,{children:"닫혀있는 항목"}),e(p,{children:"이 항목은 처음에 닫혀있습니다."})]}),l(C,{value:"item-2",children:[e(s,{children:"열려있는 항목"}),e(p,{children:'이 항목은 처음에 열려있습니다 (defaultValue="item-2").'})]}),l(C,{value:"item-3",children:[e(s,{children:"닫혀있는 항목 2"}),e(p,{children:"이 항목도 처음에 닫혀있습니다."})]})]})};var Z,ee,oe;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>접근성이 무엇인가요?</AccordionTrigger>
        <AccordionContent>
          접근성은 장애가 있는 사람을 포함한 모든 사람이 웹사이트를 사용할 수 있도록 하는 것을 의미합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>스타일링이 가능한가요?</AccordionTrigger>
        <AccordionContent>
          네, Tailwind CSS를 사용하여 원하는 대로 스타일을 변경할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>애니메이션이 적용되나요?</AccordionTrigger>
        <AccordionContent>
          네, 기본적으로 CSS transition을 통한 부드러운 애니메이션이 적용됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(oe=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ne,re,ce;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>섹션 1</AccordionTrigger>
        <AccordionContent>
          여러 섹션을 동시에 열 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>섹션 2</AccordionTrigger>
        <AccordionContent>
          type="multiple"을 사용하면 여러 아이템을 동시에 열 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>섹션 3</AccordionTrigger>
        <AccordionContent>
          모든 섹션을 열어보세요!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ce=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var te,ie,ue;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[600px]">
      <AccordionItem value="faq-1">
        <AccordionTrigger>환불 정책은 어떻게 되나요?</AccordionTrigger>
        <AccordionContent>
          구매 후 30일 이내에 전액 환불이 가능합니다. 단, 제품이 손상되지 않은 상태여야 합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>배송은 얼마나 걸리나요?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>배송 기간은 지역에 따라 다릅니다:</p>
            <ul className="list-disc list-inside pl-2">
              <li>서울/경기: 1-2일</li>
              <li>지방: 2-3일</li>
              <li>제주/도서산간: 3-5일</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>교환은 어떻게 하나요?</AccordionTrigger>
        <AccordionContent>
          고객센터(1588-0000)로 연락주시면 교환 절차를 안내해드립니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>회원가입이 필수인가요?</AccordionTrigger>
        <AccordionContent>
          아니요, 비회원으로도 구매가 가능합니다. 하지만 회원가입 시 적립금 혜택을 받으실 수 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(ue=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ae,le,de;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible defaultValue="item-2" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>닫혀있는 항목</AccordionTrigger>
        <AccordionContent>이 항목은 처음에 닫혀있습니다.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>열려있는 항목</AccordionTrigger>
        <AccordionContent>이 항목은 처음에 열려있습니다 (defaultValue="item-2").</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>닫혀있는 항목 2</AccordionTrigger>
        <AccordionContent>이 항목도 처음에 닫혀있습니다.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};const Ao=["Default","Multiple","FAQ","WithDefaultValue"];export{T as Default,P as FAQ,R as Multiple,S as WithDefaultValue,Ao as __namedExportsOrder,po as default};
