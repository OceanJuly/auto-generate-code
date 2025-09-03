import { NextResponse } from 'next/server';

const GitHubWarehouse = {
  repo1: {
    name: '测试仓库',
    url: 'git@github.com:OceanJuly/GitGenerateOperate.git',
  },
};

export async function GET() {
  try {
    const repoList = Object.entries(GitHubWarehouse).map(([key, value]) => ({
      id: key,
      name: value.name,
      url: value.url,
    }));
    return NextResponse.json({
      code: 200,
      data: repoList,
      success: true,
    });
  } catch (error: unknown) {
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({
      code: 500,
      data: errorMessage,
      success: false,
    });
  }
}
