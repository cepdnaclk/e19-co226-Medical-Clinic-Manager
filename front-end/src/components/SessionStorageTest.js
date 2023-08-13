import React, { useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';


const SessionStorageTest = () => {

    useEffect(() => {
        const socket = new SockJS('http://localhost:8080/ws', { websocket: { credentials: 'include' } });
        const stompClient = Stomp.over(socket);
    
        stompClient.connect({}, () => {
            console.log('WebSocket connection established');
            stompClient.subscribe('/topic/refresh', (message) => {
                console.log('Refresh message received:', message.body);
                if (message.body === 'REFRESH') {
                    // Handle the refresh signal, e.g., by triggering a site reload
                    alert('update happens');
                    window.location.reload();
                }
            });
        });
    
        return () => {
            stompClient.disconnect();
            console.log('WebSocket connection closed');
        };
    }, []);    

}

export default SessionStorageTest;
