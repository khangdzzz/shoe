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
  MY_PAGE = 'mypage',
  CUSTOMER = 'customer',
  DETAIL_MEMBER = 'detail',
  CREATE_CUSTOMER = 'create-new-customer',
  TERMS = 'terms'
}

export const BREADCRUMBS: Breadcrumbs = {
  [BreadcrumbKey.CUSTOMER]: [
    {
      label: '設定',
      href: '',
      isLast: false
    },
    {
      label: '顧客管理',
      href: '',
      isLast: true
    }
  ],
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
  ],
  [BreadcrumbKey.DETAIL_MEMBER]: [
    {
      label: '顧客管理',
      href: '/customer',
      isLast: false
    },
    {
      label: '顧客詳細',
      href: '',
      isLast: true
    }
  ],
  [BreadcrumbKey.CREATE_CUSTOMER]: [
    {
      label: '顧客管理',
      href: '/customer',
      isLast: false
    },
    {
      label: '顧客詳細',
      href: '',
      isLast: true
    }
  ],
  [BreadcrumbKey.TERMS]: [
    {
      label: '利用規約',
      href: '',
      isLast: true
    }
  ]
};
