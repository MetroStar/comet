import React, { ReactNode, SyntheticEvent, PropsWithChildren, ChangeEventHandler, MouseEventHandler, FormEvent, ReactElement } from 'react';
import { ForAxes, DomainTuple, VictoryBarAlignmentType } from 'victory';

interface Fold {
    /**
     * The unique identifier for the fold
     */
    id: string;
    /**
     * The label value for the fold
     */
    label: string;
    /**
     * Whether or not the fold is expanded
     */
    expanded: boolean;
    /**
     * The body of the fold
     */
    child: ReactNode;
}
interface AccordionProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * Whether or not to allow multiple folds to be expanded at once
     */
    allowMultiSelect?: boolean;
    /**
     * An array of Fold objects, used to build the accordion
     */
    folds: Fold[];
}
/**
 * An accordion is a list of headers that hide or reveal additional content when selected.
 */
declare const Accordion: ({ id, allowMultiSelect, folds, }: AccordionProps) => React.ReactElement;

interface AlertProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of alert to display
     */
    type: 'info' | 'warning' | 'error' | 'success';
    /**
     * Whether or not to display the alert
     */
    show?: boolean;
    /**
     * Whether or not to display a slim version of the alert
     */
    slim?: boolean;
    /**
     * Whether or not to display the alert icon
     */
    noIcon?: boolean;
    /**
     * Whether or not to display the alert heading
     */
    heading?: string;
    /**
     * The body of the alert
     */
    children?: React.ReactNode;
}
/**
 * An alert keeps users informed of important and sometimes time-sensitive changes.
 */
declare const Alert: ({ id, type, show, slim, noIcon, heading, children, }: AlertProps) => React.ReactElement;

interface BannerProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of banner to display
     */
    type?: 'gov' | 'mil';
}
/**
 * Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.
 */
declare const Banner: ({ id, type }: BannerProps) => React.ReactElement;

interface Crumb {
    /**
     * The intended url path for the item
     */
    path: string;
    /**
     * The display value for this bread crumb item
     */
    name: string;
}
interface BreadcrumbProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * An array of bread crumb objects to display
     */
    crumbs: Crumb[];
    /**
     * Custom callback for when breadcrumb item is clicked
     */
    action: Function;
    /**
     * Custom value to display as the current location
     */
    current?: string;
}
/**
 * Breadcrumbs provide secondary navigation to help users understand where they are in a website.
 */
declare const Breadcrumb: ({ id, crumbs, current, action, }: BreadcrumbProps) => React.ReactElement;

interface ButtonProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of button to display
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * The style variant of button to display
     */
    variant?: 'default' | 'secondary' | 'accent-cool' | 'accent-warm' | 'base' | 'outline' | 'outline-inverse' | 'big' | 'unstyled';
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * Custom callback for when button is clicked
     */
    onClick?: (param: SyntheticEvent) => void;
    /**
     * The contents of the button
     */
    children?: ReactNode;
}
/**
 * A button draws attention to important actions with a large selectable surface.
 */
declare const Button: ({ id, type, variant, className, children, ...props }: ButtonProps & JSX.IntrinsicElements['button']) => React.ReactElement;

interface ButtonGroupProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * Whether to justify left or right
     */
    alignment?: 'left' | 'right';
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * The contents of the label
     */
    children?: ReactNode;
}
/**
 * A button group collects similar or related actions.
 */
declare const ButtonGroup: ({ id, alignment, className, children, }: ButtonGroupProps) => React.ReactElement;

interface CardProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The body of the card
     */
    children: ReactNode;
}
/**
 * Cards contain content and actions about a single subject.
 */
declare const Card: ({ id, children }: CardProps) => React.ReactElement;
declare const CardBody: React.FC<PropsWithChildren>;
declare const CardHeader: React.FC<PropsWithChildren>;
declare const CardFooter: React.FC<PropsWithChildren>;

interface CharacterCountProps {
    /**
     * The unique identifier for the character count span
     */
    id: string;
}
/**
 * Character count helps users know how much text they can enter when there is a limit on the number of characters.
 */
