import { SideNavigation } from './side-navigation';
import figma from '@figma/code-connect';

figma.connect(
  SideNavigation,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=481-3041',
  {
    props: {
      items: figma.enum('Type', {
        Flat: [
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
        ],
        'Two level': [
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
        'Three level': [
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
        ],
      }),
    },
    example: ({ items }) => (
      <SideNavigation ariaLabel="Side navigation" id="side-navigation" items={items} />
    ),
  },
);
