import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.pages}</h1>
      <h1>{router.query.page}</h1>
    </Layout>
  );
}