declare const CharacterCount: ({ id, ...spanProps }: CharacterCountProps & JSX.IntrinsicElements['span']) => React.ReactElement;

interface CheckboxData {
    /**
     * The text inside of the checkbox
     */
    label: string;
    /**
     * Default value of the checkbox
     */
    value?: string | readonly string[] | number;
    /**
     * Whether the checkbox is checked by default
     */
    checked?: boolean;
}
interface CheckboxProps extends CheckboxData {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for the checkbox input field
     */
    name: string;
    /**
     * Whether the component is rendered as a tile
     */
    isTile?: boolean;
    /**
     * Event handler will be triggered when the checkbox value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Event handler will be triggered when the checkbox is clicked
     */
    onClick?: MouseEventHandler<HTMLInputElement>;
}
/**
 * Checkboxes allow users to select one or more options from a list.
 */
declare const Checkbox: ({ id, name, label, value, checked, isTile, onChange, onClick, ...inputProps }: CheckboxProps & JSX.IntrinsicElements['input']) => React.ReactElement;

interface DropdownOption {
    /**
     * The value for the option
     */
    value: string | readonly string[] | number;
    /**
     * The label for the option
     */
    label: string;
}
interface DropdownProps {
    /**
     * The unique identifier for the dropdown
     */
    id: string;
    /**
     * The name of the dropdown
     */
    name: string;
    /**
     * The default option of the dropdown
     */
    defaultOption?: DropdownOption | null;
    /**
     * The options of the dropdown
     */
    options?: DropdownOption[];
    /**
     * Event handler for when value of dropdown is change
     */
    onChange?: ChangeEventHandler<HTMLSelectElement>;
}
/**
 * A dropdown component allows users to choose one option from a temporary modal menu.
 */
declare const Dropdown: ({ defaultOption, options, onChange, className, ...selectProps }: DropdownProps & JSX.IntrinsicElements['select']) => React.ReactElement;

declare type ComboBoxProps = {
    /**
     * The placeholder value to display in the control
     */
    placeholder?: string;
} & DropdownProps & JSX.IntrinsicElements['select'];
/**
 * A combo box helps users select an item from a large list of options.
 */
declare const ComboBox: ({ placeholder, ...comboBoxProps }: ComboBoxProps) => React.ReactElement;

interface DatePickerProps {
    /**
     * The unique identifier for the input field
     */
    id: string;
    /**
     * The name of the input field
     */
    name: string;
    /**
     * The date picker will not allow a date selection before this date. The date should be in the format YYYY-MM-DD. Typing in an earlier date will cause native form validation error. A default min date or 0000-01-01 is used as a default.
     */
    minDate?: Date | string;
    /**
     * The date picker will not allow a date selection after this date. The date should be in the format YYYY-MM-DD. Typing in an later date will cause native form validation error. There is no default maximum date.
     */
    maxDate?: Date | string;
    /**
     * The date picker will show a range selection from the range date. The date should be in the format YYYY-MM-DD.
     */
    dateRange?: Date | string;
    /**
     * The date picker input will set this value if it is a valid date. The date should be in the format YYYY-MM-DD.
     */
    defaultValue?: string;
    /**
     * Event handler will be triggered when the date-picker value changes
     */
    onChange?: (this: HTMLInputElement, event: Event) => void;
}
/**
 * A date picker helps users select a single date.
 */
declare const DatePicker: ({ minDate, maxDate, dateRange, defaultValue, onChange, ...inputProps }: DatePickerProps & JSX.IntrinsicElements['input']) => React.ReactElement;

/**
 * A date range picker helps users select a range between two dates.
 */
declare const DateRangePickerContainer: ({ children, }: PropsWithChildren<unknown>) => React.ReactElement;

interface ErrorMessagesProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * An array of error strings to display
     */
    errors: string[];
}
/**
 * Outputs a list of error messages as HTML.
 */
declare const ErrorMessages: ({ id, errors, }: ErrorMessagesProps) => React.ReactElement;

