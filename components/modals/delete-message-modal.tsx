"use client";

import { UseModal } from "@/hooks/use-modal-store";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import qs from "query-string";
import { useState } from "react";

export const DeleteMessageModal = () => {
  const { isOpen, onClose, type, data } = UseModal();
  
  const isModalOpen = isOpen && type === "deleteMessage";
  const { apiUrl, query } = data;
  
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
        setIsLoading(true);

        const url = qs.stringifyUrl({
          url: apiUrl || "",
          query,
        })
        await axios.delete(url);
        onClose();
    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Message
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to do this?<br/>
            The Message will be permanently deleted.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="bg-gray px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button disabled={isLoading} onClick={onClose} variant="ghost">
              Cancel
            </Button>
             <Button disabled={isLoading} variant="primary" onClick={onClick}>
              Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
