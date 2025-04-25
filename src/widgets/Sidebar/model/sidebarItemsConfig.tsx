import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import ArcticonsIcon from 'shared/assets/icons/ArcticonsIcon.svg';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';
import { RoutePath } from 'shared/config';

export interface SidebarItemsConfig {
  to: string;
  label?: string;
  icon?: React.ReactNode;
}

export const sidebarItemsConfig: SidebarItemsConfig[] = [
  {
    to: RoutePath.main,
    icon: <HomeIcon />,
    label: 'pages.main',
  },
  {
    to: RoutePath.about,
    icon: <AboutIcon />,
    label: 'pages.about',
  },
  {
    to: RoutePath.profile,
    icon: <ProfileIcon />,
    label: 'pages.profile',
  },
  {
    to: RoutePath.articles,
    icon: <ArcticonsIcon />,
    label: 'pages.main',
  },
];
