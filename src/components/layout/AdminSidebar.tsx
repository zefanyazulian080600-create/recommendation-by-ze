"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
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
} from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export function AdminSidebar() {
  const pathname = usePathname();
  const { userEmail, logout, isSupabaseConnected } = useAdminAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Semua Produk", href: "/admin/products", icon: Package },
    { label: "Tambah Produk", href: "/admin/products/new", icon: PlusCircle },
    { label: "Kategori", href: "/admin/categories", icon: FolderTree },
    { label: "Koleksi Tematik", href: "/admin/collections", icon: Sparkles },
    { label: "Pengaturan Website", href: "/admin/settings", icon: Settings },
    { label: "Analitik Klik", href: "/admin/analytics", icon: BarChart3 },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between p-5">
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="space-y-1 pb-4 border-b border-softgray-border">
          <Link href="/admin" className="block">
            <span className="font-editorial text-xl font-medium tracking-tight text-charcoal">
              Recommendation
            </span>
            <span className="block font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-rose">
              by Ze • CMS
            </span>
          </Link>
          <div className="pt-2">
            {isSupabaseConnected ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-medium border border-green-200">
                <Database className="w-3 h-3 text-green-600" />
                <span>Supabase Live</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-medium border border-amber-200">
                <Database className="w-3 h-3 text-amber-600" />
                <span>Mode Offline / Standby</span>
              </span>
            )}
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
                    ? "bg-charcoal text-white shadow-sm font-semibold"
                    : "text-charcoal-200 hover:text-charcoal hover:bg-softgray"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-rose" : "text-charcoal-50"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Area: User, Public View, Logout */}
      <div className="pt-6 border-t border-softgray-border space-y-3">
        {userEmail && (
          <div className="px-1 text-[11px] text-charcoal-50 truncate">
            Login sebagai: <strong className="text-charcoal block truncate">{userEmail}</strong>
          </div>
        )}

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-charcoal hover:bg-softgray border border-softgray-border transition-colors"
        >
          <div className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-rose" />
            <span>Lihat Toko Publik</span>
          </div>
          <span className="text-[10px] text-charcoal-50">↗</span>
        </Link>

        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-2 w-full px-3.5 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
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
      <div className="lg:hidden bg-white border-b border-softgray-border p-4 flex items-center justify-between sticky top-0 z-30">
        <Link href="/admin">
          <span className="font-editorial text-lg font-medium text-charcoal">
            Recommendation by Ze
          </span>
          <span className="text-[10px] text-rose font-bold block uppercase tracking-wider">
            Admin CMS
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-lg text-charcoal hover:bg-softgray"
          aria-label="Toggle admin menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-10 flex flex-col">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-64 bg-white border-r border-softgray-border flex-shrink-0 h-screen sticky top-0 overflow-y-auto">
        {sidebarContent}
      </aside>
    </>
  );
}
