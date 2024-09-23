import Header from "./header";
import Footer from "./footer";
interface Dictionary {
    title: string; // Add other properties based on your actual dictionary structure
    footer: {
      allRights: string; // Example property, adjust as needed
    };
  }
  
  type Props = {
    children: React.ReactNode;
    dict: Dictionary; // Use the specific type instead of any
    lang: string;
  };
  
  export default function MainLayout({ children, dict, lang }: Props) {
    return (
      <div className="flex flex-col h-full bg-slate-100 dark:bg-base-100 items-center">
        <Header dict={dict} lang={lang} />
        <div className="main flex-grow flex justify-center">{children}</div>
        <Footer dict={dict} />
      </div>
    );
  }
  