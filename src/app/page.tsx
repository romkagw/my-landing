import React from "react";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-10 dark:bg-black">
            <main className="w-full max-w-3xl rounded-2xl bg-white p-10 text-center shadow-xl dark:bg-zinc-900 sm:p-14">
                {/* Заголовок */}
                <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
                    Почётная страница
                </h1>

                <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
                    Галушко Наталия Олеговна
                </p>

                <p className="mt-1 text-base text-zinc-500 dark:text-zinc-400">
                    Главный помощник главы Кировского суда
                </p>

                {/* Блок под грамоту */}
                <div className="mt-10 flex w-full items-center justify-center">
                    <div className="flex h-80 w-full max-w-md items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-100 text-center text-lg font-medium text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 sm:h-[420px]">
                        Здесь будет грамота
                    </div>
                </div>

                <footer className="mt-12 text-sm text-zinc-400 dark:text-zinc-500">
                    © {new Date().getFullYear()} Страница почёта
                </footer>
            </main>
        </div>
    );
}
