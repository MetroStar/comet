/// <reference types="react" />
import React, { ReactNode, SyntheticEvent, PropsWithChildren, ChangeEventHandler, MouseEventHandler, FormEvent, ReactElement } from 'react';
import { ForAxes, DomainTuple, VictoryBarAlignmentType } from 'victory';

interface Fold {
    id: string;
    label: string;
    expanded: boolean;
    child: ReactNode;
}
interface AccordionProps {
    id: string;
    allowMultiSelect?: boolean;
    folds: Fold[];
}
declare const Accordion: ({ id, allowMultiSelect, folds, }: AccordionProps) => React.ReactElement;

interface AlertProps {
    id: string;
    type: "info" | "warning" | "error" | "success";
    show?: boolean;
    slim?: boolean;
    noIcon?: boolean;
    heading?: string;
    children?: React.ReactNode;
}
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
declare function Banner({ id, type }: BannerProps): JSX.Element;

interface Crumb {
    path: string;
    name: string;
}
interface BreadcrumbProps {
    id: string;
    crumbs: Crumb[];
    action: Function;
    current?: string;
}
declare const Breadcrumb: ({ id, crumbs, current, action, }: BreadcrumbProps) => React.ReactElement;

interface ButtonProps {
    id: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline" | "outline-inverse" | "big" | "unstyled";
    className?: string;
    onClick?: (param: SyntheticEvent) => void;
    children?: ReactNode;
}
declare const Button: ({ id, type, variant, className, children, ...props }: ButtonProps & JSX.IntrinsicElements["button"]) => React.ReactElement;

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
declare function ButtonGroup({ id, alignment, className, children, }: ButtonGroupProps): JSX.Element;

interface CardProps {
    id: string;
    children: ReactNode;
}
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
declare function CharacterCount({ id, ...spanProps }: CharacterCountProps & JSX.IntrinsicElements["span"]): JSX.Element;

