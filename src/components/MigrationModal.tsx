"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IconExternalLink, IconX, IconAlertTriangle } from "@tabler/icons-react";

const NEW_URL = "https://www.forumprogrammerkaputama.my.id";
const COUNTDOWN_SECONDS = 5;

export default function MigrationModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const pathname = usePathname();

  // Memunculkan kembali modal setiap kali user pindah halaman (rute berubah)
  useEffect(() => {
    setIsOpen(true);
    setTimeLeft(COUNTDOWN_SECONDS);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = NEW_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleRedirect = () => {
    window.location.href = NEW_URL;
  };

  const handleStay = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const progressPercentage = (timeLeft / COUNTDOWN_SECONDS) * 100;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg bg-white p-6 shadow-lg sm:rounded-xl border border-zinc-200 animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={handleStay}
          className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors"
          aria-label="Tutup"
        >
          <IconX size={18} stroke={2} />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center gap-2 text-zinc-950 font-semibold tracking-tight text-xl">
            <IconAlertTriangle size={24} stroke={2} />
            <h3>Pemberitahuan Migrasi</h3>
          </div>
          <p className="text-zinc-500 text-sm">
            Website telah pindah domain
          </p>
        </div>

        {/* Content */}
        <div className="mt-4 text-zinc-700 text-sm leading-relaxed">
          <p>
            Forum Programmer Kaputama kini hadir di domain resmi yang baru. Silakan kunjungi tautan berikut:
          </p>
          <a
            href={NEW_URL}
            className="mt-3 inline-flex items-center gap-1.5 font-medium text-zinc-900 hover:text-zinc-600 underline underline-offset-4 break-all"
          >
            {NEW_URL}
            <IconExternalLink size={16} stroke={2} className="shrink-0" />
          </a>
        </div>

        {/* Progress Bar & Countdown */}
        <div className="mt-6">
          <div className="flex justify-between items-center text-xs font-medium text-zinc-500 mb-2">
            <span>Mengalihkan otomatis...</span>
            <span className="font-semibold text-zinc-900">
              {timeLeft}s
            </span>
          </div>
          <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-zinc-900 h-full transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col-reverse sm:flex-row justify-end gap-2">
          <button
            onClick={handleStay}
            className="inline-flex justify-center items-center px-4 py-2 rounded-md border border-zinc-200 bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-colors h-10"
          >
            Tetap di sini
          </button>
          <button
            onClick={handleRedirect}
            className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 text-zinc-50 font-medium text-sm hover:bg-zinc-900/90 transition-colors shadow-sm h-10"
          >
            Pindah ke Website Baru
            <IconExternalLink size={16} stroke={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
