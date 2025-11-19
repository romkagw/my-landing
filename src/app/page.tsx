"use client";

import { motion } from "framer-motion";

export default function Home() {
    const careerSteps = [
        {
            title: "ВПО — Внутренне перемещённая особа",
            description: "Начало пути",
            icon: "📌",
        },
        {
            title: "Секретарь суда",
            description: "Первый опыт в судебной системе",
            icon: "🗂️",
        },
        {
            title: "Заместитель Алины",
            description: "Помощь и поддержка руководства",
            icon: "⚖️",
        },
        {
            title: "Главный помощник главы суда",
            description: "Высокий уровень ответственности",
            icon: "🏛️",
        },
    ];

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-200 py-10 dark:from-black dark:via-zinc-950 dark:to-black px-4">

            {/* Верхний блок с гербом и заголовком */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center gap-4"
            >
                <h1 className="text-4xl font-extrabold text-black dark:text-zinc-50 text-center">
                    Почётная страница
                </h1>
                <p className="text-xl text-zinc-700 dark:text-zinc-300 text-center">
                    Галушко Наталия Олеговна — Главный помощник главы Кировского суда
                </p>
            </motion.div>

            {/* Блок под грамоту */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-10 flex w-full max-w-md items-center justify-center"
            >
                <div className="relative flex h-96 w-full max-w-md items-center justify-center rounded-2xl border-4 border-amber-400/40 bg-zinc-50 px-4 text-center text-lg font-medium text-zinc-600 shadow-xl dark:border-amber-300/30 dark:bg-zinc-800 dark:text-zinc-300 sm:h-[460px]">
                    Здесь будет грамота
                </div>
            </motion.div>

            {/* Хронология */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="mt-16 w-full max-w-3xl flex flex-col items-start relative"
            >
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-amber-400/60 dark:bg-amber-300/60 rounded-full"></div>
                {careerSteps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.3, duration: 0.7 }}
                        className="relative mb-12 pl-16"
                    >
                        <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-amber-400/80 dark:bg-amber-300 flex items-center justify-center text-white text-sm shadow-md">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-black dark:text-zinc-50">
                            {step.title}
                        </h3>
                        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.7 }}
                className="mt-16 text-sm text-zinc-400 dark:text-zinc-500"
            >
                © {new Date().getFullYear()} Страница почёта
            </motion.footer>
        </div>
    );
}
