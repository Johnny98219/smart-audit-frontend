import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const TokenResult = ({ params }: Props) => {
  return (
    <div className="bg-[url(/backgrounds/token-result.svg)] bg-cover bg-center pt-[148px] min-h-screen">
      <div className="flex flex-col gap-8 p-6 min-h-[calc(100vh-148px)]">
        {/* Token Address Section */}
        <div className="relative flex flex-col items-center gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] text-center overflow-hidden">
          {/* Token Logo */}
          <div className="bottom-0 left-0 z-[-1] absolute rounded-full -translate-x-[calc(50%-20px)] translate-y-[10px] size-[136px]">
            <Image alt="logo" src="/icons/logo.svg" width={136} height={136} />
          </div>
          {/* Token Logo */}
          <div className="top-0 right-0 z-[-1] absolute rounded-full -translate-y-[20px] translate-x-[calc(50%-23px)] size-[136px]">
            <Image alt="logo" src="/icons/logo.svg" width={136} height={136} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-[700] text-white text-xl">Token Audit</h1>
            <p className="font-[500] text-sm text-white">
              Submit token contract address to to get a detailed analysis <br />
              of the token, before making your trade decision.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#FFFFFF14] px-[16px] py-[10px] rounded-[80px]">
              <p className="font-[500] text-[16px] text-white">{params.id}</p>
            </div>
            <button
              type="button"
              style={{
                background:
                  "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
              }}
              className="px-[39px] py-[10px] rounded-[24px] font-[700] text-[16px] text-white"
            >
              Submit
            </button>
          </div>
        </div>
        {/* Token Result Section */}
        <div className="grid grid-cols-4 flex-1 gap-8">
          <div className="col-span-1 bg-[#18181B] p-6 rounded-[24px] w-full h-full">
            <div className="flex flex-col items-center gap-4 text-center">
              <Image alt="logo" src="/icons/logo.svg" width={80} height={80} />
              <div className="flex flex-col text-center">
                <h1 className="font-[700] text-[28px] text-white leading-[36px]">
                  SmartAudit AI
                </h1>
                <h3 className="font-[500] text-[#737373] text-[16px]">
                  $AUDIT
                </h3>
              </div>
              <p className="font-[500] text-[#A1A1AA] text-sm">
                SmartAudit AI: AI-powered smart contract security. Proactive
                audits, bug bounties, and real-time monitoring.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenResult;
