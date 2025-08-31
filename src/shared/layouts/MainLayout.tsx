import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  onAboutClick?: () => void;
}

export const MainLayout = ({ children, onAboutClick }: MainLayoutProps) => {
  return (
      <div
          style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header onAboutClick={onAboutClick} />
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
        <Footer />
      </div>
  );
};
