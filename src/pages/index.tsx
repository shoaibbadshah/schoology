import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Privacy Policy&nbsp;
          <code className="font-mono font-bold"></code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCHOOLOGY
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <text className="text-slate-300 text-justify">
          <a className="text-blue-600"> Notion-edu.com</a> built the Schoology
          app as a Free app. This SERVICE is provided by Notion-edu.com at no
          cost and is intended for use as is. This page is used to inform
          visitors regarding our policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use our
          Service. If you choose to use our Service, then you agree to the
          collection and use of information in relation to this policy. The
          Personal Information that we collect is used for providing and
          improving the Service. We will not use or share your information with
          anyone except as described in this Privacy Policy.
          <p>
            {' '}
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at Schoology unless
            otherwise defined in this Privacy Policy. Information Collection and
            Use For a better experience, while using our Service, we may require
            you to provide us with certain personally identifiable information.
            The information that we request will be retained by us and used as
            described in this privacy policy. The app does use third-party
            services that may collect information used to identify you. Link to
            the privacy policy of third-party service providers used by the app
            Google Play Services Log Data We want to inform you that whenever
            you use our Service, in a case of an error in the app we collect
            data and information (through third-party products) on your phone
            called Log Data. This Log Data may include information such as your
            device Internet Protocol (“IP”) address, device name, operating
            system version, the configuration of the app when utilizing our
            Service, the time and date of your use of the Service, and other
            statistics. Cookies Cookies are files with a small amount of data
            that are commonly used as anonymous unique identifiers. These are
            sent to your browser from the websites that you visit and are stored
            on your device's internal memory. This Service does not use these
            “cookies” explicitly. However, the app may use third-party code and
            libraries that use “cookies” to collect information and improve
            their services.{' '}
          </p>
          You have the option to either accept or refuse these cookies and know
          when a cookie is being sent to your device. If you choose to refuse
          our cookies, you may not be able to use some portions of this Service.
          Service Providers We may employ third-party companies and individuals
          due to the following reasons: To facilitate our Service; To provide
          the Service on our behalf; To perform Service-related services; or To
          assist us in analyzing how our Service is used. We want to inform
          users of this Service that these third parties have access to their
          Personal Information. The reason is to perform the tasks assigned to
          them on our behalf. However, they are obligated not to disclose or use
          the information for any other purpose. Security We value your trust in
          providing us your Personal Information, thus we are striving to use
          commercially acceptable means of protecting it. But remember that no
          method of transmission over the internet, or method of electronic
          storage is 100% secure and reliable, and we cannot guarantee its
          absolute security. Links to Other Sites This Service may contain links
          to other sites. If you click on a third-party link, you will be
          directed to that site. Note that these external sites are not operated
          by us. Therefore, we strongly advise you to review the Privacy Policy
          of these websites. We have no control over and assume no
          responsibility for the content, privacy policies, or practices of any
          third-party sites or services. Children’s Privacy These Services do
          not address anyone under the age of 13. We do not knowingly collect
          personally identifiable information from children under 13 years of
          age. In the case we discover that a child under 13 has provided us
          with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do the necessary actions. Changes to This
          Privacy Policy We may update our Privacy Policy from time to time.
          Thus, you are advised to review this page periodically for any
          changes. We will notify you of any changes by posting the new Privacy
          Policy on this page. This policy is effective as of 2024-05-14 Contact
          Us If you have any questions or suggestions about our Privacy Policy,
          do not hesitate to contact us at info@notion-edu.com.
        </text>
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
