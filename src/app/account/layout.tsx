import MobileNavbar from "@/components/common/Nav/MobileNavbar";
import Layout from "@/components/Layout";
import { Providers } from "@/redux/providers";
import { Sidebar } from "lucide-react";

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
}
