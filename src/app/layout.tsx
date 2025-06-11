import { Providers } from "@/providers";
import "@/styles/main.css";
import { LayoutProps } from "@/types/app";
import { TemplateScaffold } from "@/ui/components/templates/Scaffold";
import { geistMono, geistSans } from "@/ui/fonts";
export { metadata } from "@/configs/metadata";

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body className="font-geist-mono">
                <Providers>
                    <TemplateScaffold header={<>Header</>}>
                        {children}
                    </TemplateScaffold>
                </Providers>
            </body>
        </html>
    );
}