interface FileInputProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for the file input field
     */
    name: string;
}
/**
 * File input allows users to attach one or multiple files.
 */
declare const FileInput: (inputProps: FileInputProps & JSX.IntrinsicElements['input']) => React.ReactElement;

declare type Navigate$1 = (path: string) => void;
interface FooterProps {
    /**
     * An array of navigation items
     */
    links?: Array<{
        label: string;
        path: string;
    }>;
    /**
     * Custom callback for navigation change
     */
    onNavigate?: Navigate$1;
    /**
     * A text value to display next to the logo
     */
    logoText?: string;
    /**
     * The URL to the logo
     */
    logoSrc?: string;
    /**
     * A text message to display with the contact information
     */
    contactMessage?: string;
    /**
     * Contact email to display
     */
    email?: string;
    /**
     * Contact phone number to display
     */
    phone?: string;
    /**
     * An object of URLs to link to socials
     */
    socials?: {
        facebook?: string;
        twitter?: string;
        youtube?: string;
        instagram?: string;
    };
}
/**
 * A footer serves site visitors who arrive at the bottom of a page without finding what they want.
 */
declare const Footer: ({ links, onNavigate, logoText, logoSrc, contactMessage, email, phone, socials, }: FooterProps) => React.ReactElement;

interface FormProps {
    /**
     * The unique identifier for the dropdown
     */
    id: string;
    /**
     * Whether to render a large form
     */
    isLarge?: boolean;
}
/**
 * A form allows users to enter information into a page.
 */
declare const Form: ({ id, isLarge, className, children, ...formProps }: FormProps & JSX.IntrinsicElements['form']) => React.ReactElement;

interface FormGroupProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * An array of string error messages
     */
    errors?: string[];
    /**
     * Additional class name for the form group
     */
    className?: string;
    /**
     * The contents of the form group
     */
    children: ReactNode;
}
/**
 * A wrapper for form elements used to provide validation formatting.
 */
declare const FormGroup: ({ id, errors, className, children, }: FormGroupProps) => React.ReactElement;

declare type Navigate = (path: string) => void;
declare type Search$1 = (search: string) => void;
interface HeaderProps {
    /**
     * An element to display as the logo for the header
     */
    logo?: React.ReactNode;
    /**
     * A root value for the header
     */
    root?: string;
    /**
     * Custom callback for navigation change
     */
    onNavigate?: Navigate;
    /**
     * An array of navigation groups
     */
    folding?: Array<{
        label: string;
        items: Array<{
            label: string;
            path: string;
        }>;
    }>;
    /**
     * An array of navigation items
     */
    simple?: Array<{
        label: string;
        path: string;
    }>;
    /**
     * Whether or not to display search component
     */
    showSearch?: boolean;
    /**
     * Custom callback for search event
     */
    onSearch?: Search$1;
}
/**
 * A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
 */
declare const Header: ({ logo, onNavigate, folding, simple, showSearch, onSearch, }: HeaderProps) => React.ReactElement;

