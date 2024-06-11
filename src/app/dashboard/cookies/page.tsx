export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { TabBar } from "@/components/TabBar";
import { cookies } from "next/headers";


export const metadata = {
 title: 'Cookies',
 description: 'Cookies Page',
}; 

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = cookieStore.get('selected')?.value ?? '1';

const allCookies = cookieStore.getAll();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
      <span className="text-3xl">
        Tabs
      </span>
      {
        //Tambien puede ir +cookieTab
          JSON.stringify(allCookies)
        
      }
      <TabBar currentTab={+cookieTab}/>
      </div>
    </div>
  );
}