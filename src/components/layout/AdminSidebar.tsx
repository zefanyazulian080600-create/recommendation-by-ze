"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  FileSpreadsheet,
  FolderTree,
  Sparkles,
  Settings,
  BarChart3,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Database,
  ShieldAlert,
  Wand2,
} from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export function AdminSidebar() {
  const pathname = usePathname();
  const { userEmail, logout, isSupabaseConnected } = useAdminAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Semua Produk", href: "/admin/products", icon: Package },
    { label: "Import CSV / Excel", href: "/admin/import", icon: FileSpreadsheet },
    { label: "Tambah Produk Manual", href: "/admin/products/new", icon: PlusCircle },
    { label: "AI Copywriter Studio", href: "/admin/ai-assistant", icon: Wand2 },
    { label: "Kategori", href: "/admin/categories", icon: FolderTree },
    { label: "Koleksi Tematik", href: "/admin/collections", icon: Sparkles },
    { label: "Pengaturan Website", href: "/admin/settings", icon: Settings },
    { label: "Analitik Klik", href: "/admin/analytics", icon: BarChart3 },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between p-5 bg-[#12131A] text-white">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="space-y-1 pb-4 border-b border-white/10">
          <Link href="/admin" className="block">
            <span className="font-editorial text-xl font-medium tracking-tight text-white">
              Recommendation
            </span>
            <span className="block font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400">
              by Ze • CMS
            </span>
          </Link>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isSupabaseConnected ? "Supabase Live" : "Sistem Online • 1.386 Produk"}</span>
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-white text-black shadow-md font-bold"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-zinc-500"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Area: User, Public View, Logout */}
      <div className="pt-6 border-t border-white/10 space-y-3">
        {userEmail && (
          <div className="px-1 text-[11px] text-zinc-500 font-mono truncate">
            Login sebagai: <strong className="text-zinc-200 block truncate">{userEmail}</strong>
          </div>
        )}

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
        >
          <div className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span>Lihat Toko Publik</span>
          </div>
          <span className="text-[10px] text-zinc-500">↗</span>
        </Link>

        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-2 w-full px-3.5 py-2 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Keluar (Logout)</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Bar */}
      <div className="lg:hidden bg-[#12131A] border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-30">
        <Link href="/admin">
          <span className="font-editorial text-lg font-medium text-white">
            Recommendation by Ze
          </span>
          <span className="text-[10px] text-emerald-400 font-mono font-bold block uppercase tracking-wider">
            Admin CMS
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-lg text-zinc-300 hover:bg-white/10"
          aria-label="Toggle admin menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-[#12131A] border-r border-white/10 shadow-2xl z-10 flex flex-col">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-64 bg-[#12131A] border-r border-white/10 flex-shrink-0 h-screen sticky top-0 overflow-y-auto">
        {sidebarContent}
      </aside>
    </>
  );
}
