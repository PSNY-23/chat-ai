"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

type CustomAiModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  
};

export const CustomAiModal = ({ open, onOpenChange }: CustomAiModalProps) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [tone, setTone] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");

  // When Save button clicked
  const handleSave = () => {
    const data = { name, role, experience, tone, description, language };
    console.log("Saved AI config:", data);
    // onSave(data);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Customize AI Assistant</DialogTitle>
        </DialogHeader>

        <div className='flex flex-col gap-4 mt-4'>
          {/* Assistant Name */}
          <Input placeholder='Assistant Name (e.g., Sarah)' value={name} onChange={(e) => setName(e.target.value)} />

          {/* Role dropdown */}
          <Select onValueChange={setRole}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select AI Role' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='teacher'>Teacher</SelectItem>
              <SelectItem value='developer'>Web Developer</SelectItem>
              <SelectItem value='researcher'>Researcher</SelectItem>
              <SelectItem value='professor'>Professor</SelectItem>
              <SelectItem value='scientist'>Computer Scientist</SelectItem>
              <SelectItem value='actor'>Actor</SelectItem>
              <SelectItem value='other'>other</SelectItem>
            </SelectContent>
          </Select>

          {/* Experience Level */}
          <Select onValueChange={setExperience}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Experience Level' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='junior'>Junior</SelectItem>
              <SelectItem value='mid'>Mid-level</SelectItem>
              <SelectItem value='senior'>Senior</SelectItem>
              <SelectItem value='expert'>Expert</SelectItem>
            </SelectContent>
          </Select>

          {/* Tone/Style */}
          <Select onValueChange={setTone}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Tone / Personality' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='casual'>Casual</SelectItem>
              <SelectItem value='professional'>Professional</SelectItem>
              <SelectItem value='friendly'>Friendly</SelectItem>
              <SelectItem value='funny'>Funny</SelectItem>
              <SelectItem value='strict'>Strict</SelectItem>
            </SelectContent>
          </Select>

          {/* langaugae */}
          <Select onValueChange={setLanguage}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='English / Hinglish/ Hindi' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='english'>English</SelectItem>
              <SelectItem value='hindi'>Hindi</SelectItem>
              <SelectItem value='hinglish'>Hinglish</SelectItem>
              <SelectItem value='desi mix'>Desi Mix</SelectItem>
            </SelectContent>
          </Select>

          {/* Custom Role Textarea */}
          <textarea
            className='w-full rounded-md border border-gray-300 p-2 resize-none'
            rows={3}
            placeholder='Or describe custom role here...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <DialogFooter className='mt-4'>
          <Button onClick={handleSave}>Save Preferences</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
