import React from "react";

const Blogs = () => {
  return (
    <div className="px-2 md:px-[50px] lg:px-100 min-h-screen  flex items-start  my-12 flex-col">
      <h1 className="text-3xl font-bold font-mono text-gray-600 my-6 capitalize">
        1. difference between authorization and authentication?
      </h1>
      <p className="text-left text-sm text-gray-600 font-mono my-6">
        <span className="text-left text-xl text-gray-600 font-mono">
          Answer: <br />
        </span>
        <span className="text-xl font-mono font-bold">Authorization:</span>
        Authorization determines what resources a user can access. <br />
        Authorization works through settings that are implemented and maintained
        by the organization. <br />
        Authorization always takes place after authentication. <br />
        Once their level of access is authorized, employees and HR managers can
        access different levels of data based on the permissions set by the
        organization.
      </p>
      <p className="text-left text-sm text-gray-600 font-mono my-6">
        <span className="text-xl font-mono font-bold">Authentication:</span>
        Authorization determines what resources a user can access. <br />
        Authorization works through settings that are implemented and maintained
        by the organization. <br />
        Authorization always takes place after authentication. <br />
        Once their level of access is authorized, employees and HR managers can
        access different levels of data based on the permissions set by the
        organization.
      </p>
      <hr />
      <h1 className="text-3xl font-bold font-mono text-gray-600 my-6 capitalize">
        2. why you using firebase what others options do you have?
      </h1>
      <p className="text-left text-sm text-gray-600 font-mono my-6">
        <span className="text-left text-xl text-gray-600 font-mono">
          Answer: <br />
        </span>
        Google’s Firebase is an app development platform that’s used in
        building, improving, and growing mobile apps. The platform offers a
        collection of powerful tools that help you develop, handle, and enhance
        your apps based on demand. Developers are also able to shift their focus
        more on delivering robust app experiences for users, compared to the
        technical issues of the application. Some of the standout features
        you’ll find in Firebase include file storage, hosting, notifications,
        real-time databases, push messages, authentication, and analytics. The
        service is cloud-hosted, meaning developers can carry out on-demand
        scaling without hassles.
      </p>
      <hr />

      <h1 className="text-3xl font-bold font-mono text-gray-600 my-6 capitalize">
        2. what other service does firebase provide others the authentication??
      </h1>
      <p className="text-left text-sm text-gray-600 font-mono my-6">
        <span className="text-left text-xl text-gray-600 font-mono">
          Answer: <br />
        </span>
        Let’s move on to the next service – Authentication. Firebase provides
        authentication services for almost every major platform, which includes
        Google, Facebook, Twitter, Apple, Github, Microsoft, and Yahoo. Firebase
        provides authentication using email, password, and phone number using
        OTP, and it is also free!!! They charge a few bucks for OTP
        verification, but after ten thousand successful verifications per month.
        If you don’t have that much user base, you are good to go with free
        service, and if you have more users, we believe you can pay that amount.
        (wink wink) You can use the link below to set up the Firebase
        Authentication to your project.
      </p>
    </div>
  );
};

export default Blogs;
