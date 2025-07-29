import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-BYzdcdZ1.js";import{F as d,T as i,b as D}from"./table-Bb6U9UN-.js";import"./banner-9IEHsLzf.js";import{B as V}from"./button-B2zgU3gw.js";import"./button-group-CuV8b-Jt.js";import{a as I}from"./checkbox-BEI5JEAd.js";import"./combo-box-CQxpp1rn.js";import{D as G}from"./date-picker-BwF3ZQWf.js";import"./error-messages-_lA7co94.js";import"./index-B2IyjUDW.js";import"./form-group-D7o0mHcs.js";import"./helper-text-BRA2CuHl.js";import"./icon-DDMZOkTr.js";import"./label-0qqEdO1f.js";import"./modal-BWU4uOwE.js";import"./process-list-DLQVUbiM.js";import{R as B}from"./radio-button-DiQ8zHvZ.js";import"./range-slider-B1JHoTLM.js";import"./search-Dzffyc8z.js";import{S as A}from"./select-neAeqmJy.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-BC3cl4Xt.js";import"./step-indicator-DLuCjkFb.js";import"./summary-box-DTZd7klS.js";import"./tag-DN6lamzf.js";import"./text-area-DOXKJPbL.js";import"./time-picker-B4nbaApt.js";import"./tooltip-BnEISZxP.js";import"./index-CprWhq2V.js";import"./index-CxoXSAzG.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-DgAcE3a1.js";import"./active-element-BuxAly_Z.js";const Te={title:"USWDS/Forms/Form",component:d},l={args:{id:"basic-form",isLarge:!1},render:n=>e.jsx(d,{...n,className:"width-tablet",children:e.jsx(i,{id:"text-input-1",name:"text-input-1",label:"Text Input",helperText:"Enter your text"})})},s={render:()=>{const[n,y]=a.useState(""),[u,S]=a.useState(""),[E,C]=a.useState(""),[T,F]=a.useState(""),[j,N]=a.useState(""),[o,c]=a.useState(["email"]),[P,k]=a.useState("weekly"),[p,h]=a.useState(""),[f,v]=a.useState(""),[q,b]=a.useState(!1),x=t=>t===""?(h("This field is required"),!1):(h(""),!0),g=t=>t===""?(v("This field is required"),!1):(v(""),!0),w=t=>{t.preventDefault();const r=x(n),m=g(u);b(!(!r||!m))};return e.jsxs(d,{id:"contact-form",onSubmit:w,className:"maxw-mobile-lg",children:[e.jsx(i,{id:"name",name:"name",required:!0,label:"Name",helperText:"Enter your full name (first and last)",errors:p,validationStatus:p?"error":void 0,onChange:t=>{y(t.target.value),x(t.target.value)}}),e.jsx(i,{id:"email",name:"email",required:!0,label:"Email Address",helperText:"Enter your email address",errors:f,validationStatus:f?"error":void 0,onChange:t=>{S(t.target.value),g(t.target.value)}}),e.jsx(i,{id:"phone",name:"phone",label:"Phone Number",helperText:"Enter your phone number",mask:"phone_number",onChange:t=>C(t.target.value)}),e.jsx(A,{id:"gender",name:"gender",options:[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"undeclared",label:"Undeclared"}],label:"Gender",helperText:"Select from the list below",onChange:t=>F(t.target.value)}),e.jsx(G,{id:"dob",name:"dob",label:"Date of Birth",helperText:"mm/dd/yyyy",onChange:t=>N(t.target.value)}),e.jsx(I,{id:"contact-preferences",name:"contact-preferences",label:"Contact Preferences",helperText:"Select how you would like to be contacted",data:[{label:"Email",value:"email",defaultChecked:!0},{label:"Phone",value:"phone",defaultChecked:!1}],onChange:t=>{const r=t.target.value;o.includes(r)?c(o.filter(m=>m!==r)):c([...o,r])}}),e.jsx(B,{id:"contact-frequency",name:"contact-frequency",label:"Contact Frequency",helperText:"Select how often you would like to be contacted",data:[{label:"Weekly",value:"weekly",defaultChecked:!0},{label:"Monthly",value:"monthly",defaultChecked:!1}],onChange:t=>k(t.target.value)}),e.jsx(V,{id:"submit",type:"submit",children:"Submit"}),q?e.jsx("div",{className:"margin-top-4",children:e.jsxs(D,{id:"form-submission-data",type:"info",children:[e.jsx("strong",{children:"Form Submitted Successfully!"}),e.jsxs("div",{children:["Name: ",n]}),e.jsxs("div",{children:["Email: ",u]}),e.jsxs("div",{children:["Phone: ",E]}),e.jsxs("div",{children:["Gender: ",T]}),e.jsxs("div",{children:["Date of Birth: ",j]}),e.jsxs("div",{children:["Contact Preferences: ",o.join(", ")]}),e.jsxs("div",{children:["Contact Frequency: ",P]})]})}):e.jsx(e.Fragment,{})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'basic-form',
    isLarge: false
  },
  render: (args: FormProps) => <Form {...args} className="width-tablet">
      <TextInput id="text-input-1" name="text-input-1" label="Text Input" helperText="Enter your text" />
    </Form>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
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
  }
}`,...s.parameters?.docs?.source}}};const Fe=["Standard","ContactForm"];export{s as ContactForm,l as Standard,Fe as __namedExportsOrder,Te as default};
