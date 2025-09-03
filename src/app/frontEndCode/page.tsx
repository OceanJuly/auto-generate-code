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
import HouseSelect from './components/houseSelect';

export default function FrontEndCode() {
  const FormSchema = z.object({
    houseUrl: z.string().min(1, {
      message: '请输入仓库地址',
    }),
    branchName: z.string().min(1, {
      message: 'please enter branch name',
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      houseUrl: '',
      branchName: '',
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const { branchName } = data;
    console.log(branchName);
    // const res = await fetch('/api/git', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ branchName }),
    // });
    // if (res.ok) {
    //   alert('创建分支成功');
    // }
  };
  return (
    <div className={styles['form-wrap']}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="houseUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>仓库地址：</FormLabel>
                <FormControl>
                  <HouseSelect {...field} onChangeAction={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          />
          <Button type="submit">开始执行</Button>
        </form>
      </Form>
    </div>
  );
}
