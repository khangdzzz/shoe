export const formatToJapaneseEra = (dateStr: string | null): string => {
  if (!dateStr) return '';
  const date = formatDate(dateStr, 'YYYY-MM-DD');
  const [year, month, day] = date.split('-').map(Number);

  if (year >= 1989 && year <= 2019) {
    const heiseiYear = year - 1988;
    return `平成${heiseiYear}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
  }

  if (year >= 2019) {
    const reiwaYear = year - 2018;
    return `令和${reiwaYear}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
  }

  if (year >= 1926 && year < 1989) {
    const showaYear = year - 1925;
    return `昭和${showaYear}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
  }

  if (year >= 1912 && year < 1926) {
    const taishoYear = year - 1911;
    return `大正${taishoYear}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
  }

  if (year >= 1868 && year < 1912) {
    const meijiYear = year - 1867;
    return `明治${meijiYear}年${String(month).padStart(2, '0')}月${String(day).padStart(2, '0')}日`;
  }

  return dateStr;
};

export const formatDate = (dateStr: string | null, regex: string): string => {
  if (!dateStr) return '';

  const date = new Date(dateStr);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  switch (regex) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'YYYY/MM/DD':
      return `${year}/${month}/${day}`;
    case 'YYYY-MM-DD HH:mm':
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    case 'YYYY/MM/DD HH:mm':
      return `${year}/${month}/${day} ${hours}:${minutes}`;
    default:
      return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
};
