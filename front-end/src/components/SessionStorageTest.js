import { Stomp } from '@stomp/stompjs';
import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import axios from 'axios';

const SessionStorageTest = () => {

    
      useEffect(() => {
        // Replace with your server URL
        const serverUrl = 'https://localhost:8080'; // Replace with your actual backend server URL
    
        // Replace with your authentication token or credentials
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const authToken = storedUser.accessToken; // Replace with your actual authentication token or credentials
    
        const socket = new SockJS(`${serverUrl}/ws`);
        const stompClient = Stomp.over(socket);
    
        // Add the authentication headers
        const headers = {
          'Authorization': `Bearer ${authToken}` // Assuming Bearer token authentication
        };
    
        stompClient.connect(headers, frame => {
          console.log('Connected to WebSocket:', frame);
    
          // Subscribe to the updates topic
          const subscription = stompClient.subscribe('/topic/updates', message => {
            const update = JSON.parse(message.body);
            console.log('Received update:', update);
            // Handle the update, e.g., update UI or perform actions based on the update
          });
    
          // Clean up the subscription and disconnect when the component unmounts
          return () => {
            subscription.unsubscribe();
            stompClient.disconnect();
            console.log('WebSocket disconnected');
          };
        }, error => {
          console.error('WebSocket connection error:', error);
        });
      }, []);
    
      return (
        <div>
          <h1>WebSocket Example</h1>
          {/* Add your UI components here */}
        </div>
      );
    };
    

export default SessionStorageTest;
