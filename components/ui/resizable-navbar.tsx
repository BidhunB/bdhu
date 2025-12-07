"use client"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { IconMenu2, IconX } from "@tabler/icons-react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import React, { useRef, useState } from "react"
import Image from "next/image"

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [visible, setVisible] = useState<boolean>(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-4 z-50 w-full px-4", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, {
              visible,
            })
          : child
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative mx-auto hidden w-full max-w-5xl flex-row items-center justify-between self-start rounded-full border border-transparent bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md px-4 py-2 shadow-sm lg:flex",
        visible && "border-neutral-200 dark:border-neutral-800 shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-neutral-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        width: visible ? "90%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-2xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 px-4 py-2 shadow-sm lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  )
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={cn(
            "w-full overflow-hidden",
            className
          )}
        >
          <div className="flex flex-col gap-4 py-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return isOpen ? (
    <IconX className="text-neutral-600 dark:text-neutral-300" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-neutral-600 dark:text-neutral-300" onClick={onClick} />
  )
}

export const NavbarLogo = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      {mounted ? (
        <Image
          src={resolvedTheme === "dark" ? "/logo2.png" : "/logo.png"}
          alt="Logo"
          width={100}
          height={40}
          className="h-10 w-auto object-contain"
        />
      ) : (
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={40}
          className="h-10 w-auto object-contain"
        />
      )}
    </a>
  )
}

export const NavbarButton = <T extends React.ElementType = "a">({
  href,
  as,
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: T
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "dark" | "gradient"
} & React.ComponentPropsWithoutRef<T>) => {
  const Tag = as || "a"
  const baseStyles =
    "px-4 py-2 rounded-full text-sm font-medium relative border cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center text-center"

  const variantStyles = {
    primary:
      "bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md",
    secondary: "bg-transparent text-neutral-600 dark:text-neutral-300 border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
    dark: "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-transparent shadow-sm hover:shadow-md",
    gradient:
      "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white border-transparent",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}