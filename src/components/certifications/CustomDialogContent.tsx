
import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface CustomDialogContentProps {
  children: React.ReactNode;
}

const CustomDialogContent: React.FC<CustomDialogContentProps> = ({ children }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content 
        className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-0 border-0 bg-transparent shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
      >
        {children}
        {/* Close button explicitly removed */}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export default CustomDialogContent;
