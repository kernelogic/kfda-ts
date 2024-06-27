'use client';

import { dataSourceFindManyApiCall } from 'src/features/dataSource/dataSourceApiCalls';
import DashboardCountCard from 'src/features/dashboard/components/DashboardCountCard';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { AppContext } from 'src/shared/controller/appContext';
import { LuLayoutGrid } from 'react-icons/lu';

export function DataSourceDashboardCard({ context }: { context: AppContext }) {
  const { dictionary } = context;

  if (!hasPermission(permissions.dataSourceRead, context)) {
    return null;
  }

  return (
    <DashboardCountCard
      queryFn={async (signal?: AbortSignal) => {
        const { count } = await dataSourceFindManyApiCall(
          {
            take: 1,
            orderBy: {
              createdAt: 'desc',
            },
          },
          signal,
        );

        return count;
      }}
      id="dataSourceDashboardCard"
      queryKey={['dataSource', 'count']}
      title={dictionary.dataSource.dashboardCard.title}
      Icon={LuLayoutGrid}
    />
  );
}
