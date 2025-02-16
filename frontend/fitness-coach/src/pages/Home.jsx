import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* ... existing content ... */}
      
      <div className="ai-chat-button-container">
        <button 
          className="ai-chat-button"
          onClick={() => navigate('/fitness-ai')}
        >
          <span>Try Our AI Fitness Coach</span>
          <i className="fas fa-robot"></i>
        </button>
      </div>
    </div>
  );
};

export default Home; 