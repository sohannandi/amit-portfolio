const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' })
    };
  }

  try {
    // In Netlify Functions, we need to redirect to the static file
    // Since the PDF is in your static files, we can redirect to it
    return {
      statusCode: 302,
      headers: {
        Location: '/Amit-Resume-21.pdf'
      }
    };
    
  } catch (error) {
    console.error('CV download error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        message: 'Server error. Please try again later.' 
      })
    };
  }
};