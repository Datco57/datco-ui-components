import{a as e,c,j as r}from"./utils-14f1029f.js";import{r as i}from"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";const s=i.forwardRef(({className:a,...d},t)=>e("div",{className:"relative w-full overflow-auto",children:e("table",{ref:t,className:c("w-full caption-bottom text-sm",a),...d})}));s.displayName="Table";const b=i.forwardRef(({className:a,...d},t)=>e("thead",{ref:t,className:c("[&_tr]:border-b",a),...d}));b.displayName="TableHeader";const T=i.forwardRef(({className:a,...d},t)=>e("tbody",{ref:t,className:c("[&_tr:last-child]:border-0",a),...d}));T.displayName="TableBody";const p=i.forwardRef(({className:a,...d},t)=>e("tfoot",{ref:t,className:c("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...d}));p.displayName="TableFooter";const n=i.forwardRef(({className:a,...d},t)=>e("tr",{ref:t,className:c("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...d}));n.displayName="TableRow";const o=i.forwardRef(({className:a,...d},t)=>e("th",{ref:t,className:c("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...d}));o.displayName="TableHead";const l=i.forwardRef(({className:a,...d},t)=>e("td",{ref:t,className:c("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...d}));l.displayName="TableCell";const N=i.forwardRef(({className:a,...d},t)=>e("caption",{ref:t,className:c("mt-4 text-sm text-muted-foreground",a),...d}));N.displayName="TableCaption";try{s.displayName="Table",s.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}try{b.displayName="TableHeader",b.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}try{T.displayName="TableBody",T.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}try{p.displayName="TableFooter",p.__docgenInfo={description:"",displayName:"TableFooter",props:{}}}catch{}try{o.displayName="TableHead",o.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}try{n.displayName="TableRow",n.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}try{l.displayName="TableCell",l.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}try{N.displayName="TableCaption",N.__docgenInfo={description:"",displayName:"TableCaption",props:{}}}catch{}const B={title:"Components/Table",component:s,parameters:{layout:"centered"},tags:["autodocs"]},m={render:()=>r(s,{children:[e(N,{children:"A list of your recent invoices."}),e(b,{children:r(n,{children:[e(o,{className:"w-[100px]",children:"Invoice"}),e(o,{children:"Status"}),e(o,{children:"Method"}),e(o,{className:"text-right",children:"Amount"})]})}),r(T,{children:[r(n,{children:[e(l,{className:"font-medium",children:"INV001"}),e(l,{children:"Paid"}),e(l,{children:"Credit Card"}),e(l,{className:"text-right",children:"$250.00"})]}),r(n,{children:[e(l,{className:"font-medium",children:"INV002"}),e(l,{children:"Pending"}),e(l,{children:"PayPal"}),e(l,{className:"text-right",children:"$150.00"})]}),r(n,{children:[e(l,{className:"font-medium",children:"INV003"}),e(l,{children:"Unpaid"}),e(l,{children:"Bank Transfer"}),e(l,{className:"text-right",children:"$350.00"})]}),r(n,{children:[e(l,{className:"font-medium",children:"INV004"}),e(l,{children:"Paid"}),e(l,{children:"Credit Card"}),e(l,{className:"text-right",children:"$450.00"})]}),r(n,{children:[e(l,{className:"font-medium",children:"INV005"}),e(l,{children:"Paid"}),e(l,{children:"PayPal"}),e(l,{className:"text-right",children:"$550.00"})]}),r(n,{children:[e(l,{className:"font-medium",children:"INV006"}),e(l,{children:"Pending"}),e(l,{children:"Bank Transfer"}),e(l,{className:"text-right",children:"$200.00"})]}),r(n,{children:[e(l,{className:"font-medium",children:"INV007"}),e(l,{children:"Unpaid"}),e(l,{children:"Credit Card"}),e(l,{className:"text-right",children:"$300.00"})]})]})]})},h={render:()=>r(s,{children:[e(b,{children:r(n,{children:[e(o,{children:"Name"}),e(o,{children:"Email"}),e(o,{children:"Role"})]})}),r(T,{children:[r(n,{children:[e(l,{children:"John Doe"}),e(l,{children:"john@example.com"}),e(l,{children:"Admin"})]}),r(n,{children:[e(l,{children:"Jane Smith"}),e(l,{children:"jane@example.com"}),e(l,{children:"User"})]}),r(n,{children:[e(l,{children:"Bob Johnson"}),e(l,{children:"bob@example.com"}),e(l,{children:"Manager"})]})]})]})},C={render:()=>r(s,{children:[e(b,{children:r(n,{children:[e(o,{children:"Product"}),e(o,{children:"Quantity"}),e(o,{className:"text-right",children:"Price"})]})}),r(T,{children:[r(n,{children:[e(l,{children:"Product A"}),e(l,{children:"10"}),e(l,{className:"text-right",children:"$100.00"})]}),r(n,{children:[e(l,{children:"Product B"}),e(l,{children:"5"}),e(l,{className:"text-right",children:"$75.00"})]}),r(n,{children:[e(l,{children:"Product C"}),e(l,{children:"3"}),e(l,{className:"text-right",children:"$45.00"})]})]}),e(p,{children:r(n,{children:[e(l,{colSpan:2,children:"Total"}),e(l,{className:"text-right",children:"$220.00"})]})})]})};var _,y,g;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV004</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV005</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$550.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV006</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$200.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV007</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$300.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(g=(y=m.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,u,w;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Manager</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(w=(u=h.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var R,x,H;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Product A</TableCell>
          <TableCell>10</TableCell>
          <TableCell className="text-right">$100.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product B</TableCell>
          <TableCell>5</TableCell>
          <TableCell className="text-right">$75.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Product C</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">$45.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$220.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...(H=(x=C.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};const V=["Default","WithoutCaption","WithFooter"];export{m as Default,C as WithFooter,h as WithoutCaption,V as __namedExportsOrder,B as default};
