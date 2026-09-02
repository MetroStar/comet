import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";var i,a,o;function s(){return(s=t((()=>{i=e(n()),a=r(),o=({id:e,name:t,checked:n,label:r,ariaLabel:o,onChange:s})=>{let[c,l]=(0,i.useState)(!1),u=n!==void 0,d=u?n:c;return(0,a.jsx)(`div`,{className:`toggle`,children:(0,a.jsxs)(`label`,{htmlFor:e,className:`toggle-label`,tabIndex:0,"aria-label":o,children:[(0,a.jsxs)(`div`,{className:`pos-rel`,children:[(0,a.jsx)(`input`,{type:`checkbox`,id:e,name:t,className:`toggle-sr-only`,checked:d,onChange:e=>{u||l(e.target.checked),s?.(e)},tabIndex:-1}),(0,a.jsx)(`div`,{className:`toggle-body ${d?`toggle-body-on`:``}`}),(0,a.jsx)(`div`,{className:`toggle-dot ${d?`ml-6`:`ml-0`}`})]}),r&&(0,a.jsx)(`span`,{className:`toggle-label ml-3`,children:r})]})})};try{o.displayName=`Toggle`,o.__docgenInfo={description:`Used to toggle the state of a single setting on or off.`,displayName:`Toggle`,filePath:`/home/runner/work/comet/comet/packages/comet-extras/src/components/toggle/toggle.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`The unique identifier for this component`,name:`id`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`The name of the text input`,name:`name`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`string`}},checked:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`Whether the toggle is checked or not`,name:`checked`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`A label to display with the toggle`,name:`label`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`string`}},ariaLabel:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`An accessible label for the toggle`,name:`ariaLabel`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`}],description:`Custom callback for when input is changed`,name:`onChange`,parent:{fileName:`comet/packages/comet-extras/src/components/toggle/toggle.tsx`,name:`ToggleProps`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLInputElement>`}}},tags:{}}}catch{}})))()}var c,l,u,d,f,p,m,h;function g(){return(g=t((()=>{c=e(n()),s(),l=r(),u={title:`Extras/Toggle`,component:o,argTypes:{id:{control:`text`},name:{control:`text`},label:{control:`text`},ariaLabel:{control:`text`},onChange:{action:`changed`}}},d={args:{id:`toggle`,name:`toggle`,label:`Toggle`,ariaLabel:`Toggle button`},render:e=>(0,l.jsx)(o,{...e})},f={args:{id:`toggle-with-label`,name:`toggle`,label:`Enable notifications`,ariaLabel:`Enable notifications`},render:e=>(0,l.jsx)(o,{...e})},p={args:{id:`toggle-controlled`,name:`toggle`,label:`Controlled Toggle`,ariaLabel:`Controlled toggle button`},render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(o,{...e,checked:t,onChange:t=>{n(t.target.checked),e.onChange?.(t)}})}},m={args:{id:`toggle-controlled-checked`,name:`toggle`,label:`Controlled Toggle (Initially Checked)`,ariaLabel:`Controlled toggle button initially checked`},render:e=>{let[t,n]=(0,c.useState)(!0);return(0,l.jsx)(o,{...e,checked:t,onChange:t=>{n(t.target.checked),e.onChange?.(t)}})}},h=[`Default`,`WithLabel`,`Controlled`,`ControlledChecked`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle',
    name: 'toggle',
    label: 'Toggle',
    ariaLabel: 'Toggle button'
  },
  render: (args: ToggleProps) => <Toggle {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'toggle-with-label',
    name: 'toggle',
    label: 'Enable notifications',
    ariaLabel: 'Enable notifications'
  },
  render: (args: ToggleProps) => <Toggle {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as Controlled,m as ControlledChecked,d as Default,f as WithLabel,h as __namedExportsOrder,u as default};