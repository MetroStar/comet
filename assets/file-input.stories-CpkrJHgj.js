import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-D7rw0kbP.js";import{F as o}from"./index-Dc5iOzpo.js";import"./index-DUKoxV3s.js";import{B as g}from"./button-C6DDMlzm.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./sanitizer-BDKKlE4O.js";import"./form-group-C37VFKvz.js";import"./index-C9q_5GSN.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-_lA7co94.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./events-CleOcHg4.js";import"./active-element-BuxAly_Z.js";const b=()=>({clear:p=>{const r=document.getElementById(p);if(r===null)return;const e=r.parentElement;if(e===null)return;e.querySelectorAll(".usa-file-input__preview").forEach(u=>u.remove()),e.querySelectorAll(".usa-file-input__preview-heading").forEach(u=>u.remove());const i=e.querySelector(".usa-sr-only");i&&(i.innerHTML="No file selected.");const d=e.querySelector(".usa-file-input__instructions");d&&d.removeAttribute("hidden"),r.setAttribute("aria-label",""),r.value=""}}),M={title:"USWDS/Forms/File Input",component:o,argTypes:{id:{required:!0},name:{required:!0},multiple:{type:"boolean"},required:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1},render:l=>t.jsx(o,{...l})},s={args:{id:"file-input-2",name:"file-input-2",multiple:!0,required:!1,label:"Select files",helperText:"Input accepts multiple files",disabled:!1},render:l=>t.jsx(o,{...l})},a={args:{id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1},render:l=>{const{clear:p}=b(),[r,e]=m.useState(null);return m.useEffect(()=>{console.log(r)},[r]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"padding-bottom-1",children:t.jsx(o,{onChange:c=>{const i=c.target?.files;i&&e(i[0])},...l})}),t.jsx("div",{children:t.jsx(g,{id:"clear-btn",onClick:()=>{p(l.id),e(null)},children:"Clear"})})]})},parameters:{docs:{source:{type:"code"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const N=["Standard","Multiple","CustomClear"];export{a as CustomClear,s as Multiple,n as Standard,N as __namedExportsOrder,M as default};
