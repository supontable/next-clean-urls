import Layout from '../components/MyLayout.js';
import {useRouter} from "next/router"


export default function Blog() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.pages}</h1>
    </Layout>
  );
}
