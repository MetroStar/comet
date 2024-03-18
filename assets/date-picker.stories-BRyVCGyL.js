import{j as r}from"./jsx-runtime-CKrituN3.js";import{D as N}from"./date-picker-QYnd2bpS.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D6IA0wpC.js";import"./config-BXli1stc.js";import"./select-or-matches-Bu-g4rUn.js";import"./events-C6LRLXdn.js";import"./active-element-CTMAq7ve.js";import"./sanitizer-BtXph-xc.js";const E={title:"USWDS/Forms/Date Picker",component:N,argTypes:{id:{required:!0},name:{required:!0}}},d=new Date,m=new Date(d);m.setDate(m.getDate()-8);const o=new Date(d);o.setDate(o.getDate()-60);const l=new Date(d);l.setDate(l.getDate()+14);const s=a=>r.jsxs("div",{className:"usa-form-group",children:[r.jsx("label",{className:"usa-label",id:"appointment-date-label",htmlFor:a.id,children:"Appointment date"}),r.jsx("div",{className:"usa-hint",id:"appointment-date-hint",children:"mm/dd/yyyy"}),r.jsx(N,{id:a.id,name:a.name,"aria-describedby":"appointment-date-label appointment-date-hint",defaultValue:a.defaultValue,minDate:a.minDate,maxDate:a.maxDate,dateRange:a.dateRange})]}),e=s.bind({});e.args={id:"date-picker-1",name:"date-picker-1"};const t=s.bind({});t.args={id:"date-picker-2",name:"date-picker-2",defaultValue:d.toString()};const n=s.bind({});n.args={id:"date-picker-3",name:"date-picker-3",minDate:o,maxDate:l};const i=s.bind({});i.args={id:"date-picker-4",name:"date-picker-4",dateRange:m};var p,c,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(args: DatePickerProps) => <div className="usa-form-group">
    <label className="usa-label" id="appointment-date-label" htmlFor={args.id}>
      Appointment date
    </label>
    <div className="usa-hint" id="appointment-date-hint">
      mm/dd/yyyy
    </div>
    <DatePicker id={args.id} name={args.name} aria-describedby="appointment-date-label appointment-date-hint" defaultValue={args.defaultValue} minDate={args.minDate} maxDate={args.maxDate} dateRange={args.dateRange} />
  </div>`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,D,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`(args: DatePickerProps) => <div className="usa-form-group">
    <label className="usa-label" id="appointment-date-label" htmlFor={args.id}>
      Appointment date
    </label>
    <div className="usa-hint" id="appointment-date-hint">
      mm/dd/yyyy
    </div>
    <DatePicker id={args.id} name={args.name} aria-describedby="appointment-date-label appointment-date-hint" defaultValue={args.defaultValue} minDate={args.minDate} maxDate={args.maxDate} dateRange={args.dateRange} />
  </div>`,...(b=(D=t.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var y,h,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(args: DatePickerProps) => <div className="usa-form-group">
    <label className="usa-label" id="appointment-date-label" htmlFor={args.id}>
      Appointment date
    </label>
    <div className="usa-hint" id="appointment-date-hint">
      mm/dd/yyyy
    </div>
    <DatePicker id={args.id} name={args.name} aria-describedby="appointment-date-label appointment-date-hint" defaultValue={args.defaultValue} minDate={args.minDate} maxDate={args.maxDate} dateRange={args.dateRange} />
  </div>`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,k,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`(args: DatePickerProps) => <div className="usa-form-group">
    <label className="usa-label" id="appointment-date-label" htmlFor={args.id}>
      Appointment date
    </label>
    <div className="usa-hint" id="appointment-date-hint">
      mm/dd/yyyy
    </div>
    <DatePicker id={args.id} name={args.name} aria-describedby="appointment-date-label appointment-date-hint" defaultValue={args.defaultValue} minDate={args.minDate} maxDate={args.maxDate} dateRange={args.dateRange} />
  </div>`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const T=["Standard","DefaultValue","MinMax","DateRange"];export{i as DateRange,t as DefaultValue,n as MinMax,e as Standard,T as __namedExportsOrder,E as default};
