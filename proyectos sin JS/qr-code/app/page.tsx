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
      className={`${outitFont.className} font-normal flex justify-center items-center h-screen`}
    >
      <main>
        <Image
          src={qrcode}
          alt="qr code"
          className="w-[288px] rounded-lg"
        ></Image>
      </main>
    </div>
  );
}
