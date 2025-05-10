"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  ShoppingBag,
  ShoppingCartIcon
} from "lucide-react"

import { NavMain } from "./NavMain"
import { NavUser } from "./NavUser"
import { TeamSwitcher } from "./TeamSwitcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Ace",
    email: "ace@gmail.com",
    avatar: "/avatar.jpg",
  },
  teams: [
    {
      name: "Coach Savvy",
      logo: ShoppingCartIcon,
      plan: "Ecommerce Store",
    },
    
  ],
  navMain: [
    {
      title: "Store",
      url: "#",
      icon: ShoppingBag,
      isActive: true,
      items: [
        {
          title: "Products",
          url: "/ace/products",
        },
        {
          title: "Categories",
          url: "/ace/categories",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: PieChart,
      items: [
        {
          title: "Overview",
          url: "/ace",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
