import { redirect } from "next/navigation";


export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};
export default function Home() {
  redirect('/dashboard/');
  return (
    <h1>Panel</h1>
  );
}
