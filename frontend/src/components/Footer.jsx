import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-purple-800 py-6 md:py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-2">About</h4>
            <p className="text-purple-200 text-sm">Stock Market Predictor provides real-time analysis and AI-powered predictions for stock market movements.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Disclaimer</h4>
            <p className="text-purple-200 text-sm">Predictions are for educational purposes only. Not financial advice. Always consult a financial advisor before investing.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Data Source</h4>
            <p className="text-purple-200 text-sm">Real-time data provided by Alpha Vantage API. Delayed by 15 minutes.</p>
          </div>
        </div>
        <div className="border-t border-purple-800 pt-6 text-center text-purple-300 text-sm">
          <p>&copy; 2024 Stock Market Predictor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
