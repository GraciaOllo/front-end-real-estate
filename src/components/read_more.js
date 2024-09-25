import React from 'react';
import './read_more.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const ReadMore = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle navigation to the Agent page
  const goToAgentPage = () => {
    navigate('/agent'); // This assumes your "Agent" page is mapped to the "/agent" route
  };

  return (
    <div className="sell-page">
      {/* Header Section */}
      <header className="sell-header">
        <div className="header-image"></div> {/* Placeholder for the header image */}
        <div className="header-content">
          <h1>Sell your home with confidence</h1>
          <p>TSF Consult is making it simpler to sell your home and move forward.</p>
        </div>
      </header>

      {/* Partner Agent Section */}
      <section className="sell-partner-agent">
        <h2>Sell with a TSF Consult partner agent or get a cash offer</h2>
        <p>
          TSF Consult helps you sell your home with ease, easily exploring your selling options below and
          getting personalized offers. You can also connect with a TSF Consult partner agent for more
          assistance.
        </p>

        <div className="options-container">
          <div className="option-box">
            <h3>Compare personalized options, no commitment required</h3>
            <input type="text" placeholder="Enter your address" />
          </div>
          <div className="option-box">
            <h3>You can sell directly to Opendoor hassle-free</h3>
            <p>Get an offer from our trusted partner, Opendoor, with no showings, and close when you’re ready.</p>
          </div>
          <div className="option-box">
            <h3>You can sell for more money with a TSF Consult partner agent</h3>
            <p>See how a TSF Consult partner agent can help sell your home faster and for more money than an instant cash sale.</p>
          </div>
        </div>
      </section>

      {/* Traditional Agent Section */}
      <section className="sell-traditional-agent">
        <h2>Sell traditionally with an agent</h2>
        <p>
          Not a member with TSF Consult yet? Explore options for working with an agent for staging support, prepping,
          listing, and finalizing your home sale.
        </p>

        <div className="agent-options">
          {/* Button with navigation to the Agent page */}
          <button className="cta-button" onClick={goToAgentPage}>Find an agent</button>
          <button className="cta-button">Learn more about TSF Consult's agent</button>
        </div>

        <div className="why-sell-section">
          <div className="why-sell">
            <h3>Why sell traditionally</h3>
            <ul>
              <li>Access to local market expertise</li>
              <li>Help with preparing and showing offers</li>
              <li>Guided support through the entire process</li>
            </ul>
          </div>
          <div className="how-sell">
            <h3>How to sell traditionally</h3>
            <p>
              Learn more about the process of selling your home with a partner agent. TSF Consult can connect
              you to highly experienced agents who will guide you through every step, ensuring a smooth transaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadMore;
