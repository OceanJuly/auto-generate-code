'use client';

import { useEffect, useState } from 'react';
import { IWarehouseProps } from '@/types';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '@/components/ui/command';
import { CommandItem } from 'cmdk';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HouseSelect({
  value,
  onChangeAction,
}: {
  value: string;
  onChangeAction: (v: string) => void;
}) {
  const [warehouseList, setWarehouseList] = useState<IWarehouseProps[]>([]);
  const [open, setOpen] = useState(false);

  const getWarehouseList = async () => {
    const res = await fetch('/api/codeWarehouse/github');
    const { data } = await res.json();
    setWarehouseList(data ?? []);
  };

  const handleChange = (newValue: string) => {
    onChangeAction(newValue);
  };

  useEffect(() => {
    getWarehouseList();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? warehouseList.find((warehouse) => warehouse.url === value)?.name : '请选择'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="请输入关键字" className="h-9" />
          <CommandList>
            <CommandEmpty>暂无数据</CommandEmpty>
            <CommandGroup>
              {warehouseList.map((warehouse) => (
                <CommandItem
                  key={warehouse.url}
                  value={warehouse.url}
                  onSelect={(currentValue) => {
                    handleChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {warehouse.name}
                  <Check
                    className={cn('ml-auto', value === warehouse.url ? 'opacity-100' : 'opacity-0')}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
