import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <Card className="m-10">
      <Button variant="outline" className="ml-5 mt-5" asChild>
        <Link href="/">
          <HomeIcon className="mr-2 h-4 w-4" /> Home
        </Link>
      </Button>
      <CardHeader>
        <CardTitle>Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-left">
          <p>
            <strong>1. Introduction</strong>
          </p>
          <p>
            At Klipped, we respect your privacy and are committed to protecting
            your personal data. This Privacy Policy explains our practices
            concerning the data we collect from you or that you provide to us.
          </p>
          <p>
            <strong>2. Use of Information</strong>
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              We collect and use your data to operate effectively and provide
              you the best experiences with our platform. This includes using
              data to improve our services and personalize your experiences.
            </li>
            <li>
              We also use your information to communicate with you about your
              account and provide customer support.
            </li>
          </ul>
          <p>
            <strong>3. Information Sharing and Disclosure</strong>
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              We do not share personal information with companies,
              organizations, or individuals outside of Klipped except in the
              following cases:
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>With your consent.</li>
                <li>
                  For legal reasons, such as to meet any applicable law,
                  regulation, legal process or enforceable governmental request.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            <strong>4. User Rights</strong>
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              You have the right to access, update, or delete the information
              you have provided to us. You can do this by logging into your
              account or contacting us directly.
            </li>
          </ul>
          <p>
            <strong>5. Data Security</strong>
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              We implement appropriate security measures to protect against
              unauthorized access to or unauthorized alteration, disclosure, or
              destruction of data.
            </li>
          </ul>
          <p>
            <strong>6. Third-Party Services</strong>
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Our site may include links to other websites whose privacy
              practices may differ from ours. If you submit personal data to any
              of those sites, your information is governed by their privacy
              policies.
            </li>
          </ul>
          <p>
            <strong>7. International Data Transfers</strong>
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Information that we collect may be stored and processed in and
              transferred between any of the countries in which we operate to
              enable the use of the information in accordance with this privacy
              policy.
            </li>
          </ul>
          <p>
            <strong>8. Changes to Privacy Policy</strong>
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              We may update this Privacy Policy to reflect changes to our
              information practices. If we make any material changes, we will
              notify you by email (sent to the e-mail address specified in your
              account) or by means of a notice on this Platform prior to the
              change becoming effective.
            </li>
          </ul>
          <p>
            <strong>9. Contact Information</strong>
          </p>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at upfromhere2024@gmail.com.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
