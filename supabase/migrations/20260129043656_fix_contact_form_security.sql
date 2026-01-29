/*
  # Fix Contact Form RLS Security

  1. Changes
    - Drop the overly permissive RLS policy
    - Create a new restrictive policy with validation checks
  
  2. Security Improvements
    - Validates that all required fields are not empty
    - Enforces reasonable length limits to prevent abuse
    - Validates email format using regex
    - Prevents submission of extremely large payloads
  
  3. Notes
    - Policy still allows anonymous submissions (required for contact forms)
    - But adds validation to prevent abuse and malicious submissions
*/

DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

CREATE POLICY "Validated contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(name)) >= 2 AND length(trim(name)) <= 100 AND
    length(trim(phone)) >= 10 AND length(trim(phone)) <= 20 AND
    length(trim(email)) >= 5 AND length(trim(email)) <= 255 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    length(trim(message)) >= 10 AND length(trim(message)) <= 2000
  );