import Link from "next/link";

const Footer = () => {
  return (
    <p className="flex mt-10 items-center justify-center gap-1">
      Made by
      <Link href={"https://github.com/LVSSandeepKumar"}
      className="underline hover:scale-105">LVS Sandeep Kumar</Link>
    </p>
  );
};

export default Footer;
