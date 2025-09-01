'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ListChecks, Loader2Icon } from 'lucide-react';
import { ICheckProps, ICheckType } from './model';
import { useState } from 'react';

// 检查清单
const checkList: ICheckProps[] = [
  {
    title: 'git',
  },
  {
    title: 'gitlab',
  },
];

export default function CheckProcessPassDialog() {
  const [checkStatus, setCheckStatus] = useState<ICheckType>('notCheck');

  const checkContent = () => {
    switch (checkStatus) {
      case 'notCheck': {
        return <></>;
      }
    }
  };
  const handleCheck = () => {
    setCheckStatus('checking');
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-none">
            <ListChecks />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>检查权限</DialogTitle>
            <DialogDescription>检查第三方系统接入权限，防止后面配置阻碍</DialogDescription>
          </DialogHeader>
          <div>{checkContent()}</div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">关闭</Button>
            </DialogClose>
            {checkStatus === 'checking' ? (
              <Button size="sm" disabled>
                <Loader2Icon className="animate-spin" />
                检查中...
              </Button>
            ) : (
              <Button variant="outline" onClick={handleCheck}>
                开始检查
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
