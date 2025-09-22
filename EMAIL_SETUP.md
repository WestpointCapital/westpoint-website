# Email Setup for Westpoint Website

## Environment Variables Required

### For Vercel Deployment (Backend API)
Add these environment variables in your Vercel dashboard:

```
RESEND_API_KEY=re_your_resend_api_key_here
FROM_EMAIL=noreply@westpoint.capital
FROM_NAME=Westpoint Form
TO_EMAIL=contact@westpoint.capital
EMAIL_SUBJECT=Website Form Submission
```

### For Local Development (Optional)
Create a `.env.local` file in the project root:

```
VITE_API_BASE_URL=http://localhost:3000
```

## How It Works

1. **Frontend**: Forms submit data to Vercel API routes
2. **Backend**: Vercel serverless functions handle Resend API calls
3. **Email**: Resend sends emails from the backend (no CORS issues)

## API Endpoints

- `POST /api/send-contact` - Contact form submissions
- `POST /api/send-partnership` - Partnership form submissions

## Testing

1. Deploy to Vercel
2. Set environment variables in Vercel dashboard
3. Test forms on the live site

The email functionality will work seamlessly once deployed to Vercel with the proper environment variables set.
