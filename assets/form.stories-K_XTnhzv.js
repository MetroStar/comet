import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-B0z_kBLT.js";import{F as d,T as i,b as M}from"./table-CCNQrNdW.js";import"./banner-TjY8ShwP.js";import{B as R}from"./button-DVNmTKt5.js";import"./button-group-CoIT59LX.js";import{a as _}from"./checkbox-E0ffnxV4.js";import"./combo-box-Ts3cyv4v.js";import{D as L}from"./date-picker-C4oHuyQp.js";import"./error-messages-pdO9TZPZ.js";import"./index-Du-4ew-N.js";import"./form-group-C28HIUm2.js";import"./helper-text-BRA2CuHl.js";import"./icon-7NiBfmOX.js";import"./label-0qqEdO1f.js";import"./modal-BPJigrVB.js";import"./process-list-B2zDoYTh.js";import{R as U}from"./radio-button-CwRM9fPx.js";import"./range-slider-BVWVbF-Y.js";import"./search-DQj-05zt.js";import{S as W}from"./select-BS8RArAf.js";import"./side-navigation-DDx8EY_w.js";import"./site-alert-LR6-TaNs.js";import"./step-indicator-BgCx9Ug1.js";import"./summary-box-DLDVA-7L.js";import"./tag-BMVn5z01.js";import"./text-area-DHJ4Ix-m.js";import"./time-picker-D_rmmC6_.js";import"./tooltip-Lq5j4ayc.js";import"./index-CcYHq6-n.js";import"./index-B2Mt268E.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-BlYASoiO.js";import"./active-element-BuxAly_Z.js";const De={title:"USWDS/Forms/Form",component:d},H=n=>e.jsx(d,{...n,className:"width-tablet",children:e.jsx(i,{id:"text-input-1",name:"text-input-1",label:"Text Input",helperText:"Enter your text"})}),l=H.bind({id:"basic-form",isLarge:!1}),O=()=>{const[n,F]=a.useState(""),[c,N]=a.useState(""),[P,k]=a.useState(""),[q,w]=a.useState(""),[D,V]=a.useState(""),[o,u]=a.useState(["email"]),[G,B]=a.useState("weekly"),[p,f]=a.useState(""),[h,v]=a.useState(""),[I,b]=a.useState(!1),x=t=>t===""?(f("This field is required"),!1):(f(""),!0),g=t=>t===""?(v("This field is required"),!1):(v(""),!0),A=t=>{t.preventDefault();const r=x(n),m=g(c);b(!(!r||!m))};return e.jsxs(d,{id:"contact-form",onSubmit:A,className:"maxw-mobile-lg",children:[e.jsx(i,{id:"name",name:"name",required:!0,label:"Name",helperText:"Enter your full name (first and last)",errors:p,validationStatus:p?"error":void 0,onChange:t=>{F(t.target.value),x(t.target.value)}}),e.jsx(i,{id:"email",name:"email",required:!0,label:"Email Address",helperText:"Enter your email address",errors:h,validationStatus:h?"error":void 0,onChange:t=>{N(t.target.value),g(t.target.value)}}),e.jsx(i,{id:"phone",name:"phone",label:"Phone Number",helperText:"Enter your phone number",mask:"phone_number",onChange:t=>k(t.target.value)}),e.jsx(W,{id:"gender",name:"gender",options:[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"undeclared",label:"Undeclared"}],label:"Gender",helperText:"Select from the list below",onChange:t=>w(t.target.value)}),e.jsx(L,{id:"dob",name:"dob",label:"Date of Birth",helperText:"mm/dd/yyyy",onChange:t=>V(t.target.value)}),e.jsx(_,{id:"contact-preferences",name:"contact-preferences",label:"Contact Preferences",helperText:"Select how you would like to be contacted",data:[{label:"Email",value:"email",defaultChecked:!0},{label:"Phone",value:"phone",defaultChecked:!1}],onChange:t=>{const r=t.target.value;o.includes(r)?u(o.filter(m=>m!==r)):u([...o,r])}}),e.jsx(U,{id:"contact-frequency",name:"contact-frequency",label:"Contact Frequency",helperText:"Select how often you would like to be contacted",data:[{label:"Weekly",value:"weekly",defaultChecked:!0},{label:"Monthly",value:"monthly",defaultChecked:!1}],onChange:t=>B(t.target.value)}),e.jsx(R,{id:"submit",type:"submit",children:"Submit"}),I?e.jsx("div",{className:"margin-top-4",children:e.jsxs(M,{id:"form-submission-data",type:"info",children:[e.jsx("strong",{children:"Form Submitted Successfully!"}),e.jsxs("div",{children:["Name: ",n]}),e.jsxs("div",{children:["Email: ",c]}),e.jsxs("div",{children:["Phone: ",P]}),e.jsxs("div",{children:["Gender: ",q]}),e.jsxs("div",{children:["Date of Birth: ",D]}),e.jsxs("div",{children:["Contact Preferences: ",o.join(", ")]}),e.jsxs("div",{children:["Contact Frequency: ",G]})]})}):e.jsx(e.Fragment,{})]})},s=O.bind({});var S,y,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`Template.bind({
  id: 'basic-form',
  isLarge: false
})`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var C,T,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [contactPreferences, setContactPreferences] = useState(['email']);
  const [contactFrequency, setContactFrequency] = useState('weekly');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const validateName = (value: string): boolean => {
    if (value === '') {
      setNameError('This field is required');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };
  const validateEmail = (value: string): boolean => {
    if (value === '') {
      setEmailError('This field is required');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    if (!isNameValid || !isEmailValid) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return <Form id="contact-form" onSubmit={handleSubmit} className="maxw-mobile-lg">
      <TextInput id="name" name="name" required label="Name" helperText="Enter your full name (first and last)" errors={nameError} validationStatus={nameError ? 'error' : undefined} onChange={e => {
      setName(e.target.value);
      validateName(e.target.value);
    }} />
      <TextInput id="email" name="email" required label="Email Address" helperText="Enter your email address" errors={emailError} validationStatus={emailError ? 'error' : undefined} onChange={e => {
      setEmail(e.target.value);
      validateEmail(e.target.value);
    }} />
      <TextInput id="phone" name="phone" label="Phone Number" helperText="Enter your phone number" mask="phone_number" onChange={e => setPhone(e.target.value)} />
      <Select id="gender" name="gender" options={[{
      value: 'male',
      label: 'Male'
    }, {
      value: 'female',
      label: 'Female'
    }, {
      value: 'undeclared',
      label: 'Undeclared'
    }]} label="Gender" helperText="Select from the list below" onChange={e => setGender(e.target.value)} />
      <DatePicker id="dob" name="dob" label="Date of Birth" helperText="mm/dd/yyyy" onChange={e => setDob((e.target as HTMLInputElement).value)} />
      <CheckboxGroup id="contact-preferences" name="contact-preferences" label="Contact Preferences" helperText="Select how you would like to be contacted" data={[{
      label: 'Email',
      value: 'email',
      defaultChecked: true
    }, {
      label: 'Phone',
      value: 'phone',
      defaultChecked: false
    }]} onChange={e => {
      const value = e.target.value;
      if (contactPreferences.includes(value)) {
        setContactPreferences(contactPreferences.filter(pref => pref !== value));
      } else {
        setContactPreferences([...contactPreferences, value]);
      }
    }} />
      <RadioButtonGroup id="contact-frequency" name="contact-frequency" label="Contact Frequency" helperText="Select how often you would like to be contacted" data={[{
      label: 'Weekly',
      value: 'weekly',
      defaultChecked: true
    }, {
      label: 'Monthly',
      value: 'monthly',
      defaultChecked: false
    }]} onChange={e => setContactFrequency(e.target.value)} />
      <Button id="submit" type="submit">
        Submit
      </Button>
      {isValid ? <div className="margin-top-4">
          <Alert id="form-submission-data" type="info">
            <strong>Form Submitted Successfully!</strong>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>Gender: {gender}</div>
            <div>Date of Birth: {dob}</div>
            <div>Contact Preferences: {contactPreferences.join(', ')}</div>
            <div>Contact Frequency: {contactFrequency}</div>
          </Alert>
        </div> : <></>}
    </Form>;
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Ve=["Standard","ContactForm"];export{s as ContactForm,l as Standard,Ve as __namedExportsOrder,De as default};
