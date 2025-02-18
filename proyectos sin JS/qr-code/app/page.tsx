import Image from "next/image";
import { Outfit } from "next/font/google";
import qrcode from "../public/images/image-qr-code.png";
const outitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div
      className={`${outitFont.className}  flex justify-center items-center h-screen bg-slate-300`}
    >
      <main className="flex flex-col items-start gap-6 p-4 pb-10 rounded-[20px] bg-white shadow-lg w-[290px] h-[470px]">
        <Image
          src={qrcode}
          alt="qr code"
          className="w-[288px] rounded-lg "
        ></Image>
        <div className="w-full text-center">
          <h1 className="font-bold leading-[120%] text-slate-900 text-[20px] p-[3px]">
            Improve your front-end skills by building projects
          </h1>
          <p className="font-normal leading-[140%] tracking-[0.2px] text-slate-500 text-[14px] p-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </div>
  );
}
