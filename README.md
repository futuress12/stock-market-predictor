# Stock Market Predictor 📈

A modern, responsive web application that predicts stock market movements with real-time data feeds and comprehensive analysis.

## Features ✨

✅ **Price Direction Prediction** - AI-powered up/down predictions  
✅ **Specific Price Targets** - Calculated support & resistance levels  
✅ **Trend Analysis** - Multiple moving average indicators (7, 14, 30-day)  
✅ **Volatility Predictions** - Risk level assessment  
✅ **Real-time Data Feeds** - Live stock prices & intraday charts  
✅ **Beautiful UI** - Modern, clean design  
✅ **Mobile Responsive** - Perfect on all devices  
✅ **Live Charts** - Interactive price movement visualization  

## Tech Stack 🛠️

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Chart.js** - Data visualization
- **Lucide Icons** - Beautiful icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Cors** - Cross-origin handling

### APIs
- **Alpha Vantage** - Real-time stock data

## Getting Started 🚀

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- Free API key from Alpha Vantage

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/futuress12/stock-market-predictor.git
   cd stock-market-predictor
   ```

2. **Get API Key**
   - Visit [Alpha Vantage](https://www.alphavantage.co/api/)
   - Sign up for free
   - Copy your API key

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

5. **Environment Variables**
   - Create `.env` file in project root
   ```env
   PORT=5000
   NODE_ENV=development
   ALPHA_VANTAGE_API_KEY=your_api_key_here
   VITE_API_URL=http://localhost:5000
   ```

6. **Run Backend** (from backend folder)
   ```bash
   npm run dev
   ```

7. **Run Frontend** (from frontend folder in new terminal)
   ```bash
   npm run dev
   ```

8. **Access the App**
   - Open browser: http://localhost:3000

## Popular Stocks to Try
- **AAPL** - Apple
- **GOOGL** - Google
- **MSFT** - Microsoft
- **AMZN** - Amazon
- **TSLA** - Tesla
- **META** - Meta (Facebook)

## Important Notes ⚠️

1. **API Rate Limits** - Alpha Vantage free tier: 5 calls/min, 500/day
2. **Data Delay** - Stock data delayed by ~15 minutes
3. **Not Financial Advice** - Predictions for educational purposes only
4. **Accuracy** - Historical data-based, market conditions vary

## License 📄

MIT License

---

**Made with ❤️ by Stock Market Predictor Team**
