import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Data utility functions
export function formatDataSize(bytes: number): string {
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 B";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
}

export function formatUptime(uptime: number): string {
  return `${uptime.toFixed(2)}%`;
}

export function formatResponseTime(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "online":
    case "operational":
      return "text-green-600";
    case "offline":
    case "major_outage":
      return "text-red-600";
    case "maintenance":
    case "degraded":
      return "text-yellow-600";
    default:
      return "text-gray-600";
  }
}

export function getCategoryColor(category: string): string {
  const colors = {
    health: "text-green-600",
    environment: "text-emerald-600",
    transparency: "text-red-600",
    statistics: "text-blue-600",
    emergency: "text-amber-600",
    governance: "text-purple-600",
    social: "text-pink-600",
    economic: "text-indigo-600",
  };
  return colors[category as keyof typeof colors] || "text-gray-600";
}
