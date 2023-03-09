import { Icon, IconType, IconSize } from '../icon/icon';
import styles from './icon-tag.module.scss';

export interface IconTagProps {
  id: string;
  icon: IconType;
  type: IconTagType;
  text: string;
  className?: string;
}

export enum IconTagType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export function IconTag({ id, icon, type, text, className }: IconTagProps) {
  return (
    <div
      id={id}
      className={`display-inline-flex flex-row flex-align-center padding-05 padding-right-105 radius-pill ${
        styles[`bg-${type}`]
      } ${styles[`text-${type}`]} ${className}`}
    >
      <Icon
        id={`${id}-icon`}
        type={icon}
        size={IconSize.size3}
        className={styles[`text-${type}`]}
      />
      <div className="padding-left-05">{text}</div>
    </div>
  );
}

export default IconTag;
