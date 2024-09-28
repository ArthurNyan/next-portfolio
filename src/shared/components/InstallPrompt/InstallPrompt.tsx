'use client';

import { useState, useEffect } from 'react';

export function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false);
    const [isMacOS, setIsMacOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        // Определяем iOS устройство
        setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream);

        // Определяем macOS
        setIsMacOS(/Macintosh/.test(navigator.userAgent));

        // Проверяем, если приложение уже установлено
        setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);

        // Обработчик для событий `beforeinstallprompt`
        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault(); // Отключаем стандартный диалог
            setDeferredPrompt(e);
            setIsInstallable(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                setDeferredPrompt(null);
            });
        }
    };

    if (!isStandalone || isMacOS) {
        return null;
    }

    return (
        <div>
            <h3>Install App</h3>
            {isInstallable && !isIOS && !isMacOS && (
                <button onClick={handleInstallClick} type="button">
                    Add to Home Screen
                </button>
            )}
            {isIOS && (
                <p>
                    To install this app on your iOS device, tap the share button
                    <span role="img" aria-label="share icon">
                        ⎋
                    </span>
                    and then Add to Home Screen.
                </p>
            )}
            {isMacOS && isInstallable && (
                <p>
                    To install this app on macOS, use the Install option in the Chrome menu (three
                    dots at the top-right corner).
                </p>
            )}
        </div>
    );
}
