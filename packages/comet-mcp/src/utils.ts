/* eslint-disable no-console */
import fs from 'fs';

export const log = console.log;
export const error = console.error;

export const getFriendlyDirectoryName = (name: string) => {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const getComponentTemplate = (componentName: string) => {
  const template = `export const ${componentName} = (): React.ReactElement => {
  return <div></div>;
};
`;
  return template;
};

export const getPageTemplate = (componentName: string) => {
  const template = `export const ${componentName} = (): React.ReactElement => {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>${componentName}</h1>
        </div>
      </div>
    </div>
  );
};
`;
  return template;
};

export const getComponentTestTemplate = (componentName: string, friendlyName: string) => {
  const template = `import { render } from '@testing-library/react';
import { ${componentName} } from './${friendlyName}';

describe('${componentName}', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<${componentName} />);
    expect(baseElement).toBeTruthy();
  });
});
`;
  return template;
};

export const getPageTestTemplate = (pageName: string, friendlyName: string) => {
  const template = `import { act, render } from '@testing-library/react';
import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ${pageName} } from './${friendlyName}';

describe('${pageName}', () => {
  const componentWrapper = (
    <AuthProvider>
      <RecoilRoot>
        <BrowserRouter>
          <${pageName} />
        </BrowserRouter>
      </RecoilRoot>
    </AuthProvider>
  );

  test('should render successfully', async () => {
    const { baseElement } = render(componentWrapper);
    await act(async () => {
      expect(baseElement).toBeTruthy();
      expect(baseElement.querySelector('h1')?.textContent).toEqual('${pageName}');
    });
  });
});
`;
  return template;
};

export const addPageRoute = (componentName: string, friendlyName: string) => {
  const appFilePath = 'src/App.tsx';
  if (!fs.existsSync(appFilePath)) {
    error('App.tsx file does not exist.');
    return;
  }

  const appFileContent = fs.readFileSync(appFilePath, 'utf8');
  const importStatement = `import { ${componentName} } from './pages/${friendlyName}/${friendlyName}';`;
  // Check if the component is already imported
  if (appFileContent.includes(importStatement)) {
    console.log(`Component ${componentName} is already imported in App.tsx.`);
    return;
  }

  // Insert the import statement at the top
  const updatedContent = appFileContent.replace(
    /((?:import[ \t]+[^\n;]+;[ \t]*)+)(?![\s\S]*import)/,
    `${importStatement}$&`,
  );

  // Check for Routes tag and add the route
  const routeStatement = `<Route path="/${friendlyName}" element={<${componentName} />} />\n`;
  const updatedAppContent = updatedContent.replace(
    /(<Routes>)([^]*)(<\/Routes>)/,
    `$1$2  ${routeStatement}      $3`,
  );

  // Write the updated content back to App.tsx
  fs.writeFileSync(appFilePath, updatedAppContent);
};
