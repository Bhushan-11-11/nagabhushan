
import { Toaster } from "@/components/ui/sonner";
import ChatBot from "@/components/ChatBot";

const Chat = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Toaster />
      <ChatBot />
    </div>
  );
};

export default Chat;
