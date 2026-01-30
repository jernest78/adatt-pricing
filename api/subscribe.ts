import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get email from request body
  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Get API key from environment variables
  const apiKey = process.env.LEMON_SQUEEZY_API_KEY;
  const storeId = '662169';

  if (!apiKey) {
    console.error('LEMON_SQUEEZY_API_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Call Lemon Squeezy API to create subscriber
    const response = await fetch('https://api.lemonsqueezy.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        data: {
          type: 'subscribers',
          attributes: {
            email: email,
            status: 'subscribed',
          },
          relationships: {
            store: {
              data: {
                type: 'stores',
                id: storeId,
              },
            },
          },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Lemon Squeezy API error:', data);
      
      // Handle specific error cases
      if (response.status === 422 && data.errors) {
        // Email might already be subscribed
        const errorMessage = data.errors[0]?.detail || 'Subscription failed';
        return res.status(400).json({ error: errorMessage });
      }
      
      return res.status(response.status).json({ 
        error: 'Failed to subscribe. Please try again.' 
      });
    }

    // Success
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      error: 'An unexpected error occurred. Please try again.' 
    });
  }
}
