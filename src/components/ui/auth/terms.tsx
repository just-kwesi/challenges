import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Terms() {
  return (
    <p className="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our{' '}
      <Dialog>
        <DialogTrigger className="underline underline-offset-4 hover:text-primary">
          Terms of Service
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription className="">
              <ScrollArea className="h-[400px]  rounded-md border p-4 space-y-2">
                <div className="space-y-2 text-left">
                  <p>
                    <strong>1. Introduction</strong>
                  </p>
                  <p>
                    Welcome to our gaming video submission and voting platform!
                    By accessing and using our website, you agree to comply with
                    and be bound by the following terms and conditions. Please
                    review these terms carefully.
                  </p>
                  <p>
                    <strong>2. User Responsibilities</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      You must not upload, post, or transmit any video or
                      content that violates any law or infringes on the rights
                      of any third party.
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of
                      your account password and for all activities that occur
                      under your account.
                    </li>
                    <li>
                      You agree not to use the platform for any unlawful
                      purposes or to promote illegal activities.
                    </li>
                  </ul>
                  <p>
                    <strong>3. Account Registration and Management</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      You must provide accurate and complete information when
                      creating your account.
                    </li>
                    <li>
                      We reserve the right to suspend or terminate your account
                      if any information provided during registration is found
                      to be inaccurate or incomplete.
                    </li>
                  </ul>
                  <p>
                    <strong>4. Intellectual Property</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      Users retain all ownership rights to the videos they
                      submit but grant the platform a non-exclusive license to
                      use, distribute, and publicly display such videos.
                    </li>
                    <li>
                      The content provided by the platform, including text,
                      graphics, logos, and software, is owned by or licensed to
                      us and is subject to copyright and other intellectual
                      property rights under national and international laws.
                    </li>
                  </ul>
                  <p>
                    <strong>5. Disclaimers and Limitation of Liability</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      Our platform is provided on an &quot;as is&quot; and
                      &quot;as available&quot; basis. We disclaim all warranties
                      of any kind, whether express or implied.
                    </li>
                    <li>
                      We shall not be liable for any indirect, incidental,
                      special, consequential or punitive damages resulting from
                      your use of the platform.
                    </li>
                  </ul>
                  <p>
                    <strong>6. Dispute Resolution</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      Any disputes arising from the use of our platform will be
                      resolved through binding arbitration in accordance with
                      the rules of American Arbitration Association (AAA).
                    </li>
                  </ul>
                  <p>
                    <strong>7. Changes to Terms</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      We reserve the right to modify these terms at any time.
                      Your continued use of the platform after such changes will
                      constitute acknowledgment and agreement of the modified
                      terms.
                    </li>
                  </ul>
                  <p>
                    <strong>8. Contact Information</strong>
                  </p>
                  <p>
                    If you have any questions about these Terms of Service,
                    please contact us at [Your Contact Information].
                  </p>
                </div>
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>{' '}
      and{' '}
      <Dialog>
        <DialogTrigger className="underline underline-offset-4 hover:text-primary">
          Privacy Policy
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              <ScrollArea className="h-[400px]  rounded-md border p-4 space-y-2">
                <div className="space-y-2 text-left">
                  <p>
                    <strong>1. Introduction</strong>
                  </p>
                  <p>
                    At Klipped, we respect your privacy and are committed to
                    protecting your personal data. This Privacy Policy explains
                    our practices concerning the data we collect from you or
                    that you provide to us.
                  </p>
                  <p>
                    <strong>2. Use of Information</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      We collect and use your data to operate effectively and
                      provide you the best experiences with our platform. This
                      includes using data to improve our services and
                      personalize your experiences.
                    </li>
                    <li>
                      We also use your information to communicate with you about
                      your account and provide customer support.
                    </li>
                  </ul>
                  <p>
                    <strong>3. Information Sharing and Disclosure</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      We do not share personal information with companies,
                      organizations, or individuals outside of Klipped except in
                      the following cases:
                      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>With your consent.</li>
                        <li>
                          For legal reasons, such as to meet any applicable law,
                          regulation, legal process or enforceable governmental
                          request.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <strong>4. User Rights</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      You have the right to access, update, or delete the
                      information you have provided to us. You can do this by
                      logging into your account or contacting us directly.
                    </li>
                  </ul>
                  <p>
                    <strong>5. Data Security</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      We implement appropriate security measures to protect
                      against unauthorized access to or unauthorized alteration,
                      disclosure, or destruction of data.
                    </li>
                  </ul>
                  <p>
                    <strong>6. Third-Party Services</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      Our site may include links to other websites whose privacy
                      practices may differ from ours. If you submit personal
                      data to any of those sites, your information is governed
                      by their privacy policies.
                    </li>
                  </ul>
                  <p>
                    <strong>7. International Data Transfers</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      Information that we collect may be stored and processed in
                      and transferred between any of the countries in which we
                      operate to enable the use of the information in accordance
                      with this privacy policy.
                    </li>
                  </ul>
                  <p>
                    <strong>8. Changes to Privacy Policy</strong>
                  </p>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>
                      We may update this Privacy Policy to reflect changes to
                      our information practices. If we make any material
                      changes, we will notify you by email (sent to the e-mail
                      address specified in your account) or by means of a notice
                      on this Platform prior to the change becoming effective.
                    </li>
                  </ul>
                  <p>
                    <strong>9. Contact Information</strong>
                  </p>
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at [Your Contact Information].
                  </p>
                </div>
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      .
    </p>
  )
}
