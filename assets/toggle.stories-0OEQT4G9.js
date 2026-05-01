import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{L as n}from"./iframe-pVO7hzh_.js";import{t as r}from"./jsx-runtime-BpX3lQ6F.js";var i=t((()=>{})),a,o,s,c=t((()=>{i(),a=e(n()),o=r(),s=({id:e,name:t,checked:n,label:r,ariaLabel:i,onChange:s})=>{let[c,l]=(0,a.useState)(!1),u=n!==void 0,d=u?n:c;return(0,o.jsx)(`div`,{className:`toggle`,children:(0,o.jsxs)(`label`,{htmlFor:e,className:`toggle-label`,tabIndex:0,"aria-label":i,children:[(0,o.jsxs)(`div`,{className:`pos-rel`,children:[(0,o.jsx)(`input`,{type:`checkbox`,id:e,name:t,className:`toggle-sr-only`,checked:d,onChange:e=>{u||l(e.target.checked),s?.(e)},tabIndex:-1}),(0,o.jsx)(`div`,{className:`toggle-body ${d?`toggle-body-on`:``}`}),(0,o.jsx)(`div`,{className:`toggle-dot ${d?`ml-6`:`ml-0`}`})]}),r&&(0,o.jsx)(`span`,{className:`toggle-label ml-3`,children:r})]})})};try{s.displayName=`Toggle`,s.__docgenInfo={description:`Used to toggle the state of a single setting on or off.`,displayName:`Toggle`,filePath:`/home/runner/work/comet/comet/packages/comet-extras/src/components/toggle/toggle.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`The unique identifier for this component`,name:`id`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`The name of the text input`,name:`name`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`string`}},checked:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`Whether the toggle is checked or not`,name:`checked`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`A label to display with the toggle`,name:`label`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`string`}},ariaLabel:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`An accessible label for the toggle`,name:`ariaLabel`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`Custom callback for when input is changed`,name:`onChange`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLInputElement>`}}},tags:{}}}catch{}})),l,u,d,f,p,m,h,g;t((()=>{l=e(n()),c(),u=r(),d={title:`Extras/Toggle`,component:s,argTypes:{id:{control:`text`},name:{control:`text`},label:{control:`text`},ariaLabel:{control:`text`},onChange:{action:`changed`}}},f={args:{id:`toggle`,name:`toggle`,label:`Toggle`,ariaLabel:`Toggle button`},render:e=>(0,u.jsx)(s,{...e})},p={args:{id:`toggle-with-label`,name:`toggle`,label:`Enable notifications`,ariaLabel:`Enable notifications`},render:e=>(0,u.jsx)(s,{...e})},m={args:{id:`toggle-controlled`,name:`toggle`,label:`Controlled Toggle`,ariaLabel:`Controlled toggle button`},render:e=>{let[t,n]=(0,l.useState)(!1);return(0,u.jsx)(s,{...e,checked:t,onChange:t=>{n(t.target.checked),e.onChange?.(t)}})}},h={args:{id:`toggle-controlled-checked`,name:`toggle`,label:`Controlled Toggle (Initially Checked)`,ariaLabel:`Controlled toggle button initially checked`},render:e=>{let[t,n]=(0,l.useState)(!0);return(0,u.jsx)(s,{...e,checked:t,onChange:t=>{n(t.target.checked),e.onChange?.(t)}})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle',
    name: 'toggle',
    label: 'Toggle',
    ariaLabel: 'Toggle button'
  },
  render: (args: ToggleProps) => <Toggle {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-with-label',
    name: 'toggle',
    label: 'Enable notifications',
    ariaLabel: 'Enable notifications'
  },
  render: (args: ToggleProps) => <Toggle {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-controlled',
    name: 'toggle',
    label: 'Controlled Toggle',
    ariaLabel: 'Controlled toggle button'
  },
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      args.onChange?.(e);
    }} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-controlled-checked',
    name: 'toggle',
    label: 'Controlled Toggle (Initially Checked)',
    ariaLabel: 'Controlled toggle button initially checked'
  },
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(true);
    return <Toggle {...args} checked={checked} onChange={e => {
      setChecked(e.target.checked);
      args.onChange?.(e);
    }} />;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithLabel`,`Controlled`,`ControlledChecked`]}))();export{m as Controlled,h as ControlledChecked,f as Default,p as WithLabel,g as __namedExportsOrder,d as default};