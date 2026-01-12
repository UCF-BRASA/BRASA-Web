import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { detectDeviceFromUserAgent, getDeviceClasses } from "@utils/deviceDetection";

interface MyDocumentProps extends DocumentInitialProps {
  deviceClasses: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    
    // Server-side device detection to eliminate CLS
    const userAgent = ctx.req?.headers["user-agent"] || "";
    const deviceInfo = detectDeviceFromUserAgent(userAgent);
    const deviceClasses = getDeviceClasses(deviceInfo);
    
    return {
      ...initialProps,
      deviceClasses,
    };
  }

  render() {
    const { deviceClasses } = this.props;
    
    return (
      <Html style={{ scrollBehavior: "smooth" }} lang="en">
        <Head />
        <body className={deviceClasses}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
