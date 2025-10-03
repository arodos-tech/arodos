# Chatbot Setup Instructions

## 1. Get Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

## 2. Configure Environment Variable
1. Open the `.env` file in your project root
2. Replace `your_gemini_api_key_here` with your actual API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

## 3. Install Dependencies (if needed)
The chatbot uses existing React dependencies. No additional packages required.

## 4. Start the Development Server
```bash
npm run dev
```

## 5. Test the Chatbot
- Look for the red chat button in the bottom-right corner
- Click it to open the chatbot
- Ask questions about Arodos Technologies like:
  - "What services do you offer?"
  - "Tell me about your CEO"
  - "What are your core principles?"
  - "How many projects have you completed?"

## Features
- ✅ Floating chat button
- ✅ Real-time messaging with Gemini AI
- ✅ Company-specific knowledge base
- ✅ Responsive design
- ✅ Loading states and error handling
- ✅ Smooth animations

## Troubleshooting
- If chatbot doesn't respond, check your API key in `.env`
- Make sure to restart the dev server after adding the API key
- Check browser console for any errors
hi