interface IconProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of icon to display
     */
    type?: 'accessibility_new' | 'accessible_forward' | 'account_balance' | 'account_box' | 'account_circle' | 'add' | 'add_circle' | 'add_circle_outline' | 'alarm' | 'alernate_email' | 'announcement' | 'arrow_back' | 'arrow_downward' | 'arrow_drop_down' | 'arrow_drop_up' | 'arrow_forward' | 'arrow_upward' | 'api' | 'assessment' | 'attach_file' | 'attach_money' | 'autorenew' | 'backpack' | 'bathtub' | 'bedding' | 'bookmark' | 'bug_report' | 'build' | 'calendar_today' | 'campaign' | 'camping' | 'cancel' | 'chat' | 'check' | 'check_box_outline_blank' | 'check_circle' | 'check_circle_outline' | 'checkroom' | 'clean_hands' | 'clothes' | 'close' | 'closed_caption' | 'cloud' | 'code' | 'comment' | 'connect_without_contact' | 'construction' | 'construction_worker' | 'contact_page' | 'content_copy' | 'coronavirus' | 'credit_card' | 'deck' | 'delete' | 'device_thermostat' | 'directions' | 'directions_bike' | 'directions_bus' | 'directions_car' | 'directions_walk' | 'do_not_disturb' | 'do_not_touch' | 'drag_handle' | 'eco' | 'edit' | 'electrical_services' | 'emoji_events' | 'error' | 'error_outline' | 'event' | 'expand_less' | 'expand_more' | 'facebook' | 'fast_forward' | 'fast_rewind' | 'favorite' | 'favorite_border' | 'file_download' | 'file_present' | 'file_upload' | 'filter_alt' | 'filter_list' | 'fingerprint' | 'first_page' | 'flag' | 'flickr' | 'flight' | 'flooding' | 'folder' | 'folder_open' | 'format_quote' | 'format_size' | 'forum' | 'github' | 'grid_view' | 'group_add' | 'groups' | 'hearing' | 'help' | 'help_outline' | 'highlight_off' | 'history' | 'home' | 'hospital' | 'hotel' | 'hourglass_empty' | 'hurricane' | 'identification' | 'image' | 'info' | 'info_outline' | 'insights' | 'instagram' | 'keyboard' | 'label' | 'language' | 'last_page' | 'launch' | 'lightbulb' | 'lightbulb_outline' | 'link' | 'link_off' | 'list' | 'local_cafe' | 'local_fire_department' | 'local_gas_station' | 'local_grocery_store' | 'local_hospital' | 'local_laundry_servie' | 'local_library' | 'local_offer' | 'local_parking' | 'local_pharmacy' | 'local_police' | 'local_taxi' | 'location_city' | 'lock' | 'lock_open' | 'lock_outline' | 'login' | 'logout' | 'loop' | 'mail' | 'mail_outline' | 'map' | 'masks' | 'medical_services' | 'menu' | 'military_tech' | 'more_horiz' | 'more_vert' | 'my_location' | 'navigate_before' | 'navigate_next' | 'navigate_far_before' | 'navigate_far_next' | 'near_me' | 'notifications' | 'notifications_active' | 'notifications_none' | 'park' | 'people' | 'person' | 'pets' | 'phone' | 'photo_camera' | 'print' | 'priority_high' | 'public' | 'push_pin' | 'radio_button_unchecked' | 'rain' | 'reduce_capacity' | 'remove' | 'report' | 'restaurant' | 'rss_feed' | 'safety_divider' | 'sanitizer' | 'save_alt' | 'severe_weather' | 'schedule' | 'school' | 'science' | 'search' | 'security' | 'send' | 'sentiment_dissatisfied' | 'sentiment_neutral' | 'sentiment_satisfied' | 'sentiment_satisfied_alt' | 'sentiment_very_dissatisfied' | 'settings' | 'share' | 'shield' | 'shopping_basket' | 'snow' | 'soap' | 'social_distance' | 'sort_arrow' | 'spellcheck' | 'star' | 'star_half' | 'star_outline' | 'store' | 'support' | 'support_agent' | 'text_fields' | 'thumb_down_alt' | 'thumb_up_alt' | 'timer' | 'toggle_off' | 'toggle_on' | 'topic' | 'tornado' | 'translate' | 'trending_down' | 'trending_up' | 'twitter' | 'undo' | 'unfold_less' | 'unfold_more' | 'update' | 'upload_file' | 'verified' | 'verified_user' | 'visibility' | 'visibility_off' | 'volume_off' | 'warning' | 'wash' | 'wifi' | 'work' | 'youtube' | 'zoom_in' | 'zoom_out_map' | 'zoom_out';
    /**
     * The size of the icon
     */
    size?: 'size-3' | 'size-4' | 'size-5' | 'size-6' | 'size-7' | 'size-8' | 'size-9';
    /**
     * A custom class to apply to the component
     */
    className?: string;
}
/**
 * Icons help communicate meaning, actions, status, or feedback.
 */
declare const Icon: ({ id, type, size, className, }: IconProps) => React.ReactElement;

