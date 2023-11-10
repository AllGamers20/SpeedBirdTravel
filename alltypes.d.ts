declare module "react-whatsapp-widget" {
    interface WhatsAppWidgetProps {
      phoneNumber: string;
      message: string;
    }
  
    const WhatsAppWidget: React.ComponentType<WhatsAppWidgetProps>;
    export default WhatsAppWidget;
  }
  