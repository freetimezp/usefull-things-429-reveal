import React from "react";

import "lenis/dist/lenis.css";
import "/src/assets/css/style.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