interface TextInputProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of input to display
     */
    type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
    /**
     * The type of mask to apply to the input
     */
    mask?: 'ssn' | 'phone_number' | 'zip_5_digit' | 'zip_9_digit';
    /**
     * Custom element to display before the input
     */
    prefix?: ReactNode;
    /**
     * Custom element to display after the input
     */
    suffix?: ReactNode;
    /**
     * Custom callback for when input is changed
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
/**
 * A text input allows users to enter any combination of letters, numbers, or symbols.
 */
declare const TextInput: ({ id, className, type, mask, prefix, suffix, onChange, ...props }: TextInputProps & Omit<JSX.IntrinsicElements['input'], 'prefix' | 'suffix'>) => React.ReactElement;

interface LabelProps {
    /**
     * The HTML element that this is labeling
     */
    htmlFor?: string;
    /**
     * A boolean indicating whether or not the field is required
     */
    required?: boolean;
    /**
     * The contents of the label
     */
    children: ReactNode;
}
/**
 * Defines a label for an HTML element.
 */
declare const Label: ({ htmlFor, required, children, ...labelProps }: LabelProps & JSX.IntrinsicElements['label']) => React.ReactElement;

interface ModalProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * Whether or not to display the modal
     */
    show?: boolean;
    /**
     * Custom callback for when modal is closed
     */
    onClose?: Function;
    /**
     * The body of the modal
     */
    children?: React.ReactNode;
}
/**
 * A modal disables page content and focuses the user’s attention on a single task or message.
 */
declare const Modal: ({ id, show, onClose, children, }: ModalProps) => React.ReactElement;

declare type CreatePageUrlHandler = (page: number) => string | undefined;
declare type OnPageHandler = (event: SyntheticEvent<Element, Event>, page: number) => void;
interface PaginationProps {
    /**
     * The unique identifier for the pagination
     */
    id: string;
    /**
     * The current page (0 indexed)
     */
    currentPage: number;
    /**
     * The amount of pages
     */
    amountOfPages: number;
    /**
     * The amount of page items to show
     */
    amountOfVisiblePageItems?: number;
    /**
     * Defines a string value that labels the current element.
     */
    ariaLabel: string;
    /**
     * Pass a function in to create href URLs
     */
    createPageUrl?: CreatePageUrlHandler;
    /**
     * Event handler for when a pagination item is clicked
     */
    onPage?: OnPageHandler;
}
/**
 * Pagination is navigation for paginated content.
 */
declare const Pagination: ({ id, currentPage, amountOfPages: pageSize, amountOfVisiblePageItems, ariaLabel, createPageUrl, onPage, }: PaginationProps) => React.ReactElement;

interface ProcessListProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The level of the headings
     */
    headingElementName?: string;
    /**
     * Additional class names for the heading element
     */
    headingClassName?: string;
    /**
     * The level of the headings
     */
    steps: ProcessListStep[];
}
interface ProcessListStep {
    /**
     * The heading for the step
     */
    heading: string;
    /**
     * The content of the step
     */
    content: ReactNode;
}
/**
 * A process list displays the steps or stages of important instructions or processes.
 */
declare const ProcessList: ({ id, headingElementName, headingClassName, steps, }: ProcessListProps) => React.ReactElement;

interface RadioButtonData {
    /**
     * The text inside of the radioButton
     */
    label: string;
    /**
     * Default value of the radioButton
     */
    value?: string | readonly string[] | number;
    /**
     * Whether the radioButton is checked by default
     */
    checked?: boolean;
}
interface RadioButtonProps extends RadioButtonData {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for the radioButton input field
     */
    name: string;
    /**
     * Whether the component is rendered as a tile
     */
    isTile?: boolean;
    /**
     * Event handler will be triggered when the radioButton value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Event handler will be triggered when the radioButton is clicked
     */
    onClick?: MouseEventHandler<HTMLInputElement>;
}
/**
 * Radio buttons allow users to select exactly one choice from a group.
 */
declare const RadioButton: ({ id, name, label, value, checked, isTile, onChange, onClick, ...inputProps }: RadioButtonProps & JSX.IntrinsicElements['input']) => React.ReactElement;

