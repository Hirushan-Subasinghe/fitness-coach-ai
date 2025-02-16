import React, { useState } from 'react';
import ChatBot from '../components/ChatBot';  // Assuming your ChatBot component exists

const FitnessAI = () => {
  return (
    <div className="fitness-ai-container">
      <div className="fitness-ai-content">
        <h1>Fitness AI Assistant</h1>
        <p>Your personal AI fitness coach is here to help! Ask any questions about workouts, nutrition, or fitness goals.</p>
        
        <div className="chat-section">
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default FitnessAI; 