"use client";

import {AnimatePresence, motion} from "framer-motion";
import {useState, useEffect} from "react";

// SVG inline для весов
function ScalesIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 216.757 216.757"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M214.257,187.552H124.78c-1.381,0-2.5-1.119-2.5-2.5V173.63c0-1.381,1.119-2.5,2.5-2.5h89.478
	c1.381,0,2.5,1.119,2.5,2.5v11.422C216.757,186.433,215.638,187.552,214.257,187.552z M127.28,182.552h84.478v-6.422H127.28V182.552
	z M7.148,144.969c-1.06,0-2.043-0.679-2.381-1.742l-4.648-14.605c-0.419-1.316,0.308-2.722,1.624-3.141L77.091,101.5
	c0.63-0.201,1.317-0.143,1.906,0.162c0.589,0.305,1.033,0.831,1.233,1.462l0.491,1.542l37.688-11.994l-0.947-2.975
	c-0.201-0.632-0.144-1.318,0.161-1.907c0.305-0.589,0.831-1.033,1.463-1.234l6.622-2.107l-1.225-3.849
	c-0.201-0.632-0.144-1.318,0.161-1.907s0.831-1.033,1.463-1.234l3.979-1.266l-2.033-6.388l-0.293,0.093
	c-0.627,0.2-1.277,0.301-1.932,0.301l0,0c-2.785,0-5.224-1.784-6.068-4.438l-2.399-7.542c-2.104-6.612,1.563-13.703,8.175-15.807
	L165.163,29.8c1.241-0.395,2.525-0.595,3.818-0.595c5.501,0,10.318,3.524,11.987,8.77l2.4,7.542
	c1.064,3.347-0.792,6.936-4.137,8.001l-0.293,0.093l2.033,6.388l3.979-1.267c0.633-0.2,1.318-0.143,1.907,0.162
	c0.589,0.305,1.033,0.831,1.233,1.462l9.527,29.935c0.201,0.632,0.144,1.318-0.161,1.907s-0.831,1.033-1.463,1.234l-3.979,1.267
	l2.032,6.388l0.292-0.093c0.628-0.2,1.278-0.301,1.933-0.301c2.784,0,5.223,1.783,6.068,4.438l2.4,7.542
	c1.02,3.203,0.73,6.611-0.813,9.597c-1.544,2.986-4.158,5.191-7.361,6.21l-39.626,12.611c-1.241,0.395-2.525,0.595-3.817,0.595
	c-0.001,0-0.001,0-0.001,0c-5.501,0-10.319-3.524-11.988-8.77l-2.4-7.542c-0.516-1.62-0.369-3.345,0.412-4.856
	s2.104-2.627,3.726-3.144l0.292-0.093l-2.032-6.388l-3.979,1.267c-1.312,0.416-2.722-0.308-3.14-1.624l-1.226-3.849l-6.622,2.107
	c-1.313,0.417-2.722-0.308-3.14-1.624l-0.947-2.976l-37.688,11.994l0.49,1.542c0.419,1.316-0.308,2.722-1.624,3.141l-75.349,23.98
	C7.655,144.931,7.4,144.969,7.148,144.969z M5.641,129.487l3.132,9.841l70.584-22.464l-3.132-9.841L5.641,129.487z M170.122,113.947
	l-25.735,8.19c-0.348,0.111-0.632,0.351-0.8,0.675s-0.199,0.695-0.089,1.043l2.4,7.543c1.006,3.161,3.909,5.286,7.224,5.286
	c0,0,0,0,0.001,0c0.776,0,1.551-0.121,2.302-0.36l39.626-12.611c1.93-0.614,3.505-1.943,4.436-3.743s1.104-3.853,0.491-5.784
	l-2.4-7.542c-0.226-0.704-0.998-1.119-1.721-0.889L170.122,113.947z M145.896,109.376l2.032,6.387l41.355-13.161l-2.032-6.388
	L145.896,109.376z M82.239,109.431l0.634,1.992l37.688-11.994l-0.634-1.992L82.239,109.431z M134.519,95.642l3.499,10.994
	l54.078-17.211l-8.011-25.17l-54.078,17.211l1.223,3.842c0.001,0.002,0.002,0.004,0.002,0.007L134.519,95.642z M122.986,90.562
	l4.045,12.708l4.239-1.349l-4.044-12.708L122.986,90.562z M132.819,68.289l2.033,6.388l41.355-13.162l-2.033-6.388L132.819,68.289z
	 M168.981,34.205c-0.777,0-1.552,0.121-2.303,0.36l-39.626,12.611c-3.984,1.268-6.194,5.542-4.927,9.526l2.4,7.542
	c0.224,0.705,1,1.119,1.719,0.889l51.471-16.38c0.719-0.229,1.118-1.001,0.889-1.72l-2.399-7.542
	C175.198,36.329,172.295,34.205,168.981,34.205z"
                fill="currentColor"
            />
        </svg>
    );
}

// Карьерная лестница
const careerSteps = [
    { title: "ВПО — Внутренне перемещённая особа", emoji: "🛶" },
    { title: "Секретарь суда", emoji: "📂" },
    { title: "Помощник судьи", emoji: "⚖️" },
    { title: "Главный помощник главы суда", emoji: "🏛️" },
];

