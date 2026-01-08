import{j as r,a as e}from"./utils-14f1029f.js";import{I as a}from"./Input-a781cec9.js";import{L as s}from"./Label-c15685ef.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const z={title:"Components/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","search","tel","url"]},disabled:{control:"boolean"},placeholder:{control:"text"}}},l={args:{placeholder:"입력하세요..."}},o={render:()=>r("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e(s,{htmlFor:"email",children:"이메일"}),e(a,{type:"email",id:"email",placeholder:"Email"})]})},m={args:{placeholder:"비활성화된 입력",disabled:!0}},t={args:{value:"값이 입력된 상태",readOnly:!0}},d={render:()=>r("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e(s,{htmlFor:"password",children:"비밀번호"}),e(a,{type:"password",id:"password",placeholder:"비밀번호를 입력하세요"})]})},u={render:()=>r("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e(s,{htmlFor:"picture",children:"파일"}),e(a,{id:"picture",type:"file"})]})},c={render:()=>r("form",{className:"w-full max-w-sm space-y-4",children:[r("div",{className:"space-y-2",children:[e(s,{htmlFor:"username",children:"사용자명"}),e(a,{id:"username",placeholder:"사용자명"})]}),r("div",{className:"space-y-2",children:[e(s,{htmlFor:"email-form",children:"이메일"}),e(a,{id:"email-form",type:"email",placeholder:"이메일"})]}),r("div",{className:"space-y-2",children:[e(s,{htmlFor:"password-form",children:"비밀번호"}),e(a,{id:"password-form",type:"password",placeholder:"비밀번호"})]})]})};var n,i,p;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: '입력하세요...'
  }
}`,...(p=(i=l.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var C,h,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,g,B;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: '비활성화된 입력',
    disabled: true
  }
}`,...(B=(g=m.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var y,b,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: '값이 입력된 상태',
    readOnly: true
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,F,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" placeholder="비밀번호를 입력하세요" />
    </div>
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var D,N,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">파일</Label>
      <Input id="picture" type="file" />
    </div>
}`,...(A=(N=u.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var E,I,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <form className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="username">사용자명</Label>
        <Input id="username" placeholder="사용자명" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-form">이메일</Label>
        <Input id="email-form" type="email" placeholder="이메일" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-form">비밀번호</Label>
        <Input id="password-form" type="password" placeholder="비밀번호" />
      </div>
    </form>
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const G=["Default","WithLabel","Disabled","WithValue","Password","File","FormExample"];export{l as Default,m as Disabled,u as File,c as FormExample,d as Password,o as WithLabel,t as WithValue,G as __namedExportsOrder,z as default};
