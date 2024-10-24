interface BreadcrumbItem {
  label: string;
  href: string;
  isLast: boolean;
}

interface Breadcrumbs {
  [key: string]: BreadcrumbItem[];
}

enum BreadcrumbKey {
  USER_LIST = 'user-list',
  MY_PAGE = 'mypage'
}

export const BREADCRUMBS: Breadcrumbs = {
  [BreadcrumbKey.USER_LIST]: [
    {
      label: '設定',
      href: '',
      isLast: false
    },
    {
      label: '利用者選択',
      href: '',
      isLast: true
    }
  ],
  [BreadcrumbKey.MY_PAGE]: [
    {
      label: '設定',
      href: '',
      isLast: false
    },
    {
      label: 'プロフィール設定',
      href: '',
      isLast: true
    }
  ]
};
