import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setTheme } from '../../redux/slice/ThemeSlice'; // Ensure setTheme is correctly imported
import { themes } from '../../content/Contents';

const MobileThemes = () => {
    return (
        <div className="flex sm:hidden justify-start bg-primary rounded-full h-5 w-5">
            <Tabs />
        </div>
    );
};

const Tabs = () => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);

    const handleSetSelected = (val) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }
        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit gap-2"
        >
            {TABS.map((t) => (
                <Tab
                    key={t.id}
                    selected={selected}
                    handleSetSelected={handleSetSelected}
                    tab={t.id}
                >
                    {/* {t.title} */}
                </Tab>
            ))}
            <AnimatePresence>
                {selected && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`border border-theme_border flex h-5 w-5 items-center hover:border-secondary gap-1 rounded-full px-1 py-1 text-sm transition-colors ${selected === tab
                ? "border-secondary"
                : ""
                }`}
        >
            <span>{children}</span>
        </button>
    );
};

const Content = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute -right-4 top-[calc(100%_+_24px)] rounded-lg border border-theme_border bg-theme_bg py-4 px-6"
        >
            <Bridge />
            <Nub selected={selected} />
            {TABS.map((t) => (
                <div className="overflow-hidden" key={t.id}>
                    {selected === t.id && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <t.Component />
                        </motion.div>
                    )}
                </div>
            ))}
        </motion.div>
    );
};

const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");
            if (!hoveredTab || !overlayContent) return;
            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-theme_border bg-theme_bg"
        />
    );
};

const themeModal = () => {
    const dispatch = useDispatch();
    const handleClick = (payload) => {
        dispatch(setTheme(payload));
    }
    return (
        <div className="flex justify-center items-center space-x-2">
            {themes && themes.map((theme) => (
                <button
                    key={theme.name}
                    className="rounded-full w-5 h-5 cursor-pointer"
                    style={{ backgroundColor: theme.color }}
                    onClick={() => handleClick(theme.name)}  // Ensure this is wrapped in an arrow function
                >
                </button>
            ))}
        </div>
    );
};

const TABS = [
    { title: "themeModal", Component: themeModal },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default MobileThemes;
