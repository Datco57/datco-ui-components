import{j as e,a as r}from"./utils-14f1029f.js";import{C as n,a as C,b as a,c as t,d,e as F}from"./Card-7fb37a9a.js";import{B as c}from"./Button-7abc04a3.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const M={title:"Components/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"]},u={render:()=>e(n,{className:"w-[350px]",children:[e(C,{children:[r(a,{children:"Card Title"}),r(t,{children:"Card Description"})]}),r(d,{children:r("p",{children:"Card Content"})}),r(F,{children:r("p",{children:"Card Footer"})})]})},i={render:()=>e(n,{className:"w-[350px]",children:[e(C,{children:[r(a,{children:"알림 설정"}),r(t,{children:"알림 수신 방법을 선택하세요."})]}),r(d,{children:r("p",{className:"text-sm text-muted-foreground",children:"이메일과 푸시 알림을 통해 중요한 업데이트를 받아보세요."})}),e(F,{className:"flex justify-between",children:[r(c,{variant:"outline",children:"취소"}),r(c,{children:"저장"})]})]})},o={render:()=>e(n,{className:"w-[350px]",children:[r(C,{children:r(a,{children:"간단한 카드"})}),r(d,{children:r("p",{children:"헤더와 컨텐츠만 있는 간단한 카드입니다."})})]})},s={render:()=>e("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e(n,{children:[e(C,{children:[r(a,{children:"카드 1"}),r(t,{children:"첫 번째 카드"})]}),r(d,{children:r("p",{children:"카드 내용 1"})})]}),e(n,{children:[e(C,{children:[r(a,{children:"카드 2"}),r(t,{children:"두 번째 카드"})]}),r(d,{children:r("p",{children:"카드 내용 2"})})]}),e(n,{children:[e(C,{children:[r(a,{children:"카드 3"}),r(t,{children:"세 번째 카드"})]}),r(d,{children:r("p",{children:"카드 내용 3"})})]})]})};var l,p,B;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
}`,...(B=(p=u.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var m,h,D;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>알림 설정</CardTitle>
        <CardDescription>알림 수신 방법을 선택하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          이메일과 푸시 알림을 통해 중요한 업데이트를 받아보세요.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">취소</Button>
        <Button>저장</Button>
      </CardFooter>
    </Card>
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var E,x,g;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>간단한 카드</CardTitle>
      </CardHeader>
      <CardContent>
        <p>헤더와 컨텐츠만 있는 간단한 카드입니다.</p>
      </CardContent>
    </Card>
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,H,f;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>카드 1</CardTitle>
          <CardDescription>첫 번째 카드</CardDescription>
        </CardHeader>
        <CardContent>
          <p>카드 내용 1</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>카드 2</CardTitle>
          <CardDescription>두 번째 카드</CardDescription>
        </CardHeader>
        <CardContent>
          <p>카드 내용 2</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>카드 3</CardTitle>
          <CardDescription>세 번째 카드</CardDescription>
        </CardHeader>
        <CardContent>
          <p>카드 내용 3</p>
        </CardContent>
      </Card>
    </div>
}`,...(f=(H=s.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};const W=["Default","WithButton","SimpleCard","MultipleCards"];export{u as Default,s as MultipleCards,o as SimpleCard,i as WithButton,W as __namedExportsOrder,M as default};
