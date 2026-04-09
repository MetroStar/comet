import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CsouTy85.js";import{t as r}from"./jsx-runtime-MmJhrRyC.js";import{t as i}from"./button-zm3BnggY.js";import{a,i as o,n as s,r as c,t as l}from"./hooks-Yk9CfBZV.js";var u,d,f,p,m,h,g;t((()=>{u=e(n()),o(),l(),a(),d=r(),f={title:`USWDS/Forms/File Input`,component:c,argTypes:{id:{required:!0},name:{required:!0},multiple:{type:`boolean`},required:{control:`boolean`},disabled:{control:`boolean`}}},p={args:{id:`file-input-1`,name:`file-input-1`,multiple:!1,required:!1,label:`Select a file`,helperText:`Input accepts a single file`,disabled:!1},render:e=>(0,d.jsx)(c,{...e})},m={args:{id:`file-input-2`,name:`file-input-2`,multiple:!0,required:!1,label:`Select files`,helperText:`Input accepts multiple files`,disabled:!1},render:e=>(0,d.jsx)(c,{...e})},h={args:{id:`file-input-1`,name:`file-input-1`,multiple:!1,required:!1,label:`Select a file`,helperText:`Input accepts a single file`,disabled:!1},render:e=>{let{clear:t}=s(),[n,r]=(0,u.useState)(null);return(0,u.useEffect)(()=>{console.log(n)},[n]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{className:`padding-bottom-1`,children:(0,d.jsx)(c,{onChange:e=>{let t=e.target?.files;t&&r(t[0])},...e})}),(0,d.jsx)(`div`,{children:(0,d.jsx)(i,{id:`clear-btn`,onClick:()=>{t(e.id),r(null)},children:`Clear`})})]})},parameters:{docs:{source:{type:`code`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Standard`,`Multiple`,`CustomClear`]}))();export{h as CustomClear,m as Multiple,p as Standard,g as __namedExportsOrder,f as default};