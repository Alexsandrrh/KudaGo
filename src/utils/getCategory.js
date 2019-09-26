import categories from '../json/categories';

export default function(slug) {
  const data = categories.filter(item => item.slug === slug)[0].name;

  if (data) {
    return data;
  }
  return null;
}
