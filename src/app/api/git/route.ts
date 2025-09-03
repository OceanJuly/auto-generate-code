import { SimpleGit, simpleGit } from 'simple-git';

export async function POST(req: Request) {
  const git: SimpleGit = simpleGit({ baseDir: '' });
  try {
    const { branchName } = await req.json();
    // 1.确保是最新分支
    await git.checkout('master');
    await git.pull('origin', 'master');
    // 2.创建并切换分支
    await git.checkoutLocalBranch(branchName);
  } catch {}
}
