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
        <CardTitle>Terms of Service</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-left">
          <span className="block">
            <strong>1. Introduction</strong>
          </span>
          <span>
            Welcome to our gaming video submission and voting platform! By
            accessing and using our website, you agree to comply with and be
            bound by the following terms and conditions. Please review these
            terms carefully.
          </span>
          <span className="block">
            <strong>2. User Responsibilities</strong>
          </span>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              You must not upload, post, or transmit any video or content that
              violates any law or infringes on the rights of any third party.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account password and for all activities that occur under your
              account.
            </li>
            <li>
              You agree not to use the platform for any unlawful purposes or to
              promote illegal activities.
            </li>
          </ul>
          <span className="block">
            <strong>3. Account Registration and Management</strong>
          </span>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              You must provide accurate and complete information when creating
              your account.
            </li>
            <li>
              We reserve the right to suspend or terminate your account if any
              information provided during registration is found to be inaccurate
              or incomplete.
            </li>
          </ul>
          <span className="block">
            <strong>4. Intellectual Property</strong>
          </span>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Users retain all ownership rights to the videos they submit but
              grant the platform a non-exclusive license to use, distribute, and
              publicly display such videos.
            </li>
            <li>
              The content provided by the platform, including text, graphics,
              logos, and software, is owned by or licensed to us and is subject
              to copyright and other intellectual property rights under national
              and international laws.
            </li>
          </ul>
          <span className="block">
            <strong>5. Disclaimers and Limitation of Liability</strong>
          </span>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Our platform is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. We disclaim all warranties of any kind,
              whether express or implied.
            </li>
            <li>
              We shall not be liable for any indirect, incidental, special,
              consequential or punitive damages resulting from your use of the
              platform.
            </li>
          </ul>
          <span className="block">
            <strong>6. Dispute Resolution</strong>
          </span>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Any disputes arising from the use of our platform will be resolved
              through binding arbitration in accordance with the rules of
              American Arbitration Association (AAA).
            </li>
          </ul>
          <span className="block">
            <strong>7. Changes to Terms</strong>
          </span>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              We reserve the right to modify these terms at any time. Your
              continued use of the platform after such changes will constitute
              acknowledgment and agreement of the modified terms.
            </li>
          </ul>
          <span className="block">
            <strong>8. Contact Information</strong>
          </span>
          <span className="block">
            If you have any questions about these Terms of Service, please
            contact us at upfromhere2024@gmail.com.
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
