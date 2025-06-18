import { Providers } from "@/providers";
import "@/styles/main.css";
import { LayoutProps } from "@/types/app";
import { TemplateScaffold } from "@/ui/components/templates/Scaffold";
import { geistMono, geistSans } from "@/ui/fonts";
import { Logo } from "./_components/Logo";
import { ModeToggle } from "./_components/ModeToggle";
import { Subheader } from "./_components/Subheader";

export { metadata } from "@/configs/metadata";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body className="font-geist-mono">
                <Providers>
                    <TemplateScaffold
                        header={
                            <>
                                <Logo />
                                <ModeToggle />
                            </>
                        }
                        subheader={<Subheader />}
                    >
                        {children}
                    </TemplateScaffold>
                </Providers>
            </body>
        </html>
    );
}