interface CheckboxData {
    /**
     * The text inside of the checkbox
     */
    label: string;
    /**
     * Default value of the checkbox
     */
    value?: string | ReadonlyArray<string> | number;
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
declare function Checkbox({ id, name, label, value, checked, isTile, onChange, onClick, ...inputProps }: CheckboxProps & JSX.IntrinsicElements["input"]): JSX.Element;

interface DropdownOption {
    /**
     * The value for the option
     */
    value: string | ReadonlyArray<string> | number;
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
declare function Dropdown({ defaultOption, options, onChange, className, ...selectProps }: DropdownProps & JSX.IntrinsicElements["select"]): JSX.Element;

declare type ComboBoxProps = {
    placeholder?: string;
} & DropdownProps & JSX.IntrinsicElements["select"];
declare function ComboBox({ placeholder, ...comboBoxProps }: ComboBoxProps): JSX.Element;

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
declare function DatePicker({ minDate, maxDate, dateRange, defaultValue, onChange, ...inputProps }: DatePickerProps & JSX.IntrinsicElements["input"]): JSX.Element;

declare function DateRangePickerContainer({ children, }: PropsWithChildren<unknown>): JSX.Element;

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
declare function ErrorMessages({ id, errors }: ErrorMessagesProps): JSX.Element;

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
declare function FileInput(inputProps: FileInputProps & JSX.IntrinsicElements["input"]): JSX.Element;

declare type Navigate$1 = (path: string) => void;
interface FooterProps {
    links?: Array<{
        label: string;
        path: string;
    }>;
    onNavigate?: Navigate$1;
    logoText?: string;
    logoSrc?: string;
    contactMessage?: string;
    email?: string;
    phone?: string;
    socials?: {
        facebook?: string;
        twitter?: string;
        youtube?: string;
        instagram?: string;
    };
}
declare const Footer: ({ links, onNavigate, logoText, logoSrc, contactMessage, email, phone, socials, }: FooterProps) => React.ReactElement;

interface FormProps {
    /**
     * Whether to render a large form
     */
    isLarge?: boolean;
}
declare function Form({ isLarge, className, children, ...formProps }: FormProps & JSX.IntrinsicElements["form"]): JSX.Element;

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
declare function FormGroup({ id, errors, className, children, }: FormGroupProps): JSX.Element;

declare type Navigate = (path: string) => void;
declare type Search$1 = (search: string) => void;
interface HeaderProps {
    logo?: React.ReactNode;
    root?: string;
    onNavigate?: Navigate;
    folding?: Array<{
        label: string;
        items: Array<{
            label: string;
            path: string;
        }>;
    }>;
    simple?: Array<{
        label: string;
        path: string;
    }>;
    showSearch?: boolean;
    onSearch?: Search$1;
}
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
declare function Icon({ id, type, size, className, }: IconProps): JSX.Element;

interface TextInputProps {
    id: string;
    type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const TextInput: ({ id, className, type, onChange, ...props }: TextInputProps & JSX.IntrinsicElements["input"]) => React.ReactElement;

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
declare function Label({ htmlFor, required, children, ...labelProps }: LabelProps & JSX.IntrinsicElements["label"]): JSX.Element;

interface ModalProps {
    id: string;
    show?: boolean;
    onClose?: Function;
    children?: React.ReactNode;
}
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
declare const ProcessList: ({ id, headingElementName, headingClassName, steps, }: ProcessListProps) => React.ReactElement;

interface RadioButtonData {
    /**
     * The text inside of the radioButton
     */
    label: string;
    /**
     * Default value of the radioButton
     */
    value?: string | ReadonlyArray<string> | number;
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
declare function RadioButton({ id, name, label, value, checked, isTile, onChange, onClick, ...inputProps }: RadioButtonProps & JSX.IntrinsicElements["input"]): JSX.Element;

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
     * The placeholder of the search
     */
    onSearch?: (event: FormEvent<HTMLFormElement>, searchText: string) => void;
}
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
declare function SiteAlert({ id, type, heading, slim, noIcon, className, children, }: SiteAlertProps): JSX.Element;

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
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
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
declare function SummaryBox({ id, heading, className, items }: SummaryBoxProps): JSX.Element;

interface TableProps {
    id: string;
    headers?: string[];
    rows?: any[][];
    primaryCol?: number;
    primaryColAction?: Function;
}
declare const Table: ({ id, headers, rows, primaryCol, primaryColAction, }: TableProps) => React.ReactElement;

interface TabPanelProps {
    id: string;
    label: string;
    children: ReactNode;
}
interface TabsProps {
    id: string;
    defaultTabId: string;
    children: ReactElement<TabPanelProps>[];
    className?: string;
}
declare const TabPanel: ({ id, children }: TabPanelProps) => React.ReactElement;
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
declare function Tag({ id, children, size, className, }: TagProps): JSX.Element;

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
declare function TextArea({ id, name, rows, className, onChange, ...textAreaProps }: TextAreaProps & JSX.IntrinsicElements["textarea"]): JSX.Element;

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
declare function Tooltip({ label, position, children, }: TooltipProps): JSX.Element;

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
    chart: ChartProps;
    color?: string;
    alignment?: VictoryBarAlignmentType;
    barRatio?: number;
    data: number[];
}
declare const BarGraph: React.FC<BarGraphProps>;

interface LineGraphProps {
    chart: ChartProps;
    colors?: string[];
    smooth?: boolean;
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const LineGraph: React.FC<LineGraphProps>;

interface AreaGraphProps {
    chart: ChartProps;
    colors?: string[];
    smooth?: boolean;
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const AreaGraph: React.FC<AreaGraphProps>;

interface PolarAxisProps {
    chart: ChartProps;
    colors?: string[];
    ticks?: number[];
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const PolarAxis: React.FC<PolarAxisProps>;

interface RadialProps {
    chart: ChartProps;
    color?: string;
    ticks?: number[];
    data: number[];
}
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
declare const PieChart: React.FC<PieChartProps>;

export { Accordion, Alert, AreaGraph, Banner, BarGraph, Breadcrumb, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, CharacterCount, Checkbox, ComboBox, DatePicker, DateRangePickerContainer as DateRangePicker, Dropdown, ErrorMessages, FileInput, Footer, Form, FormGroup, Header, Icon, Label, LineGraph, Modal, Pagination, PieChart, PolarAxis, ProcessList, Radial, RadioButton, Search, SiteAlert, StepIndicator, SummaryBox, TabPanel, Table, Tabs, Tag, TextArea, TextInput, Tooltip };
