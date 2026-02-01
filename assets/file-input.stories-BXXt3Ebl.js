import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-D6g7oyBT.js";import{F as o}from"./index-D15vhobV.js";import"./index-CfGYGdnL.js";import{B as g}from"./button-CGO10ZW3.js";import"./preload-helper-PPVm8Dsz.js";import"./select-or-matches-CBCk0u7F.js";import"./config-U0NUeV76.js";import"./sanitizer-u4rxq2Pl.js";import"./form-group-BobNIxMO.js";import"./index-BSW12edA.js";import"./label-Z58zP1tT.js";import"./helper-text-C5i0f8Ge.js";import"./error-messages-DQwxQ3pR.js";import"./index-DC_N10vg.js";import"./is-in-viewport-ChIQrv3L.js";import"./events-CleOcHg4.js";import"./active-element-BuxAly_Z.js";const b=()=>({clear:p=>{const r=document.getElementById(p);if(r===null)return;const e=r.parentElement;if(e===null)return;e.querySelectorAll(".usa-file-input__preview").forEach(u=>u.remove()),e.querySelectorAll(".usa-file-input__preview-heading").forEach(u=>u.remove());const i=e.querySelector(".usa-sr-only");i&&(i.innerHTML="No file selected.");const d=e.querySelector(".usa-file-input__instructions");d&&d.removeAttribute("hidden"),r.setAttribute("aria-label",""),r.value=""}}),N={title:"USWDS/Forms/File Input",component:o,argTypes:{id:{required:!0},name:{required:!0},multiple:{type:"boolean"},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1},render:l=>t.jsx(o,{...l})},s={args:{id:"file-input-2",name:"file-input-2",multiple:!0,required:!1,label:"Select files",helperText:"Input accepts multiple files",disabled:!1},render:l=>t.jsx(o,{...l})},a={args:{id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1},render:l=>{const{clear:p}=b(),[r,e]=m.useState(null);return m.useEffect(()=>{console.log(r)},[r]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"padding-bottom-1",children:t.jsx(o,{onChange:c=>{const i=c.target?.files;i&&e(i[0])},...l})}),t.jsx("div",{children:t.jsx(g,{id:"clear-btn",onClick:()=>{p(l.id),e(null)},children:"Clear"})})]})},parameters:{docs:{source:{type:"code"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-input-1',
    name: 'file-input-1',
    multiple: false,
    required: false,
    label: 'Select a file',
    helperText: 'Input accepts a single file',
    disabled: false
  },
  render: (args: FileInputProps) => <FileInput {...args} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-input-2',
    name: 'file-input-2',
    multiple: true,
    required: false,
    label: 'Select files',
    helperText: 'Input accepts multiple files',
    disabled: false
  },
  render: (args: FileInputProps) => <FileInput {...args} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-input-1',
    name: 'file-input-1',
    multiple: false,
    required: false,
    label: 'Select a file',
    helperText: 'Input accepts a single file',
    disabled: false
  },
  render: (args: FileInputProps) => {
    const {
      clear
    } = useFileInput();
    const [file, setFile] = useState<File | null>(null);
    useEffect(() => {
      // eslint-disable-next-line no-console
      console.log(file);
    }, [file]);
    return <>
        <div className="padding-bottom-1">
          <FileInput onChange={event => {
          const target = event.target as HTMLInputElement;
          const files = target?.files;
          if (files) {
            setFile(files[0]);
          }
        }} {...args} />
        </div>
        <div>
          <Button id="clear-btn" onClick={() => {
          clear(args.id);
          setFile(null);
        }}>
            Clear
          </Button>
        </div>
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const P=["Standard","Multiple","CustomClear"];export{a as CustomClear,s as Multiple,n as Standard,P as __namedExportsOrder,N as default};
