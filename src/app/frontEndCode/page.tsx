'use client';

import styles from './frontEndCode.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function FrontEndCode() {
  const FormSchema = z.object({
    branchName: z.string().min(1, {
      message: 'please enter branch name',
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      branchName: '',
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const { branchName } = data;
    const res = await fetch('/api/gitOperate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ branchName }),
    });
    if (res.ok) {
      alert('创建分支成功');
    }
  };
  return (
    <div className={styles['form-wrap']}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="branchName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>分支名：</FormLabel>
                <FormControl>
                  <Input placeholder="请输入分支名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit">开始执行</Button>
        </form>
      </Form>
    </div>
  );
}
