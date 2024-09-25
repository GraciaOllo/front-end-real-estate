import React from 'react';
import './Agent.css';

const agents = [
  {
    id: 1,
    name: 'Lisa Birdsong',
    rating: 4.8,
    reviews: 105,
    sales: '12 homes sold',
    image: '/path/to/image1.jpg'
  },
  {
    id: 2,
    name: 'Stephanie Funk',
    rating: 4.9,
    reviews: 92,
    sales: '18 homes sold',
    image: '/path/to/image2.jpg'
  },
  {
    id: 3,
    name: 'Shannon Patterson',
    rating: 4.8,
    reviews: 76,
    sales: '15 homes sold',
    image: '/path/to/image3.jpg'
  },
  {
    id: 4,
    name: 'Christie Cannon',
    rating: 4.9,
    reviews: 88,
    sales: '14 homes sold',
    image: '/path/to/image4.jpg'
  },
  {
    id: 5,
    name: 'Scott and Tammy Watson',
    rating: 4.7,
    reviews: 70,
    sales: '9 homes sold',
    image: '/path/to/image5.jpg'
  }
];

const Agent = () => {
  return (
    <div className="agent-page">
      <header className="agent-header">
        <h1>A great agent makes all the difference</h1>
        <p>Find a real estate agent who can guide you through the home buying or selling process with ease.</p>

        <div className="search-bar">
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="City, neighborhood, or ZIP code" />
          <button>Find an Agent</button>
        </div>
      </header>

      <section className="agent-listing">
        <h2>Real Estate Agents in Your Area</h2>

        <div className="agent-grid">
          {agents.map(agent => (
            <div key={agent.id} className="agent-card">
              <img src={agent.image} alt={agent.name} className="agent-photo" />
              <div className="agent-info">
                <h3>{agent.name}</h3>
                <p>Rating: {agent.rating} ({agent.reviews} reviews)</p>
                <p>{agent.sales}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="faq-section">
        <h3>Frequently asked questions</h3>
        <ul>
          <li>How to find a good real estate agent near me?</li>
          <li>How to pick a real estate agent?</li>
          <li>How to contact a real estate agent?</li>
          <li>What is the difference between an agent and a broker?</li>
        </ul>
      </footer>
    </div>
  );
};

export default Agent;
