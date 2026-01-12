import{a as e,F as Be,j as o,c as h}from"./utils-14f1029f.js";import{r as i}from"./index-49dd5b96.js";import{c as ve,b as Ne}from"./index-42772863.js";import{u as X}from"./index-65e79f52.js";import{c as Z,b as Ee,O as Te,W as be,C as xe,T as Fe,D as Se,a as ee,R as Re,P as Ie}from"./index-a3c9ad70.js";import{b as re,B as f}from"./Button-7abc04a3.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-5870cbc5.js";import"./index-79c416c5.js";import"./index-94eabfb1.js";import"./index-f9546431.js";import"./index-09dc48b3.js";import"./index-bf7d13df.js";import"./index-3a35a76c.js";var we=Symbol("radix.slottable");function Pe(r){const a=({children:t})=>e(Be,{children:t});return a.displayName=`${r}.Slottable`,a.__radixId=we,a}var ae="AlertDialog",[Oe,sr]=ve(ae,[Z]),p=Z(),te=r=>{const{__scopeAlertDialog:a,...t}=r,l=p(a);return e(Re,{...l,...t,modal:!0})};te.displayName=ae;var He="AlertDialogTrigger",oe=i.forwardRef((r,a)=>{const{__scopeAlertDialog:t,...l}=r,n=p(t);return e(Ee,{...n,...l,ref:a})});oe.displayName=He;var $e="AlertDialogPortal",le=r=>{const{__scopeAlertDialog:a,...t}=r,l=p(a);return e(Ie,{...l,...t})};le.displayName=$e;var Me="AlertDialogOverlay",ie=i.forwardRef((r,a)=>{const{__scopeAlertDialog:t,...l}=r,n=p(t);return e(Te,{...n,...l,ref:a})});ie.displayName=Me;var _="AlertDialogContent",[Ve,qe]=Oe(_),Le=Pe("AlertDialogContent"),ne=i.forwardRef((r,a)=>{const{__scopeAlertDialog:t,children:l,...n}=r,S=p(t),B=i.useRef(null),ye=X(a,B),I=i.useRef(null);return e(be,{contentName:_,titleName:se,docsSlug:"alert-dialog",children:e(Ve,{scope:t,cancelRef:I,children:o(xe,{role:"alertdialog",...S,...n,ref:ye,onOpenAutoFocus:Ne(n.onOpenAutoFocus,y=>{var w;y.preventDefault(),(w=I.current)==null||w.focus({preventScroll:!0})}),onPointerDownOutside:y=>y.preventDefault(),onInteractOutside:y=>y.preventDefault(),children:[e(Le,{children:l}),e(je,{contentRef:B})]})})})});ne.displayName=_;var se="AlertDialogTitle",ue=i.forwardRef((r,a)=>{const{__scopeAlertDialog:t,...l}=r,n=p(t);return e(Fe,{...n,...l,ref:a})});ue.displayName=se;var ce="AlertDialogDescription",de=i.forwardRef((r,a)=>{const{__scopeAlertDialog:t,...l}=r,n=p(t);return e(Se,{...n,...l,ref:a})});de.displayName=ce;var We="AlertDialogAction",Ce=i.forwardRef((r,a)=>{const{__scopeAlertDialog:t,...l}=r,n=p(t);return e(ee,{...n,...l,ref:a})});Ce.displayName=We;var ge="AlertDialogCancel",Ae=i.forwardRef((r,a)=>{const{__scopeAlertDialog:t,...l}=r,{cancelRef:n}=qe(ge,t),S=p(t),B=X(a,n);return e(ee,{...S,...l,ref:B})});Ae.displayName=ge;var je=({contentRef:r})=>{const a=`\`${_}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${_}\` by passing a \`${ce}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${_}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return i.useEffect(()=>{var l;document.getElementById((l=r.current)==null?void 0:l.getAttribute("aria-describedby"))||console.warn(a)},[a,r]),null},ze=te,ke=oe,Ge=le,De=ie,pe=ne,me=Ce,he=Ae,_e=ue,fe=de;const u=ze,m=ke,R=Ge,F=i.forwardRef(({className:r,...a},t)=>e(De,{className:h("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a,ref:t}));F.displayName=De.displayName;const c=i.forwardRef(({className:r,...a},t)=>o(R,{children:[e(F,{}),e(pe,{ref:t,className:h("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...a})]}));c.displayName=pe.displayName;const d=({className:r,...a})=>e("div",{className:h("flex flex-col space-y-2 text-center sm:text-left",r),...a});d.displayName="AlertDialogHeader";const C=({className:r,...a})=>e("div",{className:h("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...a});C.displayName="AlertDialogFooter";const g=i.forwardRef(({className:r,...a},t)=>e(_e,{ref:t,className:h("text-lg font-semibold",r),...a}));g.displayName=_e.displayName;const A=i.forwardRef(({className:r,...a},t)=>e(fe,{ref:t,className:h("text-sm text-muted-foreground",r),...a}));A.displayName=fe.displayName;const s=i.forwardRef(({className:r,...a},t)=>e(me,{ref:t,className:h(re(),r),...a}));s.displayName=me.displayName;const D=i.forwardRef(({className:r,...a},t)=>e(he,{ref:t,className:h(re({variant:"outline"}),"mt-2 sm:mt-0",r),...a}));D.displayName=he.displayName;try{u.displayName="AlertDialog",u.__docgenInfo={description:"",displayName:"AlertDialog",props:{}}}catch{}try{R.displayName="AlertDialogPortal",R.__docgenInfo={description:"",displayName:"AlertDialogPortal",props:{}}}catch{}try{F.displayName="AlertDialogOverlay",F.__docgenInfo={description:"",displayName:"AlertDialogOverlay",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="AlertDialogTrigger",m.__docgenInfo={description:"",displayName:"AlertDialogTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="AlertDialogContent",c.__docgenInfo={description:"",displayName:"AlertDialogContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="AlertDialogHeader",d.__docgenInfo={description:"",displayName:"AlertDialogHeader",props:{}}}catch{}try{C.displayName="AlertDialogFooter",C.__docgenInfo={description:"",displayName:"AlertDialogFooter",props:{}}}catch{}try{g.displayName="AlertDialogTitle",g.__docgenInfo={description:"",displayName:"AlertDialogTitle",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{A.displayName="AlertDialogDescription",A.__docgenInfo={description:"",displayName:"AlertDialogDescription",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="AlertDialogAction",s.__docgenInfo={description:"",displayName:"AlertDialogAction",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{D.displayName="AlertDialogCancel",D.__docgenInfo={description:"",displayName:"AlertDialogCancel",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ur={title:"Components/AlertDialog",component:u,parameters:{layout:"centered"},tags:["autodocs"]},v={render:()=>o(u,{children:[e(m,{asChild:!0,children:e(f,{variant:"outline",children:"다이얼로그 열기"})}),o(c,{children:[o(d,{children:[e(g,{children:"정말로 계속하시겠습니까?"}),e(A,{children:"이 작업은 되돌릴 수 없습니다. 계속 진행하시겠습니까?"})]}),o(C,{children:[e(D,{children:"취소"}),e(s,{children:"계속"})]})]})]})},N={render:()=>o(u,{children:[e(m,{asChild:!0,children:e(f,{variant:"destructive",children:"삭제"})}),o(c,{children:[o(d,{children:[e(g,{children:"정말 삭제하시겠습니까?"}),e(A,{children:"이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다."})]}),o(C,{children:[e(D,{children:"취소"}),e(s,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"삭제"})]})]})]})},E={render:()=>o(u,{children:[e(m,{asChild:!0,children:e(f,{variant:"ghost",children:"로그아웃"})}),o(c,{children:[o(d,{children:[e(g,{children:"로그아웃 하시겠습니까?"}),e(A,{children:"로그아웃하면 현재 세션이 종료됩니다."})]}),o(C,{children:[e(D,{children:"취소"}),e(s,{children:"로그아웃"})]})]})]})},T={render:()=>o(u,{children:[e(m,{asChild:!0,children:e(f,{children:"변경사항 저장"})}),o(c,{children:[o(d,{children:[e(g,{children:"변경사항을 저장하시겠습니까?"}),e(A,{children:"저장하지 않은 변경사항은 손실됩니다."})]}),o(C,{children:[e(D,{children:"저장 안함"}),e(s,{children:"저장"})]})]})]})},b={render:()=>o(u,{children:[e(m,{asChild:!0,children:e(f,{variant:"outline",children:"경고 보기"})}),o(c,{children:[o(d,{children:[e(g,{children:"⚠️ 경고"}),e(A,{children:"이 작업은 시스템에 중대한 영향을 줄 수 있습니다. 계속하기 전에 모든 데이터를 백업했는지 확인하세요."})]}),o(C,{children:[e(D,{children:"취소"}),e(s,{className:"bg-orange-500 hover:bg-orange-600",children:"이해했습니다"})]})]})]})},x={render:()=>o(u,{children:[e(m,{asChild:!0,children:e(f,{variant:"secondary",children:"파일 닫기"})}),o(c,{children:[o(d,{children:[e(g,{children:"저장하지 않은 변경사항"}),e(A,{children:"파일에 저장하지 않은 변경사항이 있습니다. 어떻게 하시겠습니까?"})]}),o(C,{className:"flex-col sm:flex-col gap-2",children:[e(s,{children:"저장 후 닫기"}),e(s,{className:"bg-secondary text-secondary-foreground hover:bg-secondary/80",children:"저장 안하고 닫기"}),e(D,{children:"취소"})]})]})]})};var P,O,H;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">다이얼로그 열기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말로 계속하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없습니다. 계속 진행하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>계속</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(H=(O=v.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var $,M,V;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">삭제</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없습니다. 계정과 모든 데이터가 영구적으로 삭제됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(V=(M=N.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var q,L,W;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">로그아웃</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그아웃 하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            로그아웃하면 현재 세션이 종료됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>로그아웃</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(W=(L=E.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var j,z,k;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>변경사항 저장</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>변경사항을 저장하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            저장하지 않은 변경사항은 손실됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>저장 안함</AlertDialogCancel>
          <AlertDialogAction>저장</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(k=(z=T.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var G,Y,J;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">경고 보기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>⚠️ 경고</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 시스템에 중대한 영향을 줄 수 있습니다. 
            계속하기 전에 모든 데이터를 백업했는지 확인하세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction className="bg-orange-500 hover:bg-orange-600">
            이해했습니다
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(J=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">파일 닫기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>저장하지 않은 변경사항</AlertDialogTitle>
          <AlertDialogDescription>
            파일에 저장하지 않은 변경사항이 있습니다. 어떻게 하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-col gap-2">
          <AlertDialogAction>저장 후 닫기</AlertDialogAction>
          <AlertDialogAction className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            저장 안하고 닫기
          </AlertDialogAction>
          <AlertDialogCancel>취소</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const cr=["Default","DeleteConfirmation","Logout","SaveChanges","Warning","MultipleActions"];export{v as Default,N as DeleteConfirmation,E as Logout,x as MultipleActions,T as SaveChanges,b as Warning,cr as __namedExportsOrder,ur as default};
