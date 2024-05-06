import { ColumnDef } from '@tanstack/react-table';

import DateCell from './cell/DateCell';
import HeaderSelectCell from './cell/HeaderSelectCell';
import ItemSizeCell from './cell/ItemSizeCell';
import ItemTypeCell from './cell/ItemTypeCell';
import MenuCell from './cell/MenuCell';
import RowSelectCell from './cell/RowSelectCell';
import SortButton from './SortButton';

import { FileInfo } from '@/types/types';

const columns: ColumnDef<FileInfo>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <HeaderSelectCell
        getIsAllPageRowsSelected={table.getIsAllPageRowsSelected}
        getIsSomePageRowsSelected={table.getIsSomePageRowsSelected}
        toggleAllPageRowsSelected={table.toggleAllPageRowsSelected}
      />
    ),
    cell: ({ row }) => <RowSelectCell row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => <SortButton column={column}>Type</SortButton>,
    cell: ({ row }) => <ItemTypeCell type={row.original.type} />,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <SortButton column={column}>Name</SortButton>,
  },
  {
    accessorKey: 'lastModified',
    header: ({ column }) => (
      <SortButton column={column}>Last modified</SortButton>
    ),
    cell: ({ row }) => <DateCell date={row.getValue('lastModified')} />,
  },
  {
    accessorKey: 'size',
    header: ({ column }) => <SortButton column={column}>Size</SortButton>,
    cell: ({ row }) => <ItemSizeCell size={row.getValue('size')} />,
  },
  {
    id: 'actions',
    cell: () => {
      const items = ['Download', 'Rename', 'separator', 'Move to trash'];
      return <MenuCell items={items} triggerName='Columns' />;
    },
  },
];

export default columns;
