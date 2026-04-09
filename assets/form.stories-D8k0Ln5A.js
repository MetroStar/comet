import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-CsouTy85.js";import{t as r}from"./jsx-runtime-MmJhrRyC.js";import{t as i}from"./button-zm3BnggY.js";import{T as a,c as o,d as s,t as c,u as l}from"./src-BZKMcYWZ.js";import{n as u}from"./checkbox-BgFlTuuY.js";import{t as d}from"./select-BQ4PDwA3.js";import{t as f}from"./date-picker-BAZozSSy.js";import{n as p}from"./radio-button-Bf4mWTSA.js";var m,h,g,_,v,y;t((()=>{m=e(n()),s(),c(),h=r(),g={title:`USWDS/Forms/Form`,component:l},_={args:{id:`basic-form`,isLarge:!1},render:e=>(0,h.jsx)(l,{...e,className:`width-tablet`,children:(0,h.jsx)(o,{id:`text-input-1`,name:`text-input-1`,label:`Text Input`,helperText:`Enter your text`})})},v={render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``),[s,c]=(0,m.useState)(``),[g,_]=(0,m.useState)(``),[v,y]=(0,m.useState)(``),[b,x]=(0,m.useState)([`email`]),[S,C]=(0,m.useState)(`weekly`),[w,T]=(0,m.useState)(``),[E,D]=(0,m.useState)(``),[O,k]=(0,m.useState)(!1),A=e=>e===``?(T(`This field is required`),!1):(T(``),!0),j=e=>e===``?(D(`This field is required`),!1):(D(``),!0);return(0,h.jsxs)(l,{id:`contact-form`,onSubmit:t=>{t.preventDefault();let r=A(e),i=j(n);k(!(!r||!i))},className:`maxw-mobile-lg`,children:[(0,h.jsx)(o,{id:`name`,name:`name`,required:!0,label:`Name`,helperText:`Enter your full name (first and last)`,errors:w,validationStatus:w?`error`:void 0,onChange:e=>{t(e.target.value),A(e.target.value)}}),(0,h.jsx)(o,{id:`email`,name:`email`,required:!0,label:`Email Address`,helperText:`Enter your email address`,errors:E,validationStatus:E?`error`:void 0,onChange:e=>{r(e.target.value),j(e.target.value)}}),(0,h.jsx)(o,{id:`phone`,name:`phone`,label:`Phone Number`,helperText:`Enter your phone number`,mask:`phone_number`,onChange:e=>c(e.target.value)}),(0,h.jsx)(d,{id:`gender`,name:`gender`,options:[{value:`male`,label:`Male`},{value:`female`,label:`Female`},{value:`undeclared`,label:`Undeclared`}],label:`Gender`,helperText:`Select from the list below`,onChange:e=>_(e.target.value)}),(0,h.jsx)(f,{id:`dob`,name:`dob`,label:`Date of Birth`,helperText:`mm/dd/yyyy`,onChange:e=>y(e.target.value)}),(0,h.jsx)(u,{id:`contact-preferences`,name:`contact-preferences`,label:`Contact Preferences`,helperText:`Select how you would like to be contacted`,data:[{label:`Email`,value:`email`,defaultChecked:!0},{label:`Phone`,value:`phone`,defaultChecked:!1}],onChange:e=>{let t=e.target.value;b.includes(t)?x(b.filter(e=>e!==t)):x([...b,t])}}),(0,h.jsx)(p,{id:`contact-frequency`,name:`contact-frequency`,label:`Contact Frequency`,helperText:`Select how often you would like to be contacted`,data:[{label:`Weekly`,value:`weekly`,defaultChecked:!0},{label:`Monthly`,value:`monthly`,defaultChecked:!1}],onChange:e=>C(e.target.value)}),(0,h.jsx)(i,{id:`submit`,type:`submit`,children:`Submit`}),O?(0,h.jsx)(`div`,{className:`margin-top-4`,children:(0,h.jsxs)(a,{id:`form-submission-data`,type:`info`,children:[(0,h.jsx)(`strong`,{children:`Form Submitted Successfully!`}),(0,h.jsxs)(`div`,{children:[`Name: `,e]}),(0,h.jsxs)(`div`,{children:[`Email: `,n]}),(0,h.jsxs)(`div`,{children:[`Phone: `,s]}),(0,h.jsxs)(`div`,{children:[`Gender: `,g]}),(0,h.jsxs)(`div`,{children:[`Date of Birth: `,v]}),(0,h.jsxs)(`div`,{children:[`Contact Preferences: `,b.join(`, `)]}),(0,h.jsxs)(`div`,{children:[`Contact Frequency: `,S]})]})}):(0,h.jsx)(h.Fragment,{})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'basic-form',
    isLarge: false
  },
  render: (args: FormProps) => <Form {...args} className="width-tablet">
      <TextInput id="text-input-1" name="text-input-1" label="Text Input" helperText="Enter your text" />
    </Form>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Standard`,`ContactForm`]}))();export{v as ContactForm,_ as Standard,y as __namedExportsOrder,g as default};