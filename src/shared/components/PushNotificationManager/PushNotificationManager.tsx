'use client';

import { useState, useEffect } from 'react';

import { urlBase64ToUint8Array } from '@/shared/lib/urlBase64ToUint8Array';

import { subscribeUser, unsubscribeUser, sendNotification } from './actions';
import { SubTitle } from '../Typography';

async function getServiceWorkerReady() {
    return navigator.serviceWorker.ready;
}

export function PushNotificationManager() {
    const [isSupported, setIsSupported] = useState(false);
    const [subscription, setSubscription] = useState<PushSubscription | null>(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function registerServiceWorker() {
        try {
            const registration = await navigator.serviceWorker.register('/worker.js', {
                scope: '/pwa',
                updateViaCache: 'none',
            });
            const sub = await registration.pushManager.getSubscription();
            setSubscription(sub);
        } catch (error) {
            console.error('Service worker registration failed:', error);
        }
    }

    async function subscribeToPush() {
        setLoading(true);
        try {
            const registration = await getServiceWorkerReady();
            const sub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
                ),
            });
            setSubscription(sub);
            await subscribeUser(JSON.stringify(sub));
        } catch (error) {
            console.error('Subscription failed:', error);
        } finally {
            setLoading(false);
        }
    }

    async function unsubscribeFromPush() {
        setLoading(true);
        try {
            if (subscription) {
                await subscription.unsubscribe();
                setSubscription(null);
                await unsubscribeUser();
            }
        } catch (error) {
            console.error('Unsubscription failed:', error);
        } finally {
            setLoading(false);
        }
    }

    async function sendTestNotification() {
        if (!message.trim()) {
            return;
        }

        try {
            const { success } = await sendNotification(message);
            if (success) {
                setMessage('');
            }
        } catch (error) {
            console.error('Failed to send notification:', error);
        }
    }

    useEffect(() => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            setIsSupported(true);
            registerServiceWorker();
            subscribeToPush();
        }
    }, []);

    if (!isSupported) {
        return <p>Push notifications are not supported in this browser.</p>;
    }

    return (
        <div>
            <SubTitle>Push Notifications</SubTitle>
            {subscription ? (
                <>
                    <p>You are subscribed to push notifications.</p>
                    <button onClick={unsubscribeFromPush} type="button" disabled={loading}>
                        {loading ? 'Unsubscribing...' : 'Unsubscribe'}
                    </button>
                    <input
                        type="text"
                        placeholder="Enter notification message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        onClick={sendTestNotification}
                        type="button"
                        disabled={!message.trim() || loading}
                    >
                        {loading ? 'Sending...' : 'Send Test'}
                    </button>
                </>
            ) : (
                <>
                    <p>You are not subscribed to push notifications.</p>
                    <button onClick={subscribeToPush} type="button" disabled={loading}>
                        {loading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </>
            )}
        </div>
    );
}
