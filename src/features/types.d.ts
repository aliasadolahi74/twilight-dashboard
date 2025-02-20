type IDashboardItemType = {
  isActive?: boolean;
  submenu?: Omit<IDashboardItemType, "icon" | "submenu">[];
  title: string;
  icon?: React.ReactNode;
  slug: string | "__SEPARATOR__";
};
