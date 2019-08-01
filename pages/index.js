import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const ULink = props => {
  let href = '/'
  if (props.pages) href += '[pages]/'
  if (props.page) href += '[page]/'
  if (props.version) href += '[version]/'
  const as = `/${props.pages || ''}/${props.page || ''}/${props.version || ''}`
  console.log(href, as)

  return (
    <li>
      <Link href={href} as={as}>
        <a>{props.page} {props.version}</a>
      </Link>
    </li>
  );
}

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <ULink page="Hello Next.js" pages="news"/>
        <ULink page="Learn Next.js is awesome" pages="blog" version="13" />
        <ULink page="Deploy apps with Zeit" pages="test" version=".3" />
      </ul>
    </Layout>
  );
}
