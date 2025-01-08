// src/chatbot.js

export function initializeBotpressWebChat() {
    // Ensure botpressWebChat script is loaded
    if (window.botpressWebChat) {
      window.botpressWebChat.init({
        botId: '10d8b291-a33c-4fbf-848a-2a736cacc36e',
        hostUrl: 'https://cdn.botpress.cloud',
        configUrl: 'https://files.bpcontent.cloud/2025/01/04/09/20250104093459-FJVHRJXT.json',
        closeButtonPosition: 'top-right',
        debugMode: true,
      });
  
      console.log('Botpress WebChat initialized:', window.botpressWebChat);
  
      const chatbotButton = document.getElementById('chatbotButton');
      if (chatbotButton) {
        chatbotButton.addEventListener('click', () => {
          console.log('Chatbot icon clicked!');
          setTimeout(() => {
            try {
              window.botpressWebChat.sendEvent({ type: 'show' });
            } catch (error) {
              console.error('Error opening chatbot:', error);
            }
          }, 1000);
        });
      } else {
        console.error('Chatbot button not found.');
      }
    } else {
      console.error('Botpress WebChat script not loaded correctly.');
    }
  }
  
  // Retry logic to ensure initialization happens even if scripts load slowly
  export function retryInitialization() {
    if (window.botpressWebChat) {
      initializeBotpressWebChat();
    } else {
      console.error('Botpress WebChat is not available. Retrying...');
      setTimeout(() => {
        initializeBotpressWebChat();
      }, 3000);
    }
  }
  