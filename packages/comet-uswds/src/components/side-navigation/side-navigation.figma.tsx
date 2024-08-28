import { SideNavigation } from './side-navigation';
import figma from '@figma/code-connect';

figma.connect(
  SideNavigation,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=481-3041',
  {
    props: {},
    variant: {
      Type: 'Flat',
    },
    example: () => {
      const items = [
        {
          anchor: (
            <a className="usa-current" href="/" onClick={function Gs() {}}>
              Navigation Link
            </a>
          ),
        },
        {
          anchor: (
            <a className="" href="/" onClick={function Gs() {}}>
              Navigation Link
            </a>
          ),
        },
        {
          anchor: (
            <a className="" href="/" onClick={function Gs() {}}>
              Navigation Link
            </a>
          ),
        },
      ];

      return <SideNavigation ariaLabel="Side navigation" id="side-navigation" items={items} />;
    },
  },
);

figma.connect(
  SideNavigation,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=481-3041',
  {
    props: {},
    variant: {
      Type: 'Two level',
    },
    example: () => {
      const items = [
        {
          anchor: (
            <a className="usa-current" href="/" onClick={function Gs() {}}>
              Navigation Link
            </a>
          ),
          items: [
            {
              anchor: (
                <a className="" href="/" onClick={function Gs() {}}>
                  Navigation Link
                </a>
              ),
            },
            {
              anchor: (
                <a className="" href="/" onClick={function Gs() {}}>
                  Navigation Link
                </a>
              ),
            },
            {
              anchor: (
                <a className="" href="/" onClick={function Gs() {}}>
                  Navigation Link
                </a>
              ),
            },
            {
              anchor: (
                <a className="usa-current" href="/" onClick={function Gs() {}}>
                  Navigation Link
                </a>
              ),
            },
          ],
        },
      ];
      return <SideNavigation ariaLabel="Side navigation" id="side-navigation" items={items} />;
    },
  },
);

figma.connect(
  SideNavigation,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=481-3041',
  {
    props: {},
    variant: {
      Type: 'Three level',
    },
    example: () => {
      const items = [
        {
          anchor: (
            <a className="usa-current" href="/" onClick={function Gs() {}}>
              Navigation Link
            </a>
          ),
          items: [
            {
              anchor: (
                <a className="usa-current" href="/" onClick={function Gs() {}}>
                  Navigation Link
                </a>
              ),
              items: [
                {
                  anchor: (
                    <a className="" href="/" onClick={function Gs() {}}>
                      Navigation Link
                    </a>
                  ),
                },
                {
                  anchor: (
                    <a className="" href="/" onClick={function Gs() {}}>
                      Navigation Link
                    </a>
                  ),
                },
                {
                  anchor: (
                    <a className="" href="/" onClick={function Gs() {}}>
                      Navigation Link
                    </a>
                  ),
                },
                {
                  anchor: (
                    <a className="usa-current" href="/" onClick={function Gs() {}}>
                      Navigation Link
                    </a>
                  ),
                },
              ],
            },
          ],
        },
      ];
      return <SideNavigation ariaLabel="Side navigation" id="side-navigation" items={items} />;
    },
  },
);