interface SearchProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The size of the search
     */
    type?: 'default' | 'small' | 'big';
    /**
     * Custom callback for when a search is performed
     */
    onSearch?: (event: FormEvent<HTMLFormElement>, searchText: string) => void;
}
/**
 * Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation
 */
declare const Search: ({ id, type, onSearch, ...props }: SearchProps & JSX.IntrinsicElements['input']) => React.ReactElement;

interface SiteAlertProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of alert to display
     */
    type?: 'Info' | 'Emergency';
    /**
     * The heading for the alert
     */
    heading?: string;
    /**
     * A boolean indicating whether or not the alert should be slim
     */
    slim?: boolean;
    /**
     * A boolean indicating whether or not to show the applicable icon
     */
    noIcon?: boolean;
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * The contents of the alert
     */
    children: ReactNode;
}
/**
 * A site alert communicates urgent sitewide information.
 */
declare const SiteAlert: ({ id, type, heading, slim, noIcon, className, children, }: SiteAlertProps) => React.ReactElement;

interface StepIndicatorProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * Array of labels for the steps. Length of array will be used as step count.
     */
    steps: string[];
    /**
     * Step that is currently active. (0-based index)
     */
    currentStep: number;
    /**
     * Hides labels of step indicator if set to true. Defaults to false.
     */
    hideLabels?: boolean;
    /**
     * Shows step number in step indicator if set to true. Defaults to false.
     */
    showCounters?: boolean;
    /**
     * Shows small step number in step indicator if set to true. Defaults to false.
     */
    showSmallCounters?: boolean;
    /**
     * Centers label and counter if set to true. Defaults to false.
     */
    centerCounters?: boolean;
    /**
     * Level of the heading (h1, h2, h3, h4, h5, h6). Defaults to h4
     */
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
/**
 * A step indicator updates users on their progress through a multi-step process.
 */
declare const StepIndicator: ({ id, steps, currentStep, hideLabels, showCounters, showSmallCounters, centerCounters, headingLevel, }: StepIndicatorProps) => React.ReactElement;

interface SummaryBoxProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The heading for the summary box
     */
    heading: string;
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * An array of string messages to display in the summary box
     */
    items: string[];
}
/**
 * A summary box highlights key information from a longer page or displays next steps.
 */
declare const SummaryBox: ({ id, heading, className, items, }: SummaryBoxProps) => React.ReactElement;

interface TableProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * An string array of table header items
     */
    headers?: string[];
    /**
     * An array of row objects
     */
    rows?: any[][];
    /**
     * The index of the primary column
     */
    primaryCol?: number;
    /**
     * Custom callback for when primary column is clicked
     */
    primaryColAction?: Function;
}
/**
 * A table shows information in columns and rows.
 */
declare const Table: ({ id, headers, rows, primaryCol, primaryColAction, }: TableProps) => React.ReactElement;

interface TabPanelProps {
    /**
     * The unique identifier for the tab panel
     */
    id: string;
    /**
     * The label value for the tab panel
     */
    label: string;
    /**
     * The contents of the button
     */
    children: ReactNode;
}
interface TabsProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The id of a tab panel to show by default
     */
    defaultTabId: string;
    /**
     * An array of child tab panels
     */
    children: Array<ReactElement<TabPanelProps>>;
    /**
     * A custom class to apply to the component
     */
    className?: string;
}
declare const TabPanel: ({ id, children }: TabPanelProps) => React.ReactElement;
/**
 * Used to organize and allow navigation between groups of content.
 */
declare const Tabs: ({ id, defaultTabId, children, className }: TabsProps) => React.ReactElement;

interface TagProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The children of the tag
     */
    children: ReactNode;
    /**
     * The size of the tag
     */
    size?: 'Default' | 'Big';
    /**
     * Any additional CSS classes will be added to the tag
     */
    className?: string;
}
/**
 * A tag draws attention to new or categorized content elements.
 */
declare const Tag: ({ id, children, size, className, }: TagProps) => React.ReactElement;

