import { useRouter } from 'next/router';
import Layout from '../../../components/MyLayout';

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>dir {router.query.pages}</h1>
      <h1>page {router.query.page}</h1>
      <h1>version {router.query.version}</h1>
    </Layout>
  );
}
