'use client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from './page.module.scss';
import { IGenTargetProps, IGenTargetType } from './page';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const genTarget: IGenTargetProps[] = [
  {
    title: '前端',
    value: 'frontEnd',
  },
  {
    title: '后端',
    value: 'backEnd',
  },
];

export default function Home() {
  const router = useRouter();

  const handleGo = (type: IGenTargetType) => {
    router.push(`/${type}Code`);
  };

  return (
    <div className={styles.home}>
      <header className={styles.title}>Welcome to Use codeGeneratorAutomation!</header>
      <main className={styles.main}>
        {genTarget.map((v) => (
          <Card key={v.value} className="w-[360] cursor-pointer" onClick={() => handleGo(v.value)}>
            <CardHeader>{v.title}</CardHeader>
            <CardContent>123</CardContent>
            <CardFooter className="flex flex-row-reverse">
              <ArrowRight />
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}
