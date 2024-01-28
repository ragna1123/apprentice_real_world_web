import "./globals.css";
import Header from "./_components/ui/Base/Header/Header";
import Footer from "./_components/ui/Base/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Conduit</title>
          {/* <!-- Import Ionicon icons & Google Fonts our Bootstrap theme relies on --> */}
          <link
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
            rel="stylesheet"
            type="text/css"
          />
          {/* <!-- Import the custom Bootstrap 4 theme from our hosted CDN --> */}
          <link
            rel="stylesheet"
            href="https://demo.productionready.io/main.css"
          />
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
