import{j as a,a as e}from"./utils-14f1029f.js";import{L as r}from"./Label-c15685ef.js";import{I as l}from"./Input-a781cec9.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const A={title:"Components/Label",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{children:"라벨"}},i={render:()=>a("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e(r,{htmlFor:"email",children:"이메일 주소"}),e(l,{type:"email",id:"email",placeholder:"이메일을 입력하세요"})]})},m={render:()=>a("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[a(r,{htmlFor:"required",children:["필수 항목 ",e("span",{className:"text-destructive",children:"*"})]}),e(l,{id:"required",placeholder:"필수 입력"})]})},t={render:()=>a("div",{className:"w-full max-w-sm space-y-4",children:[a("div",{className:"space-y-2",children:[e(r,{htmlFor:"name",children:"이름"}),e(l,{id:"name",placeholder:"홍길동"})]}),a("div",{className:"space-y-2",children:[e(r,{htmlFor:"email2",children:"이메일"}),e(l,{id:"email2",type:"email",placeholder:"example@email.com"})]}),a("div",{className:"space-y-2",children:[e(r,{htmlFor:"phone",children:"전화번호"}),e(l,{id:"phone",type:"tel",placeholder:"010-0000-0000"})]})]})};var n,d,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: '라벨'
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var o,p,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일 주소</Label>
      <Input type="email" id="email" placeholder="이메일을 입력하세요" />
    </div>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,C,v;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="required">
        필수 항목 <span className="text-destructive">*</span>
      </Label>
      <Input id="required" placeholder="필수 입력" />
    </div>
}`,...(v=(C=m.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var g,y,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" placeholder="홍길동" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email2">이메일</Label>
        <Input id="email2" type="email" placeholder="example@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">전화번호</Label>
        <Input id="phone" type="tel" placeholder="010-0000-0000" />
      </div>
    </div>
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const q=["Default","WithInput","Required","MultipleFields"];export{s as Default,t as MultipleFields,m as Required,i as WithInput,q as __namedExportsOrder,A as default};
