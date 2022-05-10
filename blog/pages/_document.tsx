import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';

import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
    
    render() {
        return (
            <Html lang='pt-BR'>
                <Head>
                    <link rel="shortcut icon" href="favicon.jpg" type="image/x-icon" />
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />

                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                      
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                    `,
                        }}
                    />
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8731937258423372"
                    crossorigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