interface TextAreaProps {
    /**
     * The unique identifier for the textarea
     */
    id: string;
    /**
     * The name of the textarea
     */
    name: string;
    /**
     * The number of rows to render for the textarea
     */
    rows?: number;
    /**
     * Event handler for when value of textarea is changes
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
/**
 * A text area allows users to enter any combination of letters, numbers, or symbols.
 */
declare const TextArea: ({ id, name, rows, className, onChange, ...textAreaProps }: TextAreaProps & JSX.IntrinsicElements['textarea']) => React.ReactElement;

interface TooltipProps {
    /**
     * The text value to display in the tooltip
     */
    label: string;
    /**
     * Where the tooltip will display in reference to its child
     */
    position?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * The contents of the tooltip
     */
    children: ReactNode;
}
/**
 * A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.
 */
declare const Tooltip: ({ label, position, children, }: TooltipProps) => React.ReactElement;

declare type EventHandler = () => void;
interface ChartProps {
    height?: number;
    width?: number;
    domain?: ForAxes<DomainTuple>;
    horizontal?: boolean;
    polar?: boolean;
    style?: {
        [attribute: string]: any;
    };
    backgroundComponent?: React.ReactElement;
    eventHandlers?: {
        [eventName: string]: EventHandler;
    };
    children?: React.ReactElement | React.ReactElement[];
}

interface BarGraphProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string value used to colorize chart sections
     */
    color?: string;
    /**
     * A string value indicating how to justify chart data
     */
    alignment?: VictoryBarAlignmentType;
    /**
     * A number value indicating the width ratio of the bar to display
     */
    barRatio?: number;
    /**
     * An array of data values
     */
    data: number[];
}
/**
 * Renders a dataset as series of bars.
 */
declare const BarGraph: React.FC<BarGraphProps>;

interface LineGraphProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string array of color values used to colorize chart sections
     */
    colors?: string[];
    /**
     * Whether or not to display smooth chart lines
     */
    smooth?: boolean;
    /**
     * An array of data points
     */
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
/**
 * Renders a dataset as a single line path.
 */
declare const LineGraph: React.FC<LineGraphProps>;

interface AreaGraphProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string array of color values used to colorize chart sections
     */
    colors?: string[];
    /**
     * Whether or not to display smooth chart lines
     */
    smooth?: boolean;
    /**
     * An array of data points
     */
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
/**
 * Renders a dataset as a single area path.
 */
declare const AreaGraph: React.FC<AreaGraphProps>;

interface PolarAxisProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string array of color values used to colorize chart sections
     */
    colors?: string[];
    /**
     * An number array of labels for the chart
     */
    ticks?: number[];
    /**
     * An array of data points
     */
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
/**
 * Renders a single polar axis chart.
 */
declare const PolarAxis: React.FC<PolarAxisProps>;

interface RadialProps {
    /**
     * An object providing chart specific attributes
     */
    chart: ChartProps;
    /**
     * An string array of color values used to colorize chart sections
     */
    color?: string;
    /**
     * An number array of labels for the chart
     */
    ticks?: number[];
    /**
     * An array of data values
     */
    data: number[];
}
/**
 * Renders a single axis polar axis chart with fill.
 */
declare const Radial: React.FC<RadialProps>;

interface PieChartProps {
    colors?: string[];
    angle?: {
        start: number;
        end: number;
    };
    data: Array<{
        x: string;
        y: number;
    }>;
}
/**
 * Renders a dataset as a pie chart.
 */
declare const PieChart: React.FC<PieChartProps>;

export { Accordion, Alert, AreaGraph, Banner, BarGraph, Breadcrumb, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, CharacterCount, Checkbox, ComboBox, DatePicker, DateRangePickerContainer as DateRangePicker, Dropdown, ErrorMessages, FileInput, Footer, Form, FormGroup, Header, Icon, Label, LineGraph, Modal, Pagination, PieChart, PolarAxis, ProcessList, Radial, RadioButton, Search, SiteAlert, StepIndicator, SummaryBox, TabPanel, Table, Tabs, Tag, TextArea, TextInput, Tooltip };
