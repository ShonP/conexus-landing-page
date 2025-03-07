import Home from '../../components/Home';

type Props = {
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function LangPage({ params }: Props) {
  return <Home />;
}
