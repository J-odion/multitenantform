import Image from "next/image"
import { FaCheck } from "react-icons/fa"


const AuthSideBar = () => {
    return (
        <div className="w-full h-full text-white flex flex-col relative items-left gap-4 p-14 bg-[#6358DC]">
            <div className="flex relative flex-col gap-4 mb-5 top-0  ">
                <h2 className="text-5xl text-center text-white">
                Maximize Your <span className="text-[#FFA502]">Observability</span> Efficiency
                </h2>

            </div>

            <div>
                <Image src="/assets/clouds.webp" width={0} height={0} className="w-full h-auto mb-[51px] mt-[37px]" alt="Logo" />
                {/* <Image src="/assets/howitworks.webp" width={0} height={0} className="w-full h-auto mb-[51px] mt-[37px]" alt="Logo" /> */}
            </div>

         
            <p className="text-xs text-center">Reduce your expenses on platforms like Datadog, CloudWatch, and New Relic. One Click savings on Custom metrics, ingestion costs, profiling, host level billing.</p>

        </div>
    )
}

export default AuthSideBar;