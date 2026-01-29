Duval-Property-Services

## Environment Variables

This project requires the following environment variables to be set in a `.env` file:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

These variables are needed for the contact form submission feature. The application will still render without them, but the contact form will display a message asking visitors to call directly.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with your Supabase credentials

3. Start the development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```
