import { FaChartPie } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { LuHistory, LuLayoutGrid, LuUsers } from 'react-icons/lu';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { AppContext } from 'src/shared/controller/appContext';

export function menus(context: AppContext) {
  const menus: Array<{
    id: string;
    label: string;
    href: string;
    Icon: IconType;
    isExact?: boolean;
  }> = [];

  menus.push({
    id: 'dashboard',
    label: context.dictionary.shared.dashboard,
    href: `/`,
    Icon: FaChartPie,
    isExact: true,
  });

  if (hasPermission(permissions.membershipRead, context)) {
    menus.push({
      id: 'membership',
      label: context.dictionary.membership.list.menu,
      href: `/membership`,
      Icon: LuUsers,
    });
  }

  if (hasPermission(permissions.dataSetRead, context)) {
    menus.push({
      id: 'dataSet',
      label: context.dictionary.dataSet.list.menu,
      href: `/data-set`,
      Icon: LuLayoutGrid,
    });
  }
  if (hasPermission(permissions.dataSourceRead, context)) {
    menus.push({
      id: 'dataSource',
      label: context.dictionary.dataSource.list.menu,
      href: `/data-source`,
      Icon: LuLayoutGrid,
    });
  }
  if (hasPermission(permissions.dataCapRead, context)) {
    menus.push({
      id: 'dataCap',
      label: context.dictionary.dataCap.list.menu,
      href: `/data-cap`,
      Icon: LuLayoutGrid,
    });
  }

  return menus;
}
