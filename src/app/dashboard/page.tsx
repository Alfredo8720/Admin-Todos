import { auth } from "@/auth";
import { WidgetItem } from "@/components/widgetItem"
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    
          <div className="grid gap-6 grid-cols-1 ">
           
           <WidgetItem title="Unidad de Aprendizaje">
                <button className="mt-2 flex justify-center gap-4">
                  <Link href={'/dashboard/test'}>
                  <h3 className="text-3xl font-bold text-gray-700">Pensamiento Matemático</h3>
                  </Link>
                </button>
                <span className="font-bold text-center text-gray-500"> 
                
                </span>
           </WidgetItem>
          </div>  
    
  );
}