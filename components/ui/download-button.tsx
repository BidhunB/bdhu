"use client"

import * as React from "react"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DownloadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function DownloadButton({ className, ...props }: DownloadButtonProps) {
  return (
    <Button 
      variant="default" 
      className={cn("gap-2 font-semibold", className)} 
      {...props}
    >
      <Download className="h-4 w-4" />
      <span className="hidden sm:inline">Download CV</span>
      <span className="sm:hidden">CV</span>
    </Button>
  )
}
