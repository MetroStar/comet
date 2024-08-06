import{j as s}from"./jsx-runtime-Bxcv0yjW.js";import{k as r}from"./index-lRhpEuiU.js";import"./banner-BJhXbo0G.js";import"./button-CU11sknW.js";import"./button-group-Jm6xw3dW.js";import"./checkbox-BgSfkD1b.js";import"./combo-box-CUbBz0lI.js";import"./date-picker-XqHhEUeu.js";import"./error-messages-CwOdeF-8.js";import"./file-input-C95zLMsl.js";import"./icon-DYGbdMob.js";import"./label-aifmuN2d.js";import"./modal-OPWcKFuw.js";import"./process-list-CA9hh0io.js";import"./radio-button-DR-9EzpA.js";import"./range-slider-115ORala.js";import"./search-DIodcva8.js";import"./select-UUhm4jv0.js";import"./side-navigation-C1wTXBlT.js";import"./site-alert-BiYBHMCS.js";import"./step-indicator-CJIRKZCS.js";import"./summary-box-BROm9rVe.js";import"./tag-Dg5v4hiQ.js";import"./text-area-CWC3Ivtx.js";import"./tooltip-DTI4gMmd.js";import"./index-mfbfsM12.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./config-BXli1stc.js";import"./select-or-matches-Bu-g4rUn.js";import"./sprite-Cw9lcZJJ.js";import"./events-C6LRLXdn.js";import"./sanitizer-BtXph-xc.js";import"./index-D6IA0wpC.js";import"./is-in-viewport-B5ZZJcwh.js";import"./active-element-CTMAq7ve.js";const K={title:"USWDS/Table",component:r,argTypes:{id:{required:!0},sortDir:{control:"select"}}},d=t=>{const l=[{id:"name",name:"Name"},{id:"orderAdmitted",name:"Order admitted to union"},{id:"dateOfVote",name:"Date of ratification vote"},{id:"dateAdmitted",name:"Date admitted to union"},{id:"percentVoters",name:"Percent of voters in favor of ratification"},{id:"votesCast",name:"Votes cast in favor of ratification"},{id:"estimatedPopulation",name:"Estimated population at time of admission"}],i=[{name:{value:"Hawaii",sortValue:"Hawaii"},orderAdmitted:{value:"50th",sortValue:"50"},dateOfVote:{value:"Apr. 24, 1956",sortValue:"331844400"},dateAdmitted:{value:"Aug. 21, 1959",sortValue:"327092400"},percentVoters:{value:"94.3%",sortValue:"0.943"},votesCast:{value:"132,773",sortValue:"132773"},estimatedPopulation:{value:"632,772",sortValue:"632772"}},{name:{value:"Alaska",sortValue:"Alaska"},orderAdmitted:{value:"49th",sortValue:"49"},dateOfVote:{value:"Jun. 27, 1959",sortValue:"431978400"},dateAdmitted:{value:"Jan. 3, 1959",sortValue:"346960800"},percentVoters:{value:"68.1%",sortValue:"0.681"},votesCast:{value:"17,477",sortValue:"17477"},estimatedPopulation:{value:"226,167",sortValue:"226167"}},{name:{value:"Arizona",sortValue:"Arizona"},orderAdmitted:{value:"48th",sortValue:"48"},dateOfVote:{value:"Feb. 9, 1911",sortValue:"1858528800"},dateAdmitted:{value:"Feb. 14, 1912",sortValue:"1826560800"},percentVoters:{value:"78.7%",sortValue:"0.787"},votesCast:{value:"12,187",sortValue:"12187"},estimatedPopulation:{value:"204,354",sortValue:"204354"}}];return s.jsx(r,{id:t.id,tabIndex:t.tabIndex,columns:l,data:i,caption:t.caption,borderless:t.borderless,striped:t.striped,scrollable:t.scrollable,sortable:t.sortable,sortDir:t.sortDir,sortIndex:t.sortIndex})},e=d.bind({});e.args={id:"table-1",tabIndex:1,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: TableProps) => {
  const columns: TableColumn[] = [{
    id: 'name',
    name: 'Name'
  }, {
    id: 'orderAdmitted',
    name: 'Order admitted to union'
  }, {
    id: 'dateOfVote',
    name: 'Date of ratification vote'
  }, {
    id: 'dateAdmitted',
    name: 'Date admitted to union'
  }, {
    id: 'percentVoters',
    name: 'Percent of voters in favor of ratification'
  }, {
    id: 'votesCast',
    name: 'Votes cast in favor of ratification'
  }, {
    id: 'estimatedPopulation',
    name: 'Estimated population at time of admission'
  }];
  interface StateData {
    name: SortableDataCell | unknown;
    orderAdmitted: SortableDataCell | unknown;
    dateOfVote: SortableDataCell | unknown;
    dateAdmitted: SortableDataCell | unknown;
    percentVoters: SortableDataCell | unknown;
    votesCast: SortableDataCell | unknown;
    estimatedPopulation: SortableDataCell | unknown;
  }
  interface SortableDataCell {
    value: unknown;
    sortValue: unknown;
  }
  const data: StateData[] = [{
    name: {
      value: 'Hawaii',
      sortValue: 'Hawaii'
    },
    orderAdmitted: {
      value: '50th',
      sortValue: '50'
    },
    dateOfVote: {
      value: 'Apr. 24, 1956',
      sortValue: '331844400'
    },
    dateAdmitted: {
      value: 'Aug. 21, 1959',
      sortValue: '327092400'
    },
    percentVoters: {
      value: '94.3%',
      sortValue: '0.943'
    },
    votesCast: {
      value: '132,773',
      sortValue: '132773'
    },
    estimatedPopulation: {
      value: '632,772',
      sortValue: '632772'
    }
  }, {
    name: {
      value: 'Alaska',
      sortValue: 'Alaska'
    },
    orderAdmitted: {
      value: '49th',
      sortValue: '49'
    },
    dateOfVote: {
      value: 'Jun. 27, 1959',
      sortValue: '431978400'
    },
    dateAdmitted: {
      value: 'Jan. 3, 1959',
      sortValue: '346960800'
    },
    percentVoters: {
      value: '68.1%',
      sortValue: '0.681'
    },
    votesCast: {
      value: '17,477',
      sortValue: '17477'
    },
    estimatedPopulation: {
      value: '226,167',
      sortValue: '226167'
    }
  }, {
    name: {
      value: 'Arizona',
      sortValue: 'Arizona'
    },
    orderAdmitted: {
      value: '48th',
      sortValue: '48'
    },
    dateOfVote: {
      value: 'Feb. 9, 1911',
      sortValue: '1858528800'
    },
    dateAdmitted: {
      value: 'Feb. 14, 1912',
      sortValue: '1826560800'
    },
    percentVoters: {
      value: '78.7%',
      sortValue: '0.787'
    },
    votesCast: {
      value: '12,187',
      sortValue: '12187'
    },
    estimatedPopulation: {
      value: '204,354',
      sortValue: '204354'
    }
  }];
  return <Table id={args.id} tabIndex={args.tabIndex} columns={columns} data={data} caption={args.caption} borderless={args.borderless} striped={args.striped} scrollable={args.scrollable} sortable={args.sortable} sortDir={args.sortDir} sortIndex={args.sortIndex} />;
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,K as default};