export default function Home() {
    const [timeLeft, setTimeLeft] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const targetDate = new Date("2025-12-15T12:00:00"); // 15 декабря 12:00
        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                setTimeLeft("Грамота уже опубликована 🎉");
                clearInterval(timer);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft(`${days}д ${hours}ч ${minutes}м ${seconds}с`);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-black dark:via-zinc-900 dark:to-black px-4 py-10">
            {/* Hero блок */}
            <motion.div
                className="flex flex-col items-center text-center mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <ScalesIcon className="h-16 w-16 text-amber-600 dark:text-amber-300 mb-4" />
                <img
                    src="/natalia.jpg" // Путь к фото, можно положить в public/
                    alt="Наталия Галушко"
                    className="h-[75vw] w-[75vw] max-w-[400px] max-h-[400px]  rounded-full object-cover object-top mb-5 border-2 border-amber-400 shadow-lg"
                />
                <h1 className="text-5xl font-extrabold mb-2 text-black dark:text-zinc-50">
                    Наталия Галушко
                </h1>
                <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-xl">
                    Главный помощник главы Кировского суда — супергероиня ВПО, которая умеет всё: от документов до справедливости!
                </p>
            </motion.div>

            {/* История успеха */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto mb-16 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-4 text-black dark:text-zinc-50">
                    История успеха Наталии
                </h2>
                <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    Наталия — внутренняя перемещённая особа из Херсонщины, которая с улыбкой покинула оккупированные территории и начала жизнь заново в Кропивницком.
                </p>
                <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    Юридическое образование и поддержка службы занятости позволили ей устроиться секретарём суда, а затем стремительно взлететь по карьерной лестнице до Главного помощника главы суда.
                </p>
                <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    Пример показывает, что ВПО могут не только найти работу, но и стать настоящей легендой суда!
                </p>
            </motion.section>

            {/* Карьерная лестница */}
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-zinc-50">
                    Карьерная лестница супергероини
                </h2>
                <div className="flex flex-col gap-6">
                    {careerSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-4 bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md"
                        >
                            <span className="text-2xl">{step.emoji}</span>
                            <span className="font-semibold text-black dark:text-zinc-50">{step.title}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Грамота + юмористические приколюхи */}
            {/* Грамота + юмористические приколюхи */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative max-w-3xl mx-auto my-16 p-8 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-zinc-700 dark:to-zinc-800 shadow-2xl overflow-hidden"
            >
                {/* Фоновые иконки */}
                <div className="absolute top-0 left-0 opacity-10 rotate-12 animate-pulse-slow">
                    <ScalesIcon className="h-32 w-32 text-amber-400 dark:text-amber-600" />
                </div>
                <div className="absolute bottom-0 right-0 opacity-10 rotate-45 animate-pulse-slow">
                    <ScalesIcon className="h-32 w-32 text-amber-400 dark:text-amber-600" />
                </div>
                <div className="absolute top-0 right-0 opacity-5 animate-spin-slow">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Emblem_of_Ukraine.svg/1024px-Emblem_of_Ukraine.svg.png" alt="Герб Украины" className="h-20 w-20" />
                </div>

                {/* Грамота */}
                <motion.div
                    initial={{ scale: 0.8, rotate: -3, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    className="border-4 border-amber-400 rounded-xl p-6 bg-white dark:bg-zinc-900 text-center shadow-2xl relative z-10"
                >
                    <h3 className="text-3xl font-extrabold text-amber-600 dark:text-amber-300 mb-3 animate-bounce">
                        Здесь будет грамота
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-4">
                        За выдающиеся заслуги в покорении судебной бюрократии, смех и вдохновение коллег!
                    </p>
                    <div className="text-xl font-semibold text-amber-700 dark:text-amber-400">
                        ⏳ До публикации грамоты осталось: {timeLeft}
                    </div>
                </motion.div>

                {/* Юмористические достижения */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        "📈 Продвигается по карьерной лестнице быстрее, чем интернет-соединение",
                        "👩‍⚖️ Наталия — непобедимый магистр судебного хаоса",
                        "⚡ Бумаги сами выстраиваются в стопки, когда она входит в кабинет",
                        "💼 Секретарь? Заместитель? Главный помощник? Наталия — сразу всё вместе!",
                    ].map((text, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08, y: -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white dark:bg-zinc-700 p-5 rounded-xl shadow-xl text-center font-medium text-zinc-800 dark:text-zinc-200 cursor-default"
                        >
                            {text}
                        </motion.div>
                    ))}
                </div>
            </motion.section>


            <div className="text-center mt-16">
                {/* Кнопка для показа/скрытия */}
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="px-6 py-2 rounded-full bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 transition-colors"
                >
                    {!isVisible ? "Еще..." : "Спрятать прикол"}
                </button>

                {/* Скрытая секция */}
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6"
                        >
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Зоряна нервно курит в сторонке, наблюдая как Наталия покоряет вершины суда. 🚬😅
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
