import{a as e,c as p,j as a}from"./utils-14f1029f.js";import{r as A}from"./index-49dd5b96.js";import{O as P,C as S,a as z,T as W,D as G,R as K,b as M,P as Q}from"./index-a3c9ad70.js";import{B as t}from"./Button-9ecee7bc.js";import{I as _}from"./Input-a781cec9.js";import{L as N}from"./Label-c15685ef.js";import"./_commonjsHelpers-de833af9.js";import"./index-42772863.js";import"./index-7a5cd00d.js";import"./index-65e79f52.js";import"./index-5870cbc5.js";import"./index-79c416c5.js";import"./index-94eabfb1.js";import"./index-f9546431.js";import"./index-09dc48b3.js";import"./index-bf7d13df.js";import"./index-3a35a76c.js";const i=K,d=M,f=Q,x=z,y=A.forwardRef(({className:o,...u},C)=>e(P,{ref:C,className:p("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",o),...u}));y.displayName=P.displayName;const n=A.forwardRef(({className:o,children:u,...C},J)=>a(f,{children:[e(y,{}),a(S,{ref:J,className:p("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",o),...C,children:[u,a(z,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4",children:[e("line",{x1:"18",x2:"6",y1:"6",y2:"18"}),e("line",{x1:"6",x2:"18",y1:"6",y2:"18"})]}),e("span",{className:"sr-only",children:"Close"})]})]})]}));n.displayName=S.displayName;const r=({className:o,...u})=>e("div",{className:p("flex flex-col space-y-1.5 text-center sm:text-left",o),...u});r.displayName="DialogHeader";const c=({className:o,...u})=>e("div",{className:p("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",o),...u});c.displayName="DialogFooter";const l=A.forwardRef(({className:o,...u},C)=>e(W,{ref:C,className:p("text-lg font-semibold leading-none tracking-tight",o),...u}));l.displayName=W.displayName;const s=A.forwardRef(({className:o,...u},C)=>e(G,{ref:C,className:p("text-sm text-muted-foreground",o),...u}));s.displayName=G.displayName;try{i.displayName="Dialog",i.__docgenInfo={description:"",displayName:"Dialog",props:{}}}catch{}try{f.displayName="DialogPortal",f.__docgenInfo={description:"",displayName:"DialogPortal",props:{}}}catch{}try{y.displayName="DialogOverlay",y.__docgenInfo={description:"",displayName:"DialogOverlay",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{x.displayName="DialogClose",x.__docgenInfo={description:"",displayName:"DialogClose",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="DialogTrigger",d.__docgenInfo={description:"",displayName:"DialogTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{n.displayName="DialogContent",n.__docgenInfo={description:"",displayName:"DialogContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="DialogHeader",r.__docgenInfo={description:"",displayName:"DialogHeader",props:{}}}catch{}try{c.displayName="DialogFooter",c.__docgenInfo={description:"",displayName:"DialogFooter",props:{}}}catch{}try{l.displayName="DialogTitle",l.__docgenInfo={description:"",displayName:"DialogTitle",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="DialogDescription",s.__docgenInfo={description:"",displayName:"DialogDescription",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ce={title:"Components/Dialog",component:i,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>a(i,{children:[e(d,{asChild:!0,children:e(t,{variant:"outline",children:"다이얼로그 열기"})}),a(n,{children:[a(r,{children:[e(l,{children:"다이얼로그 제목"}),e(s,{children:"다이얼로그 설명이 여기에 표시됩니다. 사용자에게 추가 정보를 제공할 수 있습니다."})]}),e("div",{className:"py-4",children:e("p",{className:"text-sm",children:"다이얼로그 본문 내용입니다."})}),e(c,{children:e(t,{type:"submit",children:"확인"})})]})]})},m={render:()=>a(i,{children:[e(d,{asChild:!0,children:e(t,{children:"프로필 편집"})}),a(n,{className:"sm:max-w-[425px]",children:[a(r,{children:[e(l,{children:"프로필 편집"}),e(s,{children:"프로필 정보를 수정하세요. 완료되면 저장 버튼을 클릭하세요."})]}),a("div",{className:"grid gap-4 py-4",children:[a("div",{className:"grid grid-cols-4 items-center gap-4",children:[e(N,{htmlFor:"name",className:"text-right",children:"이름"}),e(_,{id:"name",defaultValue:"홍길동",className:"col-span-3"})]}),a("div",{className:"grid grid-cols-4 items-center gap-4",children:[e(N,{htmlFor:"username",className:"text-right",children:"사용자명"}),e(_,{id:"username",defaultValue:"@gildong",className:"col-span-3"})]})]}),e(c,{children:e(t,{type:"submit",children:"저장"})})]})]})},D={render:()=>a(i,{children:[e(d,{asChild:!0,children:e(t,{variant:"secondary",children:"정보 보기"})}),a(n,{children:[a(r,{children:[e(l,{children:"알림"}),e(s,{children:"새로운 업데이트가 있습니다."})]}),a("div",{className:"py-4",children:[e("h4",{className:"mb-2 font-medium",children:"버전 2.0.0"}),a("ul",{className:"list-disc list-inside space-y-1 text-sm text-muted-foreground",children:[e("li",{children:"새로운 기능 추가"}),e("li",{children:"버그 수정"}),e("li",{children:"성능 개선"})]})]}),e(c,{children:e(t,{children:"확인"})})]})]})},B={render:()=>a(i,{children:[e(d,{asChild:!0,children:e(t,{variant:"ghost",children:"간단한 다이얼로그"})}),e(n,{children:a(r,{children:[e(l,{children:"알림"}),e(s,{children:"이것은 푸터가 없는 간단한 다이얼로그입니다."})]})})]})},h={render:()=>a(i,{children:[e(d,{asChild:!0,children:e(t,{variant:"outline",children:"긴 내용 다이얼로그"})}),a(n,{className:"max-h-[80vh] overflow-y-auto",children:[a(r,{children:[e(l,{children:"이용약관"}),e(s,{children:"서비스 이용약관을 확인하세요."})]}),a("div",{className:"py-4 space-y-4",children:[e("p",{className:"text-sm",children:"제1조 (목적) 이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다."}),e("p",{className:"text-sm",children:"제2조 (정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다..."}),e("p",{className:"text-sm",children:"제3조 (약관의 효력 및 변경) 1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다."}),e("p",{className:"text-sm",children:"제4조 (서비스의 제공 및 변경) 회사는 다음과 같은 서비스를 제공합니다..."})]}),a(c,{children:[e(t,{variant:"outline",children:"닫기"}),e(t,{children:"동의"})]})]})]})};var F,v,E;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">다이얼로그 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>다이얼로그 제목</DialogTitle>
          <DialogDescription>
            다이얼로그 설명이 여기에 표시됩니다. 사용자에게 추가 정보를 제공할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">다이얼로그 본문 내용입니다.</p>
        </div>
        <DialogFooter>
          <Button type="submit">확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(E=(v=g.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var b,T,w;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>프로필 편집</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>프로필 편집</DialogTitle>
          <DialogDescription>
            프로필 정보를 수정하세요. 완료되면 저장 버튼을 클릭하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              이름
            </Label>
            <Input id="name" defaultValue="홍길동" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              사용자명
            </Label>
            <Input id="username" defaultValue="@gildong" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,H,L;D.parameters={...D.parameters,docs:{...(I=D.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">정보 보기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>
            새로운 업데이트가 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h4 className="mb-2 font-medium">버전 2.0.0</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>새로운 기능 추가</li>
            <li>버그 수정</li>
            <li>성능 개선</li>
          </ul>
        </div>
        <DialogFooter>
          <Button>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(L=(H=D.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,k,q;B.parameters={...B.parameters,docs:{...(V=B.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">간단한 다이얼로그</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>
            이것은 푸터가 없는 간단한 다이얼로그입니다.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
}`,...(q=(k=B.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var O,R,j;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">긴 내용 다이얼로그</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>이용약관</DialogTitle>
          <DialogDescription>
            서비스 이용약관을 확인하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-sm">
            제1조 (목적) 이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
          <p className="text-sm">
            제2조 (정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다...
          </p>
          <p className="text-sm">
            제3조 (약관의 효력 및 변경) 1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이 발생합니다.
          </p>
          <p className="text-sm">
            제4조 (서비스의 제공 및 변경) 회사는 다음과 같은 서비스를 제공합니다...
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">닫기</Button>
          <Button>동의</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(j=(R=h.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};const pe=["Default","WithForm","Information","NoFooter","LongContent"];export{g as Default,D as Information,h as LongContent,B as NoFooter,m as WithForm,pe as __namedExportsOrder,ce as default};
