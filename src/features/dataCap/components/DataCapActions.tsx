'use client';

import { DataCap } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEdit, FaHistory, FaSearch, FaTrashAlt } from 'react-icons/fa';
import { RxDotsHorizontal } from 'react-icons/rx';
import { dataCapDestroyManyApiCall } from 'src/features/dataCap/dataCapApiCalls';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { AppContext } from 'src/shared/controller/appContext';
import { ConfirmDialog } from 'src/shared/components/ConfirmDialog';
import { Button } from 'src/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/shared/components/ui/dropdown-menu';
import { toast } from 'src/shared/components/ui/use-toast';
import { auditLogPermissions } from 'src/features/auditLog/auditLogPermissions';
import { objectToQuery } from 'src/shared/lib/objectToQuery';

export function DataCapActions({
  mode,
  dataCap,
  context,
}: {
  mode: 'table' | 'view';
  dataCap: DataCap;
  context: AppContext;
}) {
  const { dictionary } = context;
  const router = useRouter();

  const [destroyDialogOpen, setDestroyDialogOpen] = useState(false);

  const queryClient = useQueryClient();

  const hasPermissionToEdit = dataCap.status == 'Pending' && hasPermission(permissions.dataCapUpdate, context);

  const hasPermissionToAuditLogs = hasPermission(
    auditLogPermissions.auditLogRead,
    context,
  );

  const hasPermissionToDestroy = dataCap.status == 'Pending' && hasPermission(
    permissions.dataCapDestroy,
    context,
  );

  const destroyMutation = useMutation({
    mutationFn: () => {
      return dataCapDestroyManyApiCall([dataCap.id]);
    },
    onSuccess: () => {
      queryClient.resetQueries({
        queryKey: ['dataCap'],
      });

      if (mode === 'view') {
        router.push('/data-cap');
      }

      toast({
        description: dictionary.dataCap.destroy.success,
      });
    },
    onError: (error: any) => {
      toast({
        description: error.message || dictionary.shared.errors.unknown,
        variant: 'destructive',
      });
    },
  });

  if (mode === 'view' && !hasPermissionToEdit && !hasPermissionToDestroy) {
    return null;
  }

  return (
    <div className="flex justify-end gap-2">
      <DropdownMenu>
        {mode === 'table' && (
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <RxDotsHorizontal className="h-4 w-4" />
              <span className="sr-only">{dictionary.shared.openMenu}</span>
            </Button>
          </DropdownMenuTrigger>
        )}

        {mode === 'view' && (
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="ml-auto flex h-8">
              <RxDotsHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
        )}

        <DropdownMenuContent align="end" className="w-[160px]">
          {mode === 'table' && (
            <DropdownMenuItem asChild>
              <Link href={`/data-cap/${dataCap.id}`} prefetch={false}>
                <FaSearch className="mr-2 h-4 w-4 text-foreground/50" />{' '}
                {dictionary.shared.view}
              </Link>
            </DropdownMenuItem>
          )}

          {mode === 'table' && hasPermissionToEdit && (
            <DropdownMenuItem asChild>
              <Link href={`/data-cap/${dataCap.id}/edit`} prefetch={false}>
                <FaEdit className="mr-2 h-4 w-4 text-foreground/50" />{' '}
                {dictionary.shared.edit}
              </Link>
            </DropdownMenuItem>
          )}

          {hasPermissionToAuditLogs && (
            <DropdownMenuItem asChild>
              <Link
                href={`/audit-log?${objectToQuery(
                  {
                    filter: {
                      entityId: dataCap.id,
                    },
                  },
                )}`}
                prefetch={false}
              >
                <FaHistory className="mr-2 h-4 w-4 text-foreground/50" />{' '}
                {dictionary.auditLog.list.menu}
              </Link>
            </DropdownMenuItem>
          )}

          {hasPermissionToDestroy && (
            <DropdownMenuItem
              onClick={() => setDestroyDialogOpen(true)}
              disabled={destroyMutation.isPending}
            >
              <FaTrashAlt className="mr-2 h-4 w-4 text-foreground/50" />{' '}
              <span>{dictionary.shared.delete}</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {mode === 'view' && hasPermissionToEdit && (
        <Button size="sm" className="ml-auto flex h-8" asChild>
          <Link href={`/data-cap/${dataCap.id}/edit`} prefetch={false}>
            <FaEdit className="mr-2 h-4 w-4" /> {dictionary.shared.edit}
          </Link>
        </Button>
      )}

      {destroyDialogOpen && (
        <ConfirmDialog
          title={dictionary.dataCap.destroy.confirmTitle}
          confirmText={dictionary.shared.delete}
          variant="destructive"
          cancelText={dictionary.shared.cancel}
          onConfirm={() => {
            destroyMutation.mutateAsync();
            setDestroyDialogOpen(false);
          }}
          onCancel={() => setDestroyDialogOpen(false)}
        />
      )}
    </div>
  );
}
