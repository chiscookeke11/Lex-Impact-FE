import Link from "next/link"
import { ArrowRight  } from 'lucide-react';
export default function Newsletter(){
    return (
        <div className="bg-[#043AAB] text-center text-[#FFFFFF] font-montserrat
 flex flex-col items-center justify-center py-16 px-4 md:px-10 lg:px-20 xl:px-40 space-y-3 md:space-y-6">
              <h2 className="text-3xl md:text-5xl  font-[700] text-center">Ready to Get Started?</h2>
            <p className="md:text-xl  font-[700]">Join our community and be part of Africa’s digital transformation.</p>
            <div className="pt-4">
                <Link href=" " className="bg-[#FFFFFF] text-lg flex items-center justify-center gap-2 text-[#021488] px-8 py-3 rounded-md hover:bg-[#FFFFFF]/80 transition duration-300">
                    Join the Community <ArrowRight  className="inline-block ml-2" />
                </Link>
            </div>

        </div>
    )
}